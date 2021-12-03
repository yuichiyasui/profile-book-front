import Head from 'next/head';

import styles from './Login.module.scss';

import { Header } from 'src/components/ui/Header';
import { FormEvent } from 'react';
import Link from 'next/Link';

export const Login = () => {
  const login = (e: FormEvent) => {
    e.preventDefault();
    alert('ログインしました。');
  };

  return (
    <>
      <Head>
        <title key="title">ログイン | Profile Book</title>
      </Head>

      <Header />
      <main>
        <div className={styles.container}>
          <section className={styles.login}>
            <h1>ログイン</h1>
            <form onSubmit={login}>
              <div>
                <label>
                  <p>メールアドレス</p>
                  <input type="email" placeholder="メールアドレス" />
                </label>
              </div>
              <div>
                <label>
                  <p>パスワード</p>
                  <input type="password" placeholder="パスワード" />
                </label>
              </div>
              <button>ログイン</button>
            </form>
            <Link href="/user-registration">
              <a>ユーザー登録</a>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};
