<template>

    <!---section 2-->
    <div class=" col-md-12 col-12 my-lg-0 my-5">
       <div class=" container-fluid">
           <div class=" row item  ">

            <div class=" bg-white p-2 d-flex justify-content-between ">

                <span class=" align-self-center fs-3">All Folder</span>
                <span>
                <button :class=" 'btn btn-create ' + hide_createFolder "  data-bs-toggle="modal" data-bs-target="#modal_folder">create folder <span class=" bi bi-folder-check mx-1"></span></button>
                            
                            <div class="modal fade " id="modal_folder">
                                <div class=" modal-dialog modal-dialog-centered">
                                    <div class=" modal-content">
                                        <div class="modal-header d-flex justify-content-between align-self-auto">
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
                        </span>
                            
                            
            </div>

            
          
            <div class="bg-white" v-for="folder in list_folder" :key="folder">
                <div class=" d-flex justify-content-between p-2"   @drop="onDrop($event , folder)" @dragenter.prevent @dragover.prevent>
                    <span class=" bi bi-folder-fill mx-1 fs-6" id="name_folder" @dblclick="openFolder(folder._id)">
                        &nbsp; {{folder.name}}
                    </span>

                    <span class="d-flex">
                        <div class="mx-2">
                            {{ datediff(folder.createdAt) }}
                        </div>
                        <div class=" dropend">
                                <span class="bi bi-three-dots-vertical text-white p-1" data-bs-toggle="dropdown"></span>
                                <ul class=" dropdown-menu">
                                    <li><button class=" dropdown-item text-danger" @click="deletFolder(folder._id)">Delete</button></li>
                                </ul>
                            </div>
                    </span>
                    
                </div>
                <hr>
            </div>

            <div class=" bg-white" v-for="file in files" :key="file" >
                <div class=" d-flex justify-content-between p-2 "  id="name_file" draggable="true" @dragstart="startDrag($event , file)"  >
                    <a :href="hostname + '/uploads/' + file.file" class="d-flex">
                        <span class=" bi bi-file-earmark mx-1 fs-6">
                            &nbsp; {{file.file}}
                        </span>
                    </a>

                    <span class=" d-flex">
                        <div class="mx-2">
                           {{ datediff(file.createdAt) }}
                         </div>
                        <div class=" dropend">
                                <span class="bi bi-three-dots-vertical text-white p-1" data-bs-toggle="dropdown"></span>
                                <ul class=" dropdown-menu">
                                    <li><button class=" dropdown-item text-danger" @click="deletFile(file._id)">Delete</button></li>
                                </ul>
                            </div>
                    </span>
                    
                </div>
                <hr>
            </div>

           

             </div>
       </div>
   </div>

   <!---section 2 end-->
</template>

<script>
import axios from 'axios';
import { useCookies } from 'vue3-cookies';
import img from '@/assets/favicon.png'
export default {

    name : 'AllFolder',
    inject : ['hostname'],
    data(){
        return{
            list_folder:[],
            files:[],
            name_folder:'',
            hide_createFolder :''
        }
    },

    methods:{

        allfolder(){
            
            const tmp = this
            this.list_folder = []
            var id_f = 0

            if(this.$route.params.id_folder){
                    id_f = this.$route.params.id_folder
                }

            if(this.$route.params.type){
                console.log('is type')
               
            }else if(this.$route.params.search){
                console.log('is search')
            }else{
                
              

                axios.post(this.hostname + `/getfolder/${useCookies().cookies.get('info')._id}` , {
                    id_folder : id_f
                }).then((res)=>{
                    
                        tmp.list_folder = res.data

                }).catch((err) => {
                    console.log(err)
                })
            }
        },

         datediff (first) {
            var m = new Date();
                var dateString = m.getUTCFullYear() + '-' + (m.getUTCMonth() + 1) + '-' + m.getUTCDate() + ' ' + m.getUTCHours() + ':' + m.getUTCMinutes() + ':' + m.getUTCSeconds();
                
                var y = new Date(first);
                var firstt = y.getUTCFullYear() + '-' + (y.getUTCMonth() + 1) + '-' + y.getUTCDate() + ' ' + y.getUTCHours() + ':' + y.getUTCMinutes() + ':' +y.getUTCSeconds();         
                
                if(Math.round((Date.parse(dateString) - Date.parse(firstt)) / (1000 * 60 *60 * 24)) > 0){
                    return Math.round((Date.parse(dateString) - Date.parse(firstt)) / (1000 * 60 *60 * 24)) + ' day'
                }else{
                    return Math.round((Date.parse(dateString) - Date.parse(firstt)) / (1000 * 60)) +  ' m'
                }

            },

            file(){
                const tmp = this
                var id_user = useCookies().cookies.get('info')._id
                if(this.$route.params.type){
                    
                    var list_img = Array()
                    var list_doc = Array()
                    var list_video = Array()
                    var list_other = Array()

                    axios.get(this.hostname + `/recent_file/${id_user}`).then((res) => {

                        for(var i =0 ; i< res.data.length ; i++){
                            var j = res.data[i].suffix
                        if(j == 'jfif' || j == 'jpg' || j == 'jpeg' || j=='png' || j=='gif'){
                            list_img.push(res.data[i])
                            }else if(j == 'pdf' || j == 'docx' || j == 'pptx'  || j=='docm' || j=='dotx' || j == 'xlsx'){
                                list_doc.push(res.data[i])
                            }else if(j == 'mp4' || j =='mpg' || j=='mov' || j=='wmv' || j=='rm'){
                                list_video.push(res.data[i])
                            }else{
                                list_other.push(res.data[i])
                            }


                            if(this.$route.params.type == 'img'){
                                tmp.files = list_img
                            }else if(this.$route.params.type == 'doc'){
                                tmp.files = list_doc
                            }else if(this.$route.params.type == 'video'){
                                tmp.files = list_video
                            }else{
                                tmp.files = list_other
                            }
                            // tmp.files = res.data
                        }
                     
                        

                        }).catch((err) => {
                        console.log(err)
                        })
                }else if(this.$route.params.search){

                    const search = this.$route.params.search

                    axios.get(this.hostname + `/recent_file/${id_user}`).then((res) => {

                        for(var i =0 ; i< res.data.length ; i++){
                            var j = res.data[i].file

                            if(j.includes(search)){
                                this.files.push(res.data[i])
                            }
                        }}).catch((err) => {
                        console.log(err)
                        })


                }else{
                var id_f = 0

                if(this.$route.params.id_folder){
                        id_f = this.$route.params.id_folder
                    }

                        
                        axios.post(this.hostname + `/recent_file/${id_user}` , {
                            id_folder : id_f
                        }).then((res) => {

                        
                                tmp.files = res.data
                            

                        }).catch((err) => {
                            console.log(err)
                        })
                    }
            },

            deletFolder(id){
            const tmp = this
            axios.delete( this.hostname + `/deleteFolder/${id}`).then( (res)=>{
                console.log(res.data)
                tmp.allfolder()
                    })
                },

                deletFile(id){
                    const tmp = this
                    axios.delete( this.hostname + `/deleteFile/${id}`).then( ()=>{
                        
                        tmp.file()
                            })
                        },

               createFolder(){

                            const tmp = this
                            var id_f = 0

                            if(this.$route.params.id_folder){
                                    id_f = this.$route.params.id_folder
                                }
                            axios.post( this.hostname + `/createFolder/${useCookies().cookies.get('info')._id}` , {
                                name : this.name_folder,
                                id_folder: id_f
                            }).then( (res)=>{

                            
                                if(res.data.status == true){
                                    tmp.modal_header = 'bg-success'
                                    document.getElementById('close_modal').click();
                                }else{
                                    tmp.modal_header = 'bg-danger'
                                }

                                tmp.name_folder = ''
                                tmp.allfolder()
                            }).catch((err) => {
                                console.log(err)
                            })
                },

                startDrag(event , file){
                    
                    event.dataTransfer.dropEffect = 'move'
                    event.dataTransfer.effectAllowed = 'move'
                    const imgg = new Image(0.1,0.1)
                    imgg.src = img
                    event.dataTransfer.setDragImage( imgg, 0.1 , 0.1)
                    
                    event.dataTransfer.setData('id_file' , file._id)
                },

                onDrop(event , folder){
                  
                    const tmp = this
                    const itemID = event.dataTransfer.getData('id_file')
                   

                    axios.put( this.hostname + `/MoveFile/${folder._id}` , {
                        file_id : itemID
                    }).then( ()=>{
                        tmp.allfolder()
                        tmp.file()
                    })
                },

               async openFolder(id){
                  await this.$router.push(`/folder/${id}`)
                 
                    
                }
               
    },

    mounted(){
        if(this.$route.params.type){
            this.hide_createFolder = 'visually-hidden'
        }
        
            this.allfolder()
             this.file()
    }
}
</script>

<style scoped>
#name_folder , #name_file{
    cursor: pointer;
}

.dropend .bi{
    cursor: pointer;
    border-radius: 25%;
    box-shadow: inset 0px 0px 100px #0b2447;
    /* Warning: CSS does not support Inner Shadow.*/
    background: #a5d7e8;
}

.btn-create{
    box-shadow: inset 0px 0px 100px #0b2447;
    /* Warning: CSS does not support Inner Shadow.*/
    background: #a5d7e8;
    color: white;
}

#name_file:hover{
    background-color: #0b24475e;
}
.item a{
    box-shadow: none;
    /* Warning: CSS does not support Inner Shadow.*/
    background: none;
    color: black;
    text-decoration: none;
    border-radius: 0px;
    font-size: 100%;
    padding: 0px;
    padding-inline: 0px;
    justify-self:start;
}
</style>