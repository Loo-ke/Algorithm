function solution(sides) {
    let sortedSides = sides.sort((a,b)=>b-a);
    let answer = 0;
    if(sortedSides[0] < sortedSides[1] + sortedSides[2]){
        answer = 1;
    }else{
        answer = 2;
    }
    
    return answer;
}