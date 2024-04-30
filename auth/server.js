import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";

async function startServer() {
    const PORT = process.env.PORT;
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
    })
    console.log("DB is successfuly connected");
    app.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    });
};

startServer();