"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {Zap, Users, CircleQuestionMark, Brain} from "lucide-react";

const MotionImage = motion(Image);

export default function Home() {
    return (
        <div className="z-10 flex items-center justify-center w-full flex-col">
            <div className="flex flex-col items-center justify-center w-full gap-4 lg:w-auto mb-10">

                <div className="relative flex items-center justify-center">

                    {/* Glow */}
                    <div className="absolute w-72 h-72 bg-lime-400/40 blur-[120px] rounded-full"></div>

                    <MotionImage
                        className="relative w-72 h-72"
                        src="/logo.svg"
                        alt="Image of a brain melting (logo)"
                        width={500}
                        height={500}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />

                </div>

                <div className="drop-shadow-[0_0_4px_rgba(163,230,53,0.7)]">
                    <h1
                        className="text-2xl md:text-6xl font-bold text-lime-300 bg-clip-text h-20 tracking-wider"
                    >
                        ONE BRAINCELL
                    </h1>
                </div>

                <p className="text-gray-500 text-xl">Pensem igual (se conseguirem).</p>
            </div>

            <div className="flex flex-col gap-5">
                <button type="submit" className="bg-lime-500 drop-shadow-[0_0_4px_rgba(163,230,53,0.7)] flex items-center justify-center gap-8 py-5 px-30 rounded-xl">
                    <Zap color="#000" className=""/>
                    <span className="text-black font-extrabold">Criar sala</span>
                </button>

                <button type="submit" className="border-2 border-pink-600 flex items-center justify-center gap-8 py-5 px-30 rounded-xl">
                    <Users color="#e60076" className=""/>
                    <span className="text-pink-600">Entrar em uma sala</span>
                </button>
            </div>

            <div className="flex gap-3 mt-6">
                <CircleQuestionMark color="#6a7282" />
                <span className="text-gray-500 text-md">Como jogar?</span>
            </div>

            <div className="flex gap-10 mt-10">
                <div className="flex items-center justify-center gap-3">
                    <Brain color="#7ccf00" size={20} />
                    <span className="text-gray-500 text-md">2-8 Jogadores</span>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <Zap color="#e60076" size={20} />
                    <span className="text-gray-500 text-md">Perguntas aleatórias</span>
                </div>
            </div>
        </div>
    );
}