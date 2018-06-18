/* eslint-env browser */
/* eslint-env mocha */
/* eslint no-console: 0 */
import { expect } from 'chai';

import {
  IndexedPrimitive,
  SpriteGroup,
  VODescriptor,
} from '@picimo/core'; // eslint-disable-line

import { compile } from '.';

describe('Context::SpriteGroup', () => {
  describe('create()', () => {
    let ctx;

    before(() => {
      ctx = compile(`

        VertexObject MyVertices {
          @vertexCount(4)

          position {
            x
            y
          }
          size {
            w
            h
          }
        }

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
      console.log('Context:create(SpriteGroup)', ctx);
    });

    it('create an instance of SpriteGroup', () => {
      const sg = ctx.compile(`

        SpriteGroup MySpriteGroup {
          @vertexObject(MyVertices)

          maxAllocVOSize 5
        }

      `).create('MySpriteGroup', { capacity: 9 });

      expect(sg).to.be.an.instanceOf(SpriteGroup);
      expect(sg.descriptor).to.be.an.instanceOf(VODescriptor);
      expect(sg.capacity).to.equal(9);
      expect(sg.voPool.maxAllocVOSize).to.equal(5);

      console.log('SpriteGroup', sg);
    });

    it('@setSize', () => {
      const fooBar = () => 0;
      const sg = ctx.compile(`

        SpriteGroup sprites1 {
          @vertexObject(MyVertices)

          capacity 10

          @setSize(fooBar)
        }

      `, {
        fooBar,
      }).create('sprites1');

      console.log('SpriteGroup(@setSize)', sg);

      expect(sg.spriteHook.setSize).to.equal(fooBar);
    });

    it('primitive', () => {
      const sg = ctx.compile(`

        SpriteGroup MySpriteGroup {
          @vertexObject(MyVertices)
          @primitive(TriQuads)

          maxAllocVOSize 5
        }

      `).create('MySpriteGroup', { capacity: 2 });

      console.log('SpriteGroup(@primitive)', sg);

      expect(sg).to.be.an.instanceOf(SpriteGroup);
      expect(sg.descriptor).to.be.an.instanceOf(VODescriptor);
      expect(sg.primitive).to.be.an.instanceOf(IndexedPrimitive);
    });
  });
});