export const vestingContract = [ 
    {vestingContract  : "0x3cc8b6a8dc17c0dc1262e24fac09766917ebe781" },
    {vestingContract  : "0xdd5201d835dced4146a3bd21ea21471d64a88e1b" },
    {vestingContract  : "0x3f6422ad7f25be302f4e8c6d0f7d0c27a986fbb8" },
    {vestingContract  : "0xb36d36624fcf299ff4a43b694c13562b601789b4"},
    {vestingContract  : "0xe151a61584af81a048c8ea88d907c5d43c667a5d"},
    {vestingContract  : "0x7dab566d3936d3e56be593d5deea21fa394bc107"},
    {vestingContract  : "0x2c8ee5e64e64cd1f984f5a1d5bfafde647da621d"},
    {vestingContract  : "0x8eb77e9019f1d2f4ab504eddb4992ddfef9fe56a"},
    {vestingContract  : "0x2591cacc0ace37d26ad4107290fad77a70751550"},
    {vestingContract  : "0xf30add0e06228f29381bbcfc5ccde7746034d1ac"},
    {vestingContract  : "0xff4bac81ffd4cebbbcbe9f5f609b1863cd6aaa6f"},
    {vestingContract  : "0x47987f719e5b549f78a52b1807df9af46d7e4673"},
    {vestingContract  : "0xbdbdfa8f012414046a79bd46fc4ce8cfa0104632"},
    {vestingContract  : "0x87220b344d45441be047a62f60a1fec244c931ee"},
    {vestingContract  : "0x81ad7b81e329121915bacffd5761e8e56ddbb22d"},
    {vestingContract  : "0x9a97dce68d452abc89b367ae1ac38dddf79cdbad"},
    {vestingContract  : "0xe1724946d14c88dbd00f04dc3b121497e805e05d"},
    {vestingContract  : "0xc175e02608aae6f15b97e56ca40626f29ed72334"},
    {vestingContract  : "0xfe0e7126e1801a04d22afbf19cbfca98a2323b37"},
    {vestingContract  : "0xadbe5341037c02080209e714aad4616eb490cc50"},
]

export const contractABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_admin",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldAdmin",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "AdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldCandidate",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newCandidate",
                "type": "address"
            }
        ],
        "name": "candidateChanged",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "becomeAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "candidate",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint128",
                "name": "_amount",
                "type": "uint128"
            }
        ],
        "name": "claimToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "name": "emergencyWithdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getLockData",
        "outputs": [
            {
                "internalType": "uint128",
                "name": "",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "",
                "type": "uint128"
            },
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            },
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getToken",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "lockData",
        "outputs": [
            {
                "internalType": "uint128",
                "name": "amount",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "claimedAmount",
                "type": "uint128"
            },
            {
                "internalType": "uint64",
                "name": "lockTimestamp",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "lastUpdated",
                "type": "uint64"
            },
            {
                "internalType": "uint32",
                "name": "lockHours",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_users",
                "type": "address[]"
            },
            {
                "internalType": "uint128[]",
                "name": "_amounts",
                "type": "uint128[]"
            },
            {
                "internalType": "uint32[]",
                "name": "_lockHours",
                "type": "uint32[]"
            },
            {
                "internalType": "uint256",
                "name": "_sendAmount",
                "type": "uint256"
            }
        ],
        "name": "sendLockTokenMany",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_candidate",
                "type": "address"
            }
        ],
        "name": "setCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]