import styles from './LandingContent.module.css';
import { ReactNode } from 'react';

interface LandingContentProps {
  introText: string;
  logo: ReactNode;
}

export const LandingContent = ({ introText, logo }: LandingContentProps) => {
  return (
    <div className={styles.landingContent}>
      <div className={styles.logoWrapper}>
        {logo}
        <h2 className={styles.introText}>{introText}</h2>
      </div>
    </div>
  );
};
