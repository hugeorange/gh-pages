window.__require=function t(e,o,n){function r(c,s){if(!o[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var p="function"==typeof __require&&__require;if(!s&&p)return p(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var u=o[c]={exports:{}};e[c][0].call(u.exports,function(t){return r(e[c][1][t]||t)},u,u.exports,t,e,o,n)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<n.length;c++)r(n[c]);return r}({Game:[function(t,e,o){"use strict";cc._RF.push(e,"0486fOqHrJN+6c5PQg5FHh9","Game");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./Player"),c=t("./ScoreFX"),s=t("./Star"),a=cc._decorator,p=a.ccclass,u=a.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.starPrefab=null,e.scoreFXPrefab=null,e.maxStarDuration=0,e.minStarDuration=0,e.ground=null,e.player=null,e.scoreDisplay=null,e.scoreAudio=null,e.btnNode=null,e.gameOverNode=null,e.controlHintLabel=null,e.keyboardHint="",e.touchHint="",e.groundY=0,e.currentStar=null,e.currentStarX=0,e.timer=0,e.starDuration=0,e.isPlaying=!1,e.starPool=null,e.scorePool=null,e.score=0,e}return n(e,t),e.prototype.onLoad=function(){this.groundY=this.ground.y+this.ground.height/2,this.currentStar=null,this.currentStarX=0,this.timer=0,this.starDuration=0,this.isPlaying=!1;var t=cc.sys.isMobile?this.touchHint:this.keyboardHint;this.controlHintLabel.string=t,this.starPool=new cc.NodePool("Star"),this.scorePool=new cc.NodePool("ScoreFX")},e.prototype.onStartGame=function(){this.resetScore(),this.isPlaying=!0,this.btnNode.x=3e3,this.gameOverNode.active=!1,this.player.startMoveAt(cc.v2(0,this.groundY)),this.spawnNewStar()},e.prototype.spawnNewStar=function(){var t=null;t=this.starPool.size()>0?this.starPool.get(this):cc.instantiate(this.starPrefab),this.node.addChild(t),t.setPosition(this.getNewStarPosition()),t.getComponent(s.default).init(this),this.startTimer(),this.currentStar=t},e.prototype.despawnStar=function(t){this.starPool.put(t),this.spawnNewStar()},e.prototype.startTimer=function(){this.starDuration=this.minStarDuration+Math.random()*(this.maxStarDuration-this.minStarDuration),this.timer=0},e.prototype.getNewStarPosition=function(){var t,e=this.groundY+Math.random()*this.player.getComponent("Player").jumpHeight+50,o=this.node.width/2;return t=2*(Math.random()-.5)*o,cc.v2(t,e)},e.prototype.gainScore=function(t){this.score+=1,this.scoreDisplay.string="Score: "+this.score.toString();var e=this.spawnScoreFX();this.node.addChild(e.node),e.node.setPosition(t),e.play(),cc.audioEngine.play(this.scoreAudio,!1,1)},e.prototype.resetScore=function(){this.score=0,this.scoreDisplay.string="Score: "+this.score.toString()},e.prototype.spawnScoreFX=function(){var t;return this.scorePool.size()>0?(t=this.scorePool.get()).getComponent(c.default):((t=cc.instantiate(this.scoreFXPrefab).getComponent(c.default)).init(this),t)},e.prototype.despawnScoreFX=function(t){this.scorePool.put(t)},e.prototype.update=function(t){this.isPlaying&&(this.timer>this.starDuration?this.gameOver():this.timer+=t)},e.prototype.gameOver=function(){this.gameOverNode.active=!0,this.player.enabled=!1,this.player.stopMove(),this.currentStar.destroy(),this.isPlaying=!1,this.btnNode.x=0},r([u({type:cc.Prefab})],e.prototype,"starPrefab",void 0),r([u({type:cc.Prefab})],e.prototype,"scoreFXPrefab",void 0),r([u],e.prototype,"maxStarDuration",void 0),r([u],e.prototype,"minStarDuration",void 0),r([u({type:cc.Node})],e.prototype,"ground",void 0),r([u({type:i.default})],e.prototype,"player",void 0),r([u({type:cc.Label})],e.prototype,"scoreDisplay",void 0),r([u({type:cc.AudioClip})],e.prototype,"scoreAudio",void 0),r([u({type:cc.Node})],e.prototype,"btnNode",void 0),r([u({type:cc.Node})],e.prototype,"gameOverNode",void 0),r([u({type:cc.Label})],e.prototype,"controlHintLabel",void 0),r([u({multiline:!0})],e.prototype,"keyboardHint",void 0),r([u({multiline:!0})],e.prototype,"touchHint",void 0),e=r([p],e)}(cc.Component);o.default=h,cc._RF.pop()},{"./Player":"Player","./ScoreFX":"ScoreFX","./Star":"Star"}],Player:[function(t,e,o){"use strict";cc._RF.push(e,"c10bbPdGYhDWaLoKLV38bHf","Player");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.jumpHeight=0,e.jumpDuration=0,e.squashDuration=0,e.maxMoveSpeed=0,e.accel=0,e.jumpAudio=null,e.accLeft=!1,e.accRight=!1,e.xSpeed=0,e.minPosX=0,e.maxPosX=0,e.jumpAction=null,e}return n(e,t),e.prototype.onLoad=function(){this.enabled=!1,this.minPosX=-this.node.parent.width/2,this.maxPosX=this.node.parent.width/2,this.jumpAction=this.runJumpAction(),this.setInputControl()},e.prototype.setInputControl=function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this),this.node.parent.on(cc.Node.EventType.TOUCH_START,this.onTouchBegan,this),this.node.parent.on(cc.Node.EventType.TOUCH_END,this.onTouchEnded,this)},e.prototype.onKeyDown=function(t){switch(t.keyCode){case cc.macro.KEY.a:case cc.macro.KEY.left:this.accLeft=!0,this.accRight=!1;break;case cc.macro.KEY.d:case cc.macro.KEY.right:this.accLeft=!1,this.accRight=!0}},e.prototype.onKeyUp=function(t){switch(t.keyCode){case cc.macro.KEY.a:case cc.macro.KEY.left:this.accLeft=!1;break;case cc.macro.KEY.d:case cc.macro.KEY.right:this.accRight=!1}},e.prototype.onTouchBegan=function(t){return t.getLocation().x>=cc.winSize.width/2?(this.accLeft=!1,this.accRight=!0):(this.accLeft=!0,this.accRight=!1),!0},e.prototype.onTouchEnded=function(t){this.accLeft=!1,this.accRight=!1},e.prototype.runJumpAction=function(){var t=cc.tween().by(this.jumpDuration,{y:this.jumpHeight},{easing:"sineOut"}),e=cc.tween().by(this.jumpDuration,{y:-this.jumpHeight},{easing:"sineIn"}),o=cc.tween().to(this.squashDuration,{scaleX:1,scaleY:.6}),n=cc.tween().to(this.squashDuration,{scaleX:1,scaleY:1.2}),r=cc.tween().to(this.squashDuration,{scaleX:1,scaleY:1}),i=cc.tween().sequence(o,n,t,r,e).call(this.playJumpSound,this);return cc.tween().repeatForever(i)},e.prototype.playJumpSound=function(){cc.audioEngine.playEffect(this.jumpAudio,!1)},e.prototype.getCenterPos=function(){return cc.v2(this.node.x,this.node.y+this.node.height/2)},e.prototype.startMoveAt=function(t){this.enabled=!0,this.xSpeed=0,this.node.setPosition(t);var e=this.runJumpAction();cc.tween(this.node).then(e).start()},e.prototype.stopMove=function(){this.node.stopAllActions()},e.prototype.update=function(t){this.accLeft?this.xSpeed-=this.accel*t:this.accRight&&(this.xSpeed+=this.accel*t),Math.abs(this.xSpeed)>this.maxMoveSpeed&&(this.xSpeed=this.maxMoveSpeed*this.xSpeed/Math.abs(this.xSpeed)),this.node.x+=this.xSpeed*t,this.node.x>this.node.parent.width/2?(this.node.x=this.node.parent.width/2,this.xSpeed=0):this.node.x<-this.node.parent.width/2&&(this.node.x=-this.node.parent.width/2,this.xSpeed=0)},r([s],e.prototype,"jumpHeight",void 0),r([s],e.prototype,"jumpDuration",void 0),r([s],e.prototype,"squashDuration",void 0),r([s],e.prototype,"maxMoveSpeed",void 0),r([s],e.prototype,"accel",void 0),r([s({type:cc.AudioClip})],e.prototype,"jumpAudio",void 0),e=r([c],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],ScoreAnim:[function(t,e,o){"use strict";cc._RF.push(e,"b1f9e88YHdGr7qD17shtr2w","ScoreAnim");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator.ccclass,c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.scoreFX=null,e}return n(e,t),e.prototype.init=function(t){this.scoreFX=t},e.prototype.hideFX=function(){this.scoreFX.despawn()},e=r([i],e)}(cc.Component);o.default=c,cc._RF.pop()},{}],ScoreFX:[function(t,e,o){"use strict";cc._RF.push(e,"dd18c67pr9OM5wJb/yY6Onf","ScoreFX");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim=null,e.game=null,e}return n(e,t),e.prototype.init=function(t){this.game=t,this.anim.getComponent("ScoreAnim").init(this)},e.prototype.despawn=function(){this.game.despawnScoreFX(this.node)},e.prototype.play=function(){this.anim.play("score_pop")},r([s({type:cc.Animation})],e.prototype,"anim",void 0),e=r([c],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],Star:[function(t,e,o){"use strict";cc._RF.push(e,"21890Xr4RBJlqTJhmXJ/f5s","Star");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.pickRadius=0,e.game=null,e}return n(e,t),e.prototype.onLoad=function(){this.enabled=!1},e.prototype.init=function(t){this.game=t,this.enabled=!0,this.node.opacity=255},e.prototype.reuse=function(t){this.init(t)},e.prototype.getPlayerDistance=function(){var t=this.game.player.getCenterPos();return this.node.position.sub(t).mag()},e.prototype.onPicked=function(){var t=this.node.getPosition();this.game.gainScore(t),this.game.despawnStar(this.node)},e.prototype.update=function(t){if(this.getPlayerDistance()<this.pickRadius)this.onPicked();else{var e=1-this.game.timer/this.game.starDuration;this.node.opacity=50+Math.floor(205*e)}},r([s],e.prototype,"pickRadius",void 0),e=r([c],e)}(cc.Component);o.default=a,cc._RF.pop()},{}]},{},["Game","Player","ScoreAnim","ScoreFX","Star"]);