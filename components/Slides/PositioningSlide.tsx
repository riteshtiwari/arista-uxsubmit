'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './PositioningSlide.module.css';

interface PositioningSlideProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function PositioningSlide({ content, accentColor }: PositioningSlideProps) {
    const notAboutItems = [
        "taste",
        "pixels",
        "design maturity"
    ];

    return (
        <div className={styles.slide}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Title */}
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    This is not about
                </motion.h2>

                {/* Not About List */}
                <div className={styles.notAboutList}>
                    {notAboutItems.map((item, index) => (
                        <motion.div
                            key={item}
                            className={styles.notAboutItem}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                        >
                            <motion.span
                                className={styles.strikethrough}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.4, delay: 1.3 + (index * 0.2) }}
                            />
                            <span className={styles.itemText}>{item}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    className={styles.divider}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                />

                {/* The Real Point */}
                <motion.h2
                    className={`${styles.realPoint} accent-${accentColor}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
                >
                    It's about decisions that
                </motion.h2>

                <motion.h1
                    className={`${styles.mainPoint} accent-${accentColor}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 3.2 }}
                >
                    felt right at review time
                </motion.h1>

                {/* Kicker line - delayed, smaller, emphasized */}
                <motion.h2
                    className={styles.kicker}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 6.0 }}
                >
                    and failed later
                </motion.h2>
            </motion.div>
        </div>
    );
}
