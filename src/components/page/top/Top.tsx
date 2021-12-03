import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/Link';

import styles from './Top.module.scss';

import { Header } from 'src/components/ui/Header';

export const Top = () => {
  return (
    <>
      <Head>
        <title key="title">Top | Profile Book</title>
      </Head>

      <Header />
      <main>
        <div className={styles.container}>
          <div className={styles.mainvisual}>
            <Image
              src="/top.png"
              alt="メインビジュアル"
              width={400}
              height={400}
            />
          </div>
          <h1 className={styles.title}>Profile Book</h1>
          <p className={styles.description}>
            自分をシェアしよう
            <br />
            メンバーのことを知ってみよう
          </p>
        </div>
        <Link href="/login">
          <a className={styles['to-login-button']}>ログインする</a>
        </Link>
      </main>
    </>
  );
};
