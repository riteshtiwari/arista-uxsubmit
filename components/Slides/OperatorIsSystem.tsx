'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './OperatorIsSystem.module.css';

interface OperatorIsSystemProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function OperatorIsSystem({ content, accentColor }: OperatorIsSystemProps) {
    return (
        <div className={styles.slide}>
            <motion.h1
                className={`heading-lg ${styles.headline}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                {content.headline}
            </motion.h1>

            <motion.div
                className={styles.sceneContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <svg
                    viewBox="0 0 1000 600"
                    className={styles.scene}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Dark gradient background */}
                    <defs>
                        <linearGradient id="nightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#0a0a15', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#1a1a2e', stopOpacity: 1 }} />
                        </linearGradient>
                        <radialGradient id="lampGlow" cx="50%" cy="50%">
                            <stop offset="0%" style={{ stopColor: '#ffd700', stopOpacity: 0.6 }} />
                            <stop offset="50%" style={{ stopColor: '#ffa500', stopOpacity: 0.2 }} />
                            <stop offset="100%" style={{ stopColor: '#ff8800', stopOpacity: 0 }} />
                        </radialGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Window with moon */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <rect x="700" y="80" width="200" height="180" rx="8" fill="#0d0d1a" stroke="#2a2a3e" strokeWidth="3" />
                        <line x1="800" y1="80" x2="800" y2="260" stroke="#2a2a3e" strokeWidth="2" />
                        <line x1="700" y1="170" x2="900" y2="170" stroke="#2a2a3e" strokeWidth="2" />
                        {/* Moon */}
                        <circle cx="850" cy="130" r="25" fill="#d4d4d8" opacity="0.3" />
                    </motion.g>

                    {/* Desk lamp with glow */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        {/* Lamp glow */}
                        <ellipse cx="280" cy="420" rx="120" ry="80" fill="url(#lampGlow)" opacity="0.5" />
                        {/* Lamp base */}
                        <rect x="265" y="410" width="8" height="40" fill="#52525b" />
                        <ellipse cx="269" cy="450" rx="15" ry="4" fill="#3f3f46" />
                        {/* Lamp arm */}
                        <line x1="269" y1="410" x2="250" y2="360" stroke="#52525b" strokeWidth="4" strokeLinecap="round" />
                        {/* Lamp shade */}
                        <path d="M 230 360 L 270 360 L 260 340 L 240 340 Z" fill="#71717a" stroke="#52525b" strokeWidth="2" />
                        {/* Light beam */}
                        <path d="M 245 360 L 200 420 L 320 420 L 255 360 Z" fill="#ffd700" opacity="0.15" />
                    </motion.g>

                    {/* Exhausted operator */}
                    <motion.g
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                    >
                        {/* Chair */}
                        <ellipse cx="400" cy="470" rx="45" ry="8" fill="#27272a" />
                        <rect x="385" y="440" width="30" height="30" rx="4" fill="#3f3f46" />
                        
                        {/* Body - slumped */}
                        <ellipse cx="400" cy="380" rx="35" ry="50" fill="#52525b" />
                        
                        {/* Head tilted */}
                        <circle cx="395" cy="340" r="25" fill="#71717a" />
                        
                        {/* Hand on forehead */}
                        <motion.path
                            d="M 380 345 Q 370 340 365 335"
                            stroke="#71717a"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            animate={{ d: ["M 380 345 Q 370 340 365 335", "M 380 345 Q 370 340 365 330", "M 380 345 Q 370 340 365 335"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        {/* Hand on keyboard */}
                        <rect x="350" y="420" width="60" height="8" rx="2" fill="#3f3f46" />
                        <path d="M 380 400 L 380 420" stroke="#71717a" strokeWidth="8" strokeLinecap="round" />
                    </motion.g>

                    {/* Multiple floating screens */}
                    {/* Screen 1 - Bright with alerts */}
                    <motion.g
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        <rect x="100" y="150" width="180" height="130" rx="6" fill="#18181b" stroke="#ef4444" strokeWidth="2" filter="url(#glow)" />
                        {/* Alert icons */}
                        <circle cx="130" cy="180" r="8" fill="#ef4444" opacity="0.8" />
                        <circle cx="160" cy="180" r="8" fill="#ef4444" opacity="0.8" />
                        <circle cx="190" cy="180" r="8" fill="#ef4444" opacity="0.6" />
                        {/* Chart lines */}
                        <motion.path
                            d="M 120 220 L 140 210 L 160 225 L 180 205 L 200 230 L 220 215 L 240 235"
                            stroke="#f87171"
                            strokeWidth="2"
                            fill="none"
                            animate={{ strokeDashoffset: [0, -20] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            strokeDasharray="4 4"
                        />
                        {/* Warning symbol */}
                        <path d="M 190 250 L 200 250 L 195 235 Z" fill="#fbbf24" />
                        <circle cx="195" cy="255" r="2" fill="#fbbf24" />
                    </motion.g>

                    {/* Screen 2 - Dim with timeline */}
                    <motion.g
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                    >
                        <rect x="480" y="120" width="160" height="110" rx="6" fill="#18181b" stroke="#52525b" strokeWidth="1.5" opacity="0.6" />
                        {/* Timeline bars */}
                        <rect x="500" y="150" width="15" height="60" rx="2" fill="#3f3f46" />
                        <rect x="525" y="165" width="15" height="45" rx="2" fill="#3f3f46" />
                        <rect x="550" y="155" width="15" height="55" rx="2" fill="#3f3f46" />
                        <rect x="575" y="170" width="15" height="40" rx="2" fill="#52525b" />
                        <rect x="600" y="160" width="15" height="50" rx="2" fill="#3f3f46" />
                    </motion.g>

                    {/* Screen 3 - Cluttered overlapping */}
                    <motion.g
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6, duration: 0.6 }}
                    >
                        <rect x="620" y="280" width="200" height="140" rx="6" fill="#18181b" stroke="#a855f7" strokeWidth="1.5" opacity="0.7" />
                        {/* Overlapping elements */}
                        <rect x="640" y="300" width="70" height="40" rx="3" fill="#27272a" stroke="#6366f1" strokeWidth="1" />
                        <rect x="670" y="320" width="70" height="40" rx="3" fill="#27272a" stroke="#8b5cf6" strokeWidth="1" />
                        <rect x="700" y="340" width="70" height="40" rx="3" fill="#27272a" stroke="#a855f7" strokeWidth="1" />
                        {/* Grid pattern */}
                        <path d="M 640 370 L 780 370 M 640 385 L 780 385 M 640 400 L 780 400" stroke="#3f3f46" strokeWidth="1" opacity="0.5" />
                    </motion.g>

                    {/* Screen 4 - Graphs and charts */}
                    <motion.g
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.6 }}
                    >
                        <rect x="300" y="100" width="140" height="100" rx="6" fill="#18181b" stroke="#10b981" strokeWidth="1.5" opacity="0.5" />
                        {/* Pie chart segments */}
                        <circle cx="370" cy="150" r="30" fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray="60 130" opacity="0.4" />
                        <circle cx="370" cy="150" r="30" fill="none" stroke="#34d399" strokeWidth="20" strokeDasharray="40 150" strokeDashoffset="-60" opacity="0.3" />
                    </motion.g>

                    {/* Screen 5 - Small status monitor */}
                    <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2, duration: 0.6 }}
                    >
                        <rect x="160" y="340" width="100" height="70" rx="4" fill="#18181b" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6" />
                        {/* Status dots */}
                        <circle cx="185" cy="365" r="4" fill="#22c55e" />
                        <circle cx="210" cy="365" r="4" fill="#eab308" />
                        <circle cx="235" cy="365" r="4" fill="#ef4444" />
                        {/* Lines */}
                        <rect x="180" y="380" width="60" height="3" rx="1.5" fill="#3f3f46" />
                        <rect x="180" y="390" width="50" height="3" rx="1.5" fill="#3f3f46" />
                    </motion.g>
                </svg>
            </motion.div>
        </div>
    );
}
