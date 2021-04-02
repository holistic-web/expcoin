import { promisify } from 'util';
const CoinbaseClient = require('coinbase').Client;

type CurrencyResult = {
	data: {
		base: string,
		currency: string,
		amount: string
	}
};

const coinbaseClient = new CoinbaseClient({
	apiKey: '-',
	apiSecret: '-',
	strictSSL: false
});

const getCurrenciesPromise = promisify(coinbaseClient.getCurrencies).bind(coinbaseClient);
const getBuyPricePromise = promisify(coinbaseClient.getBuyPrice).bind(coinbaseClient);

function formatPrice(priceData: any) {
	return `${priceData.base}: ${priceData.amount} ${priceData.currency}`;
}

export default async function getCoinbaseData() {
	const currencies = await getCurrenciesPromise();
	console.log('currencies: ', currencies);

	const currencyPairs: any[] = [];
	const fetchPriceRequests: Promise<CurrencyResult>[] = currencyPairs.map(pair => {
		return getBuyPricePromise({ currencyPair: pair });
	});

	const results: CurrencyResult[] = await Promise.all(fetchPriceRequests);
	const formattedResults = results.map(result => formatPrice(result.data));

	formattedResults.forEach(result => {
		console.log(result);
	});

	return results;
}