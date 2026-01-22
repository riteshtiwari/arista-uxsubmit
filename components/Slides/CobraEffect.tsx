'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './CobraEffect.module.css';

interface CobraEffectProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function CobraEffect({ content, accentColor }: CobraEffectProps) {
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
                    {/* Bounty poster */}
                    <motion.g
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <rect x="50" y="50" width="200" height="280" rx="8" className={styles.poster} />
                        <text x="150" y="90" className={styles.posterTitle} textAnchor="middle">WANTED</text>

                        {/* Simple cobra icon on poster */}
                        <g transform="translate(80, 110)">
                            <path
                                d="M 70 40 Q 50 20 40 40 Q 30 60 50 80 L 60 120 Q 65 130 70 120 L 80 80 Q 100 60 90 40 Q 80 20 70 40"
                                fill="var(--accent-coral)"
                                opacity="0.6"
                            />
                            <circle cx="65" cy="45" r="2" fill="var(--bg-primary)" />
                            <circle cx="75" cy="45" r="2" fill="var(--bg-primary)" />
                        </g>

                        <text x="150" y="250" className={styles.bountyText} textAnchor="middle">₹10 per cobra</text>
                        <text x="150" y="280" className={styles.bountySubtext} textAnchor="middle">Dead or Alive</text>
                    </motion.g>

                    {/* Arrow showing consequence */}
                    <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 2 }}
                    >
                        <path
                            d="M 280 190 L 380 190 L 380 170 L 420 200 L 380 230 L 380 210 L 280 210 Z"
                            className={`${styles.arrow} accent-${accentColor}`}
                            fill="currentColor"
                        />
                    </motion.g>

                    {/* Cobra farm/breeding operation */}
                    <motion.g
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 2.5 }}
                    >
                        {/* Farm enclosure */}
                        <rect x="450" y="100" width="500" height="350" rx="12" className={styles.farm} />
                        <text x="700" y="140" className={styles.farmLabel} textAnchor="middle">Cobra Breeding Farm</text>

                        {/* Multiple cobras being bred */}
                        {[
                            { x: 500, y: 200, delay: 3 },
                            { x: 600, y: 220, delay: 3.2 },
                            { x: 700, y: 190, delay: 3.4 },
                            { x: 800, y: 210, delay: 3.6 },
                            { x: 550, y: 280, delay: 3.8 },
                            { x: 650, y: 300, delay: 4 },
                            { x: 750, y: 270, delay: 4.2 },
                            { x: 850, y: 290, delay: 4.4 },
                            { x: 520, y: 360, delay: 4.6 },
                            { x: 620, y: 380, delay: 4.8 },
                            { x: 720, y: 350, delay: 5 },
                            { x: 820, y: 370, delay: 5.2 },
                        ].map((cobra, i) => (
                            <motion.g
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: cobra.delay }}
                            >
                                {/* Simplified cobra shape */}
                                <path
                                    d={`M ${cobra.x} ${cobra.y} Q ${cobra.x - 10} ${cobra.y - 10} ${cobra.x - 15} ${cobra.y} Q ${cobra.x - 20} ${cobra.y + 10} ${cobra.x - 10} ${cobra.y + 20} L ${cobra.x} ${cobra.y + 30} Q ${cobra.x + 3} ${cobra.y + 35} ${cobra.x} ${cobra.y + 30} L ${cobra.x + 10} ${cobra.y + 20} Q ${cobra.x + 20} ${cobra.y + 10} ${cobra.x + 15} ${cobra.y} Q ${cobra.x + 10} ${cobra.y - 10} ${cobra.x} ${cobra.y}`}
                                    fill="var(--accent-coral)"
                                    opacity="0.7"
                                    className={styles.cobra}
                                />
                                <circle cx={cobra.x - 5} cy={cobra.y + 3} r="1.5" fill="var(--bg-primary)" />
                                <circle cx={cobra.x + 5} cy={cobra.y + 3} r="1.5" fill="var(--bg-primary)" />
                            </motion.g>
                        ))}

                        {/* Money counter */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 6 }}
                        >
                            <rect x="600" y="410" width="200" height="30" rx="6" className={styles.moneyCounter} />
                            <text x="700" y="432" className={styles.moneyText} textAnchor="middle">
                                <motion.tspan
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 6.5 }}
                                >
                                    Revenue: ₹120+
                                </motion.tspan>
                            </text>
                        </motion.g>
                    </motion.g>

                    {/* Problem indicator */}
                    <motion.text
                        x="500"
                        y="70"
                        className={`${styles.problemLabel} accent-${accentColor}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 7, duration: 0.5 }}
                    >
                        ⚠ Problem got worse
                    </motion.text>
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 7.5 }}
            >
                When you incentivize outcomes, people optimize for the incentive
            </motion.p>
        </div>
    );
}
