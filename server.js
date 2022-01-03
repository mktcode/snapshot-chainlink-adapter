
const express = require('express')
const { ProposalResultsAdapter } = require('./adapter')
const app = express()
const port = process.env.PORT || 3003

app.use(express.json())

app.post('/', ProposalResultsAdapter)

app.listen(port, () => {
  console.log(`Snapshot Chainlink Adapter listening at http://localhost:${port}`)
})
