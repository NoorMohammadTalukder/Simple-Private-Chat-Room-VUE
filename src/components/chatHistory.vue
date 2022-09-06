<template>
    <section class="chat">
        <div>
            
            <p><b>You: </b>{{inputMsg}}</p>
            <p><b>Computer: </b>{{replyMsg}}</p>
         
                <input type="text" v-model="userInputMsg" placeholder="type your message">
                <button @click="sendMsg">Send</button>
         
        </div>

    </section>
</template>

<script>

    export default{
        data(){
            return{
                userInputMsg:"",
            }
        },
        emits:[
        'chat-history',
        ],
        props:{
            inputMsg:{
                type:String,
                required:true,
            },
            replyMsg:{
                type:String,
                required:true,
            }
        },
        methods:{
            sendMsg(){
                // alert(this.inputMsg);
                this.$emit('chat-history',this.userInputMsg);
                console.log(this.userInputMsg)
                this.userInputMsg="";
                
            }
        }

    }

</script>


<style>
.chat{
    background-color: beige;
    text-align: left;
    font-size: 16px;
    text-align: center;
}
.chat input{
    margin-top: 20px;
    
    background-color: rgb(166, 166, 166);
}
</style>