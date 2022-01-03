# Snapshot Chainlink Adapter

# Run server

```shell
git clone https://github.com/mktcode/snapshot-chainlink-adapter
cd snapshot-chainlink-adapter
npm ci
npm run server
```

# Use function

```shell
npm i @mktcode/snapshot-chainlink-adapter
```

```js
const { ProposalResultsAdapter } = require('@mktcode/snapshot-chainlink-adapter')
app.use(express.json())
app.post('/', ProposalResultsAdapter)
```