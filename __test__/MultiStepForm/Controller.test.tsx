import "@testing-library/jest-dom";
import {
  renderHook,
  act,
  render,
  screen,
} from "@testing-library/react";
import useMultiStepForm from "@components/multiStepForm/useMultiStepForm";
import { selectField, personalFields } from "@pages/MultiStepForm";
import * as constant from "@components/multiStepForm/constant";
import Controller from "@components/multiStepForm/components/Controller";

let isLoading = false;
let selectedStep = constant.FORMSTEP;
const onChangeSelectedFormStep = jest.fn();

describe("<Controller/>", () => {
  beforeEach(() => {

    isLoading=false;
    selectedStep = constant.FORMSTEP;

    render(
      <Controller
        isLoading={isLoading}
        selectedStep={selectedStep}
        onChangeSelectedFormStep={onChangeSelectedFormStep}
      />
    )
  }
  );

  it("should not BACK, if in the first step", () => {
    const { result } = renderHook(() =>
      useMultiStepForm({ personalFields, selectField })
    );

    act(() => {
      result.current.selectedStep = constant.FORMSTEP;
    });

    expect(screen.getByRole("controller-prev")).toHaveAttribute("disabled");
  });

  it("should not BACK, if is loading", () => {
    const { result, rerender } = renderHook(() =>
      useMultiStepForm({ personalFields, selectField })
    );

    act(() => {
      result.current.selectedStep = constant.SELECTSTEP;
    });

    rerender();
    isLoading=true;

    expect(screen.getByRole("controller-prev")).toHaveAttribute("disabled");
  });



  it("should not NEXT, if in the last step", async () => {
    const { result, rerender } = renderHook(() =>
      useMultiStepForm({ personalFields, selectField })
    );

    act(() => {
      result.current.selectedStep = constant.DONE;
    });

    rerender();

    expect(screen.getByRole("controller-prev")).toHaveAttribute("disabled");
  });

  it("should not NEXT, if is loaidng", async () => {
    const { result, rerender } = renderHook(() =>
      useMultiStepForm({ personalFields, selectField })
    );

    act(() => {
      result.current.selectedStep = constant.SELECTSTEP;
    });

    isLoading=true;

    rerender();

    expect(screen.getByRole("controller-prev")).toHaveAttribute("disabled");
  });
});
