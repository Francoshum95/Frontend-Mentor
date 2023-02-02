import "@testing-library/jest-dom";
import { renderHook, act } from '@testing-library/react'
import useMultiStepForm from "@components/multiStepForm/useMultiStepForm";
import { selectField, personalFields, pickField } from "@pages/MultiStepForm";
import * as constant from '@components/multiStepForm/constant';
import { getDefaultForm } from "@components/multiStepForm/useMultiStepForm";

describe("<Controller/>", () => {

  describe("FORMSTEP View", () => {
    beforeEach(() => {
      const {result} = renderHook(() => useMultiStepForm({ personalFields, selectField, pickField}));

      act(() => {
        result.current.selectedStep = constant.FORMSTEP;
        
      })
    });

    it ("should not BACK", () => {
      const {result} = renderHook(() => useMultiStepForm({ personalFields, selectField, pickField}));

      act(() => {
        result.current.onChangeSelectedFormStep(constant.BACK)
      });

      expect(result.current.selectedStep).toEqual(constant.FORMSTEP)

    });

    it ("should NEXT", () => {
      const {result} = renderHook(() => useMultiStepForm({ personalFields, selectField, pickField}));
      act(() => {
        result.current.formAnswer = {"1": 'testing', "2": "testing@gmail.com", "3": "1234"};
      })

      act(() => {
        result.current.onChangeSelectedFormStep(constant.NEXT)        
      });


      expect(result.current.selectedStep).toBe(constant.SELECTSTEP)

    });
  });


});