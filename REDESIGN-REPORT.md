# MK Digital Systems — yeniden tasarım raporu

## 1. Mevcut site denetimi

Eski site TR/EN dillerinde teknoloji ağırlıklı metinler, koyu cam yüzeyler, slayt görseller ve WebGL küresi kullanıyordu. Ana sayfa, services, projects, about, contact ve hukuk sayfaları incelendi. Ortak metadata, eksik canonical/hreflang/sitemap/robots/paylaşım görselleri ve sabit İngilizce HTML dili düzeltildi. Önceden yapılmış iletişim adresi değişiklikleri korundu.

## 2. Yeni görsel yön

Sıcak kâğıt zemini, koyu mürekkep ve mevcut MK kimliğinden gelen kobalt. Büyük editoryal tipografi, asimetrik gerçek ürün ekranları, farklılaşan proje kompozisyonları ve büyük markalı footer. Mustafa Öner'in kişisel portföyünden bağımsız, müşteri ihtiyacı ve görüşme talebi odaklı ajans deneyimi.

## 3. Sayfa mimarisi

TR/EN/DE/FR için dört ana sayfa: ana sayfa, solutions, work, contact. Ana sayfada ihtiyaç seçici, altı proje hikâyesi, dört çözüm ailesi, beş aşamalı süreç ve gerçek proje alanları bulunuyor. Work sekiz ayrıntılı hikâye içeriyor. Contact kısa proje formu, isteğe bağlı ayrıntılar ve doğrudan iletişim kanalları sunuyor. Yerelleştirilmiş privacy/terms sayfaları korundu; eski services/projects/about adresleri 308 ile yönlendiriliyor.

## 4. Oluşturulan bileşenler

`components/brand`: Brand, Arrow, Navigation, LocaleLinks, SiteFooter, Hero, NeedsExplorer, ProjectScene, ProjectStory, Process, PageIntro, ProjectBrief, LegalPage ve JsonLd. Etkileşimli ihtiyaç seçici ilgili çözüm ailesine; proje hikâyeleri örneğe veya bağlamı önceden seçilmiş forma ilerliyor.

## 5. Kullanılan projeler

Kaynak: [güncel yayınlanmış proje listesi](https://mustafaoner.net/projects). Verilen `/en/projects` adresi denetim sırasında 404 döndürdü.

| Proje | Yayınlanmış durum | Sunum |
|---|---|---|
| Şantiye Yönetim Sistemi | Aktif kullanımda | Gerçek kontrol paneli |
| MK Farm | Aktif kullanımda | Gerçek uygulama ekranı, yayınlanmış bağlantı |
| Mavi Resepsiyon | Demo | Etiketli iş akışı, demo bağlantısı |
| Mavi Adisyon | Demo | Etiketli iş akışı, demo bağlantısı |
| MK TraceOps | Geliştirme aşamasında | Gerçek uygulama ekranı |
| Mavi Kadraj Otel | Demo | Gerçek site ekranı, demo bağlantısı |
| Mavi Gayrimenkul | Demo | Etiketli iş akışı, demo bağlantısı |
| Mavi Kafe | Demo | Etiketli iş akışı, demo bağlantısı |

Yayınlanmış ekran görüntüleri optimize edildi. Ekranı bulunmayan projeler için uydurma arayüz yapılmadı. Satış/gelir artışı, müşteri sayısı veya ölçülmemiş performans iddiası eklenmedi.

## 6. Yerelleştirme

`content/locales/{tr,en,de,fr}.ts`, `content/site.ts` ve `content/project-stories.ts` merkezi, tipli içerik kaynağı. Kontroller, form geri bildirimleri, hukuk metinleri ve metadata dört dilde. Dil geçişi mevcut sayfayı koruyor; HTML `lang` geçişle güncelleniyor. Gerçek ürün ekranlarının özgün dili ve marka adları korunuyor.

## 7. SEO mimarisi

Her dil/sayfa için ayrı başlık ve açıklama, Open Graph, Twitter kartı ve merkezi URL üretimi. On altı yerel fontlu 1200×630 paylaşım kartı, gerçek MK ikonları, manifest ve apple-touch ikonu eklendi. `SITE_URL` tek üretim kaynağı. Yapılandırılmamış yerel ortam ile Vercel preview indekslenmiyor.

## 8. Yapılandırılmış veri

Organization, WebSite, WebPage; iç sayfalarda BreadcrumbList; solutions üzerinde dört Service. Kimlikler ve URL'ler merkezi kaynaktan geliyor. Değerlendirme puanı, ödül, doğrulanmamış adres veya müşteri referansı eklenmedi. JSON-LD ayrıştırma ve sayfa çıktıları test edildi; harici Rich Results denetimi canlı alan adı bağlandıktan sonra yapılmalı.

## 9. Sitemap, hreflang ve canonical

HTTPS üretim origin'i ile 24 ana/hukuk sayfası sitemap'e giriyor. Her kayıt TR/EN/DE/FR ve İngilizce `x-default` alternatiflerini içeriyor; canonical ilgili dilin kendi adresi. Önizlemede sitemap boş ve robots disallow. Üretim ve preview davranışları örnek origin ile ayrıca test edildi; örnek alan adı sitede kullanılmıyor.

## 10. Erişilebilirlik

Skip link, görünür odak, semantik başlıklar, alan etiketleri, gerekli onay, yerel doğrulama, başarısız gönderimde veri korunması, sonuç mesajına odak, klavyeyle ihtiyaç seçimi ve reduced-motion desteği. Mobil menü Tab odağını içeride tutuyor, Escape ile kapanıyor, kapandığında odak geri dönüyor ve açıkken arka içerik inert oluyor. Axe WCAG A/AA kontrolleri dört ana sayfa ve açık mobil menüde geçti. Bu otomatik kontrol tam erişilebilirlik sertifikası değildir.

## 11. Performans

Ana sayfa, solutions, work ve hukuk sayfaları statik üretiliyor. Yeni deneyim WebGL/Three/Framer yüklemiyor; küçük istemci bileşenleri yalnızca gerekli etkileşimlerde kullanılıyor. Yerel lisanslı WOFF2 fontlar, AVIF/WebP desteği, boyutu belirlenmiş responsive görseller, öncelikli hero görseli ve lazy-loading kullanılıyor. Gerçek proje WebP dosyaları yaklaşık 47–186 KB. Üretim Core Web Vitals ölçümü henüz yok; canlı trafik olmadan skor iddiası yapılmadı.

## 12. Değişen dosyalar

Ana gruplar: `app/[locale]` sayfaları/layout/hukuk/404; `app/globals.css`; `components/brand`; `content/locales`, `content/site.ts`, `content/projects.ts`, `content/project-stories.ts`; `lib/seo.ts`, `lib/site-config.ts`, `lib/contact-validation.ts`; `app/og`, sitemap/robots/manifest; contact API ve mevcut iletişim sabitleri; i18n/proxy/Next yapılandırması; ikonlar/fontlar/proje görselleri; Playwright ve ESLint yapılandırması; package/lock; README/I18N/audit/rapor. Kök layout ve eski middleware yerelleştirilmiş layout ile Next proxy'ye taşındı. Eski kullanılmayan bileşenler silinmedi; derleme uyumu için küçük düzeltmeler yapıldı.

## 13. Derleme ve doğrulama sonucu

- `npm run build`: başarılı, Next 16.3.5; 42 statik/önceden üretilmiş çıktı, iletişim/API/OG dinamik.
- `npm run lint`: hata ve uyarı yok.
- `npm run typecheck`: başarılı.
- Playwright: 15/15 geçti. Son font düzeltmesinden sonra 16 paylaşım kartı ve yönlendirme/indeksleme testi ayrıca yeniden geçti.
- Dört dil × dört ana sayfa × 360, 375, 390, 430, 768, 1024, 1440 px: yatay taşma yok; locale/başlık/metadata/alternatifler ve konsol hataları kontrol edildi.
- Form başarısızlık/başarı, gerçek şirket alanı, doğrulama, klavye, motion, mobil menü, API hatalı tip/onay/boyut kontrolü geçti. Gerçek e-posta gönderilmedi; sağlayıcı testte taklit edildi.
- Üretim bağımlılıkları güncellendi; `npm audit --omit=dev`: 0 açık.
- Masaüstü ve mobil dört sayfa görüntüsü `artifacts/qa` altında; görsel inceleme yapıldı. Türkçe paylaşım kartı karakterleri ayrıca görüntü üzerinden kontrol edildi.

## 14. İnsan değerlendirmesi gereken içerik ve varlıklar

Canlı form teslimatı ve sağlayıcı hesabı sahip tarafından kontrol edilmeli. E-posta ve WhatsApp mevcut değerlerden korundu. Yayınlanmış durumların güncelliği ile proje görsellerinin kamuya açık ajans kullanım izni son editoryal değerlendirmede teyit edilmeli. Ekranı bulunmayan projelere ileride gerçek görüntüler eklenebilir. Hukuk metinleri işletmenin gerçek veri işleme ve sözleşme koşullarıyla değerlendirilmelidir. Bu maddeler tasarımın tamamlanmasını durduran onay talepleri değildir; canlı yayın öncesi sahip kontrolüdür.

## 15. Nihai alan adı bağlanmadan önce

1. Seçilen HTTPS origin'i `SITE_URL` ortam değişkenine yazın ve yeniden build alın; www/apex tercihini tek yönlendirmeyle birleştirin.
2. Canonical/OG/JSON-LD URL'lerini nihai origin'de, 24 sitemap kaydını ve dil alternatiflerini kontrol edin. Preview noindex kalmalı.
3. Formspree hesabını veya SMTP teslimatını kontrollü gerçek gönderimle doğrulayın; SMTP seçimi için `NEXT_PUBLIC_FORMSPREE_FORM_ID=disabled` kullanın.
4. Alan adı ve mail DNS/HTTPS kayıtlarını doğrulayın; Search Console'da doğrulama ve sitemap gönderimi yapın.
5. Canlı mobil cihaz, ekran okuyucu ve gerçek performans ölçümünü tamamlayın. Dağıtık trafik bekleniyorsa API rate limiting'i paylaşılan depoya taşıyın.

Mevcut yerel önizleme: http://localhost:3015/tr. Harici yayın veya alan adı değişikliği yapılmadı.
