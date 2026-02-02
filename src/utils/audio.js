/* eslint-disable no-unused-vars */
/**
 * Utility to play Text-to-Speech using Native Browser API
 * @param {string} text - Text to speak
 * @param {function} onEnd - Callback when speech ends
 * @param {function} onError - Callback when error occurs
 */
export const playTextToSpeech = (text, onEnd, onError) => {
    try {
        if (!text) {
            if (onEnd) onEnd();
            return;
        }

        console.log(`Attempting to speak: ${text}`);

        if (!('speechSynthesis' in window)) {
            console.error("Browser does not support SpeechSynthesis");
            if (onError) onError(new Error("Browser not supported"));
            else alert("Browser anda tidak mendukung fitur suara.");
            return;
        }

        // Robustness: Cancel any pending speech to prevent queueing
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.9;

        // Try to pick a proper voice
        const voices = window.speechSynthesis.getVoices();
        const arabicVoice = voices.find(v => v.lang.toLowerCase().includes('ar'));
        if (arabicVoice) {
            utterance.voice = arabicVoice;
        } else {
            console.warn("Specific Arabic voice not found, using system default for ar-SA.");
        }

        utterance.onend = () => {
            console.log("Speech ended");
            if (onEnd) onEnd();
        };

        const handleError = (e) => {
            console.error("TTS Playback Error:", e);
            // Treat 'interrupted' or 'canceled' as safe end to unlock UI
            if (onError) onError(e);
            else if (onEnd) onEnd();
        };

        utterance.onerror = handleError;

        // Chrome bug workaround: 'speak' needs to be called after voices load? 
        // Usually fine for direct user interaction.
        window.speechSynthesis.speak(utterance);

    } catch (err) {
        console.error("TTS Critical Error:", err);
        if (onError) onError(err);
        else if (onEnd) onEnd();
    }
};
