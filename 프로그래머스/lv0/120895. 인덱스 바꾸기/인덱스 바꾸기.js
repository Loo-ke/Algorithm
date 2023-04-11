function solution(my_string, num1, num2) {
    var answer = '';
    var toArr = my_string.split("");
    var n1 = toArr[num1];
    toArr[num1] = toArr[num2];
    toArr[num2] = n1;
    return toArr.join("");
}