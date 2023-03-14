function solution(age) {
    var answer = 0;
    for(let i = 1; i <= age; i++){
        answer = 2022 - age+1;
    }
    return answer;
}