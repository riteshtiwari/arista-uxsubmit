export type SlideType = 'hook' | 'shock' | 'application' | 'custom';

export type AccentColor = 'coral' | 'cyan' | 'amber' | 'emerald' | 'violet' | 'blue';

export interface VisualizationData {
  type: 'bar-chart' | 'line-chart' | 'pie-chart' | 'custom';
  data?: any;
  customComponent?: string;
}

export interface SlideContent {
  headline?: string;
  subheadline?: string;
  subtitle?: string;
  visual?: string;
  source?: string;
  takeaways?: string[];
  body?: string;
  visualization?: VisualizationData;
}

export interface Slide {
  type: SlideType;
  customComponent?: string;  // Name of custom component (e.g., 'BomberPlane')
  content: SlideContent;
}


export interface Story {
  id: number;
  title: string;
  category: string;
  accentColor: AccentColor;
  slides: Slide[];
}

export interface PresentationData {
  stories: Story[];
}
