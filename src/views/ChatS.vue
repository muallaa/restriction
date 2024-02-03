<template>
    <div class="main">
    <div class=" container-fluid">
        <div class="row h-100 overflow-hidden">
            <SideBar></SideBar>

               <!---ditails-->

                <div class="details py-2 px-4  col-10 ">
                    <div class=" bg-white p-5" style="border-radius: 30px;">
                        <div class="row">
                            <div class="col-3">
                                <div>
                                    <h2>Chat</h2>
                                    <hr class=" container">

                                    <div class="d-flex justify-content-center my-5 ">
                                        <input type="text" class=" form-control rounded-pill w-75" placeholder="Search ...">
                                    </div>

                                    <div class=" d-flex justify-content-between">
                                        <span>
                                                    <p>Last Chats</p>
                                            </span>
                                        <span class=" d-flex justify-content-center option">
                                                <span class=" bi bi-plus-circle-fill fs-5 mx-3"></span>
                                        <span class=" bi bi-three-dots-vertical fs-5"></span>
                                        </span>
                                    </div>

                                    <div class="d-flex justify-content-start btn_type">
                                        <button class="mx-2 btn ">Mangment</button>
                                        <button class="mx-2 btn">Company</button>
                                    </div>

                                    <div class=" d-grid my-2">
                                        <div class="d-flex my-3 chat_person">
                                            <span class=" align-self-center">
                                                    <img src="../assets/Home/business-people-meet.png" alt=""  class=" rounded-circle" width="60" height="60">
                                                </span>
                                            <span class=" align-self-center mx-2">
                                                    <p style="margin-bottom: 0px;" class="">Kate Johsan</p>
                                                    <p class="">last seen 20:00</p>
                                                </span>
                                        </div>

                                        <div class="d-flex my-3 chat_person">
                                            <span class=" align-self-center">
                                                    <img src="../assets/Home/business-people-meet.png" alt=""  class=" rounded-circle" width="60" height="60">
                                                </span>
                                            <span class=" align-self-center mx-2">
                                                    <p style="margin-bottom: 0px;" class="">Kate Johsan</p>
                                                    <p class="">last seen 20:00</p>
                                                </span>
                                        </div>

                                       
                                    </div>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="rounded rounded-3 chat_main">
                                    <div class="header_caht row shadow pt-4 px-4 pb-3 m-0 ">
                                        <div class="d-flex justify-content-between align-content-center ">
                                            <span>
                                                <p>Kate Johnson</p>
                                            </span>
                                            <span>
                                                <span class="bi bi-telephone-fill p-2  rounded-circle mx-2"></span>
                                            <span class="bi bi-camera-video p-2  rounded-circle mx-2"></span>
                                            <span class="bi bi-three-dots-vertical p-2 rounded-circle mx-2"></span>
                                            </span>
                                        </div>
                                    </div>

                                    <div class=" content_chat row py-3 " style="height: 68vh; overflow-y: scroll;">
                                        <div class="px-5 ">


                                            <div class="d-flex flex-row justify-content-start mb-4">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                  alt="avatar 1" style="width: 45px; height: 100%;">
                                                <div class="p-3 ms-3 " style="border-radius: 15px; background-color: rgba(57, 192, 237,.2);">
                                                  <p class="small mb-0">Hello aakldjal.</p>
                                                </div>
                                                
                                                <p class="small ms-3 mb-3 rounded-3 text-muted d-flex align-self-end">00:11</p>
                                              </div>


                                              <div class="d-flex flex-row justify-content-end mb-4">
                                                 
                                                <p class="small me-3 mb-3 rounded-3 text-muted d-flex align-self-end">00:11</p>
                                             
                                                <div class="p-3 me-3 border" style="border-radius: 15px; background-color: #fbfbfb;">
                                                  <p class="small mb-0">Thank you, I really really really really really like your product.</p>
                                                </div>
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                                  alt="avatar 1" style="width: 45px; height: 100%;">
                                              </div>
                                           


                                        </div>



                                    </div>

                                    <div class="send_message py-3 shadow">
                                        <div class="row shadow mx-5">
                                            <!---  <div class="d-flex">
                                                <input type="text" placeholder="Write your Message" name="" id="" class=" form-control ">
                                                <span class="d-flex">

                                                </span>
                                            </div>-->

                                            <!--chat-->
                                            <div class="chat__conversation-panel">
                                                <div class="chat__conversation-panel__container">
                                                    <button class="chat__conversation-panel__button panel-item btn-icon add-file-button">
                                                    <svg class="feather feather-plus sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                      <line x1="12" y1="5" x2="12" y2="19"></line>
                                                      <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    </svg>
                                                  </button>
                                                    <button class="chat__conversation-panel__button panel-item btn-icon emoji-button">
                                                    <svg class="feather feather-smile sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                      <circle cx="12" cy="12" r="10"></circle>
                                                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                    </svg>
                                                  </button>
                                                    <input class="chat__conversation-panel__input panel-item" placeholder="Type a message..." />
                                                    <button class="chat__conversation-panel__button panel-item btn-icon send-message-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="1036">
                                                      <line x1="22" y1="2" x2="11" y2="13"></line>
                                                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                                    </svg>
                                                  </button>
                                                </div>
                                                <!--chat-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="col-1">
                                <div class=" d-grid">
                                    <img src="https://dummyimage.com/200x200/dddddd/fff.png&text=200x200" class="img-thumbnail rounded-circle" alt="...">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!---end ditals-->
                </div>
        </div>
    </div>
</div>
</template>

<script>

import SideBar from '../components/SideBar.vue'
export default{
    name : 'ChatS',

    components:{
        SideBar
    }
}
</script>

<style scoped>

:root{
    --c : #0b2447;
    --cc:#a5d7e8;
}.main {
    margin: 0px;
    padding: 0px;
    box-shadow: inset 0px 0px 10px rgba(165, 215, 232, 0.6);
    /* Warning: CSS does not support Inner Shadow.*/
    background: #f7f7f7;
    background: linear-gradient(91deg, #f7f7f7 0.00%, #3787a1 100.00%);
    top: 0;
    overflow-x: hidden;
}

#name{
    color: var(--c);
    font-weight: 700;
    font-size: 22px;
}


.option span{
    color : var(--cc);
}

.btn_type button{
    font-weight: 400;
    font-size: 13px;
}
.btn_type  button:first-child{

    background: var(--cc);

}
.btn_type button:nth-child(2){
    background-color:rgb(218, 215, 215);
}

.chat_person span p{
    
    margin-left: 8px;
    font-size: 10px;
}

.chat_person span p:first-child{
    font-size: 15px;
    font-weight: 600;
}

.chat_main{

    background-color: rgb(218, 221, 221);
}

.chat_main div div span p{
    color: var(--c);
    font-weight: 700;
    font-size: 15px;
}

.chat_main span span{
    background-color: var(--cc);
    color:white;
}

.text_chat{
    background-color: var(--cc);
    font-size: 12px;
    border-radius: 25px;
    border-bottom-left-radius: 0px;
    
    overflow-wrap:break-word;
    
}
.text_chat_end{
    background-color: var(--cc);
    font-size: 12px;
    border-radius: 25px;
    overflow-wrap:break-word;
    
}
/*-------------*/

.send_message .chat__conversation-panel {
    background: var(--cc);
    border-radius: 12px;
    padding: 0 1em;
    height: 55px;
}

.send_message .chat__conversation-panel__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
}

.send_message .chat__conversation-panel__container .panel-item:not(:last-child) {
    margin: 0 1em 0 0;
}

.send_message .chat__conversation-panel__button {
    background: grey;
    height: 20px;
    width: 30px;
    border: 0;
    padding: 0;
    outline: none;
    cursor: pointer;
}

.send_message .chat__conversation-panel .add-file-button {
    height: 23px;
    min-width: 23px;
    width: 23px;
    background: var(--chat-add-button-background);
    border-radius: 50%;
}

.send_message .chat__conversation-panel .add-file-button svg {
    width: 70%;
    stroke: #54575c;
}

.send_message .chat__conversation-panel .emoji-button {
    min-width: 23px;
    width: 23px;
    height: 23px;
    background: transparent;
    border-radius: 50%;
}

.send_message .chat__conversation-panel .emoji-button svg {
    width: 100%;
    fill: transparent;
    stroke: #54575c;
}

.send_message .chat__conversation-panel .send-message-button {
    background: var(--chat-send-button-background);
    height: 30px;
    min-width: 30px;
    border-radius: 50%;
    transition: 0.3s ease;
}

.send_message .chat__conversation-panel .send-message-button:active {
    transform: scale(0.97);
}

.send_message .chat__conversation-panel .send-message-button svg {
    margin: 1px -1px;
}

.send_message .chat__conversation-panel__input {
    width: 100%;
    height: 100%;
    outline: none;
    position: relative;
    color: var(--cc);
    font-size: 13px;
    background: transparent;
    border: 0;
    font-family: "Lato", sans-serif;
    resize: none;
    color: black;
}

::-webkit-scrollbar {
    width: 2px;
    background-color:  rgb(221, 221, 221);
   
}

::-webkit-scrollbar-thumb {
    background-color:  rgb(172, 170, 170);
   
}

::-webkit-scrollbar-track {
    background: rgb(221, 221, 221);
    
}
</style>