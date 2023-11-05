function group(arr, len) {
    const result = [];
    const len1 = Math.ceil(arr.length / len);

    for (let i = 0; i < len1; i++) {
        result.push([]);
    }

    for (let i = 0; i < arr.length; i++) {
        //  const index = Math.floor(i / len1);
        const index = i % len1;
        result[index].push(arr[i]);
    }

    return result;
}
const arr = [1, 2, 3, 4, 5, 6];
const len = 3;
const groupedArray = group(arr, len);
console.log(groupedArray);