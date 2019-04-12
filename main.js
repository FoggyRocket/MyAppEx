console.log('hay wey ');
//comentario de kain
/**
 * @function [mates] esta funcion hace mates
 */
console.log('hay wey ');
//app example

getName=(name)=>{
    console.log('this part is write by:',name)
}
getName('Dylan')


const fizz = ()=> {
    for(let i=0; i < 100; i++){
        if(i %15 == 0) console.log('fizzbuzz');
         else if(i % 3 == 0) console.log('fizz');  
         else if(i % 5 == 0)console.log('buzz');
         else console.log(i)
    }
}

fizz()
