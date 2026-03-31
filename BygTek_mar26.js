(function (cjs, an) {

var p;
var lib = {}; var ss = {}; var img = {};

lib.ssMetadata = [
	{name:"BygTek_20V3_atlas_1", frames: [[0,1335,1888,336],[1116,1673,448,142],[579,1673,535,135],[0,1673,577,173],[0,0,2000,1333]]}
];

// MovieClip base
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
}).prototype = p = new cjs.MovieClip();

// Sprites
(lib.CachedBmp_5 = function() { this.initialize(img.CachedBmp_5); }).prototype = p = new cjs.Bitmap();
(lib.CachedBmp_4 = function() { this.initialize(ss["BygTek_20V3_atlas_1"]); this.gotoAndStop(0); }).prototype = p = new cjs.Sprite();
(lib.CachedBmp_3 = function() { this.initialize(ss["BygTek_20V3_atlas_1"]); this.gotoAndStop(1); }).prototype = p = new cjs.Sprite();
(lib.CachedBmp_2 = function() { this.initialize(ss["BygTek_20V3_atlas_1"]); this.gotoAndStop(2); }).prototype = p = new cjs.Sprite();
(lib.CachedBmp_1 = function() { this.initialize(ss["BygTek_20V3_atlas_1"]); this.gotoAndStop(3); }).prototype = p = new cjs.Sprite();
(lib.LinkedFile = function() { this.initialize(ss["BygTek_20V3_atlas_1"]); this.gotoAndStop(4); }).prototype = p = new cjs.Sprite();

// 🔥 ORIGINAL STAGE (bevar animation!)
(lib.Untitled1 = function(mode,startPosition,loop,reversed) {
	cjs.MovieClip.apply(this,[{}]);

	this.instance = new lib.LinkedFile();
	this.instance.setTransform(-13.75,-244.5,0.9709,0.9709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

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
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.getComposition = function(id) {
	return an.compositions[id];
};

// Bootstrap
an.bootcompsLoaded = an.bootcompsLoaded || [];
an.bootstrapListeners = an.bootstrapListeners || [];

an.bootstrapCallback = function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if (an.bootcompsLoaded.length > 0) {
		for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for (var j = 0; j < an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
};

// 🔥 RESPONSIVE (DEN KORREKTE!)
(function () {

  function setupResponsive() {

    var canvas = document.querySelector("canvas");
    if (!canvas) return;

    var stage = canvas.stage || window.stage;
    if (!stage) return;

    var w = 1920;
    var h = 600;

    function resizeCanvas() {

      var iw = window.innerWidth;
      var scale = iw / w;

      canvas.width = w;
      canvas.height = h;

      canvas.style.width = iw + "px";
      canvas.style.height = (h * scale) + "px";

      stage.scaleX = scale;
      stage.scaleY = scale;

      stage.update();
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    console.log("✅ 1920 banner responsive virker");

  }

  var tries = 0;
  var interval = setInterval(function () {

    var canvas = document.querySelector("canvas");
    var stage = canvas && (canvas.stage || window.stage);

    if (stage) {
      setupResponsive();
      clearInterval(interval);
    }

    tries++;
    if (tries > 30) clearInterval(interval);

  }, 200);

})();

// 🔥 SIGNAL READY
an.compositionLoaded('18A209EB448844418D59406351C547B6');

})(window.createjs = window.createjs||{}, window.AdobeAn = window.AdobeAn||{});
