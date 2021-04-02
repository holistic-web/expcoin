import { promisify } from 'util';
const CoinbaseClient = require('coinbase').Client;

const coinbaseClient = new CoinbaseClient({
	apiKey: '-',
	apiSecret: '-',
	strictSSL: false
});

const getSpotPricePromise = promisify(coinbaseClient.getSpotPrice).bind(coinbaseClient);

export default async function getCoinbaseData(day1: string, day2: string, currency: string) {

	const result1 = await getSpotPricePromise({
		currencyPair: currency,
		date: day1
	});
	const price1 = result1.data.acoumt;

	const result2 = await getSpotPricePromise({
		currencyPair: currency,
		date: day2
	});
	const price2 = result2.data.acoumt;

	const priceChange = price1 - price2;
	const percentageChange = (priceChange / price2).toFixed(2);

	return {
		day1,
		day2,
		priceChange,
		percentageChange
	};

}