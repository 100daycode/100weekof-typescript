function checkPalindrom(word:string){
    let backwardword = word.split('').reverse().join('')
    const result = word === backwardword ? `${word} is palindrom` : `${word} is not palindrom`
    return result
  }
  console.log(checkPalindrom('bob'))