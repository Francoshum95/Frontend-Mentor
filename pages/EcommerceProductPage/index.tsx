import { Navbar, ProductCarousel } from "@components/index";
import ProductInfo from "@components/productBox/components/ProductInfo";
import { CartContext } from "@components/productBox/CartContext";

const navbarMenuItems = ["Collections", "Men", "Women", "About", "Contact"];
const navbarBrandIcon = "/asset/logo.svg";
const userImage = "/asset/image-avatar.png"


const productImages = [
  "/asset/image-product-1.jpg",
  "/asset/image-product-2.jpg",
  "/asset/image-product-3.jpg",
  "/asset/image-product-4.jpg",
];

const productThumbnail = [
  "/asset/image-product-1-thumbnail.jpg",
  "/asset/image-product-2-thumbnail.jpg",
  "/asset/image-product-3-thumbnail.jpg",
  "/asset/image-product-4-thumbnail.jpg",
];

const productBrand = "SNEAKER COMPANY";
const productName = "Fall Limited Edition Sneakers"
const productDes = "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
const originalPrice = 250;
const discointTag = "50%";
const markdownPrice = 125;
const maxQuantity = 10;

const EcommerceProductPage = () => {
  const navbarProps = {
    navbarMenuItems,
    navbarBrandIcon,
    userImage
  }
  const productCarouelProps = {
    productImages,
    productThumbnail,
  };

  const productInfoProps = {
    productImage: productThumbnail[0],
    productBrand,
    productName,
    productDes, 
    originalPrice,
    discointTag,
    markdownPrice,
    maxQuantity
  }

  return (
    <CartContext>
      <div className="bg-white min-h-full h-screen font-kumbh-sans">
        <Navbar 
          {...navbarProps}
        />
        <div className="md:mt-[5rem] flex md:w-[70%] mx-auto 
          mobile:justify-center md:justify-between mobile:flex-col">
          <div className="md:w-[40%] mobile:flex mobile:justify-center">
            <ProductCarousel 
              {...productCarouelProps} 
            />
          </div>
          <div className="md:w-[50%]">
            <ProductInfo
              {...productInfoProps}
            />
          </div>
        </div>
      </div>
    </CartContext>
  );
};

export default EcommerceProductPage;
