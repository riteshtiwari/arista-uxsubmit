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
            
            {content.subtitle && (
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {content.subtitle}
                </motion.p>
            )}

            <motion.div
                className={styles.sceneContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
            >
                <svg
                    viewBox="0 0 1000 600"
                    className={styles.scene}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Background grid representing infrastructure */}
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--text-muted)" strokeWidth="0.5" opacity="0.1"/>
                        </pattern>
                    </defs>
                    <rect width="1000" height="600" fill="url(#grid)" />

                    {/* Infrastructure layer - showing degradation */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        {/* Network devices with issues */}
                        <motion.rect x="100" y="450" width="60" height="50" rx="4" 
                            className={styles.deviceBox} 
                            stroke="var(--accent-coral)" strokeWidth="2" fill="none"
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <text x="130" y="505" className={styles.deviceLabel} textAnchor="middle" fontSize="10">Bad Cable</text>
                        
                        <motion.rect x="220" y="450" width="60" height="50" rx="4" 
                            className={styles.deviceBox}
                            stroke="var(--accent-coral)" strokeWidth="2" fill="none"
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                        />
                        <text x="250" y="505" className={styles.deviceLabel} textAnchor="middle" fontSize="10">Failing Optic</text>

                        <motion.rect x="340" y="450" width="60" height="50" rx="4" 
                            className={styles.deviceBox}
                            stroke="var(--accent-coral)" strokeWidth="2" fill="none"
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        />
                        <text x="370" y="505" className={styles.deviceLabel} textAnchor="middle" fontSize="10">Noisy Line</text>
                    </motion.g>

                    {/* Automation layer - healing attempts */}
                    <motion.g
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 }}
                    >
                        {/* Auto-heal circles covering problems */}
                        <motion.circle cx="130" cy="475" r="35" 
                            className={styles.healCircle}
                            stroke="var(--accent-emerald)" strokeWidth="2" fill="rgba(16, 185, 129, 0.05)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.2, duration: 0.5 }}
                        />
                        <text x="130" y="415" className={styles.healLabel} textAnchor="middle" fontSize="11">AUTO-STEER</text>

                        <motion.circle cx="250" cy="475" r="35" 
                            className={styles.healCircle}
                            stroke="var(--accent-emerald)" strokeWidth="2" fill="rgba(16, 185, 129, 0.05)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.5, duration: 0.5 }}
                        />
                        <text x="250" y="415" className={styles.healLabel} textAnchor="middle" fontSize="11">SUPPRESS</text>

                        <motion.circle cx="370" cy="475" r="35" 
                            className={styles.healCircle}
                            stroke="var(--accent-emerald)" strokeWidth="2" fill="rgba(16, 185, 129, 0.05)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.8, duration: 0.5 }}
                        />
                        <text x="370" y="415" className={styles.healLabel} textAnchor="middle" fontSize="11">AUTO-REBOOT</text>
                    </motion.g>

                    {/* Dashboard showing green - First Order Effect */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 }}
                    >
                        <rect x="550" y="120" width="400" height="180" rx="8" 
                            fill="rgba(16, 185, 129, 0.08)" stroke="var(--accent-emerald)" strokeWidth="2"/>
                        <text x="750" y="155" className={styles.dashboardTitle} textAnchor="middle">MONITORING DASHBOARD</text>
                        
                        {/* Status indicators - all green */}
                        <motion.circle cx="620" cy="200" r="20" fill="var(--accent-emerald)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3.8 }}
                        />
                        <text x="655" y="207" className={styles.statusText} fontSize="14">All Links: Healthy</text>
                        
                        <motion.circle cx="620" cy="245" r="20" fill="var(--accent-emerald)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 4 }}
                        />
                        <text x="655" y="252" className={styles.statusText} fontSize="14">Recovery: 0.3s avg</text>
                        
                        <text x="750" y="285" className={styles.successText} textAnchor="middle" fontSize="16">✓ SUCCESS</text>
                    </motion.g>

                    {/* Human icon - becoming passive */}
                    <motion.g
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: 4.5, duration: 1.5 }}
                    >
                        {/* Simple human figure */}
                        <circle cx="750" cy="400" r="25" stroke="var(--text-secondary)" strokeWidth="2" fill="none"/>
                        <line x1="750" y1="425" x2="750" y2="490" stroke="var(--text-secondary)" strokeWidth="2"/>
                        <line x1="750" y1="445" x2="710" y2="475" stroke="var(--text-secondary)" strokeWidth="2"/>
                        <line x1="750" y1="445" x2="790" y2="475" stroke="var(--text-secondary)" strokeWidth="2"/>
                        <line x1="750" y1="490" x2="720" y2="530" stroke="var(--text-secondary)" strokeWidth="2"/>
                        <line x1="750" y1="490" x2="780" y2="530" stroke="var(--text-secondary)" strokeWidth="2"/>
                        <text x="750" y="560" className={styles.humanLabel} textAnchor="middle" fontSize="12">Engineer</text>
                        <text x="750" y="575" className={styles.humanLabel} textAnchor="middle" fontSize="10">(stopped learning)</text>
                    </motion.g>

                    {/* Second Order Effect - hidden rot */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5.5 }}
                    >
                        {/* Warning signs emerging */}
                        <motion.path
                            d="M 130 440 L 130 350"
                            stroke="var(--accent-coral)" strokeWidth="3" strokeDasharray="6 6"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 5.5 }}
                        />
                        <motion.text x="130" y="335" className={styles.rotLabel} textAnchor="middle" fontSize="11"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 6.3 }}
                        >
                            ROOT CAUSE
                        </motion.text>
                        <motion.text x="130" y="348" className={styles.rotLabel} textAnchor="middle" fontSize="11"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 6.3 }}
                        >
                            PERSISTS
                        </motion.text>

                        <motion.path
                            d="M 250 440 L 250 350"
                            stroke="var(--accent-coral)" strokeWidth="3" strokeDasharray="6 6"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 5.8 }}
                        />
                        
                        <motion.path
                            d="M 370 440 L 370 350"
                            stroke="var(--accent-coral)" strokeWidth="3" strokeDasharray="6 6"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 6.1 }}
                        />
                    </motion.g>

                    {/* The lesson */}
                    <motion.text
                        x="250"
                        y="280"
                        className={styles.lessonText}
                        textAnchor="middle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 7 }}
                    >
                        We optimized Recovery. We killed Maintenance.
                    </motion.text>
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 7.5 }}
            >
                Automation shouldn't be a sedative. It should be a safety net.
            </motion.p>
        </div>
    );
}
