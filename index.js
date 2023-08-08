const perfume1="hamza";
const perfume2="one million";

const perfumes=[perfume1, perfume2]

render()


function add(){
    const item=document.getElementById('one')
    const perfume=item.value
    perfumes.push(perfume)
    render()
}


function render(){
    document.getElementById('two').innerHTML="";
    perfumes.forEach(element => {
        const list=document.createElement('div')
       list.innerHTML=element
        const sales=document.getElementById('two')
        sales.appendChild(list)

    
    });
}