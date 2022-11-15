// Understanding of algorithm and basis for implementation
// comes from https://www.geeksforgeeks.org/bubble-sort/

function Sorting_Algorithm(arr) {

    let passes = [[[...arr],"Initial array"]]; // initialize passes array with the original arr

    const size = arr.length;
    let i = 0;
    let temp = 0;
    let swapped_elements = [];
    let result_j = "";
    let swapped_elements_size = 0;

    while (true) { // while not sorted yet

        while (i < size - 1) { // for each element minus the last element

            if (arr[i] > arr[i + 1]) { // if the curr element is greater than the element after

                // swap elements
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped_elements.push([arr[i],arr[i + 1]]);

            } i += 1;

        }
        
        swapped_elements_size = swapped_elements.length;
        if (swapped_elements_size > 0) { // if swapped

            for (let j = 0; j < swapped_elements_size; j++) {

                result_j += "Swapped " + swapped_elements[j][1].toString() + " and " + swapped_elements[j][0].toString();
                if (j < swapped_elements_size - 1) { result_j += ", "; } // if not the last element, add a comma

            } passes.push([[...arr],result_j]); // add a copy of the current array to passes array
            result_j = ""; // reset results storage string
            swapped_elements = []; // reset array for swapped elements

        } else { // did not swap

            passes.push([[...arr], "No swap occurred"]);
            break;

        } i = 0; // reset i

    }

    return passes;

}
