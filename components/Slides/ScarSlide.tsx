'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './ScarSlide.module.css';

interface ScarSlideProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function ScarSlide({ content, accentColor }: ScarSlideProps) {
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
                className={styles.visualContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <svg
                    viewBox="0 0 1000 600"
                    className={styles.visual}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="deleteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.2 }} />
                            <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 0 }} />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Left side: The Diff Screen (being deleted) */}
                    <motion.g
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 0.3] }}
                        transition={{ duration: 2, delay: 1.5 }}
                    >
                        {/* Diff screen mockup */}
                        <rect x="50" y="150" width="400" height="350" rx="8" fill="#18181b" stroke="#52525b" strokeWidth="2" />
                        
                        {/* Header */}
                        <rect x="50" y="150" width="400" height="50" rx="8" fill="#27272a" />
                        <text x="250" y="182" className={styles.diffTitle} textAnchor="middle">Configuration Diff</text>
                        
                        {/* Diff entries - things being removed/changed */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <rect x="70" y="220" width="360" height="40" rx="4" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="1" />
                            <text x="85" y="235" className={styles.diffLabel} fill="#ef4444">- REMOVED</text>
                            <text x="85" y="250" className={styles.diffText}>Static Route: 192.168.100.0/24</text>
                            
                            <rect x="70" y="270" width="360" height="40" rx="4" fill="rgba(251, 191, 36, 0.15)" stroke="#fbbf24" strokeWidth="1" />
                            <text x="85" y="285" className={styles.diffLabel} fill="#fbbf24">~ CHANGED</text>
                            <text x="85" y="300" className={styles.diffText}>VLAN ID: 10 → 20</text>
                            
                            <rect x="70" y="320" width="360" height="40" rx="4" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="1" />
                            <text x="85" y="335" className={styles.diffLabel} fill="#ef4444">- REMOVED</text>
                            <text x="85" y="350" className={styles.diffText}>Firewall Rule: Allow POS</text>
                        </motion.g>

                        {/* Delete X overlay */}
                        <motion.g
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2 }}
                        >
                            <circle cx="250" cy="325" r="60" fill="rgba(239, 68, 68, 0.9)" filter="url(#glow)" />
                            <line x1="220" y1="295" x2="280" y2="355" stroke="white" strokeWidth="8" strokeLinecap="round" />
                            <line x1="280" y1="295" x2="220" y2="355" stroke="white" strokeWidth="8" strokeLinecap="round" />
                        </motion.g>
                    </motion.g>

                    {/* Arrow indicating consequence */}
                    <motion.path
                        d="M 480 325 L 520 325"
                        stroke="#71717a"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    />

                    {/* Right side: 400 stores going down */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                    >
                        {/* Map/grid of stores */}
                        {[...Array(20)].map((_, row) => 
                            [...Array(20)].map((_, col) => {
                                const x = 550 + col * 20;
                                const y = 150 + row * 20;
                                return (
                                    <motion.circle
                                        key={`${row}-${col}`}
                                        cx={x}
                                        cy={y}
                                        r="4"
                                        fill="#22c55e"
                                        initial={{ fill: '#22c55e' }}
                                        animate={{ fill: '#ef4444' }}
                                        transition={{ 
                                            duration: 0.2,
                                            delay: 3.2 + (row * 0.02) + (col * 0.02)
                                        }}
                                    />
                                );
                            })
                        )}
                        
                        {/* "400 stores" label */}
                        <text x="750" y="485" className={styles.storeCount} textAnchor="middle">400 stores</text>
                        <text x="750" y="510" className={styles.storeLabel} textAnchor="middle">Payment processing: OFFLINE</text>
                    </motion.g>

                    {/* Timeline indicator */}
                    <motion.text
                        x="500"
                        y="580"
                        className={styles.timeline}
                        textAnchor="middle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 4.5 }}
                    >
                        60 seconds
                    </motion.text>
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
