function solution(rsp) {
    var answer = rsp;
    // 가위 = 2
    // 바위 = 0
    // 보 = 5
    var toArr = rsp.split("")
    var result = [];
    for(let i = 0; i < toArr.length;i++){
        if(toArr[i] == 0){
            result.push(5);
        }
        else if(toArr[i] == 2){
            result.push(0);
        }else if(toArr[i] == 5){
            result.push(2);
        }
    }
    
    return result.join("");
}