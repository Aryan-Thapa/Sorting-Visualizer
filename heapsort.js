
function play5()
{
    let wc=document.getElementById("wctc");
    wc.innerText="O(N logN)";
    let ac=document.getElementById("actc");
    ac.innerText="O(N logN)";
    let bc=document.getElementById("bctc");
    bc.innerText="O(N logN)";
    let sc=document.getElementById("sc");
    sc.innerText="O(1)";
    const copy=[...array];
    const moves=heapSort(copy);
    animate5(moves);
}

function animate5(moves)
{
    if(moves.length==0)
    {
        showbars5();
        return;
    }
    const move=moves.shift();
    const[i,j]=move.indices;

    if(move.type=="swap")
    {
        [array[i],array[j]]=[array[j],array[i]];
    }
    showbars5(move);
    setTimeout(function(){
        animate5(moves);
    },125);
}


function heapify(array, n, i, moves) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n) {
        moves.push({ indices: [left, i], type: "comp" });
        if (array[left] > array[largest]) {
            largest = left;
        }
    }

    if (right < n) {
        moves.push({ indices: [right, largest === i ? i : left], type: "comp" });
        if (array[right] > array[largest]) {
            largest = right;
        }
    }

    if (largest !== i) {
        moves.push({ indices: [i, largest], type: "swap" });
        [array[i], array[largest]] = [array[largest], array[i]];

        heapify(array, n, largest, moves);
    }
}

function heapSort(array) {
    const moves = [];

    const n = array.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            heapify(array, n, j, moves);
        }
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        moves.push({ indices: [0, i], type: "swap" });
        [array[0], array[i]] = [array[i], array[0]];
        heapify(array, i, 0, moves);
    }

    return moves;
}

function showbars5(move)
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





















