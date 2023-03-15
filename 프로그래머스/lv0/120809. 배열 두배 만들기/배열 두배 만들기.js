function solution(numbers) {
    var answer = [];
    for(let n in numbers){
        answer.push(numbers[n] * 2);
    }
    
    return answer;
}