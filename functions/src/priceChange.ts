import * as functions from "firebase-functions";

import {Promise} from "bluebird";
import {Client} from "coinbase";

// @ts-ignore
const client = new Client({
  apiKey: "-",
  apiSecret: "-",
  strictSSL: false
});

const getSpotPricePromise = Promise.promisify(client.getSpotPrice).bind(client);

// @ts-ignore
async function priceChange(request: any, response: any): any {
  const currency = "BTC-USD";
  const currency2 ="ETH-USD";
  const currency3 ="DOGE-USD";
  const currency4 = "ADA-USD";
  const day1 = "2021-06-18";
  const day2 = "2021-06-19";

  const result1 = await getSpotPricePromise({
    currencyPair: currency,
    date: day1,
  });
  const price1 = result1.data.amount;

  const result2 = await getSpotPricePromise({
    currencyPair: currency,
    date: day2,
  });
  const price2 = result2.data.amount;

  const result3 = await getSpotPricePromise({
    currencyPair: currency2,
    date: day1,
  });
  const price3 = result3.data.amount;

  const result4 = await getSpotPricePromise({
    currencyPair: currency2,
    date: day2,
  });
  const price4 = result4.data.amount;

  const result5 = await getSpotPricePromise({
    currencyPair: currency3,
    date: day1,
  });
  const price5 = result5.data.amount;

  const result6 = await getSpotPricePromise({
    currencyPair: currency3,
    date: day2,
  });
  const price6 = result6.data.amount;

  const result7 = await getSpotPricePromise({
    currencyPair: currency4,
    date: day1,
  });
  const price7 = result7.data.amount;

  const result8 = await getSpotPricePromise({
    currencyPair: currency4,
    date: day2,
  });
  const price8 = result8.data.amount;


  functions.logger.info(`Currency: ${currency}`, {structuredData: true});
  functions.logger.info(`Currency: ${currency2}`, {structuredData: true});
  functions.logger.info(`Currency: ${currency3}`, {structuredData: true});
  functions.logger.info(`Currency: ${currency4}`, {structuredData: true});
  functions.logger.info(`BTC Price on ${day1}: ${price1}`, {structuredData: true});
  functions.logger.info(`BTC Price on ${day2}: ${price2}`, {structuredData: true});
  functions.logger.info(`ETH Price on ${day1}: ${price3}`, {structuredData: true});
  functions.logger.info(`ETH Price on ${day2}: ${price4}`, {structuredData: true});
  functions.logger.info(`DOGE Price on ${day1}: ${price5}`, {structuredData: true});
  functions.logger.info(`DOGE Price on ${day2}: ${price6}`, {structuredData: true});
  functions.logger.info(`ADA Price on ${day1}: ${price7}`, {structuredData: true});
  functions.logger.info(`ADA Price on ${day2}: ${price8}`, {structuredData: true});

  // @ts-ignore
  const priceChange = price1 - price2;
  // @ts-ignore
  const percentageChange = priceChange/price2;

  functions.logger.info(`priceChange BTC: ${priceChange}`, {structuredData: true});
  // @ts-ignore
  functions.logger.info(`percentageChange BTC: ${(percentageChange.toFixed(2) * 100)}`, {structuredData: true});

  // @ts-ignore
  const priceChange2 = price3 - price4;
  // @ts-ignore
  const percentageChange2 = priceChange2/price4;

  functions.logger.info(`priceChange ETH: ${priceChange2}`, {structuredData: true});
  // @ts-ignore
  functions.logger.info(`percentageChange ETH: ${(percentageChange2.toFixed(2))*100}`, {structuredData: true});

  // @ts-ignore
  const priceChange3 = price5 - price6;
  // @ts-ignore
  const percentageChange3 = priceChange3/price6;

  functions.logger.info(`priceChange DOGE: ${priceChange3}`, {structuredData: true});
  // @ts-ignore
  functions.logger.info(`percentageChange DOGE: ${(percentageChange3.toFixed(2))*100}`, {structuredData: true});

  // @ts-ignore
  const priceChange4 = price7 - price8;
  // @ts-ignore
  const percentageChange4 = priceChange4/price8;

  functions.logger.info(`priceChange ADA: ${priceChange4}`, {structuredData: true});
  // @ts-ignore
  functions.logger.info(`percentageChange ADA: ${(percentageChange4.toFixed(2))*100}`, {structuredData: true});


  const result = {
    days: [
      {
        date: "20/03/21",
        prices: {
          "BTC-USD": 20,
          "ETC-USD": 35,
        },
      },
      {
        date: "21/03/21",
        prices: {
          "BTC-USD": 24,
          "ETC-USD": 32,
        },
      },
    ],
  };


  return response.send({result});
}

export {priceChange};
