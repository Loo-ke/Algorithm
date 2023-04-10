function solution(n) {
    var answer = [];
    console.log(n)
    for(let i = 1; i <= n; i++){
        answer.push(i)
            
    }
    let result = answer.filter(num => num % 2 === 1)
    return result;
}