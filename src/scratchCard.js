import * as PIXI from "pixi.js/dist/pixi";

let lines = [];
let cleaning = false;
let requests = [];

const app = new PIXI.Application({
  resizeTo: window,
  antialias: true,
  backgroundColor: 0xe7dcce,
});
const { stage } = app;

const brush = new PIXI.Graphics();
brush.beginFill(0xffffff);
brush.drawCircle(0, 0, 150);
brush.endFill();

const imageToReveal = new PIXI.Sprite(PIXI.Texture.WHITE);
imageToReveal.tint = 0xbd8958;
stage.addChild(imageToReveal);
imageToReveal.width = app.screen.width;
imageToReveal.height = app.screen.height;

const rec = new PIXI.Sprite(PIXI.Texture.WHITE);
rec.tint = 0xe7dcce;
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
    if (lines.length > 0) {
      rec.alpha = 0;
    }
    brush.position.set(position.x, position.y);
    app.renderer.render(brush, renderTexture, !lines.length, null, false);
    lines.push(position);
    //console.log(lines);
    if (lines.length === 200) {
      clean();
      //lines = [];
    }
  }
};

const clean = () => {
  cleaning = true;
  brush.scale.x += 0.25;
  brush.scale.y += 0.25;

  if (brush.scale.x > 0.25 * 30) {
    console.log((rec.alpha += 1 / 30));
  }
  if (brush.scale.x < 0.25 * 60) {
    requests.push(requestAnimationFrame(clean));
    app.renderer.render(brush, renderTexture, false, null, false);
  } else {
    requests.map((i) => {
      cancelAnimationFrame(i);
    });
    cleaning = false;
    lines = [];
    brush.scale.x = 1;
    brush.scale.y = 1;
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
