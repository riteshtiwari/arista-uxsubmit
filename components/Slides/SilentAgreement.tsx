'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './SilentAgreement.module.css';

interface SilentAgreementProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function SilentAgreement({ content, accentColor }: SilentAgreementProps) {
    const attendees = [
        { role: 'PM', delay: 1.5 },
        { role: 'Design', delay: 1.6 },
        { role: 'Eng', delay: 1.7 },
        { role: 'QA', delay: 1.8 },
        { role: 'PM2', delay: 1.9 },
        { role: 'Dev', delay: 2.0 },
    ];

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
                    {/* Meeting label */}
                    <text x="500" y="40" className={styles.meetingLabel} textAnchor="middle">
                        Design Review — Zoom Meeting
                    </text>

                    {/* Zoom grid - 3x2 */}
                    {attendees.map((attendee, i) => {
                        const col = i % 3;
                        const row = Math.floor(i / 3);
                        const x = 150 + col * 250;
                        const y = 80 + row * 160;

                        return (
                            <motion.g
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: attendee.delay }}
                            >
                                {/* Zoom tile */}
                                <rect
                                    x={x}
                                    y={y}
                                    width="200"
                                    height="140"
                                    rx="8"
                                    className={styles.zoomTile}
                                />

                                {/* Person icon - head */}
                                <circle cx={x + 100} cy={y + 50} r="25" className={styles.personHead} />

                                {/* Person icon - body */}
                                <rect
                                    x={x + 75}
                                    y={y + 75}
                                    width="50"
                                    height="35"
                                    rx="10"
                                    className={styles.personBody}
                                />

                                {/* Nodding indicator */}
                                <motion.g
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: [0, 1, 1, 0], y: [-5, 0, 0, 5] }}
                                    transition={{
                                        delay: attendee.delay + 0.5,
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 1,
                                    }}
                                >
                                    <path
                                        d={`M ${x + 90} ${y + 45} Q ${x + 100} ${y + 40} ${x + 110} ${y + 45}`}
                                        stroke="var(--accent-emerald)"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </motion.g>

                                {/* Role label */}
                                <text x={x + 100} y={y + 130} className={styles.roleLabel} textAnchor="middle">
                                    {attendee.role}
                                </text>
                            </motion.g>
                        );
                    })}

                    {/* Chat indicators - everyone agreeing */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                    >
                        <rect x="750" y="100" width="200" height="200" rx="8" className={styles.chatBox} />
                        <text x="850" y="125" className={styles.chatTitle} textAnchor="middle">
                            Chat
                        </text>

                        {[
                            { msg: '👍', delay: 3.2 },
                            { msg: 'Looks good!', delay: 3.5 },
                            { msg: '✅', delay: 3.8 },
                            { msg: 'LGTM', delay: 4.1 },
                            { msg: '👍 Approved', delay: 4.4 },
                        ].map((chat, i) => (
                            <motion.text
                                key={i}
                                x="760"
                                y={150 + i * 30}
                                className={styles.chatMessage}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 0.8, x: 0 }}
                                transition={{ delay: chat.delay }}
                            >
                                {chat.msg}
                            </motion.text>
                        ))}
                    </motion.g>

                    {/* Reality check - 3 months later */}
                    <motion.g
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 5 }}
                    >
                        <line x1="50" y1="340" x2="950" y2="340" stroke="var(--text-muted)" strokeWidth="2" opacity="0.2" />

                        <text x="500" y="370" className={`${styles.laterLabel} accent-${accentColor}`} textAnchor="middle">
                            3 Months Later...
                        </text>

                        <rect x="200" y="390" width="600" height="80" rx="8" className={styles.questionBox} />
                        <text x="500" y="415" className={styles.questionLabel} textAnchor="middle">
                            User Question
                        </text>
                        <text x="500" y="440" className={styles.questionText} textAnchor="middle" fontSize="14">
                            "Why does it work this way?"
                        </text>
                        <text x="500" y="460" className={styles.answerText} textAnchor="middle" fontSize="12">
                            No one remembers why.
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
                Silence feels like alignment — until reality disagrees
            </motion.p>
        </div>
    );
}
