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

export default async function Page() {
    const data = await getStories();

    return <StoryPage stories={data.stories} />;
}
