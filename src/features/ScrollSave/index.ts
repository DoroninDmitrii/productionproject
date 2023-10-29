export type { ScrollSaveSchema } from './model/types/ScrollSaveSchema';

export { getSaveScrollByPath } from './model/selectors/scrollSave';
export {
    scrollSaveReducer,
    scrollSaveAction,
} from './model/slices/ScrollSaveSlice';
