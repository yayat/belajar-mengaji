import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Star, Shield, Loader2 } from 'lucide-react';
import { getLeaderboard } from '@/lib/leaderboard';

const Badge = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const data = await getLeaderboard(20); // Top 20
            setPlayers(data);
            setLoading(false);
        };

        fetchLeaderboard();
    }, []);

    const getBadgeColor = (rank) => {
        switch (rank) {
            case 1: return "text-yellow-500 bg-yellow-50 border-yellow-200";
            case 2: return "text-slate-400 bg-slate-50 border-slate-200";
            case 3: return "text-amber-700 bg-orange-50 border-orange-200";
            default: return "text-primary-600 bg-white border-slate-100";
        }
    };

    const getBadgeIcon = (rank) => {
        switch (rank) {
            case 1: return <Trophy className="w-6 h-6" />;
            case 2: return <Medal className="w-6 h-6" />;
            case 3: return <Medal className="w-6 h-6" />;
            default: return <Shield className="w-5 h-5" />;
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Trophy className="w-8 h-8 text-amber-500" />
                    Papan Peringkat (Badge)
                </h1>
                <p className="text-slate-500 mt-2">Daftar 20 Santri Terbaik Bulan Ini.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {loading ? (
                    <div className="flex items-center justify-center h-64">
                        <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
                    </div>
                ) : players.length === 0 ? (
                    <div className="p-8 text-center text-slate-500">
                        Belum ada data peringkat bulan ini. Jadilah yang pertama!
                    </div>
                ) : (
                    <div className="p-6 space-y-3">
                        {players.map((player, idx) => {
                            const rank = idx + 1;
                            return (
                                <div key={idx} className={`flex items-center justify-between p-4 rounded-xl border ${getBadgeColor(rank)} transition-transform hover:scale-[1.01]`}>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center justify-center w-10 h-10 font-bold text-lg">
                                            {getBadgeIcon(rank)}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-800 text-lg">{player.name}</span>
                                            <span className="text-xs font-semibold opacity-70">Peringkat #{rank}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 font-bold text-xl">
                                        <Star className="w-5 h-5 fill-current" />
                                        {player.score}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Badge;
