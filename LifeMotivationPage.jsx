import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const deepQuotes = [
  {
    text: "Ein Käfig bleibt ein Käfig, auch wenn er aus Gold ist.",
    author: "Franz Kafka",
  },
  {
    text: "Ich wünsche mir weniger Gedanken und mehr Schlaf.",
    author: "Sylvia Plath",
  },
  {
    text: "Der Mensch ist unglücklich, weil er nicht weiß, dass er glücklich ist.",
    author: "Fjodor Dostojewski",
  },
  {
    text: "Ich möchte nur leben und lieben und in der Sonne liegen.",
    author: "Virginia Woolf",
  },
  {
    text: "Poetische Seelen gehen tief – sie zerbrechen leise.",
    author: "Biriwan",
  },
  {
    text: "Wer die Schatten versteht, erkennt das Licht klarer.",
    author: "Unbekannt",
  },
  {
    text: "Angst ist ein Lehrer, Schmerz ein Mentor.",
    author: "Innere Stimme",
  },
  {
    text: "Die Wunde ist der Ort, wo das Licht in dich eindringt.",
    author: "Rumi",
  },
  {
    text: "Ich habe mich selbst verloren, um mich neu zu erschaffen.",
    author: "Unbekannt",
  }
];

export default function LifeMotivationPage() {
  // Zufallszitat für das Hero-Element
  const [heroQuote, setHeroQuote] = useState(deepQuotes[0]);
  useEffect(() => {
    setHeroQuote(deepQuotes[Math.floor(Math.random() * deepQuotes.length)]);
  }, []);
  
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        font-family: 'Georgia', serif;
        background: linear-gradient(120deg, #0e0e0e 70%, #251933 100%);
      }
      h1, .hero-quote {
        letter-spacing: 0.05em;
        text-shadow: 0 4px 24px rgba(150, 100, 255, 0.10);
      }
      .quote-card {
        transition: transform 0.18s cubic-bezier(.2,.8,.2,1), box-shadow 0.22s;
      }
      .quote-card:hover {
        transform: scale(1.035) translateY(-4px) rotate(-1deg);
        box-shadow: 0 10px 32px 0 rgba(140, 70, 255, 0.08),0 1.5px 8px 0 rgba(255,255,255,0.04);
      }
      .hero-quote {
        font-size: 1.7rem;
        color: #e2d6ff;
        background: linear-gradient(90deg,#3a2e47 60%,#1e1930 100%);
        border-radius: 18px;
        padding: 32px 22px;
        margin-bottom: 1.8rem;
        box-shadow: 0 2px 32px 0 rgba(160, 110, 255, 0.09);
      }
      @media (max-width: 640px) {
        .hero-quote { font-size: 1.05rem; padding: 18px 10px; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen text-white p-5 sm:p-10 bg-black flex flex-col">
      <div className="max-w-5xl mx-auto text-center flex-1 flex flex-col">
        <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-2 tracking-tight">Dark Poetry & Life Reflections</h1>
        <p className="mb-8 text-lg sm:text-xl text-gray-400 italic">
          Ein Ort für stille Gedanken, starke Worte und tiefgehende Inspiration.
        </p>
        {/* Hero-Zitat */}
        <motion.div
          className="hero-quote mx-auto max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="block">“{heroQuote.text}”</span>
          <span className="block mt-3 text-right text-sm text-rose-100/70 italic">– {heroQuote.author}</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {deepQuotes.map((quote, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04, rotate: -1 }}
              className="cursor-pointer quote-card"
            >
              <Card className="rounded-2xl shadow-2xl bg-gradient-to-br from-[#1b1b2b] to-[#231a2e] border border-[#2a1d33]">
                <CardContent className="p-6">
                  <p className="text-lg text-[#e8e6f9] leading-relaxed font-light drop-shadow-lg select-none" style={{
                    textShadow: "0 0 8px rgba(160,120,255,0.08)"
                  }}>
                    “{quote.text}”
                  </p>
                  <p className="mt-5 text-xs text-[#cfc3f2] italic">– {quote.author}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="https://instagram.com/lifefreedom810"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-white bg-gradient-to-r from-rose-800 via-fuchsia-700 to-indigo-800 rounded-full px-10 py-5 text-lg font-medium shadow-lg hover:shadow-2xl transition border border-fuchsia-900 hover:scale-105">
              <Instagram className="mr-2" /> Folge <span className="font-semibold mx-1">@lifefreedom810</span> auf Instagram
            </Button>
          </a>
          <div className="mt-2 text-xs text-gray-400">Mehr Inspiration? Folge uns für tägliche Impulse.</div>
        </div>
      </div>
    </div>
  );
}