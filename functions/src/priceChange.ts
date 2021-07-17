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

const getPriceChange = (): any => {
  return result;
};

export {getPriceChange};
