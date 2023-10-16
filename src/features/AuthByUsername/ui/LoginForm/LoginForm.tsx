import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDerecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input as InputDerecated } from '@/shared/ui/deprecated/Input';
import { useTranslation } from 'react-i18next';
import { loginAction, loginReducer } from '../../modal/slice/loginSlice';
import { loginByUsername } from '../../modal/services/loginByUserName/loginByUsername';
import { Text as TextDerecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { getLoginUsername } from '../../modal/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../modal/selectors/getLoginPassword/getLoginPassword';
import { getLoginisLoading } from '../../modal/selectors/getLoginisLoading/getLoginisLoading';
import { getLoginError } from '../../modal/selectors/getLoginError/getLoginError';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginisLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginAction.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginAction.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ password, username }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
            <ToggleFeatures 
                feature='isAppRedesigned' 
                on={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <Text title={t('Authentication form')} />
                        {error && (
                            <Text
                                text={t('Your login or password is not correct')}
                                variant='error'
                            />
                        )}
                        <Input
                            autofocus
                            placeholder={t('Username')}
                            type='text'
                            className={cls.input}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <Input
                            placeholder={t('Password')}
                            type='text'
                            className={cls.input}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <Button
                            variant='clear'
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Log in')}
                        </Button>
                    </div>
                } 
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDerecated title={t('Authentication form')} />
                        {error && (
                            <TextDerecated
                                text={t('Your login or password is not correct')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDerecated
                            autofocus
                            placeholder={t('Username')}
                            type='text'
                            className={cls.input}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDerecated
                            placeholder={t('Password')}
                            type='text'
                            className={cls.input}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDerecated
                            theme={ButtonTheme.OUTLINE}
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Log in')}
                        </ButtonDerecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
