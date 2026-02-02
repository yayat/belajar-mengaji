import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Dashboard from '@/components/Dashboard';

import Hijaiyah from '@/pages/quran/Hijaiyah';
import Iqro from '@/pages/quran/Iqro';
import Tahsin from '@/pages/quran/Tahsin';
import Tajwid from '@/pages/quran/Tajwid';
import JuzAmma from '@/pages/quran/JuzAmma';
import Badge from '@/pages/badge/Badge';

import Wudhu from '@/pages/prayer/Wudhu';
import Sholat from '@/pages/prayer/Sholat';
import Sunnah from '@/pages/prayer/Sunnah';
import Jadwal from '@/pages/prayer/Jadwal';
import Kitab from '@/pages/kitab/NahwuSorof';
import Quiz from '@/pages/quiz/Quiz';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Dashboard />} />

                {/* Quran */}
                <Route path="/quran/hijaiyah" element={<Hijaiyah />} />
                <Route path="/quran/iqro" element={<Iqro />} />
                <Route path="/quran/tahsin" element={<Tahsin />} />
                <Route path="/quran/tajwid" element={<Tajwid />} />
                <Route path="/quran/juz-amma" element={<JuzAmma />} />

                {/* Prayer */}
                <Route path="/sholat/wudhu" element={<Wudhu />} />
                <Route path="/sholat/bacaan" element={<Sholat />} />
                <Route path="/sholat/sunnah" element={<Sunnah />} />
                <Route path="/sholat/jadwal" element={<Jadwal />} />

                {/* Kitab */}
                <Route path="/kitab/kuning" element={<Kitab />} />

                {/* Quiz */}
                <Route path="/quiz" element={<Quiz />} />

                {/* Helper */}
                <Route path="/badge" element={<Badge />} />
            </Route>
        </Routes>
    );
}

export default App;
