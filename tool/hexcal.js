let 功能开关 = { cal: true };


功能开关.cal && console.log(
  `函数名： calhex 功能： hex计算 eg:  calhex('a','b','+')
函数名： tonum 功能： 转10进制 eg:  tonum('0a')
函数名： tohex 功能： 转16进制 eg:  tohex('0a')
`
);
function calhex(a, b, char) {
  let c = null
  let aa = tonum(a)
  let bb = tonum(b)
  eval(`c=aa${char}bb`)
  console.log(`dec: ${c} hex: 0x${tohex(c)}  exp: ${aa} ${char} ${bb}  `)
  return null
}
function cal(a, b, char) {
  let c = null
  eval(`c=a${char}b`)
  return `${c}`
}
function tohex(e) {
  return Number(e).toString(16)
}
function tonum(hex) {
  return parseInt('0x' + hex)
}