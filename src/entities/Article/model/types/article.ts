export enum EArticleBlockType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CODE = 'CODE',
}

export enum EArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

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
