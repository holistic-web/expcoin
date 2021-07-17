import {getPriceChange} from "./priceChange";
import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const priceChange = functions.https.onRequest((request, response) => {
  response.send(getPriceChange());
});
