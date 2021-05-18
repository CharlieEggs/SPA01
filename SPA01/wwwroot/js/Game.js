var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

window.onload = function() {
    document.getElementById("my_audio").play();
}

const splash = document.querySelector('.splash');

document.addEventListener("click", function(){
    splash.classList.add("display-none")
})

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



function playAudio(url) {
    new Audio(url).play();
  }  

const txtNodes = [
    {
        id: 100,
        text: 'Hello Agent! Welcome to the A.C.D.F. Training Program. \n\nThis program will take you through various training scenarios that will test your wits, stealth abilities and foresight. You will be taken through a day in the life of one of our agents on one of there training days so please make sure you make every choice carefully. \n\nPlease click "Begin" to start the scenario.',
        options: [
            {
                text: 'Begin',
                nextText: 1,
            }
        ]
    },
    {
        id: 1,
        text: 'Today is the day you have waited your whole life for, Agents of the Control & Defence Force Training, or A.C.D.F. Training for short. \n\nThe late winter sun climbed just above the horizon giving the room a warm orange glow, it seemed a little brighter today. \n\nThe alarm you had been awaiting for the last 10 minutes beeps into life.',
        options: [
            {
                text: 'Silence the alarm and eagerly jump out of bed. Prepare for your day.',
                nextText: 2,
            },
            {
                text: 'Silence the alarm and... just rest your eyes for a few minutes, you need your beauty sleep.',
                nextText: 6,
            }
        ]
    },
    {
        id: 2,
        text: 'After waiting for your assigned 8:00am time slot for what seemed like an eternity, you arrive at the C.D.F. Training Centre. The building is glistening white with no particularly obvious markings apart from the logo on the doors; The grounds are teaming with life all around - which seems counter productive for a secret agency to your untrained eyes.',
        options: [
            {
                text: 'You prepare for you test by making your way into the reception',
                //requiredState: (curState) => curState.equipment,
                nextText: 3
            },
            {
                text: 'You wait until someone apporaches you, hoping they will calm your nerves.',
                //requiredState: (curState) => curState.equipment,
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'The receptionist directs you to training room B from behind a large curved marble desk that you feel is slightly too high for her. The room is dark and cold, being made of steel panels you expect nothing different, in the center is a table with a sign saying "Please choose your set of equipment for this scenario" accompanied with 2 sets of C.D.F. equipment',
        options: [
            {
                text: 'You make your way to the table and choose the Signal Jammer, the Night Vision Goggles and the Baton',
                //requiredState: (curState) => curState.equipment,
                setState: { signalJammer : true , nightVision : true, baton : true},
                nextText: 4
            },
            {
                text: 'You make your way to the table and choose choose the Silenced Pistol, the Garrote Wire and the Sleeping Gas',
                //requiredState: (curState) => curState.equipment,
                setState: { silencedPistol : true , garroteWire : true, sleepingGas : true},
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: 'Once you organise the equpment into your pockets, thankful that you chose your trousers with larger tactical pokcets, a voice booms over the intercom, "Welcome Trainees, you all know why you are here and I will be honest these tests will be grueling and time consuming, but you have trained hard and I am sure you will succeed.". The voice made you feel only slightly more confident as a panel at one of the room slid open from below.',

        options: [
            {
                text: 'You wait for instructions, after all you do not know what this is.',
                nextText: 5
            },
            {
                text: 'You make your way through the opening and prepare yourself for whatever lies ahead.',
                nextText: 7
            }
        ]
    },
    {
        id: 5,
        text: 'The same voice booms over the intercom, a little more frustrated this time, "Please go ahead through the opening... the others have already gone through".',
        options: [
            {
                text: 'You hurry through the opening, a little more redfaced than you had hoped this early on.',
                setState: { behind: true },
                nextText: 7
            }

        ]
    },
    {
        id: 6,
        text: 'You wake up in a fright with the orange glow now the bright white of daylight as you realise a few minutes turned into 50 and you have less time than you would have like to make it to the C.D.F. Training Facility.',
        options: [
            {
                text: 'Put on your tactical clothing and rush to the Facility, arriving to disappointed looks and feeling a little more sweaty than you had intended',
                nextText: 3
            }

        ]
    },
    {
        id: 7,
        text: 'The room you enter is dark and feels confined, but echoes with each step you take making you think it probably was not as confined as you think. You remember your training and calmly think about your options here.',
        options: [
            {
                text: 'You need to catch up to the other trainees, plow ahead to impress your overseer.',
                requiredState: (curState) => curState.behind,
                nextText: 9
            },
            {
                text: 'You quitely ready your Night Vision Goggles, trying to avoid making noise, and begin exploring.',
                requiredState: (curState) => curState.nightVision,
                nextText: 10
            },
            {
                text: 'You steadily raise your Silenced Pistol to a ready postion and proceed, hoping you do not have to use it.',
                requiredState: (curState) => curState.silencedPistol,
                nextText: 8
            },
            {
                text: 'You step cautriously into the void before you, hoping that each step is solid ground.',
                nextText: 8
            }

        ]
    },
    {
        id: 8,
        text: 'The room seems to stretch further and further into the dark, seemingly going on forever, and walk forward until you hear a very quiet and careful footstep from around the next corner',
        options: [
            {
                text: 'You place yourself near the corner ready to combat whoever appears',
                nextText: 13
            },
            {
                text: 'You make sure your psitol is loaded and aim for the corner, ready for the next few seconds',
                requiredState: (curState) => curState.silencedPistol,
                setState: {gunReady: true},
                nextText: 13
            },
            {
                text: 'You hide yourself in what you sincerey hope is a nook in the walls, hoping to avoid whoever appears from the corner.',
                setState: { nook : true},
                nextText: 13
            }

        ]
    },
    {
        id: 9,
        text: 'You race through the dark room, turning corner after corner, until a figure turns the corner having heard your running and slams into you, dropping you to the floor.',
        options: [
            {
                text: 'You turn the attack on the figure, hoping you can fight them off.',
                setState: {Injured1: true},
                nextText: 14
            },
            {
                text: 'You pounce to your feet and try to lose the figure in the dark room.',
                nextText: 11
            }
        ]
    },
    {
        id: 10,
        text: 'Using your goggles, you see the room is built like a maze with a large number 1 in front of you. You proceed into the room, able to see every twist and turn. You turn a corner and quickly step back as silently as possible. A guard is making his way towards you, but did not notice you just yet.',
        options: [
            {
                text: 'You ready your Baton, keeping it shin height, ready to trip and subdue the guard.',
                requiredState: (curState) => curState.baton,
                nextText: 12
            },
            {
                text: 'You raise your fists to chest height, ready to hopefully subdue the guard.',
                nextText: 13
            },
            {
                text: 'You hide in a small nook you can see in the wall and hope the gaurd will pass',
                setState: {nook : true},
                nextText: 13

            }
        ]
    },
    {
        id: 11,
        text: 'You find yourself tackled to the ground with a large thump once again. An a red flashing light fills the room, you have been caught. The voice comes over the intercom "Trainee, you have been caught. Please collect your equipment and return them to the table on your way out. I am sorry.".',
        options: [
            {
                text: 'You have failed your scenario, but would like to attend next year.',
                nextText: -1
            },  
        ]
    },
    {
        id: 12,
        text: 'The guard does not notice the baton in the dark and trips over, falling forward. You quickly subdue him and search him for equipment',
        options: [
            {
                text: 'You find a pair of handcuffs on the gaurd which may be useful.',
                setState: { handcuffs: true },
                nextText: 13
            },
        ]
        
    },
    {
        id: 13,
        text: 'The shadowy figure of a man turns the corner, moving with a ghost like glide in the darkness.',
        options: [
            {
                text: 'You fire your weapon.',
                requiredState: (curState) => curState.gunReady,
                nextText: 13
            },
            {
                text: 'You stay as quiet as possible and slow your breathing.',
                requiredState: (curState) => curState.nook,
                nextText: 13
            },
            {
                text: 'You lunge for the figure, hoping to subdue it.',
                nextText: 13
            },
        ]
        
    },
    {
        id: 14,
        text: 'The attack succeeds, albeit at some cost as the guard got in a few punches of his own, you search the unconsious guard for anything useful.',
        options: [
            {
                text: 'You find a pair of handcuffs on the gaurd which may be useful.',
                setState: { handcuffs: true },
                nextText: 13
            },
        ]
        
    },
]
StartGame()