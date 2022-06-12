// for (let i = 0; i <= 20; i += 2) {
//     console.log(i)
// // }
// const animals = ['lions', 'tigers', 'bears', 'uuui', 'licvvg'];

// for (let i = 0; i < animals.length - 1; -) {
//     console.log(i, animals[i]);
// }
// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`   j is: ${j}`)
//     }
// // }
// let num = 0;
// while (num < 10) {
//     num++;
//     console.log(num);
// }
const secret = "danny";

let guess = prompt("enter secret");
while (guess !== secret) {
    guess = prompt("enter secret")
}