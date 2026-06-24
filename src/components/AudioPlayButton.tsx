import { useEffect, useState } from "react";
import { Volume2, Pause } from "lucide-react";

interface AudioPlayButtonProps {
  /** Texte lu par la synthèse vocale (TTS). Si audioSrc est fourni, prioritaire. */
  text: string;
  audioSrc?: string;
  label?: string;
  className?: string;
}

/**
 * Bouton inclusif : joue un témoignage audio ou, à défaut,
 * fait lire le texte via la synthèse vocale du navigateur.
 * Accessibilité : permet aux personnes malvoyantes ou dyslexiques
 * d'écouter les portraits.
 */
export function AudioPlayButton({ text, audioSrc, label = "Écouter", className = "" }: AudioPlayButtonProps) {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audio) audio.pause();
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [audio]);

  const stop = () => {
    if (audio) audio.pause();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setPlaying(false);
  };

  const play = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (playing) {
      stop();
      return;
    }
    if (audioSrc) {
      const a = new Audio(audioSrc);
      a.onended = () => setPlaying(false);
      a.onerror = () => setPlaying(false);
      a.play().catch(() => setPlaying(false));
      setAudio(a);
      setPlaying(true);
      return;
    }
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "fr-FR";
      utter.rate = 0.95;
      utter.pitch = 1;
      utter.onend = () => setPlaying(false);
      utter.onerror = () => setPlaying(false);
      window.speechSynthesis.speak(utter);
      setPlaying(true);
    }
  };

  return (
    <button
      type="button"
      onClick={play}
      data-playing={playing}
      aria-label={playing ? "Arrêter la lecture" : `Écouter : ${label}`}
      aria-pressed={playing}
      className={`btn-audio ${className}`}
    >
      {playing ? <Pause size={16} aria-hidden /> : <Volume2 size={16} aria-hidden />}
      <span>{playing ? "Pause" : label}</span>
    </button>
  );
}
