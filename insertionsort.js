// let cont=document.querySelector(".main");
// let inparr=document.getElementById("arrsize");
// inparr.addEventListener("input",init);

// const array=[];
// var n=inparr.value;
// init();
// function init()
// {
//     for(let i=0;i<n;i++)
//     {
//         array[i]=Math.random();
//     }
//     showbars2();
// }

function play2()
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
    const moves=insertionsort(copy);
    animate2(moves);
}

function animate2(moves)
{
    if(moves.length==0)
    {
        showbars2();
        return;
    }
    const move=moves.shift();
    const[i,j]=move.indices;

    if(move.type=="swap")
    {
        [array[i],array[j]]=[array[j],array[i]];
    }
    showbars2(move);
    setTimeout(function(){
        animate2(moves);
    },125);
}


function insertionsort(array) {
    const moves = [];

    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;

        moves.push({ indices: [i, j], type: "comp" });

        while (j >= 0 && array[j] > current) {
            moves.push({ indices: [j + 1, j], type: "swap" });
            array[j + 1] = array[j];
            j--;

            if (j >= 0) {
                moves.push({ indices: [i, j], type: "comp" });
            }
        }

        array[j + 1] = current;
    }

    return moves;
}

function showbars2(move)
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