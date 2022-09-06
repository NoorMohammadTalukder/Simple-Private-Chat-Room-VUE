<template>
  <section class="header-sction">
    <h1>Welcome to Chat Room</h1>

    <div>
      <button class="header-button" @click="clickCreateRoom">Create a Room</button>
      <button class="header-button" @click="clickEnterRoom">Enter a Room</button>
    </div>

    <div v-if=(isCreateRoomClicked)  class="create-chat-room">
      <create-chat-room @create-room="createRoom"></create-chat-room>
    </div>

    <div v-if=(isEnterRoomClicked)>
      <enter-chat-room @enter-room="enterRoom"></enter-chat-room>
    </div>

    <div v-if=(showChat)>
      <chat-history 
      :input-msg="inputMsg"
      :reply-msg="replyMsg"
      @chat-history="enterChatHistory"
      
      
      ></chat-history>
    </div>
  </section>
</template>


<script>
  export default{
    data(){
      return{
        isCreateRoomClicked:false,
        isEnterRoomClicked:false,
        showChat:false,
        inputMsg:"",
        replyMsg:"",
        chatsRoom:[
          {
            id:1,
            name:"abc",
            password:"123",
            status:false,

          },
          {
            id:2,
            name:"xyz",
            password:"321",
            status:false,

          }
        ],
        chatReply:[
          {
            input:"hi",
            reply:"hello",
          },
          {
            input:"how are you",
            reply:"I am good",
          },
          {
            input:"how are you?",
            reply:"I am good",
          },
          {
            input:"who are you?",
            reply:"I am your computer",
          },
          {
            input:"what's you doing?",
            reply:"Nothing",
          },
        ]
     
      }
    },
    methods:{
      clickCreateRoom(){
        this.isCreateRoomClicked=!this.isCreateRoomClicked;
        this.isEnterRoomClicked=false;
        console.log(this.isCreateRoomClicked)
      },
      clickEnterRoom(){
        this.isEnterRoomClicked=!this.isEnterRoomClicked;
        this.isCreateRoomClicked=false;
        console.log(this.isCreateRoomClicked)
      },
      createRoom(name,password){
     
        const newChat={
          id:  new Date().toISOString(),
          name:name,
          password:password,
          status:true,

        };
        this.chatsRoom.push(newChat);
        this.isCreateRoomClicked=false;
        
        // console.log(this.chatsRoom)

      },
      enterRoom(name,password){
        const findRoom=this.chatsRoom.find(chat=>chat.name===name && chat.password===password);
        if(findRoom){
          this.isEnterRoomClicked=false;
          this.showChat=true;
        }
        
        // console.log(findRoom);
        
        

      },
      enterChatHistory(inputMsg){
        
       
        const reply=this.chatReply.find(chat=>chat.input===inputMsg);
       if(reply){
        this.inputMsg=inputMsg;
        this.replyMsg=reply.reply;
       }else{
        this.inputMsg=inputMsg;
         this.replyMsg="Sorry!!!! currently I have no messages available for you..."
       }
        // console.log(inputMsg);
      }
    }
  }
</script>


<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0px;
}
.header-sction {
  color: #58004d;
  font-size: 32px;
  background-color: aliceblue;
  width: 100%;
  height: 100vh;
  text-align: center;
}
.header-button {
  padding: 10px;
  margin: 10px;
  background-color: aquamarine;
  border: 0px;
  border-radius: 10px;
}
.header-button:hover {
  padding: 10px;
  margin: 10px;
  background-color: rgb(232, 255, 127);
  border: 0px;
  border-radius: 10px;
}
</style>
