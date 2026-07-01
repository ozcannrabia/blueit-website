# Blueit Website

Blueit'in kurumsal tanıtım web sitesi — endüstriyel tesisler ve ticari binalarda su yönetimini dijitalleştiren yapay zeka destekli platformun kurumsal internet sitesi.

**Canlı site:** [blueit-website.vercel.app](https://blueit-website.vercel.app) <!-- gerçek Vercel linkini buraya güncelle -->

## Özellikler

- **Çok dilli destek (TR / EN):** Sağ üstteki dil butonuyla anlık dil değişimi. Tüm sayfa içerikleri (çözümler, sektörler, basın haberleri, blog, iletişim formu dahil) merkezi bir çeviri sisteminden besleniyor.
- **Responsive tasarım:** Mobil, tablet ve masaüstü için Tailwind breakpoint'leriyle kademeli olarak optimize edildi.
- **Çözüm detay sayfaları:** Her su yönetim çözümü için dinamik rota (`/cozumler/:slug`) üzerinden ayrı, SEO-dostu detay sayfaları.
- **Medyada Blueit:** Basında çıkan haberlerin görsellerle desteklendiği, otomatik dönen (carousel) ve sayfalanabilir bir bölüm.
- **Su Evreni (blog):** Kategoriye göre filtrelenebilir bilgi/farkındalık içerikleri.
- **Animasyonlu, video destekli hero ve bölümler:** Framer Motion ile scroll-triggered animasyonlar.

## Teknoloji Yığını

| Katman | Teknoloji |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS 4 |
| Animasyon | Framer Motion |
| Routing | React Router 7 |
| İkonlar | Lucide React |
| Lint | Oxlint |
| Deploy | Vercel |

## Proje Yapısı

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/       # Ana sayfa bölümleri (Hero, Features, Press, Contact, ...)
│   └── ui/             # Tekrar kullanılabilir küçük bileşenler (Button, Badge, Card ...)
├── pages/               # HomePage, SolutionPage (çözüm detay sayfası)
├── constants/           # data.ts — dil-duyarlı içerik verileri (çözümler, istatistikler, basın vb.)
├── i18n/                # translations.ts (TR/EN metinler) + LangContext
├── hooks/                # useCounter, useInView gibi custom hook'lar
└── types/                # Paylaşılan TypeScript tipleri
public/
├── video/                # Hero ve arka plan videoları
├── press/                # Basın haberleri görselleri
├── solutions/, industries/, logos/  # Diğer görsel varlıklar
```

## Kurulum ve Geliştirme

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat (http://localhost:5173)
npm run dev

# Prod build al
npm run build

# Build'i yerelde önizle
npm run preview

# Lint kontrolü
npm run lint
```

## Çeviri Ekleme / Düzenleme

Tüm görünür metinler `src/i18n/translations.ts` içinde `tr` ve `en` anahtarları altında tutulur. Yeni bir metin eklerken:

1. `translations.ts` içine hem `tr` hem `en` karşılığını ekle (aynı `key` ile).
2. İlgili bileşende `const { T } = useLang()` ile `T('anahtar_adi')` şeklinde kullan.
3. Liste/kart türü içerikler (çözümler, basın, blog, sektörler, istatistikler) `src/constants/data.ts` içinde `get...(T)` fonksiyonlarıyla dile göre çözümlenir — yeni bir öğe eklerken oradaki ilgili `_BASE` dizisine yeni bir kayıt eklemen yeterli.

## İletişim Formu Hakkında Not

İletişim bölümündeki form şu an herhangi bir e-posta servisine (Formspree, EmailJS vb.) bağlı değildir; sadece arayüzü göstermektedir. Formun gönderdiği verilerin bir e-posta adresine ulaşması isteniyorsa, tercih edilen servisle (örn. Formspree) kolayca entegre edilebilir.

## Deploy

Proje Vercel'e bağlıdır. `main` branch'ine yapılan her `push`, Vercel tarafından otomatik olarak algılanır ve canlı site birkaç saniye içinde güncellenir. Manuel bir deploy adımına gerek yoktur.
