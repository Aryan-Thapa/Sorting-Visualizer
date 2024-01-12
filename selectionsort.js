
function play6()
{
    let wc=document.getElementById("wctc");
    wc.innerText="O(N^2)";
    let ac=document.getElementById("actc");
    ac.innerText="O(N^2)";
    let bc=document.getElementById("bctc");
    bc.innerText="O(N^2)";
    let sc=document.getElementById("sc");
    sc.innerText="O(1)";
    const copy=[...array];
    const moves=selectionSort(copy);
    animate6(moves);
}

function animate6(moves)
{
    if(moves.length==0)
    {
        showbars6();
        return;
    }
    const move=moves.shift();
    const[i,j]=move.indices;

    if(move.type=="swap")
    {
        [array[i],array[j]]=[array[j],array[i]];
    }
    showbars6(move);
    setTimeout(function(){
        animate6(moves);
    },125);
}


function selectionSort(array) {
    const moves = [];
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            moves.push({ indices: [minIndex, j], type: "comp" });
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            moves.push({ indices: [minIndex, i], type: "swap" });
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
    return moves;
}
function showbars6(move)
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