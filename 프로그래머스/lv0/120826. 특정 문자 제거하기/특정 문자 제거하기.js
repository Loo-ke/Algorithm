function solution(my_string, letter) {
    let arr = my_string.split("");
    let result = arr.filter(str => str !== letter)
    return result.join("");
}