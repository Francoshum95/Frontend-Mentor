import "@testing-library/jest-dom";
import { selectField, personalFields } from "@pages/MultiStepForm";
import { renderHook, act, cleanup, waitFor } from '@testing-library/react'
import useMultiStepForm from "@components/multiStepForm/useMultiStepForm";
import { FIRSTSELECT, SECONDSELECT } from "@components/multiStepForm/constant";

const testId = 1

describe("<PickField/>", () => {

  const {result} = renderHook(() => useMultiStepForm({ personalFields, selectField}));
  it ("should add pick answer", () => {

    act(() => {
      result.current.onChangePickAnswer(testId);
    })


    expect(result.current.pickAnswer.length).toBe(1)
  });


});