// Call back

const attack = function(str, callback){
    console.log('Attacking the enemy '+str);
    callback();
}


// 1.
/*
function fire(){
    console.log('attacking with fire');
}

attack("Base 30", fire);
*/


// 2. 
/*
attack("Base 30", function(){
    console.log("Attacking with fire");
})
*/


// 3.

attack("Base 30", ()=>{
    console.log('Attacking with fire');
})