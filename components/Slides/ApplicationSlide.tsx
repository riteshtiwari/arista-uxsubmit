'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './ApplicationSlide.module.css';

interface ApplicationSlideProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function ApplicationSlide({ content, accentColor }: ApplicationSlideProps) {
    // Map accent colors to section names
    const getSectionName = (color: AccentColor): string => {
        const sectionMap: Record<AccentColor, string> = {
            coral: 'WHERE OUR ATTENTION GOES',
            amber: 'WHY IT FEELS RIGHT',
            violet: 'WHAT BREAKS AT SCALE',
            emerald: 'WHAT EXPERIENCE REVEALS',
            cyan: '',
            blue: '',
        };
        return sectionMap[color];
    };

    const sectionName = getSectionName(accentColor);

    // Check if this is an Enterprise Translation slide (has the special format)
    const isEnterpriseTranslation = content.takeaways?.some(t => 
        t.startsWith('IN THE PRODUCT') || t.startsWith('IN OPERATIONS') || t.startsWith('IN REVIEWS')
    );

    // Parse Enterprise Translation format: "IN THE PRODUCT — text"
    const parseTakeaway = (takeaway: string) => {
        const match = takeaway.match(/^(IN THE PRODUCT|IN OPERATIONS|IN REVIEWS)\s*—\s*(.+)$/);
        if (match) {
            return { label: match[1], content: match[2] };
        }
        return null;
    };

    if (isEnterpriseTranslation) {
        return (
            <div className={styles.slide}>
                {sectionName && (
                    <motion.div
                        className={styles.sectionLabel}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {sectionName}
                    </motion.div>
                )}

                <motion.h2
                    className={`heading-lg ${styles.headline}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Enterprise Translation
                </motion.h2>

                <div className={styles.enterpriseGrid}>
                    {content.takeaways?.map((takeaway, index) => {
                        const parsed = parseTakeaway(takeaway);
                        if (!parsed) return null;

                        return (
                            <motion.div
                                key={index}
                                className={`${styles.enterpriseCard} accent-${accentColor}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.3 + index * 0.15,
                                    ease: [0.23, 1, 0.32, 1]
                                }}
                            >
                                <div className={styles.enterpriseLabel}>
                                    {parsed.label}
                                </div>
                                <div className={styles.enterpriseContent}>
                                    {parsed.content}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {content.body && (
                    <motion.p
                        className={`body-md ${styles.body}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        {content.body}
                    </motion.p>
                )}
            </div>
        );
    }

    // Original layout for non-Enterprise Translation slides
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
