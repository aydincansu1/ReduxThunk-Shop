# ReduxThunk Store
Bu proje, Redux ve Redux Thunk kütüphanelerini kullanarak yönetilen bir React online mağaza uygulamasıdır. Redux, uygulama genelindeki durumu yönetmek için kullanılan bir durum yönetim kütüphanesi iken Redux Thunk ise Redux eylemlerini yürütmek için kullanılan bir orta katman (middleware) kütüphanesidir.

Redux Thunk, asenkron eylemleri (örneğin, bir API isteğini işlemek) Redux eylemlerinin içinde kullanmamızı sağlar. Proje, Redux Thunk'ı kullanarak asenkron veri alışverişini anlama ve yönetme amacıyla oluşturulmuştur.

# Kullanılan Teknolojiler
- React
- Redux
- Redux Thunk
- React Router DOM
- Axios
- JSON-SERVER
- Bootstrap

# Ekran Görüntüsü

![Redux Thunk](https://github.com/aydincansu1/ReduxThunk-Shop/assets/134061696/e29c5f5d-a870-45d9-95ad-8636610a08b8)


# React Thunk

React Thunk redux kullanılan projlerde asenkron ıslemlerı
kolaylastırmakk bılesenn icerisindeki kompleks yapiyi ayri bir noktada tanimlamamizi saglar

Redux temel yapisi eylemlerin senkron olmasi uzerine kurulur. Yani bir eylem tetiklendiginde bu eylem bekleme suresi olmadan hemen islenir state'i guncellenir

Asenkron islemlerle ugrasmak istendiginde, Redux thunk devreye girer. Redux thunk action olusturan fonksiyonlarin basit bir nesne dondurmesi yerine bir fonksiyon dondurmesine izin veriri Bu sayede asenkron islemler gerceklestirebilir.
