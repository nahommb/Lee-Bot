const InlineButtons = [

   [ {
        text:'First year',
        callback_data: 'first_year'
     }
    ]

    ,
        [
            {
                text: 'Visit us!',
                url: 'https://github.com/mast/telegram-bot-api'
            },
            {
                text: 'messi',
                url: 'https://github.com/mast/telegram-bot-api'
            },
       ] 
]
//console.log(InlineButtons[0][0].text)
const KeyboardButtons =[
   
    [
        {
        text:'test'
     }
   ],
   [
    {
        text:'neymar'
    },
    {
        text:'messi'
    }
   ]

]

module.exports = {InlineButtons,KeyboardButtons}