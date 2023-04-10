function solution(my_string) {
    let remove = "aeiou";
    var answer = my_string.split("").filter((spell) => (!remove.includes(spell)));
    
    return answer.join("");
}