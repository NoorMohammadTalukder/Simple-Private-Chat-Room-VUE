<template>
    <div class="enter-chat">
       <form @submit.prevent="enteRoom">
            <div>
                <input type="text"  v-model="enteredName" placeholder="Enter chatroom a name">
            </div>
            <div>
                <input type="password" v-model="eneteredPassword" placeholder="Enter chatroom a password">
            </div>
            <div>  <button>Enter</button></div>
       </form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                enteredName:"",
                eneteredPassword:"",
    
            }
        },
    
        emits:[
            "enter-room",
        ],
    
        methods:{
            enteRoom(){
                // alert(1)
               
                   this.$emit("enter-room",this.enteredName,this.eneteredPassword)
                   console.log(this.enteredName)
                   console.log(this.eneteredPassword)
                //    alert(1)
              
            }
        }
    }
    </script>

<style>
    .enter-chat{
       background-color: rgb(127, 246, 255);
       padding-bottom: 10px;
    }
    .enter-chat input{
        background-color: rgb(199, 196, 255);
        border: 0px;
        width: 50%;
        padding: 5px;
        border-radius: 10px;
    }
</style>