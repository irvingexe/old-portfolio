import * as PIXI from "pixi.js/dist/pixi";

PIXI.utils.skipHello();
let color = { background: 0, brush: 0 };
let lines = [];
let cleaning = false;
let cancel;
let requests = [];
let mousePosition = { x: 0, y: 0 };
let brushSize =
  window.innerWidth < window.innerHeight
    ? window.innerWidth / 2.5
    : window.innerHeight / 2.5;

const app = new PIXI.Application({
  resizeTo: window,
  antialias: true,
  backgroundColor: 0xf2ebe3,
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

let gContainer = new PIXI.Container();
gContainer.addChild(brush);
gContainer.cacheAsBitmap = true;
gContainer.scale.set(0.5);
gContainer.filters = [blurFilter];

let imageToReveal = new PIXI.Sprite(PIXI.Texture.WHITE);
imageToReveal.tint = 0xd9c7ad;
stage.addChild(imageToReveal);
imageToReveal.width = app.screen.width;
imageToReveal.height = app.screen.height;

let rec = new PIXI.Sprite(PIXI.Texture.WHITE);
rec.tint = 0xf2ebe3;
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

export const repaint = (newColor) => {
  rec.destroy();
  rec = new PIXI.Sprite(PIXI.Texture.WHITE);
  rec.tint = newColor.background;
  stage.addChild(rec);
  rec.width = app.screen.width;
  rec.height = app.screen.height;
  rec.alpha = 0;
  color = newColor;
  clean();
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
      stage.addChild(rec);
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
      cancel = cancelAnimationFrame(i);
    });
    lines = [];
    gContainer.scale.x = 0;
    gContainer.scale.y = 0;
    rec.alpha = 1;

    //
    if (color.background) {
      app.renderer.backgroundColor = color.background;
      imageToReveal.destroy();
      imageToReveal = new PIXI.Sprite(PIXI.Texture.WHITE);
      imageToReveal.tint = color.brush;
      stage.addChild(imageToReveal);
      imageToReveal.width = app.screen.width;
      imageToReveal.height = app.screen.height;
      imageToReveal.mask = renderTextureSprite;
      color = { background: 0, brush: 0 };
    }
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
