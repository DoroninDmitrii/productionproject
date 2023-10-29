import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommnetsReducer } from './articleDetailsCommentsSlice';
import { articleDetaisPageRecommendationsReducer } from './articleDetaisPageRecommendationsSlice';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
      recommendations: articleDetaisPageRecommendationsReducer,
      comments: articleDetailsCommnetsReducer,
  });
