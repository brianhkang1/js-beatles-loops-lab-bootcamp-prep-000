function theBeatlesPlay(musician, instrument) {
  var randomarray = []
  
  for (var i = 0; i < musician.length - 1; i++) {
    randomarray.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return randomarray
}