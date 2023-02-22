# Front End Mentor Components

The purpose of this project is to document the intermediate-level challenges present on https://www.frontendmentor.io/challenges and to convert the UI and design into reusable React.js components, and no library needed. The project I have chosen focuses on component-based units and is above an intermediate level.


## Challenges

- [x] Multi-step form 
- [X] E-commerce product page

## Multi-step form 
Live:  https://frontendmentor-components.netlify.app/multistepform 

Example of usage can be found in [`/page/MultiStepForm/index.tsx`](https://github.com/Francoshum95/Frontend-Mentor/tree/main/pages/MultiStepForm)

Property  | Description  | Description 
------------- | ------------- | ------------- 
formStep  | The basic content of sidebar and the main conten. The `id`  is the step serial should start from 1| { id: number, sideBar: string, header: string, content: string }[]
personalFields | Custom input field , the `fieldType` can be `'email'`, `'text'` or `'phone'` |{ id: string, field: string, placeholder: string fieldType: 'email' or 'phone' or 'text', isRequired: boolean }[];
selectField  |  In the `switch` property, each with a `switch` and a corresponding unit component. In the `selections` property, the price should also have two items that match with the corresponding `switch` item, with the index of the array items matching the index of the `switch` items. |{ switch: { unit: string, name: string, title: string }[], selections: { id: number, title: string, content: string, price: number[] }[] }
pickField  | In the `price` property, the price should also have two items that match with the corresponding `switch` item, with the index of the array items matching the index of the `switch` items. |{ id: number, price: number[], title: string, content: string }[]
doneMessage | The message displayed after checkout. | string

## E-commerce product page
Live:  https://frontendmentor-components.netlify.app/EcommerceProductPage 

The E-commerce components have a Context `CartCtx` that changes/stores cart items. `CartContext` should be wrapped at the top level of the components. Example of usage can be found in [`/page/MultiStepForm/index.tsx`](https://github.com/Francoshum95/Frontend-Mentor/tree/main/pages/EcommerceProductPage)

###  CartContext

input: 

Property  | Description  | Description 
------------- | ------------- | ------------- 
maxQuantity  | maximum quantity add to the cart | number  


context:

`
productType = { productName: string, productQuantity: number originalPrice: number, markdownPrice: number, productImage: string
}
`

Property  | Description  | Description 
------------- | ------------- | ------------- 
checkoutItem  | cart items | {checkoutItem: productType[]
onAddCart | add new item to the cart | (newItem: productType) => void;
onRemoveProduct  | remove product from the cart | (item: productType) => void; 

###  Narbar

Property  | Description  | Description 
------------- | ------------- | ------------- 
checnavbarMenu  | menu items | string[]
navbarBrandIcon | brand icon image | string
userImage  | user profile image | string 

### ProductCarousel

Property  | Description  | Description 
------------- | ------------- | ------------- 
productImages  | product images | string[]
productThumbnail | product thumbnails  | string[]


### ProductInfo

Property  | Description  | Description 
------------- | ------------- | ------------- 
productImage  | The product thumbnails are shown on the cart page when the user adds an item to their cart using the 'onAddCart' function | string
productBrand | brand name | string
productName  | The product name are shown on the cart page when the user adds an item to their cart using the 'onAddCart' function, and shown on the product page | string  
productDes  | product description | string  
originalPrice  | The product original price  are shown on the cart page when the user adds an item to their cart using the 'onAddCart' function, and shown on the product page| number  
discointTag  | discount tag | string  
markdownPrice  | The product selling price are shown on the cart page when the user adds an item to their cart using the 'onAddCart' function, and shown on the product page | number  
maxQuantity  | maximum quantity add to the cart | number  

### Cart
The cart icon displays the items currently in the cart, and hovering over it reveals a dropdown with more details about the cart.











