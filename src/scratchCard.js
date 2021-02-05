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
  backgroundColor: 0xcccccc,
});
const { stage } = app;

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
brush.width = brushSize;
brush.height = brushSize;

const imageToReveal = new PIXI.Sprite(PIXI.Texture.WHITE);
imageToReveal.tint = 0xaa945f;
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
    brush.position.set(position.x, position.y);
    app.renderer.render(brush, renderTexture, !lines.length, null, false);
    lines.push(position);
    if (lines.length === 200) {
      clean();
    }
  }
  mousePosition = position;
};

const clean = () => {
  cleaning = true;
  brush.scale.x += 0.1;
  brush.scale.y += 0.1;

  if (brush.scale.x > 0.1 * 30) {
    rec.alpha += 1 / 30;
  }
  if (brush.scale.x < 0.1 * 60) {
    requests.push(requestAnimationFrame(clean));
    app.renderer.render(brush, renderTexture, false, null, false);
  } else {
    requests.map((i) => {
      cancelAnimationFrame(i);
    });
    lines = [];
    rec.alpha = 1;
    brush.scale.x = 1;
    brush.scale.y = 1;
    brush.width = 0;
    brush.height = 0;
    resetBrush();
  }
};

const resetBrush = () => {
  if (brush.width < brushSize) {
    rec.alpha -= 0.06;
    brush.width += brushSize * 0.06;
    brush.height += brushSize * 0.06;
    brush.position.set(mousePosition.x, mousePosition.y);
    app.renderer.render(brush, renderTexture, true, null, false);
    requests.push(requestAnimationFrame(resetBrush));
  } else {
    requests.map((i) => {
      cancelAnimationFrame(i);
    });
    cleaning = false;
    brush.width = brushSize;
    brush.height = brushSize;
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
  brush.width = brushSize;
  brush.height = brushSize;
  rec.width = app.screen.width;
  rec.height = app.screen.height;

  renderTexture.resize(app.screen.width, app.screen.height, true);
  stage.addChild(renderTextureSprite);
};
