function solution(my_string) {
    var answer = my_string.replace(/[^0-9]/g, "").split("");
    let toNumber = [];
    for(let i = 0; i < answer.length;i++){
        toNumber.push(parseInt(answer[i]))
    }
    
    return toNumber.reduce((prev,curr) => {return prev + curr;});
}