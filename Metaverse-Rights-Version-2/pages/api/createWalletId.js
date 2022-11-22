export default function handler(req, res) {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: `Bearer QVBJX0tFWTo3MTJhYTEyYzJmMDk1ZWUzZjFkZjdhMzNmYWYzNTA1MTplMDg5M2RmMzdhZDZhMGY2ZjA2MDViOTJhOWE4ZWVkNg==`
        },
        body: JSON.stringify({ idempotencyKey: req.query.uuid })
    };
    fetch('https://api-sandbox.circle.com/v1/wallets', options)
        .then((response) => response.json())
        .then((result) => res.json(result.data))
        .catch((error) => console.log("error", error));
}
