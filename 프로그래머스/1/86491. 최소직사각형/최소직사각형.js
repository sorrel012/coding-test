function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    sizes.forEach(([w, h]) => {
        const [width, height] = w > h ? [w, h] : [h, w];

        maxWidth = Math.max(maxWidth, width);
        maxHeight = Math.max(maxHeight, height);
    });

    return maxWidth * maxHeight;
}
