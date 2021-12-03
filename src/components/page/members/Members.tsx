import Head from 'next/head';

import styles from './Members.module.scss';

import { Header } from 'src/components/ui/Header';

export const Members = () => {
  return (
    <>
      <Head>
        <title key="title">メンバー一覧 | Profile Book</title>
      </Head>

      <Header />
      <main>
        <div className={styles.container}>
          <h1>メンバー一覧</h1>
        </div>
      </main>
    </>
  );
};
