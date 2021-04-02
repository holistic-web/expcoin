import getCoinbaseData from './getCoinbaseData';

async function main() {
	try {
		await getCoinbaseData('2021-03-01', '2021-03-31', 'BTC-USD');
	} catch (err) {
		console.log(err);
	}
}
main();
