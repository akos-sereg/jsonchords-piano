import { octaveImageOriginalWidth } from '../../components/widgets/Piano/const';

export const getScreenRatio = () => {
  const ratios = [0.2, 0.25, 0.3, 0.35];

  let selectedRatio = 0.2;
  ratios.forEach((ratio) => {
    if (ratio * octaveImageOriginalWidth * 7 * 1.2 < window.innerWidth) {
      selectedRatio = ratio;
    }
  });

  return selectedRatio;
};
