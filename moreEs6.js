// kono akta object er value pawyar upai

const student = [
    { name: 'atikur', id: 6003, job: "devolopar", salary: 20000 }

]
// console.log(student[0].name)
const fatherId = {
    name: 'habibur Rahman', village: 'patisar', post: 'patisar', job: 'bisnessman', incume: 20000,

    address: {
        presentId: 'Rajshahi', past: 'bonali'
    }
}
// console.log(fatherId.village , fatherId.post, fatherId.job, fatherId.address.presentId)

const numbers = [2, 4, 5, 7, 8, 9]

const dubble = number => number * 2;

const mapping = numbers.map(dubble);

dubble(numbers)
// console.log(mapping)

// simple 

const makeDubble = [2, 4, 5, 6, 7, 8, 9].map(x => x * 2);
// console.log(makeDubble)
const numberArr = [44, 55, 77, 88, 99]
const half = numberArr.map(n => n / 2);
// console.log(half);

const { name, id, village } = { name: 'atik', id: 707, village: 'patisar' }
// console.log(village,id,name)

//filter use

const num = [12, 4, 55, 6, 38, 20, 11, 23, 55, 22, 11, 8]
const bigNum = num.filter(number => number > 10);
const evenNum = num.filter(number => number % 2 === 0);
// console.log(evenNum)
const oddNum = num.filter(number => number % 2 === 1);
// console.log(oddNum) 


function min(nums) {
    return Math.min(...nums)
}
// console.log(min( [1,3,2 ]))

const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);


