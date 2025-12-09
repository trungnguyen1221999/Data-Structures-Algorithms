// Replace space with undescores
// input: trung nguyen
// output: Trung_Nguyen


const Replace = (str)=>{
    if(str.length === 0) return undefined
    let newStrArr = str.trim().split(" ")
    let result = []
    for (let word of newStrArr)
    {
        word = word[0].toUpperCase() + word.slice(1)
        result.push(word)
    }
    return result.join("_")
}


const input = "trung nguyen"

console.log(Replace(input))