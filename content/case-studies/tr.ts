import type { ProjectId } from "@/content/projects";
import type { CaseStudyCopy } from ".";

const tr: Partial<Record<ProjectId, CaseStudyCopy>> = {
  "saha-santiye": {
    meta: {
      title: "MK OPS: telekom ve fiber saha operasyon yönetimi | MK Digital Systems",
      description:
        "Telekom ve fiber sahasında günlük işi, onayları, ekipleri, malzemeyi ve hakedişi her şirketin kendi alanında toplayan saha operasyon sistemi: MK OPS.",
    },
    title: "Saha operasyonlarını tek yerde toplamak",
    lead:
      "Sahadaki iş, ofiste aynı anda görünsün. MK OPS; telekom ve fiber altyapı işlerinde günlük iş girişinden onaya, ekipten malzemeye ve hakedişe kadar saha operasyonunu, her şirketin kendi alanında kullandığı tek bir sistemde toplar.",
    audience: {
      heading: "Kimin sorunu?",
      text:
        "Telekom ve fiber altyapı projelerinde aynı anda birçok ekibi, projeyi ve malzemeyi yöneten firmaların. Sahada çalışan ekip liderlerinden ofisteki operasyon ve muhasebe ekibine kadar, işin farklı parçalarını farklı kişiler görüyor.",
      points: [
        "Aynı gün farklı projelerde çalışan saha ekipleri ve ekip liderleri",
        "İşi planlayan, kontrol eden ve onaylayan proje ve şirket yöneticileri",
        "Malzeme, araç ve ekipmanı takip eden depo tarafı",
        "Hakedişi ve raporları hazırlayan ofis",
      ],
    },
    problem: {
      heading: "Sorun neydi?",
      text:
        "Sahada iş hızlı akar; bilgi ise mesajlara, fotoğraflara ve ayrı tablolara dağılır. Hangi ekibin nerede ne yaptığı, hangi işin onay beklediği ya da hangi malzemenin nereye çıktığı çoğu zaman ancak gün sonunda, elle birleştirilerek görülür.",
      points: [
        "Günlük yapılan işler mesajlarda ve kâğıt formlarda kalıyor",
        "Hangi işin onay beklediği gün sonuna kadar görünmüyor",
        "Malzeme çıkışları stokla eşleşmiyor",
        "Ekip kazancı ve hakediş dönem sonunda elle toplanıyor",
        "Birden fazla şirketin verisi aynı tablolarda karışıyor",
      ],
    },
    approach: {
      heading: "Nasıl yaklaştık?",
      text:
        "Ekranlardan değil, sahadaki günün akışından başladık: gün içinde iş girişi, akşam kontrol ve onay, dönem sonunda rapor. Hedefimiz, bilgiyi ilk gören kişinin onu doğrudan sisteme girebilmesi ve herkesin yalnızca kendi işine yarayanı görmesiydi.",
      points: [
        "Rol bazlı düşünmek: ekip lideri, proje yöneticisi ve şirket yöneticisi farklı şeyler görür",
        "Sahada telefondan hızlı giriş, ofiste masaüstünden toplu kontrol",
        "Açık bir onay akışı: taslak, gönderildi, onaylandı ya da reddedildi",
        "Kayıtları hakediş dönemi mantığıyla toplamak",
      ],
    },
    solution: {
      heading: "Her şirkete kendi alanı",
      text:
        "MK OPS'u, birden fazla şirketin aynı sistemi kendi izole alanında kullanabileceği çok kiracılı bir SaaS olarak kurduk. Her şirket ekiplerini, projelerini, saha işlerini ve onaylarını kendi alanında yönetir; rol bazlı yetkiler herkesin yalnızca kendi işini görmesini sağlar.",
      points: [
        "Şirket bazlı veri izolasyonu ve rol tabanlı yetkiler",
        "Günlük saha işi girişi ve onay akışı",
        "Malzeme teslim fişleri ve stok takibi",
        "Ekip kazancı, şirket payı ve hakediş dönemleri",
        "Denetim günlüğü, Excel ve PDF raporları",
        "Türkçe, İngilizce, Almanca, Fransızca ve İspanyolca arayüz",
      ],
    },
    screens: {
      "ops-approvals": {
        caption: "MK OPS · Onaylar: ekip liderlerinin gönderdiği günlük işler tek listede onaylanır ya da reddedilir.",
        alt: "MK OPS onaylar ekranı; örnek verilerle onay bekleyen günlük işler",
      },
      "ops-mobile": {
        caption: "MK OPS · Mobil: aynı onay listesi sahada telefondan.",
        alt: "MK OPS mobil onay ekranı; örnek verilerle",
      },
      "ops-management": {
        caption: "MK OPS · Yönetim paneli: ekipler, araçlar, malzeme stoğu, ekipman ve iş kalemleri.",
        alt: "MK OPS yönetim paneli; örnek verilerle takımlar listesi",
      },
    },
    ctaText: "Sahadaki işi ve ofisteki takibi bir araya getirmek istiyorsanız bugünkü akışınızı anlatın; size uygun yaklaşımı birlikte belirleyelim.",
    screensNote: "Ekranlardaki bütün kayıtlar örnek veridir; gerçek kişi, firma ya da proje bilgisi içermez.",
    modules: {
      heading: "Temel modüller",
      items: [
        { title: "Günlük iş girişi ve onay", text: "Sahada yapılan iş aynı gün kaydedilir, yönetici tek listeden onaylar ya da düzeltme ister." },
        { title: "Ekip ve proje yönetimi", text: "Ekipler, projeler ve iş kalemleri şirket bazında tanımlanır; günlük giriş bu tanımlar üzerinden yapılır." },
        { title: "Malzeme teslim fişi ve stok", text: "Malzeme çıkışları teslim fişiyle kaydedilir; stok aynı kayıtlardan güncellenir." },
        { title: "Araç ve ekipman", text: "Araçlar ve ekipmanlar ekiplerle birlikte tek yerde tutulur." },
        { title: "Hakediş dönemleri", text: "Ekip kazancı ve şirket payı, dönem bazında aynı kayıtlardan hesaplanır." },
        { title: "Şirket alanı ve roller", text: "Her şirket kendi izole alanında çalışır; şirket yöneticisi, proje yöneticisi ve ekip lideri farklı ekranlar görür." },
        { title: "Denetim günlüğü", text: "Kimin neyi ne zaman değiştirdiği kayıt altında tutulur." },
        { title: "Raporlar ve diller", text: "Raporlar Excel ve PDF olarak alınır; arayüz beş dilde kullanılabilir." },
      ],
    },
  },
  "mk-adisyon": {
    meta: {
      title: "Restoran sipariş ve adisyon yönetimi | MK Digital Systems",
      description:
        "MK Adisyon; çalışan web sistemi ile garson, mutfak, kasa ve yönetim akışlarını birleştirir. Mobil uygulaması kapalı test sürecindedir.",
    },
    title: "Siparişten ödemeye restoran operasyonunu tek akışta yönetmek",
    lead:
      "MK Adisyon, masadaki ilk siparişten mutfak hazırlığına ve hesabın kapanmasına kadar restoran ekibinin ortak bir kayıt üzerinden çalışmasını sağlayan iki yüzeyli bir üründür: çalışan web sistemi ve kapalı testteki mobil uygulama.",
    audience: {
      heading: "Kimin sorunu?",
      text:
        "Sipariş, hazırlık, servis ve ödeme akışını aynı anda yöneten restoran ve kafelerin. Garsonun girdiği bilginin mutfağa, kasaya ve yönetim ekranına yeniden yazılmadan ulaşması gerekir.",
      points: [
        "Salon ve masa düzenini takip eden servis ekibi",
        "Bekleyen, hazırlanan ve hazır siparişleri yöneten mutfak",
        "Bölünmüş veya kısmi ödemeleri alan kasa",
        "Ürünleri, masaları, vardiyayı ve operasyonu izleyen yönetim",
      ],
    },
    problem: {
      heading: "Sorun neydi?",
      text:
        "Restoran operasyonu farklı hızlarda çalışan ekipler arasında ilerler. Sipariş ayrıntıları, masa değişiklikleri ve ödeme durumu tek kayıtta tutulmadığında gecikme, tekrar giriş ve yanlış anlaşılma riski artar.",
      points: [
        "Masa ve sipariş durumunun ekipler arasında farklı görünmesi",
        "Ürün seçeneği, not ve servis turu bilgilerinin mutfağa eksik ulaşması",
        "Hazır siparişlerin servis ekibine zamanında bildirilmemesi",
        "Kişi veya ürün bazlı hesap bölme işlemlerinin kasada uzaması",
      ],
    },
    approach: {
      heading: "Nasıl yaklaştık?",
      text:
        "Akışı rol bazında kurduk; ancak her rolü aynı adisyon kaydına bağladık. Böylece garsonun açtığı masa, mutfağın hazırlık durumu ve kasanın ödeme adımları birbirinden kopmadan ilerliyor.",
      points: [
        "Garson, mutfak, kasa ve yönetim için görev odaklı ekranlar",
        "Masadan başlayan ve ödeme kapanışına kadar izlenen tek sipariş kaydı",
        "Hazırlanıyor, hazır ve servis edildi gibi açık durum geçişleri",
        "Telefon ve masaüstü ekranlarında işin bağlamına uygun yerleşim",
      ],
    },
    solution: {
      heading: "Gerçek web sistemi ve kapalı testte mobil uygulama",
      text:
        "MK Adisyon proje seviyesinde iki gerçek ürün yüzeyine sahiptir. Aşağıdaki operasyon özellikleri çalışan web sistemi üzerinden doğrulanmıştır. Ayrı mobil uygulama geliştirilmiştir ve kapalı testtedir; bu yüzeye yalnızca doğrulanabilen kapsam atfedilir.",
      parts: {
        web: {
          summary:
            "Çalışan web sistemi, restoranın masa, sipariş, mutfak, servis, kasa ve yönetim akışlarını rol bazlı ekranlarda bir araya getirir.",
          highlights: [
            "Alan ve masa görünümü, masa açma ve misafir sayısı",
            "Ürün, seçenek, not, servis turu ve mutfağa gönderim",
            "Bekleyen, hazırlanan, hazır ve servis edilen sipariş akışı",
            "Masa taşıma, birleştirme ve hesap ayırma",
            "Tutar, kişi veya ürün bazında ödeme bölme ve kısmi ödeme",
            "Vardiya, ürün, masa, gider, finans ve işlem kayıtları",
          ],
        },
        mobile: {
          summary:
            "MK Adisyon'un geliştirilmiş ikinci ürün yüzeyi mobil uygulamadır. Uygulama kapalı test sürecindedir; doğrulanmış karşılama ekranı dışında özellik kapsamı bu çalışmada genişletilmez.",
          highlights: [
            "Gerçek ve geliştirilmiş MK Adisyon ürün yüzeyi",
            "Kapalı test sürecinde",
            "Web sisteminden ayrı doğrulanmış uygulama adresi",
          ],
        },
      },
    },
    screens: {
      "adisyon-cashier": {
        caption: "Web sistemi · Kasa: açık adisyon, ödeme bölme ve tahsilat seçenekleri aynı ekranda.",
        alt: "MK Adisyon web sistemi kasa ekranı, örnek sipariş ve ödeme verileriyle",
      },
      "adisyon-waiter": {
        caption: "Web sistemi · Garson: çalışan responsive web arayüzünün telefon görünümü; mobil uygulama değildir.",
        alt: "MK Adisyon responsive web garson ekranı, örnek masa verileriyle",
      },
      "adisyon-mobile-app": {
        caption: "Mobil uygulama · Kapalı test yüzeyinin doğrulanmış MK Adisyon karşılama ekranı.",
        alt: "Kapalı testteki MK Adisyon mobil uygulamasının karşılama ekranı",
      },
    },
    screensNote:
      "Web ekranlarındaki kayıtlar örnek veridir. Telefon çerçevesindeki garson ekranı responsive web arayüzüdür; ayrı mobil uygulama ekranı açıkça etiketlenmiştir. Web arayüzünde görünen “Mavi Adisyon” adı mevcut rebrand teknik borcudur; public ürün adı MK Adisyon'dur.",
    ctaText:
      "Restoranınızdaki sipariş, mutfak ve ödeme akışını aynı kayıt üzerinde toplamak istiyorsanız mevcut çalışma düzeninizi birlikte inceleyelim.",
    modules: {
      heading: "Web sisteminde doğrulanan modüller",
      items: [
        { title: "Salon ve masalar", text: "Alanlar ve masalar durumlarıyla izlenir; masa açılışı misafir sayısıyla başlar." },
        { title: "Garson sipariş akışı", text: "Ürünler seçenek, not ve servis turuyla adisyona eklenir ve mutfağa gönderilir." },
        { title: "Mutfak ekranı", text: "Siparişler bekleyen, hazırlanıyor ve hazır adımlarında yönetilir; hazır bilgisi servise iletilir." },
        { title: "Masa işlemleri", text: "Açık masalar taşınabilir, birleştirilebilir veya ürünler yeni hesaba ayrılabilir." },
        { title: "Kasa ve ödeme", text: "Hesap tutar, kişi ya da ürün bazında bölünebilir; kısmi tahsilat ve farklı ödeme yöntemleri kaydedilir." },
        { title: "Vardiya ve kasa hareketleri", text: "Vardiya açılışı, kasa giriş-çıkışları ve sayım aynı operasyon kaydında tutulur." },
        { title: "Yönetim", text: "Ürün, masa, mutfak, garson, kasa, gider, finans ve işlem kayıtları yönetim ekranlarında izlenir." },
      ],
    },
  },
  "mk-farm": {
    meta: {
      title: "Çiftlik ve hayvan operasyon yönetimi | MK Digital Systems",
      description:
        "MK Farm; hayvan, kilo, süt, sağlık, tohumlama, QR, rapor ve saha kayıtlarını çok çiftlikli, çevrimdışı destekli bir sistemde toplar.",
    },
    title: "Çiftliğin günlük kayıtlarını sahadan rapora taşımak",
    lead:
      "MK Farm, hayvan bazlı operasyon kayıtlarını tek dijital defterde toplar. Çiftlik sahibi ve ekip, sahadaki hızlı girişlerden yönetim raporlarına kadar aynı güncel veriyle çalışır.",
    audience: {
      heading: "Kimin sorunu?",
      text:
        "Besi ve süt hayvanlarını, personeli ve günlük bakım kayıtlarını birlikte yöneten çiftliklerin. Hayvan geçmişine sahada hızla ulaşmak ve aynı kaydı ofiste raporlayabilmek gerekir.",
      points: [
        "Bir veya birden fazla çiftliği yöneten işletme sahipleri",
        "Kilo, süt, sağlık ve tohumlama kaydı giren saha personeli",
        "Hayvan geçmişini ve yaklaşan kontrolleri izleyen yöneticiler",
        "Dönemsel üretim ve operasyon raporu hazırlayan ekipler",
      ],
    },
    problem: {
      heading: "Sorun neydi?",
      text:
        "Hayvan bilgisi, tartım, süt, tedavi ve tohumlama kayıtları ayrı defterlerde kaldığında geçmişi izlemek ve yaklaşan işi görmek zorlaşır. Sahadaki bağlantı koşulları da kayıt anını erteleyebilir.",
      points: [
        "Bir hayvanın güncel durumu ile geçmiş kayıtlarının farklı yerlerde tutulması",
        "Küpe numarasıyla doğru hayvana hızlı ulaşamama",
        "Kontrol, ilaç bekleme ve tekrar eden işlem tarihlerinin gözden kaçması",
        "Bağlantı kesildiğinde saha kaydının ertelenmesi veya yeniden girilmesi",
      ],
    },
    approach: {
      heading: "Nasıl yaklaştık?",
      text:
        "Veri modelini hayvanın yaşam döngüsü etrafında kurduk; günlük işlemleri kısa formlara, yönetim ihtiyacını ise filtrelenebilir rapor ve uyarılara dönüştürdük. Çevrimdışı kuyruğu da saha kullanımının parçası olarak ele aldık.",
      points: [
        "Çiftlik üyeliği ve sahip-personel rolleriyle ayrılmış erişim",
        "Küpe ve QR üzerinden hayvan kartına hızlı geçiş",
        "Kilo, süt, sağlık ve tohumlama için ayrı ama ilişkili kayıt akışları",
        "Bağlantı geri geldiğinde kontrollü senkronizasyon ve çakışma yönetimi",
      ],
    },
    solution: {
      heading: "Saha kaydı, hayvan geçmişi ve rapor aynı sistemde",
      text:
        "MK Farm; çoklu çiftlik üyeliğini, rol bazlı erişimi ve hayvan yaşam döngüsü kayıtlarını gerçek API ve kalıcı veritabanıyla birleştirir. Responsive PWA yapısı, daha önce yüklenmiş verilerle çevrimdışı çalışmayı ve kayıtların sonradan senkronize edilmesini destekler.",
    },
    screens: {
      "farm-dashboard": {
        caption: "Genel bakış: hayvan sayısı, günlük süt, takip gerektiren işler, son tartımlar ve hatırlatmalar.",
        alt: "MK Farm genel bakış ekranı, yerel demo verileriyle çiftlik özeti",
      },
      "farm-animals-mobile": {
        caption: "Responsive saha görünümü: küpe numarası, ad, kategori ve ırka göre hayvan listesi.",
        alt: "MK Farm telefon görünümünde örnek hayvan listesi",
      },
      "farm-reports": {
        caption: "Raporlar: tarih ve hayvan filtreleriyle süt üretimi özeti ve dışa aktarma.",
        alt: "MK Farm süt üretimi rapor ekranı, yerel demo verileriyle",
      },
    },
    screensNote:
      "Bu ekranlar ürünün yerel demo yükleyicisiyle üretilmiş tamamen örnek verileri gösterir; görünen kişi, çiftlik, hayvan ve küpe bilgileri gerçek kayıtlara ait değildir.",
    ctaText:
      "Çiftliğinizdeki saha kayıtlarını hayvan geçmişi ve raporlarla aynı akışta toplamak istiyorsanız çalışma düzeninizi birlikte değerlendirelim.",
    modules: {
      heading: "Temel modüller",
      items: [
        { title: "Çiftlik ve ekip", text: "Çiftlik sahibi ve personel üyelikleri, onay durumları ve aktif çalışma alanı birlikte yönetilir." },
        { title: "Hayvan kartları", text: "Besi ve süt hayvanlarının kimliği, küpesi, durumu ve yaşam döngüsü bilgileri tek kartta tutulur." },
        { title: "QR künye", text: "QR görüntüleme, yazdırma, kamera veya harici okuyucuyla hayvan kartına erişim sağlanır." },
        { title: "Kilo ve tartım", text: "Manuel veya mock tartı kayıtları, ölçüm geçmişi ve önceki tartımla fark üzerinden izlenir." },
        { title: "Süt üretimi", text: "Sabah-akşam süt kayıtları hayvan ve tarih bazında girilir, dönemsel raporda birleştirilir." },
        { title: "Sağlık ve tohumlama", text: "Muayene, ilaç, veteriner kontrolü ve tohumlama geçmişi hayvan kartıyla ilişkilendirilir." },
        { title: "Uyarılar ve raporlar", text: "Yaklaşan kontroller ve operasyon istisnaları listelenir; süt ve çiftlik verileri dışa aktarılabilir." },
        { title: "Çevrimdışı senkronizasyon", text: "Kayıtlar cihaz kuyruğunda korunur; bağlantı geldiğinde sürüm ve çakışma kontrolleriyle gönderilir." },
      ],
    },
  },
};

export default tr;
