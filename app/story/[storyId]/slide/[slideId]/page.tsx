import { PresentationData } from '@/types/content.types';
import StoryPage from '@/components/StoryPage';
import fs from 'fs';
import path from 'path';

async function getStories(): Promise<PresentationData> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'data', 'stories.json');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error loading stories:', error);
        return { stories: [] };
    }
}

export async function generateStaticParams() {
    const data = await getStories();
    const params: { storyId: string; slideId: string }[] = [];
    
    // Generate all story/slide combinations
    data.stories.forEach((story) => {
        story.slides.forEach((_, slideIndex) => {
            params.push({
                storyId: story.id.toString(),
                slideId: slideIndex.toString(),
            });
        });
    });
    
    return params;
}

export default async function Page() {
    const data = await getStories();

    return <StoryPage stories={data.stories} />;
}
