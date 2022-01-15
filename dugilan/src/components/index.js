export { default as Navbar } from "./navbar/Navbar";
export { default as Brand } from "./brand/Brand";
export { default as Cards } from "./cards/Cards";
export { default as Categories } from "./categories/Categories";
export { default as Header } from "./header/Header";
export { default as Footer } from "./footer/Footer";
export { default as Contact } from "./contact/Contact";
export { default as Service } from "./service/Service";
export { default as Products } from "./products/Products";
export { default as Modal } from "./signIn/SignInModal";
export { default as SignupModal } from "./signup/Signup";
const API_ARRAY_SIZE = 12;
const token = process.env.REACT_APP_ENVATO_TOKEN;
const apiRequestHeader = {
  auth: `Bearer ${token}`,
};
const envatoUrl = `https://api.envato.com/v1/discovery/search/search/item?site=themeforest.net&term=`;
const cartURL = process.env.REACT_APP_LOCAL_SERVER_CART_URL;
const discountURL = process.env.REACT_APP_LOCAL_SERVER_DISCOUNT_URL;
export {
  token,
  envatoUrl,
  API_ARRAY_SIZE,
  cartURL,
  discountURL,
  apiRequestHeader,
};
