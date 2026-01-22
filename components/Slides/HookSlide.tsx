'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './HookSlide.module.css';

interface HookSlideProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function HookSlide({ content, accentColor }: HookSlideProps) {
    return (
        <div className={styles.slide}>
            <motion.h1
                className={`heading-xl ${styles.headline}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {content.headline}
            </motion.h1>

            {content.subheadline && (
                <motion.p
                    className={`body-lg ${styles.subheadline} accent-${accentColor}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {content.subheadline}
                </motion.p>
            )}

            {content.visual && (
                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {/* Visual placeholder - replace with actual image */}
                    <div className={styles.placeholder}></div>
                </motion.div>
            )}
        </div>
    );
}
