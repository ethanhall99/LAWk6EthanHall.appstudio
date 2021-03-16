
let product = 0
let sum = 0


BTNclear.onclick=function(){
  INPTnum1.value = 0
  INPTnum2.value = 0
  LBLanswer.textContent = ''
}

BTNmultiply.onclick=function(){
  product = INPTnum1.value * INPTnum2.value
  LBLanswer.textContent = `The product is ${product}`
}

BTNadd.onclick=function(){
  sum = Number(INPTnum1.value) + Number(INPTnum2.value)
  LBLanswer.textContent = `The sum is ${sum}`
}

