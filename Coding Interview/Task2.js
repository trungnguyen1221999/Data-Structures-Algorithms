// Replace underscores with spaces and capital words
// Input: ui_dev_guide
// contact_detail

// Output: Ui Dev Guide
// Contact Detail

const ConverStr = (str) =>{
    if (str.length === 0) return undefined
    let strArr = str.replaceAll("_", " ").trim().split(" ")
    let resultArr = []

    for (let item of strArr) {
        item = item[0].toUpperCase() + item.slice(1)
        resultArr.push(item)
    }
    return  resultArr.join(" ")
}


const output = "biet_bo_may_la_ai_khong"

console.log(ConverStr(output))