import { Server } from "miragejs";
import responses from "./responses";

let pretenderInstance = null;

function enableMirageMock() {
  if (pretenderInstance) {
    pretenderInstance.shutdown();
    pretenderInstance = null;
  }

  pretenderInstance = new Server({
    environment: "development",
    routes() {
      responses.forEach(({ uri, handleResponse }) => {
        this.get(uri, handleResponse);
      });
    },
  });

  return pretenderInstance;
}

export default enableMirageMock;
