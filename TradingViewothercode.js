await (
    await fetch("https://amapi.algomojo.com/v1/PlaceOrder", {
        method: "POST",
        body: JSON.stringify({
            api_key: "df5b8595e375db7e83da585c729e62ff",
            api_secret: "51e4382505b2efd711a5921f92fa0674",
            data: {
                broker: "fy",
                strategy: "Supertrend Strategy",
                exchange: "NSE",
                symbol: "RELIANCE-EQ",
                action: "SELL",
                product: "MIS",
                pricetype: "MARKET",
                price: "0",
                quantity: "1",
                disclosed_quantity: "0",
                trigger_price: "0",
                amo: "NO",
                splitorder: "NO",
                split_quantity: "1",
            },
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
).json();
