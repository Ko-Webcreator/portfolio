import React, { useState } from 'react';
import styles from '@/styles/lock-dialog.module.scss';

const LockDialog = () => {
  const [isPasswordError, setPasswordError] = useState(false);

  const onConfirmPassword = () => {
    setPasswordError(true);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.inputArea}>
        <p>Portfolioを見るにはパスワードが必要です</p>
        <p>
          <input type="text" /> <input onClick={onConfirmPassword} type="button" value="入力" />
        </p>
        {isPasswordError && <p className={styles.error}>パスワードが違います</p>}
      </div>
    </div>
  );
};

export default LockDialog;
