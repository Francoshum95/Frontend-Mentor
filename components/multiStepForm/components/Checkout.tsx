import { useMemo } from "react";
import { pickFieldType, selectFieldType } from "../type";
import {
  fieldAnswerType,
  onChangeUniteSwitchType,
  pickAnswerType,
} from "../useMultiStepForm";

type props = {
  selectField: selectFieldType;
  pickField: pickFieldType;
  fieldAnswer: fieldAnswerType;
  pickAnswer: pickAnswerType;
  onChangeUniteSwitch: onChangeUniteSwitchType;
};

type fieldType = {
  title: string;
  price: number[];
};

type picksType = {
  title: string;
  price: number[];
  id: number;
}[];

type getSelectedFieldType = ({
  selectField,
  fieldAnswer,
}: {
  selectField: selectFieldType;
  fieldAnswer: fieldAnswerType;
}) => fieldType;

type getPicks = ({
  pickField,
  pickAnswer,
}: {
  pickField: pickFieldType;
  pickAnswer: pickAnswerType;
}) => picksType;

type getTotalPrice = ({
  field,
  picks,
  fieldAnswer,
}: {
  field: fieldType;
  picks: picksType;
  fieldAnswer: fieldAnswerType;
}) => number;

const getSelectedField: getSelectedFieldType = ({
  selectField,
  fieldAnswer,
}) => {
  const fields: fieldType = {
    title: "",
    price: [],
  };

  const targetField = selectField.selections.find(
    (item) => item.id === fieldAnswer.id
  );

  if (targetField) {
    fields.title = targetField.title;
    fields.price = targetField.price;
  }

  return fields;
};

const getPicks: getPicks = ({ pickField, pickAnswer }) => {
  const picks: picksType = [];

  pickAnswer.forEach((id) => {
    pickField.forEach((item) => {
      if (item.id === id) {
        picks.push({
          title: item.title,
          price: item.price,
          id: item.id,
        });
      }
    });
  });

  return picks;
};

const getTotlaPrice: getTotalPrice = ({ fieldAnswer, field, picks }) => {
  let totalPrice = 0;
  totalPrice += field.price[fieldAnswer.unit];

  picks.forEach((item) => {
    totalPrice += item.price[fieldAnswer.unit];
  });

  return totalPrice;
};

const Checkout = ({
  selectField,
  pickField,
  fieldAnswer,
  pickAnswer,
  onChangeUniteSwitch,
}: props) => {
  const field = useMemo(
    () => getSelectedField({ selectField, fieldAnswer }),
    [selectField, fieldAnswer]
  );
  const picks = useMemo(
    () => getPicks({ pickField, pickAnswer }),
    [pickField, pickAnswer]
  );

  const totalPrice = getTotlaPrice({
    fieldAnswer,
    field,
    picks,
  });

  return (
    <div className="mt-5">
      <div className="bg-alabaster rounded-md md:w-[27.1rem] p-4 ">
        <div className="flex items-center border-b-[1px] border-light-gray pb-4">
          <div className="flex flex-col">
            <h4>{`${field.title}(${
              selectField.switch[fieldAnswer.unit].name
            })`}</h4>
            <button
              className="underline text-sm text-left text-cool-gray"
              onClick={() => onChangeUniteSwitch()}
            >
              Change
            </button>
          </div>
          <span className="text-marine-blue font-semibold ml-auto">{`$${
            field.price[fieldAnswer.unit]
          }/${selectField.switch[fieldAnswer.unit].unit}`}</span>
        </div>
        <div className="mt-4 text-sm">
          {picks.map((item) => (
            <div key={item.id} className="flex justify-between">
              <h4 className="text-cool-gray">{item.title}</h4>
              <span className="text-marine-blue font-thin">
                {`+$${item.price[fieldAnswer.unit]} /${
                  selectField.switch[fieldAnswer.unit].unit
                }`}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-between p-4 ">
        <h4 className="text-sm text-cool-gray">{`Total (per ${selectField.switch[fieldAnswer.unit].title})`}</h4>
        <span data-testid="total-price" className="text-lg font-bold text-purplish-blue">
          {`$${totalPrice} /${selectField.switch[fieldAnswer.unit].unit}`}
        </span>
      </div>
    </div>
  );
};

export default Checkout;
