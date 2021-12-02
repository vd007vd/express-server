import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./router";
import Database from "./libs/Database";
class Server {
  public app;
  constructor(private config) {
    this.app = express();
  }

  bootStrap() {
    this.setupRoutes();
    this.initBodyParser();
    return this;
  }

  setupRoutes() {
    const { app } = this;
    app.get("/health-check", (req, res) => {
      res.send("I am OK");
    });

    app.use("/api", routes);
  }

  initBodyParser() {
    this.app.use(bodyParser.json());
  }

  run() {
    const {
      app,
      config: { port, mongoUrl },
    } = this;
    console.log("Checking for port and mongoURL", port, mongoUrl);
    Database.open(mongoUrl)
      .then((res) => {
        app.listen(port, (err) => {
          if (err) {
            console.log(err);
          }
          console.log(`app is runnig on port ${port}`);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Server;
