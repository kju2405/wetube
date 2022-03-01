import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleError = (error) => {
  return console.log("❌ DB error", error);
};

const handleOpen = () => console.log("✅ Connected to DB");

db.on("error", handleError); //database에 error가 발생하면 이 event가 발생할것이다.
db.once("open", handleOpen);
