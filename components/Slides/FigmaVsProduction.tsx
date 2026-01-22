'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './FigmaVsProduction.module.css';

interface FigmaVsProductionProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function FigmaVsProduction({ content, accentColor }: FigmaVsProductionProps) {
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
                    {/* Left side - Figma prototype (perfect) */}
                    <motion.g
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <text x="250" y="40" className={styles.sideLabel} textAnchor="middle">
                            Figma Prototype
                        </text>

                        {/* Perfect screen */}
                        <rect x="100" y="60" width="300" height="400" rx="12" className={styles.figmaScreen} />

                        {/* Smooth transition animation */}
                        <motion.rect
                            x="130"
                            y="100"
                            width="240"
                            height="60"
                            rx="6"
                            className={styles.figmaCard}
                            animate={{ y: [100, 105, 100] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <text x="250" y="135" className={styles.cardText} textAnchor="middle">
                            Smooth transition
                        </text>

                        {/* Perfect data */}
                        <rect x="130" y="190" width="240" height="40" rx="4" className={styles.figmaData} />
                        <text x="250" y="215" className={styles.dataText} textAnchor="middle" fontSize="12">
                            ✓ Data loads instantly
                        </text>

                        <rect x="130" y="250" width="240" height="40" rx="4" className={styles.figmaData} />
                        <text x="250" y="275" className={styles.dataText} textAnchor="middle" fontSize="12">
                            ✓ Everything makes sense
                        </text>

                        {/* All green */}
                        <circle cx="250" cy="350" r="30" className={styles.successCircle} />
                        <text x="250" y="360" className={styles.successText} textAnchor="middle" fontSize="24">
                            ✓
                        </text>
                        <text x="250" y="420" className={styles.statusText} textAnchor="middle">
                            Flawless
                        </text>
                    </motion.g>

                    {/* Divider */}
                    <line x1="500" y1="50" x2="500" y2="470" stroke="var(--text-muted)" strokeWidth="2" opacity="0.3" />

                    {/* Right side - Production (messy reality) */}
                    <motion.g
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                    >
                        <text x="750" y="40" className={`${styles.sideLabel} accent-${accentColor}`} textAnchor="middle">
                            Production Reality
                        </text>

                        {/* Broken screen */}
                        <rect x="600" y="60" width="300" height="400" rx="12" className={styles.prodScreen} />

                        {/* API failure */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <rect x="630" y="100" width="240" height="60" rx="6" className={styles.errorBox} />
                            <text x="750" y="125" className={styles.errorText} textAnchor="middle">
                                API Failed
                            </text>
                            <text x="750" y="145" className={styles.errorSubtext} textAnchor="middle" fontSize="10">
                                500 Internal Server Error
                            </text>
                        </motion.g>

                        {/* Loading spinner */}
                        <motion.g
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            style={{ transformOrigin: "750px 210px" }}
                        >
                            <circle cx="750" cy="210" r="20" stroke="var(--accent-amber)" strokeWidth="3" fill="none" strokeDasharray="80 40" />
                        </motion.g>
                        <text x="750" y="255" className={styles.loadingText} textAnchor="middle" fontSize="11">
                            Loading... (12s)
                        </text>

                        {/* Overlapping states */}
                        <rect x="630" y="280" width="240" height="35" rx="4" className={styles.conflictBox} opacity="0.7" />
                        <rect x="640" y="290" width="240" height="35" rx="4" className={styles.conflictBox} opacity="0.8" />
                        <text x="750" y="315" className={styles.conflictText} textAnchor="middle" fontSize="11">
                            States overlapping
                        </text>

                        {/* All red */}
                        <circle cx="750" cy="370" r="30" className={styles.failureCircle} />
                        <text x="750" y="380" className={styles.failureText} textAnchor="middle" fontSize="24">
                            ✗
                        </text>
                        <text x="750" y="420" className={styles.statusText} textAnchor="middle">
                            Broken
                        </text>
                    </motion.g>

                    {/* Bottom caption */}
                    <motion.text
                        x="500"
                        y="480"
                        className={styles.bottomCaption}
                        textAnchor="middle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ delay: 3 }}
                    >
                        Figma has no latency
                    </motion.text>
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 3.5 }}
            >
                Real systems are hostile
            </motion.p>
        </div>
    );
}
