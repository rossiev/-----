const symbol = Symbol('symb')
const symbol2 = Symbol('symb')

const obj = {
 id: 12345,
 [symbol]: 'data'
}

for (let key in obj){
 console.log(key)
}