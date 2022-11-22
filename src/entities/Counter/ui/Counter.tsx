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
          <h1>value = {counterValue}</h1>

          <Button onClick={increment}>
              increment
          </Button>

          <Button onClick={decrement}>
              decrement
          </Button>
      </div>
  )
}
