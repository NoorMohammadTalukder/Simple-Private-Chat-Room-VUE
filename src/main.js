import { createApp } from 'vue'
import App from './App.vue'
import createChatRoom from './components/createChatRoom.vue'
import enterChatRoom from './components/enterChatRoom.vue'
import chatHistory from './components/chatHistory.vue'
// createApp(App).mount('#app')
const app = createApp(App);
app.component('create-chat-room', createChatRoom);
app.component('enter-chat-room', enterChatRoom);
app.component('chat-history', chatHistory);
app.mount('#app');