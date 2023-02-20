import "@testing-library/jest-dom";
import { selectField, personalFields, pickField } from "@pages/MultiStepForm";
import { renderHook, act, waitFor } from '@testing-library/react'
import useMultiStepForm from "@components/multiStepForm/useMultiStepForm";
import { PHONE, TEXT, EMAIL, NEXT } from "@components/multiStepForm/constant";

const testName = "testing";
const testEmail = "testing@gmail.com";
const testPhone = "12345567"


describe("<PersonalInfo/>", () => {
  it ("should change input field", () => {
    const {result} = renderHook(() => useMultiStepForm({ personalFields, selectField}));
    act(() => {
      result.current.onChangeFormAnswer({id: "1", value: testName, fieldType:TEXT});
    })
    act(() => {
      result.current.onChangeFormAnswer({id: "2", value: testEmail, fieldType:EMAIL});
    })
    act(() => {
      result.current.onChangeFormAnswer({id: "3", value: testPhone, fieldType:PHONE})
    })

    expect(result.current.formAnswer).toEqual({
      1: testName,
      2: testEmail,
      3: testPhone
    })
  });

  it ("should have form error - This field is required on id: 1", () => {
    const {result, rerender} = renderHook(() => useMultiStepForm({ personalFields, selectField}));
    act(() => {
      result.current.onChangeFormAnswer({id: "2", value: testEmail, fieldType:EMAIL});
    })
    act(() => {
      result.current.onChangeFormAnswer({id: "3", value: testPhone, fieldType:PHONE})
    })
    act(() => {
      result.current.onChangeSelectedFormStep(NEXT)
    })

    waitFor(() => result.current.formError)

    expect(result.current.formError).toEqual({
      1: "This field is required"
    })
  });

  it ("should have form error - This field is required on all fields", () => {
    const {result} = renderHook(() => useMultiStepForm({ personalFields, selectField}));
    act(() => {
      result.current.onChangeSelectedFormStep(NEXT)
    })

    waitFor(() => result.current.formError)

    expect(result.current.formError).toEqual({
      1: "This field is required",
      2: "This field is required",
      3: "This field is required",
    })
  });

  it ("should have form error - This field is required : email", () => {
    const {result, rerender} = renderHook(() => useMultiStepForm({ personalFields, selectField}));
    act(() => {
      result.current.onChangeFormAnswer({id: "1", value: testName, fieldType:TEXT});
    })
   
    act(() => {
      result.current.onChangeFormAnswer({id: "3", value: testPhone, fieldType:PHONE})
    })
    act(() => {
      result.current.onChangeSelectedFormStep(NEXT)
    })

    waitFor(() => result.current.formError)

    expect(result.current.formError).toEqual({
      2: "This field is required"
    })
 
  });

  it ("should have form error - This field is required : email", () => {
    const {result, rerender} = renderHook(() => useMultiStepForm({ personalFields, selectField}));
    act(() => {
      result.current.onChangeFormAnswer({id: "1", value: testName, fieldType:TEXT});
    })
    act(() => {
      result.current.onChangeFormAnswer({id: "2", value: "test123", fieldType:EMAIL});
    })
   
    act(() => {
      result.current.onChangeFormAnswer({id: "3", value: testPhone, fieldType:PHONE})
    })
    act(() => {
      result.current.onChangeSelectedFormStep(NEXT)
    })

    waitFor(() => result.current.formError)

    expect(result.current.formError).toEqual({
      2: "The Email Format is Invalid"
    })
  });



});