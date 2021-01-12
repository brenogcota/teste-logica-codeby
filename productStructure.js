const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {
  const product = products.reduce((acc, cur) => {
    cur = cur.split('-')
    
    if (acc[cur[0]] != undefined && cur[1] in acc[cur[0]]) {
      return acc = { ...acc, [cur[0]]: {...acc[cur[0]], [cur[1]]: acc[cur[0]][cur[1]]+1 } }
    }

    return acc = { ...acc, [cur[0]]: {...acc[cur[0]], [cur[1]]: 1} }
    

  }, {})

  return product;

}
