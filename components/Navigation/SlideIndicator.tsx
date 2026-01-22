'use client';

import styles from './SlideIndicator.module.css';

interface SlideIndicatorProps {
    currentSlide: number;
    totalSlides: number;
}

export default function SlideIndicator({ currentSlide, totalSlides }: SlideIndicatorProps) {
    return (
        <div className={styles.indicator} aria-live="polite" aria-atomic="true">
            <span className={styles.current}>{currentSlide + 1}</span>
            <span className={styles.separator}>/</span>
            <span className={styles.total}>{totalSlides}</span>
        </div>
    );
}
