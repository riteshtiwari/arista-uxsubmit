'use client';

import { motion } from 'framer-motion';
import styles from './NavToggle.module.css';

interface NavToggleProps {
    isVisible: boolean;
    onToggle: () => void;
}

export default function NavToggle({ isVisible, onToggle }: NavToggleProps) {
    return (
        <motion.button
            className={styles.toggle}
            onClick={onToggle}
            aria-label={isVisible ? "Hide navigation" : "Show navigation"}
            aria-expanded={isVisible}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.span
                className={styles.icon}
                animate={{ rotate: isVisible ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {isVisible ? (
                    // Close icon (X)
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                    </svg>
                ) : (
                    // Hamburger icon (☰)
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
                    </svg>
                )}
            </motion.span>
        </motion.button>
    );
}
