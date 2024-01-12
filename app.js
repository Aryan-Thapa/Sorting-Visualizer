let cont=document.querySelector(".main");
let inparr=document.getElementById("arrsize");
inparr.addEventListener("input",init);

const array=[];
var n=inparr.value;
init();
function init()
{
    let wc=document.getElementById("wctc");
    wc.innerText="O(?)";
    let ac=document.getElementById("actc");
    ac.innerText="O(?)";
    let bc=document.getElementById("bctc");
    bc.innerText="O(?)";
    let sc=document.getElementById("sc");
    sc.innerText="O(?)";
    for(let i=0;i<n;i++)
    {
        array[i]=Math.random();
    }
    showbars();
}

function play()
{
    let wc=document.getElementById("wctc");
    wc.innerText="O(N^2)";
    let ac=document.getElementById("actc");
    ac.innerText="O(N^2)";
    let bc=document.getElementById("bctc");
    bc.innerText="O(N)";
    let sc=document.getElementById("sc");
    sc.innerText="O(1)";
    const copy=[...array];
    const moves=bubblesort(copy);
    animate(moves);
}

function animate(moves)
{
    if(moves.length==0)
    {
        showbars();
        return;
    }
    const move=moves.shift();
    const[i,j]=move.indices;

    if(move.type=="swap")
    {
        [array[i],array[j]]=[array[j],array[i]];
    }
    showbars(move);
    setTimeout(function(){
        animate(moves);
    },125);
}


function bubblesort(array)
{
    const moves=[];
    do{
        var swapped=false;
        for(let i=1;i<array.length;i++)
        {
            moves.push({indices:[i-1,i],type:"comp"});
            if(array[i-1]>array[i])
            {
                swapped=true;
                moves.push({indices:[i-1,i],type:"swap"});
                [array[i-1],array[i]]=[array[i],array[i-1]];
            }
        }
    }while(swapped);
    return moves;
}

function showbars(move)
{
    cont.innerHTML="";
    for(let i=0;i<array.length;i++)
    {
        const bar=document.createElement("div");
        bar.style.height=array[i]*100+"%";
        bar.classList.add("bar");
        if(move && move.indices.includes(i))
        {
            bar.style.backgroundColor=move.type=="swap"?"green":"red";
        }
        cont.appendChild(bar);
    }
}