'use strict';

import q from 'q';
import { exec } from 'child_process';

/**
 * Shutdown the computer
 *
 * @returns {Promise}
 */
export function shutdown () {
  return q.nfcall(exec, 'shutdown now');
}

/**
 * Get basic informations
 * - uname
 *
 * @returns {Promise}
 */
export function infos () {
  return q.nfcall(exec, 'uname')
    .then(data => {
      return { system: data[0].trim() };
    });
}

/**
 * Say a string, only available in OSX
 *
 * @returns {Promise}
 */
export function say (str) {
  return q.nfcall(exec, `say ${str}`);
}
