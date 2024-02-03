<template>
     
  <div class="SignUp ">
    <div class=" container-fluid my-5 px-5">
      <img src="../assets/favicon.png" alt="" class="" style="width: 8rem; height: 6rem;" id="logo">
    </div>

    <!----alert-->
    <div :class=" `container w-50 alert  alert-dismissible ` + alert">
       <button type="button" class="btn-close" @click="()=>{alert = 'visually-hidden'}"></button>
       <strong>{{ statue_signup }}</strong> 
    </div>
    <!----end alert-->
    
    <div class=" container-fluid ">
      <div class="row ">
         
        <div class="d-flex justify-content-center">
          <!---->
           <span class="form2  col-lg-5 col-md-8 col-sm-10" >
            <div class="text-center ">
                <h1 class=" fw-bold d-flex justify-content-center py-2  ">Sign up</h1>
                <div class="sign row py-4">
                  <span class=" d-flex justify-content-center">
                    <div class=" form-floating col-9">
                   
                      <input type="text" placeholder="name" name="" id="" class=" form-control "  v-model="user.name" required>
                      <label for="" class=" ">name : </label>
                    </div>
                  </span>
                  <span class=" d-flex justify-content-center my-2">
                    <div class=" form-floating col-9">
                   
                      <input type="text" placeholder="Email"  name="email" id="" class=" form-control "  v-model="user.email" required>
                      <label for="" class="">Email : </label>
                    </div>
                  </span>
                  <span class=" d-flex justify-content-center my-2">
                    <div class=" form-floating col-9">
                   
                      <input type="text" placeholder="Password" name="" id="" class=" form-control " v-model="user.password" required>
                      <label for="" class="">Password : </label>
                    </div>
                  </span>
                  <span class=" d-flex justify-content-center my-2">
                    <div class=" form-floating col-9">
               
                      <input type="text" placeholder="Confirm Password" name="" id="" class=" form-control" v-model="user.c_password" required >
                      <label for="" class="">Confirm : </label>
                    </div>
                  </span>
                  <span class=" d-flex justify-content-center my-2">
                    <div class=" form-floating col-9">
                      
                      <input type="text" placeholder="Phone" name="" id="" class=" form-control"  v-model="user.phone" required>
                      <label for="" class="">Phone : </label>
                      
                    </div>
                  </span>
                  <div class=" d-flex justify-content-center">
                    <hr class="col-6">
                  </div>
                  <span>
                    <button id="submit" @click="login()">Next</button>
                    <br>
                    <br>
                    <router-link to="/login"  class="my-2 text-decoration-none link-dark">Do you have account ? </router-link>
                  </span>

                  
                  <span>
                    <br>
                    <br>
                    <p class="my-2 text-decoration-none link-dark fw-bold">Our Sign up with </p>
                      <div class="d-flex justify-content-around">
                        <a href="" class=" bi bi-google px-5"></a>
                        <a href="" class=" bi bi-apple px-5 "></a>
                      </div>
                   </span>
                  </div>

            </div>
          </span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import axios  from 'axios';
import {useCookies}  from 'vue3-cookies'

export default{

  name : 'SignUp',
  inject : ['hostname'],
  data() {
    return {
      user :{
        name : '',
        email : '',
        password : '',
        c_password : '',
        phone : ''
        
      },
      statue_signup:'',
      alert: 'visually-hidden' , 
     
    }
  },

  methods: {
    
     login(){

      if(  this.auth()){
       
      var tmp = this;
     
      
      axios.post(this.hostname + '/create' , {
      name : this.user.name,
      email : this.user.email,
      password : this.user.password,
      phone : this.user.phone,
      }).then((e)=>{
          console.log(e.data);

          if(e.data.status == 1){
            tmp.statue_signup = 'Succsess !'
            tmp.alert = 'alert-success'
            useCookies().cookies.set("info" , e.data.info)
            setTimeout(()=>{  tmp.$router.push('/login') } , 1500)
           
           
          }else{
            tmp.statue_signup = e.data.message
            tmp.alert = 'alert-danger'
           
          }
      
      }).catch( (err) =>{
        console.log(err)
   
      })
       
    }else{
          //         this.statue_signup = 'invaild signup!'
                 //   this.alert = 'alert-danger'
    }
    },

     auth(){
            var  name = this.user.name
            var email = this.user.email
              var password = this.user.password
            var  c_password = this.user.c_password
            var  phone = this.user.phone

        
            var tmp= this
            if(name == '' && email == '' && password == '' && c_password == '' && phone == ''){
                   tmp.statue_signup = 'filed is empty !'
                    tmp.alert = 'alert-danger'
                  
              return false
            }else if ( password != c_password){
                    tmp.statue_signup = 'confirm password invaild !'
                    tmp.alert = 'alert-danger'
                  
              return false
            }else if(!password.match(/^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z!@#$%]{8,12}$/)){
                   tmp.statue_signup = ' password invaild !.. You must enter uppercase and lowercase letters, numbers, and ending with (! , @ , # , $ , %)'
                    tmp.alert = 'alert-danger'
                  
              return false
            }else if(!email.match( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
                    tmp.statue_signup = ' email invaild !..'
                    tmp.alert = 'alert-danger'
                  
              return false
            }else if(phone.length < 10 || phone.length > 13){
                    tmp.statue_signup = ' phone invaild !..'
                    tmp.alert = 'alert-danger'
                  
              return false
            }else{
              return true
            }
            }
            
  },

  mounted(){
    
  }
}

</script>

<style scoped>
.SignUp{
  overflow: hidden;
}
#logo{
  margin-left: 1rem;
}

.form2 h1{
  background-color: #0B2447;
  color: white;
  margin-bottom: 0.5px;
  border-bottom-left-radius: 400px;
  border-top-right-radius: 400px;
}

.form2{
 padding-bottom: 5vh;

}
.sign{
opacity: 0.70;
border-radius: 41px;

box-shadow: inset 0px 0px 10px rgba(165,215,232,0.3 ); /* Warning: CSS does not support Inner Shadow.*/

background: #f7f7f7;
background: linear-gradient(90deg, 
#f7f7f7 0.00%, 
#3787a1 100.00%);
}

.form-control{
  border: none;
 
 
  
  
}

.form-floating{
  margin-top: 0.5rem;
}


.form-control:focus{
  background: transparent;

  border: 0;
  border-bottom: 1px solid;
  box-shadow: none;
  border-radius: 0px;
}

label{
  font-size: 13px;
  top:-0px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}


.form-floating>.form-control-plaintext~label::after, .form-floating>.form-control:focus~label::after, .form-floating>.form-control:not(:placeholder-shown)~label::after, .form-floating>.form-select~label::after{
  background: transparent;
}

#submit{  
    box-shadow: inset 0px 0px 49.5px #1a437c;
  /* Warning: CSS does not support Inner Shadow.*/
  background: #a5d7e8;
  color: white;
  text-decoration: none;
  border-radius: 40px;
  font-size: 100%;
  padding: 8px;
  padding-inline: 10rem;
  font-weight: bold;
  font-size: 15px;
  border: 1px solid transparent;
  z-index: 1;
  
}

button:hover{
  box-shadow: inset 0px 0px 49.5px #12223a;
}

.bi{
  background-color: #0B2447;
  padding: 0.5rem;
  padding-inline: 2rem;
  margin-inline: 1rem;
  color: white;
  border-radius: 40px;
}

</style>
