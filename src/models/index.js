// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { KFOOD } = initSchema(schema);

export {
  KFOOD
};