import * as PIXI from "pixi.js/dist/pixi";

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container.

// prepare circle texture, that will be our brush
const brush = new PIXI.Graphics();
brush.beginFill(0xffffff);
brush.drawCircle(0, 0, 100);
brush.endFill();

// for this example you have to use mouse or touchscreen

const app = new PIXI.Application({ resizeTo: window });
app.view.style.width = window.innerWidth + "px";
app.view.style.height = window.innerHeight + "px";
const { stage } = app;

const back = PIXI.Sprite.from(PIXI.Texture.WHITE);
back.tint = 0xeae6e1;

app.stage.addChild(back);

back.width = app.screen.width;
back.height = app.screen.height;

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

app.stage.interactive = true;

export const create = () => {
  document.querySelector("#background :first-child").appendChild(app.view);
};

export const pointerMove = (position) => {
  brush.position.set(position.x, position.y);
  app.renderer.render(brush, renderTexture, false, null, false);
};
