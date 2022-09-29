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
    if(buttclass=='number'){
        displayNumber=displayNumber+number;
        display.textContent=displayNumber;
    }
    if(buttclass=='oper'){
        console.log('op detected');
        
        if(opnum>0){
            values.n2=displayNumber;
            console.log('num2='+values.n2);
            operMenu(values);
            display.innerHTML=values.res;
            values.op=number;
            values.n1=values.res;
        }
        else{
            values.n1=displayNumber;
            values.op=number;
            console.log('num1='+values.n1);
            console.log('op='+values.op);
        }

        
        displayNumber=0;
        opnum++;
    }

    if(buttclass=='special'){
        if(number=='C'){
            values.res=0;
            values.n1=0;
            values.n2=0;
            values.op=0;
            opnum=0;
            display.innerHTML=0;
        }

        else{
            window.open('https://github.com/NoobMaster-JONA/calculator', '_blank');        
        }
    }

    
    console.log('working heyy')
}

function operMenu(vals){

    let result=0;

    if(vals.op=='+'){
        //console.log('inner obj values off val='+vals.n1+' '+vals.n2);
        result=plus(vals.n1, vals.n2);
        console.log('sumresult='+result);
        vals.res=result;
    }

    else if(vals.op=='-'){
        result=minus(vals.n1, vals.n2);
        console.log('minus results='+ result);
        vals.res=result;
    }

    else if(vals.op=='*'){
        result=multiply(vals.n1, vals.n2);
        console.log('multiply results='+ result);
        vals.res=result;
    }

    else if(vals.op=='/'){
        result=divide(vals.n1, vals.n2);
        console.log('divide results='+ result);
        vals.res=result;
    }

    else{
        vals.res=result;
    }
}

function plus(n1, n2){
    n1=parseFloat(n1);
    n2=parseFloat(n2);
    return n1+n2;

}

function minus(n1, n2){
    n1=parseFloat(n1);
    n2=parseFloat(n2);
    return n1-n2;
}

function multiply(n1,n2){
    n1=parseFloat(n1);
    n2=parseFloat(n2);
    return n1*n2;
}

function divide(n1, n2){
    n1=parseFloat(n1);
    n2=parseFloat(n2);
    return n1/n2;
}

let displayNumber=0;
display.textContent=displayNumber;

let opnum=0;

let values={
    n1:0,
    op:'',
    n2:0,
    res:0
}




