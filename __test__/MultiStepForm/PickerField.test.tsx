import "@testing-library/jest-dom";
import { selectField, personalFields, pickField } from "@pages/MultiStepForm";
import { renderHook, act, cleanup } from '@testing-library/react'
import useMultiStepForm from "@components/multiStepForm/useMultiStepForm";
import { FIRSTSELECT, SECONDSELECT } from "@components/multiStepForm/constant";

const testId = 1

describe("<SelectField/>", () => {

  beforeEach(() => {
    const {result} = renderHook(() => useMultiStepForm({ personalFields, selectField, pickField}));
    act(() => {
      result.current.pickAnswer = [testId]
    });

  })
  const {result} = renderHook(() => useMultiStepForm({ personalFields, selectField, pickField}));
  it ("should add pick answer", () => {
    act(() => {
      result.current.onSelectFieldSelect(testId);
    })

    expect(result.current.pickAnswer.length).toBe(2)
  });

  it ("should change fieldAnswer - unit", () => {

    act(() => {
      result.current.onSelectFieldSelect(testId)
    })

    expect(result.current.pickAnswer.length).toBe(1)

  })

});