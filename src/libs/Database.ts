import * as mongoose from "mongoose";

export default class Database {
  public static open(mongoUrl) {
    return new Promise((resolve, reject) => {
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
      console.log("Checking the value for MongoURL", mongoUrl);
      mongoose.connect(mongoUrl, (err) => {
        if (err) {
          console.log("checking mongoURL", mongoUrl);
          reject(err);
          return;
        }
        resolve(true);
        console.log("App is successfully connected to MongoDB");
      });
    });
  }
  public static disconnect() {
    console.log("disconnected");
  }
}
