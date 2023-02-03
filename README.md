# Front End Mentor Components

The purpose of this project is to document the intermediate-level challenges present on https://www.frontendmentor.io/challenges and to convert the UI and design into reusable React.js components. The project I have chosen focuses on component-based units and is above an intermediate level.


## Challenges

- [x] Multi-step form 
- [ ] Interactive comments section
- [ ] E-commerce product page


## Multi-step form 

Example of usage can be found in `/page/MultiStepForm/index.tsx` 
Property  | Description  | Description 
------------- | ------------- | ------------- 
formStep  | The basic content of sidebar and the main content. The `id`  is the step serial should start from 1| { id: number, sideBar: string, header: string, content: string }[]
personalFieldsType  | Custom input field , the `fieldType` can be `'email'`, `'text'` or `'phone'` |{ id: string, field: string, placeholder: string fieldType: 'email' or 'phone' or 'text', isRequired: boolean }[];
selectFieldType  |  In the `switch` property, each with a `switch` and a corresponding unit component. In the `selections` property, the price should also have two items that match with the corresponding `switch` item, with the index of the array items matching the index of the `switch` items. |{ id: string, field: string, placeholder: string fieldType: string, isRequired: boolean }[];
pickFieldType  | In the `price` property, the price should also have two items that match with the corresponding `switch` item, with the index of the array items matching the index of the `switch` items. |{ id: string, field: string, placeholder: string fieldType: string, isRequired: boolean }[];
doneMessageType | The message displayed after checkout. | string










