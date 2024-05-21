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
const readDatabase = require('./controllers/readDatabase')


const words = require('./Data/word')


mongoose.connect("mongodb://127.0.0.1:27017/leebotdb")



// bot.onText(/\/start/, async (msg)=>{
//     const chatId = msg.chat.id;
    
//     bot.sendMessage(chatId,words.welcome,{
//         reply_markup:{
//             inline_keyboard:buttons.InlineButtons.register, 
//             resize_keyboard:true,
//             on_time_keyboard:true
//        }
//     })
//     bot.on('callback_query', async (callback)=>{
//         const chatId = callback.message.chat.id;
//         const username = callback.message.chat.username;
//         // console.log(callback)
    
//        if(callback.data ==='register'){
//         const isAlreadyRegisterd = userExists(chatId) 
//         console.log(isAlreadyRegisterd)
    
//         if(!isAlreadyRegisterd){
//             bot.sendMessage(chatId,'payment method',{
//             reply_markup:{
//                 inline_keyboard:buttons.InlineButtons.done, 
//                 resize_keyboard:true,
//                 on_time_keyboard:true
//            }
//         })  
//         }
//          else {
//           bot.sendMessage(chatId,'You are already registed')
//        }
//        }    
//        else if(callback.data === 'done'){
//                  var usre_id = callback.from.id
//                  bot.sendMessage(chatId,'thanks pls wait untile ur payment varified')
//                  bot.sendMessage(873484934,`please register this user ${username} ${chatId}`,{
//                     reply_markup:{
//                         inline_keyboard:buttons.InlineButtons.payment_check, 
//                         resize_keyboard:true,
//                         on_time_keyboard:true
//                    }
//                  })
//                  bot.on('callback_query',(callback)=>{
//                     console.log(callback)
//                     if(callback.data === 'verified'){
//                         register(usre_id)
//                         bot.sendMessage(usre_id,'verified successfuly')
//                     }
//                     if(callback.data=== 'not verified'){
//                         bot.sendMessage(usre_id,'Please pay accordingly')
//                     }
//                  })
//             }
     
    
//     })
// })                 // Authentication

bot.onText(/\/start/,(msg)=>{
    const chatId = msg.chat.id;
    bot.sendMessage(chatId,words.welcome,{
        reply_markup:{
            keyboard:buttons.KeyboardButtons.start,
            resize_keyboard:true,
            on_time_keyboard:true
        }
    })

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
     
    bot.on('callback_query',(callback)=>{

         const fileName = callback.data;

         if(callback.data=='java'|| callback.data == 'C++'){
         bot.sendMessage(chatId,'now send file from the device')
         bot.on('message',(msg)=>{
            var file;
          try{
                file = msg.document.file_id
          }
          catch(err){
            file = msg.photo.file_id
          }
            
            console.log(file)
           //storage(fileName,file)
         }) 
         }
        
        
            //
            console.log(callback.data)
        })
    }  
   else{
    switch(messageText){
     case 'First Year':{
        file_path = await readDatabase.findFile('C++')
        console.log(file_path)
        bot.sendMessage(chatId,'First Year is Fresh man year it is not included here try another year of education')
        break;
     }
      
     case 'Second Year':{
        file_path = await readDatabase.findFile('C++')
        console.log(file_path)
        bot.sendMessage(chatId,'Semester',{
            reply_markup:{
                inline_keyboard:buttons.InlineButtons.semester,
                resize_keyboard:true,
                on_time_keyboard:true
            }
        })
        break;
     }
     
     case 'Third Year' :{
        file_path = await readDatabase.findFile('C++')
        console.log(file_path)
        bot.sendMessage(chatId,'Semester',{
            reply_markup:{
                inline_keyboard:buttons.InlineButtons.semester,
                resize_keyboard:true,
                on_time_keyboard:true
            }
        })
        break;
     }
     
     case 'Fourth Year' :{
        file_path = await readDatabase.findFile('C++')
        console.log(file_path)
        bot.sendMessage(chatId,'Semester',{
            reply_markup:{
                inline_keyboard:buttons.InlineButtons.semester,
                resize_keyboard:true,
                on_time_keyboard:true
            }
        })
       break; 
     }
     
     case 'Fifth Year':{
        file_path = await readDatabase.findFile('C++')
        console.log(file_path)
        bot.sendMessage(chatId,'Semester',{
            reply_markup:{
                inline_keyboard:buttons.InlineButtons.semester,
                resize_keyboard:true,
                on_time_keyboard:true
            }
        })
        break;
     }
    }    
    bot.on('callback_query',(callback)=>{
        if(callback.data ==='1st semester'){
            bot.sendMessage(callback.message.chat.id,'1st semester courses',{
                reply_markup:{
                    inline_keyboard:buttons.InlineButtons.courses,
                    resize_keyboard:true,
                    on_time_keyboard:true
                }
            })
        }
        else if(callback.data === '2nd semester'){
                bot.sendMessage(callback.message.chat.id,'2nd semester courses',{
                    reply_markup:{
                        inline_keyboard:buttons.InlineButtons.courses,
                        resize_keyboard:true,
                        on_time_keyboard:true
                    }
                })
                bot.on('callback_query',(coursesCallback)=>{
                    switch(coursesCallback.data){
                        case 'java':console.log('sent')
                    }
                })
            }
        
    })
   // bot.sendDocument(chatId,file_path)
   }
  
})




//bot.sendPhoto(873484934,'AgACAgQAAxkBAAM8ZkS1hhcZnoYxz-7nP6iwfAabv9UAAjHJMRsgRyBS5m3huSitnvEBAAMCAANtAAM1BA')
app.listen('4000',function(){
    console.log('running at port 3000')
})