function solution(num_list) {
    var answer = [];
    var o = [];
    var e = [];
    for(let i = 0; i < num_list.length;i++){
        if(num_list[i] % 2===0){
            o.push(num_list[i]);
        }
        else if(num_list[i] % 2 ===1){
            e.push(num_list[i]);
        }
    }
    answer[0] = o.length;
    answer[1] = e.length;
    return answer;
}