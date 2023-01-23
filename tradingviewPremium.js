setInterval(async () => {
    let text = document.getElementsByClassName("secondaryRow-BHAMU0Vp").item(0);
    let button = document
        .getElementsByClassName("button-OvB35Th_ size-small-OvB35Th_ color-brand-OvB35Th_ variant-primary-OvB35Th_")
        .item(0);

    if (text && button) {
        await (
            await fetch("https://amapi.algomojo.com/v1/PlaceOrder", {
                method: "POST",
                body: JSON.stringify(text.textContent),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        ).json();
        console.log("fired");
        button.click();
    }
}, 1);
