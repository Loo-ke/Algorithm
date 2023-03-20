function solution(array) {
    let mid = Math.floor(array.length/2);
    let sort_arr = array.sort((a,b)=>a-b);
    return sort_arr[mid];
}