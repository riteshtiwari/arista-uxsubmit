'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Story } from '@/types/content.types';
import { CURATED_STORY_IDS } from '@/constants/navigation';
import styles from './ChapterNav.module.css';

interface ChapterNavProps {
    stories: Story[];
    currentStoryId: number;
    isVisible: boolean;
    onToggle: () => void;
    viewMode: 'curated' | 'all';
    onViewModeChange: (mode: 'curated' | 'all') => void;
}

export default function ChapterNav({
    stories,
    currentStoryId,
    isVisible,
    onToggle,
    viewMode,
    onViewModeChange
}: ChapterNavProps) {
    const router = useRouter();
    const showAllStories = viewMode === 'all';
    const activeItemRef = useRef<HTMLButtonElement>(null);

    // Scroll active item into view when currentStoryId changes
    useEffect(() => {
        if (activeItemRef.current && isVisible) {
            const element = activeItemRef.current;
            const container = element.closest(`.${styles.container}`) as HTMLElement;
            
            if (container) {
                const containerRect = container.getBoundingClientRect();
                const elementRect = element.getBoundingClientRect();
                const filterToggleHeight = 80; // Height of filter toggle area
                
                // Calculate if element is below the visible area (accounting for filter toggle)
                const visibleBottom = containerRect.bottom - filterToggleHeight;
                const elementBottom = elementRect.bottom;
                
                // Calculate if element is above the visible area
                const elementTop = elementRect.top;
                const containerTop = containerRect.top;
                
                if (elementBottom > visibleBottom) {
                    // Element is hidden below - scroll down just enough to show it
                    const scrollAmount = elementBottom - visibleBottom;
                    container.scrollTop += scrollAmount + 10; // +10px buffer
                } else if (elementTop < containerTop) {
                    // Element is hidden above - scroll up to show it
                    const scrollAmount = containerTop - elementTop;
                    container.scrollTop -= scrollAmount + 10; // +10px buffer
                }
            }
        }
    }, [currentStoryId, isVisible]);

    const handleChapterClick = (storyId: number) => {
        router.push(`/story/${storyId}/slide/0`);
    };

    const toggleStoryFilter = () => {
        onViewModeChange(viewMode === 'curated' ? 'all' : 'curated');
    };

    // Filter stories based on toggle state
    const displayedStories = showAllStories
        ? stories
        : CURATED_STORY_IDS.map(id => stories.find(s => s.id === id)).filter(Boolean) as Story[];

    // Navigation item type for hierarchical structure
    interface NavItem {
        story: Story;
        isSection: boolean;
        subItems?: Story[];
    }

    // Build hierarchical structure (only for curated view)
    const buildHierarchy = (): NavItem[] => {
        // In "All" view, return flat list without sections
        if (showAllStories) {
            return displayedStories.map(story => ({
                story,
                isSection: false
            }));
        }

        // In "Curated" view, build hierarchical structure with sections
        const result: NavItem[] = [];
        let currentSection: NavItem | null = null;

        displayedStories.forEach(story => {
            if (story.category === "Section Title") {
                // Start a new section
                currentSection = {
                    story,
                    isSection: true,
                    subItems: []
                };
                result.push(currentSection);
            } else {
                if (currentSection) {
                    // Add to current section as sub-item
                    currentSection.subItems!.push(story);
                } else {
                    // Standalone story (e.g., Introduction before first section)
                    result.push({ story, isSection: false });
                }
            }
        });

        return result;
    };

    const hierarchicalItems = buildHierarchy();
    let itemCounter = 0; // For numbering non-section items

    return (
        <nav
            className={`${styles.nav} ${isVisible ? styles.visible : styles.hidden}`}
            aria-label="Chapter navigation"
            aria-hidden={!isVisible}
        >
            <div className={styles.container}>
                {hierarchicalItems.map((item, index) => (
                    <div key={item.story.id}>
                        {/* Section header or standalone story */}
                        <button
                            className={`${item.isSection
                                ? styles.sectionHeader
                                : styles.item
                                } ${currentStoryId === item.story.id ? styles.active : ''}`}
                            onClick={() => handleChapterClick(item.story.id)}
                            aria-current={currentStoryId === item.story.id ? 'page' : undefined}
                            tabIndex={isVisible ? 0 : -1}
                        >
                            {!item.isSection && (
                                <span className={styles.number}>{String(++itemCounter).padStart(2, '0')}</span>
                            )}
                            <span className={styles.title}>{item.story.title}</span>
                            {/* Toggle arrow on Introduction item */}
                            {item.story.id === 0 && (
                                <span
                                    className={styles.toggleArrow}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onToggle();
                                    }}
                                    role="button"
                                    aria-label="Hide navigation"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            onToggle();
                                        }
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            )}
                        </button>

                        {/* Render sub-items if this is a section AND has sub-items */}
                        {item.isSection && item.subItems && item.subItems.map((subStory: Story) => (
                            <button
                                ref={currentStoryId === subStory.id ? activeItemRef : null}
                                key={subStory.id}
                                className={`${styles.subItem} ${currentStoryId === subStory.id ? styles.active : ''}`}
                                onClick={() => handleChapterClick(subStory.id)}
                                aria-current={currentStoryId === subStory.id ? 'page' : undefined}
                                tabIndex={isVisible ? 0 : -1}
                            >
                                <span className={styles.title}>{subStory.title}</span>
                            </button>
                        ))}
                    </div>
                ))}
            </div>

            {/* Story filter toggle at bottom */}
            <div className={styles.filterToggle}>
                <button
                    className={styles.filterButton}
                    onClick={toggleStoryFilter}
                    aria-label={showAllStories ? "Show curated stories" : "Show all stories"}
                >
                    <span className={styles.filterLabel}>
                        {showAllStories ? `All (${stories.length})` : `Curated (${displayedStories.length})`}
                    </span>
                    <span className={styles.filterIcon}>
                        {showAllStories ? '◉' : '◯'}
                    </span>
                </button>
            </div>
        </nav>
    );
}
