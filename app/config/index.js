require("dotenv").config();
const production = process.env.NODE_ENV === "production";

// your configs
// edit example.env file and rename to .env
const id = process.env.id;
const token = process.env.token;

module.exports = {
    production,
    id,
    token,
};