# Belajar Mengaji & Ibadah App

Aplikasi web komprehensif untuk belajar membaca Al-Quran, panduan ibadah sholat, dan ilmu agama Islam. Dibangun dengan teknologi web modern untuk memberikan pengalaman belajar yang interaktif dan mudah diakses.

![Belajar Mengaji App](public/vite.svg) *Ganti dengan screenshot aplikasi jika ada*

## Fitur Utama

### 📖 Al-Quran & Belajar Mengaji
*   **Hijaiyah**: Pengenalan huruf-huruf dasar hijaiyah dengan audio.
*   **Iqro Digital**: Materi lengkap Iqro Jilid 1 sampai Jilid 6 dengan latihan membaca bertahap.
*   **Tahsin**: Panduan memperbaiki bacaan Al-Quran, termasuk Makharijul Huruf (Tempat keluar huruf) dan Sifatul Huruf.
*   **Tajwid**: Penjelasan lengkap hukum-hukum bacaan (Mad, Nun Mati, Mim Mati, Qalqalah, dll).
*   **Juz Amma**: Hafalan surat-surat pendek Juz 30.

### 🕌 Panduan Ibadah
*   **Jadwal Sholat & Imsyak**: Waktu sholat akurat otomatis berdasarkan lokasi pengguna (menggunakan API Aladhan).
*   **Panduan Wudhu**: Tata cara berwudhu yang benar.
*   **Panduan Sholat Fardhu**: Bacaan, gerakan, dan niat sholat wajib.
*   **Sholat Sunnah**: Panduan berbagai sholat sunnah.

### 📚 Kitab & Ilmu
*   **Nahwu & Shorof**: Pengenalan dasar tata bahasa Arab (Kitab Kuning).

### 🏆 Fitur Gamifikasi
*   **Kuis Islami**: Uji pengetahuan dengan kuis interaktif.
*   **Leaderboard**: Papan peringkat untuk memotivasi belajar.
*   **Badge**: Lencana penghargaan atas pencapaian belajar.

## Teknologi

Aplikasi ini dibangun menggunakan:
*   **[React](https://reactjs.org/)**: Library UI utama.
*   **[Vite](https://vitejs.dev/)**: Build tool yang super cepat.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS untuk styling modern dan responsif.
*   **[Lucide React](https://lucide.dev/)**: Koleksi ikon yang indah dan ringan.
*   **[Axios](https://axios-http.com/)**: Untuk fetching data API (Jadwal Sholat).
*   **[Firebase](https://firebase.google.com/)**: Backend service (untuk fitur Leaderboard/Database).

## Instalasi & Menjalankan

Ikuti langkah ini untuk menjalankan proyek di komputer lokal Anda:

1.  **Clone repositori:**
    ```bash
    git clone https://github.com/yayat/belajar-mengaji.git
    cd belajar-mengaji
    ```

2.  **Instal dependensi:**
    Pastikan Node.js sudah terinstal.
    ```bash
    npm install
    ```

3.  **Jalankan mode pengembangan:**
    ```bash
    npm run dev
    ```
    Buka `http://localhost:5173` di browser Anda.

## Struktur Proyek

*   `src/components`: Komponen UI yang dapat digunakan kembali (Dashboard, Sidebar, dll).
*   `src/pages`: Halaman-halaman utama aplikasi (Quran, Sholat, Quiz).
*   `src/hooks`: Custom hooks (seperti `usePrayerTimes`).
*   `src/lib`: Konfigurasi library pihak ketiga (Firebase).

## Lisensi

[MIT](LICENSE)

---
Dibuat dengan ❤️ untuk pembelajaran Islam.
