
    function persoon (Name , family , sen ,jensiiat, phon , emaill){
      const person = {
         firstName: Name,
         lastName: family,
         age: sen,
         gender: jensiiat,
         phoneNumber: phon,
         email: emaill
      };
      return person
    }
    console.log(persoon('soheil' , 'saedi' ,  21 ,'male', 09197164064 ,'soheilsaedi1379@gmail.com'))