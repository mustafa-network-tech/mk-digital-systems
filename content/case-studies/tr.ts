import type { ProjectId } from "@/content/projects";
import type { CaseStudyCopy } from ".";

const tr: Partial<Record<ProjectId, CaseStudyCopy>> = {
  "saha-santiye": {
    meta: {
      title: "Saha ve şantiye operasyon yönetimi: telekom & fiber | MK Digital Systems",
      description:
        "Telekom ve fiber sahasında günlük işi, ekipleri, malzemeyi ve imalatı tek yerde toplayan iki yaklaşım: çok şirketli MK OPS ve şirkete özel Şantiye Yönetim.",
    },
    title: "Saha ve şantiye operasyonlarını tek yerde toplamak",
    lead:
      "Sahadaki iş, ofiste aynı anda görünsün. Telekom ve fiber altyapı işlerinde günlük iş girişinden ekip planına, malzemeden imalata kadar saha operasyonlarını tek sistemde toplamak için geliştirdiğimiz iki yaklaşım.",
    audience: {
      heading: "Kimin sorunu?",
      text:
        "Telekom ve fiber altyapı projelerinde aynı anda birçok ekibi, projeyi ve malzemeyi yöneten firmaların. Sahada çalışan ekip liderlerinden ofisteki operasyon ve muhasebe ekibine kadar, işin farklı parçalarını farklı kişiler görüyor.",
      points: [
        "Aynı gün farklı projelerde çalışan saha ekipleri ve ekip liderleri",
        "İşi planlayan, kontrol eden ve onaylayan proje ve şirket yöneticileri",
        "Malzeme, araç ve ekipmanı takip eden depo tarafı",
        "Puantajı, hakedişi ve raporları hazırlayan ofis",
      ],
    },
    problem: {
      heading: "Sorun neydi?",
      text:
        "Sahada iş hızlı akar; bilgi ise mesajlara, fotoğraflara ve ayrı tablolara dağılır. Hangi ekibin nerede ne yaptığı, hangi işin onay beklediği ya da hangi malzemenin nereye çıktığı çoğu zaman ancak gün sonunda, elle birleştirilerek görülür.",
      points: [
        "Günlük yapılan işler mesajlarda ve kâğıt formlarda kalıyor",
        "Ekip, araç ve personel planı her sabah yeniden kuruluyor",
        "Proje ilerlemesi (pafta, kabin, kablo, kazı) tek yerden izlenemiyor",
        "Malzeme çıkışları ve zimmetler stokla eşleşmiyor",
        "İmalat, puantaj ve hakediş dönem sonunda elle toplanıyor",
      ],
    },
    approach: {
      heading: "Nasıl yaklaştık?",
      text:
        "Ekranlardan değil, sahadaki günün akışından başladık: sabah ekip planı, gün içinde iş girişi, akşam kontrol ve onay, dönem sonunda rapor. Hedefimiz, bilgiyi ilk gören kişinin onu doğrudan sisteme girebilmesi ve herkesin yalnızca kendi işine yarayanı görmesiydi.",
      points: [
        "Rol bazlı düşünmek: ekip lideri, proje yöneticisi ve şirket yöneticisi farklı şeyler görür",
        "Sahada telefondan hızlı giriş, ofiste masaüstünden toplu kontrol",
        "Açık bir onay akışı: taslak, gönderildi, onaylandı ya da reddedildi",
        "Kayıtları hakediş dönemi mantığıyla toplamak",
      ],
    },
    solution: {
      heading: "Aynı soruna iki yaklaşım",
      text:
        "Sorunu iki farklı kullanım biçimi için çözdük: birden fazla şirketin kendi alanında kullanabileceği bir SaaS ve tek bir şirketin çalışma biçimine göre kurulan bir yönetim sistemi. Bunlar iki ayrı paket değil; aynı problem için iki farklı mimari tercih.",
      parts: {
        "mk-ops": {
          summary:
            "Çok kiracılı bir SaaS yaklaşımı: her şirket kendi izole çalışma alanında ekiplerini, projelerini, saha işlerini ve onaylarını yönetir.",
          highlights: [
            "Şirket bazlı veri izolasyonu ve rol tabanlı yetkiler",
            "Günlük saha işi girişi ve onay akışı",
            "Malzeme teslim fişleri ve stok takibi",
            "Ekip kazancı, şirket payı ve hakediş dönemleri",
            "Denetim günlüğü, Excel ve PDF raporları",
            "Türkçe, İngilizce, Almanca, Fransızca ve İspanyolca arayüz",
          ],
        },
        "santiye-yonetim": {
          summary:
            "Tek bir şirketin operasyonuna göre kurulan panel: fiber projelerinin aşamalarından günlük ekip planına kadar şirketin kendi çalışma biçimini izler.",
          highlights: [
            "Proje takibi: tür, durum, ilerleme, OBK, ek, kablo ve kazı aşamaları",
            "Günlük iş planı ve ekip şablonları",
            "İmalat girişleri ve tarih aralıklı imalat raporu",
            "Puantaj ve hakediş özeti",
            "Malzeme, stok, zimmet ve araç kayıtları",
            "Onaylı kullanıcı kaydı ve güvenli oturum yönetimi",
          ],
        },
      },
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
      "santiye-projects": {
        caption: "Şantiye Yönetim · Projeler: tür, durum, ilerleme ve saha aşamalarına göre filtrelenen proje listesi.",
        alt: "Şantiye Yönetim projeler ekranı; örnek fiber projeleriyle",
      },
      "santiye-mobile": {
        caption: "Şantiye Yönetim · Mobil: proje listesi ve filtreler telefonda.",
        alt: "Şantiye Yönetim mobil projeler ekranı; örnek verilerle",
      },
      "santiye-dashboard": {
        caption: "Şantiye Yönetim · Dashboard: kategori bazlı proje durumu, kritik stok ve araç uyarıları.",
        alt: "Şantiye Yönetim dashboard ekranı; örnek verilerle",
      },
    },
    ctaText: "Sahadaki işi ve ofisteki takibi bir araya getirmek istiyorsanız bugünkü akışınızı anlatın; size uygun yaklaşımı birlikte belirleyelim.",
    screensNote: "Ekranlardaki bütün kayıtlar örnek veridir; gerçek kişi, firma ya da proje bilgisi içermez.",
    modules: {
      heading: "Temel modüller",
      items: [
        { title: "Günlük iş girişi ve onay", text: "Sahada yapılan iş aynı gün kaydedilir, yönetici tek listeden onaylar ya da düzeltme ister." },
        { title: "Ekip ve günlük iş planı", text: "Hangi ekibin hangi araçla hangi projeye çıkacağı her sabah birkaç adımda planlanır." },
        { title: "Proje ve ilerleme takibi", text: "Fiber projelerinin pafta, kabin, kablo ve kazı aşamaları ilerleme yüzdesiyle izlenir." },
        { title: "İmalat kayıtları", text: "Ekiplerin günlük imalatı iş kalemi bazında girilir ve tarih aralığına göre raporlanır." },
        { title: "Malzeme, stok ve zimmet", text: "Malzeme çıkışları, teslim fişleri ve personel zimmetleri stokla birlikte tutulur." },
        { title: "Araç ve ekipman", text: "Araçlar, ekipmanlar ve belge tarihleri tek yerde; yaklaşan muayene ve sigorta için uyarı." },
        { title: "Puantaj ve hakediş", text: "Personel devamı, avanslar ve dönem hakedişleri aynı kayıtlardan hesaplanır." },
        { title: "Roller ve raporlar", text: "Her rol kendi ekranını görür; raporlar Excel, PDF ya da Word olarak dışa aktarılır." },
      ],
    },
  },
};

export default tr;
