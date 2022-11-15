// Understanding of algorithm and basis for implementation
// comes from https://www.geeksforgeeks.org/insertion-sort/

function heapify(arr, n, i, passes) {
    
    big_i = i; // biggest index defaulted to i
    left = 2 * i + 1; // left 
    right = 2 * i + 2; // right

    if (left < n && arr[left] > arr[big_i]) { // if left is new biggest

        big_i = left; // set biggest index to left

    }

    if (right < n && arr[right] > arr[big_i]) { // if right is new biggest

        big_i = right; // set right to biggest

    } 
    
    if (big_i != i) { // if biggest index isn't i
        // swap array[i] and array[big_i]
        temp = arr[i];
        arr[i] = arr[big_i];
        arr[big_i] = temp;

        heapify(arr, n, big_i, passes); // recursive call with biggest index

    }

}

function Sorting_Algorithm(arr) {

    let passes = [[[...arr],"Initial array"]]; // initialize passes array with the original arr

    n = arr.length; // get length of array

    i = n; // 2 - 1 # set i
    while (i >= 0) {

        heapify(arr, n, i, passes);
        i -= 1; // decrement i

    }

    passes.push([[...arr], "Created a max binary tree"]);

    i = n - 1
    while (i > 0) {
        // swap array[0] and array[i]
        temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0, passes);
        i -= 1; // decrement i

    }

    passes.push([[...arr], "Final result"]);

    return passes;

}
