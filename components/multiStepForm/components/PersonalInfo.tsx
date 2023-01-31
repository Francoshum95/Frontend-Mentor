import { formType, onChangeFormAnswerType, } from "../useMultiStepForm";
import type { personalFieldsType } from "../type";

type props = {
  formAnswer: formType,
  formError: formType,
  personalFields: personalFieldsType,
  onChangeFormAnswer: onChangeFormAnswerType
}

type inputFieldType = {
  id: number,
  lable: string,
  field: string,
  placeholder: string,
  value: string,
  error: string | null,
  onChange: onChangeFormAnswerType
}

const InputField = ({
  id,
  lable,
  field,
  placeholder,
  value,
  error,
  onChange
}: inputFieldType) => (
  <div className="mt-4 text-marine-blue" key={id}>
    <div className="flex justify-between">
      <label className="block mobile:text-xs">{lable}</label>
      <label 
        className="block text-strawberry-red mobile:text-sx">{error}
      </label>
    </div>
    <input
      className={` ${error ? 'border-strawberry-red' : 'border-magnolia'} border-2 rounded-md px-4 py-2 max-w-[450px] w-full
        focus:outline-none focus:bg-white focus:border-purplish-blue
        cursor-pointer mt-2 mobile:text-sm`}
      required={true}
      type={field === 'email' ? 'email' : 'text'}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange({id, value: e.target.value})}
    />
  </div>
)

const PersonalInfo = ({
  formAnswer,
  formError,
  personalFields,
  onChangeFormAnswer
}:props) => {
  return (
    <form 
      className="md:mt-5"
      data-testid="step-1"
      >
        {
          personalFields.map(({id, field, placeholder}) => (
            <InputField
              id={id}
              lable="Name"
              field={field}
              placeholder={placeholder}
              value={formAnswer[id]}
              error={formError[id]}
              onChange={onChangeFormAnswer}
            />
          ))

        }
    </form>
  )
};


export default PersonalInfo;