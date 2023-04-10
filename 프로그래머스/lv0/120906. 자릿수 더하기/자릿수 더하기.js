function solution(n) {
    var answer = n.toString().split("");
    
    let test = [];
    for(let i = 0; i < answer.length; i++){
        test.push(parseInt(answer[i]))
    }
    
    
    return test.reduce((prev, curr) => {return prev + curr});
}