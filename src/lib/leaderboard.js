import { db } from './firebase';
import { collection, addDoc, query, where, orderBy, limit, getDocs, Timestamp } from "firebase/firestore";

const LOCAL_STORAGE_KEY = 'leaderboard';

// Helper to get start and end of current month
const getMonthRange = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    return { start, end };
};

export const saveScore = async (name, score) => {
    // Firebase Mode
    if (db) {
        try {
            await addDoc(collection(db, "scores"), {
                name: name,
                score: score,
                date: Timestamp.now()
            });
            return true;
        } catch (e) {
            console.error("Error adding document: ", e);
            return false;
        }
    }

    // LocalStorage Fallback
    else {
        const currentData = localStorage.getItem(LOCAL_STORAGE_KEY);
        const currentMonth = new Date().getMonth();
        let scores = [];

        if (currentData) {
            try {
                const parsed = JSON.parse(currentData);
                if (parsed.month === currentMonth) {
                    scores = parsed.scores;
                }
            } catch (e) {
                console.error("Error parsing leaderboard data, resetting.", e);
                localStorage.removeItem(LOCAL_STORAGE_KEY);
            }
        }

        scores.push({ name, score, date: new Date().toISOString() });
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
            month: currentMonth,
            scores: scores
        }));
        return true;
    }
};

export const getLeaderboard = async (limitCount = 10) => {
    // Firebase Mode
    if (db) {
        try {
            const { start, end } = getMonthRange();

            // Query: Current month scores, ordered by score desc
            const q = query(
                collection(db, "scores"),
                where("date", ">=", Timestamp.fromDate(start)),
                where("date", "<=", Timestamp.fromDate(end)),
                orderBy("date"), // Note: Composite index might be needed for date + score
                // To keep it simple without index issues initially, we might fetch then sort client side if small data
                // Or better: just filter by date in client for small apps, or ensure index exists.
                // Let's try simple orderBy score first, but Firebase requires index for inequality filter on one field and sort on another.
                // WE WILL FETCH ALL THEN FILTER/SORT CLIENT SIDE to avoid index setup complexity for the user right now.
            );

            // Fetching strictly by month range
            const querySnapshot = await getDocs(q);
            let fetchedScores = [];
            querySnapshot.forEach((doc) => {
                fetchedScores.push({ id: doc.id, ...doc.data() });
            });

            // Sort by score desc
            fetchedScores.sort((a, b) => b.score - a.score);

            return fetchedScores.slice(0, limitCount);
        } catch (e) {
            console.error("Error fetching documents: ", e);
            // Fallback to empty if error (e.g., disconnected)
            return [];
        }
    }

    // LocalStorage Fallback
    else {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!data) return [];

        try {
            const parsed = JSON.parse(data);
            const currentMonth = new Date().getMonth();

            if (parsed.month !== currentMonth) {
                localStorage.removeItem(LOCAL_STORAGE_KEY);
                return [];
            }

            return parsed.scores
                .sort((a, b) => b.score - a.score)
                .slice(0, limitCount);
        } catch (e) {
            console.error("Error parsing leaderboard data", e);
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            return [];
        }
    }
};
