# Dental Lite — Landing Page

Landing page Dental Lite, bagian dari platform Temu Dokter.

## Struktur file

```
/
├── index.html          ← Semua konten HTML & section
├── css/
│   └── style.css       ← Semua styling (edit di sini untuk ubah warna, layout, font)
├── js/
│   └── main.js         ← Interaksi: nav hamburger, cara kerja stepper, layanan flip
└── assets/
    └── hero.jpg        ← Ganti file ini dengan foto hero (pasien di dental chair)
```

## Cara deploy ke GitHub Pages + domain temudokter.id

1. Push semua file ke repo GitHub
2. Di repo → Settings → Pages → Source: pilih branch `main`, folder `/` (root)
3. Tambahkan file `CNAME` di root berisi:
   ```
   temudokter.id
   ```
4. Di DNS provider domain `temudokter.id`, tambahkan record:
   - Type: `CNAME`, Name: `www`, Value: `<username>.github.io`
   - Type: `A`, Name: `@`, Value: `185.199.108.153` (GitHub Pages IP)
   - Type: `A`, Name: `@`, Value: `185.199.109.153`
   - Type: `A`, Name: `@`, Value: `185.199.110.153`
   - Type: `A`, Name: `@`, Value: `185.199.111.153`

## Cara mengganti foto hero

1. Siapkan foto dengan rasio landscape (disarankan minimal 1200×500px)
2. Simpan sebagai `assets/hero.jpg`
3. Di `index.html`, cari bagian `hero__photo-placeholder` dan ganti dengan:
   ```html
   <img src="assets/hero.jpg" alt="Pasien menggunakan Dental Lite di klinik MHDC" />
   ```

## Cara update konten

| Konten | File | Cari bagian |
|--------|------|-------------|
| Headline hero | `index.html` | `hero__title` |
| Daftar klinik mitra | `index.html` | `<!-- SECTION 5 — KLINIK MITRA -->` |
| Daftar layanan & harga | `index.html` | `<!-- SECTION 6 — LAYANAN -->` |
| Warna brand | `css/style.css` | `:root { ... }` di bagian atas |
| Kecepatan auto-advance cara kerja | `js/main.js` | angka `3500` (dalam ms) |

## Cara aktifkan tombol download app (saat app sudah live)

Di `index.html`, section hero, tambahkan setelah `.hero__proof`:

```html
<div class="hero__stores">
  <a href="https://apps.apple.com/..." class="btn btn--store">
    <svg><!-- apple icon --></svg>
    <div><small>Download on the</small><span>App Store</span></div>
  </a>
  <a href="https://play.google.com/..." class="btn btn--store">
    <svg><!-- play icon --></svg>
    <div><small>Get it on</small><span>Google Play</span></div>
  </a>
</div>
```

Styling `.btn--store` sudah tersedia di `css/style.css` (tinggal uncomment).
