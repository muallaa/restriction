<template>

                <!----section 1-->
                <div class="col-md-3 col-12 my-lg-0 my-5 ">
                    <div class="row  bg-white item shadow" >
                            <h3 class=" text-center mt-4 text-white">Stroage</h3>
                            <div >
                                <div class=" d-flex justify-content-around border mx-0 p-3 bg-white AllStorage">
                                    <span class="">
                                        <span class="bi bi-hdd-fill  fs-1"></span>
                                    </span>
                                    <span>
                                       <p> {{ formatFileSize(sizeTotal , 3) }} of 10GB</p>
                                       <span>
                                            <div class="progress w-100">
                                                <div class="progress-bar" :style="'width:'+progressTotal + '%;'"></div>
                                            </div>
                                         </span>
                                    </span>
                                </div>
                            </div>

                            <div>
                                <div class="bg-white my-3 StorageDetails">
                                    
                                    <h4 class="p-3 fs-4">Storage Details</h4>

                                    <div class="  px-3 py-3">
                                        
                                        <div class=" my-3">
                                            <div class="d-flex">
                                                <span class="bi bi-file-earmark-fill fs-2 align-self-center me-2"></span>
                                                <span>
                                                    <h6>Documente</h6>
                                                    <h6>{{countDoc}} Files {{formatFileSize(sizeDoc , 3)}}</h6>
                                                </span>
                                            </div>
                                            <div>
                                               <div class="progress w-75" >
                                                    <div class="progress-bar " :style="'width:'+progressDoc + '%;'"></div>
                                               </div>
                                            </div>
                                        </div>

                                        <div class=" my-3">
                                            <div class="d-flex">
                                                <span class="bi bi-image-fill fs-2 align-self-center me-2"></span>
                                                <span>
                                                    <h6>Photo</h6>
                                                    <h6>{{countImg}} Files {{formatFileSize(sizeImg , 3)}}</h6>
                                                </span>
                                            </div>
                                            <div>
                                                <div class="progress w-75">
                                                    <div class="progress-bar " :style="'width:'+progressImg + '%;'"></div>
                                               </div>
                                            </div>
                                        </div>

                                        <div class=" my-3">
                                            <div class="d-flex">
                                                <span class="bi bi-play-circle-fill fs-2 align-self-center me-2"></span>
                                                <span>
                                                    <h6>Media</h6>
                                                    <h6>{{countVid}} Files {{formatFileSize(sizeVid , 3)}}</h6>
                                                </span>
                                            </div>
                                            <div>
                                                <div class="progress w-75">
                                                    <div class="progress-bar " :style="'width:'+progressVid + '%;'"></div>
                                               </div>
                                            </div>
                                        </div>

                                        <div class=" my-3">
                                            <div class="d-flex">
                                                <span class="bi bi-box-fill fs-2 align-self-center me-2"></span>
                                                <span>
                                                    <h6>Others</h6>
                                                    <h6>{{countOther}} Files {{formatFileSize(sizeOther , 3)}}</h6>
                                                </span>
                                            </div>
                                            <div>
                                                <div class="progress w-75">
                                                    <div class="progress-bar " :style="'width:'+progressOther + '%;'"></div>
                                               </div>
                                            </div>
                                        </div>

                                        

                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <!---section 1 end-->
</template>

<script>

import axios from 'axios'
import { useCookies } from 'vue3-cookies'
export default{
    name:'StorageD',
    inject : ['hostname'],
    data(){
        return{
            sizeTotal:0,
            countDoc:0,
            countImg:0,
            countVid:0,
            countOther:0,
            sizeDoc:0,
            sizeImg:0,
            sizeVid:0,
            sizeOther:0,
            progressTotal: 0,
            progressOther:0,
            progressImg:0,
            progressVid:0,
            progressDoc:0
        }
    },

    methods:{
        getTotalSize(){
           this.sizeTotal=0
            this.countDoc=0
            this.countImg=0
            this.countVid=0
            this.countOther=0
            this.sizeDoc=0
            this.sizeImg=0
            this.sizeVid=0
            this.sizeOther=0
            const tmp = this
            var id_user = useCookies().cookies.get('info')._id
            axios.get(this.hostname + `/recent_file/${id_user}`).then((res) => {

                
                    for(var i =0 ; i < res.data.length ; i++){

                        tmp.sizeTotal += parseFloat(res.data[i].size)
                        var j = res.data[i].suffix
                        var size = res.data[i].size
                        if(j == 'jfif' || j == 'jpg' || j == 'jpeg' || j=='png' || j=='gif'){
                                tmp.countImg = 1 + tmp.countImg
                                tmp.sizeImg += parseInt(size)
                            }else if(j == 'pdf' || j == 'docx' || j == 'pptx'  || j=='docm' || j=='dotx' || j == 'xlsx'){
                                tmp.countDoc = 1 + tmp.countDoc
                                tmp.sizeDoc += parseInt(size)
                            }else if(j == 'mp4' || j =='mpg' || j=='mov' || j=='wmv' || j=='rm'){
                                tmp.countVid = 1 + tmp.countVid
                                tmp.sizeVid += parseInt(size)
                            }else{
                                tmp.countOther = 1 + tmp.countOther
                                tmp.sizeOther += parseInt(size)
                            }
                    }

                    tmp.progressTotal = (tmp.sizeTotal * 100)/10000000000

                    tmp.progressDoc = (tmp.sizeDoc * 100)/10000000000
                    tmp.progressImg = (tmp.sizeImg * 100)/10000000000
                    tmp.progressVid = (tmp.sizeVid * 100)/10000000000
                    tmp.progressOther = (tmp.sizeOther * 100)/10000000000
                    
                

            }).catch((err) => {
                console.log(err)
            })
        },

        formatFileSize(bytes,decimalPoint) {
                if(bytes == 0) return '0 Bytes';
                var k = 1000,
                    dm = decimalPoint || 2,
                    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                    i = Math.floor(Math.log(bytes) / Math.log(k));
                return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
                },
    },

    mounted(){
        this.getTotalSize()
    }
}
</script>

<style scoped>


/* section 1*/


.AllStorage{
    border-radius: 25px;
}

.AllStorage span svg{
    width:75;
     height:75;
}

.AllStorage span:nth-child(2){
    align-self: center;
}

.AllStorage span .progress-bar{
    width: 75%;
    background:linear-gradient( 91deg, #f7f7f7 0.00%, #164d5f 100.00%);
}



.StorageDetails{
    border-radius: 25px;
}

.StorageDetails .progress-bar{
    background:linear-gradient( 91deg, #f7f7f7 0.00%, #164d5f 100.00%);
    width: 40%;
}
/* section 1 end */

</style>