import * as PIXI from "pixi.js/dist/pixi";

const brush = new PIXI.Graphics();
brush.beginFill(0xffffff);
brush.drawCircle(0, 0, 100);
brush.endFill();

const app = new PIXI.Application({ resizeTo: window });
const { stage } = app;

const imageToReveal = new PIXI.Sprite(PIXI.Texture.WHITE);
imageToReveal.tint = 0xbd8958;
stage.addChild(imageToReveal);
imageToReveal.width = app.screen.width;
imageToReveal.height = app.screen.height;

const renderTexture = PIXI.RenderTexture.create(
  app.screen.width,
  app.screen.height
);

const renderTextureSprite = new PIXI.Sprite(renderTexture);
stage.addChild(renderTextureSprite);
imageToReveal.mask = renderTextureSprite;

app.renderer.backgroundColor = 0xeae6e1;

export const create = () => {
  document.querySelector("#background :first-child").appendChild(app.view);
};

export const pointerMove = (position) => {
  brush.position.set(position.x, position.y);
  app.renderer.render(brush, renderTexture, false, null, false);
};

export const resize = () => {
  stage.children.forEach((e) => {
    stage.removeChild(e);
  });
  stage.addChild(imageToReveal);
  imageToReveal.width = app.screen.width;
  imageToReveal.height = app.screen.height;

  renderTexture.resize(app.screen.width, app.screen.height, true);
  stage.addChild(renderTextureSprite);
};
