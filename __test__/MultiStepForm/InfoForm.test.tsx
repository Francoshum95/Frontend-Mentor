import "@testing-library/jest-dom";
import { selectField, personalFields, pickField } from "@pages/MultiStepForm";
import { renderHook, act } from '@testing-library/react'
import useMultiStepForm from "@components/multiStepForm/useMultiStepForm";

const testName = "testing";
const testEmail = "testing@gmail.com";
const testPhone = "12345567"


describe("<PersonalInfo/>", () => {
  it ("should change input field", () => {
    const {result} = renderHook(() => useMultiStepForm({ personalFields, selectField, pickField}));
    act(() => {
      result.current.onChangeFormAnswer({id: "1", value: testName});
    })
    act(() => {
      result.current.onChangeFormAnswer({id: "2", value: testEmail});
    })
    act(() => {
      result.current.onChangeFormAnswer({id: "3", value: testPhone})
    })

    expect(result.current.formAnswer).toEqual({
      1: testName,
      2: testEmail,
      3: testPhone
    })
  });

});