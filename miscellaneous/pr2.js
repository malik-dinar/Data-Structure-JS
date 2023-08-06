

const decimal1 = `0b${a}`
const decimal2 =  `0b${b}`

const sumDecimal = BigInt(decimal1) + BigInt(decimal2);
const sumBinary = sumDecimal.toString(2);