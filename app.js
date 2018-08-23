function favMovie(title = (`The Room`), name = (`World`)) {
    console.log(`My name is ${name} and my fave movie is ${title}`)
};
favMovie('Pokémon, the First Movie', 'Richard');

const favMovie2 = (name = 'World', title = 'The Room') => console.log(`My name is ${name} and my fave movie is ${title}`)
favMovie2();

const getFirstName = (name) => {
    console.log(name[0])
};

const getFirstName2 = (name) => console.log(name[0]);

fullName = "Richard Garner"
var words = fullName.split(' ')
getFirstName(words)
getFirstName2(words)

const mathItUp = (a, b) => {
    let exponent = Math.pow(a, b);
    let multiply = a * b;
    return{
        power: exponent,
        product: multiply
    };
};
let math = mathItUp(7,8)
console.log(`${7} to the power of ${8} is ${math.power} and 7 times 8 is ${math.product}`)


const threeArray = (name, location, faveFood) => {
console.log(`My name is ${name}, i live in ${location} and my favorite food is ${faveFood}!`)
}
myArray = ["Paul", "Hawaii", "the blood of my enemies"]
threeArray(...myArray)

let Richard = "Richard"
let long = [...Richard]

const spreadItWide = character => {
    console.log(character)
       }

for (let i = 0; i < long.length; i++) {
    spreadItWide(long[i])
}
