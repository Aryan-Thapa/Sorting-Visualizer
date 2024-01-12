function play3()
{
    let wc=document.getElementById("wctc");
    wc.innerText="O(N^2)";
    let ac=document.getElementById("actc");
    ac.innerText="O(N logN)";
    let bc=document.getElementById("bctc");
    bc.innerText="O(N logN)";
    let sc=document.getElementById("sc");
    sc.innerText="O(logN)";
    const copy=[...array];
    const moves=quicksort(copy);
    animate3(moves);
}

function animate3(moves)
{
    if(moves.length==0)
    {
        showbars3();
        return;
    }
    const move=moves.shift();
    const[i,j]=move.indices;

    if(move.type=="swap")
    {
        [array[i],array[j]]=[array[j],array[i]];
    }
    showbars3(move);
    setTimeout(function(){
        animate3(moves);
    },125);
}


function quicksort(array) {
    const moves = [];
    
    function partition(low, high) {
        const pivot = array[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            moves.push({ indices: [j, high], type: "comp" });
            if (array[j] <= pivot) {
                i++;
                moves.push({ indices: [i, j], type: "swap" });
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        moves.push({ indices: [i + 1, high], type: "swap" });
        [array[i + 1], array[high]] = [array[high], array[i + 1]];
        return i + 1;
    }

    function quicksortRecursive(low, high) {
        if (low < high) {
            const partitionIndex = partition(low, high);
            quicksortRecursive(low, partitionIndex - 1);
            quicksortRecursive(partitionIndex + 1, high);
        }
    }

    quicksortRecursive(0, array.length - 1);
    return moves;
}

function showbars3(move)
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