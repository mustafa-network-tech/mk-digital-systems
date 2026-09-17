# Production cleanup — teknik rapor

## CTA değişiklikleri

TR/EN/DE/FR proje CTA'larındaki görüşme ifadeleri bilgi alma aksiyonlarına çevrildi. Bağlantısı olmayan mevcut projeler için yerelleştirilmiş, proje adını içeren WhatsApp mesaj taslağı kullanılıyor. Aktif ve bağlantısı bulunan projelerde canlı sistem; demo projelerinde çalışmayı inceleme etiketi kullanılıyor. Mevcut altı canlı bağlantı salt okunur isteklerle kontrol edildi: tamamı HTTP 200, resepsiyon giriş sayfasına yönleniyor. Proje durumları, hikâyeler ve sayısı korundu.

## Merkezi contact config

`lib/contact-config.ts` tek iletişim kaynağı: email, phone, phoneDisplay, whatsapp ve bunlardan türetilen mailto/tel/wa.me URL'leri. E-posta `mkdigitalsystems@gmail.com`; telefon görünümü `0545 659 75 51`; arama `tel:+905456597551`; WhatsApp `https://wa.me/905456597551`. Yerel 0545, ülke kodlu +90 ve 0090 girişleri normalize ediliyor. Eski constants ve WhatsApp yardımcıları merkezi değerleri kullanıyor. Eski ayrı demo numarası kaldırıldı.

Footer, Contact, dört dilde privacy/terms ve Organization JSON-LD aynı kaynağa bağlandı. SMTP alıcısı MAIL_TO ile ayarlanabiliyor, varsayılanı merkezi Gmail adresi. `.env.example` ve yerel ortamda mevcut ilgili iletişim değerleri güncellendi. Ortam sırları rapora veya test çıktısına yazılmadı.

## Final CTA ve Contact

Güçlü footer marka mesajı ve büyük marka kompozisyonu korundu. Ara / WhatsApp'tan yaz / E-posta gönder aksiyonları eklendi. Mobilde WhatsApp geniş buton, arama ve e-posta ayrı rahat dokunma alanları. Contact üzerinde doğrudan kanallar mobilde formdan önce görünüyor. Kısa form ve isteğe bağlı ayrıntılar korundu.

## Pricing doğrulaması

Merkezi fiyat kitabı değişmedi: 5.000 / 7.500 / 12.500 / 15.000 / 15.000 / 20.000 / 25.000 / 35.000 TL. Ana sayfa üç kısa önizleme, Solutions sekiz hizmet. Başlangıç fiyatı açıklaması ve nihai bedelin kapsam/özellik/ihtiyaçlara göre değişmesi uyarısı dört dilde doğrulandı. Döviz dönüşümü eklenmedi.

## Localization

Dört locale sözlüğünde doğal bilgi alma, arama, yazma ve e-posta CTA'ları. İletişim sayfası metadata başlıkları Contact / Kontakt / İletişim olarak temizlendi; ana sayfanın eski görüşme yönlendirmesi kaldırıldı. Yeni sayfa veya ayrı dil bileşeni eklenmedi. Gerçek arayüz ekranlarındaki özgün dil ve marka adları korunuyor.

## SEO, hreflang ve canonical

Dört dilde ana sayfa/Solutions/Work/Contact/privacy/terms, toplam 24 public sayfada sayfa başlığı ve açıklamalarının dil içindeki benzersizliği, Twitter kartı, OG URL, canonical ve beş alternate denetlendi. Her canonical kendi dil sayfasına; x-default İngilizce karşılığına gidiyor. Domain bilgisi `SITE_URL` üzerinden geliyor, Vercel adresi kaynak koda eklenmedi. Organization e-posta ve telefon bilgileri güncellendi. Gerçek Organization/WebSite/WebPage/Service/Breadcrumb dışında sahte değerlendirme, ürün veya fiyat teklifi verisi eklenmedi.

## Sitemap ve robots

HTTPS üretim origin'i ile 24 public ana/hukuk kaydı ve dil alternatifleri; önizlemede noindex, robots disallow ve boş sitemap davranışı korundu. Üretim/preview koşulları yapılandırma testinde doğrulandı. Canlı final alan adı henüz bu yerel çalışmada bağlanmadı.

## Responsive ve accessibility

360, 375, 390, 430, 768, 1024 ve 1440 px; dört dil ve hukuk sayfaları dahil taşma ve final CTA sınırları kontrol edildi. Alman ve Fransız uzun metinler geçti. Final CTA bağlantıları en az 44 px, mobilde yeterli aralıklarla sunuluyor. Mevcut klavye/focus, mobile dialog, inert arka plan, dil seçimi, form doğrulaması, hata/başarı odağı ve reduced-motion kontrolleri geçti. Ana sayfalar/menü ve dört dilde mobil Contact için Axe WCAG A/AA taramasında ihlal yok. Otomatik kontrol ekran okuyucu sertifikası yerine geçmez.

## Performance

Hero, gerçek proje görselleri, font sistemi, layout ve motion değiştirilmedi. Mevcut Next/Image, responsive sizes, öncelikli hero görseli, lazy-loading ve yerel fontlar denetlendi. Yeni client component, animasyon kütüphanesi veya ağır bağımlılık eklenmedi; final CTA sunucu tarafında normal HTML linkleri. Mevcut dört küçük etkileşim bileşeni korunuyor. Production LCP/CLS alan ölçümü yapılmadığından skor iddiası yok; alan adı bağlandıktan sonra gerçek cihaz/ağ koşullarıyla ölçülmeli.

## Değiştirilen dosyalar

`lib/contact-config.ts`, `lib/constants.ts`, `lib/whatsapp.ts`, `lib/seo.ts`; `app/api/contact/route.ts`, `app/[locale]/contact/page.tsx`, `app/globals.css`; `components/brand/SiteFooter.tsx`, ProjectStory ve LegalPage; `content/site.ts`, dört `content/locales` sözlüğü; `.env.example` ve mevcut yerel iletişim ortam ayarları; `tests/production-cleanup.spec.ts`; README ve bu rapor. TypeScript build cache otomatik güncellendi. Çalışma öncesindeki next-env değişikliği denetlendi; kullanıcıya ait ilgisiz kaynak değişikliği üzerine yazılmadı.

## Build ve QA sonucu

`npm run build`: başarılı, Next 16.3.5. `npm run lint` ve `npm run typecheck`: başarılı. Genel Playwright regresyonu 25/25 geçti. Son eklenen hukuk sayfaları canonical/hreflang kontrolleri production-cleanup test dosyasında ayrıca yeniden çalıştırıldı. Görsel inceleme: masaüstü footer ve Alman mobil iletişim kanalları; diğer sayfalar için regresyon ekran görüntüleri. Çıktılar `artifacts/qa` altında.

## Final domain ve deploy öncesi

- Vercel Production ortamında `SITE_URL` nihai HTTPS origin'i olmalı; alan adı değişiminden sonra yeniden deploy/build gerekli.
- Eski değerlerin yeni merkezi varsayılanı ezmemesi için `NEXT_PUBLIC_CONTACT_EMAIL=mkdigitalsystems@gmail.com` ve `MAIL_TO=mkdigitalsystems@gmail.com` ayarlayın. Telefon/WhatsApp override kullanılıyorsa ikisini de `905456597551` yapın.
- Formspree kullanılıyorsa alıcı adresini sağlayıcı hesabında Gmail olarak doğrulayın. Kaynak koddaki mailto/SMTP güncellemesi Formspree hesabındaki alıcıyı değiştirmez. SMTP seçiliyorsa kendi gerçek hesabı/uygulama şifresi ayarını doğrulayın. Testler gerçek e-posta göndermedi.
- Canlı domain üzerinde self-canonical, beş hreflang, sitemap/robots/OG/JSON-LD ve yönlendirmeleri kontrol edin; Search Console ve gerçek performans ölçümü sonraki yayın adımlarıdır.

Harici deploy, alan adı değişimi, mesaj gönderimi veya ödeme işlemi yapılmadı.
