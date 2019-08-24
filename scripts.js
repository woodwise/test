let age= prompt('How old are you');
function drive(age){
    if(age == 18){
        document.write('Can drive a small car');
        
    }else if( age>18 && age<=24){
      document.write('Can drive a big car')
    }
     else if (age > 24){
         document.write('Can drive a truck')   
          }    
          else {
             document.write('Too young to drive')
          }
}
drive()