const TheAlienBoy = artifacts.require("TheAlienBoy");

module.exports = function (deployer) {
  deployer.deploy(TheAlienBoy,"MyNFT","MyNFT","https://gateway.pinata.cloud/ipfs/QmPdBv7UGxPpVQ2mWwkowNFUT4Fc7TD37PUvFvGYhraYef",10);
};