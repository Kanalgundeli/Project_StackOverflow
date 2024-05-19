import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.routes.js";
import questionRoutes from "./routes/Questions.routes.js";
import answerRoutes from "./routes/Answers.routes.js";
import chatRoutes from "./routes/chatbot.js";
import socialRoutes from "./routes/Social.routes.js";
import subsRoutes from "./routes/subscription.routes.js";


const app = express();
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
app.use(cors());

//app.use("/chatbot", chatbotRoute);
app.use("/user/", userRoutes);
app.use("/questions/", questionRoutes);
app.use("/answer/", answerRoutes);
app.use("/social/post/", socialRoutes);
app.use("/subscription", subsRoutes);

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone API sachin upadhyay");
})

const PORT = process.env.PORT || 5000;

process.env.CONNECTION_URL="mongodb+srv://upadhyaysachin414:TQDl0wpQgv8oZO41@cluster0.zjbd5iq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.set("strictQuery",true);

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})

    .then(() => app.listen(PORT, () => {console.log(`server running at port ${PORT}`)}))
    .catch((err) => console.log(err.message))
