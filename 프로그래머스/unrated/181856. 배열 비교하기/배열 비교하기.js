function solution(arr1, arr2) {
    if(arr1.length === arr2.length) {
        const arr1Sum = arr1.reduce((sum, value)=> sum += value);
        const arr2Sum = arr2.reduce((sum, value)=> sum += value);
        return arr1Sum > arr2Sum ? 1 : arr1Sum === arr2Sum ? 0 : -1;
              
    } else {
        return arr1.length > arr2.length ? 1 : -1;
    }
}