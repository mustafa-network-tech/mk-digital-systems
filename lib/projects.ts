export type BaseProject = {
  id: string;
  titleTr: string;
  titleEn: string;
  summaryTr: string;
  summaryEn: string;
  stack: readonly string[];
  detailTr: string;
  detailEn: string;
  /** Optional custom card label (e.g. PROJE / PROJECT) */
  labelTr?: string;
  labelEn?: string;
  /** Optional modal subtitle */
  subtitleTr?: string;
  subtitleEn?: string;
  /** When set, card and modal show external link button opening this URL */
  externalUrl?: string;
  /** Optional button label override (e.g. "Uygulamaya Git" / "Visit App" for app links) */
  externalButtonLabelTr?: string;
  externalButtonLabelEn?: string;
  /** When true, card shows no label (no "Örnek" / "PROJE" etc.) */
  hideLabel?: boolean;
  /** When true, card and modal always use English content regardless of site locale */
  enOnly?: boolean;
};

export type FeaturedProject = BaseProject & {
  featured: true;
  labelTr: string;
  labelEn: string;
  subtitleTr: string;
  subtitleEn: string;
  modalStack: readonly string[];
};

export type Project = BaseProject | FeaturedProject;

export function isFeaturedProject(p: Project): p is FeaturedProject {
  return "featured" in p && p.featured === true;
}

export const projects: Project[] = [
  {
    id: "1",
    featured: true,
    titleTr: "MK Field Ops",
    titleEn: "MK Field Ops",
    labelTr: "ÖNE ÇIKAN PROJE",
    labelEn: "FEATURED PROJECT",
    summaryTr: "Çok dilli saha operasyonu, ekip yönetimi ve proje takip platformu.",
    summaryEn: "Multi-language field operations, team management, and project tracking platform.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "i18n", "SaaS"],
    subtitleTr: "Çok dilli saha operasyonu ve proje yönetim platformu",
    subtitleEn: "Multi-language field operations and project management platform",
    detailTr: `MK Field Ops, Next.js ve TypeScript ile geliştirilmiş, saha operasyonlarını, ekip bazlı iş akışlarını ve proje süreçlerini yönetmek için tasarlanmış SaaS odaklı bir platformdur.

Uygulamanın kendisi 5 dil desteklemektedir:
Türkçe, İngilizce, İspanyolca, Fransızca ve Almanca.

Sistemde ilk kullanıcı proje alanını oluşturur ve campaign manager rolünü alır. Bu kullanıcı yeni üyeleri onaylayabilir, yetki verebilir ve proje içindeki erişimi yönetebilir.

Platformda 3 ana rol yapısı bulunur:
- Team Leader
- Project Manager
- Campaign Manager

Her kullanıcı yalnızca kendi rolüne uygun modülleri, ekranları ve yetkileri görür.

Sistem şu özellikleri içerir:
- günlük iş girişi
- imalat takibi
- malzeme takibi
- finansal ilerleme takibi
- haftalık ve aylık raporlama
- esnek hakediş / dönem tanımları
- ekip bazlı yüzde tanımlama
- yetki bazlı kullanıcı görünürlüğü ve iş akışı kontrolü

MK Field Ops, çok dilli SaaS mimarisini, rol tabanlı erişim yapısını, proje raporlamasını ve saha operasyon yönetimini tek bir üründe birleştirir.`,
    detailEn: `MK Field Ops is a SaaS-oriented platform built with Next.js and TypeScript, designed to manage field operations, team-based workflows, and structured project processes.

The product itself supports 5 languages:
Turkish, English, Spanish, French, and German.

The first user creates the project space and becomes the campaign manager. This user can approve new members, assign permissions, and manage access across the system.

The platform includes 3 main roles:
- Team Leader
- Project Manager
- Campaign Manager

Each user only sees the modules, views, and permissions allowed by their role.

The system includes:
- daily work entry
- production tracking
- material tracking
- financial progress tracking
- weekly and monthly reporting
- flexible progress/payment periods
- team-based percentage definitions
- permission-based user visibility and workflow control

MK Field Ops combines multilingual SaaS architecture, role-based access control, project reporting, and field operation management in a single product.`,
    modalStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Role-Based Access",
      "Multi-Language",
      "SaaS Architecture",
    ],
  },
  {
    id: "2",
    titleTr: "Mavi Kadraj",
    titleEn: "Mavi Kadraj",
    hideLabel: true,
    summaryTr: "Doğa fotoğrafları, görsel hikâyeler ve kategorili galeri yapısıyla hazırlanan fotoğraf platformu.",
    summaryEn: "A photography platform built with nature visuals, visual storytelling, and categorized gallery sections.",
    stack: ["WordPress", "Photography", "Gallery", "Media", "Content"],
    subtitleTr: "Doğa fotoğrafçılığı ve görsel anlatım platformu",
    subtitleEn: "Nature photography and visual storytelling platform",
    externalUrl: "https://mavikadraj.com.tr",
    detailTr: `Mavi Kadraj, doğa fotoğrafları ve görsel hikâye anlatımı üzerine kurulu bir WordPress platformudur.

Ana sayfada ziyaretçiyi karşılayan giriş yapısında deklanşör sesi efekti kullanılır.
Platform içinde fotoğraflar farklı kategorilere ayrılarak sunulur ve kullanıcıya sade, görsel odaklı bir deneyim sağlanır.

Bu proje şunlara odaklanır:
- fotoğraf sunumu
- kategori bazlı galeri yapısı
- görsel hikâye anlatımı
- sade ziyaretçi deneyimi`,
    detailEn: `Mavi Kadraj is a WordPress-based platform focused on nature photography and visual storytelling.

Its landing experience includes a shutter sound effect, creating a photography-oriented first impression.
The platform presents photos in categorized sections and offers a clean, visual-first browsing experience.

This project is focused on:
- photography presentation
- category-based gallery structure
- visual storytelling
- clean visitor experience`,
  },
  {
    id: "3",
    titleTr: "Kadraj Rotam",
    titleEn: "Kadraj Rotam",
    hideLabel: true,
    summaryTr: "Dünyada fotoğraf çekilebilecek özel rotaları tanıtan, İngilizce hazırlanmış demo gezi ve fotoğraf platformu.",
    summaryEn: "An English-language demo travel and photography platform presenting unique destinations around the world for visual exploration.",
    stack: ["HTML", "Travel", "Photography", "Demo Site"],
    subtitleTr: "İngilizce hazırlanmış gezi ve fotoğraf demo sitesi",
    subtitleEn: "English demo site for travel and photography routes",
    externalUrl: "https://kadrajrotam.com",
    detailTr: `Kadraj Rotam, dünyada fotoğraf çekilebilecek özel noktaları tanıtmak için hazırlanmış İngilizce bir demo web sitesidir.

Bu proje, görsel yolculuk fikrini öne çıkaran sade bir sunum yapısına sahiptir.
Farklı destinasyonlar üzerinden ziyaretçiye ilham vermeyi amaçlar ve fotoğraf odaklı gezi rotalarını öne çıkarır.

Teknik olarak bu proje HTML tabanlı bir yapıya sahiptir.
Temel sayfa yapısında index.html, footer.html ve footer.js gibi bileşenler kullanılmıştır.

Bu proje şunları öne çıkarır:
- destinasyon sunumu
- gezi ilhamı
- fotoğraf odaklı anlatım
- sade statik site yapısı`,
    detailEn: `Kadraj Rotam is an English-language demo website created to present unique destinations around the world for photography and visual exploration.

The project is designed with a simple presentation flow that emphasizes visual travel inspiration.
It introduces selected routes and destinations through a clean and photography-oriented structure.

Technically, this project is built as an HTML-based website.
Its structure includes files such as index.html, footer.html, and footer.js.

This project highlights:
- destination presentation
- travel inspiration
- photography-oriented storytelling
- simple static site structure`,
  },
  {
    id: "4",
    titleTr: "Şiir Dünyası",
    titleEn: "Şiir Dünyası",
    hideLabel: true,
    summaryTr: "Yapay zekâ ile oluşturulan şiirleri, Mavi Kadraj imzasıyla sunan dijital şiir platformu.",
    summaryEn: "A digital poetry platform presenting AI-generated poems under the Mavi Kadraj signature.",
    stack: ["Next.js", "AI Poetry", "Content", "Digital Literature"],
    subtitleTr: "Yapay zekâ destekli dijital şiir platformu",
    subtitleEn: "AI-powered digital poetry platform",
    externalUrl: "https://siirdunyasi.com.tr",
    detailTr: `Şiir Dünyası, yapay zekâ ile oluşturulan şiirleri dijital bir platformda sunmak için geliştirilen Next.js tabanlı bir web sitesidir.

Platform, şiirleri yalnızca metin olarak değil, aynı zamanda duygusal ve estetik bir dijital deneyim olarak sunmayı hedefler.
İçerikler, Mavi Kadraj imzasıyla şiirler yaklaşımıyla kurgulanır ve edebiyatı dijital dünyaya taşır.

Bu proje şunları öne çıkarır:
- yapay zekâ ile üretilen şiir
- dijital edebiyat sunumu
- markalı içerik yapısı
- sade okuma deneyimi`,
    detailEn: `Şiir Dünyası is a Next.js-based website created to present AI-generated poetry through a digital literary experience.

The platform is designed not only to display poems as text, but also to frame them as an emotional and aesthetic digital experience.
Its content is presented under the idea of poems signed by Mavi Kadraj, bringing literature into a modern digital form.

This project highlights:
- AI-generated poetry
- digital literature presentation
- branded content structure
- clean reading experience`,
  },
  {
    id: "5",
    titleTr: "Gönül Pusulası",
    titleEn: "Gönül Pusulası",
    hideLabel: true,
    summaryTr: "Aşk, sevda, sözler ve mektuplar üzerine kurulu romantik içerik platformu.",
    summaryEn: "A romantic content platform built around love, longing, letters, and emotional writing.",
    stack: ["HTML", "Love Platform", "Letters", "Content", "Interactive"],
    subtitleTr: "Aşk ve sevda temalı dijital içerik platformu",
    subtitleEn: "Digital content platform focused on love and longing",
    externalUrl: "https://gonulpusulasi.com",
    detailTr: `Gönül Pusulası, aşk, sevda, sözler, yazılar ve mektuplar üzerine kurulu HTML tabanlı bir demo içerik sitesidir.

Platformun yapısında romantik bir anlatım dili ve etkileşimli içerik deneyimi öne çıkar.
Özellikle mektup elementi, mektubun açılma deneyimi ve günlük mektup okuma sınırı gibi detaylar projeye özgü bir yapı kazandırır.

Sistemde kullanıcıya günlük olarak sınırlı sayıda mektup okutulması planlanmıştır.
Bu yapı, içerik deneyimini daha özel ve kontrollü hale getiren bir yaklaşım sunar.

Bu proje şunları öne çıkarır:
- aşk ve romantizm temalı içerik
- mektup odaklı etkileşim
- günlük sınırlı içerik mantığı
- duygusal anlatım deneyimi`,
    detailEn: `Gönül Pusulası is an HTML-based demo content website built around love, longing, letters, quotes, and emotional writing.

The platform emphasizes a romantic storytelling style and an interactive reading experience.
Its letter element, letter opening interaction, and daily reading limitation are among the project's distinctive features.

The system is designed to allow users to read only a limited number of letters per day.
This creates a more curated and emotionally focused content experience.

This project highlights:
- love and romance themed content
- letter-based interaction
- limited daily content logic
- emotional storytelling experience`,
  },
  {
    id: "6",
    titleTr: "mustafaoner.net",
    titleEn: "mustafaoner.net",
    hideLabel: true,
    summaryTr: "Genişletilmiş CV ve dijital kimlik sunumu olarak tasarlanmış tek sayfalık kişisel portföy sitesi.",
    summaryEn: "A single-page personal portfolio website designed as an expanded CV and digital identity presentation.",
    stack: ["Next.js", "Portfolio", "CV", "Gallery", "Social Links"],
    subtitleTr: "Kişisel portföy ve genişletilmiş CV platformu",
    subtitleEn: "Personal portfolio and expanded CV platform",
    externalUrl: "https://mustafaoner.net",
    detailTr: `mustafaoner.net, geleneksel PDF özgeçmiş formatına daha kapsamlı bir alternatif olarak tasarlanmış tek sayfalık kişisel portföy sitesidir.

Proje, profesyonel deneyim, tamamlanan işler, proje geçmişi ve kişisel yaratıcı alanları daha kapsamlı bir dijital formatta sunar.
Deneyim odaklı bölümler, proje özetleri, görsel galeri ve seçili sosyal medya entegrasyonlarını içerir.

Site ayrıca fotoğraf odaklı içerik ve özenle seçilmiş sosyal medya paylaşımlarının tek bir yapıda bir araya geldiği kişisel bir dijital vitrin işlevi görür.

Bu proje şunları öne çıkarır:
- genişletilmiş CV yapısı
- kişisel portföy sunumu
- galeri tabanlı içerik
- sosyal medya entegrasyonu
- tek sayfa deneyimi`,
    detailEn: `mustafaoner.net is a single-page personal portfolio website designed as a broader alternative to the traditional PDF resume format.

The project presents professional experience, completed work, project history, and personal creative areas through a more comprehensive digital format.
It includes experience-focused sections, project overviews, a visual gallery, and selected social media integrations.

The site also functions as a personal digital showcase where photography-oriented content and curated social media posts come together in one structure.

This project highlights:
- expanded CV structure
- personal portfolio presentation
- gallery-based content
- social media integration
- single-page experience`,
  },
  {
    id: "7",
    titleTr: "Mavi Kadrajla Öğreniyorum",
    titleEn: "Learning with Mavi Kadraj",
    hideLabel: true,
    summaryTr: "Çocuklar için hazırlanmış, sayılar ve temel İngilizce kelimeler öğreten sesli anlatımlı demo Android uygulaması.",
    summaryEn: "A demo Android learning app for children, teaching numbers and basic English words with audio guidance.",
    stack: ["Flutter", "Android", "Learning", "Audio", "Mavi Kadraj"],
    subtitleTr: "Çocuklara yönelik sesli anlatımlı eğitim uygulaması",
    subtitleEn: "Audio-supported educational app for children",
    externalUrl: "https://play.google.com/store/apps/details?id=com.mavikadaj.learn",
    externalButtonLabelTr: "Uygulamaya Git →",
    externalButtonLabelEn: "Visit App →",
    detailTr: `Mavi Kadrajla Öğreniyorum, çocuklara sayıları ve temel İngilizce kelimeleri öğretmek amacıyla geliştirilen Flutter tabanlı bir Android uygulamasıdır.

Uygulama sade bir öğrenme deneyimi sunar ve sesli anlatım desteğiyle çocukların içerikle daha kolay etkileşim kurmasını hedefler.
Temel eğitim mantığı, kısa ve anlaşılır öğrenme alanlarıyla çocuk dostu bir yapı oluşturmaktır.

Bu proje şunları öne çıkarır:
- çocuk odaklı öğrenme
- sayı ve kelime öğretimi
- sesli rehberli etkileşim
- sade Android demo deneyimi`,
    detailEn: `Learning with Mavi Kadraj is a Flutter-based Android application developed to help children learn numbers and basic English words.

The app offers a simple learning experience and uses audio guidance to make the content more accessible and engaging for children.
Its core structure is designed as a child-friendly demo learning application with short and clear educational interactions.

This project highlights:
- children-focused learning
- number and word teaching
- audio-guided interaction
- simple Android demo experience`,
  },
];
