<template>
    <div class="SignUp">
      <div class=" container-fluid row  my-5 px-5">
        <img src="../assets/favicon.png" alt="" class="" style="width: 8rem; height: 6rem;" id="logo" >
      </div>
  
      <div class=" container-fluid">
        <div class="row ">
          
             <!----alert-->
                <div :class=" `container w-50 alert  alert-dismissible ` + alert">
                  <button type="button" class="btn-close" @click="()=>{alert = 'visually-hidden'}"></button>
                  <strong>{{ statue_signup }}</strong> 
                </div>
              <!----end alert-->
        <div class="d-flex justify-content-center">
             <span class="  form2 col-lg-5 col-md-8 col-sm-10">
              <div class="text-center">
                  <h1 class=" fw-bold d-flex justify-content-center py-2">Log in</h1>
                  <div class="sign py-4">
                    
                    <span class=" d-flex justify-content-center">
                      <div class="form-floating col-9">
                        <input type="text" placeholder="Email"  name="email" id="" class=" form-control" v-model="email" >
                        <label for="">Email</label>
                      </div>
                    </span>
                    <span class=" d-flex justify-content-center">
                      <div class="form-floating col-9">
                        <input type="text" placeholder="Password" name="" id="" class=" form-control" v-model="password" >
                        <label for="">Password</label>
                      </div>
                    </span>
                 
  
                    <span>
                        <br>
                      <a href="" class=" link-dark text-decoration-none py-5">Forget Password</a>
                      <br>
                      <button id="submit" @click="login()">Log in</button>
                      <br>
                      <br>
                      <router-link to="/sign" class="my-2 text-decoration-none link-dark">Do you not have account ? </router-link>
                    </span>
  
                    
                    <span>
                      <br>
                      <br>
                      <p class="my-2 text-decoration-none link-dark fw-bold">Our Sign in with </p>
                        <div class="d-flex justify-content-around">
                          <a href="" class=" bi bi-google px-5"></a>
                          <a href="" class=" bi bi-apple px-5"></a>
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
  import axios from 'axios';
  import {useCookies}  from 'vue3-cookies'
 
  export default{
    name : 'LoginView',
    inject : ['hostname'],
    data(){
      return{
        user : {
          email : '',
          password:''
        },
        statue_signup:'',
      alert: 'visually-hidden' , 
      }
    },

    methods:{

      login(){

        var tmp = this

       
        axios.post( this.hostname +'/login' , {
          email : this.email,
          password : this.password
        }).then( (res)=>{
                
                if(res.data.status == 1){ 
                    tmp.alert = 'alert-success'
                    tmp.statue_signup = 'Success !..'
                    useCookies().cookies.set("info" , res.data.info)
            setTimeout(()=>{  tmp.$router.push('/homeuser') } , 1500)
                }else{
                  tmp.alert = 'alert-danger'
                  tmp.statue_signup = res.data.message
                }
          
            }
        ).catch((err)=>{
          console.log(err)
        })
      }

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
    border-bottom-left-radius: 200px;
    border-top-right-radius: 200px;
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
  
  #submit{    box-shadow: inset 0px 0px 49.5px #1a437c;
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
  