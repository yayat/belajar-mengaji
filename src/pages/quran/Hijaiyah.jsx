import React, { useState } from 'react';
import { hijaiyahData } from '@/data/hijaiyah-data';
import { Volume2 } from 'lucide-react';
import { playTextToSpeech } from '@/utils/audio';

const Hijaiyah = () => {
    const [playingIndex, setPlayingIndex] = useState(null);

    const handlePlaySound = (item, idx) => {
        if (playingIndex !== null) return; // Prevent overlapping

        setPlayingIndex(idx);

        if (item.audio) {
            const audio = new Audio(item.audio);
            audio.onended = () => setPlayingIndex(null);
            audio.onerror = () => {
                console.warn("Audio file failed, falling back to TTS");
                playTextToSpeech(
                    item.arabic,
                    () => setPlayingIndex(null),
                    () => setPlayingIndex(null)
                );
            };
            audio.play().catch(e => {
                console.error("Audio play error:", e);
                // Fallback
                playTextToSpeech(
                    item.arabic,
                    () => setPlayingIndex(null),
                    () => setPlayingIndex(null)
                );
            });
        } else {
            playTextToSpeech(
                item.arabic,
                () => setPlayingIndex(null),
                () => setPlayingIndex(null)
            );
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="text-primary-600">ا ب ت</span>
                    Huruf Hijaiyah
                </h1>
                <p className="text-slate-500 mt-2">Belajar mengenal huruf-huruf dasar Al-Quran. Klik huruf untuk mendengarkan suaranya.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {hijaiyahData.map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => handlePlaySound(item, idx)}
                        className={`bg-white p-6 rounded-xl shadow-sm border transition-all cursor-pointer group flex flex-col items-center justify-center gap-3 aspect-square active:scale-95 ${playingIndex === idx
                            ? 'border-primary-500 ring-2 ring-primary-200 bg-primary-50'
                            : 'border-slate-100 hover:shadow-md hover:border-primary-200 hover:bg-white'
                            }`}
                    >
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${playingIndex === idx ? 'bg-white' : 'bg-primary-50 group-hover:bg-primary-100'
                            }`}>
                            <span className="font-arabic text-4xl text-primary-700">{item.arabic}</span>
                        </div>
                        <div className="text-center">
                            <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">{item.latin}</span>
                        </div>
                        {/* Audio Icon */}
                        <div className={`transition-opacity ${playingIndex === idx ? 'opacity-100 animate-pulse' : 'opacity-0 group-hover:opacity-100'}`}>
                            <Volume2 className={`w-4 h-4 ${playingIndex === idx ? 'text-primary-600' : 'text-primary-400'}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hijaiyah;
