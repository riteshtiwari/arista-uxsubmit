'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './LocalGlobal.module.css';

interface LocalGlobalProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function LocalGlobal({ content, accentColor }: LocalGlobalProps) {
    const steps = [
        { team: 'Team A', screen: 'Onboarding', metric: '↑ 95% completion', delay: 1.5 },
        { team: 'Team B', screen: 'Dashboard', metric: '↑ Fast load', delay: 1.8 },
        { team: 'Team C', screen: 'Settings', metric: '↑ Clean UI', delay: 2.1 },
        { team: 'Team D', screen: 'Checkout', metric: '↑ 88% conversion', delay: 2.4 },
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
                className={styles.sceneContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <svg
                    viewBox="0 0 1000 500"
                    className={styles.scene}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Local optimization - each team's metrics look great */}
                    <text x="500" y="40" className={styles.sectionLabel} textAnchor="middle">
                        Local Optimization: Each Part Looks Great
                    </text>

                    {/* Individual optimized screens */}
                    {steps.map((step, i) => {
                        const x = 100 + i * 220;

                        return (
                            <motion.g
                                key={i}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: step.delay }}
                            >
                                {/* Team label */}
                                <text x={x + 80} y="80" className={styles.teamLabel} textAnchor="middle">
                                    {step.team}
                                </text>

                                {/* Screen box */}
                                <rect
                                    x={x}
                                    y="90"
                                    width="160"
                                    height="80"
                                    rx="6"
                                    className={styles.screenBox}
                                />
                                <text x={x + 80} y="125" className={styles.screenText} textAnchor="middle">
                                    {step.screen}
                                </text>
                                <text x={x + 80} y="145" className={styles.metricText} textAnchor="middle" fontSize="12">
                                    {step.metric}
                                </text>

                                {/* Checkmark - local success */}
                                <motion.g
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: step.delay + 0.3 }}
                                >
                                    <circle cx={x + 140} cy="105" r="12" className={styles.checkCircle} />
                                    <path
                                        d={`M ${x + 135} 105 L ${x + 139} 109 L ${x + 145} 101`}
                                        stroke="var(--bg-primary)"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </motion.g>

                                {/* Arrow to next */}
                                {i < steps.length - 1 && (
                                    <motion.path
                                        d={`M ${x + 165} 130 L ${x + 200} 130`}
                                        stroke="var(--text-muted)"
                                        strokeWidth="2"
                                        fill="none"
                                        markerEnd="url(#arrow)"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: step.delay + 0.5 }}
                                    />
                                )}
                            </motion.g>
                        );
                    })}

                    {/* Arrow marker definition */}
                    <defs>
                        <marker
                            id="arrow"
                            markerWidth="10"
                            markerHeight="10"
                            refX="9"
                            refY="3"
                            orient="auto"
                            markerUnits="strokeWidth"
                        >
                            <path d="M0,0 L0,6 L9,3 z" fill="var(--text-muted)" />
                        </marker>
                    </defs>

                    {/* Global result - broken workflow */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 }}
                    >
                        <line x1="50" y1="230" x2="950" y2="230" stroke="var(--text-muted)" strokeWidth="2" opacity="0.2" />

                        <text x="500" y="270" className={`${styles.sectionLabel} accent-${accentColor}`} textAnchor="middle">
                            Global Reality: The Workflow Is Broken
                        </text>
                    </motion.g>

                    {/* Problems in the workflow */}
                    <motion.g
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4 }}
                    >
                        {[
                            { x: 180, label: 'Data doesn\'t transfer', icon: 'X' },
                            { x: 400, label: 'Inconsistent patterns', icon: '≠' },
                            { x: 620, label: 'Re-entry required', icon: '↻' },
                        ].map((problem, i) => (
                            <motion.g
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 4.2 + i * 0.3 }}
                            >
                                <circle cx={problem.x} cy="320" r="20" className={styles.problemCircle} />
                                <text x={problem.x} y="328" className={styles.problemIcon} textAnchor="middle">
                                    {problem.icon}
                                </text>
                                <text x={problem.x} y="360" className={styles.problemLabel} textAnchor="middle" fontSize="11">
                                    {problem.label}
                                </text>
                            </motion.g>
                        ))}
                    </motion.g>

                    {/* End-to-end metric */}
                    <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 5.5 }}
                    >
                        <rect x="320" y="400" width="360" height="60" rx="8" className={styles.resultBox} />
                        <text x="500" y="425" className={styles.resultLabel} textAnchor="middle">
                            End-to-End Experience
                        </text>
                        <text x="500" y="448" className={styles.resultMetric} textAnchor="middle">
                            ↓ 32% workflow completion
                        </text>
                    </motion.g>
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 6 }}
            >
                Optimizing parts can harm the whole
            </motion.p>
        </div >
    );
}
