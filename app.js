const ex = require('express')
require('dotenv').config();
const api = process.env.API_TOKEN;
const telegram = require('node-telegram-bot-api')
const data = require('./Data/api_fetch') 
const bot = new telegram(api,{polling:true})
const app = ex()
const mongoose = require('mongoose')
const buttons = require('./components/buttons')
const register = require('./controllers/register')
const storage = require('./controllers/storage')

const words = require('./Data/word')


mongoose.connect("mongodb://127.0.0.1:27017/leebotdb")

bot.onText(/\/start/, async (msg)=>{
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId,words.welcome,{
        reply_markup:{
            inline_keyboard:buttons.InlineButtons.register, 
            resize_keyboard:true,
            on_time_keyboard:true
       }
    })
})

bot.on('callback_query', async (callback)=>{
    const chatId = callback.message.chat.id;

   if(callback.data ==='register'){
    const isAlreadyRegisterd = await register('12345') 
    console.log(isAlreadyRegisterd)

    if(!isAlreadyRegisterd){
        bot.sendMessage(chatId,'payment method',{
        reply_markup:{
            inline_keyboard:buttons.InlineButtons.done, 
            resize_keyboard:true,
            on_time_keyboard:true
       }
    })  
    }
     else {
    bot.sendMessage(chatId,'You are already registed')
   }
   }    
   else if(callback.data === 'done'){
             bot.sendMessage(chatId,'thanks pls wait untile ur payment varified')
             bot.sendMessage(chatId,'pp')
        }


})

bot.on('message',async(msg) =>{
    const chatId = msg.chat.id;
    const messageText = msg.text;

    if(chatId===873484934 && messageText==='Admin'){
        bot.sendMessage(chatId,'Enter File Name',{
            reply_markup:{
                inline_keyboard:buttons.InlineButtons.courses
            }
        })    
     
 
    }  
     bot.on('callback_query',async(callback)=>{
         const fileName = callback.data
         bot.sendMessage(chatId,'now send file from the device')
        await bot.on('message',(msg)=>{
            console.log(msg)
         })
         const file = ''
            //storage(fileName,file)
            console.log(callback.data)
        })
    // const response = await data('users');  
    // const response = 'yess'
    // bot.sendMessage(chatId,response,{
    //     reply_markup:{
    //          inline_keyboard:buttons.InlineButtons, 
    //         // keyboard:buttons.KeyboardButtons,
    //          resize_keyboard:true,
    //          on_time_keyboard:true
    //     }
    //   })
 
})

//bot.sendPhoto(873484934,'AgACAgQAAxkBAAM8ZkS1hhcZnoYxz-7nP6iwfAabv9UAAjHJMRsgRyBS5m3huSitnvEBAAMCAANtAAM1BA')
app.listen('3000',function(){
    console.log('running at port 3000')
})