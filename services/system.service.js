'use strict';

import q from 'q';
import { exec } from 'child_process';

/**
 * Shutdown the computer
 *
 * @returns {Promise}
 */
export function shutdown () {
  return q.nfcall(exec, 'shutdown -h now');
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
 * Mute volume. Works on OSX and Linux if using alsamixer
 *
 * @returns {Promise}
 */
export function mute () {
  return infos()
    .then(data => {
      if (['Darwin', 'Linux'].indexOf(data.system) === -1) { throw new Error('Not supported on Windows.'); }
      return data.system;
    })
    .then(system => {
      const cmds = {
        Linux: 'amixer sset "Master" 0%',
        Darwin: 'osascript -e "set Volume 0"'
      };
      return q.nfcall(exec, cmds[system]);
    });
}

/**
 * Say a string, only available in OSX
 *
 * @returns {Promise}
 */
export function say (str) {
  return infos()
    .then(data => {
      if (data.system !== 'Darwin') { throw new Error('Not OSX.'); }
      return q.nfcall(exec, `say ${str}`);
    });
}
