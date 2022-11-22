export default function handler(req, res) {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: `Bearer QVBJX0tFWTo3MTJhYTEyYzJmMDk1ZWUzZjFkZjdhMzNmYWYzNTA1MTplMDg5M2RmMzdhZDZhMGY2ZjA2MDViOTJhOWE4ZWVkNg==`
        },
        body: JSON.stringify({
            currency: 'USD',
            chain: 'MATIC',
            idempotencyKey: req.query.uuid
        })
    };
    fetch(`https://api-sandbox.circle.com/v1/wallets/${req.query.wallet_id}/addresses`, options)
        .then((response) => response.json())
        .then((result) => res.json(result.data))
        .catch((error) => console.log("error", error));
}
