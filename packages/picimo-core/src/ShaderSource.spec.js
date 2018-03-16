/* eslint-env jest */
/* eslint no-console: 0 */
import { assert } from 'chai';

import ShaderSource from './ShaderSource';

describe('ShaderSource', () => {
  it('create vertex shader source', () => {
    const source = ShaderSource.vertexShader({ id: 'foo' })`
      attribute vec2 position;
      uniform mat4 viewMatrix;

      ${({ tool }) => tool.rotate('rotateZ', 0.0, 0.0, 1.0)}

      void main(void)
      {
        mat4 rotationMatrix = rotateZ(rotate);
        gl_Position = viewMatrix * (rotationMatrix * vec4(position.xy, 0, 1.0));
      }
    `;
    assert.instanceOf(source, ShaderSource);
    const compiledSource = source.compile();
    console.groupCollapsed('VERTEX SHADER');
    console.log(compiledSource);
    console.groupEnd();
    assert.strictEqual(source.id, 'foo');
    assert.strictEqual(source.type, ShaderSource.VERTEX_SHADER);
    assert.isTrue(compiledSource.indexOf('mat4(c, -s, 0.0, 0.0, s, c, 0.0, 0.0, 0.0, 0.0, oc + c, 0.0, 0.0, 0.0, 0.0, 1.0)') >= 0);
  });

  it('create fragment shader source', () => {
    const source = ShaderSource.fragmentShader()`
      precision mediump float;

      varying vec4 vTextureCoordScaleOpacity;
      uniform sampler2D tex;

      void main(void) {
        gl_FragColor = vTextureCoordScaleOpacity.z * texture2D(tex, vec2(vTextureCoordScaleOpacity.s, vTextureCoordScaleOpacity.t));
      }
    `;
    assert.instanceOf(source, ShaderSource);
    const compiledSource = source.compile();
    console.groupCollapsed('FRAGMENT SHADER');
    console.log(compiledSource);
    console.groupEnd();
    assert.isAbove(source.id.length, 0);
    assert.strictEqual(source.type, ShaderSource.FRAGMENT_SHADER);
    assert.isTrue(compiledSource.indexOf('gl_FragColor =') >= 0);
  });

  it('create and include partials', () => {
    const partial = ShaderSource.partial()`
      vec4 ${({ bar }) => bar}(float x)
      {
        return vec4(x, 0, 0, 0);
      }
    `;

    const source = ShaderSource.fragmentShader({ bar: 'foo' })`
      precision mediump float;
      uniform sampler2D tex;

      ${partial}

      void main(void) {
        gl_FragColor = vTextureCoordScaleOpacity.z * texture2D(tex, vec2(vTextureCoordScaleOpacity.s, vTextureCoordScaleOpacity.t));
      }
    `;
    assert.instanceOf(source, ShaderSource);
    const compiledSource = source.compile();
    console.groupCollapsed('PARTIAL INCLUDED SHADER');
    console.log(compiledSource);
    console.groupEnd();
    assert.isAbove(source.id.length, 0);
    assert.strictEqual(source.type, ShaderSource.FRAGMENT_SHADER);
    assert.isTrue(compiledSource.indexOf('vec4 foo') >= 0);
  });
});