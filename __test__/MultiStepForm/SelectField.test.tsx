import "@testing-library/jest-dom";
import { selectField, personalFields } from "@pages/MultiStepForm";
import { renderHook, act, cleanup, waitFor } from '@testing-library/react'
import useMultiStepForm from "@components/multiStepForm/useMultiStepForm";
import { FIRSTSELECT, SECONDSELECT } from "@components/multiStepForm/constant";

const testId = 2;

describe("<SelectField/>", () => {

  beforeEach(() => cleanup())
  
  it ("should change fieldAnswer - id", () => {
    const {result} = renderHook(() => useMultiStepForm({ personalFields, selectField}));

    act(() => {
      result.current.onSelectFieldSelect(testId);
    })

    expect(result.current.fieldAnswer).toEqual({
      unit: FIRSTSELECT, id: testId
    })
  });

  it ("should change fieldAnswer - unit", () => {
    const {result} = renderHook(() => useMultiStepForm({ personalFields, selectField}));

    act(() => {
      result.current.onChangeUniteSwitch()
    })


    expect(result.current.fieldAnswer).toEqual({
      unit: SECONDSELECT, id: selectField.selections[0].id
    })
  })

});