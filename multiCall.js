const { MultiCall } = require("@indexed-finance/multicall");
const abi = require("./abi.json");
const Web3 = require("web3");

async function main() {
  let provider = new Web3(
    new Web3.providers.HttpProvider(
      "https://mainnet.infura.io/v3/5e7260c217304f78a79b5e380feaab75"
    )
  );
  const multi = new MultiCall(provider);
  const inputs = [];
  let address0 = "0x6b175474e89094c44da98b954eedeac495271d0f";
  let address1 = "0xdac17f958d2ee523a2206206994597c13d831ec7";
  let address2 = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  let address3 = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
  let address4 = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";
  let address5 = "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2";


  inputs.push({
    target: address0,
    function: "balanceOf",
    args: ["0x8167d92AC36a1332a078fC0F32eaf1281a3AB80C"],
  });
  inputs.push({
    target: address1,
    function: "balanceOf",
    args: ["0x8167d92AC36a1332a078fC0F32eaf1281a3AB80C"],
  });
  inputs.push({
    target: address1,
    function: "totalSupply",
    args: [],
  });
  inputs.push({
    target: address0,
    function: "totalSupply",
    args: [],
  });
  inputs.push({
    target: address2,
    function: "totalSupply",
    args: [],
  });

  inputs.push({
    target: address3,
    function: "totalSupply",
    args: [],
  });

  inputs.push({
    target: address4,
    function: "totalSupply",
    args: [],
  });

  inputs.push({
    target: address5,
    function: "totalSupply",
    args: [],
  });


  const allData = await multi.multiCall(abi, inputs);
  console.log(allData);
  console.log(allData[1][0].toString());
  console.log(allData[1][1].toString());
  console.log(allData[1][2].toString());
  console.log(allData[1][3].toString());

}

main();
