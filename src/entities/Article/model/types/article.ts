import { User } from '@/entities/User';
import { EArticleBlockType, EArticleType } from '../consts/consts';

export type ArticleView = 'list' | 'grid';

export interface ArticleBlockBase {
    id: string;
    type: EArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: EArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: EArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: EArticleBlockType.CODE;
    code: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: EArticleType[];
    blocks: ArticleBlock[];
}

export interface ArticleSchema {
    isLoading?: boolean;
    error?: string;
    data?: Article[];
}
