let num = 27 
let counter = 0
for(let i= 1; i < num ;  i++){ 
  if(num % i === 0  ){
      counter += i }}
if(counter == num){
    console.log('yes')
}else{
    console.log('no')
}
//***********فانکشن */
function magsom (num){
    let counter = 0
    for(let i= 1; i < num ;  i++){ 
      if(num % i == 0  ){
          counter += i }}
    if(counter == num){
       return 'Yes' ;
    }else{
        return 'No';
}
}
console.log(magsom(27))
console.log(magsom(6))