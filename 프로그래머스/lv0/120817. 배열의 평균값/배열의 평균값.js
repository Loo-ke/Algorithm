function solution(numbers) {
    var answer = 0;
    let n = 0;
    for(let i = 0; i < numbers.length;i++){
        n += numbers[i];
        let t = numbers.length;
        answer = n / t;
    }
    return answer;
}