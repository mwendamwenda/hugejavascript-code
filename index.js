
// let javascript = 'amazing';
// console.log(40 + 20 + 30);

// let firstName = 'Benson';
// console.log(firstName);
 

// let myFirstJob = 'teacher';
// let myCurrentJob = 'programmer';

// console.log(myCurrentJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof 'mwenda');


// math operators

// const now = 2037;
// const ageBen = now -1992;
// const ageSharon = now - 1999;
// console.log(ageBen,ageSharon);        

// console.log(ageBen * 2 ,ageBen /2 ,2 **3);//( 2**3 means 2 to the power of 3 i.e 2*2*2);

// const firstName = 'Benson';
// const lastName = 'mwenda';
// console.log(firstName + ' '+lastName);

// // assignment operators
// let x = 10 + 5;
// x += 10 //means x = x + 10;
// x *= 4; //mean x = x * 4;
// x++; // x + 1;
// x--;
// console.log(x);

// // comparison operators
// console.log(ageBen > ageSharon);
// console.log(ageSharon >= 18);

// const iSFullAge = ageSharon >= 18;

// console.log(now - 1992 > now - 1999);

// const now = 2037;
//  const ageBen = now -1992;
// const ageSharon = now - 1999;

// console.log(now - 1992 > now - 1999);

// let x,y;
// x = y = 25 - 10 -5;
// console.log(x,y);

// const averageAge = (ageBen + ageSharon)/2
// console.log(averageAge);

// const massMark = 78.0;
// const heightMark = 1.69;
// massJohn = 92.0;
// heightJohn = 1.95;

// BMIMark = 78.0 / (1.69 * 1.69);
// BMIJohn = 92.0 /(1.95 * 1.95);
// console.log(BMIMark,BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// const firstName = 'Benson';
// const job = 'Businessman';
// const birthYeah = 1992;
// const year = 2037;

// const benson = "i'm" + ' ' + firstName + ', a' +(year - birthYeah) + 'years old ' + job + '!';
// console.log(benson);

// const bensonNew = `I'm ${firstName}, a ${year-birthYeah},years old ${job} !`;
// console.log(bensonNew);

// console.log(`just a regular string!`);

// console.log('string with \n\
// multiple \n\
// lines');

// console.log(`string 
// with 
// several lines
// yes!`)

// const age = 15;
// const isOldEnough = age >= 18;

// if(isOldEnough){
//     console.log('sarah can start driving');
// }

// // we can make it simpler by writing the condition as follows

// if(age >= 18){
//     console.log('sarah can start driving');
// }

// //to add else block

// if(age >= 18){
//     console.log('sarah can start driving');
// }else{
//     const yearLeft = 18 - age;
//     console.log(`sarah is too young,wait another ${yearLeft} years!`);
// }

// const birthYeah = 1992;
//  let century;
// if(birthYeah<= 2000){
//  century = 20;
// }else{
//     century = 21;
// }
// console.log(century);


// //type conversion

// const inputYear = '1992';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('mwenda'));
// console.log(String(23));
// console.log(typeof(NaN));

// //type coarcion 
// console.log('I am ' + 23 + 'years old');

//5 falsy values 0, '' ,undifined ,NaN ,null
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean('mwenda'));

// const money = 0;
// if(money){
//     console.log("don't spent it all ;");
// }else{
//     console.log('you should ger a job!');
// }

// let height;

// if(height){
// console.log('YAY! height is defined');
// }else{
//     console.log('height is undefined');
// }

//equality operators

// const age = 18;

// if(age === 18){
//     console.log('you just become an adult');
// }

// const favourite = Number(prompt("what's your favourite number?"));
// console.log(favourite);

// if(favourite === 23){
//     console.log('cool 23 is an amazing number');
// }else if(favourite === 7){
//     console.log('7 is also a cool number!');
// }else if(favourite === 9){
//     console.log('9 is also a cool number!')
// }else {
//     console.log('number is not 7,9 or 23');
// }

// if(favourite !== 23){
//     console.log('why not 23!');
// }

const hasDriversLicense = true;
const hasGoodVision = true;


console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision){
//     console.assert.log('Sarah can drive');
// }else{
//     console.log('someone else drive please');
// }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log('Sarah can drive');
// }else{
//     console.log('someone else drive please');
// }

// if (today < yesterday){
//         self.improve()
// }else{
//     keepGoing()
// }


// //life motto
// if(sad() === true){
//     sad().stop();
//     beAwesome();
// }

// // its up to you

// if(youwant()=== true){
//     youcan();
// }else{
//     (youCant);
// }

// const scoreDolphins = ((96+108+89)/3);
// const scoreKoalas = ((88+91+110)/3);

// if (scoreDolphins > scoreKoalas) {
//     console.log("dolphins win the trophy");
// } elseif(scoreKoalas > scoreDolphins)
// {
//     console.log("koalas win the trophy");
// }elseif(scoreDolphins === scoreKoalas)
// {
//     console.log("both wins the trophy");
// }

// const scoreDolphins = ((97+112+81)/3);
// const scoreKoalas = ((109+95+86)/3);
// console.log(scoreDolphins,scoreKoalas);
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) 
// {

//     console.log("koalas win the trophy");
// }else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100)
// {
//     console.log("both wins the trophy");
// }

//The swutch statement

// const day = 'sunday';

// switch(day){
//     case 'monday'://day === monday
//     console.log('plan course structure');
//     console.log('go for coding meet up');
//     break;
//     case 'tuesday':
//         console.log('prepare theory videos');
//         break;
//         case 'wensday':
//         case 'thursday':
//             console.log('write code examples');
//             break;
//             case 'friday':
//                 console.log('record videos');
//                 break;
//                 case 'saturday':
//                 case 'sunday':
//                     console.log('enjoy the weekend,take eunice for a date');
//                     break;
//                     default:
//                         console.log('not a valid day');
// }

// const day = 'wensday';

// if(day === 'monday'){
//     console.log('plan course structure');
//     console.log('go for coding meet up');

// }else if (day === 'tuesday'){
//     console.log('prepare theory videos');

// }else if (day === 'wensday' || day === 'thursday')
// {
//     console.log('write code examples');

// }else if(day === 'friday'){
//     console.log('record videos');
// }else if (day === 'saturday' || day == 'sunday') 
// {
//     console.log('enjoy the weekend,take eunice for a date');
// }else{
//     console.log('not a valid day');
// }


//Ternary operator for the conditional 

const age = 23;

// age >= 18 ? console.log('i like to drink wine') : console.log('i would like to drink water');
// //make it simpler
age >= 18 ? 'wine' : 'water';//the we can store this as a variable

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

//unlike  if else statement ,ternary operator which is a expression can be used on template literal

console.log(`i would like to drink ${age >= 18 ? 'wine' : 'water'}`)