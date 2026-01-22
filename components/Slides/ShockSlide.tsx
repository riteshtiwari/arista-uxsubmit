'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './ShockSlide.module.css';

interface ShockSlideProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function ShockSlide({ content, accentColor }: ShockSlideProps) {
    return (
        <div className={styles.slide}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h2
                    className={`heading-lg ${styles.headline} accent-${accentColor}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {content.headline}
                </motion.h2>

                {content.subheadline && (
                    <motion.p
                        className={`body-lg ${styles.subheadline} accent-${accentColor}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        {content.subheadline}
                    </motion.p>
                )}

                {content.body && (
                    <motion.p
                        className={`body-lg ${styles.body}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {content.body}
                    </motion.p>
                )}

                {content.source && (
                    <motion.p
                        className={`caption ${styles.source}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        Source: {content.source}
                    </motion.p>
                )}
            </motion.div>

            {content.visualization && (
                <motion.div
                    className={styles.visualization}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    {/* Visualization component will go here */}
                    <div className={`glass ${styles.chartPlaceholder}`}>
                        <span className="caption">Data Visualization</span>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
