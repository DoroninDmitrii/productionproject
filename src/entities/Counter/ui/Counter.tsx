/* eslint-disable i18next/no-literal-string */
import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { add, decrement, increment } = useCounterActions();

    const handelInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };
    return (
        <div>
            <h1 data-testid='value-title'>{counterValue}</h1>

            <Button onClick={handelInc} data-testid='increment-btn'>
                increment
            </Button>

            <Button onClick={handleDec} data-testid='decrement-btn'>
                decrement
            </Button>

            <Button onClick={handleAddFive} data-testid='decrement-btn'>
                addFive
            </Button>
        </div>
    );
};
