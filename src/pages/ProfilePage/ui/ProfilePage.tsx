import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { EditableProfileCard } from '@/features/EditableProfileCard';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t, i18n } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    // for storybook
    // if (!id) {
    //   return <Text text={t('Profile is not found')}/>
    // }

    return (
        <Page
            data-testid={'ProfilePage'}
            className={classNames('', {}, [className])}
        >
            <VStack max gap={'16'}>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
