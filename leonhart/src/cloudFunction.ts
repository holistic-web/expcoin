import getCoinbaseData from './getCoinbaseData';

// @ts-ignore
export default async function (context, req) {

	const day1 = req.query.day1;
	const day2 = req.query.day2;
	const currencyPair = req.query.currencyPair;

	const result = await getCoinbaseData(day1, day2, currencyPair);
	context.res.body = result;
}