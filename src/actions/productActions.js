import { POPULATE_PRODUCTS, GET_PRODUCTS_FAILURE } from "./productActionTypes";

const populateProducts = (productsData) => {
  return {
    type: POPULATE_PRODUCTS,
    payload: productsData,
  };
};

//removed fetching when fakestore API stopped working

// const getProductsFailure = (errorMessage) => {
//   return {
//     type: GET_PRODUCTS_FAILURE,
//     payload: errorMessage,
//   };
// };

// const getProducts = () => {
//   return function (dispatch) {
//     fetch("https://fakestoreapi.com/products/1")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         dispatch(populateProducts(data));
//       })
//       .catch((error) => {
//         dispatch(getProductsFailure(error.message));
//       });
//   };
// };

export { populateProducts };
