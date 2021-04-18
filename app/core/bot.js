const { Telegraf, session, Scenes } = require("telegraf");
const { Stage } = Scenes;

const { token, id } = require("../config");
const bot = new Telegraf(token);
const scenes = require("../scenes");
const stage = new Stage(Object.values(scenes));


bot.catch((err) => {
    const message = err.stack || err;
    console.log(message.err);
    bot.telegram.sendMessage(id, message);
});

bot.use(session()).use(stage.middleware());

bot.start((ctx) => {
    return ctx.scene.enter("main");
});

bot.on("text", (ctx) => {
    return ctx.scene.enter("main");
});

bot.launch().then(() => {
    const message = "Bot started! \n Salom :)";
    console.log(message);
    bot.telegram.sendMessage(id, message);
});