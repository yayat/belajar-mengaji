import React from 'react';
import { hijaiyahData } from '@/data/hijaiyah-data';
import { Volume2 } from 'lucide-react';

const Hijaiyah = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="text-primary-600">ا ب ت</span>
                    Huruf Hijaiyah
                </h1>
                <p className="text-slate-500 mt-2">Belajar mengenal huruf-huruf dasar Al-Quran.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {hijaiyahData.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-200 transition-all cursor-pointer group flex flex-col items-center justify-center gap-3 aspect-square"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                            <span className="font-arabic text-4xl text-primary-700">{item.arabic}</span>
                        </div>
                        <div className="text-center">
                            <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">{item.latin}</span>
                        </div>
                        {/* Audio Icon Placeholder */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Volume2 className="w-4 h-4 text-primary-400" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hijaiyah;
