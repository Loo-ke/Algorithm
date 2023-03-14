function solution(babbling) {
    var answer = 0;
    const basic_words = ["aya", "ye", "woo","ma"];
    
    for(let b of babbling){
        let check = b;
        for (let word of basic_words)
            check = check.replace(word, " ");
        check = check.replaceAll(" ", "");
        
        if(check === "")
            answer += 1;
    }
    return answer;
}