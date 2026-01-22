'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './RegressionMean.module.css';

interface RegressionMeanProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function RegressionMean({ content, accentColor }: RegressionMeanProps) {
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
                    {/* Chart axes */}
                    <line x1="100" y1="400" x2="900" y2="400" stroke="var(--text-muted)" strokeWidth="2" />
                    <line x1="100" y1="100" x2="100" y2="400" stroke="var(--text-muted)" strokeWidth="2" />

                    {/* Y-axis labels */}
                    <text x="80" y="150" className={styles.axisLabel} textAnchor="end">High</text>
                    <text x="80" y="250" className={styles.axisLabel} textAnchor="end">Mean</text>
                    <text x="80" y="390" className={styles.axisLabel} textAnchor="end">Low</text>

                    {/* Mean line */}
                    <motion.line
                        x1="100"
                        y1="250"
                        x2="900"
                        y2="250"
                        stroke="var(--text-muted)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    />

                    {/* X-axis time markers */}
                    {['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'].map((label, i) => (
                        <text
                            key={i}
                            x={180 + i * 130}
                            y="425"
                            className={styles.timeLabel}
                            textAnchor="middle"
                        >
                            {label}
                        </text>
                    ))}

                    {/* Data points path - showing regression pattern */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        {/* Line connecting points */}
                        <motion.path
                            d="M 180 250 L 310 370 L 440 250 L 570 300 L 700 260 L 830 250"
                            stroke="var(--accent-cyan)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.5 }}
                        />

                        {/* Data points */}
                        {[
                            { x: 180, y: 250, week: 1, label: 'Normal', delay: 1.8 },
                            { x: 310, y: 370, week: 2, label: 'Crisis!', delay: 2.3, crisis: true },
                            { x: 440, y: 250, week: 3, label: '', delay: 2.8 },
                            { x: 570, y: 300, week: 4, label: '', delay: 3.3 },
                            { x: 700, y: 260, week: 5, label: '', delay: 3.8 },
                            { x: 830, y: 250, week: 6, label: 'Back to normal', delay: 4.3 },
                        ].map((point, i) => (
                            <motion.g
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: point.delay }}
                            >
                                <circle
                                    cx={point.x}
                                    cy={point.y}
                                    r={point.crisis ? 10 : 6}
                                    className={point.crisis ? styles.crisisPoint : styles.dataPoint}
                                />
                                {point.label && (
                                    <text
                                        x={point.x}
                                        y={point.y - 20}
                                        className={point.crisis ? styles.crisisLabel : styles.pointLabel}
                                        textAnchor="middle"
                                    >
                                        {point.label}
                                    </text>
                                )}
                            </motion.g>
                        ))}
                    </motion.g>

                    {/* Intervention marker */}
                    <motion.g
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3 }}
                    >
                        {/* Arrow pointing to intervention */}
                        <path
                            d="M 440 150 L 440 230"
                            stroke="var(--accent-emerald)"
                            strokeWidth="3"
                            fill="none"
                            markerEnd="url(#arrowhead)"
                        />
                        <defs>
                            <marker
                                id="arrowhead"
                                markerWidth="10"
                                markerHeight="10"
                                refX="5"
                                refY="5"
                                orient="auto"
                            >
                                <polygon points="0 0, 10 5, 0 10" fill="var(--accent-emerald)" />
                            </marker>
                        </defs>

                        <rect x="360" y="110" width="160" height="35" rx="6" className={styles.interventionBox} />
                        <text x="440" y="133" className={styles.interventionText} textAnchor="middle">
                            REDESIGN!
                        </text>
                    </motion.g>

                    {/* False attribution */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.5 }}
                    >
                        <path
                            d="M 650 200 Q 700 220 750 210"
                            stroke="var(--accent-emerald)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4 4"
                        />
                        <rect x="720" y="160" width="140" height="35" rx="4" className={styles.attributionBox} />
                        <text x="790" y="183" className={styles.attributionText} textAnchor="middle" fontSize="13">
                            "It worked!"
                        </text>
                    </motion.g>

                    {/* Reality annotation */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5.5 }}
                    >
                        <rect x="580" y="340" width="240" height="50" rx="6" className={styles.realityBox} />
                        <text x="700" y="360" className={styles.realityText} textAnchor="middle" fontSize="12">
                            Natural regression
                        </text>
                        <text x="700" y="378" className={styles.realitySubtext} textAnchor="middle" fontSize="11">
                            (would have happened anyway)
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
                Extreme outcomes naturally return to average
            </motion.p>
        </div>
    );
}
