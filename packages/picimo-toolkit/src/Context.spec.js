/* eslint-env browser */
/* eslint-env mocha */
/* eslint no-console: 0 */
import { expect } from 'chai';
import { get, omit } from 'lodash';

import {
  VODescriptor,
  IndexedPrimitive,
  ElementIndexArray,
} from '@picimo/core'; // eslint-disable-line

import { compile, Context } from '.';

describe('Context', () => {
  describe('compile()', () => {
    let ctx;

    before(() => {
      ctx = compile(`
        FOO = 42
        bar.plah = 23

        VertexObject myVertices {
          @vertexCount(4)

          position: uint32 {
            x [-FOO, FOO, 666, bar.plah ]
            y
          }
          rotate: uint16 @uniform 90.5
          foo @alias(rotate)
          bar(offset: 2, size: 8): uint8 @alias
        }

        Primitive TriQuads {
          @type(TRIANLGES)
          @generate

          stride 4
          offset 0

          indices [
            0, 1, 2,
            0, 2, 3,
          ]
        }

        SpriteGroup Sprites {
          @vertexObject(myVertices)
          @primitive(TriQuads)

          @vertexShader(VS)
          @fragmentShader(FS)

          @autotouch(off)
          @dynamic

          maxAllocVOSize 100

          textures {
            tex(nearest: no, repeatable: no) "foo.png"
            bar(flipY: yes) @atlas "plah.jpg"
          }

          myVertices {
            @doubleBuffer(off)
            @textured

            @setSize(fooBar)

            capacity 1000
          }
        }

      `);
      console.log('Context:compile', ctx);
    });

    it('returns an instance of Context', () => {
      expect(ctx).to.be.an.instanceOf(Context);
    });

    it('"FOO" option', () => {
      expect(ctx.readOption('FOO')).to.equal(42);
    });

    it('"bar.plah" option', () => {
      expect(ctx.readOption('bar.plah')).to.equal(23);
    });

    it('"myVertices" declaration', () => {
      expect(get(ctx.declaration, 'myVertices.declarationType')).to.equal('vertexobject');
    });

    it('"myVertices.voDescriptor" section', () => {
      expect(get(ctx.declaration, 'myVertices.voDescriptor')).to.deep.equal({
        vertexCount: 4,
        attributes: [
          {
            name: 'position',
            type: 'uint32',
            scalars: [
              'x',
              'y',
            ],
            size: 2,
          },
          {
            name: 'rotate',
            type: 'uint16',
            uniform: true,
          },
        ],
        aliases: {
          foo: 'rotate',
          bar: {
            name: 'bar',
            size: 8,
            offset: 2,
            type: 'uint8',
          },
        },
      });
    });

    it('"myVertices.voNew" section', () => {
      expect(get(ctx.declaration, 'myVertices.voNew')).to.deep.equal({
        rotate: 90.5,
        x0: -42,
        x1: 42,
        x2: 666,
        x3: 23,
      });
    });

    it('"TriQuads" declaration', () => {
      expect(omit(get(ctx.declaration, 'TriQuads'), ['_parsedTree'])).to.deep.equal({
        declarationType: 'primitive',
        primitiveType: 'TRIANLGES',
        generate: true,
        stride: 4,
        offset: 0,
        indices: [
          0,
          1,
          2,
          0,
          2,
          3,
        ],
      });
    });

    it('"Sprites" declaration', () => {
      expect(omit(get(ctx.declaration, 'Sprites'), ['_parsedTree'])).to.deep.equal({
        voDescriptor: 'myVertices',
        vertexShader: 'VS',
        fragmentShader: 'FS',
        primitive: 'TriQuads',
        usage: 'dynamic',
        autotouch: false,
        maxAllocVOSize: 100,
        textureMap: {
          tex: {
            hints: {
              repeatable: false,
              nearest: false,
            },
            src: 'foo.png',
            type: 'texture',
          },
          bar: {
            hints: {
              flipY: true,
            },
            src: 'plah.jpg',
            type: 'atlas',
          },
        },
        myVertices: {
          doubleBuffer: false,
          textured: true,
          setSize: 'fooBar',
          capacity: 1000,
        },
        declarationType: 'spritegroup',
      });
    });
  });

  describe('create()', () => {
    describe('VertexObject', () => {
      let ctx;
      let vod;

      before(() => {
        ctx = compile(`

          VertexObject MyVertices {
            @vertexCount(3)

            position {
              x
              y
            }
            rotate: uint16 @uniform
          }

        `, {

          MyVertices: {
            fooBar() {
              return this.x0 + 1234;
            },
          },
        });

        console.log('Context:create(VertexObject)', ctx);

        vod = ctx.create('MyVertices');
      });

      it('create an instance of VODescriptor', () => {
        expect(vod).to.be.an.instanceOf(VODescriptor);
        expect(vod.vertexCount).to.equal(3);
        expect(vod.hasAttribute('position', 2)).to.equal(true);
        expect(vod.hasAttribute('rotate', 1)).to.equal(true);
      });

      it('VODescriptor should get "proto" from Context.config', () => {
        const vo = vod.createVO();
        expect(vo.fooBar).to.be.a('function');

        vo.x0 = 1000;
        expect(vo.fooBar()).to.equal(2234);
      });
    });

    describe('Primitive', () => {
      let ctx;
      let primitive;

      before(() => {
        ctx = compile(`

          Primitive TriQuads {
            @type(TRIANGLES)
            @generate

            stride 4
            offset 0

            indices [
              0, 1, 2,
              0, 2, 3,
            ]
          }

        `);

        console.log('Context:create(TriQuads)', ctx);

        primitive = ctx.create('TriQuads', { capacity: 10 });
      });

      it('create a primitive from factory', () => {
        expect(primitive).to.be.an.instanceOf(IndexedPrimitive);
        expect(primitive.primitiveType).to.equal('TRIANGLES');
        expect(primitive.elementIndexArray).to.be.an.instanceOf(ElementIndexArray);
        expect(primitive.elementIndexArray.objectCount).to.equal(10);
      });
    });
  });
});
