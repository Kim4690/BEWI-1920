(function (cjs, an) {

var p;
var lib = {}; var ss = {}; var img = {};

lib.ssMetadata = [
  {name:"BygTek_20V3_atlas_1", frames:[[0,1335,1888,336],[1116,1673,448,142],[579,1673,535,135],[0,1673,577,173],[0,0,2000,1333]]}
];

// Base
(lib.AnMovieClip = function(){
  this.actionFrames = [];
  this.ignorePause = false;
}).prototype = p = new cjs.MovieClip();

// Sprites
(lib.CachedBmp_5 = function(){ this.initialize(img.CachedBmp_5); }).prototype = p = new cjs.Bitmap();
(lib.CachedBmp_4 = function(){ this.initialize(ss["BygTek_20V3_atlas_1"]); this.gotoAndStop(0); }).prototype = p = new cjs.Sprite();
(lib.CachedBmp_3 = function(){ this.initialize(ss["BygTek_20V3_atlas_1"]); this.gotoAndStop(1); }).prototype = p = new cjs.Sprite();
(lib.CachedBmp_2 = function(){ this.initialize(ss["BygTek_20V3_atlas_1"]); this.gotoAndStop(2); }).prototype = p = new cjs.Sprite();
(lib.CachedBmp_1 = function(){ this.initialize(ss["BygTek_20V3_atlas_1"]); this.gotoAndStop(3); }).prototype = p = new cjs.Sprite();
(lib.LinkedFile = function(){ this.initialize(ss["BygTek_20V3_atlas_1"]); this.gotoAndStop(4); }).prototype = p = new cjs.Sprite();

// TEXT 1
(lib.text1 = function() {
  cjs.MovieClip.apply(this,[{}]);
  this.instance = new lib.CachedBmp_4();
  this.instance.setTransform(0,0,0.5,0.5);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));
}).prototype = p = new lib.AnMovieClip();

// TEXT 2
(lib.text2 = function() {
  cjs.MovieClip.apply(this,[{}]);
  this.instance = new lib.CachedBmp_5();
  this.instance.setTransform(0,0,0.5,0.5);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));
}).prototype = p = new lib.AnMovieClip();

// STAGE
(lib.Untitled1 = function() {
  cjs.MovieClip.apply(this,[{}]);

  // Background
  this.bg = new lib.LinkedFile();
  this.bg.setTransform(-13.75,-244.5,0.9709,0.9709);

  // Text1
  this.t1 = new lib.text1();
  this.t1.setTransform(561,180,1,1,0,0,0,472,84);
  this.t1.alpha = 0;

  // Text2
  this.t2 = new lib.text2();
  this.t2.setTransform(855,260,1,1,0,0,0,766,169);
  this.t2.alpha = 0;

  // CTA
  this.cta = new lib.CachedBmp_2();
  this.cta.setTransform(116,454,0.5,0.5);
  this.cta.alpha = 0;

  // Timeline
  this.timeline.addTween(
    cjs.Tween.get({})
      .to({state:[{t:this.bg}]})
      .to({state:[{t:this.bg},{t:this.t1}]},20)
      .to({state:[{t:this.bg},{t:this.t2}]},80)
      .to({state:[{t:this.bg},{t:this.t2},{t:this.cta}]},140)
      .wait(60)
  );

}).prototype = p = new lib.AnMovieClip();

// Properties
lib.properties = {
  id: '18A209EB448844418D59406351C547B6',
  width: 1920,
  height: 600,
  fps: 30,
  manifest: [
    {src:"images/CachedBmp_5.png", id:"CachedBmp_5"},
    {src:"images/BygTek_20V3_atlas_1.png", id:"BygTek_20V3_atlas_1"}
  ]
};

// Stage
(lib.Stage = function(canvas) {
  createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

// Composition
an.compositions = an.compositions || {};
an.compositions['18A209EB448844418D59406351C547B6'] = {
  getLibrary: function(){ return lib; },
  getSpriteSheet: function(){ return ss; },
  getImages: function(){ return img; }
};

an.getComposition = function(id) {
  return an.compositions[id];
};

// Bootstrap
an.bootcompsLoaded = [];
an.bootstrapListeners = [];

an.bootstrapCallback = function(fn){
  an.bootstrapListeners.push(fn);
};

an.compositionLoaded = function(id){
  an.bootcompsLoaded.push(id);
  an.bootstrapListeners.forEach(fn => fn(id));
};

// READY
an.compositionLoaded('18A209EB448844418D59406351C547B6');

})(window.createjs = window.createjs||{}, window.AdobeAn = window.AdobeAn||{});
