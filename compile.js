const path = require('path');
const fs = require('fs');
const solc = require('solc');

const geminethPath = path.resolve(__dirname, 'contracts', 'GeminEth.sol');
const source = fs.readFileSync(geminethPath, 'utf-8');

solc.compile(source, 1);