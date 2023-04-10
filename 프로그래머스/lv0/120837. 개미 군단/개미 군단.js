function solution(hp) {
    var master = Math.floor(hp / 5);
    var soldier = Math.floor((hp - master * 5) / 3);
    var worker = Math.floor(hp - (master * 5) - (soldier * 3))
    
        
    
    // 장군 = 5
    // 병정 = 3
    // 일개미 = 1
    return master + soldier + worker;
}