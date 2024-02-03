<template>

                <!---quic access-->
                <div class="quic  col-2   py-5 align-self-start">
                    <div class="row ">
                        
                                 
                    <span class=" d-flex justify-content-center  ">
                        
                            <img src="../assets/favicon.png" alt="" class="mt-5" width="100" height="100">
               
                      </span>
                        <div class="w-100"></div>
                    <span class=" d-flex justify-content-center ">
                       <img :src="hostname + '/profile/' + avatar" width="100" height="100" class="mt-5 mb-2 rounded-circle"  alt="">
                    </span>
                    <span class=" text-center">
                        <span class="" id="name">{{name}}</span>
                        <span class="bi bi-pencil-square mx-2 "  title="edite profile" id="edite" data-bs-toggle="modal" data-bs-target="#modal_edite" @click="()=>{background_header='background:  linear-gradient( to right, #f7f7f7 0.00%, #3787a1 100.00%);'}"></span>

                        <!----->
                            <div class="modal fade" id="modal_edite">
                                <div class=" modal-dialog" >
                                    <div class=" modal-content" >
                                        <div class=" modal-header" :style="background_header">
                                               <span> update Profile </span>
                                               <button class=" btn btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <form enctype="multipart/form-data" @submit.prevent="update_profile">
                                            <div class=" modal-body">
                                                <div class=" form-floating my-1">
                                                    <input type="text" class=" form-control" name="" id="" v-model="name">
                                                    <label for="">Name</label>
                                                </div>

                                                <div class=" form-floating my-1">
                                                    <input type="text" class=" form-control" name="" id="" v-model="email">
                                                    <label for="">Email</label>
                                                </div>

                                                <div class=" form-floating my-1">
                                                    <input type="text" class=" form-control" name="" id="" v-model="password">
                                                    <label for="">Password</label>
                                                </div>

                                                <div class=" form-floating my-1">
                                                    <input type="text" class=" form-control" name="" id="" v-model="phone">
                                                    <label for="">Phone</label>
                                                </div>

                                                <div class="  my-1 " id="img_upload">
                                                    <input type="file" ref="file" class=" form-control" name="" id="" @change="upload_img">
                                                    
                                                    <div class=" text-center align-content-center">
                                                        <div class=" bi bi-upload py-2">
                                                            <div class=" "> Upload img</div>
                                                        </div> 
                                                         
                                                    </div>
                                                </div>
                                            </div>

                                            <div class=" modal-footer">
                                                <button class="btn btn-primary" type="submit">update</button>
                                            </div>
                                         </form>

                                    </div>
                                </div>
                            </div>
                        <!----->
                    </span>
                    <span class="links ">
                     <router-link to="/homeuser" class="my-3 px-5 d-flex justify-content-center"><span class=" bi bi-house-fill  mx-2"></span>Home</router-link>
                    
                  

                   
                    <router-link to="/storageuser" class="my-3 px-5 d-flex justify-content-center"><span class=" bi bi-file-richtext-fill  mx-2"></span>Files</router-link>
                    <router-link to="" class="my-3 px-5 d-flex justify-content-center"><span class=" bi bi-camera-video-fill  mx-2"></span>Meeting</router-link>
                    <router-link @click="logout()" to="/" class="my-3 px-5 d-flex justify-content-center"><span class=" bi bi-arrow-left-square  mx-2" ></span> Log out</router-link>
                    </span>
                   
                </div>
                </div>

                <!--end quic access-->

</template>

<script>
import axios from 'axios';
import { useCookies } from 'vue3-cookies';

export default{
    name:'SideBar',
    inject : ['hostname'],
    data(){
        return{
            name: '',
            email:'',
            password:'',
            phone:'',
            img_profile:'',
            avatar : '',
            background_header : 'background:  linear-gradient( to right, #f7f7f7 0.00%, #3787a1 100.00%);'
        }
    },

    methods:{
        info_user(){
            
            const tmp = this

            axios.get(this.hostname + `/get_info_user/${useCookies().cookies.get('info')._id}`).then( (res)=>{
              
                tmp.name = res.data.info.name
                tmp.email = res.data.info.email
                tmp.password = res.data.info.password
                tmp.phone = res.data.info.phone
                tmp.avatar = res.data.info.img
                useCookies().cookies.set('info' , res.data.info)
            }).catch(err => console.log(err))

        },

        upload_img(){

            this.img_profile = this.$refs.file.files[0]
            


        },


        update_profile(){

            if(this.img_profile == ''){

                const tmp = this
                axios.put( this.hostname + `/update_info_user/${useCookies().cookies.get('info')._id}` , {
                    name : this.name,
                    email : this.email,
                    password : this.password,
                    phone : this.phone
                }).then( ()=>{
                    tmp.background_header = 'background:  linear-gradient( to right, #f7f7f7 0.00%, #20860d 100.00%);transform:scale(1.05);'
                    tmp.info_user()
                }).catch(err =>{ console.log(err)})

            }else{
                    const formdata = new FormData()

                    formdata.append('img' , this.img_profile)
                    formdata.append('name' , this.name)
                    formdata.append('email' , this.email)
                    formdata.append('password' , this.password)
                    formdata.append('phone' , this.phone)

                    const tmp = this
                 axios.put( this.hostname + `/update_info_img_user/${useCookies().cookies.get('info')._id}` ,formdata ).then( ()=>{
                    tmp.background_header = 'background:  linear-gradient( to right, #f7f7f7 0.00%, #20860d 100.00%);' 
                    tmp.info_user()
                }).catch(err =>{ console.log(err)})

            }
        },

        logout(){

            useCookies().cookies.remove('info')
            
        }
    },

    mounted(){
        if(!useCookies().cookies.get('info')){
            alert("not allow accsess !..")
            this.$router.push('/login')
        }else{
            this.info_user()
        }
    }

}
</script>

<style scoped>

.modal-header{
   
    
    transition: 2s;
}
#name{
    color: var(--c);
    font-weight: 700;
    font-size: 22px;
    
}

.quic{
    align-self: center;
}
.quic .links {
    
    justify-content: center;
    text-align: center;
    
    
}
.quic .links a {
    box-shadow: inset 0px 0px 100px #0b2447;
    /* Warning: CSS does not support Inner Shadow.*/
    background: #a5d7e8;
    color: white;
    text-decoration: none;
    border-radius: 40px;
    font-size: 100%;
    padding: 10px;
    padding-inline: 50px;
    justify-self: center;
    
}



.quic .links a:hover{
    box-shadow: inset 0px 0px 100px #5380ad;
}



/* bi-arrow-left-circle-fill */

.bi-arrow-left-circle-fill{
    cursor: pointer;
    margin-left: 18vh;
    position: absolute;

    
}

#edite{
    cursor: pointer;
}

#img_upload{
    border: 1px dashed #0d6efd;
}
#img_upload input{
    position: absolute;
    width: 100%;
    height: 10vh;
   opacity: 0;
}

#img_upload div{
    color: #0d6efd;
    width: 100%;
    
}
/* bi-arrow-left-circle-fill end */

@media (max-width:800px) {

    
    #name{
        color: var(--c);
        font-weight: 700;
        font-size: 18px;
        margin-left: 1.5rem;
    }
    
    .quic{
        align-self: center;
    }
    
    .quic .row span:nth-child(1) img , 
    .quic .row span:nth-child(3) img{
        width: 80;
        height: 80;
        margin-left: 2.5rem;
    }
    .quic .links {
        
        justify-content: center;
        text-align: center;
        
        
    }
    .quic .links a {
        box-shadow: inset 0px 0px 100px #0b2447;
        /* Warning: CSS does not support Inner Shadow.*/
        background: #a5d7e8;
        color: white;
        text-decoration: none;
        border-radius: 40px;
        font-size: 12px;
        padding: 10px;
        padding-inline: 50px;
        justify-self: center;
       
    }
    
    .quic .links a .bi{
        font-size: 15px;
    }
    
    
    /* bi-arrow-left-circle-fill */
    
    .bi-arrow-left-circle-fill{
        cursor: pointer;
        margin-left: 12vh;
        position: absolute;
    
        
    }
    /* bi-arrow-left-circle-fill end */
    }

</style>