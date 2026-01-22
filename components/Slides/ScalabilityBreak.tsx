'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './ScalabilityBreak.module.css';

interface ScalabilityBreakProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function ScalabilityBreak({ content, accentColor }: ScalabilityBreakProps) {
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
                    {/* Left side: Small scale (10 devices) - Works fine */}
                    <g className={styles.smallScale}>
                        <motion.text
                            x="200"
                            y="30"
                            className={styles.scaleLabel}
                            textAnchor="middle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            10 Devices
                        </motion.text>

                        {/* Clean dashboard */}
                        <motion.g
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            <rect x="50" y="60" width="300" height="360" rx="8" className={styles.dashboard} />

                            {/* Header */}
                            <rect x="70" y="80" width="260" height="40" rx="4" className={styles.header} />
                            <text x="200" y="105" className={styles.headerText} textAnchor="middle">Dashboard</text>

                            {/* 10 items - clean list */}
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                                <motion.rect
                                    key={i}
                                    x="70"
                                    y={140 + i * 28}
                                    width="260"
                                    height="22"
                                    rx="3"
                                    className={styles.listItem}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5 + i * 0.05 }}
                                />
                            ))}

                            {/* Check mark - works! */}
                            <motion.g
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2.5 }}
                            >
                                <circle cx="200" cy="440" r="20" className={styles.checkCircle} />
                                <path d="M 190 440 L 197 447 L 210 434" stroke="var(--accent-emerald)" strokeWidth="3" fill="none" strokeLinecap="round" />
                            </motion.g>
                        </motion.g>
                    </g>

                    {/* Arrow showing scale increase */}
                    <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 3 }}
                    >
                        <path
                            d="M 380 240 L 570 240 L 570 220 L 610 250 L 570 280 L 570 260 L 380 260 Z"
                            className={`${styles.arrow} accent-${accentColor}`}
                            fill="currentColor"
                        />
                        <text x="495" y="220" className={styles.arrowLabel} textAnchor="middle">10x scale</text>
                    </motion.g>

                    {/* Right side: Large scale (10,000 devices) - Breaks */}
                    <g className={styles.largeScale}>
                        <motion.text
                            x="800"
                            y="30"
                            className={`${styles.scaleLabel} accent-${accentColor}`}
                            textAnchor="middle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.5 }}
                        >
                            10,000 Devices
                        </motion.text>

                        {/* Broken dashboard */}
                        <motion.g
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 3.7 }}
                        >
                            <rect x="650" y="60" width="300" height="360" rx="8" className={styles.dashboardBroken} />

                            {/* Header with loading */}
                            <rect x="670" y="80" width="260" height="40" rx="4" className={styles.headerBroken} />
                            <text x="800" y="105" className={styles.headerText} textAnchor="middle">Dashboard</text>

                            {/* Loading spinner */}
                            <motion.circle
                                cx="920"
                                cy="100"
                                r="8"
                                stroke="var(--accent-amber)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="20 10"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Overwhelmed list - too many items */}
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                                <motion.rect
                                    key={i}
                                    x="670"
                                    y={140 + i * 16}
                                    width="260"
                                    height="12"
                                    rx="2"
                                    className={styles.listItemBroken}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: i < 10 ? 0.7 : 0.3 }}
                                    transition={{ delay: 4 + i * 0.03 }}
                                />
                            ))}

                            {/* Pagination nightmare */}
                            <motion.g
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 5 }}
                            >
                                <rect x="720" y="370" width="160" height="25" rx="3" className={styles.pagination} />
                                <text x="800" y="387" className={styles.paginationText} textAnchor="middle" fontSize="11">
                                    1 2 3 ... 487 →
                                </text>
                            </motion.g>

                            {/* Error badge */}
                            <motion.g
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 5.5 }}
                            >
                                <circle cx="800" cy="440" r="20" className={styles.errorCircle} />
                                <text x="800" y="448" className={styles.errorIcon} textAnchor="middle">!</text>
                            </motion.g>
                        </motion.g>

                        {/* Problem indicators */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 6 }}
                        >
                            <text x="950" y="180" className={styles.problemTag} textAnchor="end" fontSize="11">Slow</text>
                            <text x="950" y="240" className={styles.problemTag} textAnchor="end" fontSize="11">Pagination storm</text>
                            <text x="950" y="300" className={styles.problemTag} textAnchor="end" fontSize="11">Filters mandatory</text>
                            <text x="950" y="360" className={styles.problemTag} textAnchor="end" fontSize="11">Unusable</text>
                        </motion.g>
                    </g>
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 7 }}
            >
                The same UI at different scales
            </motion.p>
        </div>
    );
}
