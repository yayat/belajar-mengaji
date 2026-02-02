import React, { useState } from 'react';
import { Book, ChevronRight } from 'lucide-react';

const Kitab = () => {
    const [activeTab, setActiveTab] = useState('nahwu');
    const [selectedBab, setSelectedBab] = useState(0);
    const [sorofSubTab, setSorofSubTab] = useState('istilahi');
    const [selectedFiqihBab, setSelectedFiqihBab] = useState(0);

    const nahwuChapters = [
        {
            title: "1. Bab Kalam (الكلام)",
            arabic: "الْكَلَامُ: هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيْدُ بِالْوَضْعِ",
            desc: "Kalam adalah lafadz yang tersusun, memberikan faedah (pemahaman), dan disengaja (dengan bahasa Arab). Syarat Kalam ada 4: Lafadz (suara), Murakkab (tersusun), Mufid (berfaedah), dan Wadho' (disengaja/bahasa Arab)."
        },
        {
            title: "2. Tanda-tanda Isim",
            arabic: "فَالِاسْمُ يُعْرَفُ: بِالْخَفْضِ، وَالتَّنْوِيْنِ، وَدُخُولِ الْأَلِفِ وَاللَّامِ",
            desc: "Isim (Kata Benda) bisa diketahui dengan tanda: (1) Khafadh/Jar (berharakat kasrah), (2) Tanwin (an/in/un), (3) Kemasukan Alif dan Lam (Al-), (4) Kemasukan Huruf Jar (min, ila, 'an, 'ala, fi, rubba, ba, kaf, lam)."
        },
        {
            title: "3. Tanda-tanda Fi'il",
            arabic: "وَالْفِعْلُ يُعْرَفُ بِقَدْ، وَالسِّيْنِ، وَسَوْفَ، وَتَاءِ التَّأْنِيْثِ السَّاكِنَةِ",
            desc: "Fi'il (Kata Kerja) bisa diketahui dengan: (1) Qod (sungguh/kadang), (2) Sin (akan - dekat), (3) Saufa (akan - jauh), (4) Ta' Ta'nits Sakinah (huruf Ta mati menunjukkan perempuan)."
        },
        {
            title: "4. Huruf",
            arabic: "وَالْحَرْفُ مَا لَا يَصْلُحُ مَعَهُ دَلِيْلُ الِاسْمِ وَلَا دَلِيْلُ الْفِعْلِ",
            desc: "Huruf adalah kata yang tidak cocok disandingkan dengan tanda Isim maupun tanda Fi'il. (Contoh: هل, في, لم)."
        },
        {
            title: "5. Bab I'rab (الإعراب)",
            arabic: "الإِعْرَابُ هُوَ تَغْيِيرُ أَوَاخِرِ الْكَلِمِ لِاخْتِلَافِ الْعَوَامِلِ الدَّاخِلَةِ عَلَيْهَا لَفْظًا أَوْ تَقْدِيرًا",
            desc: "I'rab adalah perubahan akhir kata karena perbedaan amil yang masuk padanya. Pembagian I'rab ada 4: (1) Rafa', (2) Nashab, (3) Khafadh (Jar), (4) Jazm. Isim bisa Rafa, Nashab, Jar. Fi'il bisa Rafa, Nashab, Jazm."
        },
        {
            title: "6. Tanda Rafa' (الرفع)",
            arabic: "لِلرَّفْعِ أَرْبَعُ عَلَامَاتٍ: الضَّمَّةُ، وَالْوَاوُ، وَالْأَلِفُ، وَالنُّونُ",
            desc: "Tanda Rafa' ada 4: (1) Dhammah (pada Isim Mufrad, Jama Taksir, Jama Muannats Salim, Fi'il Mudhari), (2) Wau (pada Jama Mudzakkar Salim, Asmaul Khamsah), (3) Alif (pada Isim Tatsniyah), (4) Nuun (pada Af'alul Khamsah)."
        },
        {
            title: "7. Tanda Nashab (النصب)",
            arabic: "لِلنَّصْبِ خَمْسُ عَلَامَاتٍ: الْفَتْحَةُ، وَالْأَلِفُ، وَالْكَسْرَةُ، وَالْيَاءُ، وَحَذْفُ النُّونِ",
            desc: "Tanda Nashab ada 5: Fathah (asal), Alif (Asmaul Khamsah), Kasrah (Jama Muannats Salim), Ya' (Isim Tatsniyah & Jama Mudzakkar), Hadzfun Nuun (membuang nun pada Af'alul Khamsah)."
        },
        {
            title: "8. Tanda Jar/Khafadh",
            arabic: "وَلِلْخَفْضِ ثَلَاثُ عَلَامَاتٍ: الْكَسْرَةُ، وَالْيَاءُ، وَالْفَتْحَةُ",
            desc: "Tanda Khafadh ada 3: Kasrah (asal), Ya' (pada Asmaul Khamsah, Isim Tatsniyah, Jama Mudzakkar), Fathah (pada Isim Ghairu Munsharif)."
        },
        {
            title: "9. Tanda Jazm (الجزم)",
            arabic: "وَلِلْجَزْمِ عَلَامَتَانِ: السُّكُونُ، وَالْحَذْفُ",
            desc: "Tanda Jazm ada 2: Sukun (pada Fi'il Mudhari Shahih Akhir) dan Hadzfu/Membuang (membuang huruf illat atau membuang nun)."
        },
        {
            title: "10. Fi'il (Af'al)",
            arabic: "الْأَفْعَالُ ثَلَاثَةٌ: مَاضٍ، وَمُضَارِعٌ، وَأَمْرٌ",
            desc: "Fi'il ada 3: (1) Madhi (lampau) - Fathah di akhir selamanya, (2) Mudhari (sekarang/nanti) - Dimulai huruf mudhara'ah (Anitu) dan hukumnya Rafa kecuali ada amil, (3) Amr (perintah) - Jazm selamanya."
        },
        {
            title: "11. Isim-isim yang Rafa'",
            arabic: "الْمَرْفُوعَاتُ سَبْعَةٌ: الْفَاعِلُ، وَالْمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ، وَالْمُبْتَدَأُ وَخَبَرُهُ...",
            desc: "Isim yang dibaca Rafa' ada 7: (1) Fa'il (Subjek), (2) Naibul Fa'il (Pengganti Subjek), (3) Mubtada (Subjek kalimat nominal), (4) Khabar (Predikat kalimat nominal), (5) Isim Kana, (6) Khabar Inna, (7) Tabi' (yang mengikuti) dari yang rafa."
        }
    ];

    const fiqihChapters = [
        {
            title: "1. Rukun Islam",
            arabic: "أَرْكَانُ الْإِسْلَامِ خَمْسَةٌ: شَهَادَةُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامُ الصَّلَاةِ...",
            desc: "Rukun Islam (5): Syahadat, Sholat, Zakat, Puasa, Haji."
        },
        {
            title: "2. Rukun Iman",
            arabic: "أَرْكَانُ الْإِيمَانِ سِتَّةٌ: أَنْ تُؤْمِنَ بِاللَّهِ، وَمَلَائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ",
            desc: "Rukun Iman (6): Iman kepada Allah, Malaikat, Kitab, Rasul, Hari Akhir, Takdir."
        },
        {
            title: "3. Tanda Baligh",
            arabic: "عَلَامَاتُ الْبُلُوغِ ثَلَاثٌ: تَمَامُ خَمْسَ عَشْرَةَ سَنَةً... وَالِاحْتِلَامُ... وَالْحَيْضُ...",
            desc: "Tanda Baligh (3): Umur 15 tahun, Ihtilam (Mimpi Basah) min 9 th, Haid (Perempuan) min 9 th."
        },
        {
            title: "4. Syarat Istinja",
            arabic: "شُرُوطُ إِجْزَاءِ الْحَجَرِ ثَمَانِيَةٌ: أَنْ يَكُونَ بِثَلَاثَةِ أَحْجَارٍ، وَأَنْ يُنْقِيَ الْمَحَلَّ...",
            desc: "Syarat Istinja dgn Batu (8): 3 batu, suci tempatnya, najis belum kering, najis tidak pindah, tidak campur najis lain, tidak lewat shafhah/hasyafah, tidak kena air, batu suci."
        },
        {
            title: "5. Fardhu Wudhu",
            arabic: "فُرُوضُ الْوُضُوءِ سِتَّةٌ: النِّيَّةُ، غَسْلُ الْوَجْهِ، غَسْلُ الْيَدَيْنِ... مَسْحُ شَيْءٍ مِنَ الرَّأْسِ، غَسْلُ الرِّجْلَيْنِ... التَّرْتِيبُ",
            desc: "Fardhu Wudhu (6): Niat, Basuh Wajah, Basuh Tangan, Usap Kepala, Basuh Kaki, Tertib."
        },
        {
            title: "6. Air Sedikit & Banyak",
            arabic: "الْمَاءُ قَلِيلٌ وَكَثِيرٌ: الْقَلِيلُ مَا دُونَ الْقُلَّتَيْنِ، وَالْكَثِيرُ قُلَّتَانِ فَأَكْثَرُ",
            desc: "Air Sedikit: Kurang dari 2 qullah, menjadi najis jika terkena najis walau tidak berubah. Air Banyak: 2 qullah atau lebih, tidak najis kecuali berubah rasa, warna, atau bau."
        },
        {
            title: "7. Mandi Wajib (Mewajibkan Mandi)",
            arabic: "مُوجِبَاتُ الْغُسْلِ سِتَّةٌ: إِيلَاجُ الْحَشَفَةِ فِي الْفَرْجِ، وَخُرُوجُ الْمَنِيِّ، وَالْحَيْضُ، وَالنِّفَاسُ، وَالْوِلَادَةُ، وَالْمَوْتُ",
            desc: "Sebab Mandi Wajib (6): Masuknya hasyafah ke farji, Keluar mani, Haid, Nifas, Melahirkan, Meninggal Dunia."
        },
        {
            title: "8. Fardhu Mandi",
            arabic: "فُرُوضُ الْغُسْلِ اثْنَانِ: النِّيَّةُ، وَتَعْمِيمُ الْبَدَنِ بِالْمَاءِ",
            desc: "Fardhu Mandi (2): Niat, Meratakan air ke seluruh tubuh."
        },
        {
            title: "9. Syarat Wudhu",
            arabic: "شُرُوطُ الْوُضُوءِ عَشَرَةٌ: الْإِسْلَامُ، وَالتَّمْيِيزُ، وَالنَّقَاءُ عَنِ الْحَيْضِ وَالنِّفَاسِ...",
            desc: "Syarat Wudhu (10): Islam, Tamyiz, Suci Haid/Nifas, Tidak ada penghalang air ke kulit, Tidak ada yang merubah air, Mengetahui kefardhuan, Tidak meyakini fardhu sbg sunnah, Air suci, Masuk waktu (bagi daimul hadats), Muwalah (bagi daimul hadats)."
        },
        {
            title: "10. Pembatal Wudhu",
            arabic: "نَوَاقِضُ الْوُضُوءِ أَرْبَعَةٌ: الْخَارِجُ مِنْ أَحَدِ السَّبِيلَيْنِ... زَوَالُ الْعَقْلِ... لَمْسُ بَشَرَةِ الأَجْنَبِيَّةِ... مَسُّ قُبُلِ الآدَمِيِّ...",
            desc: "Pembatal Wudhu (4): Keluar sesuatu dari kubul/dubur, Hilang akal, Bersentuhan kulit lawan jenis bukan mahram, Menyentuh kemaluan."
        },
        {
            title: "11. Larangan Bagi yang Batal Wudhu/Junub",
            arabic: "مَنْ انْتَقَضَ وُضُوءُهُ حَرُمَ عَلَيْهِ أَرْبَعَةُ أَشْيَاءَ: الصَّلَاةُ... وَمَنْ أَجْنَبَ حَرُمَ عَلَيْهِ سِتَّةُ أَشْيَاءَ...",
            desc: "Batal Wudhu Haram (4): Sholat, Thawaf, Menyentuh Quran, Membawa Quran. Junub Haram (6): + Diam di masjid, Membaca Quran. Haid Haram (10): + Puasa, Talak, Lewat masjid, Jima, Bersenang antara pusar-lutut."
        },
        {
            title: "12. Sebab Tayammum",
            arabic: "أَسْبَابُ التَّيَمُّمِ ثَلَاثَةٌ: فَقْدُ الْمَاءِ، وَالْمَرَضُ، وَالِاحْتِيَاجُ إِلَيْهِ لِعَطَشِ حَيَوَانٍ مُحْتَرَمٍ",
            desc: "Sebab Tayammum (3): Tidak ada air, Sakit, Ada air tapi butuh untuk minum hewan yang dimuliakan."
        },
        {
            title: "13. Fardhu Sholat (Rukun Sholat)",
            arabic: "أَرْكَانُ الصَّلَاةِ سَبْعَةَ عَشَرَ: النِّيَّةُ، تَكْبِيرَةُ الْإِحْرَامِ، الْقِيَامُ، الْفَاتِحَةِ، الرُّكُوعُ...",
            desc: "Rukun Sholat (17): Niat, Takbiratul Ihram, Berdiri, Fatihah, Ruku, Tuma'ninah, I'tidal, Tuma'ninah, Sujud, Tuma'ninah, Duduk antara 2 sujud, Tuma'ninah, Tasyahud Akhir, Duduk Tasyahud, Shalawat, Salam, Tertib."
        },
        {
            title: "14. Syarat Sah Sholat",
            arabic: "شُرُوطُ صِحَّةِ الصَّلَاةِ ثَمَانِيَةٌ... طَهَارَةُ الْحَدَثَيْنِ...",
            desc: "Syarat Sah (8): Suci hadats, Suci najis, Tutup aurat, Menghadap kiblat, Masuk waktu, Tahu fardhu, Tidak anggap fardhu sunnah, Jauhi pembatal."
        },
        {
            title: "15. Syarat Takbiratul Ihram",
            arabic: "شُرُوطُ تَكْبِيرَةِ الْإِحْرَامِ سِتَّةَ عَشَرَ: أَنْ تَقَعَ حَالَةَ الْقِيَامِ...",
            desc: "Syarat Takbir (16): Harus berdiri (bagi yang mampu), Bahasa Arab, Lafadz Allah, Lafadz Akbar, Tertib, Tidak panjangkan Hamzah Allah, Tidak panjangkan Ba Akbar, Tidak tasydid Ba, Tidak tambah Wawu, Tidak waqaf lama, Dengar sendiri, Masuk waktu, Menghadap kiblat, Tidak merusak huruf, Ta'khir dari Imam."
        },
        {
            title: "16. Syarat Al-Fatihah",
            arabic: "شُرُوطُ الْفَاتِحَةِ عَشَرَةٌ: التَّرْتِيبُ، وَالْمُوَالَاةُ...",
            desc: "Syarat Fatihah (10): Tertib, Muwalah (bersambung), Jaga huruf, Jaga tasydid, Tidak saktah lama, Qiraah semua ayat (termasuk Basmalah), Tidak alhan (salah baca merubah makna), Berdiri, Dengar sendiri, Tidak diselang dzikir ajnabi."
        },
        {
            title: "17. Tasydid Al-Fatihah",
            arabic: "تَشْدِيدَاتُ الْفَاتِحَةِ أَرْبَعَ عَشْرَةَ...",
            desc: "Tasydid Fatihah (14): Bismillah (3), Alhamdu (1), Arrahmanirrahim (2), Maliki (0), Iyyaka (2), Ihdina (0), Shirath (0), Alladzina (1), etc."
        },
        {
            title: "18. Waktu Sholat",
            arabic: "أَوْقَاتُ الصَّلَاةِ خَمْسَةٌ: أَوَّلُ وَقْتِ الظُّهْرِ زَوَالُ الشَّمْسِ...",
            desc: "Dzuhur: Tergelincir matahari s.d bayangan sama dg benda. Ashar: Bayangan lebih sedikit s.d terbenam. Maghrib: Terbenam s.d hilang mega merah. Isya: Hilang mega merah s.d terbit fajar shadiq. Subuh: Terbit fajar shadiq s.d terbit matahari."
        },
        {
            title: "19. Waktu Haram Sholat",
            arabic: "تَحْرُمُ الصَّلَاةُ الَّتِي لَيْسَ لَهَا سَبَبٌ مُتَقَدِّمٌ وَلَا مُقَارِنٌ فِي خَمْسَةِ أَوْقَاتٍ...",
            desc: "Haram Sholat (Tanpa sebab): (1) Saat terbit matahari s.d sepenggalah, (2) Saat istiwa (tengah hari) kecuali Jumat, (3) Saat menguning s.d terbenam, (4) Setelah Subuh, (5) Setelah Ashar."
        },
        {
            title: "20. Sunnah Ab'ad",
            arabic: "سُنَنُ الْأَبْعَاضِ سَبْعَةٌ: التَّشَهُّدُ الْأَوَّلُ، وَقُعُودُهُ، وَالصَّلَاةُ عَلَى النَّبِيِّ فِيهِ...",
            desc: "Sunnah Ab'ad (7): Tasyahud Awal, Duduknya, Shalawat di Tasyahud Awal, Shalawat Keluarga Nabi di Tasyahud Akhir, Qunut, Berdiri Qunut, Shalawat Salam di Qunut."
        },
        {
            title: "21. Pembatal Sholat",
            arabic: "تَبْطُلُ الصَّلَاةُ بِأَرْبَعَةَ عَشَرَ خَصْلَةً: بِالْحَدَثِ...",
            desc: "Batal Sholat (14): Hadats, Kena Najis, Terbuka Aurat, Bicara 2 huruf/memahamkan, Makan/Minum banyak, Gerak 3x berturut, Lompat, Pukul keras, Tambah rukun fi'li, Mendahului/Tertinggal Imam 2 rukun, Niat batal, Ta'liq batal, Ragu-ragu."
        },
        {
            title: "22. Syarat Jama'",
            arabic: "شُرُوطُ جَمْعِ التَّقْدِيمِ أَرْبَعَةٌ: الْبُدَاءَةُ بِالْأُولَى، وَنِيَّةُ الْجَمْعِ، وَالْمُوَالَاةُ، وَدَوَامُ الْعُذْرِ",
            desc: "Jama' Taqdim (4): Mulai yg pertama, Niat Jama', Muwalah (bersambung), Masih udzur. Jama' Ta'khir (2): Niat jama' di waktu pertama, Masih udzur."
        },
        {
            title: "23. Syarat Qashar",
            arabic: "شُرُوطُ الْقَصْرِ سَبْعَةٌ: أَنْ يَكُونَ سَفَرُهُ مَرْحَلَتَيْنِ...",
            desc: "Qashar (7): Perjalanan 2 marhalah (±82km), Safar mubah, Tahu hukumnya, Niat Qashar saat takbir, Sholat 4 rakaat, Terus musafir, Tidak makmum pada muqim."
        },
        {
            title: "24. Kewajiban Terhadap Mayit",
            arabic: "يَلْزَمُ فِي الْمَيِّتِ أَرْبَعَةُ أَشْيَاءَ: غُسْلُهُ، وَتَكْفِينُهُ، وَالصَّلَاةُ عَلَيْهِ، وَدَفْنُهُ",
            desc: "Kewajiban (4): Memandikan, Mengkafani, Mensholatkan, Menguburkan."
        },
        {
            title: "25. Rukun Sholat Jenazah",
            arabic: "أَرْكَانُ صَلَاةِ الْجَنَازَةِ سَبْعَةٌ: النِّيَّةُ، وَأَرْبَعُ تَكْبِيرَاتٍ...",
            desc: "Rukun Sholat Jenazah (7): Niat, 4 Takbir, Berdiri, Fatihah, Shalawat, Doa Mayit, Salam."
        },
        {
            title: "26. Harta Wajib Zakat",
            arabic: "تَجِبُ الزَّكَاةُ فِي خَمْسَةِ أَشْيَاءَ: الْمَوَاشِي، وَالْأَثْمَانِ، وَالزُّرُوعِ، وَالثِّمَارِ، وَعُرُوضِ التِّجَارَةِ",
            desc: "Harta Wajib Zakat (5): Ternak, Emas/Perak (Uang), Tanaman Pokok, Buah (Kurma/Anggur), Dagangan."
        },
        {
            title: "27. Wajib Puasa Ramadhan",
            arabic: "تَجِبُ صِيَامُ رَمَضَانَ بِأَحَدِ أُمُورٍ خَمْسَةٍ: كَمَالُ شَعْبَانَ ثَلَاثِينَ يَوْمًا...",
            desc: "Wajib Puasa (5 sebab): Sempurna Sya'ban 30 hari, Melihat hilal, Ada saksi adil melihat hilal, Kabar mutawatir, Dzan masuk waktu."
        },
        {
            title: "28. Syarat Sah Puasa",
            arabic: "شُرُوطُ صِحَّتِهِ أَرْبَعَةٌ: إِسْلَامٌ، وَعَقْلٌ، وَنَقَاءٌ مِنْ نَحْوِ حَيْضٍ، وَعِلْمٌ بِكَوْنِ الْوَقْتِ قَابِلًا لِلصَّوْمِ",
            desc: "Syarat Sah Puasa (4): Islam, Berakal, Suci Haid/Nifas, Waktu yang membolehkan puasa (bukan hari raya/tasyrik)."
        },
        {
            title: "29. Rukun Puasa",
            arabic: "أَرْكَانُهُ ثَلَاثَةٌ: نِيَّةٌ لَيْلًا... وَتَرْكُ مُفْطِرٍ... وَصَائِمٌ",
            desc: "Rukun Puasa (3): Niat di malam hari (utk wajib), Menahan diri dari pembatal, Orang yang berpuasa."
        },
        {
            title: "30. Pembatal Puasa",
            arabic: "الْمُفْطِرَاتُ: عَشَرَةٌ... مَا وَصَلَ عَمْدًا إِلَى الْجَوْفِ...",
            desc: "Pembatal Puasa: Masuk sesuatu ke rongga (jauf) sengaja, Muntah sengaja, Jima', Keluar mani sengaja, Haid, Nifas, Gila, Murtad."
        }
    ];

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Book className="w-8 h-8 text-yellow-600" />
                    Kitab Kuning
                </h1>
                <p className="text-slate-500 mt-2">Dasar ilmu Nahwu (Jurumiyah), Sorof (Amtsilah), dan Fiqih (Safinatun Najah).</p>

                <div className="flex gap-4 mt-6 border-b border-slate-200 overflow-x-auto pb-1">
                    <button
                        onClick={() => setActiveTab('nahwu')}
                        className={`pb-2 px-1 font-medium text-sm transition-colors relative whitespace-nowrap ${activeTab === 'nahwu' ? 'text-primary-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Nahwu (Jurumiyah)
                        {activeTab === 'nahwu' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-t-full" />}
                    </button>
                    <button
                        onClick={() => setActiveTab('sorof')}
                        className={`pb-2 px-1 font-medium text-sm transition-colors relative whitespace-nowrap ${activeTab === 'sorof' ? 'text-primary-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Sorof (Amtsilah)
                        {activeTab === 'sorof' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-t-full" />}
                    </button>
                    <button
                        onClick={() => setActiveTab('fiqih')}
                        className={`pb-2 px-1 font-medium text-sm transition-colors relative whitespace-nowrap ${activeTab === 'fiqih' ? 'text-primary-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Fiqih (Safinatun Najah)
                        {activeTab === 'fiqih' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-t-full" />}
                    </button>
                </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 min-h-[400px]">
                {/* NAHWU TAB */}
                {activeTab === 'nahwu' && (
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Sidebar Menu for Chapters */}
                        <div className="space-y-2 md:col-span-1 border-r border-slate-100 pr-4 max-h-[500px] overflow-y-auto custom-scrollbar">
                            {nahwuChapters.map((chapter, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedBab(idx)}
                                    className={`w-full text-left p-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${selectedBab === idx ? 'bg-yellow-50 text-yellow-700' : 'text-slate-600 hover:bg-slate-50'}`}
                                >
                                    <span className="truncate mr-2">{chapter.title}</span>
                                    {selectedBab === idx && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="md:col-span-2 space-y-6">
                            <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-2">{nahwuChapters[selectedBab].title}</h2>

                            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                                <p className="font-arabic text-2xl leading-loose text-right text-slate-800" dir="rtl">
                                    {nahwuChapters[selectedBab].arabic}
                                </p>
                            </div>

                            <div className="prose prose-slate">
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {nahwuChapters[selectedBab].desc}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* SOROF TAB */}
                {activeTab === 'sorof' && (
                    <div className="space-y-8">
                        {/* Sorof Tabs */}
                        <div className="flex gap-2 p-1 bg-slate-100 rounded-lg w-fit">
                            <button
                                onClick={() => setSorofSubTab('istilahi')}
                                className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${sorofSubTab === 'istilahi' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Tashrif Istilahi
                            </button>
                            <button
                                onClick={() => setSorofSubTab('lughawi')}
                                className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${sorofSubTab === 'lughawi' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Tashrif Lughawi
                            </button>
                        </div>

                        {sorofSubTab === 'istilahi' ? (
                            <div>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">Wazan Tashrif Istilahi (Bab 1)</h2>
                                <p className="text-slate-500 mb-4">Perubahan kata berdasarkan bentuk/shighot.</p>
                                <div className="overflow-x-auto pb-4">
                                    <table className="min-w-max text-center border-collapse border border-slate-200 rounded-lg">
                                        <thead className="bg-primary-50 text-primary-800">
                                            <tr>
                                                <th className="p-3 border text-xs uppercase tracking-wider">Isim Alat</th>
                                                <th className="p-3 border text-xs uppercase tracking-wider">Isim Makan</th>
                                                <th className="p-3 border text-xs uppercase tracking-wider">Isim Zaman</th>
                                                <th className="p-3 border text-xs uppercase tracking-wider">Fi'il Nahi</th>
                                                <th className="p-3 border text-xs uppercase tracking-wider">Fi'il Amr</th>
                                                <th className="p-3 border text-xs uppercase tracking-wider">Isim Maf'ul</th>
                                                <th className="p-3 border text-xs uppercase tracking-wider">Isim Fa'il</th>
                                                <th className="p-3 border text-xs uppercase tracking-wider">Masdar Mim</th>
                                                <th className="p-3 border text-xs uppercase tracking-wider">Masdar</th>
                                                <th className="p-3 border text-xs uppercase tracking-wider">Fi'il Mudhari</th>
                                                <th className="p-3 border text-xs uppercase tracking-wider">Fi'il Madhi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-3 border font-arabic text-xl font-bold">مِفْعَلٌ</td>
                                                <td className="p-3 border font-arabic text-xl font-bold">مَفْعَلٌ</td>
                                                <td className="p-3 border font-arabic text-xl font-bold">مَفْعَلٌ</td>
                                                <td className="p-3 border font-arabic text-xl font-bold">لَا تَفْعُلْ</td>
                                                <td className="p-3 border font-arabic text-xl font-bold">اُفْعُلْ</td>
                                                <td className="p-3 border font-arabic text-xl font-bold">مَفْعُوْلٌ</td>
                                                <td className="p-3 border font-arabic text-xl font-bold">فَاعِلٌ</td>
                                                <td className="p-3 border font-arabic text-xl font-bold">مَفْعَلًا</td>
                                                <td className="p-3 border font-arabic text-xl font-bold">فَعْلًا</td>
                                                <td className="p-3 border font-arabic text-xl font-bold">يَفْعُلُ</td>
                                                <td className="p-3 border font-arabic text-xl font-bold">فَعَلَ</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 border font-arabic text-xl text-primary-600">مَنْصَرٌ</td>
                                                <td className="p-3 border font-arabic text-xl text-primary-600">مَنْصَرٌ</td>
                                                <td className="p-3 border font-arabic text-xl text-primary-600">مَنْصَرٌ</td>
                                                <td className="p-3 border font-arabic text-xl text-primary-600">لَا تَنْصُرْ</td>
                                                <td className="p-3 border font-arabic text-xl text-primary-600">اُنْصُرْ</td>
                                                <td className="p-3 border font-arabic text-xl text-primary-600">مَنْصُوْرٌ</td>
                                                <td className="p-3 border font-arabic text-xl text-primary-600">نَاصِرٌ</td>
                                                <td className="p-3 border font-arabic text-xl text-primary-600">مَنْصَرًا</td>
                                                <td className="p-3 border font-arabic text-xl text-primary-600">نَصْرًا</td>
                                                <td className="p-3 border font-arabic text-xl text-primary-600">يَنْصُرُ</td>
                                                <td className="p-3 border font-arabic text-xl text-primary-600">نَصَرَ</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-800 mb-4">Tashrif Fi'il Madhi</h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-50 border-b border-slate-200">
                                                    <th className="p-2 font-semibold text-slate-600 text-sm">Dhamir</th>
                                                    <th className="p-2 font-semibold text-slate-600 text-right text-sm">Lafadz</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                <tr><td className="p-2 text-sm">Huwa</td><td className="p-2 text-right font-arabic font-bold">نَصَرَ</td></tr>
                                                <tr><td className="p-2 text-sm">Huma</td><td className="p-2 text-right font-arabic font-bold">نَصَرَا</td></tr>
                                                <tr><td className="p-2 text-sm">Hum</td><td className="p-2 text-right font-arabic font-bold">نَصَرُوْا</td></tr>
                                                <tr><td className="p-2 text-sm">Hiya</td><td className="p-2 text-right font-arabic font-bold">نَصَرَتْ</td></tr>
                                                <tr><td className="p-2 text-sm">Huma</td><td className="p-2 text-right font-arabic font-bold">نَصَرَتَا</td></tr>
                                                <tr><td className="p-2 text-sm">Hunna</td><td className="p-2 text-right font-arabic font-bold">نَصَرْنَ</td></tr>
                                                <tr><td className="p-2 text-sm">Anta</td><td className="p-2 text-right font-arabic font-bold">نَصَرْتَ</td></tr>
                                                <tr><td className="p-2 text-sm">Antuma</td><td className="p-2 text-right font-arabic font-bold">نَصَرْتُمَا</td></tr>
                                                <tr><td className="p-2 text-sm">Antum</td><td className="p-2 text-right font-arabic font-bold">نَصَرْتُمْ</td></tr>
                                                <tr><td className="p-2 text-sm">Anti</td><td className="p-2 text-right font-arabic font-bold">نَصَرْتِ</td></tr>
                                                <tr><td className="p-2 text-sm">Antuma</td><td className="p-2 text-right font-arabic font-bold">نَصَرْتُمَا</td></tr>
                                                <tr><td className="p-2 text-sm">Antunna</td><td className="p-2 text-right font-arabic font-bold">نَصَرْتُنَّ</td></tr>
                                                <tr><td className="p-2 text-sm">Ana</td><td className="p-2 text-right font-arabic font-bold">نَصَرْتُ</td></tr>
                                                <tr><td className="p-2 text-sm">Nahnu</td><td className="p-2 text-right font-arabic font-bold">نَصَرْنَا</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-slate-800 mb-4">Tashrif Fi'il Mudhari</h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-50 border-b border-slate-200">
                                                    <th className="p-2 font-semibold text-slate-600 text-sm">Dhamir</th>
                                                    <th className="p-2 font-semibold text-slate-600 text-right text-sm">Lafadz</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                <tr><td className="p-2 text-sm">Huwa</td><td className="p-2 text-right font-arabic font-bold">يَنْصُرُ</td></tr>
                                                <tr><td className="p-2 text-sm">Huma</td><td className="p-2 text-right font-arabic font-bold">يَنْصُرَانِ</td></tr>
                                                <tr><td className="p-2 text-sm">Hum</td><td className="p-2 text-right font-arabic font-bold">يَنْصُرُوْنَ</td></tr>
                                                <tr><td className="p-2 text-sm">Hiya</td><td className="p-2 text-right font-arabic font-bold">تَنْصُرُ</td></tr>
                                                <tr><td className="p-2 text-sm">Huma</td><td className="p-2 text-right font-arabic font-bold">تَنْصُرَانِ</td></tr>
                                                <tr><td className="p-2 text-sm">Hunna</td><td className="p-2 text-right font-arabic font-bold">يَنْصُرْنَ</td></tr>
                                                <tr><td className="p-2 text-sm">Anta</td><td className="p-2 text-right font-arabic font-bold">تَنْصُرُ</td></tr>
                                                <tr><td className="p-2 text-sm">Antuma</td><td className="p-2 text-right font-arabic font-bold">تَنْصُرَانِ</td></tr>
                                                <tr><td className="p-2 text-sm">Antum</td><td className="p-2 text-right font-arabic font-bold">تَنْصُرُوْنَ</td></tr>
                                                <tr><td className="p-2 text-sm">Anti</td><td className="p-2 text-right font-arabic font-bold">تَنْصُرِيْنَ</td></tr>
                                                <tr><td className="p-2 text-sm">Antuma</td><td className="p-2 text-right font-arabic font-bold">تَنْصُرَانِ</td></tr>
                                                <tr><td className="p-2 text-sm">Antunna</td><td className="p-2 text-right font-arabic font-bold">تَنْصُرْنَ</td></tr>
                                                <tr><td className="p-2 text-sm">Ana</td><td className="p-2 text-right font-arabic font-bold">أَنْصُرُ</td></tr>
                                                <tr><td className="p-2 text-sm">Nahnu</td><td className="p-2 text-right font-arabic font-bold">نَنْصُرُ</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* FIQIH (Safinatun Najah) TAB */}
                {activeTab === 'fiqih' && (
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Sidebar Menu for Fiqih Chapters */}
                        <div className="space-y-2 md:col-span-1 border-r border-slate-100 pr-4 max-h-[500px] overflow-y-auto custom-scrollbar">
                            {fiqihChapters.map((chapter, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedFiqihBab(idx)}
                                    className={`w-full text-left p-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${selectedFiqihBab === idx ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
                                >
                                    <span className="truncate mr-2">{chapter.title}</span>
                                    {selectedFiqihBab === idx && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
                                </button>
                            ))}
                        </div>

                        {/* Fiqih Content */}
                        <div className="md:col-span-2 space-y-6">
                            <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-2">{fiqihChapters[selectedFiqihBab].title}</h2>

                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                <p className="font-arabic text-2xl leading-loose text-right text-slate-800" dir="rtl">
                                    {fiqihChapters[selectedFiqihBab].arabic}
                                </p>
                            </div>

                            <div className="prose prose-slate">
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {fiqihChapters[selectedFiqihBab].desc}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Kitab;
