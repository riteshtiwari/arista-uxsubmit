'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './SectionTitleSlide.module.css';

interface SectionTitleSlideProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function SectionTitleSlide({ content, accentColor }: SectionTitleSlideProps) {
    const words = (content.headline || "Section").split(" ");

    return (
        <div className={styles.slide}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Section Number */}
                <motion.div
                    className={styles.sectionNumber}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className={styles.numberText}>Section 1</span>
                </motion.div>

                {/* Main Title - Staggered Words */}
                <div className={styles.titleContainer}>
                    {words.map((word, index) => (
                        <motion.h1
                            key={index}
                            className={`${styles.titleWord} accent-${accentColor}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 + (index * 0.15) }}
                        >
                            {word}
                        </motion.h1>
                    ))}
                </div>

                {/* Visual Element - Animated Eye/Vision Graphic */}
                <motion.div
                    className={styles.visualContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <svg viewBox="0 0 200 120" className={styles.visual}>
                        {/* Eye outline */}
                        <motion.ellipse
                            cx="100"
                            cy="60"
                            rx="80"
                            ry="40"
                            fill="none"
                            stroke={`var(--accent-${accentColor})`}
                            strokeWidth="3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.8 }}
                            transition={{ duration: 1, delay: 2 }}
                        />

                        {/* Iris */}
                        <motion.circle
                            cx="100"
                            cy="60"
                            r="20"
                            fill="none"
                            stroke={`var(--accent-${accentColor})`}
                            strokeWidth="2"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.6 }}
                            transition={{ duration: 0.5, delay: 2.5 }}
                        />

                        {/* Pupil */}
                        <motion.circle
                            cx="100"
                            cy="60"
                            r="8"
                            fill={`var(--accent-${accentColor})`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: 2.8 }}
                        />

                        {/* Scanning lines - animated */}
                        <motion.line
                            x1="100"
                            y1="20"
                            x2="100"
                            y2="100"
                            stroke={`var(--accent-${accentColor})`}
                            strokeWidth="1"
                            opacity="0.4"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: [0, 1, 1, 0] }}
                            transition={{ duration: 2, delay: 3.2, repeat: Infinity, repeatDelay: 1 }}
                            style={{ transformOrigin: 'center' }}
                        />
                        <motion.line
                            x1="20"
                            y1="60"
                            x2="180"
                            y2="60"
                            stroke={`var(--accent-${accentColor})`}
                            strokeWidth="1"
                            opacity="0.4"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: [0, 1, 1, 0] }}
                            transition={{ duration: 2, delay: 3.5, repeat: Infinity, repeatDelay: 1 }}
                            style={{ transformOrigin: 'center' }}
                        />

                        {/* Question mark - for "what's missing?" */}
                        <motion.text
                            x="145"
                            y="35"
                            className={styles.questionMark}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: [0, 0.6, 0.6], scale: [0.5, 1, 1] }}
                            transition={{ duration: 1.5, delay: 3.8, repeat: Infinity, repeatDelay: 2 }}
                        >
                            ?
                        </motion.text>
                    </svg>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                >
                    Understanding how observation bias shapes what we see
                </motion.p>

                {/* Story Count */}
                <motion.div
                    className={styles.storyCount}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 3 }}
                >
                    <span className={styles.countNumber}>3</span>
                    <span className={styles.countLabel}>Stories</span>
                </motion.div>
            </motion.div>
        </div>
    );
}
