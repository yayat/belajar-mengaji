import React, { useState } from 'react';
import { GraduationCap, X, ChevronRight, CheckCircle2, Book } from 'lucide-react';

const Tahsin = () => {
    const [selectedMaterial, setSelectedMaterial] = useState(null);

    const materials = [
        {
            title: "Makharijul Huruf",
            desc: "Tempat keluarnya huruf hijaiyah",
            hasDetail: true,
            detail: {
                title: "Makharijul Huruf (Tempat Keluar Huruf)",
                desc: "Makharijul huruf adalah tempat-tempat keluarnya huruf pada waktu huruf itu dibunyikan. Secara umum terbagi menjadi 5 tempat:",
                types: [
                    {
                        name: "Al-Jauf (Rongga Mulut)",
                        meaning: "Lubang/Rongga Mulut & Tenggorokan",
                        letters: "ا (Alif), و (Wau), ي (Ya)",
                        explanation: "Huruf-huruf mad (panjang) yang keluar dari rongga mulut dan tenggorokan.",
                        examples: [
                            { word: "بَا", desc: "Baa (Alif)" },
                            { word: "بُو", desc: "Buu (Wau)" },
                            { word: "بِي", desc: "Bii (Ya)" }
                        ]
                    },
                    {
                        name: "Al-Halq (Tenggorokan)",
                        meaning: "Tenggorokan",
                        letters: "Aqsa (Bawah): ء هـ | Wasath (Tengah): ع ح | Adna (Atas): غ خ",
                        explanation: "Keluar dari tenggorokan. Terbagi 3: Bawah, Tengah, dan Atas.",
                        examples: [
                            { word: "أَهْلٌ", desc: "Ah-lun (Hamzah, Ha)" },
                            { word: "عَلِيمٌ", desc: "'Aliim (Ain)" },
                            { word: "غَيْرِ", desc: "Ghairi (Ghain)" }
                        ]
                    },
                    {
                        name: "Al-Lisan (Lidah)",
                        meaning: "Lidah",
                        letters: "ق ك ج ش ي ض ل ن ر ت د ط ز س ص ث ظ ذ",
                        explanation: "Keluar dari lidah. Ini adalah makhraj terbanyak (10 makhraj untuk 18 huruf).",
                        examples: [
                            { word: "قُلْ", desc: "Qul (Pangkal lidah)" },
                            { word: "الشَّمْسُ", desc: "Asy-syamsu (Tengah lidah)" },
                            { word: "الضَّالِّينَ", desc: "Adh-dhaallin (Sisi lidah)" }
                        ]
                    },
                    {
                        name: "Asy-Syafatain (Dua Bibir)",
                        meaning: "Dua Bibir",
                        letters: "ف (Fa), م (Mim), ب (Ba), و (Wau)",
                        explanation: "Keluar dari dua bibir. Fa (gigi atas + bibir bawah), Mim/Ba (dua bibir rapat/buka), Wau (mencong).",
                        examples: [
                            { word: "فِيْ", desc: "Fii" },
                            { word: "أَبًّا", desc: "Abba" },
                            { word: "يَوْمَ", desc: "Yauma (Wau)" }
                        ]
                    },
                    {
                        name: "Al-Khaisyum (Rongga Hidung)",
                        meaning: "Pangkal Hidung",
                        letters: "Gunnah (Dengung)",
                        explanation: "Suara dengung yang keluar dari pangkal hidung (Nun/Mim bertasydid, Ikhfa, Iqlab, Idgham Bigunnah).",
                        examples: [
                            { word: "إِنَّ", desc: "Inna (Gunnah)" },
                            { word: "مِمَّا", desc: "Mimmaa (Gunnah)" }
                        ]
                    }
                ]
            }
        },
        {
            title: "Sifatul Huruf",
            desc: "Karakteristik yang melekat pada huruf.",
            hasDetail: true,
            detail: {
                title: "Sifatul Huruf (Sifat Huruf)",
                desc: "Sifat huruf adalah cara pelafalan atau karakteristik yang muncul ketika huruf dibunyikan. Terbagi menjadi sifat yang memiliki lawan (mutadhadah) dan yang tidak (ghairu mutadhadah).",
                types: [
                    {
                        name: "Hams & Jahr (Desis Nafas)",
                        meaning: "Berdesis vs Jelas",
                        subTypes: [
                            {
                                name: "Hams (Samar/Desis)",
                                desc: "Menghembuskan nafas saat mengucapkan huruf.",
                                letters: "ف ح ث هـ ش خ ص س ك ت",
                                examples: [
                                    { word: "اَفْ", desc: "Aff (Ada desis nafas)" },
                                    { word: "اَسْ", desc: "Ass" }
                                ]
                            },
                            {
                                name: "Jahr (Jelas)",
                                desc: "Menahan nafas (jelas) saat mengucapkan huruf.",
                                letters: "Selain huruf Hams",
                                examples: [
                                    { word: "اَبْ", desc: "Abb (Nafas tertahan)" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Syiddah, Rakhawah & Tawassuth (Kuat Suara)",
                        meaning: "Kuat vs Lunak",
                        subTypes: [
                            {
                                name: "Syiddah (Kuat)",
                                desc: "Suara tertahan kuat/tertekan.",
                                letters: "ء ج د ق ط ب ك ت",
                                examples: [
                                    { word: "اَجْ", desc: "Ajj (Suara tertahan)" }
                                ]
                            },
                            {
                                name: "Rakhawah (Lunak)",
                                desc: "Suara terlepas/mengalir.",
                                letters: "خ ذ غ ث ح ظ ف ض ش و ص ز ي س هـ",
                                examples: [
                                    { word: "اَشْ", desc: "Asyy (Suara mengalir)" }
                                ]
                            },
                            {
                                name: "Tawassuth (Sedang)",
                                desc: "Antara kuat dan lunak.",
                                letters: "ل ن ع م ر",
                                examples: [
                                    { word: "اَلْ", desc: "All" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Isti'la & Istifal (Arah Suara)",
                        meaning: "Naik vs Turun",
                        subTypes: [
                            {
                                name: "Isti'la (Terangkat)",
                                desc: "Lidah terangkat ke langit-langit (suara tebal).",
                                letters: "خ ص ض غ ط ق ظ",
                                examples: [
                                    { word: "خَا", desc: "Khaa (Tebal)" }
                                ]
                            },
                            {
                                name: "Istifal (Menurun)",
                                desc: "Lidah menurun/datar (suara tipis).",
                                letters: "Selain huruf Isti'la",
                                examples: [
                                    { word: "مَا", desc: "Maa (Tipis)" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Ithbaq & Infitah (Posisi Lidah)",
                        meaning: "Tertutup vs Terbuka",
                        subTypes: [
                            {
                                name: "Ithbaq (Tertutup/Lengket)",
                                desc: "Lidah melengkung menempel ke langit-langit.",
                                letters: "ص ض ط ظ",
                                examples: [
                                    { word: "طَا", desc: "Thaa (Sangat tebal)" }
                                ]
                            },
                            {
                                name: "Infitah (Terbuka)",
                                desc: "Lidah renggang dari langit-langit.",
                                letters: "Selain huruf Ithbaq",
                                examples: [
                                    { word: "كَا", desc: "Kaa" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Idzlaq & Ismat (Kelancaran)",
                        meaning: "Lancar vs Diam",
                        subTypes: [
                            {
                                name: "Idzlaq (Lancar/Ujung)",
                                desc: "Ringan dan cepat diucapkan (keluar dari ujung lidah/bibir).",
                                letters: "ف ر م ن ل ب",
                                examples: [
                                    { word: "فَرَّ", desc: "Farra" }
                                ]
                            },
                            {
                                name: "Ismat (Tertahan)",
                                desc: "Berat/Berhati-hati dalam pengucapan.",
                                letters: "Selain huruf Idzlaq",
                                examples: [
                                    { word: "ج", desc: "Jim" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Sifat Ghairu Mutadhadah (Tunggal)",
                        meaning: "Tidak Berlawanan",
                        subTypes: [
                            {
                                name: "Shafir (Desis Burung)",
                                desc: "Suara berdesis menyerupai siul/burung.",
                                letters: "ص ز س",
                                examples: [{ word: "ص", desc: "Shad" }]
                            },
                            {
                                name: "Qalqalah (Pantulan)",
                                desc: "Memantul saat sukun.",
                                letters: "ق ط ب ج د",
                                examples: [{ word: "اَقْ", desc: "Aqq" }]
                            },
                            {
                                name: "Layyin (Lunak)",
                                desc: "Lembut/lentur pengucapannya.",
                                letters: "و dan ي sukun didahului fathah",
                                examples: [{ word: "خَوْفٌ", desc: "Khauf" }]
                            },
                            {
                                name: "Inhiraf (Miring)",
                                desc: "Miringnya lidah setelah pengucapan.",
                                letters: "ل dan ر",
                                examples: [{ word: "ل", desc: "Lam" }]
                            },
                            {
                                name: "Takrir (Bergetar)",
                                desc: "Ujung lidah bergetar halus.",
                                letters: "ر",
                                examples: [{ word: "ر", desc: "Ra" }]
                            },
                            {
                                name: "Tafasyi (Menyebar)",
                                desc: "Angin menyebar di mulut.",
                                letters: "ش",
                                examples: [{ word: "ش", desc: "Syin" }]
                            },
                            {
                                name: "Istithalah (Memanjang)",
                                desc: "Suara memanjang dari tepi pangkal sampai ujung lidah.",
                                letters: "ض",
                                examples: [{ word: "ض", desc: "Dhad" }]
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
                    <GraduationCap className="w-8 h-8 text-primary-600" />
                    Tahsin Al-Quran
                </h1>
                <p className="text-slate-500 mt-2">Perbaiki bacaan Al-Quran sesuai kaidah.</p>
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

export default Tahsin;
