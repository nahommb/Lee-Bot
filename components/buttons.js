
const InlineButtons = {
    register:[
    [ {
        text:'Register',
        callback_data: 'register'
     }
    ]
   ] ,
   done:[[{
    text:'Done',
    callback_data:'done'
   }]],
   payment_check:[
    [
        {
      text:'Verified',
      callback_data:'verified'
   },
   {
    text:'Not verified',
    callback_data:'not verified'
   }
   ]],
   courses:[
    [
        {
        text:'Java',
        callback_data:'java'
        },
        {
            text:'C++',
            callback_data:'C++'
        },
        {
            text:'Web dev',
            callback_data:'web dev'
        },
        {
            text:'Security',
            callback_data:'security'
        },
    ]
    ]
    ,
    semester: [
         [
            {
                text: '1st Semester',
                callback_data:'1st semester'
            },
            {
                text: '2nd Semester',
                callback_data:'2nd semester'
            },
       ]
    ]

}
//console.log(InlineButtons[0][0].text)
const KeyboardButtons = {
   
   start: [
    [
    {
        text:'First Year'
     },
     {
        text:'Second Year'
     }
    ],

   [
    {
        text:'Third Year'
    },
    {
        text:'Fourth Year'
    }
   ],
   [
    {
        text:'Fifth Year'
    }
   ]
   ]
}

module.exports = {InlineButtons,KeyboardButtons}