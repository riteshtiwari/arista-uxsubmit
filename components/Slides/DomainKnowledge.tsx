'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './DomainKnowledge.module.css';

interface DomainKnowledgeProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function DomainKnowledge({ content, accentColor }: DomainKnowledgeProps) {
    const mismatches = [
        { ui: 'Submit', domain: 'File a claim', delay: 1.5 },
        { ui: 'Settings', domain: 'Plan configuration', delay: 1.7 },
        { ui: 'Reports', domain: 'Compliance exports', delay: 1.9 },
        { ui: 'Users', domain: 'Policy holders', delay: 2.1 },
        { ui: 'Tasks', domain: 'Prior authorizations', delay: 2.3 },
    ];

    return (
        <div className={styles.slide}>
            <motion.div
                className={styles.sectionLabel}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                WHAT EXPERIENCE REVEALS - <span className={styles.scarHighlight}>SCAR NO 5</span>
            </motion.div>

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
                    {/* Left column: UI Labels (Designer's terms) */}
                    <motion.text
                        x="200"
                        y="50"
                        className={styles.columnHeader}
                        textAnchor="middle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        What Designers Call It
                    </motion.text>

                    {/* Right column: Domain Terms (Real industry terms) */}
                    <motion.text
                        x="700"
                        y="50"
                        className={`${styles.columnHeader} accent-${accentColor}`}
                        textAnchor="middle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        What Users Call It
                    </motion.text>

                    {/* Divider */}
                    <line x1="450" y1="70" x2="450" y2="380" stroke="var(--text-muted)" strokeWidth="2" opacity="0.2" />

                    {/* Mismatches */}
                    {mismatches.map((item, i) => {
                        const y = 100 + i * 60;

                        return (
                            <motion.g
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: item.delay }}
                            >
                                {/* UI term (left) - generic */}
                                <rect
                                    x="80"
                                    y={y - 20}
                                    width="240"
                                    height="40"
                                    rx="6"
                                    className={styles.uiBox}
                                />
                                <text
                                    x="200"
                                    y={y + 5}
                                    className={styles.uiText}
                                    textAnchor="middle"
                                >
                                    "{item.ui}"
                                </text>

                                {/* Confusion arrow */}
                                <motion.path
                                    d={`M 330 ${y} L 550 ${y}`}
                                    stroke="var(--accent-coral)"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="6 6"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.5, delay: item.delay + 0.3 }}
                                />
                                <text
                                    x="440"
                                    y={y - 10}
                                    className={styles.confusionLabel}
                                    textAnchor="middle"
                                    fontSize="11"
                                >
                                    ≠
                                </text>

                                {/* Domain term (right) - specific */}
                                <motion.rect
                                    x="580"
                                    y={y - 20}
                                    width="240"
                                    height="40"
                                    rx="6"
                                    className={styles.domainBox}
                                    initial={{ x: 600 }}
                                    animate={{ x: 580 }}
                                    transition={{ delay: item.delay + 0.5 }}
                                />
                                <text
                                    x="700"
                                    y={y + 5}
                                    className={styles.domainText}
                                    textAnchor="middle"
                                >
                                    "{item.domain}"
                                </text>
                            </motion.g>
                        );
                    })}

                    {/* User frustration indicator */}
                    <motion.g
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4 }}
                    >
                        <rect x="620" y="400" width="260" height="50" rx="6" className={styles.ticketBox} />
                        <text x="750" y="420" className={styles.ticketTitle} textAnchor="middle">
                            Support Ticket #1847
                        </text>
                        <text x="750" y="438" className={styles.ticketBody} textAnchor="middle" fontSize="12">
                            "This isn't how we do it"
                        </text>
                    </motion.g>

                    {/* Confidence indicator (designer) */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5 }}
                    >
                        <rect x="50" y="410" width="200" height="30" rx="6" className={styles.confidenceBox} />
                        <text x="150" y="432" className={styles.confidenceText} textAnchor="middle" fontSize="13">
                            "Clean and intuitive!"
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
                Beautiful UI, wrong mental model
            </motion.p>
        </div>
    );
}
