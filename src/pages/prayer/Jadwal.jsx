import React from 'react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { MapPin, Calendar, Clock, Loader2 } from 'lucide-react';
import usePrayerTimes from '@/hooks/usePrayerTimes';

const Jadwal = () => {
    const { timings, loading, error, location } = usePrayerTimes();

    const prayerNames = {
        Fajr: "Subuh",
        Dhuhr: "Dzuhur",
        Asr: "Ashar",
        Maghrib: "Maghrib",
        Isha: "Isya",
        Imsak: "Imsyak"
    };

    const today = format(new Date(), 'EEEE, d MMMM yyyy', { locale: id });

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <Clock className="w-8 h-8 text-primary-600" />
                        Jadwal Sholat & Imsyak
                    </h1>
                    <div className="flex items-center gap-4 mt-2 text-slate-500 text-sm">
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {location.city}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {today}</span>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="flex items-center justify-center h-64">
                    <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
                </div>
            ) : error ? (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {Object.keys(prayerNames).map((key) => {
                        if (!timings[key]) return null;
                        return (
                            <div key={key} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                                <span className="text-slate-500 text-sm font-medium mb-2">{prayerNames[key]}</span>
                                <span className="text-xl md:text-2xl font-bold text-slate-800">{timings[key]}</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Jadwal;
