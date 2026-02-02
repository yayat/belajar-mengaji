import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    BookOpen,
    Moon,
    Sun,
    Menu,
    X,
    LayoutDashboard,
    GraduationCap,
    Book,
    HelpCircle,
    Trophy
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Sidebar = ({ isOpen, setIsOpen }) => {
    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
        { type: 'divider', label: 'Al-Quran' },
        { name: 'Hijaiyah', icon: BookOpen, path: '/quran/hijaiyah' },
        { name: 'Iqro (1-6)', icon: Book, path: '/quran/iqro' },
        { name: 'Tahsin', icon: GraduationCap, path: '/quran/tahsin' },
        { name: 'Tajwid', icon: Book, path: '/quran/tajwid' },
        { name: 'Juz Amma', icon: BookOpen, path: '/quran/juz-amma' },
        { type: 'divider', label: 'Ibadah' },
        { name: 'Wudhu', icon: Moon, path: '/sholat/wudhu' },
        { name: 'Sholat', icon: Sun, path: '/sholat/bacaan' },
        { name: 'Sunnah', icon: Sun, path: '/sholat/sunnah' },
        { name: 'Jadwal Sholat', icon: Moon, path: '/sholat/jadwal' },
        { type: 'divider', label: 'Kitab' },
        { name: 'Kitab Kuning', icon: Book, path: '/kitab/kuning' },
        { type: 'divider', label: 'Extra' },
        { name: 'Quiz', icon: HelpCircle, path: '/quiz' },
        { name: 'Badge', icon: Trophy, path: '/badge' },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/50 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Content */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-30 w-64 transform bg-gradient-to-b from-primary-800 to-primary-900 text-white transition-transform duration-300 ease-in-out md:static md:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex h-16 items-center justify-between px-4 shadow-lg bg-primary-950/20">
                        <h1 className="text-xl font-bold font-arabic tracking-wide flex items-center gap-2">
                            <Moon className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                            Belajar Mengaji
                        </h1>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="md:hidden rounded-lg p-1 hover:bg-white/10"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1 scrollbar-thin scrollbar-thumb-white/20">
                        {menuItems.map((item, index) => {
                            if (item.type === 'divider') {
                                return (
                                    <div key={index} className="px-4 py-2 mt-4 text-xs font-semibold text-primary-200 uppercase tracking-wider">
                                        {item.label}
                                    </div>
                                );
                            }

                            const Icon = item.icon;
                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)} // Close on mobile click
                                    className={({ isActive }) => cn(
                                        "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-white/10 text-white shadow-sm"
                                            : "text-primary-100 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    <Icon className="h-5 w-5" />
                                    {item.name}
                                </NavLink>
                            );
                        })}
                    </nav>

                    {/* Footer - Copyright */}
                    <div className="border-t border-white/10 p-4 bg-primary-950/30">
                        <p className="text-xs text-center text-primary-300 font-medium">
                            &copy; {new Date().getFullYear()} YAYAT RUHIAT
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
