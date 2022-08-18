let Weight = 93
 let height = 171
 let BIM = Weight / ( (height / 100 )** 2)
    
    if(BIM < 18.5){
        
            console.log('Underweight', BIM)
            }
            else if( (18.5 <= BIM ) && ( BIM < 25))
            {
            
            console.log('Normal', BIM)
            } 
            else if( ( 25 <=  BIM ) && ( BIM < 30 ) )
            {
            
            console.log('Overweight', BIM)
            }
            else  ( 30 <= BIM )
            {
            
            console.log('obese', BIM)
            }
  فانکشن 
function BMI ( Weight , height){
    let BIM = Weight / ( (height / 100 )** 2)
    
    if(BIM < 18.5){
                Normal
            return `Underweight: ${BIM} `;
            }
            else if( (18.5 <= BIM ) && ( BIM < 25))
            {
              return  `Normal: ${BIM} `;
            } 
            else if( ( 25 <=  BIM ) && ( BIM < 30 ) )
            {
              return  `Overweight: ${BIM} `;
            }
            else  ( 30 <= BIM )
            {
    
              return `obese: ${BIM} `;
            }
}
console.log(BMI(93 , 171))