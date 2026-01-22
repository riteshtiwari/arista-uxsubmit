'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './Section4TitleSlide.module.css';

interface Section4TitleSlideProps {
    content: SlideContent;
    accentColor?: AccentColor;
}

export default function Section4TitleSlide({ content }: Section4TitleSlideProps) {
    const headline = content.headline || "The Hard Truth";
    const words = headline.split(" ");

    return (
        <div className={styles.slide}>
            {/* Section number */}
            <motion.div
                className={styles.sectionLabel}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                SECTION 4
            </motion.div>

            {/* Animated title - staggered words */}
            <div className={styles.titleContainer}>
                {words.map((word, index) => (
                    <motion.h1
                        key={index}
                        className={styles.titleWord}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.6 + (index * 0.15),
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        {word}
                    </motion.h1>
                ))}
            </div>

            {/* Visual: Light bulb illuminating */}
            <div className={styles.visualContainer}>
                {/* Light bulb */}
                <svg className={styles.lightBulb} viewBox="0 0 100 140" fill="none">
                    {/* Bulb glass */}
                    <motion.path
                        d="M 30 50 Q 30 20, 50 20 Q 70 20, 70 50 Q 70 70, 60 85 L 60 95 L 40 95 L 40 85 Q 30 70, 30 50 Z"
                        stroke="var(--accent-emerald)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 2.0 }}
                    />

                    {/* Base */}
                    <motion.rect
                        x="38"
                        y="95"
                        width="24"
                        height="15"
                        rx="2"
                        stroke="var(--accent-emerald)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 2.5 }}
                    />

                    {/* Filament */}
                    <motion.path
                        d="M 45 70 Q 50 60, 55 70"
                        stroke="var(--accent-emerald)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 2.8 }}
                    />
                </svg>

                {/* Glow effect */}
                <motion.div
                    className={styles.glow}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0, 1, 0.8], scale: [0.5, 1.2, 1] }}
                    transition={{
                        duration: 1.5,
                        delay: 3.2,
                        ease: "easeOut"
                    }}
                />

                {/* Light rays */}
                {[0, 1, 2, 3, 4, 5].map((index) => {
                    const angle = (index * 60) - 30;
                    return (
                        <motion.div
                            key={index}
                            className={styles.lightRay}
                            style={{
                                transform: `rotate(${angle}deg)`
                            }}
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: [0, 0.6, 0.4] }}
                            transition={{
                                duration: 0.8,
                                delay: 3.5 + (index * 0.1),
                                ease: "easeOut"
                            }}
                        />
                    );
                })}
            </div>

            {/* Subtitle */}
            <motion.p
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
            >
                When domain knowledge makes the difference
            </motion.p>

            {/* Story count */}
            <motion.div
                className={styles.storyCount}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.0 }}
            >
                1 STORY
            </motion.div>
        </div>
    );
}
