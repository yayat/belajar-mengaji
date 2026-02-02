import { useState, useEffect } from 'react';
import axios from 'axios';

const usePrayerTimes = () => {
    const [timings, setTimings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState({ city: "Jakarta", lat: -6.2088, long: 106.8456 });

    useEffect(() => {
        // Attempt to get user location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        city: "Lokasi Anda",
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    });
                },
                (err) => {
                    console.log("Using default location (Jakarta)");
                }
            );
        }
    }, []);

    useEffect(() => {
        const fetchTimings = async () => {
            try {
                setLoading(true);
                const date = new Date();
                const timestamp = Math.floor(date.getTime() / 1000);

                // Using Aladhan API
                const response = await axios.get('https://api.aladhan.com/v1/timings/' + timestamp, {
                    params: {
                        latitude: location.lat,
                        longitude: location.long,
                        method: 20 // Kemenag Indonesia standard
                    }
                });

                if (response.data && response.data.data) {
                    setTimings(response.data.data.timings);
                }
            } catch (err) {
                console.error("Error fetching prayer times:", err);
                setError("Gagal memuat jadwal sholat.");
            } finally {
                setLoading(false);
            }
        };

        fetchTimings();
    }, [location.lat, location.long]);

    return { timings, loading, error, location };
};

export default usePrayerTimes;
