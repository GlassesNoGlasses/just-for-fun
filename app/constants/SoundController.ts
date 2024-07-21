
export const playAudio = (id: string) => {
    try {
        const audio = document.getElementById(id) as HTMLAudioElement;
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    } catch (error) {
        console.warn("Could not play audio with id: ", id);
    }
}
