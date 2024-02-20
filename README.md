# React Thunk

React Thunkö redux kullanılan projlerde asenkron ıslemlerı
kolaylastırmakk bılesenn icerisindeki kompleks yapiyi ayri bir noktada tanimlamamizi saglar

Redux temel yapisi eylemlerin senkron olmasi uzerine kurulur. Yani bir eylem tetiklendiginde bu eylem bekleme suresi olmadan hemen islenir state'i guncellenir

Asenkron islemlerle ugrasmak istendiginde, Redux thunk devreye girer. Redux thunk action olusturan fonksiyonlarin basit bir nesne dondurmesi yerine bir fonksiyon dondurmesine izin veriri Bu sayede asenkron islemler gerceklestirebilir.
