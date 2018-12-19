for (let i = 10; i >= 1; i--) {
  let strLine = ''
  let space = i
  while (10 - space > 0) {
    strLine += ' '
    space += 1
  }
  for (let j = 1; j <= i; j++) {
    strLine += '* '
  }
  console.log(strLine)
}