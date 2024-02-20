import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../redux/actions/basketAction";
import Loader from "../components/Loader";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const store = useSelector((store) => store.basket);

  const dispatch = useDispatch();

  // api'den sepete eklenen urunu al ve stor'a ekle
  useEffect(() => {
    dispatch(getBasket());
  }, []);

  const total = store.basket.reduce(
    (total, item) => total + item.amount * item.price,
    0
  );
  return (
    <div className="container p-5">
      <div className="row gap-4 ">
        <div className="col-md-8">
          {store.isLoading && <Loader />}
          {store.isError && <h3> {store.isError}</h3>}
          {store.basket.map((product) => (
            <BasketItem key={product.id} product={product} />
          ))}
        </div>
        <div className="col-md-4">
          <div className="bg-white p-5 rounded w-100 text-black">
            <h5 className="text-center">Toplam Tutari: {total}₺</h5>
            <button className="w-100 my-2">Alisverisi Tamamla</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;