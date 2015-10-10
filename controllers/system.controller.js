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
