'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './Section2TitleSlide.module.css';

interface Section2TitleSlideProps {
    content: SlideContent;
    accentColor?: AccentColor;
}

export default function Section2TitleSlide({ content }: Section2TitleSlideProps) {
    const headline = content.headline || "Passing Review ≠ Being Right";
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
                SECTION 2
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

            {/* Visual: Checkmark that reveals flaws */}
            <div className={styles.visualContainer}>
                {/* Approval stamp background */}
                <motion.div
                    className={styles.stampBackground}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.0 }}
                >
                    {/* Checkmark */}
                    <motion.svg
                        className={styles.checkmark}
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                    >
                        <motion.path
                            d="M20 50 L40 70 L80 30"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 2.3 }}
                        />
                    </motion.svg>

                    {/* "APPROVED" text */}
                    <motion.div
                        className={styles.approvedText}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 2.8 }}
                    >
                        APPROVED
                    </motion.div>
                </motion.div>

                {/* Cracks/flaws that appear */}
                <motion.div
                    className={styles.cracksContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 3.5 }}
                >
                    {/* Warning symbols */}
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className={styles.warningIcon}
                            style={{
                                left: `${30 + i * 20}%`,
                                top: `${40 + (i % 2) * 20}%`
                            }}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 3.7 + (i * 0.15),
                                type: 'spring',
                                stiffness: 200
                            }}
                        >
                            ⚠
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
            >
                When intuition and consensus feel convincing
            </motion.p>
        </div>
    );
}
