const textEl = document.getElementById('text')
const opBtnEl = document.getElementById('option-buttons')
const healthEl = document.getElementById('health-count')

let state = {}

function StartGame() {
    state = {}
    curTextNode(100)
}

function curTextNode(textNodeIndex) {
    const txtNode = txtNodes.find(txtNode => txtNode.id === textNodeIndex)
    textEl.innerText = txtNode.text
    while (opBtnEl.firstChild) {
        opBtnEl.removeChild(opBtnEl.firstChild)
    }

    txtNode.options.forEach(option => {
        if (showOp(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('button')
            button.addEventListener('click', () => optSelect(option))
            opBtnEl.appendChild(button)
        }
    })
}

function showOp(option) {
    return option.requiredState == null || option.requiredState(state)
}

function optSelect(option) {
    const nextTextNodeID = option.nextText
    if (nextTextNodeID <= 0) {
        return StartGame()
    }
    state = Object.assign(state, option.setState)
    curTextNode(nextTextNodeID)
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function changeImage()
{
    var img = document.getElementById("image");
    img.src="gh-best-alarm-clocks-social-1594392770.png";
}

function myFunction() {
    var x = document.getElementById("myDIV");
  } 

const txtNodes = [
    {
        id: 100,
        text: 'Hello Agent! Welcome to the A.C.D.F. Training Program. This program will take you through various training scenarios that will test your wits, stealth abilities and foresight. You will be taken through a day in the life of one of our agents on one of there training days, please click "Begin" to start the scenario',
        options: [
            {
                text: 'Begin',
                nextText: 1,
            }
        ]
    },
    {
        id: 1,
        text: 'Today is the day you have been waiting for, Agents of the Control & Defence Force Training, or A.C.D.F. Training for short. Your alarm goes off at 7am sharp just as it had done every day before, but today it felt different.',
        options: [
            {
                text: 'Silence the alarm and spring out of bed ready for the day ahead.',
                nextText: 2,
            },
            {
                text: 'Silence the alarm and... just rest your eyes for a few minutes',
                nextText: 5,
            }
        ]
    },
    {
        id: 2,
        text: 'You arrive at the ACDF Training Centre and head into your assigned Training room, in front of you is a set of Stealth Equipment and a sign saying "Please collect 3 pieces of equipment to use throughout your test"',
        options: [
            {
                text: 'You choose the Signal Jammer, the Night Vision Goggles and the Baton',
                //requiredState: (curState) => curState.equipment,
                setState: { quEquipment: true },
                nextText: 3
            },
            {
                text: 'You choose the Silenced Pistol, the Cheese Wire and the Sleeping Gas Gas',
                //requiredState: (curState) => curState.equipment,
                setState: { viEquipment: true },
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Once you organise the equpment into your pockets a familiar voice booms over the intercom, "Welcome Trainees, these tests will be grueling and time oonsuming, but you have trained hard and i believe in you!". The voice made you feel more confident as a panel at one of the room slid open from below.',

        options: [
            {
                text: 'Wait for instructions, you do not know what this is.',
                nextText: 4
            },
            {
                text: 'Speed ahead through the opening and prepare yourself.',
                nextText: 6
            },
        ]
    },
    {
        id: 4,
        text: 'The same voice again booms over the intercom stating "Please go ahead through the opening... to catch up with the others".',
        options: [
            {
                text: 'Hurry through the opening and appologise for the delay.',
                setState: { behind: true },
                nextText: 6
            }

        ]
    },
    {
        id: 5,
        text: 'You wake up in a fright as you realise 5 minutes turned into 50 and you only have 30 minutes to make it to the ACDF Training Facility',
        options: [
            {
                text: 'Put on your best suit and sprint to the Facility, arriving to disappointed looks and feeling a little more sweaty than you had intended',
                nextText: 2
            }

        ]
    },
    {
        id: 6,
        text: 'The room you enter is dark and feels confined, you remember your training and think about your options here',
        options: [
            {
                text: 'You need to catch up to the other trainees, plow ahead without caution',
                requiredState: (curState) => curState.behind,
                nextText: 8
            },
            {
                text: 'You carefully and quietly ready your Night Vision Goggles and begin exploring.',
                requiredState: (curState) => curState.quEquipment,
                nextText: 9
            },
            {
                text: 'You steadily raise your Silenced Pistol to a ready postion and proceed.',
                requiredState: (curState) => curState.viEquipment,
                nextText: 7
            },
            {
                text: 'You step cautriously into the void before you',
                nextText: 7
            }

        ]
    },
    {
        id: 7,
        text: 'The room seems to stretch further and further into the dark, you walk forward until you hear a very quiet footstep from around the next corner',
        options: [
            {
                text: 'You place yourself near the corner ready to attack whatever appears',
                nextText: 7
            },
            {
                text: 'You make sure your psitol is loaded and aim for the corner, ready for the next few seconds',
                requiredState: (curState) => curState.viEquipment,
                nextText: 10
            },
            {
                text: 'You hide yourself in what feels like a nook in the walls, hoping to avoid whatever appears from the corner.',
                nextText: 7
            }

        ]
    },
    {
        id: 8,
        text: 'You race through the dark room, turning corner after corner, until a guard turns the corner and drops you to the floor.',
        options: [
            {
                text: 'You bounce back up and turn the attack on the guard, hoping you can fight him off.',
                setState: {Injured1: true},
                nextText: 9
            },
            {
                text: 'You pounce to your feet and try to lose the guard in the dark room.',
                nextText: 10
            }
        ]
    },
    {
        id: 9,
        text: 'Using your goggles, you see the room is built like a maze with a large number 1 in front of you. You proceed into the room, able to see every twist and turn. You turn a corner and quickly step back, a gaurd is making his way towards you.',
        options: [
            {
                text: 'You ready your Baton, keeping it shin height, ready to trip and subdue the gaurd.',
                requiredState: (curState) => curState.behind,
                nextText: 8
            },
            {
                text: 'You raise your arms, ready to fight and hopefully subdue the guard.',
                requiredState: (curState) => curState.quEquipment,
                nextText: 9
            },
            {
                text: 'You hide in a nook you can see in the wall and hope the gaurd will pass',
                nextText: 7
            },
            {
                text: 'You step cautriously into the void before you',
                nextText: 7
            }

        ]
    },
    {
        id: 10,
        text: 'You find yourself tackled to the ground with a large thump as an alarm goes off which lights up the room. The voice comes over the intercom "Trainee, you have been caught. Please collect your belongings and leave the A.C.D.F.".',
        options: [
            {
                text: 'Try Again?',
                nextText: -1
            },  
        ]
    },
    {
        id: 11,
        
    },
]

StartGame()