import React, { useState, useEffect } from 'react';
import { Trophy, Star, BookOpen, Clock, Loader2 } from 'lucide-react';
import BadgeWidget from './BadgeWidget';
import usePrayerTimes from '@/hooks/usePrayerTimes';

const Dashboard = () => {
    // Mock Data for Top 3
    const topPlayers = [
        { id: 1, name: "Ahmad", score: 2500, avatar: "A" },
        { id: 2, name: "Fatimah", score: 2350, avatar: "F" },
        { id: 3, name: "Umar", score: 2100, avatar: "U" },
    ];

    const { timings, loading } = usePrayerTimes();
    const [nextPrayer, setNextPrayer] = useState({ name: "Memuat...", time: "--:--" });

    useEffect(() => {
        if (timings) {
            const prayerNames = {
                Fajr: "Subuh",
                Dhuhr: "Dzuhur",
                Asr: "Ashar",
                Maghrib: "Maghrib",
                Isha: "Isya"
            };

            const now = new Date();
            const currentHours = now.getHours();
            const currentMinutes = now.getMinutes();
            const currentTimeVal = currentHours * 60 + currentMinutes;

            let nextP = null;

            const prayers = [];
            for (const [key, value] of Object.entries(prayerNames)) {
                const timeStr = timings[key];
                if (timeStr) {
                    const [h, m] = timeStr.split(':').map(Number);
                    const pVal = h * 60 + m;
                    prayers.push({ name: value, time: timeStr, val: pVal });
                }
            }

            prayers.sort((a, b) => a.val - b.val);

            for (const p of prayers) {
                if (p.val > currentTimeVal) {
                    nextP = p;
                    break;
                }
            }

            if (!nextP) {
                nextP = prayers[0];
            }

            setNextPrayer({ name: nextP.name, time: nextP.time });
        }
    }, [timings]);

    const features = [
        {
            title: "Waktu Sholat Berikutnya",
            subtitle: loading ? "Memuat..." : `${nextPrayer.name} ${nextPrayer.time}`,
            icon: Clock,
            color: "bg-emerald-500"
        },
        {
            title: "Waktu Imsyak Hari Ini",
            subtitle: loading ? "Memuat..." : (timings?.Imsak || "--:--"),
            icon: Star, // Using Star icon for Imsyak/Ramadan vibe
            color: "bg-indigo-500"
        },
    ];

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 font-arabic">Assalamualaikum,</h1>
                    <p className="text-primary-100 text-lg">Selamat datang di aplikasi Belajar Mengaji & Sholat.</p>
                    <p className="text-primary-100 text-sm mt-1">Mari tingkatkan ibadah dan pengetahuan kita hari ini.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Quick Stats / Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                            <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <feature.icon className="w-6 h-6" />}
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{feature.title}</p>
                                <h3 className="text-xl font-bold text-slate-800 mt-1">{feature.subtitle}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Badge Widget */}
                <BadgeWidget />
            </div>
        </div>
    );
};

export default Dashboard;
