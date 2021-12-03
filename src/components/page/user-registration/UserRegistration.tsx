import Head from 'next/head';

import { Header } from 'src/components/ui/Header';

export const UserRegistration = () => {
  return (
    <>
      <Head>
        <title key="title">ユーザー登録 | Profile Book</title>
      </Head>

      <Header />
      <main>
        <h1>ユーザー登録</h1>
      </main>
    </>
  );
};
