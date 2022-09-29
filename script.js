const btns=document.querySelectorAll('button');
const display=document.querySelector('#display');

console.log(btns);
btns.forEach(button=>{
    button.addEventListener('click', ()=>{
        let btnid=button.getAttribute('id');
        let btnclass=button.getAttribute('class');
        sensor(btnid, btnclass);

    })
});

function sensor(number, buttclass){
    displayNumber=displayNumber+number;
    display.textContent=displayNumber;
    if(buttclass=='oper'){
        console.log('op detected');
        displayNumber=0;
    }
    console.log('working heyy')
}

let displayNumber=0;
display.textContent=displayNumber;
    
let calc={
    n1:0,
    op:'',
    n2:0,
    res:0
}




