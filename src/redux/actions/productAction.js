// aksiyon olusturan fonksiyonlar tanimla

import axios from "axios";
import { ActionTypes } from "./actionTypes";

export const setLoading = () => {
  return {
    type: ActionTypes.SET_LOADING,
  };
};

export const setProducts = (payload) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: ActionTypes.SET_ERROR,
    payload,
  };
};
// !Redux thunk devreye girince
// Aksiyon olusturan fonksiyonlar
// redux thunk isin icerisine girince bu aksiyon olusturan fonksiyonlar
// yeni bir fonksiyon dondurme yetenegine sahip olur
// Bu sayede bu return edilen fonksiyonlarin icerisinde api istekleri
//yapabiliriz

export const getData = () => {
  return (dispatch) => {
    dispatch(setLoading);
    // artik aksiyon icerisinde  api istekleri atabilir
    //daha sonrasinda stor'a haber verebiliriz
    axios
      .get("http://localhost:3040/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
};
