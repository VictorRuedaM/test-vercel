import { FC, PropsWithChildren } from 'react';
import styles from './DarkLayout.module.css';

export const DarkLayout: FC<PropsWithChildren> = ({children}): JSX.Element => {
  return (
    <div className={styles.bgColor}>
      <h3>Dark Layout</h3>
      {children}
    </div>
  )
}
