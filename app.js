const ex = require('express')

require('dotenv').config();
const api = process.env.API_TOKEN;
const telegram = require('node-telegram-bot-api')
 
const bot = new telegram(api,{polling:true})
const app = ex()

bot.on('message',(msg)=>{
    const chatId = msg.chat.id;
    const messageText = msg.text;

    console.log(msg);
    // Respond to the user
    // bot.sendMessage(chatId, `You said: ${messageText}`);
    
    bot.sendMessage(chatId,`Hello ${msg.chat.first_name} አርሰናል ሻምፒዮን አይሆንም::
    የአርሰናል ደጋፊ ከሆንክ ይሄን አስታውስ ዋንጫ አታቅም ወደፊትም ዘለአለምህን ዋንጫ አታይም ምክንያቱም ይሄ አርሰናል ነው ትናንትም ዛሬም ነገም ከነገወዲያም ትንሽ ከለብ ናቹ ጨርሻለው ደግመህ አንብበው 🦶🦶🦶🦶🦶🦶🦶🦶🦶🦶🦶`)
})

// bot.sendPhoto(873484934,'AgACAgQAAxkBAAM8ZkS1hhcZnoYxz-7nP6iwfAabv9UAAjHJMRsgRyBS5m3huSitnvEBAAMCAANtAAM1BA')
app.listen('3000',function(){
    console.log('running at port 3000')
})