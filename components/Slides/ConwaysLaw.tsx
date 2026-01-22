'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './ConwaysLaw.module.css';

interface ConwaysLawProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function ConwaysLaw({ content, accentColor }: ConwaysLawProps) {
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
                className={styles.diagramContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <svg
                    viewBox="0 0 1000 500"
                    className={styles.diagram}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Left side: Org Chart */}
                    <g className={styles.orgChart}>
                        {/* CEO box */}
                        <motion.g
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <rect x="50" y="50" width="120" height="50" rx="4" className={styles.orgBox} />
                            <text x="110" y="80" className={styles.orgText} textAnchor="middle">CEO</text>
                        </motion.g>

                        {/* Lines from CEO to teams */}
                        <motion.line
                            x1="110" y1="100" x2="70" y2="160"
                            className={styles.orgLine}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.4, delay: 1.3 }}
                        />
                        <motion.line
                            x1="110" y1="100" x2="150" y2="160"
                            className={styles.orgLine}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.4, delay: 1.3 }}
                        />

                        {/* Team A */}
                        <motion.g
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.5 }}
                        >
                            <rect x="10" y="160" width="120" height="50" rx="4" className={styles.orgBox} />
                            <text x="70" y="190" className={styles.orgText} textAnchor="middle">Team A</text>
                        </motion.g>

                        {/* Team B */}
                        <motion.g
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.7 }}
                        >
                            <rect x="90" y="160" width="120" height="50" rx="4" className={styles.orgBox} />
                            <text x="150" y="190" className={styles.orgText} textAnchor="middle">Team B</text>
                        </motion.g>

                        {/* Subteams under Team A */}
                        <motion.line
                            x1="50" y1="210" x2="30" y2="270"
                            className={styles.orgLine}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.3, delay: 2 }}
                        />
                        <motion.line
                            x1="90" y1="210" x2="110" y2="270"
                            className={styles.orgLine}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.3, delay: 2 }}
                        />

                        <motion.rect
                            x="0" y="270" width="60" height="40" rx="3"
                            className={styles.orgBox}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                        />
                        <text x="30" y="295" className={styles.orgTextSmall} textAnchor="middle">A1</text>

                        <motion.rect
                            x="80" y="270" width="60" height="40" rx="3"
                            className={styles.orgBox}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.4 }}
                        />
                        <text x="110" y="295" className={styles.orgTextSmall} textAnchor="middle">A2</text>
                    </g>

                    {/* Center: Arrow morphing */}
                    <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 2.8 }}
                    >
                        <path
                            d="M 280 240 L 380 240 L 380 220 L 420 250 L 380 280 L 380 260 L 280 260 Z"
                            className={`${styles.arrow} accent-${accentColor}`}
                            fill="currentColor"
                        />
                    </motion.g>

                    {/* Right side: System Architecture (mirrors org structure) */}
                    <g className={styles.systemArch}>
                        {/* API Gateway (CEO equivalent) */}
                        <motion.g
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 3.2 }}
                        >
                            <rect x="730" y="50" width="140" height="50" rx="4" className={styles.systemBox} />
                            <text x="800" y="80" className={styles.systemText} textAnchor="middle">API Gateway</text>
                        </motion.g>

                        {/* Lines to services */}
                        <motion.line
                            x1="800" y1="100" x2="760" y2="160"
                            className={styles.systemLine}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.4, delay: 3.5 }}
                        />
                        <motion.line
                            x1="800" y1="100" x2="840" y2="160"
                            className={styles.systemLine}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.4, delay: 3.5 }}
                        />

                        {/* Service A (Team A) */}
                        <motion.g
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 3.7 }}
                        >
                            <rect x="700" y="160" width="120" height="50" rx="4" className={styles.systemBox} />
                            <text x="760" y="190" className={styles.systemText} textAnchor="middle">Service A</text>
                        </motion.g>

                        {/* Service B (Team B) */}
                        <motion.g
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 3.9 }}
                        >
                            <rect x="780" y="160" width="120" height="50" rx="4" className={styles.systemBox} />
                            <text x="840" y="190" className={styles.systemText} textAnchor="middle">Service B</text>
                        </motion.g>

                        {/* Microservices under Service A */}
                        <motion.line
                            x1="740" y1="210" x2="720" y2="270"
                            className={styles.systemLine}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.3, delay: 4.2 }}
                        />
                        <motion.line
                            x1="780" y1="210" x2="800" y2="270"
                            className={styles.systemLine}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.3, delay: 4.2 }}
                        />

                        <motion.rect
                            x="690" y="270" width="60" height="40" rx="3"
                            className={styles.systemBox}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.4 }}
                        />
                        <text x="720" y="295" className={styles.systemTextSmall} textAnchor="middle">API A1</text>

                        <motion.rect
                            x="770" y="270" width="60" height="40" rx="3"
                            className={styles.systemBox}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.6 }}
                        />
                        <text x="800" y="295" className={styles.systemTextSmall} textAnchor="middle">API A2</text>
                    </g>

                    {/* Pulsing connection lines showing the mirroring */}
                    <motion.line
                        x1="70" y1="185" x2="760" y2="185"
                        stroke="var(--accent-emerald)"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0] }}
                        transition={{ duration: 3, delay: 5, repeat: Infinity, repeatDelay: 2 }}
                    />
                    <motion.line
                        x1="30" y1="290" x2="720" y2="290"
                        stroke="var(--accent-emerald)"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0] }}
                        transition={{ duration: 3, delay: 5.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 5 }}
            >
                Organizations design systems that mirror their communication structures
            </motion.p>
        </div>
    );
}
