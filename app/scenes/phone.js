const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;
const db = require("../db/db");

module.exports = new BaseScene("phone")
    .enter((ctx) =>
        ctx.reply(
            "Send contact\n\n/main - main scene",
            Markup.keyboard([Markup.button.contactRequest("Send my contact")])
                .oneTime()
                .resize()
        )
    )
    .on("contact", (ctx) => {
        const { phone_number } = ctx.message.contact;
        db.query(`INSERT INTO person (phone) values ("${phone_number}")`);
        return ctx.reply(`your number: ${phone_number}`);
    })
    .command("main", (ctx) => ctx.scene.enter("main"))
    .use((ctx) => ctx.scene.reenter());