import { EArticleBlockType } from '../../model/consts/consts';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleDetails.module.scss';

export const renderArticleBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case EArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
        case EArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />
            );
        case EArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
        default:
            return null;
    }
};
