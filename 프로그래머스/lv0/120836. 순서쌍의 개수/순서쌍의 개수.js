function solution(n) {
    var answer = 0;
        for(let i = 0; i < Math.sqrt(n);i++){
            if(n % i === 0) answer += 2;
        }
    if(n % Math.sqrt(n) === 0) answer += 1;
    
    return Math.floor(answer);
}