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


const words = require('./Data/word');



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
            inline_keyboard:buttons.InlineButtons.start,
            resize_keyboard:true,
            on_time_keyboard:true
        }
    })

})
// bot.on('callback_query',(callback)=>{

//     const fileName = callback.data;

//     if(callback.data=='java'|| callback.data == 'C++'){
//     bot.sendMessage(chatId,'now send file from the device')
//     bot.on('message',(msg)=>{
//        var file;
//      try{
//            file = msg.document.file_id
//      }
//      catch(err){
//        file = msg.photo.file_id
//      }
       
//        console.log(file)
//       //storage(fileName,file)
//     }) 
//     }
   
   
//        //
//        console.log(callback.data)
//    })

var container = {
    nahom:{
        id:1234
    },
    eyob:{
        id:1122,
        year:'firstYear'
    }
}

const firstSemester = buttons.KeyboardButtons.semester[0][0].text
const secondSemester = buttons.KeyboardButtons.semester[0][1].text
bot.on('message',async(msg) =>{
    const chatId = msg.chat.id;
    const messageText = msg.text;
    // const messageuserName = msg.chat.username

    if(chatId===873484934 && messageText==='Admin'){
        bot.sendMessage(chatId,'Enter File Name',{
            reply_markup:{
                inline_keyboard:buttons.InlineButtons.courses.fifthYear.firstSemester
            }
        })    
     

    }  
   else if(messageText===firstSemester || messageText===secondSemester){
   // bot.sendDocument(chatId,file_path)
     console.log(chatId)
        if(container[chatId]){
            console.log('check')
            const courseYear = container[chatId].year; 
            bot.sendMessage(chatId,`${courseYear} ${messageText} course test`,{
                reply_markup:{
                    inline_keyboard:messageText===firstSemester? buttons.InlineButtons.courses[courseYear].firstSemester:buttons.InlineButtons.courses[courseYear].secondSemester,
                    resize_keyboard:true,
                    on_time_keyboard:true
                }
            })
            delete container[chatId]
            console.log(container)
        }
   
   
    console.log(container)

   }
})
bot.on('callback_query',async(courseCallback)=>{


    bot.answerCallbackQuery(courseCallback.id)
    const year= courseCallback.data
    

    try{
        switch(courseCallback.data){

        case 'First Year':{
        bot.sendMessage(courseCallback.message.chat.id,'Fresh Man',{
         
        })  
        break;  
       }
       case 'Second Year':{
        bot.sendMessage(courseCallback.message.chat.id,'Choice Semester',{
            reply_markup:{
                keyboard:buttons.KeyboardButtons.semester,
                resize_keyboard:true,
                on_time_keyboard:true
            }
        })  
        const userId = await courseCallback.message.chat.id
        container[userId]={
            id:courseCallback.message.chat.id,
            year:'secondYear'
        }   
    //     bot.once('message',async(msg)=>{
    //         const message = msg.text
    //         const msgId = msg.chat.id;
            
    //         console.log(userName)

    //         if( msgId === courseCallback.message.chat.id){
              
    //         if(container[userName]){
    //         await bot.sendMessage(msg.chat.id,`${year} ${message} courses`,{
    //         reply_markup:{
    //             inline_keyboard:message===semester? buttons.InlineButtons.courses.secondYear.firstSemester:buttons.InlineButtons.courses.secondYear.secondSemester,
    //             resize_keyboard:true,
    //             on_time_keyboard:true
    //         }
    //        })
    //        delete container[userName]
    //        console.log(container)
    //         }
          
    //         }
    
        
    // })
    break;
    }
    case 'Third Year' :{
        bot.sendMessage(courseCallback.message.chat.id,'Choice Semester',{
            reply_markup:{
                keyboard:buttons.KeyboardButtons.semester,
                resize_keyboard:true,
                on_time_keyboard:true
            }
        })   
        const userId = await courseCallback.message.chat.username
        container[userId]={
            id:courseCallback.message.chat.id,
            year:'thirdYear'
        }  
    //     bot.once('message',(msg)=>{
    //         const message = msg.text
    //         const msgId = msg.chat.id;
    //         if( msgId === courseCallback.message.chat.id){
    //              bot.sendMessage(msg.chat.id,`${year} ${message} courses`,{
    //         reply_markup:{
    //             inline_keyboard:message===semester? buttons.InlineButtons.courses.thirdYear.firstSemester:buttons.InlineButtons.courses.thirdYear.secondSemester,
    //             resize_keyboard:true,
    //             on_time_keyboard:true
    //         }
    //     })
    //         }
       
    // })
    break;
       } 
       
 
      case 'Fourth Year' : {
        bot.sendMessage(courseCallback.message.chat.id,'Choice Semester',{
            reply_markup:{
                keyboard:buttons.KeyboardButtons.semester,
                resize_keyboard:true,
                on_time_keyboard:true
            }
        })    
        const userId = await courseCallback.message.chat.id
        container[userId]={
            id:userId,
            year:'fourthYear'
        } 
    //     bot.once('message',(msg)=>{
    //         const message = msg.text
    //         const msgId = msg.chat.id;
    //        if( msgId === courseCallback.message.chat.id){
    //         bot.sendMessage(msg.chat.id,`${year} ${message} courses`,{
    //                 reply_markup:{
    //                     inline_keyboard:message===semester? buttons.InlineButtons.courses.fourthYear.firstSemester:buttons.InlineButtons.courses.fourthYear.secondSemester,
    //                     resize_keyboard:true,
    //                     on_time_keyboard:true
    //                 }
    //             })
    //        }
   
    // })
    break;
       }
           
       case 'Fifth Year':{
        bot.sendMessage(courseCallback.message.chat.id,'Choice Semester',{
            reply_markup:{
                keyboard:buttons.KeyboardButtons.semester,
                resize_keyboard:true,
                on_time_keyboard:true
            }
        })    
        const userId = await courseCallback.message.chat.id
        container[userId]={
            id:userId,
            year:'fifthYear'
        } 
    //     bot.once('message',(msg)=>{
    //         const message = msg.text
    //         const msgId = msg.chat.id;
    //         if( msgId === courseCallback.message.chat.id){
    //               bot.sendMessage(msg.chat.id,`${year} ${message} courses`,{
    //         reply_markup:{
    //             inline_keyboard:message===semester? buttons.InlineButtons.courses.fifthYear.firstSemester:buttons.InlineButtons.courses.fifthYear.secondSemester,
    //             resize_keyboard:true,
    //             on_time_keyboard:true
    //         }
    //     })
    //         }
      
    // })  
    break;
       }
        }
        }

    catch(err){
        console.log(err)
        
    }
    
})



//bot.sendPhoto(873484934,'AgACAgQAAxkBAAM8ZkS1hhcZnoYxz-7nP6iwfAabv9UAAjHJMRsgRyBS5m3huSitnvEBAAMCAANtAAM1BA')
app.listen('4000',function(){
    console.log('running at port 3000')
})