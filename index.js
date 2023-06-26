'use strict';
// // let javascript = 'amazing';
// // console.log(40 + 20 + 30);

// // let firstName = 'Benson';
// // console.log(firstName);
 

// // let myFirstJob = 'teacher';
// // let myCurrentJob = 'programmer';

// // console.log(myCurrentJob);

// // let javascriptIsFun = true;
// // console.log(javascriptIsFun);
// // console.log(typeof true);
// // console.log(typeof 'mwenda');


// // math operators

// // const now = 2037;
// // const ageBen = now -1992;
// // const ageSharon = now - 1999;
// // console.log(ageBen,ageSharon);        

// // console.log(ageBen * 2 ,ageBen /2 ,2 **3);//( 2**3 means 2 to the power of 3 i.e 2*2*2);

// // const firstName = 'Benson';
// // const lastName = 'mwenda';
// // console.log(firstName + ' '+lastName);

// // // assignment operators
// // let x = 10 + 5;
// // x += 10 //means x = x + 10;
// // x *= 4; //mean x = x * 4;
// // x++; // x + 1;
// // x--;
// // console.log(x);

// // // comparison operators
// // console.log(ageBen > ageSharon);
// // console.log(ageSharon >= 18);

// // const iSFullAge = ageSharon >= 18;

// // console.log(now - 1992 > now - 1999);

// // const now = 2037;
// //  const ageBen = now -1992;
// // const ageSharon = now - 1999;

// // console.log(now - 1992 > now - 1999);

// // let x,y;
// // x = y = 25 - 10 -5;
// // console.log(x,y);

// // const averageAge = (ageBen + ageSharon)/2
// // console.log(averageAge);

// // const massMark = 78.0;
// // const heightMark = 1.69;
// // massJohn = 92.0;
// // heightJohn = 1.95;

// // BMIMark = 78.0 / (1.69 * 1.69);
// // BMIJohn = 92.0 /(1.95 * 1.95);
// // console.log(BMIMark,BMIJohn);

// // const markHigherBMI = BMIMark > BMIJohn;
// // console.log(markHigherBMI);

// // const firstName = 'Benson';
// // const job = 'Businessman';
// // const birthYeah = 1992;
// // const year = 2037;

// // const benson = "i'm" + ' ' + firstName + ', a' +(year - birthYeah) + 'years old ' + job + '!';
// // console.log(benson);

// // const bensonNew = `I'm ${firstName}, a ${year-birthYeah},years old ${job} !`;
// // console.log(bensonNew);

// // // console.log(`just a regular string!`);

// // // console.log('string with \n\
// // // multiple \n\
// // // lines');

// // // console.log(`string 
// // // with 
// // // several lines
// // // yes!`)

// // // const age = 15;
// // // const isOldEnough = age >= 18;

// // // if(isOldEnough){
// // //     console.log('sarah can start driving');
// // // }

// // // // we can make it simpler by writing the condition as follows

// // // if(age >= 18){
// // //     console.log('sarah can start driving');
// // // }

// // // //to add else block

// // // if(age >= 18){
// // //     console.log('sarah can start driving');
// // // }else{
// // //     const yearLeft = 18 - age;
// // //     console.log(`sarah is too young,wait another ${yearLeft} years!`);
// // // }

// // // const birthYeah = 1992;
// // //  let century;
// // // if(birthYeah<= 2000){
// // //  century = 20;
// // // }else{
// // //     century = 21;
// // // }
// // // console.log(century);


// // // //type conversion

// // // const inputYear = '1992';
// // // console.log(Number(inputYear));
// // // console.log(Number(inputYear) + 18);

// // // console.log(Number('mwenda'));
// // // console.log(String(23));
// // // console.log(typeof(NaN));

// // // //type coarcion 
// // // console.log('I am ' + 23 + 'years old');

// // //5 falsy values 0, '' ,undifined ,NaN ,null
// // // console.log(Boolean(0));
// // // console.log(Boolean(undefined));
// // // console.log(Boolean(NaN));
// // // console.log(Boolean(null));
// // // console.log(Boolean('mwenda'));

// // // const money = 0;
// // // if(money){
// // //     console.log("don't spent it all ;");
// // // }else{
// // //     console.log('you should ger a job!');
// // // }

// // // let height;

// // // if(height){
// // // console.log('YAY! height is defined');
// // // }else{
// // //     console.log('height is undefined');
// // // }

// // //equality operators

// // // const age = 18;

// // // if(age === 18){
// // //     console.log('you just become an adult');
// // // }

// // // const favourite = Number(prompt("what's your favourite number?"));
// // // console.log(favourite);

// // // if(favourite === 23){
// // //     console.log('cool 23 is an amazing number');
// // // }else if(favourite === 7){
// // //     console.log('7 is also a cool number!');
// // // }else if(favourite === 9){
// // //     console.log('9 is also a cool number!')
// // // }else {
// // //     console.log('number is not 7,9 or 23');
// // // }

// // // if(favourite !== 23){
// // //     console.log('why not 23!');
// // // }

// // const hasDriversLicense = true;
// // const hasGoodVision = true;


// // console.log(hasDriversLicense || hasGoodVision);
// // console.log(!hasDriversLicense);

// // const shouldDrive = hasDriversLicense && hasGoodVision;

// // // if(hasDriversLicense && hasGoodVision){
// // //     console.assert.log('Sarah can drive');
// // // }else{
// // //     console.log('someone else drive please');
// // // }

// // // const isTired = false;
// // // console.log(hasDriversLicense && hasGoodVision && isTired);

// // // if(hasDriversLicense && hasGoodVision && !isTired){
// // //     console.log('Sarah can drive');
// // // }else{
// // //     console.log('someone else drive please');
// // // }

// // // if (today < yesterday){
// // //         self.improve()
// // // }else{
// // //     keepGoing()
// // // }

// // // //life motto
// // // if(sad() === true){
// // //     sad().stop();
// // //     beAwesome();
// // // }

// // // // its up to you

// // // if(youwant()=== true){
// // //     youcan();
// // // }else{
// // //     (youCant);
// // // }

// // // const scoreDolphins = ((96+108+89)/3);
// // // const scoreKoalas = ((88+91+110)/3);

// // // if (scoreDolphins > scoreKoalas) {
// // //     console.log("dolphins win the trophy");
// // // } elseif(scoreKoalas > scoreDolphins)
// // // {
// // //     console.log("koalas win the trophy");
// // // }elseif(scoreDolphins === scoreKoalas)
// // // {
// // //     console.log("both wins the trophy");
// // // }

// // // const scoreDolphins = ((97+112+81)/3);
// // // const scoreKoalas = ((109+95+86)/3);
// // // console.log(scoreDolphins,scoreKoalas);
// // // if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
// // //     console.log("dolphins win the trophy");
// // // } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) 
// // // {

// // //     console.log("koalas win the trophy");
// // // }else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100)
// // // {
// // //     console.log("both wins the trophy");
// // // }

// // //The swutch statement

// // // const day = 'sunday';

// // // switch(day){
// // //     case 'monday'://day === monday
// // //     console.log('plan course structure');
// // //     console.log('go for coding meet up');
// // //     break;
// // //     case 'tuesday':
// // //         console.log('prepare theory videos');
// // //         break;
// // //         case 'wensday':
// // //         case 'thursday':
// // //             console.log('write code examples');
// // //             break;
// // //             case 'friday':
// // //                 console.log('record videos');
// // //                 break;
// // //                 case 'saturday':
// // //                 case 'sunday':
// // //                     console.log('enjoy the weekend,take eunice for a date');
// // //                     break;
// // //                     default:
// // //                         console.log('not a valid day');
// // // }

// // // const day = 'wensday';

// // // if(day === 'monday'){
// // //     console.log('plan course structure');
// // //     console.log('go for coding meet up');

// // // }else if (day === 'tuesday'){
// // //     console.log('prepare theory videos');

// // // }else if (day === 'wensday' || day === 'thursday')
// // // {
// // //     console.log('write code examples');

// // // }else if(day === 'friday'){
// // //     console.log('record videos');
// // // }else if (day === 'saturday' || day == 'sunday') 
// // // {
// // //     console.log('enjoy the weekend,take eunice for a date');
// // // }else{
// // //     console.log('not a valid day');
// // // }

// // //Ternary operator for the conditional 

// // // const age = 23;

// // // // age >= 18 ? console.log('i like to drink wine') : console.log('i would like to drink water');
// // // // //make it simpler
// // // age >= 18 ? 'wine' : 'water';//the we can store this as a variable

// // // const drink = age >= 18 ? 'wine' : 'water';
// // // console.log(drink);

// // // //unlike  if else statement ,ternary operator which is a expression can be used on template literal

// // // console.log(`i would like to drink ${age >= 18 ? 'wine' : 'water'}`)

// // const bill = 275;
// // const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
// // console.log(`the bill was ${bill} and the tip was ${tip} and the total was ${bill + tip }`);

// // const bill2 = 40;
// // const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 : bill2 * 0.20;
// // console.log(`the bill was ${bill2} and the tip was ${tip2} and the total was ${bill2 + tip2}`)

// //functions

// function logger(){
//     console.log('my name is Benson');
// }
// //calling/invoking /running the function
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor (apples ,oranges){
//     console.log(apples ,oranges);
//     const juice = `juice with ${apples} appples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// //function declaration

// function calAge1(birthYeah){
//     return 2037 - birthYeah;
    
// }

// const age1 = calAge1(1992);

// //function expression

// const calAge2 = function (birthYeah){
//     return 2037 - birthYeah;
// }
// const age2 = calAge2(1991);
// console.log(age1,age2);

// //arrow functions

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1992);
// console.log(age3);




// const yearsUntilRetirement = (birthYeah,firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// };
// console.log(yearsUntilRetirement(1992, 'Benson'));
// console.log(yearsUntilRetirement(1995, 'Bob'));

// functions calling function

//     function cutFruitPieces (fruit){
//         return fruit * 4
//     }


// function fruitProcessor (apples ,oranges){
//   const applePieces =  cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//     console.log(apples ,oranges);
//     const juice = `juice with ${applePieces} appples and ${orangePieces} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

// reviwing functions
    // const calcAge = function(birthYeah){
    //     return 2037 - birthYeah;
    // };

    // const yearsUntilRetirement = function (birthYeah,firstName) {
    //     const age = calcAge(birthYeah);
    //    const retirement = 65 - age;
    //       if(retirement > 0){
    //           console.log(`${firstName} retires in ${retirement} years.`);
    //         return retirement;
    //       }else{
    //           console.log(`${firstName} has already retired.`);
    //         return -1;
    //       }
    //     //  return `${firstName} retires in ${retirement} years.`
    //  };
    //  console.log(yearsUntilRetirement(1992,'Benson'));
    //  console.log(yearsUntilRetirement(1950,'Benson'));

    // const calAverage = (a,b,c) => (a + b + c ) / 3;

    // const scoreDoplhins = calAverage(44,23,71);
    // const scoreKoalas = calAverage(65,54,49);

    // console.log(scoreDoplhins,scoreKoalas);

    // const checkWinner =  function(avgDoplphins,avgKoalas){
    //     if(avgDoplphins >= 2 * avgKoalas){
    //         console.log(`Dolphins win the trophy ${avgDoplphins} vs ${avgKoalas}`);
    //     }else if (avgKoalas >= avgDoplphins * 2)
    //     {
    //         console.log(`Koalas wins the trophy (${avgKoalas} vs ${avgDoplphins}`);
    //     }else{
    //         console.log('no team wins');
    //     }
    // }
    // checkWinner(scoreDoplhins,scoreKoalas);


    // const friend1 = 'michael';
    // const friend2 = 'Sharon';
    // const friend3 = 'kevin';
    // const friend4 = 'simiyu';
    // // creat an array instead

    // const friends = ['michael','sharon','kevin','simiyu'];
    // console.log(friends);

    // //another way  to create an array

    // const yearsD = new Array(1991,1992,1993,1994);

    // console.log(friends[0]); 
    // console.log(friends[friends.length-1]);//to get the last element in an array;

    // friends[2] = 'Alex';
    // console.log(friends);

    // // we can store different types of data in one array
    // const firstName = 'benson';
    // const mwenda =[firstName,'mwenda',2037-1992,'teacher' ,friends];
    // console.log(mwenda);

    // //excercise 

    // const calcAge = function(birthYeah){
    //          return 2037 - birthYeah;
    //      };
    // const years = [1990, 1993 ,1998,1967,1997];

    // const age1 = calcAge(years[0]);
    // const age2 = calcAge(years[1]);
    // const age3 = calcAge(years[years.length - 1]);
    // console.log(age1,age2,age3);

    // //to store them in an array

    // const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])];
    // console.log(ages);

    //add elements

//     const friends = ['michael','sharon','kevin','simiyu'];
//     friends.push('milan');
//     console.log(friends);
//     friends.unshift('gathogo');
//     console.log(friends);

// //remove elements

// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);
// console.log(friends.indexOf('sharon'));
// console.log(friends.includes('sharon'));

// if(friends.includes('sharon')){
//     console.log('you have a friend called sharon');
// }

//objects

// const benson = {
//     firstName: 'benson',
//     lastName : 'mwenda',
//     age : 2037 - 1992,
//     job : 'businessman',
//     friends : ['tonnie','james','kevin','alex']

// }
// console.log(benson);

// // dot notation

// console.log(benson.lastName);

// //brackets notation

// console.log(benson['lastName']);


// const nameKey = 'Name';
// console.log(benson['first' + nameKey]);
// console.log(benson['last' + nameKey]);
 
// const interestIn = prompt('what do you want to know about benson choose between ,firstName,lastName,age,job and friends');
// console.log(benson[interestIn]);

// if(benson[interestIn]) {
//     console.log(benson[interestIn])
// }else{
//     console.log('Wrong request! Choose between firstName,lastName,age,job and friends ');
// }

// //to add an  element on an object

// benson.location = 'kenya';
// benson['kid'] = 'Milan';

// console.log(benson);

// console.log(`${benson.firstName} has ${benson.friends.length} friends and his best friend is called ${benson.friends[0]}`);

//adding functions to objects


// const benson = {
//     firstName: 'benson',
//     lastName : 'mwenda',
//     age : 1992,
//     job : 'businessman',
//     friends : ['tonnie','james','kevin','alex'],
//     hasDriversLicense: true,

//     calcAge : function(birthYeah){
//         return 2037 - birthYeah;
//     }

// }
// console.log(benson.calcAge(1992));
// console.log(benson['calcAge'](1992));


// console.log('lifting weights repatation 1');
// console.log('lifting weights repatation 2');
// console.log('lifting weights repatation 3');
// console.log('lifting weights repatation 4');
// console.log('lifting weights repatation 5');
// console.log('lifting weights repatation 6');
// console.log('lifting weights repatation 7');
// console.log('lifting weights repatation 8');
// console.log('lifting weights repatation 9');
// console.log('lifting weights repatation 10');

// for(let rep = 1; rep <= 10;rep++){
//     console.log(`lifting weights repeation ${rep}`);

// }

// for(let step =1; step <= 10; step++){
//     console.log(`walk ${step} and then stop`);
// }

// for(let shot =1; shot <= 5;shot++){
//     console.log(`drink ${shot} and go home`);
// }

// for(let drive = 1; drive <= 10; drive++);{
//     console.log(`driving  for these kms ${drive}`);
// }

const bensonArray = [
    'benson',
    'mwenda',
     2037 - 1992,
    'businessman',
    ['tonnie','james','kevin','alex']

];

