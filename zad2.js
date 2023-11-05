function difference(arr1,arr2){
    let result = new Set();

    function checkUnique(arr) {
        arr.forEach(function (element) {
            if (!Array.isArray(element)) {
                result.add(element);
            } else {
                checkUnique(element);
            }
        });
    }

    checkUnique(arr1);
    checkUnique(arr2);

    return Array.from(result);
}

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));