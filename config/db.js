import mongoose from "mongoose";
import colors from "colors";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to the Mongodb Database ${conn.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};

export default ConnectDB;
