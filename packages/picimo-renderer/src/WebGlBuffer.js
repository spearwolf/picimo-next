
export default class WebGlBuffer {
  /**
   * @param {WebGlContext} glx - The *webgl* context
   * @param {string} target - The *buffer target* (`ARRAY_BUFFER` or `ELEMENT_ARRAY_BUFFER`)
   * @param {string} usage - *usage* hint (`STATIC_DRAW` or `DYNAMIC_DRAW')
   * @param {TypedArray} [typedArray] - The buffer content as *typed array*
   */
  constructor(glx, target, usage, typedArray) {
    this.glx = glx;

    const { gl } = glx;
    this.target = gl[target];
    this.usage = gl[usage];
    this.typedArray = typedArray;

    /** @private */
    this.clonedTypedArray = undefined;
    /** @private */
    this.lastTypedArray = undefined;

    this.glBuffer = gl.createBuffer();
  }

  bindBuffer() {
    this.glx.bindBuffer(this.target, this.glBuffer);
  }

  /**
   * Upload array buffer content to gpu via `g.bufferData(..)`.
   *
   * @param {TypedArray} [typedArray] - The buffer content as *typed array*. If unspecified use the `typedArray` from the *contructor* call.
   */
  bufferData(typedArray) {
    this.bindBuffer();
    this.glx.gl.bufferData(this.target, typedArray || this.typedArray, this.usage);
  }

  /**
   * Upload array buffer content to gpu via `gl.bufferData(..)`.
   * This has the same `outcome` as `bufferData(typedData)` but before the call
   * to `gl.bufferData()` the *typed array* will be cloned (*double buffering*).
   *
   * @param {TypedArray} [typedArray] - The buffer content as *typed array*. If unspecified use the `typedArray` from the *contructor* call.
   */
  doubleBufferData(typedArray) {
    const arr = typedArray || this.typedArray;
    if (this.clonedTypedArray === undefined || arr !== this.lastTypedArray) {
      this.clonedTypedArray = new arr.constructor(arr.length);
      this.clonedTypedArray.set(arr);
      this.lastTypedArray = arr;
    } else {
      this.clonedTypedArray.set(arr);
    }
    this.bufferData(this.clonedTypedArray);
  }

  deleteBuffer() {
    this.glx.gl.deleteBuffer(this.glBuffer);
  }
}

WebGlBuffer.ARRAY_BUFFER = 'ARRAY_BUFFER';
WebGlBuffer.ELEMENT_ARRAY_BUFFER = 'ELEMENT_ARRAY_BUFFER';

WebGlBuffer.STATIC_DRAW = 'STATIC_DRAW';
WebGlBuffer.DYNAMIC_DRAW = 'DYNAMIC_DRAW';
