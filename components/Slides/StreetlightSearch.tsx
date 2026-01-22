'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './StreetlightSearch.module.css';

interface StreetlightSearchProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function StreetlightSearch({ content, accentColor }: StreetlightSearchProps) {
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
                    {/* Ground line */}
                    <line
                        x1="0"
                        y1="450"
                        x2="1000"
                        y2="450"
                        stroke="var(--text-muted)"
                        strokeWidth="2"
                        opacity="0.3"
                    />

                    {/* Streetlight pole */}
                    <motion.rect
                        x="700"
                        y="200"
                        width="8"
                        height="250"
                        fill="var(--text-muted)"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        style={{ transformOrigin: 'bottom' }}
                    />

                    {/* Streetlight fixture */}
                    <motion.g
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.8 }}
                    >
                        <rect x="680" y="190" width="48" height="15" rx="3" fill="var(--bg-tertiary)" />
                        <path
                            d="M 680,205 L 704,215 L 728,205 Z"
                            fill="var(--bg-elevated)"
                        />
                    </motion.g>

                    {/* Light cone - animated glow */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.4, 0.3] }}
                        transition={{ duration: 1.5, delay: 2, repeat: Infinity, repeatDelay: 2 }}
                    >
                        <defs>
                            <radialGradient id="lightGlow" cx="50%" cy="0%">
                                <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.6" />
                                <stop offset="50%" stopColor="var(--accent-cyan)" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <ellipse
                            cx="704"
                            cy="400"
                            rx="180"
                            ry="90"
                            fill="url(#lightGlow)"
                        />
                    </motion.g>

                    {/* Illuminated search area (under light) */}
                    <motion.circle
                        cx="704"
                        cy="450"
                        r="160"
                        fill="none"
                        stroke="var(--accent-cyan)"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        opacity="0.3"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.2 }}
                    />

                    {/* Person searching (silhouette) */}
                    <motion.g
                        className={styles.person}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 2.5 }}
                    >
                        {/* Head */}
                        <circle cx="720" cy="350" r="20" fill="var(--text-secondary)" />
                        {/* Body */}
                        <rect x="710" y="370" width="20" height="50" fill="var(--text-secondary)" />
                        {/* Bent arm searching */}
                        <motion.line
                            x1="730"
                            y1="380"
                            x2="760"
                            y2="400"
                            stroke="var(--text-secondary)"
                            strokeWidth="6"
                            strokeLinecap="round"
                            animate={{
                                x2: [760, 750, 770, 760],
                                y2: [400, 410, 405, 400]
                            }}
                            transition={{
                                duration: 2,
                                delay: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        {/* Other arm */}
                        <line x1="710" y1="380" x2="680" y2="395" stroke="var(--text-secondary)" strokeWidth="6" strokeLinecap="round" />
                        {/* Legs */}
                        <line x1="715" y1="420" x2="705" y2="450" stroke="var(--text-secondary)" strokeWidth="6" strokeLinecap="round" />
                        <line x1="725" y1="420" x2="735" y2="450" stroke="var(--text-secondary)" strokeWidth="6" strokeLinecap="round" />
                    </motion.g>

                    {/* Keys in the dark (barely visible) */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.15, 0.1] }}
                        transition={{ duration: 2, delay: 3.5, repeat: Infinity, repeatDelay: 3 }}
                    >
                        {/* Key icon in dark area */}
                        <g transform="translate(300, 430)">
                            <rect x="0" y="0" width="30" height="12" rx="2" fill="var(--accent-coral)" opacity="0.4" />
                            <circle cx="35" cy="6" r="8" fill="none" stroke="var(--accent-coral)" strokeWidth="2" opacity="0.4" />
                            <line x1="40" y1="2" x2="43" y2="2" stroke="var(--accent-coral)" strokeWidth="2" opacity="0.4" />
                            <line x1="40" y1="10" x2="43" y2="10" stroke="var(--accent-coral)" strokeWidth="2" opacity="0.4" />
                        </g>
                    </motion.g>

                    {/* Search pattern indicators */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 1, delay: 3 }}
                    >
                        {[0, 1, 2, 3, 4].map((i) => (
                            <motion.circle
                                key={i}
                                cx={640 + i * 30}
                                cy={440 - Math.sin(i) * 10}
                                r="4"
                                fill="var(--accent-cyan)"
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1, 0] }}
                                transition={{
                                    duration: 1.5,
                                    delay: 3.5 + i * 0.2,
                                    repeat: Infinity,
                                    repeatDelay: 2
                                }}
                            />
                        ))}
                    </motion.g>
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 4 }}
            >
                Searching where it's easy to look, not where the answer is
            </motion.p>
        </div>
    );
}
