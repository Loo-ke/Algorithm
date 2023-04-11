function solution(array) {
    var answer = [];
    var max = 0;
    var index = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > array[i+1]){
            max = array[i];
            index = i;
        }else if(array[i] < array[i+1]){
            max = array[i+1];
            index = i+1;
        }
    }
    var result = [max, index];
    return result;
}