import { useMemo } from "react";

import { pickFieldType, selectFieldType } from "../type";
import {
  fieldAnswerType,
  onChangePickAnswerType,
  pickAnswerType,
} from "../useMultiStepForm";

type props = {
  selectField: selectFieldType
  pickField: pickFieldType
  pickAnswer: pickAnswerType
  fieldAnswer: fieldAnswerType
  onChangePickAnswer: onChangePickAnswerType
};

type PickerType = {
  selectField: selectFieldType,
  pickAnswer: pickAnswerType;
  fieldAnswer: fieldAnswerType
  id: number;
  title: string;
  content: string;
  price: number[];
  onChangePickAnswer: onChangePickAnswerType;
};

const checkIsChecked = (id: number, pickAnswer: pickAnswerType) => {
  return pickAnswer.includes(id);
};

const Picker = ({
  selectField,
  pickAnswer,
  fieldAnswer,
  id,
  title,
  content,
  price,
  onChangePickAnswer,
}: PickerType) => {
  const isChecked = useMemo(
    () => checkIsChecked(id, pickAnswer),
    [id, pickAnswer]
  );

  return (
    <div
      className={`
      ${isChecked ? "box-selected" : "box-select"} 
      h-20 p-4 border-[1px] my-4 select-box flex items-center md:w-[27.15rem]`}
      onClick={() => onChangePickAnswer(id)}
    >
      <input checked={isChecked} type="checkbox" className="accent-purplish-blue w-5 h-5 cursor-pointer"></input>
      <div className="mx-5">
        <h4 className="text-marine-blue text-sm">{title}</h4>
        <h5 className="text-cool-gray text-xs md:text-sm">{content}</h5>
      </div>
      <span className="ml-auto text-sm text-purplish-blue">
      {`+$${
            price[fieldAnswer.unit]
          }${selectField.switch[fieldAnswer.unit].unit}`}
      </span>

    </div>
  );
};

const PickField = ({
  selectField,
  pickField,
  pickAnswer,
  fieldAnswer,
  onChangePickAnswer,
}: props) => {
  return (
    <div className="gap-3">
      {pickField.map(({ id, title, content, price }) => (
        <div key={id}>
          <Picker
            id={id}
            title={title}
            content={content}
            price={price}
            selectField={selectField}
            pickAnswer={pickAnswer}
            fieldAnswer={fieldAnswer}
            onChangePickAnswer={onChangePickAnswer}
          />
        </div>
      ))}
    </div>
  );
};

export default PickField;
