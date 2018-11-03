import Realm from 'realm';

import repository from './repositoryDB';
import { options } from './allSchemas';

export default repository(Realm, options);
