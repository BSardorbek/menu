const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

async function getConnect() {
    await mongoose.connect("mongodb://localhost/menu", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

getConnect()
    .then(() => {
        console.log("Databases running");
    })
    .catch(() => {
        console.log("xatolik");
    });