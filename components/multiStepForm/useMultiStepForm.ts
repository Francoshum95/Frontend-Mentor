import { useState, useMemo } from 'react';
import * as constant from './constant';
import { formStepType, personalFieldsType, selectFieldType } from './type';

export type isLoadingType = boolean;
export type selectedStepType = number;
export type onChangeSelectedFormStepType = (direction: string) => void;
export type onChangeFormAnswerType = ({id, value}: {id: string, value: string}) => void;
export type onChangeUniteSwitchType = () => void;
export type onSelectFieldSelectType = (id:number) => void;
export type formType = {[id: string]: string}
export type fieldAnswerType = {unit: typeof constant.FIRSTSELECT |
   typeof constant.SECONDSELECT, id: number}

type useMultiStepFormType = ({
  personalFields,
  selectField
}: {
  personalFields: personalFieldsType,
  selectField: selectFieldType
}) => {
  isLoading: isLoadingType,
  selectedStep: selectedStepType,
  formAnswer: formType,
  formError: formType,
  fieldAnswer: fieldAnswerType,
  onChangeFormAnswer: onChangeFormAnswerType
  onChangeSelectedFormStep: onChangeSelectedFormStepType,
  onSelectFieldSelect: onSelectFieldSelectType,
  onChangeUniteSwitch: onChangeUniteSwitchType
}

type getDefaultFormType = (personalFields: personalFieldsType) => {[id: string]: string};

type validateFormType = ({
  personalFields,
  formAnswer
}: {
  personalFields: personalFieldsType,
  formAnswer: formType
}) => {
  isError: boolean,
  formError: {[id: string]: string}
};

export const getDefaultForm:getDefaultFormType = (personalFields) => {
  const form: formType = {};

  personalFields.forEach(({id}) => {
    form[id] = ""
  })

  return form
}; 

const validateForm:validateFormType = ({
  personalFields, 
  formAnswer
}) => {
  const formError:formType = {}
  let isError = false;

  personalFields.forEach(({
    id, fieldType, isRequired
  }) => {
    if (isRequired && !formAnswer[id]){
      isError = true;
      formError[id] = "This field is required"
    } 

    if (fieldType === 'email'){
      if (!constant.REGEX.test(formAnswer[id])){
        isError = true;
        formError[id] = "The Email Format is Invalid"
      }
    }
  });

  return {
    isError,
    formError
  }

};

const useMultiStepForm:useMultiStepFormType = ({
  personalFields,
  selectField
}) => {
  const defaultForm =  useMemo(() => getDefaultForm(personalFields), []);

  const [isLoading, setIsLoading] = useState<isLoadingType>(false)
  const [selectedStep, setSelectedStep] = useState<selectedStepType>(constant.FORMSTEP);
  const [formAnswer, setFormAnswer] = useState<formType>(defaultForm);
  const [fieldAnswer, setFieldAnswer] = useState<fieldAnswerType>({
    unit: constant.FIRSTSELECT, id: selectField.selections[0].id
  });
  const [formError, setFormError] = useState<formType>(defaultForm);

  const onChangeFormAnswer:onChangeFormAnswerType = ({id, value}) => {
    const newFormAnswer = {... formAnswer}

    newFormAnswer[id] = value
    setFormAnswer(newFormAnswer)
  };
  
  const onChangeSelectedFormStep: onChangeSelectedFormStepType = (direction) => {
    if (direction === constant.BACK && 
      selectedStep !== constant.FORMSTEP
      ){
      setSelectedStep((prevState) => prevState - 1)
    };

    if (direction === constant.NEXT){
      if (selectedStep === constant.FORMSTEP){
        const {isError, formError} = validateForm({
          personalFields, formAnswer
        });

        if (isError){
          setFormError(formError)
        } else {
          setSelectedStep((prevState) => prevState + 1)
          setFormError(defaultForm)
        }
      } else {
        setSelectedStep((prevState) => prevState + 1)
      }
    }
  }; 

  const onSelectFieldSelect:onSelectFieldSelectType = (id) => {
    const cloneFieldAnswer = {...fieldAnswer}
    cloneFieldAnswer.id = id
    setFieldAnswer(cloneFieldAnswer)
  };

  const onChangeUniteSwitch:onChangeUniteSwitchType = () => {
    const cloneFieldAnswer = {...fieldAnswer}
    

    if (fieldAnswer.unit === constant.FIRSTSELECT){
      cloneFieldAnswer.unit = constant.SECONDSELECT
    } else {
      cloneFieldAnswer.unit = constant.FIRSTSELECT
    }

    setFieldAnswer(cloneFieldAnswer)
  };


  return {
    isLoading, 
    selectedStep,
    formAnswer,
    formError,
    fieldAnswer,
    onChangeFormAnswer,
    onChangeSelectedFormStep,
    onSelectFieldSelect,
    onChangeUniteSwitch
  }
};

export default useMultiStepForm