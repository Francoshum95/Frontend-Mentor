import { formType, onChangeFormAnswerType, } from "../useMultiStepForm";
import type { personalFieldsType } from "../type";

type props = {
  formAnswer: formType,
  formError: formType,
  personalFields: personalFieldsType,
  onChangeFormAnswer: onChangeFormAnswerType
}

type inputFieldType = {
  id: string,
  field: string,
  fieldType: string,
  placeholder: string,
  value: string,
  error: string | null,
  onChange: onChangeFormAnswerType
}

const InputField = ({
  id,
  fieldType,
  field,
  placeholder,
  value,
  error,
  onChange
}: inputFieldType) => (
  <div className="mt-4 text-marine-blue">
    <div className="flex justify-between">
      <label className="block mobile:text-xs">{field}</label>
      <label 
        className="block text-strawberry-red mobile:text-sx">{error}
      </label>
    </div>
    <input
      className={` ${error ? 'border-strawberry-red' : 'border-magnolia'} border-2 rounded-md px-4 py-2 max-w-[450px] w-full
        focus:outline-none focus:bg-white focus:border-purplish-blue 
        cursor-pointer mt-2 mobile:text-sm`}
      required={true}
      type={fieldType === 'email' ? 'email' : 'text'}
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
          personalFields.map(({id, field, placeholder, fieldType}) => (
            <div key={id}>
              <InputField
                id={id}
                field={field}
                fieldType={fieldType}
                placeholder={placeholder}
                value={formAnswer[id]}
                error={formError[id]}
                onChange={onChangeFormAnswer}
              />

            </div>
          ))

        }
    </form>
  )
};


export default PersonalInfo;