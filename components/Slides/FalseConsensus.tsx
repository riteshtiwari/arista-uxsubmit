'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './FalseConsensus.module.css';

interface FalseConsensusProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function FalseConsensus({ content, accentColor }: FalseConsensusProps) {
    return (
        <div className={styles.slide}>
            <motion.div
                className={styles.sectionLabel}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                WHY IT FEELS RIGHT
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
                    {/* Internal bubble - team in agreement */}
                    <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        {/* Bubble border */}
                        <circle cx="300" cy="250" r="200" className={styles.bubble} />

                        <text x="300" y="80" className={styles.bubbleLabel} textAnchor="middle">Internal Team</text>

                        {/* Team members - all nodding */}
                        {[
                            { x: 300, y: 200, delay: 1.5 },
                            { x: 220, y: 250, delay: 1.7 },
                            { x: 380, y: 250, delay: 1.9 },
                            { x: 260, y: 310, delay: 2.1 },
                            { x: 340, y: 310, delay: 2.3 },
                        ].map((person, i) => (
                            <motion.g
                                key={i}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: person.delay }}
                            >
                                {/* Head */}
                                <circle cx={person.x} cy={person.y} r="18" className={styles.teamHead} />
                                {/* Body */}
                                <rect x={person.x - 10} y={person.y + 18} width="20" height="30" rx="5" className={styles.teamBody} />
                                {/* Check mark */}
                                <motion.path
                                    d={`M ${person.x - 5} ${person.y} L ${person.x - 1} ${person.y + 4} L ${person.x + 5} ${person.y - 4}`}
                                    stroke="var(--accent-emerald)"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: person.delay + 0.3, duration: 0.3 }}
                                />
                            </motion.g>
                        ))}

                        {/* Agreement indicator */}
                        <motion.text
                            x="300"
                            y="400"
                            className={styles.agreementText}
                            textAnchor="middle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3 }}
                        >
                            "This is intuitive!"
                        </motion.text>
                    </motion.g>

                    {/* Divider with label */}
                    <motion.line
                        x1="550"
                        y1="100"
                        x2="550"
                        y2="400"
                        stroke="var(--text-muted)"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 3.5 }}
                    />
                    <motion.text
                        x="550"
                        y="440"
                        className={styles.dividerLabel}
                        textAnchor="middle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 4 }}
                    >
                        Reality Gap
                    </motion.text>

                    {/* External reality - users confused/frustrated */}
                    <motion.g
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 4 }}
                    >
                        <text x="750" y="80" className={`${styles.realityLabel} accent-${accentColor}`} textAnchor="middle">Real Users</text>

                        {/* Users with different reactions */}
                        {[
                            { x: 750, y: 160, reaction: 'confused', delay: 4.5 },
                            { x: 650, y: 220, reaction: 'frustrated', delay: 4.7 },
                            { x: 850, y: 220, reaction: 'lost', delay: 4.9 },
                            { x: 700, y: 290, reaction: 'confused', delay: 5.1 },
                            { x: 800, y: 290, reaction: 'frustrated', delay: 5.3 },
                            { x: 675, y: 360, reaction: 'lost', delay: 5.5 },
                            { x: 825, y: 360, reaction: 'confused', delay: 5.7 },
                        ].map((user, i) => (
                            <motion.g
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: user.delay }}
                            >
                                {/* Head */}
                                <circle cx={user.x} cy={user.y} r="15" className={styles.userHead} />
                                {/* Body */}
                                <rect x={user.x - 8} y={user.y + 15} width="16" height="25" rx="4" className={styles.userBody} />

                                {/* Reaction icon */}
                                {user.reaction === 'confused' && (
                                    <text x={user.x} y={user.y + 5} className={styles.reactionIcon} textAnchor="middle" fontSize="14">?</text>
                                )}
                                {user.reaction === 'frustrated' && (
                                    <path
                                        d={`M ${user.x - 4} ${user.y + 3} L ${user.x + 4} ${user.y - 3} M ${user.x - 4} ${user.y - 3} L ${user.x + 4} ${user.y + 3}`}
                                        stroke="var(--accent-coral)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                )}
                                {user.reaction === 'lost' && (
                                    <circle cx={user.x} cy={user.y} r="6" stroke="var(--accent-amber)" strokeWidth="2" fill="none" />
                                )}
                            </motion.g>
                        ))}

                        {/* Feedback quotes */}
                        <motion.text
                            x="750"
                            y="420"
                            className={styles.feedbackText}
                            textAnchor="middle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ delay: 6 }}
                        >
                            "Where do I start?"
                        </motion.text>
                    </motion.g>

                    {/* Gap indicator */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 6.5 }}
                    >
                        <path
                            d="M 480 250 Q 550 200 620 250"
                            stroke="var(--accent-coral)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4 4"
                        />
                        <path
                            d="M 480 250 Q 550 300 620 250"
                            stroke="var(--accent-coral)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4 4"
                        />
                    </motion.g>
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 7 }}
            >
                The echo chamber
            </motion.p>
        </div>
    );
}
