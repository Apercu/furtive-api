'use strict';

import { MpvCtrl, SysCtrl } from './controllers';

export default function (router) {

  router.put('/mpv/pause', MpvCtrl.pause);
  router.put('/mpv/play', MpvCtrl.play);
  router.get('/mpv/infos', MpvCtrl.infos);

  router.get('/system/infos', SysCtrl.infos);
  router.put('/system/say', SysCtrl.say);
  router.put('/system/mute', SysCtrl.mute);
  router.put('/system/shutdown', SysCtrl.shutdown);

}
