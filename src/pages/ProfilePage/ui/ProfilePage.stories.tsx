import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    // parameters: {
    //     loki: {
    //         skip: true,
    //     },
    // },
    // decorators: [withMock],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
// Normal.decorators = [
//     StoreDecorator({
//         profile: {
//             form: {
//                 first: 'Сергей',
//                 lastname: 'Степанов',
//                 age: 23,
//                 currency: ECurrency.RUB,
//                 country: ECountry.RUSSIA,
//                 city: 'Kurgan',
//                 username: 'admin',
//                 avatar: 'https://yt3.googleusercontent.com/ytc/AGIKgqNoQCWRSz0rcSjcI1qn8i2LcS4UOz5Z7ynyq6bnGyU=s900-c-k-c0x00ffffff-no-rj',
//             },
//             error: undefined,
//         },
//     }),
// ];
// Normal.parameters = {
//     mockData: [
//         {
//             url: `${__API__}/profile-ratings?profileId=1&userId=1`,
//             method: 'GET',
//             status: 200,
//             response: [
//                 {
//                     rate: 3,
//                 },
//             ],
//         },
//     ],
// };

export const Dark = Template.bind({});
Dark.args = {};
// Dark.decorators = [
//     ThemeDecorator(ETheme.DARK),
//     StoreDecorator({
//         profile: {
//             form: {
//                 first: 'Сергей',
//                 lastname: 'Степанов',
//                 age: 23,
//                 currency: ECurrency.RUB,
//                 country: ECountry.RUSSIA,
//                 city: 'Kurgan',
//                 username: 'admin',
//                 avatar: 'https://yt3.googleusercontent.com/ytc/AGIKgqNoQCWRSz0rcSjcI1qn8i2LcS4UOz5Z7ynyq6bnGyU=s900-c-k-c0x00ffffff-no-rj',
//             },
//             error: undefined,
//         },
//     }),
// ];
