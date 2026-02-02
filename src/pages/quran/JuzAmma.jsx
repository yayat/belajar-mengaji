import React, { useState, useEffect } from 'react';
import { BookOpen, Loader2, ChevronDown, ChevronUp, Volume2, Pause, Square } from 'lucide-react';
import axios from 'axios';
import { playTextToSpeech } from '@/utils/audio';

const JuzAmma = () => {
    const [surahs, setSurahs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedSurah, setExpandedSurah] = useState(null);
    const [playingVerse, setPlayingVerse] = useState(null);

    const handlePlayVerse = (ayah, surahNum) => {
        if (playingVerse) return;

        setPlayingVerse({ surah: surahNum, verse: ayah.nomorAyat });

        // Check for API audio (usually key '05' for Misyari) or fallback to '01'
        const audioUrl = ayah.audio?.['05'] || ayah.audio?.['01'];

        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.onended = () => setPlayingVerse(null);
            audio.onerror = () => {
                playFallback(ayah.teksArab);
            };
            audio.play().catch(e => {
                console.error("Verse audio play error", e);
                playFallback(ayah.teksArab);
            });
        } else {
            playFallback(ayah.teksArab);
        }
    };

    const playFallback = (text) => {
        playTextToSpeech(
            text,
            () => setPlayingVerse(null),
            () => setPlayingVerse(null)
        );
    };

    useEffect(() => {
        const fetchJuz30 = async () => {
            try {
                // Fetching list of surahs from 78 (An-Naba) to 114 (An-Nas)
                // Using a reliable public API: https://equran.id/api/v2/surat
                const promises = [];
                for (let i = 78; i <= 114; i++) {
                    promises.push(axios.get(`https://equran.id/api/v2/surat/${i}`));
                }

                const responses = await Promise.all(promises);
                const data = responses.map(res => res.data.data);
                setSurahs(data);
            } catch (error) {
                console.error("Error fetching Juz 30:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJuz30();
    }, []);

    const toggleSurah = (id) => {
        if (expandedSurah === id) {
            setExpandedSurah(null);
        } else {
            setExpandedSurah(id);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <BookOpen className="w-8 h-8 text-primary-600" />
                    Juz Amma (Juz 30)
                </h1>
                <p className="text-slate-500 mt-2">Hafalan surat-surat pendek (An-Naba s/d An-Nas).</p>
            </div>

            {loading ? (
                <div className="flex items-center justify-center h-64">
                    <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
                    <span className="ml-2 text-slate-500">Memuat surat...</span>
                </div>
            ) : (
                <div className="space-y-4">
                    {surahs.map((surah) => (
                        <div key={surah.nomor} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                            <div
                                className="p-4 bg-slate-50 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors"
                                onClick={() => toggleSurah(surah.nomor)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                                        {surah.nomor}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800">{surah.namaLatin} ({surah.nama})</h3>
                                        <p className="text-xs text-slate-500">{surah.arti} • {surah.jumlahAyat} Ayat</p>
                                    </div>
                                </div>
                                {expandedSurah === surah.nomor ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                            </div>

                            {expandedSurah === surah.nomor && (
                                <div className="p-6 bg-white border-t border-slate-100">
                                    {/* Bismillah */}
                                    {surah.nomor !== 1 && surah.nomor !== 9 && (
                                        <div className="text-center text-2xl font-arabic mb-8 text-slate-800">
                                            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                                        </div>
                                    )}

                                    <div className="space-y-6">
                                        {surah.ayat.map((ayah) => {
                                            const isVersePlaying = playingVerse?.surah === surah.nomor && playingVerse?.verse === ayah.nomorAyat;
                                            return (
                                                <div key={ayah.nomorAyat} className="flex flex-col gap-2 border-b border-slate-50 pb-4 last:border-0">
                                                    <div className="flex justify-between items-start gap-4">
                                                        <div className="w-8 h-8 rounded-full border border-primary-200 text-primary-600 text-xs flex items-center justify-center flex-shrink-0 mt-1">
                                                            {ayah.nomorAyat}
                                                        </div>
                                                        <p
                                                            onClick={() => handlePlayVerse(ayah, surah.nomor)}
                                                            className={`text-2xl font-arabic text-right leading-loose w-full cursor-pointer transition-colors select-none ${isVersePlaying ? 'text-primary-600 font-bold' : 'text-slate-800 hover:text-primary-600'
                                                                }`}
                                                        >
                                                            {ayah.teksArab}
                                                        </p>
                                                    </div>
                                                    <div className="pl-12">
                                                        <p className="text-primary-700 text-sm mb-1">{ayah.teksLatin}</p>
                                                        <p className="text-slate-500 text-sm italic">"{ayah.teksIndonesia}"</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JuzAmma;
