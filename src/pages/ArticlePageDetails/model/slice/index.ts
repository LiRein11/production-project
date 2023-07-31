import { combineReducers } from '@reduxjs/toolkit';

import { ArticlePageDetailsSchema } from '../types';

import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';

export const articlePageDetailsReducer = combineReducers<ArticlePageDetailsSchema>({ recommendations: articleDetailsRecommendationsReducer, comments: articleDetailsCommentsReducer });
