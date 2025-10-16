function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiplecation(a,b){
    return a*b;
}

function divide(a,b){
    if (b === 0){
        throw new error("cannot divided by zero");
    }
    return a/b;
}
export {add, substract,multiplecation,divide};