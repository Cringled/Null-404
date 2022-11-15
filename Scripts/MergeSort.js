// Understanding of algorithm and basis for implementation
// comes from https://www.geeksforgeeks.org/merge-sort/

function Sorting_Algorithm(arr) {

    let passes = [[[...arr],"Initial array"]]; // initialize passes array with the original arr

    let mid = Math.floor(arr.length / 2); // get mid index
    let left = [...arr].slice(0, mid); // split left
    let right = [...arr].slice(mid, arr.length); // split right

    passes.push([[...left], "Initial left array"]);
    passes.push([[...right], "Initial right array"]);

    if (left.length > 1) { // if there is more than 1 element in the left array

        left = Sorting_Algorithm(left); // sort left array
        left = left[left.length - 1][0];

    } if (right.length > 1) { // if there is more than 1 element in the right array

        right = Sorting_Algorithm(right); // sort left array
        right = right[right.length - 1][0];

    }

    let left_i = 0; // left index
    let right_i = 0; // right index
    let i = 0; // index of main array
    
    passes.push([[...left], "Sorted left array"]);
    passes.push([[...right], "Sorted right array"]);

    while (left_i < left.length && right_i < right.length) { // while both arrays have elements left

        if (left[left_i] < right[right_i]) { // if left is less than right

            arr[i] = left[left_i]; // store left
            left_i += 1; // increment left

        } else { // if right is less than left

            arr[i] = right[right_i]; // store right
            right_i += 1; // increment right

        }
        
        i += 1; // increment main array index

    }

    // ran out of elements in at least 1 array
    while (left_i < left.length) { // go through rest of left array

        arr[i] = left[left_i];
        left_i += 1;
        i += 1;

    }

    while (right_i < right.length) { // go through rest of right array

        arr[i] = right[right_i];
        right_i += 1;
        i += 1;

    }

    passes.push([[...arr], "Final array"]);
    return passes;

}