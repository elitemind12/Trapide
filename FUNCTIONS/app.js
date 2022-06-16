// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }





// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

//FUNCTIONS
//define or register a function. 
function singSong() {
      console.log("DO");
      console.log("RE");
      console.log("ME");
}
//Arguments
function greet(makyao) {
    console.log(`firstname is: ${makyao}`);
}
//Multiple Arguments.
function greet(makyao, daniel) {
    console.log(`firstname is: ${makyao} lastname is:${daniel[0]}`);
}
function repeat(str, numTimes){
    let result = '';
    for(let i = 0; i < numTimes; i++){
        result += str;
    }
    console.log(result);
}
//Return
//we can only return single value.
function add(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        return false;
    } 
    let sum = x + y;
    return sum;
}