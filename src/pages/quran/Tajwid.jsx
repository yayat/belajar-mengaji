import React, { useState } from 'react';
import { Book, X, ChevronRight, CheckCircle2 } from 'lucide-react';

const Tajwid = () => {
    const [selectedMaterial, setSelectedMaterial] = useState(null);

    const materials = [
        {
            title: "Hukum Nun Mati & Tanwin",
            desc: "Izhar, Idgham, Iqlab, Ikhfa",
            hasDetail: true,
            detail: {
                title: "Hukum Nun Mati (نْ) & Tanwin (ــًــٍــٌ)",
                desc: "Hukum ini berlaku apabila Nun Sukun (نْ) atau Tanwin bertemu dengan huruf-huruf tertentu. Terbagi menjadi 4 hukum utama:",
                types: [
                    {
                        name: "Izhar Halqi",
                        meaning: "Jelas",
                        letters: "ء ح خ ع غ هـ",
                        explanation: "Dibaca jelas (tidak berdengung) apabila Nun Mati/Tanwin bertemu salah satu huruf tenggorokan (Halqi).",
                        examples: [
                            { word: "مَنْ آمَنَ", desc: "Man Aamana (Nun mati ketemu Hamzah)" },
                            { word: "عَلِيمٌ حَكِيمٌ", desc: "'Aliimun Hakiim (Tanwin ketemu Ha)" }
                        ]
                    },
                    {
                        name: "Idgham",
                        meaning: "Melebur/Memasukkan",
                        subTypes: [
                            {
                                name: "Idgham Bigunnah",
                                desc: "Melebur dengan dengung (Gunnah).",
                                letters: "ي ن م و",
                                examples: [
                                    { word: "مَنْ يَقُولُ", desc: "May Yaquulu (Nun mati ketemu Ya)" }
                                ]
                            },
                            {
                                name: "Idgham Bilagunnah",
                                desc: "Melebur tanpa dengung.",
                                letters: "ل ر",
                                examples: [
                                    { word: "مِنْ رَبِّهِمْ", desc: "Mir Rabbihim (Nun mati ketemu Ra)" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Iqlab",
                        meaning: "Mengganti",
                        letters: "b (Ba)",
                        explanation: "Mengganti bunyi Nun Mati/Tanwin menjadi Mim (م) samar disertai dengung, apabila bertemu huruf Ba (ب).",
                        examples: [
                            { word: "مِنْ بَعْدِ", desc: "Mim Ba'di (Nun mati ketemu Ba)" },
                            { word: "سَمِيعٌ بَصِيرٌ", desc: "Samii'um Bashiir" }
                        ]
                    },
                    {
                        name: "Ikhfa Haqiqi",
                        meaning: "Samar",
                        letters: "ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك",
                        explanation: "Dibaca samar-samar antara Izhar dan Idgham disertai dengung, apabila bertemu 15 huruf Ikhfa.",
                        examples: [
                            { word: "مِنْ تَحْتِهَا", desc: "Min Tahtihaa dibaca 'Ming Tahtihaa'" },
                            { word: "اِنْ كُنْتُمْ", desc: "In Kuntum dibaca 'Ing Kungtum'" }
                        ]
                    }
                ]
            }
        },
        {
            title: "Hukum Mim Mati",
            desc: "Ikhfa Syafawi, Idgham Mimi, Izhar Syafawi",
            hasDetail: true,
            detail: {
                title: "Hukum Mim Mati (مْ)",
                desc: "Hukum ini berlaku apabila Mim Sukun (مْ) bertemu dengan huruf hijaiyah. Terbagi menjadi 3 hukum utama:",
                types: [
                    {
                        name: "Ikhfa Syafawi",
                        meaning: "Samar di Bibir",
                        letters: "ب (Ba)",
                        explanation: "Dibaca samar-samar di bibir disertai dengung, apabila Mim Mati bertemu dengan huruf Ba (ب).",
                        examples: [
                            { word: "تَرْمِيهِمْ بِحِجَارَةٍ", desc: "Tarmiihim bihijaarah (Mim mati ketemu Ba)" },
                            { word: "وَهُمْ بِالْآخِرَةِ", desc: "Wahum bil aakhirah" }
                        ]
                    },
                    {
                        name: "Idgham Mimi (Mitslain)",
                        meaning: "Melebur Sesama Huruf",
                        letters: "م (Mim)",
                        explanation: "Dibaca melebur dengan dengung yang sempuna, apabila Mim Mati bertemu dengan huruf Mim (م).",
                        examples: [
                            { word: "لَهُمْ مَا يَشَاءُونَ", desc: "Lahum maa yasyaa'uun (Mim mati ketemu Mim)" },
                            { word: "أَمْ مَنْ", desc: "Am man (Mim mati ketemu Mim)" }
                        ]
                    },
                    {
                        name: "Izhar Syafawi",
                        meaning: "Jelas di Bibir",
                        letters: "Semua huruf kecuali م dan ب",
                        explanation: "Dibaca jelas tanpa dengung, apabila Mim Mati bertemu dengan huruf selain Mim (م) dan Ba (ب). Harus hati-hati (lebih jelas) saat bertemu wau (و) dan fa (ف).",
                        examples: [
                            { word: "هُمْ فِيْهَا", desc: "Hum fiihaa (Mim mati ketemu Fa)" },
                            { word: "عَلَيْهِمْ وَلَا", desc: "'Alaihim walaa (Mim mati ketemu Wau)" },
                            { word: "أَمْ لَمْ تُنْذِرْهُمْ", desc: "Am lam tundzirhum (Mim mati ketemu Lam/Ta)" }
                        ]
                    }
                ]
            }
        },
        {
            title: "Qalqalah",
            desc: "Sugra dan Kubra",
            hasDetail: true,
            detail: {
                title: "Hukum Qalqalah (Memantul)",
                desc: "Qalqalah artinya memantul/getaran suara. Terjadi apabila huruf Qalqalah (ب ج د ط ق) mati atau dimatikan.",
                types: [
                    {
                        name: "Qalqalah Sugra",
                        meaning: "Mantulan Kecil",
                        letters: "ب ج د ط ق (Mati Asli)",
                        explanation: "Terjadi apabila huruf Qalqalah mati asli di tengah kalimat. Pantulannya ringan/kecil.",
                        examples: [
                            { word: "يَقْطَعُونَ", desc: "Yaq-tha'uuna (Qaf sukun di tengah)" },
                            { word: "حَبْلٌ", desc: "Hab-lun (Ba sukun di tengah)" }
                        ]
                    },
                    {
                        name: "Qalqalah Kubra",
                        meaning: "Mantulan Besar",
                        letters: "ب ج د ط ق (Mati Waqaf)",
                        explanation: "Terjadi apabila huruf Qalqalah mati karena waqaf (berhenti) di akhir kalimat. Pantulannya kuat/besar.",
                        examples: [
                            { word: "قُلْ هُوَ اللَّهُ أَحَدٌ", desc: "Ahad (Dal dibaca mantul kuat)" },
                            { word: "مِنْ مَسَدٍ", desc: "Masad (Dal dibaca mantul kuat)" }
                        ]
                    }
                ]
            }
        },
        {
            title: "Mad (Panjang)",
            desc: "Mad Thabi'i dan Mad Far'i",
            hasDetail: true,
            detail: {
                title: "Hukum Mad (Bacaan Panjang)",
                desc: "Mad menurut bahasa artinya memanjangkan. Menurut istilah, memanjangkan bunyi huruf Hijaiyah karena adanya huruf Mad.",
                types: [
                    {
                        name: "Mad Thabi'i (Asli)",
                        meaning: "Panjang Biasa",
                        letters: "ا (Alif), و (Wau), ي (Ya)",
                        explanation: "Terjadi apabila: Alif setelah Fathah, Ya sukun setelah Kasrah, atau Wau sukun setelah Dhommah. Panjangnya 2 harakat.",
                        examples: [
                            { word: "نُو", desc: "Nu (Wau sukun setelah dhommah)" },
                            { word: "حِي", desc: "Hii (Ya sukun setelah kasrah)" },
                            { word: "هَا", desc: "Haa (Alif setelah fathah)" }
                        ]
                    },
                    {
                        name: "Mad Far'i (Cabang)",
                        meaning: "Cabang dari Mad Asli",
                        subTypes: [
                            {
                                name: "Mad Wajib Muttasil",
                                desc: "Mad Thabi'i bertemu Hamzah dalam SATU kata.",
                                letters: "H 4-5 Harakat",
                                examples: [
                                    { word: "جَاءَ", desc: "Jaaa-a (Wajib 4-5 ketukan)" },
                                    { word: "السَّمَاءَ", desc: "As-samaaa-a" }
                                ]
                            },
                            {
                                name: "Mad Jaiz Munfasil",
                                desc: "Mad Thabi'i bertemu Hamzah di LAIN kata (terpisah).",
                                letters: "H 2, 4, 5 Harakat",
                                examples: [
                                    { word: "إِنَّا أَعْطَيْنَاكَ", desc: "Innaaa a'thainaak" },
                                    { word: "يَا أَيُّهَا", desc: "Yaaa ayyuhal..." }
                                ]
                            },
                            {
                                name: "Mad 'Aridh Lissukun",
                                desc: "Mad Thabi'i bertemu huruf hidup yang dibaca mati karena laqaf (berhenti).",
                                letters: "H 2, 4, 6 Harakat",
                                examples: [
                                    { word: "الْعَالَمِينَ", desc: "Al 'aalamiin (di akhir ayat)" },
                                    { word: "الرَّحِيمِ", desc: "Ar rahiim (di akhir ayat)" }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    ];

    const getDetailContent = (material) => {
        if (!material.detail) return null;

        return (
            <div className="space-y-6">
                <p className="text-slate-600 border-b border-slate-100 pb-4">{material.detail.desc}</p>

                <div className="grid gap-6">
                    {material.detail.types.map((type, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                            <h3 className="text-lg font-bold text-primary-700 flex items-center gap-2 mb-2">
                                <span className="bg-primary-100 text-primary-600 w-6 h-6 rounded flex items-center justify-center text-xs">
                                    {idx + 1}
                                </span>
                                {type.name}
                            </h3>
                            <p className="text-sm font-medium text-slate-500 mb-3 ml-8 italic">"{type.meaning}"</p>

                            {type.subTypes ? (
                                <div className="space-y-3 ml-8 mt-2">
                                    {type.subTypes.map((sub, sIdx) => (
                                        <div key={sIdx} className="bg-white p-3 rounded-lg border border-slate-100">
                                            <h4 className="font-bold text-slate-700 text-sm">{sub.name}</h4>
                                            <p className="text-slate-600 text-sm mb-1">{sub.desc}</p>
                                            <p className="text-xs text-slate-500 mb-2">Huruf: <span className="font-arabic text-lg ml-1 text-slate-800">{sub.letters}</span></p>
                                            <div className="bg-primary-50 px-3 py-2 rounded text-sm text-slate-600">
                                                <span className="font-semibold text-primary-700">Contoh:</span>
                                                <div className="grid gap-1 mt-1">
                                                    {sub.examples.map((ex, eIdx) => (
                                                        <div key={eIdx} className="flex justify-between items-center">
                                                            <span className="font-arabic text-lg">{ex.word}</span>
                                                            <span className="text-xs italic text-slate-500">{ex.desc}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="ml-8 space-y-3">
                                    <p className="text-slate-700 text-sm leading-relaxed">{type.explanation}</p>
                                    <p className="text-sm text-slate-500">Huruf: <span className="font-arabic text-lg ml-2 text-slate-800 tracking-wider text-right dir-rtl">{type.letters}</span></p>

                                    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                                        <div className="bg-slate-100 px-3 py-1.5 border-b border-slate-200">
                                            <span className="text-xs font-bold text-slate-600 uppercase">Contoh</span>
                                        </div>
                                        <div className="p-3 grid gap-2">
                                            {type.examples.map((ex, eIdx) => (
                                                <div key={eIdx} className="flex items-center justify-between border-b border-slate-50 last:border-0 pb-1 last:pb-0">
                                                    <span className="font-arabic text-xl text-slate-800">{ex.word}</span>
                                                    <span className="text-xs text-slate-500 italic">{ex.desc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Book className="w-8 h-8 text-primary-600" />
                    Ilmu Tajwid
                </h1>
                <p className="text-slate-500 mt-2">Pelajari hukum-hukum bacaan dalam Al-Quran.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materials.map((m, idx) => (
                    <div
                        key={idx}
                        onClick={() => m.hasDetail && setSelectedMaterial(m)}
                        className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all ${m.hasDetail ? 'cursor-pointer hover:shadow-md hover:border-primary-200 group' : ''}`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                                <span className="font-bold text-primary-700">{idx + 1}</span>
                            </div>
                            {m.hasDetail && <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary-500 transition-colors" />}
                        </div>
                        <h3 className="font-bold text-slate-800 mb-2 group-hover:text-primary-700 transition-colors">{m.title}</h3>
                        <p className="text-slate-500 text-sm">{m.desc}</p>
                        {m.hasDetail && (
                            <p className="text-xs text-primary-600 font-medium mt-4 flex items-center gap-1">
                                Klik untuk melihat detail <CheckCircle2 className="w-3 h-3" />
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedMaterial && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="sticky top-0 bg-white border-b border-slate-100 p-4 flex items-center justify-between z-10">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-primary-50 rounded-lg">
                                    <Book className="w-5 h-5 text-primary-600" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-800">
                                    {selectedMaterial.title}
                                </h2>
                            </div>
                            <button
                                onClick={() => setSelectedMaterial(null)}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-slate-500" />
                            </button>
                        </div>

                        <div className="p-6">
                            {getDetailContent(selectedMaterial)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tajwid;
