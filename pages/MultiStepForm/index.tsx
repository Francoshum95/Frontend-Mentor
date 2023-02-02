import { MultiStepForm } from "@components/index";

export const formStep = [{
  id: 1,
  sideBar: "YOUR INFO",
  header: "Personal info",
  content: "Please provide your name, email address, and phone number."
}, {
  id: 2,
  sideBar: "SELECT PLAN",
  header: "Select your plan",
  content: "You have the option of monthly or yearly billing."
}, {
  id: 3,
  sideBar: "ADD-ONS",
  header: "Pick add-ons",
  content: "Add-ons help enhance your gaming experience."
}, {
  id: 4,
  sideBar: "SUMMARY",
  header: "Finishing up",
  content: "Double-check everything looks OK before confirming."
}];

export const personalFields = [{
  id: "1",
  field: "Name",
  placeholder: "e.g. Vanese Mint",
  fieldType: "text",
  isRequired: true
}, {
  id: "2",
  field: "Email Address",
  placeholder: "e.g. Vanesemint@gmail.com",
  fieldType: "email",
  isRequired: true
}, {
  id: "3",
  field: "Phone Number",
  placeholder: "e.g. +1 234 567 890",
  fieldType: "phone",
  isRequired: true
}]

export const selectField = {
  switch: [{
    unit: "mo",
    name: "Monthly"
  },{
    unit: "yr",
    name: "Yearly"
  }],
  selections: [{
    id: 1,
    title: "Arcade",
    content: "2 months free",
    price: [9, 90],
  }, {
    id: 2,
    title: "Advanced",
    content: "2 months free",
    price: [12, 120],
  }, {
    id: 3,
    title: "Pro",
    content: "2 months free",
    price: [15, 150],
  }]
}

export const pickField = [
  {
    id: 1,
    title: "Online service",
    content: "Access to multiplayer games",
    price: [1, 10],
  }, {
    id: 2,
    title: "Larger storage",
    content: "Extra 1TB of cloud save",
    price: [2, 20],
  }, {
    id: 3,
    title: "Customizable profile",
    content: "Custom theme on your profile",
    price: [2, 20]
  }
]

const MultiStepFormPage = () =>  (
  <div className='bg-magnolia min-h-full flex mobile:flex-col
    md:items-center md:justify-center h-screen'>
    <div className="rounded-md md:bg-white md:m-6 
      md:flex md:h-[600px] md:p-4md:max-w-[1440px]">
        <MultiStepForm
          formStep={formStep}
          personalFields={personalFields}
          selectField={selectField}
          pickField={pickField}
        />
    </div>
  </div>
)

export default MultiStepFormPage
