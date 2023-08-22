import {logger} from '../../old-project-code/logger.mjs';

export const handler = async (event) => {
  logger.info('Hello World', event);
  return 'END';
};
