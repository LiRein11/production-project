import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { HStack } from 'shared/ui/Stack';
import { getAddCommentFormText } from '../../model/selectors/getCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);

    const onCommentTextChange = useCallback(
        (text: string) => {
            dispatch(addCommentFormActions.setText(text));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onSendComment, text, onCommentTextChange]);

    return (
        <DynamicReducerLoader reducers={reducers}>
            <HStack justify="between" max className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input placeholder="Отправить комментарий" value={text} onChange={onCommentTextChange} className={cls.input} />
                <Button onClick={onSendHandler}>{t('Send')}</Button>
            </HStack>
        </DynamicReducerLoader>
    );
});

export default AddCommentForm;
