import { PROPERTY_CALL } from '../constants';

export default (statements, withName) => statements && statements.find(({ type, name }) => type === PROPERTY_CALL && name === withName);