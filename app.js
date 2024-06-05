const ex = require('express')
require('dotenv').config();
const api = process.env.API_TOKEN;
const telegram = require('node-telegram-bot-api')
const bot = new telegram(api,{polling:true})
const app = ex()
const mongoose = require('mongoose')
const buttons = require('./components/buttons')
const register = require('./controllers/register')
const storage = require('./controllers/storage')
const readDatabase = require('./controllers/readDatabase')


const words = require('./Data/word');
const db = process.env.DATABASE_URL
const port = process.env.PORT||4000

mongoose.connect(db)

var commentStore = {

}

bot.onText(/\/start/,(msg)=>{
    const chatId = msg.chat.id;
    bot.sendMessage(chatId,words.welcome,{
                reply_markup:{
                    inline_keyboard:buttons.InlineButtons.register, 
                    resize_keyboard:true,
                    on_time_keyboard:true
               }
            })
})


bot.onText(/\/comment/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Please send your comment:');
    commentStore[chatId]={
        id:chatId
    }
    console.log(commentStore) 
});
bot.onText(/\/about/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, words.about);
 
});
bot.onText(/\/users/, async(msg) => {
    const chatId = msg.chat.id;
    var users = await readDatabase.numberOfUsers()
    bot.sendMessage(chatId,`${users} Users`)
 
});
 
var container = {
    nahom:{
        id:1234
    },
    eyob:{
        id:1122,
        year:'firstYear'
    }
}
var admin ={

}

const firstSemester = buttons.KeyboardButtons.semester[0][0].text
const secondSemester = buttons.KeyboardButtons.semester[0][1].text

bot.setMyCommands([
    { command: '/start', description: 'Start the bot' },
    { command: '/comment', description: 'Send a comment' },
    { command: '/about', description: 'About bot ' },
    { command: '/users', description: 'Number of users '}
]);

// Define the keep-alive endpoint

app.get('/keepalive', (req, res) => {
  res.send('Keeping the bot alive!');
});


bot.on('message',async(msg) =>{
   const chatId = msg.chat.id;
   const messageText = await msg.text;
   const lowercase = msg.text?messageText.toLocaleLowerCase():null   
   const comment = msg.text;
   const userName = msg.chat.username || msg.chat.first_name || 'Anonymous';
   
    if (msg.text && msg.text.startsWith('/comment')) {
        return;
    }
  
    if(commentStore[chatId]){

        bot.sendMessage(873484934, `Comment from ${userName} (ID: ${chatId}):\n${comment}`);

        bot.sendMessage(chatId, 'Your comment has been sent to the admin.');
        delete commentStore[chatId]
      }


 
    // const messageuserName = msg.chat.username

    
    if(chatId===873484934){
        admin[chatId]={
            id:chatId,
            role:'admin'
        }
        if(admin[chatId] && lowercase==='admin'){
                    bot.sendMessage(chatId,'Choice File Name',{
            reply_markup:{
                keyboard:buttons.KeyboardButtons.filename
            }
        }) 
        
            bot.once('message',(msg)=>{
            if(admin[chatId].id===msg.chat.id){
            const filename = msg.text
            
            bot.sendMessage(msg.chat.id,'Now send file')
             var file;
             bot.once('message',(fielmessage)=>{
                if(fielmessage.text){
                    bot.sendMessage(fielmessage.chat.id,'Wrong type of file ,You can add only photo and document file. go back to /start')
                }
                else{
                  try{
                file = fielmessage.document.file_id
                 }
               catch(err){
                 file = fielmessage.photo.file_id
               } 
               storage(filename,file)
               bot.sendMessage(msg.chat.id,'Successfuly Added to Database')
               delete admin[chatId]
                }
                
             })
          

        }     
        })  
        
   
       
        }
        else if(messageText==='Change Year And Semester'){
        bot.sendMessage(chatId,words.selectYear,{
            reply_markup:{
                inline_keyboard:buttons.InlineButtons.start,
                resize_keyboard:true,
                on_time_keyboard:true
            }
        }) 
    }

        else if(messageText===firstSemester || messageText===secondSemester){
            // bot.sendDocument(chatId,file_path)
              console.log(chatId)
                 if(container[chatId]){
                     console.log('check')
                     const courseYear = container[chatId].year; 
                     bot.sendMessage(chatId,`${courseYear} ${messageText} course`,{
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
       
     
    }  
    else if(messageText==='Change Year And Semester'){
        bot.sendMessage(chatId,words.selectYear,{
            reply_markup:{
                inline_keyboard:buttons.InlineButtons.start,
                resize_keyboard:true,
                on_time_keyboard:true
            }
        }) 
    }
   else if(messageText===firstSemester || messageText===secondSemester){
   // bot.sendDocument(chatId,file_path)
     console.log(chatId)
        if(container[chatId]){
            console.log('check')
            const courseYear = container[chatId].year; 
            bot.sendMessage(chatId,`${courseYear} ${messageText} course`,{
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
    
            const chatId = courseCallback.message.chat.id;
           // const username = callback.message.chat.username;
            // console.log(callback)

        if(courseCallback.data ==='register'){
            const isAlreadyRegisterd = await register(chatId)
            console.log(isAlreadyRegisterd)

            if(isAlreadyRegisterd){
                //register user
                // register(chatId)
               await bot.sendMessage(chatId,'Already registerd')  
            }
            else {
            await bot.sendMessage(chatId,'Successfuly registed')
        }        
        bot.sendMessage(chatId,words.selectYear,{
                        reply_markup:{
                        inline_keyboard:buttons.InlineButtons.start,
                        resize_keyboard:true,
                        on_time_keyboard:true
                    }
                })
        }  


   const fileSet = await readDatabase.findFile(courseCallback.data)
   
   if(fileSet){
    for(var i=0;i<fileSet.length;i++){
        var filepath = fileSet[i].file
       
        bot.sendDocument(courseCallback.message.chat.id,filepath)
    }
    
   }
   
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
        const userId = await courseCallback.message.chat.id
        container[userId]={
            id:userId,
            year:'thirdYear'
        }  
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
    break;
       }
        }
        }

    catch(err){
        console.log(err)
        
    }
    
})

// app.listen(port,function(){
//     console.log(`running at port ${port}`)
// })   
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  
    // Keep-alive mechanism
    setInterval(() => {
      axios.get(`http://localhost:${port}/keepalive`)
        .then(() => {
          console.log('Keep-alive ping successful');
        })
        .catch((err) => {
          console.error('Keep-alive ping failed:', err);
        });
    }, 5 * 60 * 1000); // Ping every 5 minutes
  });
   