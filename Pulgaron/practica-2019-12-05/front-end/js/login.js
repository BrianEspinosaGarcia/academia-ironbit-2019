
//fetch = require("node-fetch"); 
const ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };

const store = async () => {
      
    let name = document.getElementById('nombre'); 
    let pw = document.getElementById('pw');  

    if(name.value.length !== 0 && pw.value.length !== 0){  
        
        try {
           
            const id = ID();
            const response = await fetch('http://localhost:3000/users',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body:  JSON.stringify({id: id, user: name.value, password: pw.value}),
            });
        
            alert("Usuario guardado con exito");

        } catch (error) {
            console.log('Error:', error); 
        }
    }
    else{
        alert("Nombre o Contraseña vacios");
    }
};



/* function myFunction() {
    fetch('http://localhost:3000/users',{
                  method: 'POST',
                  body:  JSON.stringify({id: 10, password: 'adsasd'}),
                  headers: {
                      'Content-Type': 'application/json'        
                  }
              })
              .then(response => response.json())
              .then(data => console.log(data));
  } */

  const checkNav = async () => {

    let values = {};

    try {

        const response = await fetch('http://localhost:3000/users',{
         method: 'GET',
         });
     
         const json = await response.json();
         values = json;


     } catch (error) {
         console.log('Error:', error); 
     }

    var storedName = values[0].user;
    var storedPw = values[0].password;

    var userName =  document.getElementById('userName'); 
    var userPw =   document.getElementById('userPw'); 

     if(userName.value == storedName && userPw.value == storedPw) {
        alert('Bienvenido '+storedName);
    }else {
        alert('ERROR.');
    }
};
  //fetch = require("node-fetch"); 

  
//check();
//fetch = require("node-fetch"); 
const deleted = async() => {

    var userName =  document.getElementById('userName');  
    var userPw =   document.getElementById('userPw'); 


        /* try {

            const response = await fetch('http://localhost:3000/users',{
             method: 'DELETE',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({id: 1}),
             });
             const json = await response.json();
             console.log( JSON.stringify(json) +'Cuenta eliminada con exito');
         } catch (error) {
             console.log('Error:', error); 
         } */

        fetch(`http://localhost:3000/users/${userName.value}`,{
        method: "DELETE"
        })
        .then (resp => resp.json())
        .then(data =>{alert("eliminado con exito")}, );
    
}
//deleted();
