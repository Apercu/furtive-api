'use strict';

import { MpvCtrl, SysCtrl } from './controllers';

export default function (router) {

  router.get('/mpv/pause', MpvCtrl.pause);
  router.get('/mpv/play', MpvCtrl.play);
  router.get('/mpv/infos', MpvCtrl.infos);

  router.get('/system/shutdown', SysCtrl.shutdown);

}
