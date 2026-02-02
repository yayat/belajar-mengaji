import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle, XCircle, Trophy, RefreshCcw } from 'lucide-react';
import questionsData from '@/data/questions.json';
import { saveScore, getLeaderboard } from '@/lib/leaderboard';

const Quiz = () => {
    const [gameState, setGameState] = useState('start'); // start, playing, result
    const [currentQuestions, setCurrentQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userName, setUserName] = useState('');
    const [leaderboard, setLeaderboard] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null); // true, false, null

    useEffect(() => {
        // Load leaderboard on mount
        const fetchLeaderboard = async () => {
            const data = await getLeaderboard();
            setLeaderboard(data);
        };
        fetchLeaderboard();
    }, []);

    const startGame = () => {
        if (!userName.trim()) return;

        // Pick 10 random questions
        const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
        setCurrentQuestions(shuffled.slice(0, 10));
        setCurrentIndex(0);
        setScore(0);
        setGameState('playing');
    };

    const handleAnswer = (option) => {
        if (selectedOption) return; // Prevent double click

        setSelectedOption(option);
        const correct = option === currentQuestions[currentIndex].answer;
        setIsCorrect(correct);

        if (correct) {
            setScore(prev => prev + 10);
        }

        // Auto next after 1.5s
        setTimeout(() => {
            if (currentIndex < 9) {
                setCurrentIndex(prev => prev + 1);
                setSelectedOption(null);
                setIsCorrect(null);
            } else {
                finishGame(correct ? score + 10 : score);
            }
        }, 1500);
    };

    const finishGame = async (finalScore) => {
        await saveScore(userName, finalScore);
        const data = await getLeaderboard();
        setLeaderboard(data);
        setGameState('result');
    };

    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            {gameState === 'start' && (
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center space-y-6">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                        <HelpCircle className="w-10 h-10 text-primary-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-800">Quiz Cerdas Cermat</h1>
                    <p className="text-slate-500">Uji pengetahuanmu seputar Islam.</p>
                    <p className="text-sm text-primary-600 font-medium">Tersedia {questionsData?.length || 0} Soal</p>

                    <input
                        type="text"
                        placeholder="Masukkan Namamu"
                        className="w-full p-4 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none text-center text-lg font-bold"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />

                    <button
                        onClick={startGame}
                        disabled={!userName.trim()}
                        className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-primary-200"
                    >
                        Mulai Quiz
                    </button>

                    {/* Mini Leaderboard */}
                    {leaderboard.length > 0 && (
                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <h3 className="font-bold text-slate-700 mb-4 flex items-center justify-center gap-2">
                                <Trophy className="w-4 h-4 text-amber-500" /> Top Skor Bulan Ini
                            </h3>
                            <div className="space-y-2">
                                {leaderboard.slice(0, 3).map((player, idx) => (
                                    <div key={idx} className="flex justify-between items-center text-sm bg-slate-50 p-2 rounded-lg">
                                        <span className="font-medium text-slate-600">#{idx + 1} {player.name}</span>
                                        <span className="font-bold text-primary-600">{player.score}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {gameState === 'playing' && (
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 min-h-[400px] flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-slate-500 font-medium">Soal {currentIndex + 1}/10</span>
                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-bold text-sm">Skor: {score}</span>
                    </div>

                    {/* Question */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center mb-8">
                            {currentQuestions[currentIndex].question}
                        </h2>

                        <div className="grid grid-cols-1 gap-3">
                            {currentQuestions[currentIndex].options.map((option, idx) => {
                                let btnClass = "p-4 rounded-xl border-2 text-left font-medium transition-all ";
                                if (selectedOption === option) {
                                    if (isCorrect) {
                                        btnClass += "border-emerald-500 bg-emerald-50 text-emerald-700";
                                    } else {
                                        btnClass += "border-red-500 bg-red-50 text-red-700";
                                    }
                                } else {
                                    btnClass += "border-slate-100 hover:border-primary-200 hover:bg-slate-50";
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(option)}
                                        disabled={selectedOption !== null}
                                        className={btnClass}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{option}</span>
                                            {selectedOption === option && (
                                                isCorrect
                                                    ? <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                    : <XCircle className="w-5 h-5 text-red-500" />
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {gameState === 'result' && (
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center space-y-6">
                    <Trophy className="w-20 h-20 text-yellow-400 mx-auto animate-bounce" />
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Quiz Selesai!</h2>
                        <p className="text-slate-500">Hebat, {userName}!</p>
                    </div>

                    <div className="text-5xl font-bold text-primary-600 my-4">
                        {score}
                        <span className="text-lg text-slate-400 font-medium block mt-2">Poin</span>
                    </div>

                    <button
                        onClick={() => setGameState('start')}
                        className="flex items-center justify-center gap-2 w-full bg-slate-800 text-white py-3 rounded-xl font-bold hover:bg-slate-900 transition-colors"
                    >
                        <RefreshCcw className="w-5 h-5" /> Main Lagi
                    </button>

                    {/* Full Leaderboard */}
                    <div className="mt-8 text-left">
                        <h3 className="font-bold text-slate-700 mb-4">Papan Peringkat</h3>
                        <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                            {leaderboard.map((player, idx) => (
                                <div key={idx} className={`flex justify-between items-center p-3 rounded-lg ${player.name === userName && player.score === score && idx < 10 ? 'bg-primary-50 border border-primary-200' : 'bg-slate-50'}`}>
                                    <div className="flex items-center gap-3">
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${idx < 3 ? 'bg-yellow-400 text-white' : 'bg-slate-200 text-slate-600'}`}>
                                            {idx + 1}
                                        </span>
                                        <span className="font-medium text-slate-700">{player.name}</span>
                                    </div>
                                    <span className="font-bold text-slate-800">{player.score}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
