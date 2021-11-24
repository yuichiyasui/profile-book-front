import Image from 'next/image';
import styles from 'src/components/page/top/Top.module.scss';

export const Top = () => {
  return (
    <main>
      <div className={styles.container}>
        <Image src="/top.png" alt="メインビジュアル" width={400} height={400} />
        <h1 className={styles.title}>Profile Book</h1>
        <p className={styles.description}>
          自分をシェアしよう！
          <br />
          メンバーのことを知ってみよう！
        </p>
      </div>
    </main>
  );
};
