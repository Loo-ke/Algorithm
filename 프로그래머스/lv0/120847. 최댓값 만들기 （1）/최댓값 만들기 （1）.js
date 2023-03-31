function solution(numbers) {
    var answer = numbers.sort((a,b)=>{return b-a});
    return answer[0] * answer[1];
}