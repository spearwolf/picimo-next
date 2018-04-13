import ShaderTextureGroup from './ShaderTextureGroup';
import SpriteGroup from './SpriteGroup';
import TextureLibrary from './TextureLibrary';
import readOption from './readOption';

export default class TexturedSpriteGroup extends SpriteGroup {
  constructor(descriptor, primitiveFactory, options = {}) {
    super(descriptor, primitiveFactory, options);

    this.textureLibrary = readOption(options, 'textureLibrary', () => new TextureLibrary());

    this.spriteHook.setTexCoordsByTexture = options.setTexCoordsByTexture || ((sprite, texture) => sprite.setTexCoordsByTexture(texture));

    this.textures = Object.assign({}, options.textures);
    this.shaderTextureGroup = null;
  }

  setTexture(sampler, textureId) {
    if (this.textures[sampler] !== textureId) {
      this.textures[sampler] = textureId;
      this.shaderTextureGroup = null;
    }
  }

  loadTextureAtlas(sampler, url, textureAtlasOptions) {
    this.setTexture(sampler, url);
    return this.textureLibrary.loadTextureAtlas(url, url, textureAtlasOptions);
  }

  getTexture(sampler) {
    return this.textureLibrary.getTexture(this.textures[sampler]);
  }

  getTextureAtlas(sampler) {
    return this.textureLibrary.getTextureAtlas(this.textures[sampler]);
  }

  whenTexturesLoaded(callback) {
    if (!this.shaderTextureGroup) {
      this.shaderTextureGroup = new ShaderTextureGroup(this.textureLibrary, this.textures);
    }

    this.shaderTextureGroup.whenLoaded(callback);
  }

  /**
   * @param {Texture} [texture]
   * @param {number} [width]
   * @param {number} [height=width]
   */
  createSprite(texture, width, height) {
    let w;
    let h;
    if (texture && width === undefined) {
      w = texture.width;
      h = texture.height;
    } else {
      w = width;
      h = height;
    }

    const sprite = super.createSprite(w, h);

    if (texture) {
      this.spriteHook.setTexCoordsByTexture(sprite, texture);
    }

    return sprite;
  }
}
