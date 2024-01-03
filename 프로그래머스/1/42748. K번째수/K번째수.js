function solution(array, commands) {
    return commands.map(([start, end, idx]) => array.slice(start-1, end).sort((a, b) => a - b)[idx-1])
}