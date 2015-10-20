'use strict';

import { SystemService } from '../services';

export function shutdown (req, res) {

  SystemService.shutdown()
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      res.status(400).send({ message: err.message });
    });

}

export function say (req, res) {

  SystemService.infos()
    .then(data => {
      if (data.system !== 'Darwin') { throw new Error('Not OSX.'); }
      if (!req.body.str) { throw new Error('No input.'); }
      return SystemService.say(req.body.str);
    })
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      res.status(400).send({ message: err.message });
    });

}

export function infos (req, res) {

  SystemService.infos()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send({ message: err.message });
    });

}
