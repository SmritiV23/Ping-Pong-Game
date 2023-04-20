const p1button=document.querySelector('#button1')
const p2button=document.querySelector('#button2')
let p1=0
let p2=0
let winner=5
let isgame=false
const play1=document.querySelector('#play1')
const play2=document.querySelector('#play2')
const set=document.querySelector('#set')

set.addEventListener('change',function(e){
    winner=set.value
})
p1button.addEventListener('click',function(e){
    p1=p1+1
    if(!isgame)
    {
    
    if(winner==p1)
    {
        play1.style.color='green'
        play2.style.color='red'
        isgame=true
        p1button.disabled=true
    p2button.disabled=true
    }
    play1.innerText=p1
    
    
    }
})
p2button.addEventListener('click',function(e){
    p2=p2+1
    if(!isgame)
    {
        
        if(p2==winner)
        {
            play1.style.color='red'
            play2.style.color='green'
            isgame=true
            p1button.disabled=true
            p2button.disabled=true
        }
        play2.innerText=p2
       
    }
    
})

const reset=document.querySelector('#reset')
reset.addEventListener('click',function(e)
{
    isgame=false
    p1=0
    p2=0
    play1.innerText=0
    play1.style.color='black'
    play2.innerText=0
    play2.style.color='black'
    p1button.disabled=false
            p2button.disabled=false
}
)