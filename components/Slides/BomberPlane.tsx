'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './BomberPlane.module.css';

interface BomberPlaneProps {
    content: SlideContent;
    accentColor: AccentColor;
}

// Bullet hole positions (x, y as percentages)
const bulletHoles = [
    { x: 25, y: 30 },
    { x: 35, y: 45 },
    { x: 42, y: 35 },
    { x: 55, y: 50 },
    { x: 65, y: 42 },
    { x: 70, y: 38 },
    { x: 30, y: 55 },
    { x: 48, y: 52 },
    { x: 62, y: 58 },
    { x: 38, y: 48 },
    { x: 52, y: 44 },
    { x: 68, y: 52 },
];

export default function BomberPlane({ content, accentColor }: BomberPlaneProps) {
    return (
        <div className={styles.slide}>
            <motion.div
                className={styles.sectionLabel}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                WHERE OUR ATTENTION GOES
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
                className={styles.planeContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                {/* Bomber plane outline - SVG */}
                <svg
                    viewBox="0 0 800 300"
                    className={styles.plane}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Fuselage */}
                    <motion.path
                        d="M 200,150 L 600,150 L 620,140 L 640,145 L 640,155 L 620,160 L 600,150 Z"
                        className={styles.planePath}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 2, delay: 1 }}
                    />

                    {/* Wings */}
                    <motion.path
                        d="M 350,150 L 280,80 L 320,75 L 450,140 Z"
                        className={styles.planePath}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 2, delay: 1.2 }}
                    />
                    <motion.path
                        d="M 450,160 L 320,225 L 280,220 L 350,150 Z"
                        className={styles.planePath}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 2, delay: 1.2 }}
                    />

                    {/* Tail */}
                    <motion.path
                        d="M 200,150 L 180,120 L 190,118 L 205,145 Z"
                        className={styles.planePath}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 2, delay: 1.4 }}
                    />
                    <motion.path
                        d="M 200,150 L 180,180 L 190,182 L 205,155 Z"
                        className={styles.planePath}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 2, delay: 1.4 }}
                    />

                    {/* Bullet holes - glowing dots */}
                    {bulletHoles.map((hole, index) => (
                        <motion.g key={index}>
                            {/* Glow effect */}
                            <motion.circle
                                cx={hole.x * 8}
                                cy={hole.y * 3}
                                r="12"
                                className={`${styles.bulletGlow} accent-${accentColor}`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0, 0.6, 0.4],
                                    scale: [0, 1.2, 1]
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 1.8 + index * 0.1,
                                    repeat: Infinity,
                                    repeatDelay: 3
                                }}
                            />

                            {/* Dot */}
                            <motion.circle
                                cx={hole.x * 8}
                                cy={hole.y * 3}
                                r="4"
                                className={`${styles.bulletHole} accent-${accentColor}`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                            />
                        </motion.g>
                    ))}
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 3 }}
            >
                Bullet damage on planes that made it home
            </motion.p>
        </div>
    );
}
