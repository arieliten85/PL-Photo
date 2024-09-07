import { ImagesHeadLineSlider } from "../../apis/ImagesHeadLineSlider";
import { BabySixMothsContent } from "../../components/secctions/babySixMoths/BabySixMothsContent";

import { Slider } from "../../components/slider/Slider";

export const BabySixMothsSeccion = () => {
  return (
    <>
      <Slider
        ImagesHeadLineSlider={ImagesHeadLineSlider}
        filterName="babySixMoths"
      />
      <BabySixMothsContent />
    </>
  );
};
