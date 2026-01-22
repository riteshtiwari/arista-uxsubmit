'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './MapTerritory.module.css';

interface MapTerritoryProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function MapTerritory({ content, accentColor }: MapTerritoryProps) {
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
                    {/* Left side: Clean, perfect user journey map */}
                    <g className={styles.mapSide}>
                        <motion.text
                            x="200"
                            y="30"
                            className={styles.sideLabel}
                            textAnchor="middle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ delay: 1 }}
                        >
                            The Map
                        </motion.text>

                        {/* Perfect linear user journey */}
                        {[0, 1, 2, 3].map((i) => (
                            <motion.g
                                key={i}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 1.2 + i * 0.2 }}
                            >
                                {/* Step box */}
                                <rect
                                    x={100 + i * 0}
                                    y={80 + i * 90}
                                    width={200}
                                    height={60}
                                    rx="8"
                                    className={styles.mapStep}
                                />
                                <text
                                    x={200 + i * 0}
                                    y={115 + i * 90}
                                    className={styles.stepText}
                                    textAnchor="middle"
                                >
                                    {['Login', 'Browse', 'Select', 'Complete'][i]}
                                </text>

                                {/* Arrow down */}
                                {i < 3 && (
                                    <motion.path
                                        d={`M 200 ${140 + i * 90} L 200 ${170 + i * 90} L 190 ${160 + i * 90} M 200 ${170 + i * 90} L 210 ${160 + i * 90}`}
                                        className={styles.mapArrow}
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.3, delay: 2 + i * 0.2 }}
                                    />
                                )}
                            </motion.g>
                        ))}
                    </g>

                    {/* Divider */}
                    <motion.line
                        x1="450"
                        y1="50"
                        x2="450"
                        y2="450"
                        stroke="var(--text-muted)"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 2.5 }}
                    />

                    {/* Right side: Messy reality */}
                    <g className={styles.territorySide}>
                        <motion.text
                            x="700"
                            y="30"
                            className={`${styles.sideLabel} accent-${accentColor}`}
                            textAnchor="middle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3 }}
                        >
                            The Territory
                        </motion.text>

                        {/* Messy, chaotic real user paths */}
                        {/* Login - but with issues */}
                        <motion.g
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 3.2 }}
                        >
                            <rect x="600" y="80" width="200" height="60" rx="8" className={styles.territoryStep} />
                            <text x="700" y="115" className={styles.stepTextTerritory} textAnchor="middle">Login</text>
                        </motion.g>

                        {/* Error branches */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.5 }}
                        >
                            {/* Forgot password path */}
                            <path
                                d="M 650 140 Q 580 170 560 200"
                                stroke="var(--accent-coral)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="4 4"
                            />
                            <rect x="510" y="200" width="100" height="35" rx="4" className={styles.errorBox} />
                            <text x="560" y="222" className={styles.errorText} fontSize="11" textAnchor="middle">Forgot PW</text>

                            {/* SSO redirect */}
                            <path
                                d="M 750 140 Q 820 170 840 200"
                                stroke="var(--accent-amber)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="4 4"
                            />
                            <rect x="790" y="200" width="100" height="35" rx="4" className={styles.errorBox} />
                            <text x="840" y="222" className={styles.errorText} fontSize="11" textAnchor="middle">SSO redirect</text>
                        </motion.g>

                        {/* Browse - with permission issues */}
                        <motion.g
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 3.8 }}
                        >
                            <path d="M 700 140 L 700 255" className={styles.messyArrow} />
                            <rect x="600" y="255" width="200" height="60" rx="8" className={styles.territoryStep} />
                            <text x="700" y="290" className={styles.stepTextTerritory} textAnchor="middle">Browse</text>
                        </motion.g>

                        {/* Permission error */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4 }}
                        >
                            <path d="M 750 315 Q 820 330 820 360" stroke="var(--accent-coral)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                            <rect x="770" y="360" width="110" height="35" rx="4" className={styles.errorBox} />
                            <text x="825" y="382" className={styles.errorText} fontSize="11" textAnchor="middle">403 Error</text>
                        </motion.g>

                        {/* Workaround path */}
                        <motion.path
                            d="M 650 315 Q 550 380 700 420"
                            stroke="var(--accent-amber)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 4.2, duration: 1 }}
                        />

                        {/* Final chaos indicator */}
                        <motion.circle
                            cx="700"
                            cy="420"
                            r="8"
                            className={`${styles.chaosPoint} accent-${accentColor}`}
                            fill="currentColor"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{ delay: 5, duration: 0.5 }}
                        />
                    </g>

                    {/* Annotation arrows pointing to complexity */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ delay: 5.5 }}
                    >
                        <text x="500" y="470" className={styles.annotation} fontSize="13" textAnchor="middle">
                            Exception paths, errors, workarounds
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
                Clean diagrams hide messy reality
            </motion.p>
        </div>
    );
}
