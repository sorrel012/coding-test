function solution(k, dungeons) {
    const dungeonLen = dungeons.length;
    const visited = new Array(dungeonLen).fill(0);
    let answer = 0;

    function dfs(k, cnt) {
        answer = Math.max(cnt, answer);

        for (let i = 0; i < dungeonLen; i++){
            if (k >= dungeons[i][0] && !visited[i]) {
                visited[i] = 1;
                dfs(k - dungeons[i][1], cnt + 1);
                visited[i] = 0;
            }
        }
    }

    dfs(k, 0);
    return answer;
}