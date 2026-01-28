'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './LessonSlide.module.css';

interface LessonSlideProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function LessonSlide({ content, accentColor }: LessonSlideProps) {
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

    // Split takeaways into lines for dramatic reveal
    const lines = content.takeaways || [];
    
    return (
        <div className={styles.slide}>
            {sectionName && (
                <motion.div
                    className={styles.sectionLabel}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                >
                    {sectionName}
                </motion.div>
            )}

            <motion.div
                className={styles.content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Lesson
                </motion.h2>

                <div className={styles.lessonContainer}>
                    {lines.map((line, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.line} ${index === 1 ? styles.emphasis : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.3 + (index * 0.5),
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <span className={`accent-${accentColor}`}>{line}</span>
                        </motion.div>
                    ))}
                </div>
                
                <motion.div
                    className={styles.underline}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                        duration: 1.2, 
                        delay: 1.5,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                />
            </motion.div>
        </div>
    );
}
