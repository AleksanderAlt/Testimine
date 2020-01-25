const a = 8;
let b = 1;
var c = 2;

function sum(param1, param2 = 5){
    return param1, param2;
}

console.log("sum(1)=", sum(1))
console.log("sum(1,10)=", sum(1, 10))

const sum2 = (param1, param2 = 5) => {
    return param1, param2;
}

console.log("sum2(1)=", sum2(1))
console.log("sum2(1,10)=", sum2(1, 10))

b = 3363;

console.log(a, b);

if (a > b) {
    console.log("a on suurem kui b");
} else {
    console.log("b on suurem kui c")
}

for (let i = 0; i < 10; i++){
    console.log("aaa", i)
}

const object = {
    'param1' : 124,
    'param3' : 'cat',
    'x' : {
        "a" : 243,
        "basg" : 43464,
        "c" : new Date(),
    },
    'func_sum' : (param1, param2 = 5) => {
        return param1 + param2;
    },
    'func2' : sum,
};
console.log('pbject', object);
console.log('object.func_sum(1,5', object.func_sum(1,5));

const arr = [1, 3, 'test', new Date()];
console.log('arr', arr)