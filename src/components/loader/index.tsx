import Image from 'next/image';

import styles from './styles.module.css';

/**
 *
 * @param param boolean used to show loader
 * @returns blurry screen to indicate ongoing request
 */
export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loaderBackground}></div>
      <Image
        src="/images/cyberdemiaLogo.svg"
        alt="loading..."
        width="400"
        height="400"
        className={styles.colorChange}
      />
    </div>
  );
}
