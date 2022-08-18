function mosalas (a , b ,c ){
        if ( a**2 + b**2 === c**2 || c**2 + b**2 === a**2 || c**2 + a**2 === b**2 )
        {
            return 'yes'
        }else{
            return 'no'
        }
    }
    console.log(mosalas(4 , 5 , 3 ))
    console.log(mosalas( 4 , 6 , 3 ))