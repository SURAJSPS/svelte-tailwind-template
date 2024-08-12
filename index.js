function recurseHard(idx, arr, temp) {
    if (idx === arr.length) {
        console.log(temp); // 3 [1,2,3], 2 [1,2]
        return;
    }
    temp.push(arr[idx]); 
    recurseHard(idx + 1, arr, temp); //
    temp.pop(); // 2 [1, 3]
    recurseHard(idx + 1, arr, temp); //3 [1,3]
}

const arr = [1, 2, 3];

recurseHard(0, arr, []); 