import "@testing-library/jest-dom";
import { render, cleanup } from '@testing-library/react'
import {screen} from '@testing-library/dom'
import { selectField, pickField } from "@pages/MultiStepForm";
import Checkout from "@components/multiStepForm/components/Checkout";
import { FIRSTSELECT, SECONDSELECT } from "@components/multiStepForm/constant";


describe("Checkout View", () => {
  beforeEach(() => cleanup())

  describe("switch to first position", () => {
    const props = {
      selectField,
      pickField,
      fieldAnswer: {
        unit: FIRSTSELECT,
        id: selectField.selections[0].id
      },
      pickAnswer: pickField.map(item => item.id),
      onChangeUniteSwitch: jest.fn()
    }
    it ("selected all picks, should render correct price", () => {
        render(<Checkout
          {...props}
        />)

        expect(screen.getByText(("$14 /mo"))).toBeInTheDocument()
    })

    it ("select one pick, should render correct price", () => {
      props.pickAnswer = [pickField[0].id]
      render(<Checkout
        {...props}
      />)

      expect(screen.getByText(("$10 /mo"))).toBeInTheDocument()

    })

    it ("select none, should render correct price", () => {
      props.pickAnswer = [];
      render(<Checkout
        {...props}
      />)

      expect(screen.getByText(("$9 /mo"))).toBeInTheDocument()
  })
  })

  describe("switch to second position", () => {
    const props = {
      selectField,
      pickField,
      fieldAnswer: {
        unit: SECONDSELECT,
        id: selectField.selections[0].id
      },
      pickAnswer: pickField.map(item => item.id),
      onChangeUniteSwitch: jest.fn()
    }
    it ("selected all picks, should render correct price", () => {
        render(<Checkout
          {...props}
        />)

        expect(screen.getByText(("$140 /yr"))).toBeInTheDocument()
    })

    it ("select one pick, should render correct price", () => {
      props.pickAnswer = [pickField[0].id]
      render(<Checkout
        {...props}
      />)

      expect(screen.getByText(("$100 /yr"))).toBeInTheDocument()

    })

    it ("select none, should render correct price", () => {
      props.pickAnswer = [];
      render(<Checkout
        {...props}
      />)

      expect(screen.getByText(("$90 /yr"))).toBeInTheDocument()
  })
  })



});