import getCoinbaseData from './getCoinbaseData';

async function main() {
	try {
		await getCoinbaseData();
	} catch (err) {
		console.log(err);
	}
}
main();
