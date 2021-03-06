(function(g){var window=this;'use strict';var L6=function(a){g.V.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.je=!1;this.player=a;this.T(a,"minimized",this.Zf);this.T(a,"onStateChange",this.UG)},M6=function(a){g.DM.call(this,a);
this.i=new L6(this.player);this.i.hide();g.qM(this.player,this.i.element,4);a.Pe()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(L6,g.V);g.k=L6.prototype;
g.k.JE=function(){this.tooltip=new g.hQ(this.player,this);g.I(this,this.tooltip);g.qM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.yc=new g.wN(this.player);g.I(this,this.yc);this.Fg=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.I(this,this.Fg);this.Fg.Da(this.element);this.T(this.Fg.element,"click",this.yA);var a=new g.V({G:"button",Ja:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Fechar"},U:[g.tK()]});g.I(this,a);a.Da(this.Fg.element);this.T(a.element,"click",this.Mi);
a=new g.Z1(this.player,this);g.I(this,a);a.Da(this.Fg.element);this.Ip=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.I(this,this.Ip);this.Ip.Da(this.Fg.element);this.T(this.Ip.element,"click",this.yA);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,b);b.Da(this.Ip.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.I(this,a);a.Da(this.Ip.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,c);c.Da(this.Ip.element);this.DN=new g.WO(this.player,
this,!1);g.I(this,this.DN);this.DN.Da(b.element);b=new g.UO(this.player,this);g.I(this,b);b.Da(a.element);this.nextButton=new g.WO(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.Da(c.element);this.Ig=new g.TP(this.player,this);g.I(this,this.Ig);this.Ig.Da(this.Fg.element);this.Lc=new g.cP(this.player,this);g.I(this,this.Lc);g.qM(this.player,this.Lc.element,4);this.mA=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.I(this,this.mA);g.qM(this.player,this.mA.element,4);a=new g.V({G:"button",
Ja:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Fechar"},U:[g.tK()]});g.I(this,a);a.Da(this.mA.element);this.T(a.element,"click",this.Mi);a=new g.V({G:"button",Ja:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Fechar"},U:[g.yK()]});g.I(this,a);a.Da(this.mA.element);this.T(a.element,"click",this.cW);this.T(this.player,"presentingplayerstatechange",this.Pc);this.T(this.player,"appresize",this.yb);this.T(this.player,"fullscreentoggled",this.yb);this.yb()};
g.k.show=function(){this.Pd=new g.Yw(this.wq,null,this);this.Pd.start();this.je||(this.JE(),this.je=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Lc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Pd&&(this.Pd.dispose(),this.Pd=void 0);g.V.prototype.hide.call(this);this.player.Pe()||(this.je&&this.Lc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Pd&&(this.Pd.dispose(),this.Pd=void 0);g.V.prototype.ya.call(this)};
g.k.Mi=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.cW=function(){this.player.playVideo()};
g.k.yA=function(a){if(a.target===this.Fg.element||a.target===this.Ip.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.wJ(this.player.Ab())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.k.Zf=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.Pe())};
g.k.Ad=function(){this.Lc.Tb();this.Ig.Tb()};
g.k.wq=function(){this.Ad();this.Pd&&this.Pd.start()};
g.k.Pc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.yb=function(){g.pP(this.Lc,0,this.player.bb().getPlayerSize().width,!1);g.dP(this.Lc)};
g.k.UG=function(a){this.player.Pe()&&(0===a?this.hide():this.show())};
g.k.lc=function(){return this.tooltip};
g.k.Ve=function(){return!1};
g.k.yf=function(){return!1};
g.k.Gi=function(){return!1};
g.k.lB=function(){};
g.k.Dn=function(){};
g.k.Bs=function(){};
g.k.Rn=function(){return null};
g.k.Bj=function(){return new g.$m(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Dq=function(a,b,c,d,e){var f=0,h=d=0,l=g.tn(a);if(b){c=g.ts(b,"ytp-prev-button")||g.ts(b,"ytp-next-button");var m=g.ts(b,"ytp-play-button"),n=g.ts(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.rn(b,this.element),h=b.x,f=b.y-12):n&&(h=g.ts(b,"ytp-miniplayer-button-top-left"),f=g.rn(b,this.element),b=g.tn(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.ug(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.vl=function(){};
g.k.Kk=function(){return!1};g.v(M6,g.DM);M6.prototype.create=function(){};
M6.prototype.Yi=function(){return!1};
M6.prototype.load=function(){this.player.hideControls();this.i.show()};
M6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.CM("miniplayer",M6);})(_yt_player);
