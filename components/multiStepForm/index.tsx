import PersonalInfo from "./components/PersonalInfo"
import Sidebar from "./components/Sidebar"
import useMultiStepForm, { fieldAnswerType, onChangeFormAnswerType, onChangePickAnswerType, onChangeUniteSwitchType, onSelectFieldSelectType, pickAnswerType, selectedStepType } from "./useMultiStepForm"
import type { formStepType, personalFieldsType, selectFieldType, pickFieldType } from "./type"
import type { formType } from "./useMultiStepForm"
import Controller from "./components/Controller"
import SelectField from "./components/SelectField"
import PickField from "./components/PickField"
import Checkout from "./components/Checkout"

export type propsType = {
  formStep: formStepType,
  personalFields: personalFieldsType,
  selectField: selectFieldType,
  pickField: pickFieldType,
};

type RenderViewType = {
  personalFields: personalFieldsType,
  selectField: selectFieldType,
  pickField: pickFieldType,
  selectedStep: selectedStepType,
  formError: formType,
  formAnswer: formType,
  fieldAnswer: fieldAnswerType,
  pickAnswer: pickAnswerType
  onChangeFormAnswer: onChangeFormAnswerType,
  onSelectFieldSelect: onSelectFieldSelectType,
  onChangeUniteSwitch: onChangeUniteSwitchType,
  onChangePickAnswer: onChangePickAnswerType
}

const RednerView = ({
  personalFields,
  pickField,
  selectField,
  selectedStep,
  formError,
  formAnswer,
  fieldAnswer,
  pickAnswer,
  onChangeFormAnswer,
  onChangeUniteSwitch,
  onSelectFieldSelect,
  onChangePickAnswer
}:RenderViewType) => {
  const viewMap:any = {
    1: PersonalInfo({
      formError,
      formAnswer,
      personalFields,
      onChangeFormAnswer
    }),
    2: SelectField({
      selectField,
      fieldAnswer,
      onChangeUniteSwitch,
      onSelectFieldSelect
    }),
    3: PickField({
      selectField,
      pickField,
      fieldAnswer,
      pickAnswer,
      onChangePickAnswer
    }),
    4: Checkout({
      selectField,
      pickField,
      fieldAnswer,
      pickAnswer,
      onChangeUniteSwitch
    })
  }
  return viewMap[selectedStep]
}

const MultiStepForm = (props:propsType) => {
  const { formStep, personalFields, selectField, pickField } = props;
  const {
    isLoading,
    selectedStep,
    formAnswer,
    formError,
    fieldAnswer,
    pickAnswer,
    onChangeFormAnswer,
    onChangeSelectedFormStep,    
    onSelectFieldSelect,
    onChangeUniteSwitch,
    onChangePickAnswer
  } = useMultiStepForm({
      personalFields,
      selectField,
      pickField
    });
  
  const viewProps = {
    personalFields,
    selectField,
    pickField,
    selectedStep,
    formError,
    formAnswer,
    fieldAnswer,
    pickAnswer,
    onChangeFormAnswer,
    onSelectFieldSelect,
    onChangeUniteSwitch,
    onChangePickAnswer
  };

  const controllProps = {
    isLoading,
    selectedStep,
    onChangeSelectedFormStep
  }

  return (
    <>
      <Sidebar
        formStep={formStep}
        selectedStep={selectedStep}
      />
      <div className="flex flex-col mobile:justify-center mobile:items-center">
        <div className="mobile:w-[90%] mobile:bg-white mobile:rounded-md mobile:relative top-[-86px] mobile:max-w-[430px]
         z-[999] mobile:px-6 mobile:py-8 mobile:shadow-md md:px-[4rem] md:pb-[3rem] md:pt-[3rem] mobile:p-3">
          <>
            <h1 className="font-bold text-2xl md:text-3xl text-marine-blue">{formStep[selectedStep -1]['header']}</h1>
            <p className="text-cool-gray mt-2 font-thin leading-7">{formStep[selectedStep -1]['content']}</p>
          </>
        <RednerView
          {...viewProps}
        />
        </div>
        <Controller
          {...controllProps}
        />
      </div>
    </>
  )
};

export default MultiStepForm