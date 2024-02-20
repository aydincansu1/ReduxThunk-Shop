import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setProducts,
} from "../redux/actions/productAction";
import Loader from "../components/Loader";

//API'dan urun verilerini al
// ve yukleme durumunda hata durumunu
// ve gelen verileri store'da saklayacagiz
axios.defaults.baseURL = "http://localhost:3040";
const MainPage = () => {
  // store abone ol
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();
  console.log(store);
  useEffect(() => {
    dispatch(setLoading());
    //1) nistegin basladigini stor'a bildir
    axios
      .get("/products")
      //2)istegin basarili oldugunu stor'a bildir
      .then((res) => dispatch(setProducts(res.data)))
      // 3) istegin basrisiz oldugunu stor'a bildir
      .catch((err) => dispatch(setError(err.message)));
  }, []);

  return (
    <div className="container p-5">
      {/* veriler yükleniyorsa */}
      {store.isLoading && <Loader />}

      {/* hata oluştuysa ekrana bas */}
      {store.isError && <h1 className="text-center my-5">{store.isError}</h1>}

      {/* veriler geldiyse ekrana bas */}
      {store?.products.map((item) => (
        <h3>{item.title}</h3>
      ))}
    </div>
  );
};

export default MainPage;
