function inputTrim(str){
    var trimmed = [];
    for(let i=0; i<str.length;i++){
        if(str[i]!==" "){
            trimmed.push(str[i]);
        }
    }
    trimmed = trimmed.join("");
    return trimmed;
}