'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './ConclusionSlide.module.css';

interface ConclusionSlideProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function ConclusionSlide({ content, accentColor }: ConclusionSlideProps) {
    const lines = content.takeaways || [];
    
    return (
        <div className={styles.slide}>
            {/* Animated background glow */}
            <motion.div
                className={styles.backgroundGlow}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />
            
            <motion.div
                className={styles.content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* Main powerful statement with dramatic entrance */}
                <motion.div
                    className={styles.mainStatement}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1.2, 
                        delay: 0.6,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    {lines[0]}
                </motion.div>
                
                {/* Bold separator */}
                <motion.div
                    className={styles.separator}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                        duration: 1.4, 
                        delay: 1.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                />
                
                {/* Closing punch line */}
                {lines[1] && (
                    <motion.div
                        className={styles.closingLine}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 1, 
                            delay: 2.5,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        {lines[1]}
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
