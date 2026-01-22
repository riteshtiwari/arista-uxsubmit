'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './SecondOrder.module.css';

interface SecondOrderProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function SecondOrder({ content, accentColor }: SecondOrderProps) {
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
                    {/* Timeline */}
                    <line x1="100" y1="250" x2="900" y2="250" stroke="var(--text-muted)" strokeWidth="2" opacity="0.3" />

                    {/* Time labels */}
                    <text x="100" y="280" className={styles.timeLabel} textAnchor="middle">Now</text>
                    <text x="400" y="280" className={styles.timeLabel} textAnchor="middle">Weeks</text>
                    <text x="700" y="280" className={styles.timeLabel} textAnchor="middle">Months</text>

                    {/* Initial action - Quick fix */}
                    <motion.g
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <circle cx="100" cy="250" r="30" className={`${styles.actionPoint} accent-${accentColor}`} fill="currentColor" />
                        <text x="100" y="320" className={styles.actionLabel} textAnchor="middle">Quick Fix</text>
                        <text x="100" y="340" className={styles.actionSublabel} textAnchor="middle">Ship fast!</text>
                    </motion.g>

                    {/* First-order effect - Immediate win */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <motion.path
                            d="M 130 250 Q 200 180 250 200"
                            stroke="var(--accent-emerald)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                        />
                        <motion.circle
                            cx="250"
                            cy="200"
                            r="20"
                            className={styles.positiveEffect}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.3 }}
                        />
                        <text x="250" y="175" className={styles.effectLabel} textAnchor="middle">✓ Works!</text>
                    </motion.g>

                    {/* Second-order effects - Delayed problems (ripples) */}
                    {/* Effect 1 */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                    >
                        <motion.path
                            d="M 270 210 Q 320 260 380 280"
                            stroke="var(--accent-amber)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeDasharray="6 6"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 2.5 }}
                        />
                        <motion.circle
                            cx="380"
                            cy="280"
                            r="15"
                            className={styles.warningEffect}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3.3 }}
                        />
                        <text x="380" y="315" className={styles.problemLabel} fontSize="12" textAnchor="middle">Tech debt</text>
                    </motion.g>

                    {/* Effect 2 */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                    >
                        <motion.path
                            d="M 270 210 Q 360 180 450 220"
                            stroke="var(--accent-amber)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeDasharray="6 6"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 3 }}
                        />
                        <motion.circle
                            cx="450"
                            cy="220"
                            r="15"
                            className={styles.warningEffect}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3.8 }}
                        />
                        <text x="450" y="200" className={styles.problemLabel} fontSize="12" textAnchor="middle">Workarounds</text>
                    </motion.g>

                    {/* Effect 3 - Cascading to more problems */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 }}
                    >
                        <motion.path
                            d="M 395 290 Q 520 340 600 320"
                            stroke="var(--accent-coral)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeDasharray="6 6"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 3.5 }}
                        />
                        <motion.circle
                            cx="600"
                            cy="320"
                            r="18"
                            className={styles.negativeEffect}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 4.3 }}
                        />
                        <text x="600" y="355" className={styles.problemLabel} fontSize="12" textAnchor="middle">Breaking changes</text>
                    </motion.g>

                    {/* Effect 4 */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4 }}
                    >
                        <motion.path
                            d="M 465 230 Q 580 200 680 240"
                            stroke="var(--accent-coral)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeDasharray="6 6"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 4 }}
                        />
                        <motion.circle
                            cx="680"
                            cy="240"
                            r="18"
                            className={styles.negativeEffect}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 4.8 }}
                        />
                        <text x="680" y="220" className={styles.problemLabel} fontSize="12" textAnchor="middle">Support burden</text>
                    </motion.g>

                    {/* Final compounded effect */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5 }}
                    >
                        <motion.path
                            d="M 615 330 Q 720 360 800 340"
                            stroke="var(--accent-coral)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 5 }}
                        />
                        <motion.path
                            d="M 695 250 Q 760 270 800 340"
                            stroke="var(--accent-coral)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 5 }}
                        />
                        <motion.circle
                            cx="800"
                            cy="340"
                            r="25"
                            className={styles.crisisEffect}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 5.8 }}
                        />
                        <text x="800" y="385" className={styles.crisisLabel} textAnchor="middle">Rewrite</text>
                        <text x="800" y="405" className={styles.crisisLabel} fontSize="11" textAnchor="middle">needed</text>
                    </motion.g>

                    {/* Annotation */}
                    <motion.text
                        x="500"
                        y="450"
                        className={styles.annotation}
                        textAnchor="middle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 6.5 }}
                    >
                        The real impact shows up later, elsewhere
                    </motion.text>
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 7 }}
            >
                Short-term wins create long-term debt
            </motion.p>
        </div>
    );
}
