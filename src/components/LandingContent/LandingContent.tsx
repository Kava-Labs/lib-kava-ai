import styles from './LandingContent.module.css';
import { ReactNode } from 'react';
import { KavaAILogo } from '../KavaAILogo/KavaAILogo';
import { useIsMobileLayout } from '../../hooks';

interface LandingContentProps {
  introText: string;
}

export const LandingContent = ({ introText }: LandingContentProps) => {
  const isMobileLayout = useIsMobileLayout();

  return (
    <div className={styles.landingContent}>
      <div className={styles.logoWrapper}>
        <KavaAILogo height={isMobileLayout ? 40 : 50} />
        <h2 className={styles.introText}>{introText}</h2>
      </div>
    </div>
  );
};
