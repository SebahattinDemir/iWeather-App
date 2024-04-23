# iWeather-App

## Proje Tanımı

iWeather, kullanıcıların seçtikleri şehirlerin güncel hava durumu bilgilerini görüntüleyebilecekleri bir web uygulamasıdır. Uygulama, api.weatherapi.com API'sini kullanarak güncel hava durumu verilerini çeker.

## Özellikler

- Kullanıcıların şehir adı girerek hava durumu bilgilerini sorgulama
- Seçilen şehrin sıcaklık, nem, rüzgar hızı, hava durumu açıklaması gibi temel bilgileri gösterme
- Birden fazla şehrin hava durumu bilgisini sırayla görüntüleme
- Responsive tasarım, farklı cihaz ve ekran boyutlarında düzgün görüntüleme
- Hava durumu ikonları, mevcut hava durumunu yansıtan dinamik görseller kullanma
- Axios kütüphanesi kullanarak veri çekme işlemleri

## Nasıl Kullanılır

1. Projeyi bilgisayarınıza klonlayın:

    ```bash
    git clone https://github.com/SebahattinDemir/iWeather-app.git
    ```

2. Proje klasörüne gidin:

    ```bash
    cd weather-app
    ```

3. Gerekli bağımlılıkları yükleyin:

    ```bash
    npm install
    ```

4. Api Key alın: [api.weatherapi.com](https://www.weatherapi.com/)
5. `.env` dosyasını oluşturun ve API anahtarınızı içine ekleyin:

    ```
    VITE_API_KEY=your_api_key_here
    ```

6. Uygulamayı başlatın:

    ```bash
    npm run dev
    ```

7. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görüntüleyin.

## Kullanılan Teknolojiler

- React
- Vite
- Axios
- SCSS

## Katkıda Bulunma

Eğer projeye katkıda bulunmak istiyorsanız:

1. Bir fork oluşturun.
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`).
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik: XYZ'`).
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`).

## İletişim

Ayrıca GitHub profilimde bulanan [LinkedIn](https://www.linkedin.com/in/sebahattindemir) hesabım üzerinden benimle iletişime geçebilir ve projeyi geliştirmeme yardımcı olabilirsiniz.

