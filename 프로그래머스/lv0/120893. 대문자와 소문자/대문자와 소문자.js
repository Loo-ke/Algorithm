function solution(my_string) {
    var toArr = my_string.split("");
    var result = [];
    for(let i = 0; i < toArr.length;i++){
        if(toArr[i] == toArr[i].toUpperCase()){
            result.push(toArr[i].toLowerCase());
        }else{
            result.push(toArr[i].toUpperCase());   
        }
    }
    return result.join("");
}