function remove(obj,prop) {
    const isPresent = obj.hasOwnProperty(prop)
    if (isPresent) {
        delete obj[prop]
    } else {
        return `${prop} not present`
    }
    return obj
}
const student = { name: 'rab', sclass: 'Vii', rolno: 12 }
console.log(remove(student,'sclass'))