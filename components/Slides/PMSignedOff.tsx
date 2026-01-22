'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './PMSignedOff.module.css';

interface PMSignedOffProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function PMSignedOff({ content, accentColor }: PMSignedOffProps) {
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
                    {/* Jira ticket - Done */}
                    <motion.g
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <rect x="100" y="50" width="300" height="120" rx="8" className={styles.jiraTicket} />
                        <text x="250" y="80" className={styles.jiraTitle} textAnchor="middle">
                            JIRA-1234
                        </text>
                        <rect x="200" y="90" width="100" height="25" rx="4" className={styles.doneTag} />
                        <text x="250" y="108" className={styles.doneText} textAnchor="middle">
                            DONE ✓
                        </text>
                        <text x="250" y="140" className={styles.jiraDesc} textAnchor="middle" fontSize="11">
                            Redesign checkout flow
                        </text>
                    </motion.g>

                    {/* Designer notices edge case */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <circle cx="550" cy="110" r="15" className={styles.designerHead} />
                        <rect x="535" y="125" width="30" height="25" rx="5" className={styles.designerBody} />
                        <text x="600" y="110" className={styles.designerLabel}>Designer</text>

                        {/* Thought bubble with edge case */}
                        <ellipse cx="680" cy="85" rx="80" ry="35" className={styles.thoughtBubble} />
                        <circle cx="620" cy="105" r="5" className={styles.thoughtDot} opacity="0.3" />
                        <circle cx="640" cy="100" r="8" className={styles.thoughtDot} opacity="0.5" />

                        <text x="680" y="85" className={styles.thoughtText} textAnchor="middle" fontSize="11">
                            ⚠️ Edge case feels odd
                        </text>
                    </motion.g>

                    {/* PM response */}
                    <motion.g
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.5 }}
                    >
                        <rect x="550" y="200" width="350" height="80" rx="8" className={styles.pmBox} />
                        <text x="725" y="230" className={styles.pmLabel} textAnchor="middle">
                            PM Response
                        </text>
                        <text x="725" y="255" className={styles.pmText} textAnchor="middle" fontSize="14">
                            "Let's ship — we'll fix later"
                        </text>
                    </motion.g>

                    {/* Timeline arrow */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 }}
                    >
                        <line x1="100" y1="320" x2="900" y2="320" stroke="var(--text-muted)" strokeWidth="2" opacity="0.2" />
                        <text x="500" y="350" className={`${styles.laterLabel} accent-${accentColor}`} textAnchor="middle">
                            Later Never Came
                        </text>
                    </motion.g>

                    {/* Edge case becomes common case */}
                    <motion.g
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4 }}
                    >
                        <rect x="150" y="380" width="700" height="90" rx="8" className={styles.consequenceBox} />
                        <text x="500" y="410" className={styles.consequenceLabel} textAnchor="middle">
                            Reality
                        </text>
                        <text x="500" y="435" className={styles.consequenceText} textAnchor="middle" fontSize="13">
                            The edge case became the common case
                        </text>
                        <text x="500" y="455" className={styles.consequenceSubtext} textAnchor="middle" fontSize="11">
                            Support tickets, user confusion, workarounds everywhere
                        </text>
                    </motion.g>

                    {/* Crack icon showing throughout */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0.6] }}
                        transition={{ duration: 2, delay: 1.8, repeat: Infinity, repeatDelay: 2 }}
                    >
                        <path
                            d="M 450 90 Q 460 120 450 150 M 445 110 L 455 110 M 445 130 L 455 130"
                            stroke="var(--accent-coral)"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <text x="465" y="125" className={styles.crackLabel} fontSize="10">
                            The crack
                        </text>
                    </motion.g>
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 5 }}
            >
                Delegated thinking is still your responsibility
            </motion.p>
        </div>
    );
}
