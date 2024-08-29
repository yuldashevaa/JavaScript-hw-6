//TASK 1

let array = [1,2,3,4,5,6,7,8,9,10,11]

let even = []
let odd = []
sum = 0
for(let i = 0; i<array.length; i++){
    if(array[i] %2 === 0){
        even.push(array[i])
    }else{
        odd.push(array[i])
    }

    sum += array[i]
}

console.log('even numbers: ', even);
console.log('odd numbers: ', odd);
console.log('sum of all numbers : ',sum);


//TASK 2

let placeholder = []

for(let i = 0; i<Infinity; i++){
    let word = prompt('enter the command')
    let command = word.split(', ')
    if(word == 'stop'){
        break
    }else if(command[0] == 'add'){
    placeholder.push(command[1])
    }else if(command[0] == 'del'){
        for(let i = 0; i<placeholder.length;i++){
            placeholder[i] == command[1] ? placeholder.splice(i,1)  : ''
        }
    }
    console.log(placeholder);
}
















































