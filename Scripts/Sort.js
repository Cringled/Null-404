const btn = document.getElementById('run_algorithm');
const result_input = document.getElementById('result_input');
const result_box = document.getElementById('result_box');

btn.addEventListener('click', function onClick(event) {

    arr = convertToArray(result_input.value);
    passes = convertArrayToDisplay(Sorting_Algorithm(arr));
    result_box.innerHTML = passes;

});

function convertToArray(arr) {

    arr = arr.split(',');
    let size = arr.length;
    for(let i = 0; i < size; i++){

        arr[i] = parseFloat(arr[i]);

    }

    return arr;

}

function convertArrayToDisplay(passes) {

    let result = "";
    let size = passes.length;
    let element_size = passes[0][0].length;

    for (let i = 0; i < size; i++) { // for each pass

        result += "Pass " + i.toString() + ": "; // add the pass #
        for (let j = 0; j < element_size; j++) { // for each element in the current pass

            result += passes[i][0][j].toString(); // add the current element
            if (j < element_size - 1 && passes[i][0][j + 1] != undefined) { result += ", "; } // if is not the end, add a comma
            else { result += " | " + passes[i][1] + "<br>"; break; } // if it is the end, add the pass desc and a newline

        }

    } result += "Sorting complete!";

    return result;

}
