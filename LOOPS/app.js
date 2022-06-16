// let maximum = parseInt(prompt("Enter the maximum number!"));
// while(!maximum) {
//     maximum = parseInt(prompt("enter a valid number!"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;


// let guess = parseInt(prompt("enter your first guess!"));
// let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//     if(guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//        guess = prompt("Too high! Enter a new guess:");
//     }
//     else {
//         guess = prompt("Too low! Enter a new guess");
//     }
// }
// if(guess === 'q'){
//     console.log("okay you quit");
// }
// else {
//     console.log(`you got! it took you ${attempts} guess`);
// }
//FOR ... OF
// const reddits = ['cringe', 'books', 'chickens', 'funny', 'pics'];

// for (let i = 0; i < reddits.length; i++) {
//     console.log(`Visit reddit.com/r/${reddits[i]}`)
// }

// for(let sub of reddits) {
//     console.log(sub);
// 

// const seatingChart = [
//     ['kristen', 'erick', 'namita'],
//     ['geoffrey', 'juanita', 'kevin'],
//     ['yuma', 'erika', 'jack']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < seatingChart.length; j++) {
//         console.log(row[j]);
//     }
// }

// for (let row of seatingChart) {
//     for (const student of row) {
//         console.log(student);
//     }
// }
// for (let char of helloworld) {
//     console.log(char);
// }

//ITERATING OBJECTS
const testScores = {
    keenan: 80,
    damon: 40,
    kim:89,
    shawn:91,
    marlon:74,
    dwayne:77,
    media:83
}

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }
// let total = 0;
// for (let score of Object.values(testScores)) {
//     total += score;
// }