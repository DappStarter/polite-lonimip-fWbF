require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan renew sad snake hope entire army gas'; 
let testAccounts = [
"0x341f0124634de182abacf6ea846fde1a56a8123d35b089066dfd9a76d4444959",
"0x77b58bfe64e20d9509f02fc7fb44c060ecc8373f9a98f3af67c489c57167cbeb",
"0x3f12f2ee201d2f9fdea79cb0d147c5fcf512cf3ddd751e6a90753bafce430c69",
"0x5bfaf5739d08a31a81b3bd5146c2edad40d13f1197b6f02c996dbfe78e04521d",
"0x36261ba686d50e0507ea691729413f20ed4eba31cd8a2c87323d4cbb2738fd65",
"0x59f13f8775857f58a26002b92cce74d1608c53ec1a76b77f6768850d7b9d4aab",
"0x55169b8fe1689ccad2feec1ac58d190d93e656c7a8ba6be877a27c70fb881ece",
"0x94c8b2811df5caa03f9af912485234c116db89c9f420fe59a60ce12b0ed2e1a4",
"0x2605e97d31f88fc81ea44d5a350a07400a395e652e545b342e9afd0735391f41",
"0xb739ee3ac7118399ceab702700525944a0eec476347578e472272499c44e352f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

