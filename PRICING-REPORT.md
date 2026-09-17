# Başlangıç fiyatları — uygulama raporu

## Yerleşim

Mevcut tasarım üzerine iki sunum eklendi. Ana sayfada süreç ile sektörler arasında kompakt bir başlangıç bütçesi önizlemesi; Solutions sayfasında çözüm aileleri ve sürecin ardından tam katalog bulunuyor. Hero, proje kompozisyonları, renkler, tipografi, header ve footer düzeni korundu.

## Ana sayfa önizlemesi

Web & dijital deneyimler: 5.000 TL; özel yazılım: 20.000 TL; işletme sistemleri: 25.000 TL. Üç kısa satır/kolon, okunabilir başlangıç açıklaması ve `/solutions#pricing` bağlantısı. Mobilde fiyat ile açıklaması ayrı satırlarda; sekiz seviyenin tamamı ana sayfaya taşınmadı.

## Solutions kataloğu

Sekiz seviye: landing page 5.000; kurumsal web 7.500; premium web 12.500; rezervasyon/talep 15.000; yönetim paneli 15.000; özel yazılım 20.000; operasyon yönetim sistemi 25.000; çok kullanıcılı/SaaS 35.000 TL. Her tutar başlangıç fiyatı olarak sunuluyor. Kısa ihtiyaç odaklı açıklama, hizmete özel WhatsApp bağlantısı, kapsam uyarısı ve arama/WhatsApp/e-posta kapanışı bulunuyor. Masaüstünde iki sütun × dört sıra; mobilde tek sütun editoryal liste. Sabit paket, indirim veya satın alma yaklaşımı yok.

## Merkezi veri

`content/pricing.ts`: hizmet kimlikleri, kategoriler, başlangıç tutarları, TRY fiyat kitabı, locale sayı biçimlendirmesi. Bağımsız EU/US fiyat kitapları gelecekte eklenebilir; bugün yalnızca TR pazarı tanımlı ve dört dilde aynı TL tutarları kullanılıyor. Döviz dönüşümü veya kur API'si eklenmedi. Bir fiyat değişikliği her iki sunuma yansır.

## Yerelleştirme

`content/pricing-copy.ts`: TR/EN/DE/FR başlık, açıklama, sekiz hizmet, başlangıç ifadeleri, fiyat uyarısı, önizleme, CTA ve WhatsApp mesaj taslakları. Mevcut `getContent(locale)` üzerinden kullanılıyor. Sayı biçimleri dilin yerel gösterimine uyuyor, para birimi değişmiyor. Bileşen içinde çeviri bulunmuyor.

## CTA değişiklikleri

Header, hero, mobil menü ve footer ana CTA'sı artık doğrudan WhatsApp'a gidiyor. İletişim formu ve diğer gezinme bağlantıları korunuyor. Fiyat kataloğundaki bağlantı seçilen hizmeti yerelleştirilmiş mesaj taslağına ekliyor. `lib/contact-config.ts` mevcut e-posta ve WhatsApp değerlerini kullanıyor; arama numarası isteğe bağlı `NEXT_PUBLIC_PHONE_NUMBER` ile ayrı tanımlanabiliyor, yoksa mevcut WhatsApp numarası kullanılıyor. İletişim sayfasına arama bağlantısı eklendi. Hiçbir mesaj veya arama gönderilmedi.

## Responsive ve erişilebilirlik

360/375/390/430/768/1024/1440 px, dört dil. Kompakt tek sütun mobil liste, görünür güçlü fiyatlar, en az 44 px bağlantılar, semantik section/article/h2/h3, mevcut klavye ve reduced-motion davranışı. Önizleme metinlerinin kendi alanlarından taşmaması ayrıca denetlendi. Mobil menü erişilebilirlik testi, giriş animasyonu tamamlandıktan sonra çalışarak geçici animasyon opaklığını ölçmüyor.

## SEO etkisi

Katalog sunucu tarafında gerçek HTML metni olarak üretiliyor. Ana başlık h1; katalog h2; hizmetler h3. Solutions metadata'sı mevcut çözüm odaklı açıklamayı koruyor; canonical/hreflang/sitemap/OG ve gerçek Service verileri değişmedi. Başlangıç bütçeleri bağlayıcı satış teklifleri olmadığı için Product/Offer veya uydurma fiyat şeması eklenmedi.

## Değişen dosyalar

Yeni: `content/pricing.ts`, `content/pricing-copy.ts`, `lib/contact-config.ts`, `components/brand/Pricing.tsx`, `tests/pricing.spec.ts`, bu rapor.

Güncellenen: `content/site.ts`; dört locale dosyasında ana CTA metinleri; ana sayfa/Solutions/Contact; `components/brand/Hero.tsx`, Navigation ve SiteFooter; `app/globals.css`; `.env.example`; README; mevcut menü erişilebilirlik testinin animasyon beklemesi.

## Doğrulama

`npm run build`, lint ve TypeScript kontrolleri başarılı. Fiyat tutarları, merkezi veri, dört dil, gerçek HTML çıktısı, hizmete özel WhatsApp mesajı, arama/e-posta URL'leri, mobil fiyat metni taşması ve dokunma alanları için testler eklendi. Görsel kontrol çıktıları `artifacts/qa/pricing-{1440,390}.png` ve `pricing-preview-{1440,390}.png` altında. Genel site regresyonu da yeniden çalıştırıldı.

Önizleme: http://localhost:3015/tr/solutions#pricing. Harici yayın yapılmadı.

Son regresyon sonucu: **20/20 Playwright testi geçti**. Dört dilde fiyatlandırma erişilebilirliği, fiyat metni taşması, mevcut sayfalar ve mobil menü dahil tüm kontroller başarılı. `npm run build`, lint ve typecheck başarılı; `git diff --check` temiz.
