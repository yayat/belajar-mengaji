import React, { useState } from 'react';
import { Sparkles, X, BookOpen, Clock } from 'lucide-react';

const Sunnah = () => {
    const [selectedPrayer, setSelectedPrayer] = useState(null);

    const prayers = [
        {
            title: "Sholat Rawatib",
            desc: "Sholat yang dikerjakan sebelum dan sesudah sholat fardhu.",
            hasDetail: true
        },
        {
            title: "Sholat Dhuha",
            desc: "Sholat yang dikerjakan pada waktu matahari naik (pagi hari).",
            hasDetail: true
        },
        {
            title: "Sholat Tahajud",
            desc: "Sholat malam yang dikerjakan setelah tidur.",
            hasDetail: true
        },
        {
            title: "Sholat Witir",
            desc: "Sholat penutup sholat malam dengan rakaat ganjil.",
            hasDetail: true
        },
        {
            title: "Sholat Istikharah",
            desc: "Sholat memohon petunjuk pilihan terbaik.",
            hasDetail: true
        },
        {
            title: "Sholat Hajat",
            desc: "Sholat memohon dikabulkan keinginan/hajat.",
            hasDetail: true
        },
    ];

    const rawatibDetails = {
        title: "Panduan Sholat Rawatib",
        desc: "Sholat sunnah yang mengiringi sholat fardhu (lima waktu). Terbagi menjadi Muakkad (sangat dianjurkan) dan Ghairu Muakkad.",
        muakkad: [
            "2 Rakaat sebelum Subuh",
            "2 atau 4 Rakaat sebelum Dzuhur",
            "2 Rakaat sesudah Dzuhur",
            "2 Rakaat sesudah Maghrib",
            "2 Rakaat sesudah Isya"
        ],
        ghairu: [
            "2 atau 4 Rakaat sebelum Ashar",
            "2 Rakaat sebelum Maghrib",
            "2 Rakaat sebelum Isya"
        ],
        niat: [
            {
                label: "Niat Qobliyah (Sebelum)",
                arabic: "أُصَلِّيْ سُنَّةَ ... رَكْعَتَيْنِ قَبْلِيَّةً لِلَّهِ تَعَالَى",
                latin: "Ushalli sunnata [Nama Sholat] rak'ataini qobliyyatan lillahi ta'ala",
                artinya: "Aku niat sholat sunnah qobliyah [Nama Sholat] 2 rakaat karena Allah Ta'ala."
            },
            {
                label: "Niat Ba'diyah (Sesudah)",
                arabic: "أُصَلِّيْ سُنَّةَ ... رَكْعَتَيْنِ بَعْدِيَّةً لِلَّهِ تَعَالَى",
                latin: "Ushalli sunnata [Nama Sholat] rak'ataini ba'diyyatan lillahi ta'ala",
                artinya: "Aku niat sholat sunnah ba'diyah [Nama Sholat] 2 rakaat karena Allah Ta'ala."
            }
        ],
        doa: {
            title: "Doa Setelah Sholat Sunnah",
            arabic: "اَللّٰهُمَّ أَعِنِّيْ عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
            latin: "Allahumma a'inni 'ala dzikrika wa syukrika wa husni 'ibadatik.",
            artinya: "Ya Allah, tolonglah aku agar selalu berdzikir/mengingat-Mu, bersyukur pada-Mu, dan memperbaiki ibadah kepada-Mu."
        }
    };

    const dhuhaDetails = {
        title: "Panduan Sholat Dhuha",
        desc: "Sholat sunnah yang dikerjakan pada waktu Dhuha (pagi hari saat matahari mulai naik sepenggalah/setombak). Paling sedikit 2 rakaat, paling banyak 12 rakaat (atau 8 rakaat menurut riwayat lain).",
        niat: {
            label: "Niat Sholat Dhuha",
            arabic: "أُصَلِّيْ سُنَّةَ الضُّحَى رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
            latin: "Ushalli sunnatad dhuhaa rak'ataini lillahi ta'ala",
            artinya: "Aku niat sholat sunnah dhuha 2 rakaat karena Allah Ta'ala."
        },
        doa: {
            title: "Doa Sholat Dhuha",
            arabic: "اَللّٰهُمَّ إِنَّ الضُّحَآءَ ضُحَاءُكَ، وَالْبَهَاءَ بَهَاءُكَ، وَالْجَمَالَ جَمَالُكَ، وَالْقُوَّةَ قُوَّتُكَ، وَالْقُدْرَةَ قُدْرَتُكَ، وَالْعِصْمَةَ عِصْمَتُكَ. اَللّٰهُمَّ إِنْ كَانَ رِزْقِيْ فِي السَّمَآءِ فَأَنْزِلْهُ، وَإِنْ كَانَ فِي الْأَرْضِ فَأَخْرِجْهُ، وَإِنْ كَانَ مُعْسَرًا فَيَسِّرْهُ، وَإِنْ كَانَ حَرَامًا فَطَهِّرْهُ، وَإِنْ كَانَ بَعِيْدًا فَقَرِّبْهُ، بِحَقِّ ضُحَاءِكَ وَبَهَاءِكَ وَجَمَالِكَ وَقُوَّتِكَ وَقُدْرَتِكَ آتِنِيْ مَا آتَيْتَ عِبَادَكَ الصَّالِحِيْنَ",
            latin: "Allahumma innad dhuha-a dhuha-uka, wal baha-a baha-uka, wal jamala jamaluka, wal quwwata quwwatuka, wal qudrata qudratuka, wal 'ishmata 'ishmatuka. Allahumma in kana rizqi fis sama-i fa anzilhu, wa in kana fil ardhi fa akhrijhu, wa in kana mu'saran fa yassirhu, wa in kana haraman fa thahhirhu, wa in kana ba'idan fa qarribhu, bi haqqi dhuha-ika wa baha-ika wa jamalika wa quwwatika wa qudratika, atini ma ataita 'ibadakas shalihin.",
            artinya: "Ya Allah, sesungguhnya waktu dhuha adalah waktu dhuha-Mu, keagungan adalah keagungan-Mu, keindahan adalah keindahan-Mu, kekuatan adalah kekuatan-Mu, kekuasaan adalah kekuasaan-Mu, dan penjagaan adalah penjagaan-Mu. Ya Allah, jika rezekiku masih di atas langit maka turunkanlah, jika ada di dalam bumi maka keluarkanlah, jika sukar maka mudahkanlah, jika haram maka sucikanlah, jika masih jauh maka dekatkanlah, berkat waktu dhuha, keagungan, keindahan, kekuatan dan kekuasaan-Mu, limpahkanlah kepada kami segala yang telah Engkau limpahkan kepada hamba-hamba-Mu yang sholeh."
        }
    };

    const tahajudDetails = {
        title: "Panduan Sholat Tahajud",
        desc: "Sholat sunnah yang dikerjakan pada malam hari setelah tidur, minimal 2 rakaat.",
        niat: {
            label: "Niat Sholat Tahajud",
            arabic: "أُصَلِّيْ سُنَّةَ التَّهَجُّدِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
            latin: "Ushalli sunnatat tahajjudi rak'ataini lillahi ta'ala",
            artinya: "Aku niat sholat sunnah tahajud 2 rakaat karena Allah Ta'ala."
        },
        doa: {
            title: "Doa Sholat Tahajud",
            arabic: "اَللّٰهُمَّ لَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيْهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ مَلِكُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيْهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ نُوْرُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيْهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ الْحَقُّ، وَوَعْدُكَ الْحَقُّ، وَلِقَاؤُكَ حَقٌّ، وَقَوْلُكَ حَقٌّ، وَالْجَنَّةُ حَقٌّ، وَالنَّارُ حَقٌّ، وَالنَّبِيُّوْنَ حَقٌّ، وَمُحَمَّدٌ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ حَقٌّ، وَالسَّاعَةُ حَقٌّ. اَللّٰهُمَّ لَكَ أَسْلَمْتُ، وَبِكَ آمَنْتُ، وَعَلَيْكَ تَوَكَّلْتُ، وَإِلَيْكَ أَنَبْتُ، وَبِكَ خَاصَمْتُ، وَإِلَيْكَ حَاكَمْتُ، فَاغْفِرْ لِيْ مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّيْ. أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ، لَا إِلَهَ إِلَّا أَنْتَ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ",
            latin: "Allahumma lakal hamdu anta qayyimus samawati wal ardhi wa man fihinna, wa lakal hamdu anta malikus samawati wal ardhi wa man fihinna, wa lakal hamdu anta nurus samawati wal ardhi wa man fihinna, wa lakal hamdu antal haq, wa wa'dukal haq, wa liqa'uka haq, wa qauluka haq, wa jannatu haq, wan naaru haq, wan nabiyyuna haq, wa Muhammadun shallallahu 'alaihi wa sallama haq, was sa'atu haq. Allahumma laka aslamtu, wa bika amantu, wa 'alaika tawakkaltu, wa ilaika anabtu, wa bika khashamtu, wa ilaika hakamtu, faghfirli ma qaddamtu, wa ma akhkhartu, wa ma asrartu, wa ma a'lantu, wa ma anta a'lamu bihi minni. Antal muqaddimu wa antal muakhkhiru, la ilaha illa anta, wa la haula wa la quwwata illa billah.",
            artinya: "Ya Allah, bagi-Mu segala puji, Engkaulah Penegak langit dan bumi serta isinya. Bagi-Mu segala puji, Engkaulah Raja langit dan bumi serta isinya. Bagi-Mu segala puji, Engkaulah Cahaya langit dan bumi serta isinya. Bagi-Mu segala puji, Engkaulah Yang Benar, janji-Mu benar, pertemuan dengan-Mu benar, firman-Mu benar, surga itu benar, neraka itu benar, para nabi itu benar, Muhammad SAW itu benar, dan kiamat itu benar. Ya Allah, kepada-Mu aku berserah diri, kepada-Mu aku beriman, kepada-Mu aku bertawakal, kepada-Mu aku kembali, dengan-Mu aku berhujjah, dan kepada-Mu aku berhukum. Maka ampunilah dosaku yang telah lalu dan yang akan datang, yang aku sembunyikan dan yang aku nyatakan, dan apa yang Engkau lebih mengetahuinya daripada aku. Engkaulah Yang Mendahulukan dan Engkaulah Yang Mengakhirkan, tidak ada Tuhan selain Engkau, dan tidak ada daya serta kekuatan kecuali dengan pertolongan Allah."
        }
    };

    const witirDetails = {
        title: "Panduan Sholat Witir",
        desc: "Sholat sunnah yang dikerjakan sebagai penutup sholat malam dengan jumlah rakaat ganjil (1, 3, 5, dst). Biasa dikerjakan 3 rakaat (2 salam atau 1 salam).",
        niat: [
            {
                label: "Niat Sholat Witir 2 Rakaat",
                arabic: "أُصَلِّيْ سُنَّةَ مِنَ الْوِتْرِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
                latin: "Ushalli sunnatan minal witri rak'ataini lillahi ta'ala",
                artinya: "Aku niat sholat sunnah sebagian dari witir 2 rakaat karena Allah Ta'ala."
            },
            {
                label: "Niat Sholat Witir 1 Rakaat",
                arabic: "أُصَلِّيْ سُنَّةَ الْوِتْرِ رَكْعَةً لِلَّهِ تَعَالَى",
                latin: "Ushalli sunnatal witri rak'atan lillahi ta'ala",
                artinya: "Aku niat sholat sunnah witir 1 rakaat karena Allah Ta'ala."
            }
        ],
        qunut: {
            title: "Doa Qunut (Akhir Ramadhan)",
            arabic: "اَللّٰهُمَّ اهْدِنَا فِيْمَنْ هَدَيْتَ، وَعَافِنَا فِيْمَنْ عَافَيْتَ، وَتَوَلَّنَا فِيْمَنْ تَوَلَّيْتَ، وَبَارِكْ لَنَا فِيْمَا أَعْطَيْتَ، وَقِنَا شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِيْ وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ، فَلَكَ الْحَمْدُ عَلَى مَا قَضَيْتَ، نَسْتَغْفِرُكَ وَنَتُوْبُ إِلَيْكَ، وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ النَّبِيِّ الْأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
            latin: "Allahummahdinaa fiiman hadait, wa 'aafinaa fiiman 'aafait, wa tawallanaa fiiman tawallait, wa baarik lanaa fiimaa a'thait, wa qinaa syarra maa qadhait, fa innaka taqdhii wa laa yuqdhaa 'alaik, wa innahu laa yadzillu man waalait, wa laa ya'izzu man 'Aadait, tabaarakta rabbanaa wa ta'aalait, fa lakal hamdu 'alaa maa qadhait, nastaghfiruka wa natuubu ilaik, wa shallallaahu 'alaa sayyidinaa Muhammadin nabiyyil ummiyyi wa 'alaa aalihi wa shahbihi wa sallam.",
            artinya: "Ya Allah, berilah kami petunjuk sebagaimana orang-orang yang telah Engkau beri petunjuk, berilah kami keselamatan sebagaimana orang-orang yang telah Engkau beri keselamatan, jadikanlah kami (orang-orang yang Engkau kasihi) sebagaimana orang-orang yang Engkau jadikan kasih sayang, berkahilah kami pada apa-apa yang telah Engkau berikan (kepada kami), jagalah kami dari keburukan apa-apa yang telah Engkau tetapkan, sesungguhnya Engkaulah yang menetapkan dan tidak ada yang menetapkan bagi-Mu, sesungguhnya tidak akan hina orang yang Engkau kasihi, dan tidak akan mulia orang yang Engkau musuhi, Maha Suci Engkau wahai Tuhan kami dan Maha Tinggi Engkau. Segala puji bagi-Mu atas apa yang telah Engkau tetapkan, kami memohon ampun kepada-Mu dan kami bertaubat kepada-Mu, dan semoga Allah melimpahkan rahmat kepada Nabi Muhammad SAW dan keluarganya serta sahabatnya."
        },
        doa: {
            title: "Doa Sholat Witir",
            arabic: "اَللّٰهُمَّ إِنَّا نَسْأَلُكَ إِيْمَانًا دَائِمًا، وَنَسْأَلُكَ قَلْبًا خَاشِعًا، وَنَسْأَلُكَ عِلْمًا نَافِعًا، وَنَسْأَلُكَ يَقِيْنًا صَادِقًا، وَنَسْأَلُكَ عَمَلًا صَالِحًا، وَنَسْأَلُكَ دِيْنًا قَيِّمًا، وَنَسْأَلُكَ خَيْرًا كَثِيْرًا، وَنَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ، وَنَسْأَلُكَ تَمَامَ الْعَافِيَةِ، وَنَسْأَلُكَ الشُّكْرَ عَلَى الْعَافِيَةِ، وَنَسْأَلُكَ الْغِنَى عَنِ النَّاسِ. اَللّٰهُمَّ رَبَّنَا تَقَبَّلْ مِنَّا صَلَاتَنَا وَصِيَامَنَا وَقِيَامَنَا وَتَخُشُّعَنَا وَتَضَرُّعَنَا وَتَعَبُّدَنَا وَتَمِّمْ تَقْصِيْرَنَا يَا اَللّٰهُ يَا اَللّٰهُ يَا اَللّٰهُ يَا أَرْحَمَ الرَّاحِمِيْنَ",
            latin: "Allahumma inna nas'aluka imanan da'iman, wa nas'aluka qalban khasyi'an, wa nas'aluka 'ilman nafi'an, wa nas'aluka yaqinan shadiqan, wa nas'aluka 'amalan shalihan, wa nas'aluka dinan qayyiman, wa nas'aluka khairan katsiran, wa nas'aluka al-'afwa wal-'afiyah, wa nas'aluka tamamal 'afiyah, wa nas'aluka asy-syukra 'alal 'afiyah, wa nas'aluka al-ghina 'anin nas. Allahumma rabbana taqabbal minna shalatana wa shiyamana wa qiyamana wa takhasysyu'ana wa tadharru'ana wa ta'abbudana wa tammim taqshirana ya Allah ya Allah ya Allah ya Arhamar Rahimin.",
            artinya: "Ya Allah, kami memohon kepada-Mu iman yang langgeng, hati yang khusyuk, ilmu yang bermanfaat, keyakinan yang benar, amal yang shaleh, agama yang lurus, kebaikan yang banyak. Kami memohon ampunan dan kesehatan, kesehatan yang sempurna, rasa syukur atas kesehatan, dan kecukupan dari bantuan manusia. Ya Allah, Tuhan kami, terimalah sholat kami, puasa kami, sholat malam kami, kekhusyukan kami, kerendahan hati kami, dan ibadah kami. Sempurnakanlah kekurangan kami, ya Allah, ya Allah, ya Allah, Wahai Dzat Yang Maha Penyayang di antara para penyayang."
        }
    };

    const istikharahDetails = {
        title: "Panduan Sholat Istikharah",
        desc: "Sholat sunnah dua rakaat untuk memohon petunjuk kepada Allah SWT ketika dihadapkan pada pilihan yang membingungkan atau berat.",
        niat: {
            label: "Niat Sholat Istikharah",
            arabic: "أُصَلِّيْ سُنَّةَ الاِسْتِخَارَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
            latin: "Ushalli sunnatal istikhaarati rak'ataini lillahi ta'ala",
            artinya: "Aku niat sholat sunnah istikharah 2 rakaat karena Allah Ta'ala."
        },
        doa: {
            title: "Doa Sholat Istikharah",
            arabic: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلاَ أَقْدِرُ وَتَعْلَمُ وَلاَ أَعْلَمُ وَأَنْتَ عَلاَّمُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِي الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ",
            latin: "Allahumma inni astakhiruka bi 'ilmika, wa astaqdiruka bi qudratika, wa as-aluka min fadhlika, fa innaka taqdiru wa laa aqdiru, wa ta'lamu wa laa a'lamu, wa anta 'allaamul ghuyub. Allahumma fa in kunta ta'lamu hadzal amra (sebutkan urusannya) khairun lii fii diinii wa ma'aasyii wa 'aaqibati amrii, faqdurhu lii wa yassirhu lii tsumma baarik lii fiih. Wa in kunta ta'lamu annahu syarrun lii fii diinii wa ma'aasyii wa 'aaqibati amrii, fashrifhu 'annii washrifnii 'anhu waqdur liyal khaira haitsu kaana tsumma ardhinii bih.",
            artinya: "Ya Allah, sesungguhnya aku memohon petunjuk kepada-Mu dengan ilmu-Mu, memohon kemampuan dengan kekuasaan-Mu, dan aku memohon karunia-Mu yang agung, karena sesungguhnya Engkau Mahakuasa sedang aku tidak berkuasa, Engkau Maha Mengetahui sedang aku tidak mengetahui, dan Engkaulah Yang Maha Mengetahui hal-hal yang ghaib. Ya Allah, jika Engkau mengetahui bahwa urusan ini (sebutkan urusannya) baik bagiku dalam agamaku, kehidupanku, dan akibat urusanku, maka takdirkanlah ia untukku, mudahkanlah ia untukku, kemudian berkahilah aku di dalamnya. Dan jika Engkau mengetahui bahwa urusan ini buruk bagiku dalam agamaku, kehidupanku, dan akibat urusanku, maka palingkanlah ia dariku, dan palingkanlah aku darinya, dan takdirkanlah kebaikan untukku di mana saja kebaikan itu berada, kemudian ridhailah aku dengannya."
        }
    };

    const hajatDetails = {
        title: "Panduan Sholat Hajat",
        desc: "Sholat sunnah yang dikerjakan karena mempunyai keinginan/hajat tertentu agar dikabulkan oleh Allah SWT. Minimal 2 rakaat s/d 12 rakaat.",
        niat: {
            label: "Niat Sholat Hajat",
            arabic: "أُصَلِّيْ سُنَّةَ الْحَاجَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
            latin: "Ushalli sunnatal haajati rak'ataini lillahi ta'ala",
            artinya: "Aku niat sholat sunnah hajat 2 rakaat karena Allah Ta'ala."
        },
        doa: {
            title: "Doa Sholat Hajat",
            arabic: "لَا إِلَهَ إِلَّا اللهُ الْحَلِيْمُ الْكَرِيْمُ، سُبْحَانَ اللهِ رَبِّ الْعَرْشِ الْعَظِيْمِ، الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِيْنَ، أَسْأَلُكَ مُوْجِبَاتِ رَحْمَتِكَ، وَعَزَائِمَ مَغْفِرَتِكَ، وَالْغَنِيْمَةَ مِنْ كُلِّ بِرٍّ، وَالسَّلَامَةَ مِنْ كُلِّ إِثْمٍ، لَا تَدَعْ لِي ذَنْبًا إِلَّا غَفَرْتَهُ، وَلَا هَمًّا إِلَّا فَرَّجْتَهُ، وَلَا حَاجَةً هِيَ لَكَ رِضًا إِلَّا قَضَيْتَهَا يَا أَرْحَمَ الرَّاحِمِيْنَ",
            latin: "Laa ilaaha illallohul haliimul kariim. Subhaanallohi robbil 'arsyil 'azhiim. Alhamdulillaahi robbil 'aalamiin. As-aluka muujibaati rohmatik, wa 'azaa-ima maghfirotik, wal ghoniimata min kulli birrin, was salaamata min kulli itsmin, laa tada' lii dzanban illaa ghofartah, wa laa hamman illaa farrojtah, wa laa haajatan hiya laka ridhon illaa qodhoitahaa yaa arhamar roohimiin.",
            artinya: "Tiada Tuhan selain Allah yang Maha Santun lagi Maha Mulia. Maha Suci Allah, Tuhan Arsy yang agung. Segala puji bagi Allah, Tuhan semesta alam. Aku memohon kepada-Mu hal-hal yang mendatangkan rahmat-Mu, dan kesungguhan ampunan-Mu, dan keuntungan dari setiap kebaikan, dan keselamatan dari setiap dosa. Janganlah Engkau biarkan dosa padaku kecuali Engkau mengampuninya, dan tidak ada kesusahan kecuali Engkau melapangkannya, dan tidak ada hajat yang Engkau ridhai kecuali Engkau memenuhinya, wahai Dzat Yang Maha Penyayang di antara para penyayang."
        }
    };

    const handleSelect = (prayer) => {
        if (prayer.hasDetail) {
            setSelectedPrayer(prayer);
        }
    };

    const getModalContent = () => {
        if (selectedPrayer?.title === "Sholat Rawatib") return rawatibDetails;
        if (selectedPrayer?.title === "Sholat Dhuha") return dhuhaDetails;
        if (selectedPrayer?.title === "Sholat Tahajud") return tahajudDetails;
        if (selectedPrayer?.title === "Sholat Witir") return witirDetails;
        if (selectedPrayer?.title === "Sholat Istikharah") return istikharahDetails;
        if (selectedPrayer?.title === "Sholat Hajat") return hajatDetails;
        return null;
    };

    const modalData = getModalContent();

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Sparkles className="w-8 h-8 text-amber-500" />
                    Sholat Sunnah
                </h1>
                <p className="text-slate-500 mt-2">Amalan tambahan penyempurna ibadah.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prayers.map((prayer, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleSelect(prayer)}
                        className={`bg-white p-6 rounded-xl border border-slate-100 shadow-sm transition-all ${prayer.hasDetail ? 'cursor-pointer hover:border-amber-400 hover:shadow-md active:scale-[0.98]' : 'hover:border-slate-200'}`}
                    >
                        <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center justify-between">
                            {prayer.title}
                            {prayer.hasDetail && <BookOpen className="w-4 h-4 text-emerald-500" />}
                        </h3>
                        <p className="text-slate-600">{prayer.desc}</p>
                        {prayer.hasDetail && <p className="text-xs text-emerald-600 font-medium mt-3">Ketuk untuk detail & bacaan</p>}
                    </div>
                ))}
            </div>

            {/* Modal Logic */}
            {selectedPrayer && modalData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="sticky top-0 bg-white border-b border-slate-100 p-4 flex items-center justify-between z-10">
                            <h2 className="text-xl font-bold text-slate-800">
                                {modalData.title}
                            </h2>
                            <button
                                onClick={() => setSelectedPrayer(null)}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-slate-500" />
                            </button>
                        </div>

                        <div className="p-6 space-y-8">
                            <p className="text-slate-600">{modalData.desc}</p>

                            {selectedPrayer.title === "Sholat Rawatib" ? (
                                <>
                                    {/* Jenis Rawatib */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                                            <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                                                <Sparkles className="w-4 h-4" /> Sunnah Muakkad
                                            </h3>
                                            <ul className="space-y-2 text-sm text-emerald-900">
                                                {modalData.muakkad.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                            <h3 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                                                <Clock className="w-4 h-4" /> Ghairu Muakkad
                                            </h3>
                                            <ul className="space-y-2 text-sm text-slate-600">
                                                {modalData.ghairu.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Niat Rawatib */}
                                    <div className="space-y-4">
                                        <h3 className="font-bold text-slate-800 border-l-4 border-amber-500 pl-3">Niat Sholat</h3>
                                        <div className="grid gap-4">
                                            {modalData.niat.map((item, idx) => (
                                                <div key={idx} className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                                                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">{item.label}</span>
                                                    <p className="font-arabic text-xl text-right mb-2 text-slate-800">{item.arabic}</p>
                                                    <p className="text-sm font-medium text-slate-700 italic mb-1">"{item.latin}"</p>
                                                    <p className="text-xs text-slate-500">{item.artinya}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : selectedPrayer.title === "Sholat Witir" ? (
                                <>
                                    {/* Niat Witir (Multiple) */}
                                    <div className="space-y-4">
                                        <h3 className="font-bold text-slate-800 border-l-4 border-amber-500 pl-3">Niat Sholat</h3>
                                        <div className="grid gap-4">
                                            {modalData.niat.map((item, idx) => (
                                                <div key={idx} className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                                                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">{item.label}</span>
                                                    <p className="font-arabic text-xl text-right mb-2 text-slate-800">{item.arabic}</p>
                                                    <p className="text-sm font-medium text-slate-700 italic mb-1">"{item.latin}"</p>
                                                    <p className="text-xs text-slate-500">{item.artinya}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Doa Qunut Witir */}
                                    {modalData.qunut && (
                                        <div className="bg-emerald-50 text-emerald-900 p-6 rounded-xl border border-emerald-100 mt-4">
                                            <h3 className="font-bold text-emerald-800 mb-4 border-b border-emerald-200 pb-2">{modalData.qunut.title}</h3>
                                            <p className="font-arabic text-2xl text-right mb-4 leading-loose">{modalData.qunut.arabic}</p>
                                            <p className="text-emerald-700 italic mb-2 text-sm">{modalData.qunut.latin}</p>
                                            <p className="text-emerald-600 text-sm">Artinya: "{modalData.qunut.artinya}"</p>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    {/* Niat (Single Object) */}
                                    {modalData.niat && (
                                        <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                                            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">{modalData.niat.label}</span>
                                            <p className="font-arabic text-xl text-right mb-2 text-slate-800">{modalData.niat.arabic}</p>
                                            <p className="text-sm font-medium text-slate-700 italic mb-1">"{modalData.niat.latin}"</p>
                                            <p className="text-xs text-slate-500">{modalData.niat.artinya}</p>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* Doa (Common for all) */}
                            {modalData.doa && (
                                <div className="bg-slate-800 text-white p-6 rounded-xl">
                                    <h3 className="font-bold text-white mb-4 border-b border-white/20 pb-2">{modalData.doa.title}</h3>
                                    <p className="font-arabic text-2xl text-right mb-4 leading-loose">{modalData.doa.arabic}</p>
                                    <p className="text-slate-300 italic mb-2 text-sm">{modalData.doa.latin}</p>
                                    <p className="text-slate-400 text-sm">Artinya: "{modalData.doa.artinya}"</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sunnah;
