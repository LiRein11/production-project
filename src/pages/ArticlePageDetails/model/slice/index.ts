import { combineReducers } from '@reduxjs/toolkit';
import { ArticlePageDetailsSchema } from '../types';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articlePageDetailsReducer = combineReducers<ArticlePageDetailsSchema>({ recommendations: articleDetailsRecommendationsReducer, comments: articleDetailsCommentsReducer });
