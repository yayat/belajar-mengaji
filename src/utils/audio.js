export const playTextToSpeech = (text, onEnd, onError) => {
    // Try using Google Translate TTS (Un-official)
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ar&q=${encodeURIComponent(text)}`;
    const audio = new Audio(audioUrl);

    if (onEnd) audio.onended = onEnd;

    audio.onerror = () => {
        console.warn("Google TTS failed, falling back to Web Speech API");
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ar-SA';
            utterance.rate = 0.8;
            if (onEnd) utterance.onend = onEnd;
            // Web Speech API doesn't have a reliable onError for network issues, mostly synthesis errors
            if (onError) utterance.onerror = onError;
            window.speechSynthesis.speak(utterance);
        } else {
            if (onError) onError(new Error("Browser not supported"));
            alert("Browser anda tidak mendukung fitur suara.");
        }
    };

    audio.play().catch(e => {
        console.error("Audio play failed:", e);
        // Try fallback manually if play fails
        audio.onerror();
    });

    return audio; // Return the audio object (or undefined if fallback immediate)
};
