function play4()
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
    const moves=mergeSort(copy);
    animate4(moves);
}

function animate4(moves)
{
    if(moves.length==0)
    {
        showbars4();
        return;
    }
    const move=moves.shift();
    const[i,j]=move.indices;

    if(move.type=="swap")
    {
        [array[i],array[j]]=[array[j],array[i]];
    }
    showbars4(move);
    setTimeout(function(){
        animate4(moves);
    },125);
}


function mergeSort(array) {
    const moves = [];
    
    function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            moves.push({ indices: [leftIndex, rightIndex + left.length], type: "comp" });

            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    function mergeSortRecursive(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        const sortedLeft = mergeSortRecursive(left);
        const sortedRight = mergeSortRecursive(right);

        const mergedArray = merge(sortedLeft, sortedRight);

        moves.push({ indices: [0, arr.length - 1], type: "merge" });

        return mergedArray;
    }

    mergeSortRecursive(array);
    return moves;
}


function showbars4(move)
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