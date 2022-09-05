<template>
  <section class="header-sction">
    <h1>Welcome to Chat Room</h1>

    <div>
      <button class="header-button" @click="clickCreateRoom">Create a Room</button>
      <button class="header-button" >Enter a Room</button>
    </div>
    <div v-if=(isCreateRoomClicked) class="create-chat-room">
      <create-chat-room></create-chat-room>
    </div>
  </section>
</template>


<script>
  export default{
    data(){
      return{
        isCreateRoomClicked:false,
      }
    },
    methods:{
      clickCreateRoom(){
        this.isCreateRoomClicked=!this.isCreateRoomClicked;
        console.log(this.isCreateRoomClicked)
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
