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
