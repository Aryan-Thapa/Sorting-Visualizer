const n=20;
const array=[];

init();
function init(){
    for(let i=0;i<n;i++)
    {
        array[i]=Math.random();
    }
    showbars();
}

function play(){
    const copyarr=[...array];
    const swaps=bubblesort(copyarr);
    animate(swaps);
}

function animate(swaps){
    if(swaps.length==0){
        showbars();
        return;
    }
    const[i,j]=swaps.shift();
    [array[i],array[j]]=[array[j],array[i]];
    showbars([i,j]);
    setTimeout(() => {
        animate(swaps);
    }, 50);
}

function bubblesort(array){
    const swaps=[];
    do{
        var swapped=false;
        for(let i=1;i<array.length;i++)
        {
            if(array[i-1]>array[i]){
                swapped=true;
                swaps.push([i-1,i]);
                [array[i-1],array[i]]=[array[i],array[i-1]];
            }
        }
    }while(swapped);
    return swaps;
}

 

function showbars(indices){
    let cont=document.querySelector(".container");
    cont.innerHTML="";
    for(let i=0;i<array.length;i++)
    {
        const bar=document.createElement("div");
        bar.style.height=array[i]*100+"%";
        bar.classList.add("bar");
        if(indices && indices.includes(i))
        {
            bar.style.backgroundColor="blue";
        }
        cont.appendChild(bar);
    }
}
