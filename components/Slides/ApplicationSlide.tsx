'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './ApplicationSlide.module.css';

interface ApplicationSlideProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function ApplicationSlide({ content, accentColor }: ApplicationSlideProps) {
    return (
        <div className={styles.slide}>
            <motion.h2
                className={`heading-lg ${styles.headline}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {content.headline}
            </motion.h2>

            {content.takeaways && content.takeaways.length > 0 && (
                <motion.ul
                    className={styles.takeaways}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {content.takeaways.map((takeaway, index) => (
                        <motion.li
                            key={index}
                            className={`body-lg ${styles.takeaway}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        >
                            <span className={`${styles.bullet} accent-${accentColor}`}>→</span>
                            {takeaway}
                        </motion.li>
                    ))}
                </motion.ul>
            )}

            {content.body && (
                <motion.p
                    className={`body-md ${styles.body}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    {content.body}
                </motion.p>
            )}
        </div>
    );
}
