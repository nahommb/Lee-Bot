
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
    secondYear:{
        'firstSemester':[
    [
        {
        text:'Programming 2 (C++) ',
        callback_data:'C++'
        },
    ],

    [
        {
            text:'Fundamentals of Software Eng',
            callback_data:'fundamentals of softaware eng'
        },
        {
            text:'Fundamnetals of Database',
            callback_data:'fundamentals of data'
        },
        {
            text:'Discrete Mathematics and Combinatory',
            callback_data:'Discrete Mathematics and Combinatory'
        },
    ]
    ],
    'secondSemester':[[
        {
            text:'Data Structure and Algorithms',
            callback_data:'Data Structure and Algorithms'
        },
        {
            text:'Computer Organization and Architecture',
            callback_data:'Computer Organization and Architecture'
        }
    ],[
        {
            text:'Operating Systems and Systems Programming',
            callback_data:'Operating Systems and Systems Programming'
        },
        {
            text:'Object Oriented Programming',
            callback_data:'Object Oriented Programming'
        },
        {
            text:'Fundamental of Networking',
            callback_data:'Fundamental of Networking'
        }

    ]
    ]
    },
    thirdYear:{
        'firstSemester':[
    [
        {
        text:'Microprocessors and Assembly Language',
        callback_data:'Microprocessors and Assembly Language'
        },
        {
            text:'Advanced Database Systems',
            callback_data:'Advanced Database Systems'
        },
    ],

    [
        {
            text:'Requirements Engineering',
            callback_data:'Requirements Engineering'
        },
        {
            text:'Software Engineering Tools and Practices',
            callback_data:'Software Engineering Tools and Practices'
        },
    ],
    [
        {
            text:'Web Design and Programming',
            callback_data:'Web Design and Programming'
        },
        {
            text:'Fundamental of Software Security',
            callback_data:'Fundamental of Software Security'
        },
    ]
    ],
    'secondSemester':[[
        {
            text:'Software Architecture and Design',
            callback_data:'Software Architecture and Design'
        },
        {
            text:'Advanced Programming',
            callback_data:'Advanced Programming'
        },
        {
            text:'Fundamental of Cloud Computing & IoT',
            callback_data:'Fundamental of Cloud Computing & IoT'
        },
        {
            text:'Fundamental of Distributed Systems',
            callback_data:'Fundamental of Distributed Systems'
        },
        {
            text:'Fundamental of Machine Learning',
            callback_data:'Fundamental of Machine Learning'
        },
        {
            text:'Software Project Management',
            callback_data:'Software Project Management'
        },
    ]]
    },
    fourthYear:{
        'firstSemester':[
    [
        {
        text:'Principles of Compiler Design',
        callback_data:'Principles of Compiler Design'
        },
        {
            text:'Real Time and Embedded Systems',
            callback_data:'Real Time and Embedded Systems'
        },
    ],

        [
        {
            text:'Software Testing and Quality Assurance',
            callback_data:'Software Testing and Quality Assurance'
        },
        {
            text:'Mobile Application Development',
            callback_data:'Mobile Application Development'
        },
    ],
    [
        {
            text:'Fundamentals of Artificial Intelligence',
            callback_data:'Fundamentals of Artificial Intelligence'
        },
    ]
    ],
    'secondSemester':[[
        {
            text:'Internship Semester',
            callback_data:'internship semester'
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