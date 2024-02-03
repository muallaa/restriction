<template>
    
                            <!---monthly account -->
                            <div class="col-md-8 col-12  ">
                                <div class="item shadow monthlyaccount pb-2">
                                    <span >
                                        <p class="fs-4 px-5 pt-2 text-white" style="font-weight: 500;">Monthly accounting</p>
                                        <div class="row py-4  px-2 border m-4" style="border-radius:30px;">
                                            <div class="col-3 text-center align-self-center ">
                                                <p class=" m-3 " style="font-weight: 300; font-size:11px;">Choose month</p>
                                                <input type="date" class=" form-control">
                                            </div>

                                            <div class="col-1 d-flex justify-content-center ">

                                                <div class="bg-warning" style="width: 5%; height: 100%;"></div>
                                            
                                            </div>

                                            <div class="col-3 d-flex justify-content-center">
                                                <div class="">
                                                    <span class="row bg-white  text-center pt-1 "
                                                        style="font-weight: 500;">
                                                        <p class="m-0">Total</p>
                                                        <p>4000,00$</p>
                                                    </span>

                                                    <span class="row bg-white py-1  text-center px-4  my-1"
                                                        style="font-weight: 500;">
                                                        <p class="m-0">Total</p>
                                                        <p>4000,00$</p>
                                                    </span>

                                                    <span class="row bg-white py-1 text-center px-4  my-1"
                                                        style="font-weight: 500;">
                                                        <p class="m-0">Total</p>
                                                        <p>4000,00$</p>
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div class="col-1 d-flex justify-content-center ">

                                                <div class="bg-warning" style="width: 5%; height: 100%;"></div>
                                            
                                            </div>
                                            <div class="col-5">
                                                
                                            </div>
                                        </div>
                                    </span>
                                    
                                   
                                </div>
                            </div>

                            <!---monthly account -->
</template>

<script>
export default{
    name:'MonthlyAccount'
}
</script>

<style scoped>
   /* monthlyaccount */
   .monthlyaccount span div:nth-child(2) div span{
    border-top-left-radius: 100px;
    border-bottom-right-radius: 100px;
    font-size: 12px;
  }

  
  .monthlyaccount span div:nth-child(2) div span:nth-child(2){
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
    /* monthlyaccount */
</style>