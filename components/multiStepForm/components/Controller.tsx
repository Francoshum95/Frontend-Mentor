import {
  isLoadingType,
  onChangeSelectedFormStepType,
  selectedStepType,
} from "../useMultiStepForm";
import { FORMSTEP, CHECKOUTSTEP, DONE, BACK, NEXT } from "../constant";

type props = {
  isLoading: isLoadingType;
  selectedStep: selectedStepType;
  onChangeSelectedFormStep: onChangeSelectedFormStepType;
};

const Controller = ({
  isLoading,
  selectedStep,
  onChangeSelectedFormStep,
}: props) => {
  const isBackDisable = selectedStep === FORMSTEP || selectedStep === DONE;
  const isNextDisable = selectedStep === DONE;

  return (
    <div
      className="w-full bg-white flex justify-between my-auto mb-0 md:px-[4rem] md:pb-6 items-center mobile:p-4
      mobile:absolute mobile:bottom-0"
    >
      <button
        role="controller-prev"
        className={`${
          isBackDisable &&
          "invisible cursor-default text-light-gray hover:text-marine-blue"
        }`}
        disabled={isBackDisable || isLoading}
        onClick={() => onChangeSelectedFormStep(BACK)}
        data-testid="back-button"
      >
        Go Back
      </button>
      <button
        role="controller-next"
        className={`${isNextDisable && "hidden"}
        px-4 py-3 md:bg-purplish-blue bg-marine-blue text-white rounded-md md:hover:bg-marine-blue md:focus:bg-marine-blue
        hover:bg-purplish-blue focus:bg-purplish-blue`}
        disabled={isNextDisable || isLoading}
        onClick={() => onChangeSelectedFormStep(NEXT)}
        data-testid="next-button"
      >
        {selectedStep === CHECKOUTSTEP ? "Comfirm" : " Next Step"}
      </button>
    </div>
  );
};

export default Controller;
