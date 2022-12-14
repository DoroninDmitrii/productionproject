/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { gettCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterAction } from '../model/slice/counterSlice'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(gettCounterValue)

  const increment = () => {
    dispatch(counterAction.increment())
  }

  const decrement = () => {
    dispatch(counterAction.decrement())
  }
  return (
      <div>
          <h1 data-testid="value-title">{counterValue}</h1>

          <Button
          onClick={increment}
          data-testid="increment-btn"
          >
              increment
          </Button>

          <Button
           onClick={decrement}
           data-testid="decrement-btn"
           >
              decrement
          </Button>
      </div>
  )
}
