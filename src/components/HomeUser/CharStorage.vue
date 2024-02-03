<template>
    <div class=" col-6">
      <canvas id="storage-chart"></canvas>
    </div>
</template>

<script>
//import axios from 'axios';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { useCookies } from 'vue3-cookies';

export default{
    name : 'ChartStorage',
    inject : ['hostname'],
 
  methods:{

    getDate(){

      const tmp = this
      var id_user = useCookies().cookies.get('info')._id
      axios.get( this.hostname + `/get_data_chart/${id_user}`).then( (res) =>{

        var pdf = 0
        var video = 0
        var img = 0
        var word = 0
        var other = 0

          for(var i =0 ; i< res.data.length ; i++){
           
              var j = res.data[i].suffix
            
              if(j == 'jfif' || j == 'jpg' || j == 'jpeg' || j=='png' || j=='gif'){
                img = 1 + img
              }else if(j == 'docx' || j == 'pptx'  || j=='docm' || j=='dotx' || j == 'xlsx'){
                  word = 1 + word
              }else if(j == 'mp4' || j =='mpg' || j=='mov' || j=='wmv' || j=='rm'){
                video = 1 + video
              }else if(j == 'pdf'){
                pdf = 1 + pdf
              }else{
                other =1 + other
              }
          }

          tmp.chartInfo(pdf , video , img , word , other)
      }).catch(err =>{
        console.log(err)
      })
    },

    chartInfo(pdf , video , img , word , other){
      const ctx = document.getElementById('storage-chart');
       new Chart(ctx, {
        type: 'polarArea',
            data: {
              labels: [
              'Pdf',
              'Video',
              'Img',
              'Word , Ecxel',
              'Other'
            ],
            datasets: [{
              label: 'Storage State',
              data: [pdf, video, img, word, other],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ]
            }]
            },
            options: {
              
            }
            });
    }

  },

  mounted(){
    
  
     if(useCookies().cookies.get('info')){
         
       this.getDate()
        }

    }
}
</script>

<style>
</style>