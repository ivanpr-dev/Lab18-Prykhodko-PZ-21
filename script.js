let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
let even = numbers.filter(num => num % 2 === 0); 

console.log(doubled);
console.log(even);

const sum = (a, b) => a+b;
console.log(sum(2, 1024));

function greet(name = 'Ivan', surname = 'Prykhodko', group = 'PZ-21') {
  return `Hello, ${name} ${surname} from group ${group}!`;
}

console.log(greet());







