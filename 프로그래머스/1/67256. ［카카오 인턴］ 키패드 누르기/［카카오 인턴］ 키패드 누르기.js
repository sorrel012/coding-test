function solution(numbers, hand) {
    const keypadPos = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        10: [3, 0], 0: [3, 1], 12: [3, 2]
    };

    let leftHand = 10;
    let rightHand = 12;
    let result = '';

    numbers.forEach(num => {
        if ([1, 4, 7].includes(num)) {
            result += 'L';
            leftHand = num;
        } else if ([3, 6, 9].includes(num)) {
            result += 'R';
            rightHand = num;
        } else {
            const leftPos = keypadPos[leftHand];
            const rightPos = keypadPos[rightHand];
            const numPos = keypadPos[num];

            const leftDistance = Math.abs(leftPos[0] - numPos[0]) + Math.abs(leftPos[1] - numPos[1]);
            const rightDistance = Math.abs(rightPos[0] - numPos[0]) + Math.abs(rightPos[1] - numPos[1]);

            if (leftDistance === rightDistance) {
                if (hand === 'right') {
                    result += 'R';
                    rightHand = num;
                } else {
                    result += 'L';
                    leftHand = num;
                }
            } else if (leftDistance < rightDistance) {
                result += 'L';
                leftHand = num;
            } else {
                result += 'R';
                rightHand = num;
            }
        }
    });

    return result;
}
