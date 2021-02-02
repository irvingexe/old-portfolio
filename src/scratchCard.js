import * as PIXI from "pixi.js/dist/pixi";

let lines = [];
let cleaning = false;
let requests = [];
let mousePosition = { x: 0, y: 0 };

const app = new PIXI.Application({
  resizeTo: window,
  antialias: true,
  backgroundColor: 0xe3dcd2,
});
const { stage } = app;

const brush = new PIXI.Graphics();
brush.beginFill(0xffffff);
brush.drawRoundedRect(0, 0, 300, 300, 150);
brush.endFill();

const imageToReveal = new PIXI.Sprite(PIXI.Texture.WHITE);
imageToReveal.tint = 0xbd8958;
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
  brush.scale.x += 0.25;
  brush.scale.y += 0.25;

  if (brush.scale.x > 0.25 * 30) {
    rec.alpha += 1 / 30;
  }
  if (brush.scale.x < 0.25 * 60) {
    requests.push(requestAnimationFrame(clean));
    app.renderer.render(brush, renderTexture, false, null, false);
  } else {
    requests.map((i) => {
      cancelAnimationFrame(i);
    });
    lines = [];
    rec.alpha = 1;
    brush.scale.x = 0;
    brush.scale.y = 0;
    resetBrush();
    //cleaning = false;
    //brush.scale.x = 1;
    //brush.scale.y = 1;
    //pointerMove({ x: mousePosition.x, y: mousePosition.y });
  }
};

const resetBrush = () => {
  if (brush.scale.x < 1) {
    rec.alpha -= 0.05;
    brush.scale.x += 0.08;
    brush.scale.y += 0.08;
    brush.position.set(mousePosition.x, mousePosition.y);
    app.renderer.render(brush, renderTexture, true, null, false);
    requests.push(requestAnimationFrame(resetBrush));
  } else {
    requests.map((i) => {
      cancelAnimationFrame(i);
    });
    cleaning = false;
    brush.scale.x = 1;
    brush.scale.y = 1;
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
  imageToReveal.width = app.screen.width;
  imageToReveal.height = app.screen.height;

  renderTexture.resize(app.screen.width, app.screen.height, true);
  stage.addChild(renderTextureSprite);
};
