function solve(one, two, three){
    max = undefined;
    if (one > two && one > three){
        max = one;
    }else if (two > one && two > three){
        max = two; 
    }
    else{
        max = three;
    }
    console.log(`The largest number is ${max}.`);
}