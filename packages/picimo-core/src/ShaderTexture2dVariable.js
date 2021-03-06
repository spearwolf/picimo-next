import ShaderVariable from './ShaderVariable';

/**
 * Shader texture 2d variable.
 * @private
 */
export default class ShaderTexture2dVariable extends ShaderVariable {
  /**
   * @param {string} name
   * @param {number|Object} value
   */
  constructor(name, value) {
    super(name, ShaderVariable.TEXTURE_2D, value);

    /**
     * @type {Texture}
     */
    this.texture = null;
  }
}
