import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/productAction";
import Card from "../components/Card";
import { getBasket } from "../redux/actions/basketAction";

//API'dan urun verilerini al
// ve yukleme durumunda hata durumunu
// ve gelen verileri store'da saklayacagiz
axios.defaults.baseURL = "http://localhost:3040";
const HomePage = () => {
  // store abone ol
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    // sadece bir aksiiyon calistiracagiz
    //bu aksiyon api isteginide arkaplanda yapacak
    dispatch(getData());

    // sepetteki verileri al
    dispatch(getBasket());
  }, []);

  return (
    <div className="container">
      {/* veriler yükleniyorsa */}
      {store.isLoading && <Loader />}

      {/* hata oluştuysa ekrana bas */}
      {store.isError && <h1 className="text-center my-5">{store.isError}</h1>}

      {/* veriler geldiyse ekrana bas */}
      <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
        {store?.products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
