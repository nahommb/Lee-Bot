const ex = require('express')

require('dotenv').config();
const api = process.env.API_TOKEN;
const telegram = require('node-telegram-bot-api')
const data = require('./Data/api_fetch') 
const bot = new telegram(api,{polling:true})
const app = ex()



bot.on('message',async(msg) =>{
    const chatId = msg.chat.id;
    const messageText = msg.text;

    if(messageText=='/start'){
        bot.sendMessage(chatId,'Welcome')
    }

    const respons = await data();
     console.log(respons)
    bot.sendMessage(chatId,respons)
 
})

//bot.sendPhoto(873484934,'AgACAgQAAxkBAAM8ZkS1hhcZnoYxz-7nP6iwfAabv9UAAjHJMRsgRyBS5m3huSitnvEBAAMCAANtAAM1BA')
app.listen('3000',function(){
    console.log('running at port 3000')
})