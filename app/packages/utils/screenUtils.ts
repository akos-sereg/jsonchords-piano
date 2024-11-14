export const getScreenRatio = () => {
    const octaveImageWidth = 619;
    const ratios = [0.2, 0.25, 0.3, 0.35];

    let selectedRatio = 0.2;
    ratios.forEach((ratio) => {
        console.log('--> ', (ratio * octaveImageWidth * 7), window.innerWidth);
        if ((ratio * octaveImageWidth * 7 * 1.2) < window.innerWidth) {
            selectedRatio = ratio;
        }
    });

    return selectedRatio;
}