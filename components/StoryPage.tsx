'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Story } from '@/types/content.types';
import { CURATED_STORY_IDS } from '@/constants/navigation';
import ChapterNav from '@/components/Navigation/ChapterNav';
import SlideIndicator from '@/components/Navigation/SlideIndicator';
import SlideContainer from '@/components/Slides/SlideContainer';
import styles from './StoryPage.module.css';

interface StoryPageProps {
    stories: Story[];
}

export default function StoryPage({ stories }: StoryPageProps) {
    const router = useRouter();
    const params = useParams();
    const storyId = Number(params.storyId);
    const slideId = Number(params.slideId);

    const [currentStory, setCurrentStory] = useState<Story | null>(null);
    const [totalSlides, setTotalSlides] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    // Initialize viewMode from localStorage (client-side only)
    const [viewMode, setViewMode] = useState<'curated' | 'all'>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('presentationViewMode');
            return (saved as 'curated' | 'all') || 'curated';
        }
        return 'curated';
    });

    // Persist viewMode changes to localStorage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('presentationViewMode', viewMode);
        }
    }, [viewMode]);

    useEffect(() => {
        const story = stories.find(s => s.id === storyId);
        if (story) {
            setCurrentStory(story);
            setTotalSlides(story.slides.length);
        }
    }, [storyId, stories]);

    // Route protection: redirect if viewing non-curated story in curated mode
    useEffect(() => {
        if (viewMode === 'curated') {
            const isStoryInCurated = CURATED_STORY_IDS.includes(storyId);
            if (!isStoryInCurated) {
                // Redirect to first curated story
                router.push('/story/0/slide/0');
            }
        }
    }, [storyId, viewMode, router]);

    const toggleNav = useCallback(() => {
        setIsNavVisible(prev => !prev);
    }, []);

    const navigateToSlide = useCallback((newStoryId: number, newSlideId: number) => {
        const story = stories.find(s => s.id === newStoryId);
        if (story && newSlideId >= 0 && newSlideId < story.slides.length) {
            router.push(`/story/${newStoryId}/slide/${newSlideId}`);
        }
    }, [stories, router]);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        // Get current view's story list
        const visibleStoryIds = viewMode === 'curated'
            ? CURATED_STORY_IDS
            : stories.map(s => s.id);

        const visibleStories = visibleStoryIds
            .map(id => stories.find(s => s.id === id))
            .filter(Boolean) as Story[];

        const currentIndex = visibleStories.findIndex(s => s.id === storyId);
        const currentStory = visibleStories[currentIndex];

        if (!currentStory) return; // Safety check

        switch (event.key) {
            case 'ArrowLeft':
                // Previous slide only (does NOT go to previous story)
                if (slideId > 0) {
                    navigateToSlide(storyId, slideId - 1);
                }
                break;

            case 'ArrowRight':
                // Next slide, or next story at boundary
                if (slideId < currentStory.slides.length - 1) {
                    navigateToSlide(storyId, slideId + 1);
                } else {
                    // At last slide - go to next story
                    if (currentIndex < visibleStories.length - 1) {
                        const nextStory = visibleStories[currentIndex + 1];
                        navigateToSlide(nextStory.id, 0);
                    }
                }
                break;

            case 'ArrowUp':
                // Previous sidebar item
                if (currentIndex > 0) {
                    const prevStory = visibleStories[currentIndex - 1];
                    navigateToSlide(prevStory.id, 0);
                }
                break;

            case 'ArrowDown':
                // Next sidebar item
                if (currentIndex < visibleStories.length - 1) {
                    const nextStory = visibleStories[currentIndex + 1];
                    navigateToSlide(nextStory.id, 0);
                }
                break;

            case 'Home':
                // Go to first story in current view
                navigateToSlide(visibleStories[0].id, 0);
                break;

            case 'End':
                // Go to last story in current view
                const lastStory = visibleStories[visibleStories.length - 1];
                navigateToSlide(lastStory.id, 0);
                break;
        }
    }, [storyId, slideId, viewMode, stories, navigateToSlide]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

    if (!currentStory) {
        return <div>Loading...</div>;
    }

    const currentSlide = currentStory.slides[slideId];

    return (
        <div className={styles.page}>
            {/* Show button when nav is hidden */}
            {!isNavVisible && (
                <button
                    className={styles.showNavButton}
                    onClick={toggleNav}
                    aria-label="Show navigation"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            )}

            {/* Side navigation - controlled by toggle state */}
            <ChapterNav
                stories={stories}
                currentStoryId={storyId}
                isVisible={isNavVisible}
                onToggle={toggleNav}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
            />

            <SlideIndicator
                currentSlide={slideId}
                totalSlides={totalSlides}
            />

            {/* Main content - centered when nav is hidden */}
            <main className={`${styles.main} ${!isNavVisible ? styles.centered : ''}`}>
                <SlideContainer
                    slide={currentSlide}
                    accentColor={currentStory.accentColor}
                    slideIndex={slideId}
                />
            </main>
        </div>
    );
}
