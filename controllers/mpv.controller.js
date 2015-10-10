'use strict';

import { MpvService } from '../services';

export function pause (req, res) {

  MpvService.pause()
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      res.status(400).send({ message: err.message });
    });

}

export function play (req, res) {

  MpvService.play()
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      res.status(400).send({ message: err.message });
    });

}

export function infos (req, res) {

  MpvService.infos()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send({ message: err.message });
    });

}
