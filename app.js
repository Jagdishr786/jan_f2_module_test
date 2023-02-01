
let signup_form  = document.querySelector('.signup');

let input_name = document.querySelector('#name');
let input_email = document.querySelector('#email');
let input_username = document.querySelector('#username');
let error = document.querySelector('.error');



signup_form.addEventListener('submit', validateForm)

let arr = []
let id = 1

function validateForm(e) {
     e.preventDefault();
        let name = input_name.value;
        let email = input_email.value;
        let username = input_username.value;
       

        if(checkNumberofWords(name) <2){
           error.innerHTML = 'Name must be at least 2 words';
        }
        else if(email.indexOf('@') == -1){
            error.innerHTML = 'Email must contain @';
        }
      
       else if(checkEmail(email) == false){
            error.innerHTML = 'Email already exists';
        }
      else{
            error.innerHTML = 'Form Submitted Successfully'; 

            let obj = {id: id++, name, email , username}
            arr.push(obj)
            console.log(arr)
            input_name.value = '';
            input_email.value = '';
            input_username.value = '';
            localStorage.setItem("data" , JSON.stringify(arr))
          
            
      }

    
 }


 function checkNumberofWords(name){

      name = name.trim();

      let arr = name.split(' ');

      return arr.length
 }





 function checkEmail(email){
     for( t of arr){
            if(t.email == email){
                return false
            }
     }
        return true
 }






 