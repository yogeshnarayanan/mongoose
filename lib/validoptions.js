
/*!
 * Valid mongoose options
 */

'use strict';

const VALID_OPTIONS = Object.freeze([
  'applyPluginsToChildSchemas',
  'applyPluginsToDiscriminators',
  'autoCreate',
  'autoIndex',
  'bufferCommands',
  'bufferTimeoutMS',
  'cloneSchemas',
  'debug',
  'maxTimeMS',
  'objectIdGetter',
  'overwriteModels',
  'returnOriginal',
  'runValidators',
  'selectPopulatedPaths',
  'setDefaultsOnInsert',
  'strict',
  'toJSON',
  'toObject',
  'typePojoToMixed',
  'useCreateIndex',
  'useNewUrlParser',
  'usePushEach',
  'useUnifiedTopology'
]);

module.exports = VALID_OPTIONS;
