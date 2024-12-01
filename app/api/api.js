import { cache } from "react";

export const getShopId = cache(async (param) => {
  const shopIDS = {
    pk: 77,
    "tarka-as": 76,
    "lille-haveli-heggedal": 52,
    aura: 51,
    "jewel-of-india": 50,
    "masala-library-by-hk": 49,
    askerhaveli: 48,
    "1947-gandhi": 47,
    mistral: 46,
    "tukTuk--thai-diner-%26-takeaway--sandvika": 45,
    "tukTuk-thai-diner-and-bar--asker": 44,
    "lille-haveli-asker": 43,
    "examples-restaurant": 42,
    "desi-indisk-kitchenAs": 21,
    aahar: 5,
    "vivamart-as": 1,
  };
  const shopID = shopIDS[param.toLowerCase()];
  return shopID;
});

export const getShopData = cache(async (param) => {
  const res = await fetch(`https://sendio.online/rest-api/shop/${param}`, {
    headers: {
      shop_id: "42",
      Authorization:
        "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
});
