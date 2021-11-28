import Link from 'next/Link';
import { useRouter } from 'next/dist/client/router';

import styles from './Header.module.scss';

export const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      {router.pathname === '/' ? (
        <p className={styles['header-title']}>Profile Book</p>
      ) : (
        <Link href="/">
          <a className={styles['header-title-link']}>Profile Book</a>
        </Link>
      )}
    </header>
  );
};
