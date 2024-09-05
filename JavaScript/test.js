/*function Factorial(n){
    let bag = 1
    for(let i =n; i>=1; i--){
       bag = bag*i
    }
    return `factorial of no. is ${bag}`
}
console.log(Factorial(5));*/

/*function Grade(marks) {
    if(marks <=100 && marks>=80) {
        return`grade is A`
    }
    else if(marks <=80 && marks>=50) {
       return`grade is B`
    }
    else if(marks <=50 && marks >=20) {
        return`grade is C`
    }
    else{
        return`Fail`
    }

    return marks
}
console.log(Grade(65))*/

/*function Negative(num) {
    if(num<0) {
        return`No. is negative `
    }else {
        return`no. is positive`
    }
}
console.log(Negative(-2));*/

/*function Even(n) {
    if(n%2==0) {
        return`no. is even`
    }
    else{
        return`no. is odd`
    }
    
}
console.log(Even(-98));*/

/*function Greatest(i,n) {
    if(i<n) {
        return`n is greatest`
    } else{
        return`i is greatest`
    }
}
console.log(Greatest(2,5));*/

//return`my name is kash ${n}`


/*function Consonants(str) {
    let count =0;
    for(let i=0; i<str.length; i++) {
        if(str[i]!='a' && str[i]!='e' && str[i]!= 'i' && str[i]!= 'o' && str[i]!='u') {
            count++
        }
    }
    return (count)
}
console.log(Consonants('rayiuoioyy'));*/

/*function Digits(str) {
    let count =0;
    for(let i=0; i<str.length; i++) {
        if(!isNaN(str[i])){
           count++ 
        }
    }
    return (count)
}
console.log(Digits('sdfg5545thyjuk2345hg'));*/

/*let row = 5;
let col =5;

for(let i = 0;i < row; i++) {
    let bag = ''

    for(let j = 0; j < col; j++) {
        bag = bag + '* ';
    }
    console.log(bag);
}*/

 
/*function Pattern(row, col) {
    
    for(let i=0;i<row; i++) {
        
    let bag=''
        for(let j=0; j<col;j++) {
            bag = bag+'*';
            
        }
        console.log(bag);
    }

}
Pattern(5,5)*/

let row = 3;
let col = 3;

let bag = ''
for(let i=0; i<row; i++) {

    for(let j=0; j<col; j++) {
        bag=' '
        bag = bag+ '1'
    }
}
console.log(bag);