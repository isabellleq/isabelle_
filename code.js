var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sam = createSprite(20,190,13,13);
var coche4 = createSprite(286,240,20,20);
var coche3 = createSprite(116,150,20,20);
var coche2 = createSprite(172,232,20,20);
var coche1 = createSprite(222,144,20,20);
var limite2 = createSprite(190,260,420,3);
var limite1 = createSprite(190,120,420,3);
coche1.shapeColor ="pink"
coche2.shapeColor="pink"
coche3.shapeColor="pink"
coche4.shapeColor="pink"
sam.shapeColor="purple"

coche1.velocityY=4
coche2.velocityY=-4
coche3.velocityY=4
coche4.velocityY=-4
var marcador=0





function draw() {
background("white");
if(keyDown("RIGHT")){
  sam.x=sam.x+2;
}
if(keyDown("LEFT")){
  sam.x=sam.x-2;
}
if(keyDown("DOWN_ARROW")){
  sam.y=sam.y+2;
  
}

if(keyDown("UP_ARROW")){
  sam.y=sam.y+2;
}

coche1.bounceOff(limite1);
coche1.bounceOff(limite2);
coche2.bounceOff(limite1);
coche2.bounceOff(limite2);
coche3.bounceOff(limite1);
coche3.bounceOff(limite2);
coche4.bounceOff(limite1);
coche4.bounceOff(limite2);
sam.bounceOff(limite1);
sam.bounceOff(limite2);

text("marcador"+marcador,100,100);

if(sam.isTouching(coche1)){
  sam.x=20;
  sam.y=190;
  marcador=marcador+1;
}
if(sam.isTouching(coche2)){
  sam.x=20;
  sam.y=190;
  marcador=marcador+1;
}
if(sam.isTouching(coche3)){
  sam.x=20;
  sam.y=190;
  marcador=marcador+1;
}

if(sam.isTouching(coche4)){
  sam.x=20;
  sam.y=190;
  marcador=marcador+1;
}





drawSprites();
        
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
