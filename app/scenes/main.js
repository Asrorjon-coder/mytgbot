const { Scenes, Markup } = require("telegraf");
const { BaseScene } = Scenes;

const mainScene = new BaseScene("main");

mainScene.enter((ctx) =>    //when entered
    ctx.reply(                      //send hello and remove keyboards
        "Hello\n\n/phone - to send contact\n/location - to send location",
        Markup.removeKeyboard()
    )
);

mainScene                           //handle commands
    .command("phone", (ctx) => ctx.scene.enter("phone"))
    .command("location", (ctx) => ctx.scene.enter("location"));

// handle any update for reenter scene
mainScene.use((ctx) => ctx.scene.reenter());

module.exports = mainScene;