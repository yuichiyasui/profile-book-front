import Image from 'next/image';
import Head from 'next/head';

import styles from './Top.module.scss';

export const Top = () => {
  return (
    <>
      <Head>
        <title key="title">Top | Profile Book</title>
      </Head>
      <header className={styles.header}>
        <p className={styles['header-title']}>Profile Book</p>
      </header>
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
            自分をシェアしよう！
            <br />
            メンバーのことを知ってみよう！
          </p>
        </div>
        {/* TODO: ログイン画面作成後Linkに変更する */}
        <button className={styles['to-login-button']}>ログインする</button>
      </main>
    </>
  );
};
