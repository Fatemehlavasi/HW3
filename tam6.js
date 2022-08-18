number = 13
 trevel = 14
 if(trevel == 0){
    console.log(20)
 }else if(trevel == 7){
    console.log(number)
 }else if(number - trevel > 0){
    console.log(number - trevel )
 }else{
    console.log(0)
 }
//*************************فانکشن */
function trevelStudent (number , trevel){
    if(trevel == 0){
       return 20 ;
     }else if(trevel == 7){
        return (number);
     }else if(number - trevel > 0){
        return number - trevel;
     }else {
        return 0 ;
     }
}
console.log(trevelStudent(14 , 0))
console.log(trevelStudent(13 , 9))