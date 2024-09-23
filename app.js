const buttons = document.querySelectorAll('.btn');
let winnermsg = document.querySelector('.hide');
let msg = document.querySelector('.msg');
let win = true;

const winpattern = [   // making array of every winning position
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
buttons.forEach(button => {     // for filling 0 and X in box
    button.addEventListener('click', ()=> {
       if(win){
        button.innerText ='0';
        win = false;
       }
       else{
        button.innerText = 'X';
        win = true;
       }
       button.disabled = true;
       checkwinner();
    });
    
});
const checkwinner = ()=>{         // Matching all pattern for winner 
    for(let pattern of winpattern){
        let val1 = buttons[pattern[0]].innerText;
        let val2 = buttons[pattern[1]].innerText;
        let val3 = buttons[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1== val2 && val2==val3){
                showinner(val1);
                disabledallbutton();
            }
        }
    }
    
}
const  showinner = (winner1)=>{  // For show winner
    winnermsg.innerText = `winner is ${winner1}`;
    msg.classList.remove("hide")

}
const disabledallbutton = ()=>{ // disabled all button after winning
    buttons.forEach(button=>{
        button.disabled = true;
    })
}
