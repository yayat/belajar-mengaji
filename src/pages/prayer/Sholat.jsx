import React, { useState } from 'react';
import { Sun, Moon, BookOpen, Clock } from 'lucide-react';

const Sholat = () => {
    const [activeTab, setActiveTab] = useState('rakaat');

    const rakaatData = [
        {
            name: "Subuh",
            rakaat: 2,
            time: "Fajar Shodiq - Terbit Matahari",
            niat: {
                arabic: "أُصَلِّى فَرْضَ الصُّبْح رَكَعتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى",
                latin: "Ushalli fardhash subhi rak'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala.",
                artinya: "Aku berniat sholat fardhu Subuh dua rakaat menghadap kiblat karena Allah Ta'ala."
            }
        },
        {
            name: "Dzuhur",
            rakaat: 4,
            time: "Tergelincir Matahari - Bayangan = Benda",
            niat: {
                arabic: "أُصَلِّى فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى",
                latin: "Ushalli fardhadz dzuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala.",
                artinya: "Aku berniat sholat fardhu Dzuhur empat rakaat menghadap kiblat karena Allah Ta'ala."
            }
        },
        {
            name: "Ashar",
            rakaat: 4,
            time: "Setelah Dzuhur - Terbenam Matahari",
            niat: {
                arabic: "أُصَلِّى فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى",
                latin: "Ushalli fardhal 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala.",
                artinya: "Aku berniat sholat fardhu Ashar empat rakaat menghadap kiblat karena Allah Ta'ala."
            }
        },
        {
            name: "Maghrib",
            rakaat: 3,
            time: "Terbenam Matahari - Hilang Syafaq Merah",
            niat: {
                arabic: "أُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى",
                latin: "Ushalli fardhal maghribi tsalaatsa raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala.",
                artinya: "Aku berniat sholat fardhu Maghrib tiga rakaat menghadap kiblat karena Allah Ta'ala."
            }
        },
        {
            name: "Isya",
            rakaat: 4,
            time: "Hilang Syafaq Merah - Fajar Shodiq",
            niat: {
                arabic: "أُصَلِّى فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى",
                latin: "Ushalli fardhal 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala.",
                artinya: "Aku berniat sholat fardhu Isya empat rakaat menghadap kiblat karena Allah Ta'ala."
            }
        },
    ];

    const readings = [
        {
            title: "Takbiratul Ihram",
            arabic: "اللهُ أَكْبَرُ",
            latin: "Allahu Akbar",
            meaning: "Allah Maha Besar"
        },
        {
            title: "Doa Iftitah (Sunnah)",
            arabic: "اللهُ أَكْبَرُ كَبِيْرًا وَالْحَمْدُ لِلَّهِ كَثِيْرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيْلًا. إِنِّى وَجَّهْتُ وَجْهِيَ لِلَّذِيْ فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيْفًا مُسْلِمًا وَمَا أَنَا مِنَ الْمُشْرِكِيْنَ. إِنَّ صَلَاتِيْ وَنُسُكِيْ وَمَحْيَايَ وَمَمَاتِيْ لِلَّهِ رَبِّ الْعَالَمِيْنَ. لَا شَرِيْكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِيْنَ",
            latin: "Allaahu akbar kabiiraa walhamdu lillaahi katsiiraa, wa subhaanallaahi bukratan wa'ashiilaa. Innii wajjahtu wajhiya lilladzii fatharas samaawaati wal ardha haniifan musliman wa maa anaa minal musyrikiin. Inna shalaatii wa nusukii wa mahyaaya wa mamaatii lillaahi rabbil 'aalamiin. Laa syariika lahu wa bidzaalika umirtu wa anaa minal muslimiin.",
            meaning: "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Maha Suci Allah pada waktu pagi dan petang. Sesungguhnya aku hadapkan wajahku kepada (Allah) yang telah menciptakan langit dan bumi dengan segenap kepatuhan atau dalam keadaan tunduk, dan aku bukanlah dari golongan orang-orang yang menyekutukan-Nya. Sesungguhnya sholatku, ibadahku, hidup dan matiku hanyalah untuk Allah, Tuhan semesta alam. Tidak ada sekutu bagi-Nya, dan dengan itu aku diperintahkan, dan aku termasuk orang-orang muslim."
        },
        {
            title: "Al-Fatihah (Rukun)",
            arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. الرَّحْمَنِ الرَّحِيمِ. مَالِكِ يَوْمِ الدِّينِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ. اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ. صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
            latin: "Bismillaahir-rahmaanir-rahiim. Alhamdu lillaahi rabbil 'aalamiin. Ar-rahmaanir-rahiim. Maaliki yaumid diin. Iyyaaka na'budu wa iyyaaka nasta'iin. Ihdinash-shiraathal mustaqiim. Shiraathal ladziina an'amta 'alaihim ghairil maghdhuubi 'alaihim waladh-dhaalliin.",
            meaning: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam. Maha Pemurah lagi Maha Penyayang. Yang menguasai di Hari Pembalasan. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan. Tunjukilah kami jalan yang lurus, (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat."
        },
        {
            title: "Rukuk (Tasbih)",
            arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ",
            latin: "Subhaana rabbiyal 'azhiimi wa bihamdih (3x)",
            meaning: "Maha Suci Tuhanku Yang Maha Agung, dan dengan segala puji bagi-Nya."
        },
        {
            title: "I'tidal (Bangun dari Rukuk)",
            arabic: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ. رَبَّنَا لَكَ الْحَمْدُ مِلْءُ السَّمَاوَاتِ وَمِلْءُ الْأَرْضِ وَمِلْءُ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ",
            latin: "Sami'allaahu liman hamidah. Rabbanaa lakal hamdu mil'us samaawaati wa mil'ul ardhi wa mil'u maa syi'ta min syai'in ba'du.",
            meaning: "Allah Maha Mendengar orang yang memuji-Nya. Ya Tuhan kami, bagi-Mu segala puji, sepenuh langit dan sepenuh bumi, dan sepenuh apa saja yang Engkau kehendaki setelah itu."
        },
        {
            title: "Doa Qunut (Khusus Subuh)",
            arabic: "اَللّٰهُمَّ اهْدِنِيْ فِيْمَنْ هَدَيْتَ، وَعَافِنِيْ فِيْمَنْ عَافَيْتَ، وَتَوَلَّنِيْ فِيْمَنْ تَوَلَّيْتَ، وَبَارِكْ لِيْ فِيْمَا أَعْطَيْتَ، وَقِنِيْ شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِيْ وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ، فَلَكَ الْحَمْدُ عَلَى مَا قَضَيْتَ، أَسْتَغْفِرُكَ وَأَتُوْبُ إِلَيْكَ، وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ النَّبِيِّ الْأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
            latin: "Allahummahdinii fiiman hadait, wa 'aafinii fiiman 'aafait, wa tawallanii fiiman tawallait, wa baarik lii fiimaa a'thait, wa qinii syarra maa qadhait, fa innaka taqdhii wa laa yuqdhaa 'alaik, wa innahu laa yadzillu man waalait, wa laa ya'izzu man 'Aadait, tabaarakta rabbanaa wa ta'aalait, fa lakal hamdu 'alaa maa qadhait, astaghfiruka wa atuubu ilaik, wa shallallaahu 'alaa sayyidinaa Muhammadin nabiyyil ummiyyi wa 'alaa aalihi wa shahbihi wa sallam.",
            meaning: "Ya Allah, berilah aku petunjuk sebagaimana orang-orang yang telah Engkau beri petunjuk, berilah aku keselamatan sebagaimana orang-orang yang telah Engkau beri keselamatan, jadikanlah aku (orang-orang yang Engkau kasihi) sebagaimana orang-orang yang Engkau jadikan kasih sayang, berkahilah aku pada apa-apa yang telah Engkau berikan (kepadaku), jagalah aku dari keburukan apa-apa yang telah Engkau tetapkan, sesungguhnya Engkaulah yang menetapkan dan tidak ada yang menetapkan bagi-Mu, sesungguhnya tidak akan hina orang yang Engkau kasihi, dan tidak akan mulia orang yang Engkau musuhi, Maha Suci Engkau wahai Tuhan kami dan Maha Tinggi Engkau. Segala puji bagi-Mu atas apa yang telah Engkau tetapkan, aku memohon ampun kepada-Mu dan aku bertaubat kepada-Mu, dan semoga Allah melimpahkan rahmat kepada Nabi Muhammad SAW dan keluarganya serta sahabatnya."
        },
        {
            title: "Sujud (Tasbih)",
            arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ",
            latin: "Subhaana rabbiyal a'laa wa bihamdih (3x)",
            meaning: "Maha Suci Tuhanku Yang Maha Tinggi, dan dengan segala puji bagi-Nya."
        },
        {
            title: "Duduk Diantara Dua Sujud",
            arabic: "رَبِّ اغْفِرْ لِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
            latin: "Rabbighfirlii warhamnii wajburnii warfa'nii warzuqnii wahdinii wa 'aafinii wa'fu 'annii.",
            meaning: "Ya Allah, ampunilah aku, kasihanilah aku, cukupilah kekuranganku, angkatlah derajatku, berilah rezeki kepadaku, berilah petunjuk kepadaku, berilah kesehatan kepadaku, dan maafkanlah aku."
        },
        {
            title: "Tasyahud Awal",
            arabic: "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ. اَلسَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ. اَلسَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِيْنَ. أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهِ. اَللّٰهُمَّ صَلِّ عَلَى مُحَمَّدٍ",
            latin: "At-tahiyyaatul mubaarakaatush shalawaatuth thayyibaatu lillaah. Assalaamu 'alaika ayyuhan nabiyyu wa rahmatullaahi wa barakaatuh. Assalaamu 'alaina wa 'alaa 'ibaadillaahish shaalihiin. Asyhadu allaa ilaaha illallaah wa asyhadu anna Muhammadar rasuulullaah. Allahumma shalli 'alaa Muhammad.",
            meaning: "Segala kehormatan, keberkahan, kebahagiaan dan kebaikan bagi Allah. Salam, rahmat dan berkah-Nya kupanjatkan kepadamu wahai Nabi (Muhammad). Salam (keselamatan) semoga tetap untuk kami seluruh hamba yang shaleh-shaleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah. Dan aku bersaksi bahwa Nabi Muhammad adalah Utusan Allah. Ya Allah! Limpahkanlah rahmat kepada Nabi Muhammad."
        },
        {
            title: "Tasyahud Akhir (Lanjutan)",
            arabic: "وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيْمَ وَعَلَى آلِ إِبْرَاهِيْمَ، وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيْمَ وَعَلَى آلِ إِبْرَاهِيْمَ، فِي الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
            latin: "Wa 'alaa aali Muhammad kamaa shallaita 'alaa Ibraahiim wa 'alaa aali Ibraahiim, wa baarik 'alaa Muhammad wa 'alaa aali Muhammad kamaa baarakta 'alaa Ibraahiim wa 'alaa aali Ibraahiim, fil 'aalamiina innaka hamiidum majiid.",
            meaning: "Dan limpahkanlah rahmat kepada keluarga Nabi Muhammad, sebagaimana telah Engkau limpahkan rahmat kepada Nabi Ibrahim dan keluarganya. Dan limpahkanlah keberkahan kepada Nabi Muhammad dan keluarganya, sebagaimana Engkau telah melimpahkan keberkahan kepada Nabi Ibrahim dan keluarganya. Sesungguhnya di alam semesta ini Engkau Maha Terpuji lagi Maha Mulia."
        },
        {
            title: "Salam",
            arabic: "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
            latin: "Assalaamu 'alaikum wa rahmatullaah.",
            meaning: "Semoga keselamatan dan rahmat Allah dilimpahkan kepada kalian."
        }
    ];

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Sun className="w-8 h-8 text-amber-500" />
                    Panduan Sholat Fardhu
                </h1>
                <p className="text-slate-500 mt-2">Pelajari jumlah rakaat, niat, dan bacaan sholat lengkap.</p>

                <div className="flex gap-4 mt-6 border-b border-slate-200">
                    <button
                        onClick={() => setActiveTab('rakaat')}
                        className={`pb-2 px-1 font-medium text-sm transition-colors relative ${activeTab === 'rakaat' ? 'text-primary-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Rakaat & Niat
                        {activeTab === 'rakaat' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-t-full" />}
                    </button>
                    <button
                        onClick={() => setActiveTab('bacaan')}
                        className={`pb-2 px-1 font-medium text-sm transition-colors relative ${activeTab === 'bacaan' ? 'text-primary-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Bacaan Sholat
                        {activeTab === 'bacaan' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-t-full" />}
                    </button>
                </div>
            </div>

            {activeTab === 'rakaat' ? (
                <div className="grid gap-4">
                    {rakaatData.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-4">
                            <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
                                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                                        <Clock className="w-4 h-4" /> {item.time}
                                    </p>
                                </div>
                                <div className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg font-bold">
                                    {item.rakaat} Rakaat
                                </div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Niat Sholat {item.name}</p>
                                <p className="font-arabic text-xl text-right text-slate-800 leading-loose mb-2">{item.niat.arabic}</p>
                                <p className="text-sm font-medium text-slate-700 italic mb-1">"{item.niat.latin}"</p>
                                <p className="text-xs text-slate-500">{item.niat.artinya}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-6">
                    {readings.map((reading, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <BookOpen className="w-24 h-24" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg text-primary-700 mb-4 border-b border-dashed border-slate-200 pb-2 w-fit">
                                    {idx + 1}. {reading.title}
                                </h3>
                                <p className="text-2xl font-arabic text-right mb-4 leading-loose text-slate-800" dir="rtl">
                                    {reading.arabic}
                                </p>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <p className="text-slate-700 font-medium italic mb-2 leading-relaxed">"{reading.latin}"</p>
                                    {reading.meaning && (
                                        <p className="text-sm text-slate-500 leading-relaxed border-t border-slate-200 pt-2 mt-2">
                                            <span className="font-semibold">Artinya:</span> {reading.meaning}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sholat;
