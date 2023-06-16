function receivesAFunction(callback){
    callback();
}

function myCallback(){
    console.log(spy);
}



function returnsAnAnonymousFunction(){
    return function(){
        console.log();
    };
}

var myFunc = returnsAnAnonymousFunction();
myFunc();



function returnsANamedFunction(){
    return function namedFunction(){
        console.log();
    };
}

const myFunction = returnsANamedFunction();
myFunction(); 
