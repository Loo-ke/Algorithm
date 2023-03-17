function solution(my_string, n) {
    var test= my_string.split("");
    var a1 = [];
    for(let i = 0; i < test.length;i++){
        a1.push(my_string[i].repeat(n));
    }
    test = a1.join("")
    return test;
}