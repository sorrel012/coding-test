function solution(keymap, targets) {
    return targets.map(target => {
        let cnt = 0;
        let isPossible = true;

        for (let char of target) {
            let keyPresses = keymap.map(key => key.indexOf(char) + 1).filter(v => v > 0);

            if (keyPresses.length === 0) {
                isPossible = false;
                break;
            } else {
                cnt += Math.min(...keyPresses);
            }
        }

        return isPossible ? cnt : -1;
    });
}
