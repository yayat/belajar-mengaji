import React from 'react';
import { Droplets } from 'lucide-react';

const Wudhu = () => {
    const steps = [
        { id: 1, title: "Niat", desc: "Nawaitul wudhu'a lirof'il hadatsil ashghori fardhon lillaahi ta'aalaa" },
        { id: 2, title: "Membasuh Muka", desc: "Membasuh seluruh muka (mulai dari tumbuhnya rambut kepala hingga bawah dagu, dan dari telinga kanan hingga telinga kiri)." },
        { id: 3, title: "Membasuh Tangan", desc: "Membasuh kedua tangan sampai siku." },
        { id: 4, title: "Mengusap Kepala", desc: "Mengusap sebagian rambut kepala." },
        { id: 5, title: "Membasuh Kaki", desc: "Membasuh kedua kaki sampai mata kaki." },
        { id: 6, title: "Tertib", desc: "Dilakukan secara berurutan." }
    ];

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Droplets className="w-8 h-8 text-blue-500" />
                    Tata Cara Wudhu
                </h1>
                <p className="text-slate-500 mt-2">Panduan lengkap rukun dan doa wudhu.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h2 className="text-xl font-bold text-blue-800 mb-4">Niat Wudhu</h2>
                <p className="text-2xl font-arabic text-right mb-4 leading-loose">
                    نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلَّهِ تَعَالَى
                </p>
                <p className="text-slate-700 font-medium italic">"Nawaitul wudhu'a lirof'il hadatsil ashghori fardhon lillaahi ta'aalaa"</p>
                <p className="text-slate-600 text-sm mt-1">Artinya: "Aku niat berwudhu untuk menghilangkan hadats kecil, fardhu karena Allah Ta'ala."</p>
            </div>

            <div className="grid gap-4">
                {steps.map((step) => (
                    <div key={step.id} className="bg-white p-4 rounded-xl border border-slate-100 flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                            {step.id}
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">{step.title}</h3>
                            <p className="text-slate-600">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <h2 className="text-xl font-bold text-emerald-800 mb-4">Doa Setelah Wudhu</h2>
                <p className="text-2xl font-arabic text-right mb-4 leading-loose">
                    أَشْهَدُ أَنْ لَاإِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًاعَبْدُهُ وَرَسُوْلُهُ...
                </p>
                <p className="text-slate-600 text-sm mt-1">Artinya: "Aku bersaksi bahwa tiada Tuhan selain Allah Yang Maha Esa, tiada sekutu bagi-Nya..."</p>
            </div>
        </div>
    );
};

export default Wudhu;
