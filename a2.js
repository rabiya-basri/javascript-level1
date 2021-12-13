function remove(arr, n) {
    let index = arr.indexOf(n)
    if (index > -1) {
        arr.splice(index,1)
    } else {
        return `${n} not present`
    }
    return arr
}
console.log(remove([2,5,6,7],5))