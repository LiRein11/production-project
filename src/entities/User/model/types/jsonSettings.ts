import { ETheme } from '@/shared/consts/theme';

export interface JsonSettings {
    theme?: ETheme;
    isFirstVisit?: boolean;
    settingsPageHasBeenOpen?: boolean;
}
