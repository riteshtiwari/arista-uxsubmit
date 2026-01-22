'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './ConsistentWrong.module.css';

interface ConsistentWrongProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function ConsistentWrong({ content, accentColor }: ConsistentWrongProps) {
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
                <div className={styles.centeredContent}>
                    {/* Badge */}
                    <motion.div
                        className={styles.badgeContainer}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.0, type: "spring" }}
                    >
                        <div className={styles.badgeGlow} />
                        <div className={styles.badge}>
                            <span className={styles.checkIcon}>✓</span>
                            <span className={styles.badgeText}>Fully Compliant</span>
                        </div>
                    </motion.div>

                    {/* Result Text */}
                    <div className={styles.resultTextContainer}>
                        <motion.p
                            className={styles.passedText}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2.0 }}
                        >
                            Passed design review.
                        </motion.p>
                        <motion.p
                            className={styles.failedText}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2.8 }}
                        >
                            Failed the user.
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 5.5 }}
            >
                Consistency amplifies bad decisions
            </motion.p>
        </div>
    );
}
