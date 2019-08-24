//let age= prompt('How old are you');
function drive(event){
    event.preventDefault();
    let age = document.getElementById('age').value;

    if(age == 18){
        
        document.getElementById('log').innerHTML = 'small car';
        
    }else if( age>18 && age<=24){
      
        document.getElementById('log').innerHTML = 'big car';
    }
     else if (age > 24){
         document.getElementById('log').innerHTML= 'Can drive a truck';  
          }    
          else {
             document.getElementById('log').innerHTML='Too young to drive';
          }
}
drive()