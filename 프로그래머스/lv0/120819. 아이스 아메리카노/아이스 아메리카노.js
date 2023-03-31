function solution(money) {

    let coffee = 5500;
    let cups = Math.floor(money / coffee);
    let returnMoney = money % coffee;
        var answer = [cups, returnMoney];
    return answer;
}