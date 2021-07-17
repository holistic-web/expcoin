import {priceChange} from "./priceChange";
import * as functions from "firebase-functions";

export const priceChangeFunction = functions.https.onRequest(priceChange);

