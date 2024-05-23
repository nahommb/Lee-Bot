
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
   courses:{
    'secondYear':{
        'firstSemester':[
    [
        {
        text:'Programming 2 (C++) ',
        callback_data:'c++'
        },
        {
            text:'Fundamentals of Software Eng',
            callback_data:'fundamentals of softaware eng'
        },
        {
            text:'Fundamnetals of Database',
            callback_data:'fundamentals of data'
        },
        {
            text:'',
            callback_data:'security'
        },
    ]
    ],
    'secondSemester':[[
        {
            text:'Oprating system',
            callback_data:'oprating system'
        }
    ]]
    },
    thirdYear:{
        'firstSemester':[
    [
        {
        text:'Security',
        callback_data:'c++'
        },
        {
            text:'Fundamentals of Software Eng',
            callback_data:'fundamentals of softaware eng'
        },
        {
            text:'Fundamnetals of Database',
            callback_data:'fundamentals of data'
        },
        {
            text:'',
            callback_data:'security'
        },
    ]
    ],
    'secondSemester':[[
        {
            text:'web',
            callback_data:'oprating system'
        }
    ]]
    },
    fourthYear:{
        'firstSemester':[
    [
        {
        text:'Machine',
        callback_data:'c++'
        },
        {
            text:'Fundamentals of Software Eng',
            callback_data:'fundamentals of softaware eng'
        },
        {
            text:'Fundamnetals of Database',
            callback_data:'fundamentals of data'
        },
        {
            text:'Advanced java',
            callback_data:'security'
        },
    ]
    ],
    'secondSemester':[[
        {
            text:'AI',
            callback_data:'oprating system'
        }
    ]]
    },
    fifthYear:{
        'firstSemester':[
    [
        {
        text:'Hacking',
        callback_data:'c++'
        },
        {
            text:'Fundamentals of Software Eng',
            callback_data:'fundamentals of softaware eng'
        },
        {
            text:'Fundamnetals of Database',
            callback_data:'fundamentals of data'
        },
        {
            text:'',
            callback_data:'security'
        },
    ]
    ],
    'secondSemester':[[
        {
            text:'Research',
            callback_data:'oprating system'
        }
    ]]
    }
   }
    ,
    start: [
        [
        {
            text:'First Year 👼',
            callback_data:'First Year'
         },
         {
            text:'Second Year 👶',
            callback_data:'Second Year'
         }
        ],
    
       [
        {
            text:'Third Year 👦',
            callback_data:'Third Year'
        },
        {
            text:'Fourth Year 🧓',
            callback_data:'Fourth Year'
        }
       ],
       [
        {
            text:'Fifth Year 👴',
            callback_data:'Fifth Year'
        }
       ]
       ]


}
//console.log(InlineButtons[0][0].text)
const KeyboardButtons = {
    semester: [
        [
           {
               text: '1st Semester 📗',
               
           },
           {
               text: '2nd Semester 📘',
               
           },
      ],[
        {
            text:'Change Year And Semester'
        }
      ]
   ],
   

}

module.exports = {InlineButtons,KeyboardButtons}