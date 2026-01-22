'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './PowerLaw.module.css';

interface PowerLawProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function PowerLaw({ content, accentColor }: PowerLawProps) {
    const features = [
        { name: 'Login', usage: 95, effort: 'Simple', delay: 1.5 },
        { name: 'View dashboard', usage: 88, effort: 'Simple', delay: 1.7 },
        { name: 'Basic search', usage: 72, effort: 'Simple', delay: 1.9 },
        { name: 'Edit profile', usage: 45, effort: 'Medium', delay: 2.1 },
        { name: 'Export data', usage: 28, effort: 'Medium', delay: 2.3 },
        { name: 'Advanced filters', usage: 12, effort: 'Complex', delay: 2.5 },
        { name: 'Custom reports', usage: 8, effort: 'Complex', delay: 2.7 },
        { name: 'Bulk operations', usage: 5, effort: 'Complex', delay: 2.9 },
        { name: 'API access', usage: 3, effort: 'Complex', delay: 3.1 },
        { name: 'Admin settings', usage: 2, effort: 'Complex', delay: 3.3 },
    ];

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
                className={styles.chartContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <svg
                    viewBox="0 0 1000 500"
                    className={styles.chart}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Title */}
                    <text x="50" y="40" className={styles.chartTitle}>Feature Usage Distribution</text>

                    {/* Y-axis label */}
                    <text x="30" y="250" className={styles.axisLabel} textAnchor="middle" transform="rotate(-90 30 250)">
                        % of Users
                    </text>

                    {/* Features and usage bars */}
                    {features.map((feature, i) => {
                        const y = 80 + i * 40;
                        const barWidth = feature.usage * 7; // Scale to fit

                        return (
                            <motion.g
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: feature.delay }}
                            >
                                {/* Feature name */}
                                <text
                                    x="70"
                                    y={y + 5}
                                    className={styles.featureName}
                                    textAnchor="start"
                                >
                                    {feature.name}
                                </text>

                                {/* Usage bar */}
                                <motion.rect
                                    x="250"
                                    y={y - 12}
                                    width={barWidth}
                                    height="20"
                                    rx="3"
                                    className={
                                        feature.effort === 'Simple'
                                            ? styles.barSimple
                                            : feature.effort === 'Medium'
                                                ? styles.barMedium
                                                : styles.barComplex
                                    }
                                    initial={{ width: 0 }}
                                    animate={{ width: barWidth }}
                                    transition={{ duration: 0.8, delay: feature.delay }}
                                />

                                {/* Usage percentage */}
                                <text
                                    x={260 + barWidth}
                                    y={y + 5}
                                    className={styles.percentage}
                                >
                                    {feature.usage}%
                                </text>

                                {/* Complexity indicator */}
                                <text
                                    x="950"
                                    y={y + 5}
                                    className={
                                        feature.effort === 'Simple'
                                            ? styles.effortSimple
                                            : feature.effort === 'Medium'
                                                ? styles.effortMedium
                                                : styles.effortComplex
                                    }
                                    textAnchor="end"
                                >
                                    {feature.effort}
                                </text>
                            </motion.g>
                        );
                    })}

                    {/* Drop-off annotation */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4 }}
                    >
                        {/* Curved arrow showing drop-off */}
                        <path
                            d="M 520 100 Q 600 200 550 300"
                            stroke="var(--accent-coral)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4 4"
                        />
                        <path
                            d="M 550 300 L 545 290 M 550 300 L 560 295"
                            stroke="var(--accent-coral)"
                            strokeWidth="2"
                            fill="none"
                        />

                        <rect x="560" y="270" width="180" height="50" rx="6" className={styles.annotationBox} />
                        <text x="650" y="290" className={styles.annotationText} textAnchor="middle" fontSize="13">
                            Massive drop-off
                        </text>
                        <text x="650" y="308" className={styles.annotationSubtext} textAnchor="middle" fontSize="11">
                            Most users never get here
                        </text>
                    </motion.g>

                    {/* 80/20 rule indicator */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5 }}
                    >
                        <rect x="100" y="455" width="300" height="35" rx="6" className={styles.ruleBox} />
                        <text x="250" y="478" className={styles.ruleText} textAnchor="middle">
                            80% of usage → Top 3 features
                        </text>
                    </motion.g>
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 5.5 }}
            >
                Most users only use the simplest part of any system
            </motion.p>
        </div>
    );
}
