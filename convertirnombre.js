function ConvertirNombre(n){
    let f = "";
    const cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "p", "q", "r", "s", "t", "v", "x", "z", "w", "y"];
    const v = ["a", "e", "i", "o", "u"];
    for(let i=0;i<n.length;i++){
        f += n.charAt(i);
        if((cons.indexOf(n.charAt(i).toLowerCase())) != -1 && (v.indexOf(n.charAt(i+1).toLowerCase())) == -1){
            f += "u";
        }
    }
    return f;
}