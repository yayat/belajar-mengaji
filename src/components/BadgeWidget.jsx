import React, { useState, useEffect } from 'react';
import { Trophy, Star, ChevronRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLeaderboard } from '@/lib/leaderboard';

const BadgeWidget = () => {
    const [top3, setTop3] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getLeaderboard(3);
            setTop3(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-center items-center h-48">
            <Loader2 className="w-6 h-6 animate-spin text-primary-500" />
        </div>
    );

    if (top3.length === 0) return null;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    Top 3 Badge
                </h2>
                <Link to="/badge" className="text-sm text-primary-600 font-bold hover:underline flex items-center">
                    Lihat Semua <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                    {/* 2nd Place */}
                    {top3[1] && (
                        <div className="order-2 md:order-1 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-slate-200 border-4 border-slate-300 flex items-center justify-center text-xl font-bold text-slate-600 mb-3 shadow-inner">
                                {top3[1].name.charAt(0)}
                            </div>
                            <div className="text-center">
                                <span className="bg-slate-200 text-slate-700 text-xs font-bold px-2 py-0.5 rounded-full">#2</span>
                                <h3 className="font-bold text-slate-800 mt-1">{top3[1].name}</h3>
                                <p className="text-amber-600 text-sm font-bold flex items-center gap-1 justify-center">
                                    <Star className="w-3 h-3 fill-amber-600" /> {top3[1].score}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* 1st Place */}
                    {top3[0] && (
                        <div className="order-1 md:order-2 flex flex-col items-center transform -translate-y-2">
                            <div className="relative">
                                <Trophy className="w-6 h-6 text-yellow-400 absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce" />
                                <div className="w-20 h-20 rounded-full bg-yellow-100 border-4 border-yellow-400 flex items-center justify-center text-2xl font-bold text-yellow-700 mb-3 shadow-lg ring ring-yellow-400/20">
                                    {top3[0].name.charAt(0)}
                                </div>
                            </div>
                            <div className="text-center">
                                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">#1 Juara</span>
                                <h3 className="font-bold text-slate-900 mt-2">{top3[0].name}</h3>
                                <p className="text-amber-600 font-bold flex items-center gap-1 justify-center">
                                    <Star className="w-4 h-4 fill-amber-600" /> {top3[0].score}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* 3rd Place */}
                    {top3[2] && (
                        <div className="order-3 md:order-3 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-orange-100 border-4 border-orange-300 flex items-center justify-center text-xl font-bold text-orange-700 mb-3 shadow-inner">
                                {top3[2].name.charAt(0)}
                            </div>
                            <div className="text-center">
                                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-full">#3</span>
                                <h3 className="font-bold text-slate-800 mt-1">{top3[2].name}</h3>
                                <p className="text-amber-600 text-sm font-bold flex items-center gap-1 justify-center">
                                    <Star className="w-3 h-3 fill-amber-600" /> {top3[2].score}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BadgeWidget;
