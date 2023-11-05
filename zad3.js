function flatten(arr) {
    const result = [];

    function recursiveFlatten(subArray) {
        for (let i = 0; i < subArray.length; i++) {
            if (Array.isArray(subArray[i])) {
                recursiveFlatten(subArray[i]);
            } else {
                result.push(subArray[i]);
            }
        }
    }

    recursiveFlatten(arr);
    return result;
}