'use strict';

import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import mdns from 'mdns';

import routes from './routes';

const server = express();

server.use(bodyParser.json());
server.use(compression());

const router = express.Router();

routes(router);

server.use('/api', router);

server.listen(3000);

const ad = mdns.createAdvertisement(mdns.tcp('http'), 3000);
ad.start();

process.stdout.write('[Server listenning on port 3000.]\n');
