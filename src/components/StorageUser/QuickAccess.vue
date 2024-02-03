<template>

     <!---section 2-->
     <div class=" col-md-6 col-12 my-lg-0 my-5">
        <div class=" container-fluid">
            <div class=" row item shadow ">
                
                <div class="row  p-3 search_file ">
                    <div class=" justify-content-around">
                    <div class=" d-flex ">
                        <form @submit.prevent="Fsearch" class="d-flex">
                        <input type="text" name="" id="" class=" form-control " placeholder="search file" v-model="search">
                        <button class="bi bi-search btn" type="submit"></button>
                        </form>
                    </div>
                  
                           <div class="  d-flex justify-content-center"> 
                         
                            <button class="btn"  data-bs-toggle="modal" data-bs-target="#modal_folder">create folder <span class=" bi bi-folder-check mx-1"></span></button>
                            
                            <div class="modal fade" id="modal_folder">
                                <div class=" modal-dialog modal-dialog-centered">
                                    <div class=" modal-content">
                                        <div :class="'modal-header d-flex justify-content-between align-self-auto '+modal_header">
                                            <span>   Create New Folder</span>
                                            <span>
                                               <button class="btn btn-close" data-bs-dismiss="modal" id="close_modal"></button>
                                           </span>
                                        </div>   
                                        <form @submit.prevent="createFolder">
                                            <div class="modal-body  d-block " >
                                                <div class="form-floating ">
                                                    <input type="text" class=" form-control" placeholder="" v-model="name_folder">
                                                    <label for="">Name Folder</label>
                                                </div>
                                            </div>
                                            <div class=" modal-footer">
                                                <button class="btn btn-primary" type="submit">creatre</button>
                                            </div>    
                                        </form>
                                    </div>
                                </div>
                            </div>
                          </div>
                   
                </div>
                </div>


                <div class="" id="hr"></div>

                <div class="px-5 recent_file my-3">
                    <h4 class=" fw-bold " >Recent Folders <routerLink class=" float-end fs-6 " style=" cursor: pointer; margin-top: -0.3rem;"  to="/allfolders"> show all</routerLink> </h4>

                    <div class=" row row-cols-lg-2 row-cols-md-4 row-cols-1 my-3 g-3">

                        <div class="col" v-for="folder in recent_folder" :key="folder">
                            <div class="d-flex bg-white p-1 mx-2 justify-content-between ">
                                <router-link :to="'/folder/'+folder._id">
                                <div class="d-flex">
                                <span class="bi bi-folder-fill text-warning fs-3   mx-2"></span>
                                <span class="">
                                    <p class="pt-1">{{ folder.name }}</p>
                                </span>
                            </div>
                                </router-link>
                           
                            <div class=" dropend">
                                <span class="bi bi-three-dots-vertical" data-bs-toggle="dropdown"></span>
                                <ul class=" dropdown-menu">
                                    <li><button class=" dropdown-item text-danger" @click="deletFolder(folder._id)">Delete</button></li>
                                </ul>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>

               
                <div class="" id="hr"></div>


                <div class="px-5 py-3 QuickAccess">
                    <h4 class="py-2">Quick Access</h4>
                    <div class="row g-3 text-center">
                        <div class="col">
                            <router-link to="/allfolders/doc">
                                <div class="d-felx bg-white">
                                    <span class="bi bi-file-pdf-fill align-self-center"></span>
                                    
                                </div>
                            </router-link>
                        </div>

                         <div class="col">
                            <router-link to="/allfolders/img">
                            <div class="d-felx bg-white  align-content-center">
                                <span class="bi bi-image-fill text-success align-self-center "></span>
                               
                            </div>
                            </router-link>
                        </div>
                        <div class="col">
                            <router-link to="/allfolders/video">
                            <div class="d-felx bg-white ">
                                <span class="bi bi-play-circle-fill text-danger "></span>
                              
                            </div>
                            </router-link>
                        </div>

                         <div class="col">
                            <router-link to="/allfolders/other">
                            <div class="d-felx bg-white g-5">
                                <span class="bi bi-box-fill align-self-center "></span>
                                
                            </div>
                            </router-link>
                        </div>

                      
                    </div>
                </div>

                <div class="px-5 py-3 RecentUploadFile">
                    <h4>Recent Uploaded Files</h4>

                    <div class=" gy3">

                        <div class="col bg-white p-2 my-1" v-for="file in files" :key="file">
                            <a :href="hostname + '/uploads/' + file.file" class="d-flex">
                                <span class="bi bi-file-earmark-fill align-self-center me-2"></span>
                                <span>{{file.file}}</span>
                            </a>
                        </div>

                     
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!---section 2 end-->
</template>

<script>
import { useCookies } from 'vue3-cookies';
import axios from 'axios';

export default{

    name:'QuickAccess',
    inject : ['hostname'],
    data(){
        return{
            name_folder : '',
            modal_header :'',
            recent_folder : [],
            files : [],
            search:''
        }
    },

    methods:{

        createFolder(){

            const tmp = this
            axios.post(this.hostname + `/createFolder/${useCookies().cookies.get('info')._id}` , {
                name : this.name_folder,
                id_folder: 0
            }).then( (res)=>{

              
                if(res.data.status == true){
                    tmp.modal_header = 'bg-success'
                    document.getElementById('close_modal').click();
                }else{
                    tmp.modal_header = 'bg-danger'
                }

                tmp.name_folder = ''
                tmp.recentfolder()
            }).catch((err) => {
                console.log(err)
            })
        },

        recentfolder(){

            const tmp = this
            this.recent_folder = []
            axios.get(this.hostname + `/getfolder/${useCookies().cookies.get('info')._id}`).then((res)=>{
                
                console.log(res.data)
              
                if(res.data.length > 4){
                    for(var i = 0 ; i < res.data.length ; i++){
                        tmp.recent_folder.push(res.data[i])
                        if(i == 3){
                            break
                        }
                    }
                }else{
                    tmp.recent_folder = res.data
                }

                console.log(tmp.recent_folder)
               
            }).catch((err) => {
                console.log(err)
            })
        },

        deletFolder(id){
            const tmp = this
            axios.delete(this.hostname + `/deleteFolder/${id}`).then( (res)=>{
                console.log(res.data)
                tmp.recentfolder()
            })
        },

        recent_file(){
            this.files = []
            const tmp = this
            var id_user = useCookies().cookies.get('info')._id
            axios.get( this.hostname + `/recent_file/${id_user}`).then((res) => {

                if(res.data.length > 3){
                    for(var i =0 ; i < res.data.length ; i++){
                        tmp.files.push(res.data[i])
                        if( i == 2){
                            break
                        }
                    }
                }else{
                    tmp.files = res.data
                }

            }).catch((err) => {
                console.log(err)
            })
            },

            Fsearch(){
                
                this.$router.push(`/foldersSearch/${this.search}`)
            }

    },

    mounted(){
        this.recentfolder()
        this.recent_file()
    },

    
        
}
</script>

<style scoped>

    
/* section 2 */
.item a{
    background: none;
    color: black;
    text-decoration: none;
    border-radius: 0px;
    font-size: 100%;
    padding: 10px;
    padding-inline: 0px;
}
.search_file{

    margin: 15px;
    
}

.search_file div:first-child{
    display: flex;
}
.search_file div input{
    border-radius: 10px;
}
.search_file div button{

    transform: translateX(-2.5vw);
}


.search_file div{
    align-self: center;
}

.search_file div div:nth-child(2) button ,.search_file div div:nth-child(3) button{

    font-size: 14px;
    background-color: #0b2447;
    color: white;
}

#hr{
    border: 1px solid;
    border-width: 1.5px;
    width: 75%;
    height: 0px;
    margin: auto;
    margin-top: 0px;
    margin-bottom: 0px;
    
}

.recent_file  .col div{
    border-radius: 15px;
}


.recent_file  .col  span  {
    margin-top: 7px;
    cursor: pointer;
}

.QuickAccess .col div{
    border-radius: 10px;
    padding: 10px;
}


.QuickAccess .col div span:nth-child(2){
    font-size: 13px;
}

.RecentUploadFile .col{
    border-radius: 10px;
    background: linear-gradient( 91deg, #f7f7f7 60.00%, #70b1c7 100.00%);
}

/* section 2 end */

@media (max-width:800px) {
    
/* section 2 */

.search_file{

    margin: 15px;
    
}

.search_file div:first-child{
    height: 40px;
    display: block;
}
.search_file div input{
    border-radius: 10px;
    width: 100%;
}
.search_file div button{

    transform: translateX(-8vw);
    
}

.search_file div{
    align-self: center;
    
}
.search_file div:nth-child(2) , .search_file div:nth-child(3){
   
   
    margin-top: 1vh;
    width: 40vw;
    
}
.search_file div div:nth-child(2) button ,.search_file div div:nth-child(3) button{

    font-size: 12px;
    background-color: #0b2447;
    color: white;
    
}



#hr{
    border: 1px solid;
    border-width: 1.5px;
    width: 75%;
    height: 0px;
    margin: auto;
    margin-top: 8vh;
    margin-bottom: 0px;
    
}

.recent_file h4{
    font-size: 15px;
    margin-left: -2rem;
}
.recent_file  .col div{
    margin-top: 1rem;
    border-radius: 15px;
}


.recent_file  .col  span  {
    margin-top: 7px;
    cursor: pointer;
}

.QuickAccess h4{
    font-size: 18px;
    margin-left: -2rem;
}
.QuickAccess .col div{
    border-radius: 10px;
    padding: 10px;
    margin-top: 1rem;
}


.QuickAccess .col a span:nth-child(2){
    font-size: 13px;
}

.RecentUploadFile h4{
    font-size: 12px;
    margin-left: -2rem;
}
.RecentUploadFile .col{
    border-radius: 10px;
    background: linear-gradient( 91deg, #f7f7f7 60.00%, #70b1c7 100.00%);
}

.RecentUploadFile .col span{
    font-size: 10px;
}
/* section 2 end */


}
</style>