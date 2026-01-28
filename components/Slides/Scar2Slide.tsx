'use client';

import { motion } from 'framer-motion';
import { SlideContent, AccentColor } from '@/types/content.types';
import styles from './Scar2Slide.module.css';

interface Scar2SlideProps {
    content: SlideContent;
    accentColor: AccentColor;
}

export default function Scar2Slide({ content, accentColor }: Scar2SlideProps) {
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
                    {/* Complex BGP Wizard - intimidating form */}
                    <motion.g
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        {/* Wizard container */}
                        <rect x="100" y="80" width="500" height="480" rx="12" fill="#18181b" stroke="#52525b" strokeWidth="2" />
                        
                        {/* Header */}
                        <rect x="100" y="80" width="500" height="60" rx="12" fill="#27272a" />
                        <text x="350" y="118" className={styles.wizardTitle} textAnchor="middle">BGP Peering Configuration</text>
                        
                        {/* Progress indicator - stuck at step 2 */}
                        <circle cx="250" cy="165" r="8" fill="#22c55e" />
                        <line x1="258" y1="165" x2="342" y2="165" stroke="#3f3f46" strokeWidth="2" />
                        <circle cx="350" cy="165" r="8" fill="#fbbf24" />
                        <line x1="358" y1="165" x2="442" y2="165" stroke="#3f3f46" strokeWidth="2" />
                        <circle cx="450" cy="165" r="8" fill="#3f3f46" />
                        
                        {/* Form fields - overwhelming and technical */}
                        {[
                            'MED Value',
                            'AS-Path Prepend',
                            'Community Tags',
                            'Local Preference',
                            'Next-Hop Self',
                            'Route-Map',
                            'Prefix-List',
                            'Weight',
                            'Origin Code',
                            'Multi-Exit Discriminator',
                            'BGP Peer Group',
                            'TTL Security',
                            'Advertisement Interval',
                            'Update Source',
                            'EBGP Multihop'
                        ].map((label, index) => {
                            const row = Math.floor(index / 2);
                            const col = index % 2;
                            const x = 130 + (col * 220);
                            const y = 210 + (row * 55);
                            
                            return (
                                <motion.g
                                    key={label}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5 + (index * 0.08) }}
                                >
                                    <text x={x} y={y} className={styles.fieldLabel}>{label}</text>
                                    <rect 
                                        x={x} 
                                        y={y + 5} 
                                        width={200} 
                                        height={32} 
                                        rx="4" 
                                        fill="none" 
                                        stroke="#3f3f46" 
                                        strokeWidth="1.5"
                                    />
                                    {/* Blinking cursor in first field */}
                                    {index === 0 && (
                                        <motion.line
                                            x1={x + 8}
                                            y1={y + 13}
                                            x2={x + 8}
                                            y2={y + 29}
                                            stroke="rgba(255, 255, 255, 0.7)"
                                            strokeWidth="2"
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                    )}
                                </motion.g>
                            );
                        })}
                    </motion.g>

                    {/* Frozen user */}
                    <motion.g
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    >
                        {/* Person silhouette - frozen/confused */}
                        <circle cx="750" cy="250" r="35" fill="#52525b" />
                        <ellipse cx="750" cy="330" rx="45" ry="70" fill="#52525b" />
                        
                        {/* Question marks floating around head */}
                        {[0, 1, 2].map((index) => {
                            const angle = (index * 120) - 60;
                            const radius = 60;
                            const x = 750 + radius * Math.cos((angle * Math.PI) / 180);
                            const y = 250 + radius * Math.sin((angle * Math.PI) / 180);
                            
                            return (
                                <motion.text
                                    key={index}
                                    x={x}
                                    y={y}
                                    className={styles.questionMark}
                                    textAnchor="middle"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ 
                                        opacity: [0, 0.8, 0.8],
                                        scale: [0.5, 1, 1],
                                        y: [y, y - 10, y - 10]
                                    }}
                                    transition={{ 
                                        duration: 1.5, 
                                        delay: 3 + (index * 0.3),
                                        repeat: Infinity,
                                        repeatDelay: 1
                                    }}
                                >
                                    ?
                                </motion.text>
                            );
                        })}

                        {/* Thought bubble with concerns */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.9 }}
                            transition={{ delay: 3.5 }}
                        >
                            <ellipse cx="850" cy="150" rx="100" ry="60" fill="#27272a" stroke="#52525b" strokeWidth="2" />
                            <circle cx="780" cy="200" r="8" fill="#27272a" stroke="#52525b" strokeWidth="2" />
                            <circle cx="760" cy="220" r="5" fill="#27272a" stroke="#52525b" strokeWidth="2" />
                            
                            <text x="850" y="140" className={styles.thoughtText} textAnchor="middle">What's safe?</text>
                            <text x="850" y="160" className={styles.thoughtText} textAnchor="middle">Will this drop</text>
                            <text x="850" y="175" className={styles.thoughtText} textAnchor="middle">the site?</text>
                        </motion.g>
                    </motion.g>

                    {/* Arrow showing the gap */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 4 }}
                    >
                        <line x1="610" y1="300" x2="690" y2="300" stroke="#fbbf24" strokeWidth="3" strokeDasharray="5,5" />
                        <text x="650" y="285" className={styles.gapLabel} textAnchor="middle">The Gap</text>
                    </motion.g>
                </svg>
            </motion.div>

            <motion.p
                className={`caption ${styles.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 5 }}
            >
                We weren't arrogant. We were just too close.
            </motion.p>
        </div>
    );
}
