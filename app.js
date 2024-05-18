const ex = require('express')
require('dotenv').config();
const api = process.env.API_TOKEN;
const telegram = require('node-telegram-bot-api')
const data = require('./Data/api_fetch') 
const bot = new telegram(api,{polling:true})
const app = ex()
const mongoose = require('mongoose')
const buttons = require('./components/buttons')


bot.on('message',async(msg) =>{
    const chatId = msg.chat.id;
    const messageText = msg.text;

    if(messageText=='/start'){  
        bot.sendMessage(chatId,'Welcome')
    }
    // const response = await data('users');
    const response = 'yess'
    bot.sendMessage(chatId,response,{
        reply_markup:{
             inline_keyboard:buttons.InlineButtons, 
            // keyboard:buttons.KeyboardButtons,
             resize_keyboard:true,
             on_time_keyboard:true
        }
      })
 
})

//bot.sendPhoto(873484934,'AgACAgQAAxkBAAM8ZkS1hhcZnoYxz-7nP6iwfAabv9UAAjHJMRsgRyBS5m3huSitnvEBAAMCAANtAAM1BA')
app.listen('3000',function(){
    console.log('running at port 3000')
})