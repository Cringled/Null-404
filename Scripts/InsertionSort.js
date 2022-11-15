// Understanding of algorithm and basis for implementation
// comes from https://www.geeksforgeeks.org/insertion-sort/

function Sorting_Algorithm(arr) {

    let passes = [[[...arr],"Initial array"]]; // initialize passes array with the original arr

    const size = arr.length;

    for (let i = 0; i < size; i++) { // for every item in array

        val = arr[i]; // set val
        hole = i; // set hole

        while (hole > 0 && arr[hole - 1] > val) { // while still in range and need to move

            arr[hole] = arr[hole - 1]; // decrement hole
            hole -= 1; // decrement hole index

        }

        if (hole != i) {

            arr[hole] = val

        }

        passes.push([[...arr], "Index " + i.toString()]);

    }

    passes.push([[...arr], "Final array"]);
    return passes;

}