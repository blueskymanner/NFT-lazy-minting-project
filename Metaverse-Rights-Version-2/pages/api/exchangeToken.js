var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export default function handler(req, res) {
    fetch("https://sandbox.plaid.com/item/public_token/exchange", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
            client_id: '635a741b0a364f001ab65717',
            secret: '6b3e14d3b55ed4d745d5c1dbb4c881',
            public_token: req.query.public_token
        }),
    })
        .then((response) => response.json())
        .then((result) => {
            res.json(result)
        })
        .catch((error) => console.log("error", error));
}
