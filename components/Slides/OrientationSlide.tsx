'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './OrientationSlide.module.css';

interface OrientationSlideProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function OrientationSlide({ content, accentColor }: OrientationSlideProps) {
    const sections = [
        { text: "where attention goes", color: "var(--accent-coral)" },
        { text: "why it felt right", color: "var(--accent-amber)" },
        { text: "what breaks later", color: "var(--accent-violet)" },
        { text: "what experience eventually teaches", color: "var(--accent-emerald)" }
    ];

    return (
        <div className={styles.slide}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Small muted title */}
                <motion.h3
                    className={styles.title}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    How this talk is structured
                </motion.h3>

                {/* Core message - condensed */}
                <motion.div
                    className={styles.coreMessage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <p className={styles.mainText}>
                        This is a walk through<br />
                        how good decisions drift over time.
                    </p>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    >
                        As attention, incentives, and scale change.
                    </motion.p>
                </motion.div>

                {/* Footer with flow visualization - centered */}
                <motion.div
                    className={styles.footer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                >
                    <p className={styles.footerLabel}>We'll move from:</p>

                    {/* Flow visualization */}
                    <div className={styles.flowContainer}>
                        <svg viewBox="0 0 800 200" className={styles.flowSvg}>
                            {/* Connecting path */}
                            <motion.path
                                d="M 50 100 Q 150 50, 250 100 T 450 100 T 650 100 L 750 100"
                                stroke="var(--text-muted)"
                                strokeWidth="2"
                                fill="none"
                                opacity={0.3}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 2.4, ease: "easeInOut" }}
                            />

                            {/* Flow nodes */}
                            {sections.map((section, index) => {
                                const x = 50 + (index * 233);
                                const y = 100;

                                return (
                                    <g key={index}>
                                        {/* Node circle */}
                                        <motion.circle
                                            cx={x}
                                            cy={y}
                                            r="8"
                                            fill={section.color}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.4, delay: 2.8 + (index * 0.2) }}
                                        />

                                        {/* Arrow between nodes */}
                                        {index < sections.length - 1 && (
                                            <motion.path
                                                d={`M ${x + 15} ${y} L ${x + 100} ${y}`}
                                                stroke={section.color}
                                                strokeWidth="2"
                                                fill="none"
                                                markerEnd="url(#arrowhead)"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.6 }}
                                                transition={{ duration: 0.5, delay: 3.0 + (index * 0.2) }}
                                            />
                                        )}
                                    </g>
                                );
                            })}

                            {/* Arrow marker definition */}
                            <defs>
                                <marker
                                    id="arrowhead"
                                    markerWidth="10"
                                    markerHeight="10"
                                    refX="9"
                                    refY="3"
                                    orient="auto"
                                >
                                    <polygon points="0 0, 10 3, 0 6" fill="currentColor" opacity="0.6" />
                                </marker>
                            </defs>
                        </svg>

                        {/* Labels below the flow */}
                        <div className={styles.labels}>
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.label}
                                    style={{ color: section.color }}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 2.8 + (index * 0.2) }}
                                >
                                    {section.text}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
