<template>
    <div class="create-chat">
        <form @submit.prevent="createRoom">
            <div>
            <input type="text" v-model="enteredName" placeholder="Give chatroom a name">
        </div>
       <div>
            <input type="password"  v-model="eneteredPassword" placeholder="Give chatroom a password">
       </div>
       <button>Create</button>
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
        "create-room",
    ],

    methods:{
        createRoom(){
            if(this.enteredName!=="" && this.eneteredPassword!==""){
               this.$emit("create-room",this.enteredName,this.eneteredPassword)
            //    alert(1)
            }
        }
    }
}
</script>


<style>
    .create-chat-room{
       background-color: rgb(127, 195, 255);
       padding-bottom: 10px;
    }
    input{
        background-color: rgb(255, 252, 196);
        border: 0px;
        width: 50%;
        padding: 5px;
        border-radius: 10px;
    }
</style>