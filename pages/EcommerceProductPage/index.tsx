import { Navbar, ProductCarousel } from "@components/index";

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

  return (
    <div className="bg-white min-h-full h-screen font-kumbh-sans">
      <Navbar 
        {...navbarProps}
      />
      <div className="md:mt-[5rem] flex md:w-[70%] mx-auto mobile:justify-center">
        <div className="md:w-[40%]">
          <ProductCarousel {...productCarouelProps} />
        </div>
      </div>
    </div>
  );
};

export default EcommerceProductPage;
