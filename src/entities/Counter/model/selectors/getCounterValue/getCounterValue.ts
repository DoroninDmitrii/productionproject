import { buildSelector } from '@/shared/lib/store';

// export const gettCounterValue = createSelector(
//   getCounter, (counter: CounterSchema) => counter.value
// )

export const [useCounterValue, gettCounterValue] = buildSelector(
  (state) => state.counter.value,
);
