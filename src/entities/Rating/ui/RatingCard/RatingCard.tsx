import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { useMobile } from '@/shared/lib/hooks/useMobile/useMobile';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    feedbackTitle,
    hasFeedback,
    onAccept,
    onCancel,
    title,
    rate = 0,
  } = props;
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
      setIsModalOpen(true);
    },
    [onAccept, hasFeedback],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, starsCount, onAccept]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
      <VStack max gap={'32'}>
          <Text title={feedbackTitle} />
          <Input
        data-testid={'RatingCard.Input'}
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Your comment')}
      />
          <HStack max gap={'16'} justify={'end'}>
              <Button
          data-testid={'RatingCard.Close'}
          onClick={cancelHandle}
          theme={ButtonTheme.OUTLINE_RED}
        >
                  {t('Close')}
              </Button>
              <Button data-testid={'RatingCard.Send'} onClick={acceptHandle}>
                  {t('Send')}
              </Button>
          </HStack>
      </VStack>
  );

  const { width } = useMobile();

  const isMobile = width <= 768;

  return (
      <Card
      className={classNames('', {}, [className])}
      max
      data-testid={'RatingCard'}
    >
          <VStack align={'center'} gap={'8'} max>
              <Text title={starsCount ? t('Thank you') : title} />
              <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
          </VStack>

          {isMobile ? (
              <Drawer isOpen={isModalOpen} lazy>
                  {modalContent}
              </Drawer>
      ) : (
          <Modal isOpen={isModalOpen} lazy>
              {modalContent}
          </Modal>
      )}
      </Card>
  );
});

export default RatingCard;
