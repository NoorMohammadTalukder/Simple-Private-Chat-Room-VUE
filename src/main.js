import { createApp } from 'vue'
import App from './App.vue'
import createChatRoom from './components/createChatRoom.vue'
// createApp(App).mount('#app')
const app = createApp(App);
app.component('create-chat-room', createChatRoom);
app.mount('#app');