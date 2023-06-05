import React, { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';
import styles from '@/styles/lock-dialog.module.scss';

type Props = {
  setAllowScroll: Dispatch<SetStateAction<boolean>>;
};

const LockDialog = ({ setAllowScroll }: Props) => {
  const [isPasswordError, setPasswordError] = useState(false);
  const passWordRef = useRef<HTMLInputElement>(null);

  const onConfirmPassword = useCallback(async () => {
    const password = passWordRef.current?.value;
    if (!password) return;
    const response = await fetch('/api/password', {
      body: JSON.stringify({
        password,
      }),
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (response.status !== 200) {
      setPasswordError(true);
      return;
    }

    setAllowScroll(true);
  }, [passWordRef, setAllowScroll]);

  return (
    <div className={styles.wrap}>
      <div className={styles.inputArea}>
        <p>Portfolioを見るにはパスワードが必要です</p>
        <p>
          <input ref={passWordRef} type="text" />
          <input onClick={onConfirmPassword} type="button" value="入力" />
        </p>
        {isPasswordError && <p className={styles.error}>パスワードが違います</p>}
      </div>
    </div>
  );
};

export default LockDialog;
