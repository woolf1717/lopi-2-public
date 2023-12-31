'use client';

import {
  AccountActivationErrorMessage,
  AccountActivationMessage,
  AccountActivationSuccessMessage,
} from './AccountActivationMessages';
import { AppRoutes, exhaustiveCheck } from '@lopi-2/common';
import { FC, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import style from './AccountActivation.module.scss';
import { useAccountActivation } from '../../../../hooks/useAccountActivation';
import { useProgressBar } from '../../../../hooks/useProgressBar';

const START_PROGRESS_VALUE = 100;
const PROGRESS_STEP = 2;
const PROGRESS_INTERVAL = 100;

export const AccountActivation: FC = () => {
  const router = useRouter();
  const params = useSearchParams();
  const tokenValue = params.get('token') as string;
  const encodedUsername = params.get('email') as string;
  const status = useAccountActivation(encodedUsername, tokenValue);
  const progress = useProgressBar({
    initialValue: START_PROGRESS_VALUE,
    decrement: PROGRESS_STEP,
    intervalTime: PROGRESS_INTERVAL,
    shouldShowProgress: status === 'success',
  });

  useEffect(() => {
    if (progress === 0 && status === 'success') {
      router.push(AppRoutes.getLoginPath());
    }
  }, [progress, status]);

  const CurrentComponent = () => {
    switch (status) {
      case 'pending':
        return <AccountActivationMessage />;
      case 'success':
        return <AccountActivationSuccessMessage countdown={progress} />;
      case 'error':
        return (
          <AccountActivationErrorMessage
            encodedUsername={encodedUsername}
            tokenValue={tokenValue}
          />
        );
      default:
        return exhaustiveCheck(status);
    }
  };

  return (
    <div className={style.container}>
      <CurrentComponent />
    </div>
  );
};
