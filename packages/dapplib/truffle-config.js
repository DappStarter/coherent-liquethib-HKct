require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember minor imitate private fringe spike'; 
let testAccounts = [
"0x9563eefb569fefcdd7d54fbef29594dfd4b48a616adad1cbd1bee33c4862c3bd",
"0x01be49711771064d010e8bd674dedcb4ed59d47a6234b0986e5d52fd67dee589",
"0x5f41b9c1f2fe83f0b404c67f78af0f51281a504dbaee21de94d666524d3882c1",
"0x3a5c0b6f887caabe5e01d97a2863d5a48e25b82e2fc4149ccafc932448be7c60",
"0x3f71fd1bb0790c6cb9babd2649b26950abd9be507a6d5b28bca0dbaaed551897",
"0x0058909abdb170ed63957d263e752150dfd413477ff447fba46d8d2247a1a398",
"0x3862f302b1ee19c58ae7f206742f40ca3ca8a585a031b73f533b6ba0ff9094f6",
"0x95b92db1d76179b4a98bb4f8375923e946f29c01b679b40b57bd38195265d931",
"0x50bdfa2624942965c9d5bf9d8c0b8ddac74f373e6d0787262d5709d4c88ee77b",
"0x5e23d4c63169b6642497fa9bf5b45d6fb99252758d860dd2f92e6c2921245957"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

