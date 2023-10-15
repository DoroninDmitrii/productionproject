import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useSelector } from 'react-redux';
import {
    getAddCommentFromError,
    getAddCommentFromText,
} from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    addCommentFormAction,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;

    const { t, i18n } = useTranslation('comment');
    const text = useSelector(getAddCommentFromText);
    const error = useSelector(getAddCommentFromError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormAction.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures 
                feature='isAppRedesigned' 
                on={
                    <Card max padding='24' border='round'>
                        <HStack
                            data-testid={'AddCommentForm'}
                            justify='between'
                            max
                            gap='16'
                            className={classNames(cls.AddCommentFormRedesigned, {}, [className])}
                        >
                            <Input
                                className={cls.input}
                                placeholder={t('Write a comment')}
                                value={text}
                                onChange={onCommentTextChange}
                                data-testid={'AddCommentForm.Input'}
                            />
                            <Button
                                variant='outline'
                                onClick={onSendHandler}
                                data-testid={'AddCommentForm.Button'}
                            >
                                {t('Send')}
                            </Button>
                        </HStack>
                    </Card>
                } 
                off={
                    <HStack
                        data-testid={'AddCommentForm'}
                        justify='between'
                        max
                        className={classNames(cls.AddCommentForm, {}, [className])}
                    >
                        <InputDeprecated
                            className={cls.input}
                            placeholder={t('Write a comment')}
                            value={text}
                            onChange={onCommentTextChange}
                            data-testid={'AddCommentForm.Input'}
                        />
                        <ButtonDeprecated
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSendHandler}
                            data-testid={'AddCommentForm.Button'}
                        >
                            {t('Send')}
                        </ButtonDeprecated>
                    </HStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
