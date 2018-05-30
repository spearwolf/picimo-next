import get from 'lodash/get';
import compact from 'lodash/compact';

import { VODescriptor } from '@picimo/core'; // eslint-disable-line

import findPropertyCall from './findPropertyCall';
import findNamedArgument from './findNamedArgument';

import {
  DATA,
  DATA_BLOCK,
} from '../constants';

/** @private */
const DEFAULT_ATTR_TYPE = 'float32';


/** @private */
const create = ({ declaration, options }) => {
  const vod = new VODescriptor(Object.assign({}, declaration.voDescriptor, options));
  return vod;
};


/** @private */
const transform = (parsedTree) => {
  const voNew = {};

  const parseVoNewDefaults = (name, value) => {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach((val, idx) => {
          voNew[`${name}${idx}`] = val;
        });
      } else {
        voNew[name] = value;
      }
    }
  };

  const aliases = {};
  const out = {
    _parsedTree: parsedTree,
    voDescriptor: {
      vertexCount: get(findPropertyCall(parsedTree.data, 'vertexCount'), 'args[0]'),
      attributes: compact(parsedTree.data.filter(({ type }) => type === DATA || type === DATA_BLOCK).map((statement) => {
        const aliasAnnotation = findPropertyCall(statement.annotations, 'alias');
        if (aliasAnnotation && aliasAnnotation.args && typeof aliasAnnotation.args[0] === 'string') {
          aliases[statement.name] = aliasAnnotation.args[0];  // eslint-disable-line
          return null;
        }
        const attr = {
          name: statement.name,
        };
        if (statement.type === DATA) {
          attr.type = statement.valueType || DEFAULT_ATTR_TYPE;
          findNamedArgument(statement.args, 'size', (size) => {
            attr.size = size;
          });
        } else if (statement.type === DATA_BLOCK) {
          attr.type = statement.dataType || DEFAULT_ATTR_TYPE;
          attr.scalars = statement.data.filter(({ type }) => type === DATA).map(({ name, value }) => {
            parseVoNewDefaults(name, value);
            return name;
          });
          attr.size = attr.scalars.length;
        }
        if (findPropertyCall(statement.annotations, 'uniform')) {
          attr.uniform = true;
        }
        parseVoNewDefaults(statement.name, statement.value);
        if (aliasAnnotation) {
          findNamedArgument(statement.args, 'offset', (offset) => {
            attr.offset = offset;
          });
          aliases[statement.name] = attr;  // eslint-disable-line
          return null;
        }
        return attr;
      })),
    },
  };
  if (Object.keys(aliases).length) {
    out.voDescriptor.aliases = aliases;
  }
  if (Object.keys(voNew).length) {
    out.voNew = voNew;
  }
  return out;
};

export {
  create,
  transform,
};
