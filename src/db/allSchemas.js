import Realm from 'realm';

import databaseOptions from './databaseOptions';
import * as Schemas from './emotionalRecognitonSchema';

const options = databaseOptions([
  ...Schemas 
], 2);

export default new Realm(options);