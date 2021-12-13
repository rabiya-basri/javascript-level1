function cap(str) {
    let newstr = str.split(" ")
    for (let i = 0; i < newstr.length; i++){
        newstr[i]=newstr[i][0].toUpperCase()+newstr[i].substr(1)
    }
    return newstr.join(" ")
}
console.log(cap('this is world'))