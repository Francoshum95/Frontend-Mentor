import { selectFieldType } from "../type";
import {
  fieldAnswerType,
  onChangeUniteSwitchType,
  onSelectFieldSelectType,
  selectedStepType,
} from "../useMultiStepForm";
import { FIRSTSELECT, SECONDSELECT, SELECTORICONMAP } from "../constant";
import Image from "next/image";

type props = {
  selectField: selectFieldType;
  fieldAnswer: fieldAnswerType;
  onSelectFieldSelect: onSelectFieldSelectType;
  onChangeUniteSwitch: onChangeUniteSwitchType;
};

type SelectorType = {
  selectField: selectFieldType;
  fieldAnswer: fieldAnswerType;
  onSelectFieldSelect: onSelectFieldSelectType;
};

type SwithchType = {
  selectField: selectFieldType;
  fieldAnswer: fieldAnswerType;
  onChangeUniteSwitch: onChangeUniteSwitchType;
};

const Selector = ({
  selectField,
  fieldAnswer,
  onSelectFieldSelect,
}: SelectorType) => (
  <div className="gap-3 flex flex-col md:flex-row  md:justify-between">
    {selectField.selections.map(({ id, title, content, price }) => (
      <div
        className={`${fieldAnswer.id === id ? "box-selected" : "box-select"}  
          flex md:flex-col select-box md:h-[9rem] md:w-[8.54rem]`}
        key={id}
        onClick={() => onSelectFieldSelect(id)}
      >
        <Image src={SELECTORICONMAP[id]} width={35} height={35} alt={""} />
        <div className="md:mt-auto md:ml-0 ml-5">
          <h3 className="text-marine-blue font-medium text-sm md:text-md">{title}</h3>
          <h4 className="text-cool-gray text-sm">{`$${
            price[fieldAnswer.unit]
          }/${selectField.switch[fieldAnswer.unit].unit}`}</h4>
          {fieldAnswer.unit === SECONDSELECT ? (
            <h5 className="text-marine-blue text-xs">{content}</h5>
          ) : null}
        </div>
      </div>
    ))}
  </div>
);

const Switch = ({
  selectField,
  fieldAnswer,
  onChangeUniteSwitch,
}: SwithchType) => (
  <div
    className="w-full h-12 rounded-md bg-alabaster 
    mt-4 md:mt-9 flex justify-center items-center text-marine-blue font-medium"
  >
    <span>{selectField.switch[0].name}</span>
    <button
      className="w-10 h-5 flex items-center bg-marine-blue rounded-full mx-5 px-1"
      onClick={() => onChangeUniteSwitch()}
    >
      <div
        className={`${
          fieldAnswer.unit === FIRSTSELECT ? "translate-x-0" : "translate-x-5"
        }
      bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ease-in-out`}
      ></div>
    </button>
    <span>{selectField.switch[1].name}</span>
  </div>
);

const SelectField = ({
  selectField,
  fieldAnswer,
  onSelectFieldSelect,
  onChangeUniteSwitch,
}: props) => {
  return (
    <div className="md:mt-5">
      <Selector
        selectField={selectField}
        fieldAnswer={fieldAnswer}
        onSelectFieldSelect={onSelectFieldSelect}
      />
      <Switch
        selectField={selectField}
        fieldAnswer={fieldAnswer}
        onChangeUniteSwitch={onChangeUniteSwitch}
      />
    </div>
  );
};

export default SelectField;
