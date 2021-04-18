const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;

module.exports = new BaseScene("location")
    .enter((ctx) =>
        ctx.reply(
            "send Location\n/main - main scene",
            Markup.keyboard([Markup.button.locationRequest("send my location")])
                .oneTime()
                .resize()
        )
)
    .on("location", (ctx) => {
        const { latitude, longtitude } = ctx.message.location;
        return ctx.reply(`your coordinates: ${latitude}, ${longtitude}`);
    })
    .command("main", (ctx) => ctx.scene.enter("main"))
    .use((ctx) => ctx.scene.reenter());