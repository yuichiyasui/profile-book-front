import { FormEvent } from 'react';
import Head from 'next/head';
import Link from 'next/Link';

import styles from './UserRegistration.module.scss';

import { Header } from 'src/components/ui/Header';

export const UserRegistration = () => {
  const register = (e: FormEvent) => {
    e.preventDefault();
    alert('ユーザー登録しました。');
  };

  return (
    <>
      <Head>
        <title key="title">ユーザー登録 | Profile Book</title>
      </Head>

      <Header />
      <main>
        <div className={styles.container}>
          <section className={styles['user-registration']}>
            <form onSubmit={register}>
              <h1>ユーザー登録</h1>
              <div>
                <label>
                  <p>メールアドレス</p>
                  <input
                    type="email"
                    name="email"
                    placeholder="メールアドレスを入力"
                  />
                </label>
              </div>
              <div>
                <label>
                  <p>パスワード</p>
                  <input
                    type="password"
                    name="password"
                    placeholder="パスワードを入力"
                  />
                </label>
              </div>
              <div>
                <label>
                  <p>パスワード再確認</p>
                  <input
                    type="password"
                    name="confirm-password"
                    placeholder="再度パスワードを入力"
                  />
                </label>
              </div>
              <button type="submit">登録</button>
            </form>
            <Link href="/login">ログイン画面に戻る</Link>
          </section>
        </div>
      </main>
    </>
  );
};
