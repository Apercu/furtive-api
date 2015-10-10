'use strict';

import q from 'q';
import _ from 'lodash';
import { exec } from 'child_process';

/**
 * Pause the player
 *
 * @returns {Promise}
 */
export function pause () {
  return cmd('set_property', 'pause', true);
}

/**
 * Resume the player
 *
 * @returns {Promise}
 */
export function play () {
  return cmd('set_property', 'pause', false);
}

/**
 * Get basic info about mpv status.
 *
 * @returns {Promise}
 */
export function infos () {

  return q.all([
    getProp('pause'),
    getProp('duration'),
    getProp('time-pos'),
    getProp('time-remaining')
  ])
  .then(data => {
    return _.mapValues(_.indexBy(data, 'name'), 'data');
  });
}

function build (name, one, two) {
  const command = [name, one];
  if (!_.isUndefined(two)) { command.push(two); }
  return `echo '{ "command": ${JSON.stringify(command)} }' | socat - /tmp/mpvsocket`;
}

function cmd (name, one, two) {
  return q.nfcall(exec, build(name, one, two));
}

function getProp (name) {
  return cmd('get_property', name)
    .then(data => {
      return { name, data: JSON.parse(data[0]).data };
    });
}
