# Cafe/Restoran sipariş yönetim sistemi.

dafeeApp Angular ve Express ile geliştirilmiş cafe ve restorantlarda kullanılabilecek, müşterilerin kendilerinin masalardaki QR code'u okutarak erişecekleri web sitesinden siparişlerini verebilmeleri üzerine kurulmuş bir sistemdir.

**Sistem Analizi ve Tasarım II Final Ödevim**
## Kullanılan Teknolojiler 
Front end için Angular frameworkü tasarım için Bootstrap kütüphanesini kullandım. Masalara QR kod oluşturmak için ngx-qrcode2(npm adı) kullandım.
Back end için ExpressJS framework'ü, JWT için jwt-simple(npm adı) ve Veritabanı iletişimi için Mongoose kullandım.</br>

Bunlar dışında bir çok küçük yardımcı kütüphaneler var package.json dan inceleyebilirsiniz.

## Görseller

### Yöneticilerin görüntülediği tüm masaların olduğu bölüm
![image](https://user-images.githubusercontent.com/47831143/166141699-a0f694d3-c14a-4dc2-866c-4f28689b3b15.png)

### Sipariş arayüzü
Yönetici gözünden
![image](https://user-images.githubusercontent.com/47831143/166141622-0f15bbde-5b74-4158-8fe6-7f1e99e908a7.png)
Müşteri gözünden(Sadece siparişi verebilir iptali gerçekleştiremez ki sipariş geldikten sonra iptal işlemleri yapamasın)
![image](https://user-images.githubusercontent.com/47831143/166141628-87918c33-06bf-4562-a6ca-8bfe29b0bc92.png)


## Kurulum

	`$git clone https://github.com/deniz7erdem/dafeeApp.git

  

## Lisans

**MIT**
