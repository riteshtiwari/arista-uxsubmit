'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Slide, AccentColor } from '@/types/content.types';
import IntroSlide from './IntroSlide';
import PositioningSlide from './PositioningSlide';
import OrientationSlide from './OrientationSlide';
import HookSlide from './HookSlide';
import ShockSlide from './ShockSlide';
import ApplicationSlide from './ApplicationSlide';
import BomberPlane from './BomberPlane';
import StreetlightSearch from './StreetlightSearch';
import ConwaysLaw from './ConwaysLaw';
import MapTerritory from './MapTerritory';
import CobraEffect from './CobraEffect';
import SecondOrder from './SecondOrder';
import ScalabilityBreak from './ScalabilityBreak';
import FalseConsensus from './FalseConsensus';
import RegressionMean from './RegressionMean';
import PowerLaw from './PowerLaw';
import DomainKnowledge from './DomainKnowledge';
import LocalGlobal from './LocalGlobal';
import SilentAgreement from './SilentAgreement';
import ConsistentWrong from './ConsistentWrong';
import PMSignedOff from './PMSignedOff';
import FigmaVsProduction from './FigmaVsProduction';
import SectionTitleSlide from './SectionTitleSlide';
import Section2TitleSlide from './Section2TitleSlide';
import Section3TitleSlide from './Section3TitleSlide';
import Section4TitleSlide from './Section4TitleSlide';
import LessonSlide from './LessonSlide';
import OperatorIsSystem from './OperatorIsSystem';
import ConclusionSlide from './ConclusionSlide';
import styles from './SlideContainer.module.css';

interface SlideContainerProps {
    slide: Slide;
    accentColor: AccentColor;
    slideIndex: number;
}

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};

export default function SlideContainer({ slide, accentColor, slideIndex }: SlideContainerProps) {
    const renderSlide = () => {
        // Handle custom components first
        if (slide.type === 'custom' && slide.customComponent) {
            switch (slide.customComponent) {
                case 'IntroSlide':
                    return <IntroSlide content={slide.content} accentColor={accentColor} />;
                case 'PositioningSlide':
                    return <PositioningSlide content={slide.content} accentColor={accentColor} />;
                case 'OrientationSlide':
                    return <OrientationSlide content={slide.content} accentColor={accentColor} />;
                case 'BomberPlane':
                    return <BomberPlane content={slide.content} accentColor={accentColor} />;
                case 'StreetlightSearch':
                    return <StreetlightSearch content={slide.content} accentColor={accentColor} />;
                case 'ConwaysLaw':
                    return <ConwaysLaw content={slide.content} accentColor={accentColor} />;
                case 'MapTerritory':
                    return <MapTerritory content={slide.content} accentColor={accentColor} />;
                case 'CobraEffect':
                    return <CobraEffect content={slide.content} accentColor={accentColor} />;
                case 'SecondOrder':
                    return <SecondOrder content={slide.content} accentColor={accentColor} />;
                case 'ScalabilityBreak':
                    return <ScalabilityBreak content={slide.content} accentColor={accentColor} />;
                case 'FalseConsensus':
                    return <FalseConsensus content={slide.content} accentColor={accentColor} />;
                case 'RegressionMean':
                    return <RegressionMean content={slide.content} accentColor={accentColor} />;
                case 'PowerLaw':
                    return <PowerLaw content={slide.content} accentColor={accentColor} />;
                case 'DomainKnowledge':
                    return <DomainKnowledge content={slide.content} accentColor={accentColor} />;
                case 'LocalGlobal':
                    return <LocalGlobal content={slide.content} accentColor={accentColor} />;
                case 'SilentAgreement':
                    return <SilentAgreement content={slide.content} accentColor={accentColor} />;
                case 'ConsistentWrong':
                    return <ConsistentWrong content={slide.content} accentColor={accentColor} />;
                case 'PMSignedOff':
                    return <PMSignedOff content={slide.content} accentColor={accentColor} />;
                case 'FigmaVsProduction':
                    return <FigmaVsProduction content={slide.content} accentColor={accentColor} />;
                case 'SectionTitleSlide':
                    return <SectionTitleSlide content={slide.content} accentColor={accentColor} />;
                case 'Section2TitleSlide':
                    return <Section2TitleSlide content={slide.content} accentColor={accentColor} />;
                case 'Section3TitleSlide':
                    return <Section3TitleSlide content={slide.content} accentColor={accentColor} />;
                case 'Section4TitleSlide':
                    return <Section4TitleSlide content={slide.content} accentColor={accentColor} />;
                case 'LessonSlide':
                    return <LessonSlide content={slide.content} accentColor={accentColor} />;
                case 'OperatorIsSystem':
                    return <OperatorIsSystem content={slide.content} accentColor={accentColor} />;
                case 'ConclusionSlide':
                    return <ConclusionSlide content={slide.content} accentColor={accentColor} />;
                default:
                    return <div>Unknown custom component: {slide.customComponent}</div>;
            }
        }

        // Handle standard slide types
        switch (slide.type) {
            case 'hook':
                return <HookSlide content={slide.content} accentColor={accentColor} />;
            case 'shock':
                return <ShockSlide content={slide.content} accentColor={accentColor} />;
            case 'application':
                return <ApplicationSlide content={slide.content} accentColor={accentColor} />;
            default:
                return <div>Unknown slide type</div>;
        }
    };

    return (
        <AnimatePresence mode="wait" custom={slideIndex}>
            <motion.div
                key={slideIndex}
                custom={slideIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                }}
                className={styles.container}
            >
                {renderSlide()}
            </motion.div>
        </AnimatePresence>
    );
}
