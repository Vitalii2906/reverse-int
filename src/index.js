module.exports = function reverse (n) {
    if (n < 0){
        n = ''+(n * -1)
    }else {
        n = ''+ n
    }
    new_number = ''
    len_n = n.length
    for (let i = len_n; i >= 0; i--){
      new_number += n.charAt(i);
    }
    return Number(new_number)
}