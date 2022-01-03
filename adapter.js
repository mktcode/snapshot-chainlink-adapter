exports.ProposalResultsAdapter = (req, res) => {
  const proposalId = req.body.data.proposalId || ''
  res.send({
    jobRunID: req.body.id,
    data: {
      proposalId,
      result: true
    }
  })
}