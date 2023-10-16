import { useTranslation } from 'react-i18next';
import { useCallback, memo } from 'react';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileAction } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className } = props;

        const { t } = useTranslation('profile');

        const readonly = useSelector(getProfileReadonly);
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const dispatch = useAppDispatch();

        const canEdit = authData?.id === profileData?.id;

        const onEdit = useCallback(() => {
            dispatch(profileAction.setReadonly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileAction.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <ToggleFeatures 
                feature='isAppRedesigned' 
                on={
                    <Card padding='24' max>
                        <HStack max justify='between' className={classNames('', {}, [className])}>
                            <Text title={t('Profile')} />
                            {canEdit && (
                                <>
                                    {readonly ? (
                                        <Button
                                            variant='outline'
                                            onClick={onEdit}
                                            data-testid={'EditableProfileCardHeader.EditButton'}
                                        >
                                            {t('Edit')}
                                        </Button>
                                    ) : (
                                        <HStack gap={'8'}>
                                            <Button
                                                color='error'
                                                onClick={onCancelEdit}
                                                data-testid={'EditableProfileCardHeader.CancelButton'}
                                            >
                                                {t('Cancel')}
                                            </Button>

                                            <Button
                                                color='success'
                                                onClick={onSave}
                                                data-testid={'EditableProfileCardHeader.SaveButton'}
                                            >
                                                {t('Save')}
                                            </Button>
                                        </HStack>
                                    )}
                                </>
                            )}
                        </HStack>
                    </Card>
                } 
                off={
                    <HStack max justify='between' className={classNames('', {}, [className])}>
                        <TextDeprecated title={t('Profile')} />
                        {canEdit && (
                            <>
                                {readonly ? (
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onEdit}
                                        data-testid={'EditableProfileCardHeader.EditButton'}
                                    >
                                        {t('Edit')}
                                    </ButtonDeprecated>
                                ) : (
                                    <HStack gap={'8'}>
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onCancelEdit}
                                            data-testid={'EditableProfileCardHeader.CancelButton'}
                                        >
                                            {t('Cancel')}
                                        </ButtonDeprecated>

                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE}
                                            onClick={onSave}
                                            data-testid={'EditableProfileCardHeader.SaveButton'}
                                        >
                                            {t('Save')}
                                        </ButtonDeprecated>
                                    </HStack>
                                )}
                            </>
                        )}
                    </HStack>
                } 
            />
        );
    },
);

export default EditableProfileCardHeader;
