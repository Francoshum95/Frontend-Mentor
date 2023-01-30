import { useState } from 'react';

const useMultiStepForm = () => {
  const [selectedFormStep, setSelectFormStep] = useState("")

  return {
    selectedFormStep
  }
};

export default useMultiStepForm