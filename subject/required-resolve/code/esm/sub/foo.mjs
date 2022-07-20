import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const path = require.resolve('./data.txt')
console.log(path)

export {}

