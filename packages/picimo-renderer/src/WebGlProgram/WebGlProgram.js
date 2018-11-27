/* eslint no-param-reassign: 0 */
import loglevel from 'loglevel';

import WebGlUniform from './WebGlUniform';
import WebGlAttribute from './WebGlAttribute';

const log = loglevel.getLogger('picimo.renderer.WebGlProgram');

/** @private */
function createAttributes(program) {
  const { gl } = program.glx;
  const len = gl.getProgramParameter(program.glProgram, gl.ACTIVE_ATTRIBUTES);

  program.attributes = {};
  program.attributeNames = [];
  program.attributeLocations = [];

  for (let i = 0; i < len; ++i) {
    const attrib = new WebGlAttribute(program, i);
    program.attributes[attrib.name] = attrib;
    program.attributeNames.push(attrib.name);
    program.attributeLocations.push(attrib.location);
  }
}

/** @private */
function createUniforms(program) {
  const { gl } = program.glx;
  const len = gl.getProgramParameter(program.glProgram, gl.ACTIVE_UNIFORMS);

  program.uniforms = {};
  program.uniformNames = [];

  for (let i = 0; i < len; ++i) {
    const uniform = new WebGlUniform(program, i);
    program.uniforms[uniform.name] = uniform;
    program.uniformNames.push(uniform.name);
  }
}

/** @private */
function linkProgram(program, vertexShader, fragmentShader) {
  const { gl } = program.glx;
  const { glProgram } = program;

  gl.attachShader(glProgram, vertexShader);
  gl.attachShader(glProgram, fragmentShader);

  gl.linkProgram(glProgram);

  if (!gl.getProgramParameter(glProgram, gl.LINK_STATUS)) {
    throw new Error('WebGlProgram: link panic!');
  }
}

export default class WebGlProgram {
  constructor(glx, vertexShader, fragmentShader) {
    this.glx = glx;

    this.vertexShader = vertexShader;
    this.fragmentShader = fragmentShader;

    const { gl } = glx;
    this.glProgram = gl.createProgram();

    linkProgram(this, this.vertexShader.glShader, this.fragmentShader.glShader);
    // TODO gl.deleteShader?

    createUniforms(this);
    createAttributes(this);
  }

  /**
   * @return {boolean} success
   */
  use() {
    const { glx } = this;
    if (glx.useProgram(this.glProgram)) {
      glx.enableVertexAttribArrays(this.attributeLocations);
      return true;
    }
    return false;
  }

  /**
   * @param {ShaderContext} shaderContext
   * @param {WebGlRenderer} renderer
   * @return {boolean} success
   */
  loadUniforms(shaderContext, renderer) {
    let success = true;
    this.uniformNames.forEach((name) => {
      let shaderVar = shaderContext.curUniform(name);
      if (shaderVar == null) {
        shaderVar = shaderContext.curTex2d(name);
        if (shaderVar) {
          const { texture } = shaderVar;
          if (texture) {
            // Sync texture to gpu and update `.data` with the *gl texture unit*.
            shaderVar.data = renderer.syncTexture(texture).bind();
          }
        } else {
          log.error('WebGlProgram: could not load uniform:', name);
          success = false;
          return;
        }
      }
      this.uniforms[name].setValue(shaderVar.data);
    });
    return success;
  }

  /**
   * sync buffer before load
   *
   * @param {ShaderContext} shaderContext
   * @param {WebGlRenderer} renderer
   * @return {boolean} success
   */
  loadAttributes(shaderContext, renderer) {
    let success = true;
    this.attributeNames.forEach((name) => {
      const attrib = shaderContext.curAttrib(name);
      if (attrib) {
        const attribValue = attrib.data;
        renderer.syncBuffer(attribValue).bindBuffer();
        this.attributes[name].vertexAttribPointer(attribValue.descriptor);
      } else {
        log.error('WebGlProgram: could not load attribute:', name);
        success = false;
      }
    });
    return success;
  }
}
