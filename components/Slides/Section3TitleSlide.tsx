'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './Section3TitleSlide.module.css';

interface Section3TitleSlideProps {
    content: SlideContent;
    accentColor?: AccentColor;
}

export default function Section3TitleSlide({ content }: Section3TitleSlideProps) {
    const headline = content.headline || "Consequences Nobody Designs For";
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
                SECTION 3
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

            {/* Visual: Ripple effect showing cascade */}
            <div className={styles.visualContainer}>
                {/* Center dot - origin */}
                <motion.div
                    className={styles.originDot}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.0 }}
                />

                {/* Expanding ripples */}
                {[0, 1, 2, 3].map((index) => (
                    <motion.div
                        key={index}
                        className={styles.ripple}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 1.5 + index * 0.5],
                            opacity: [0, 0.6, 0]
                        }}
                        transition={{
                            duration: 2,
                            delay: 2.2 + (index * 0.3),
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 0.8
                        }}
                    />
                ))}

                {/* Scale indicators */}
                <div className={styles.scaleIndicators}>
                    {['1x', '10x', '100x'].map((label, index) => (
                        <motion.div
                            key={label}
                            className={styles.scaleLabel}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 2.5 + (index * 0.2)
                            }}
                        >
                            {label}
                        </motion.div>
                    ))}
                </div>

                {/* Arrow showing growth */}
                <motion.svg
                    className={styles.growthArrow}
                    viewBox="0 0 200 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                >
                    <motion.path
                        d="M 20 80 Q 60 70, 100 40 T 180 10"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 2.8 }}
                    />
                    <motion.path
                        d="M 165 5 L 180 10 L 175 25"
                        fill="currentColor"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 4.0 }}
                    />
                </motion.svg>
            </div>

            {/* Subtitle */}
            <motion.p
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
            >
                When growth reveals hidden dependencies
            </motion.p>

            {/* Story count */}
            <motion.div
                className={styles.storyCount}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.0 }}
            >
                3 STORIES
            </motion.div>
        </div>
    );
}
