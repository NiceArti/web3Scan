const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/db334622da644d31828277c7b3bc4708')


async function scanByEvent({from, address, events})
{
  let transactions = web3.eth.getPastLogs({
    fromBlock: from,
    address: address,
    topics:[web3.utils.sha3(events)]
  })

  var tr = await transactions
  for(let i = 0; i < tr.length; i++)
  {
    console.log(`Transaction ${i}:\nblock: ${tr[i].blockNumber}\nhash: ${tr[i].transactionHash}\n`)
  }
}

scanByEvent({
  from: '0x1',
  address: '0x470EBf5f030Ed85Fc1ed4C2d36B9DD02e77CF1b7',
  events: 'RoleGranted(bytes32,address,address)'
})