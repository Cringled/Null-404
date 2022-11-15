// Selection sort algorithm understanding came from 
// https://www.geeksforgeeks.org/selection-sort/ 

function selectionSort(arr) 
{ 
    let passes= [[[...arr], "Initial array"]];
    
    const size = arr.length;
    
    for(let i = 0; i < n; i++) 
    {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++)
        {
            if(arr[j] < arr[min])
            {
                min=j; 
            }
        }

        if (min != i) 
        {
             // Swapping the elements
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
        
        passes.push([[...arr], "Index " + i.toString()]);

    }

    passes.push([[...arr], "Final Result"]);

    return passes;
}