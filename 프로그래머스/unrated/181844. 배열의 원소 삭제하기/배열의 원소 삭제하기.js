function solution(arr, delete_list) {
    return arr.filter(value => delete_list.indexOf(value) === -1)
}