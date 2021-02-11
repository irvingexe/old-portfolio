import * as PIXI from "pixi.js/dist/pixi";

PIXI.utils.skipHello();
let lines = [];
let cleaning = false;
let requests = [];
let mousePosition = { x: 0, y: 0 };
let brushSize =
  window.innerWidth < window.innerHeight
    ? window.innerWidth / 2.5
    : window.innerHeight / 2.5;

const app = new PIXI.Application({
  resizeTo: window,
  antialias: true,
  backgroundColor: 0xf4f4f4,
});
const { stage } = app;

var blurFilter = new PIXI.filters.BlurFilter();
blurFilter.blur = 1;

const brush = new PIXI.Graphics();
brush.beginFill(0xffffff);
brush.drawCircle(
  0,
  0,
  window.innerWidth < window.innerHeight
    ? window.innerWidth / 2
    : window.innerHeight / 2
);
brush.endFill();
brush.width = brushSize * 2;
brush.height = brushSize * 2;
brush.position.x = brushSize;
brush.position.y = brushSize;

var gContainer = new PIXI.Container();
gContainer.addChild(brush);
gContainer.cacheAsBitmap = true;
gContainer.scale.set(0.5);
gContainer.filters = [blurFilter];

const imageToReveal = new PIXI.Sprite(PIXI.Texture.WHITE);
imageToReveal.tint = 0xcdba8d;
stage.addChild(imageToReveal);
imageToReveal.width = app.screen.width;
imageToReveal.height = app.screen.height;

const rec = new PIXI.Sprite(PIXI.Texture.WHITE);
rec.tint = 0xe3dcd2;
stage.addChild(rec);
rec.width = app.screen.width;
rec.height = app.screen.height;
rec.alpha = 0;

const renderTexture = PIXI.RenderTexture.create(
  app.screen.width,
  app.screen.height
);

const renderTextureSprite = new PIXI.Sprite(renderTexture);
stage.addChild(renderTextureSprite);
imageToReveal.mask = renderTextureSprite;

export const create = () => {
  document.querySelector("#background :first-child").appendChild(app.view);
};

export const pointerMove = (position) => {
  if (!cleaning) {
    gContainer.position.set(
      position.x - gContainer.width / 2,
      position.y - gContainer.width / 2
    );
    app.renderer.render(gContainer, renderTexture, !lines.length, null, false);
    lines.push(position);
    if (lines.length === 200) {
      clean();
    }
  }
  mousePosition = position;
};

const clean = () => {
  cleaning = true;
  gContainer.scale.x += 0.1;
  gContainer.scale.y += 0.1;
  gContainer.position.set(
    mousePosition.x - gContainer.width / 2,
    mousePosition.y - gContainer.width / 2
  );

  if (gContainer.scale.x > 0.1 * 30 + 0.5) {
    rec.alpha += 1 / 30;
  }
  if (gContainer.scale.x < 0.1 * 60 + 0.5) {
    requests.push(requestAnimationFrame(clean));
    app.renderer.render(gContainer, renderTexture, false, null, false);
  } else {
    requests.map((i) => {
      cancelAnimationFrame(i);
    });
    lines = [];
    rec.alpha = 1;
    gContainer.scale.x = 0;
    gContainer.scale.y = 0;
    resetBrush();
  }
};

const resetBrush = () => {
  if (gContainer.scale.x < 0.5) {
    rec.alpha -= 0.06;
    gContainer.scale.x += 0.03;
    gContainer.scale.y += 0.03;
    gContainer.position.set(
      mousePosition.x - gContainer.width / 2,
      mousePosition.y - gContainer.width / 2
    );
    app.renderer.render(gContainer, renderTexture, true, null, false);
    requests.push(requestAnimationFrame(resetBrush));
  } else {
    requests.map((i) => {
      cancelAnimationFrame(i);
    });
    cleaning = false;
    gContainer.scale.x = 0.5;
    gContainer.scale.y = 0.5;
    rec.alpha = 0;
    pointerMove({ x: mousePosition.x, y: mousePosition.y });
  }
};

export const resize = () => {
  lines = [];
  stage.children.forEach((e) => {
    stage.removeChild(e);
  });
  stage.addChild(imageToReveal);
  stage.addChild(rec);
  imageToReveal.width = app.screen.width;
  imageToReveal.height = app.screen.height;
  brushSize =
    window.innerWidth < window.innerHeight
      ? window.innerWidth / 2.5
      : window.innerHeight / 2.5;
  brush.width = brushSize * 2;
  brush.height = brushSize * 2;
  brush.position.x = brushSize;
  brush.position.y = brushSize;
  rec.width = app.screen.width;
  rec.height = app.screen.height;

  gContainer.destroy();
  gContainer = new PIXI.Container();
  gContainer.addChild(brush);
  gContainer.cacheAsBitmap = true;
  gContainer.scale.set(0.5);
  gContainer.filters = [blurFilter];

  renderTexture.resize(app.screen.width, app.screen.height, true);
  stage.addChild(renderTextureSprite);
};
