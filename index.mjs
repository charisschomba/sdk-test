import JengaApiSdk from "jenga-apis-sdk";

const sdk = new JengaApiSdk({
    apiKey:
        "eN8OFJ8+lQNNZQPcpJ/ma87ct7OCJVPSACt0gBY25KMJDDr1CsrjQoZlWk9w/RPEOGoYsXmKWyjLigFofYTCwA==",
    merchantCode: "2179103820",
    consumerSecret: "T30Mim1UA3v7QnFKtn24Qt7bUnl76T",
    privateKeyPath: "absolute path to your private key",
    environment: "DEV",
});


const getTokenThenBalance = () => {
    sdk.authenticate()
        .then((r) => {
            sdk.getAccountBalance(
                {
                    params: { accountId: '0020100014605', countryCode: 'KE' },
                })
                .then(r => console.log(r.data, 'account balance'))

        })
        .catch((e) => console.log(e));
};

getTokenThenBalance();

