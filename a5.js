function repeatNum(array, n) {
    if (n < array.length) {
        return array.slice(0, n)
    } else if(n === array.length)
    {
        return array
    } else if (n == null) {
        return array[0]
    }
}
console.log(repeatNum([2,3,4,5],3))