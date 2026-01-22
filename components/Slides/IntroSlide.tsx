'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './IntroSlide.module.css';

interface IntroSlideProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function IntroSlide({ content, accentColor }: IntroSlideProps) {
    return (
        <div className={styles.slide}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Main title */}
                <motion.h1
                    className={`${styles.title} accent-${accentColor}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    When Good Design Decisions
                </motion.h1>
                <motion.h1
                    className={styles.titleBreak}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Go Bad
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    …the invisible ways good decisions produce bad outcomes
                </motion.p>

                {/* Visual element - broken path */}
                <motion.div
                    className={styles.visualContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <svg viewBox="0 0 600 120" className={styles.visual}>
                        {/* Good intentions path (left - smooth) */}
                        <motion.path
                            d="M 50 60 Q 150 60 200 60"
                            stroke="var(--accent-emerald)"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 1.8 }}
                        />
                        <circle cx="50" cy="60" r="6" fill="var(--accent-emerald)" />
                        <text x="50" y="90" className={styles.pathLabel} textAnchor="middle">
                            Good Intent
                        </text>

                        {/* Arrow transition */}
                        <motion.path
                            d="M 210 60 L 240 60"
                            stroke="var(--text-muted)"
                            strokeWidth="2"
                            fill="none"
                            markerEnd="url(#arrowIntro)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 2.3 }}
                        />
                        <defs>
                            <marker
                                id="arrowIntro"
                                markerWidth="10"
                                markerHeight="10"
                                refX="9"
                                refY="3"
                                orient="auto"
                            >
                                <path d="M0,0 L0,6 L9,3 z" fill="var(--text-muted)" />
                            </marker>
                        </defs>

                        {/* Problems path (right - broken/jagged) */}
                        <motion.path
                            d="M 250 60 L 290 55 L 330 65 L 370 50 L 410 70 L 450 55 L 490 60 L 530 65 L 550 60"
                            stroke="var(--accent-coral)"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2, delay: 2.5 }}
                        />
                        <circle cx="550" cy="60" r="6" fill="var(--accent-coral)" />
                        <text x="550" y="90" className={styles.pathLabel} textAnchor="middle">
                            Reality
                        </text>
                    </svg>
                </motion.div>

                {/* Event info */}
                <motion.div
                    className={styles.eventInfo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 0.6, delay: 3.5 }}
                >
                    <p className={styles.event}>A UX Submit talk — January 2026</p>
                </motion.div>

                {/* Presenter */}
                <motion.div
                    className={styles.presenter}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 4 }}
                >
                    <p className={styles.name}>Ritesh Tiwari</p>
                    <p className={styles.role}>Product Designer, Arista</p>
                </motion.div>
            </motion.div>
        </div>
    );
}
