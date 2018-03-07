import ShaderVariable from './ShaderVariable';

/**
 * Shader uniform variable.
 */
export default class ShaderUniformVariable extends ShaderVariable {
  /**
   * @param {string} name
   * @param {number|Object} value
   */
  constructor(name, value) {
    super(name, ShaderVariable.UNIFORM, value);
  }
}