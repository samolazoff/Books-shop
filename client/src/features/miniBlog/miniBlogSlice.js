import { createSlice } from '@reduxjs/toolkit';

export const miniBloglice = createSlice({
    name: 'miniBloglice',
    initialState: {
        coments: [
            {
                id: '123123123123123',
                user: 'User',
                img: '',
                book: 'Mouse',
                author: 'Writer Writer',
                coment: 'Qmnhf fkj la jfahadfajoic jadflkandf,ajdfhnaudfja.dfnagkb aldfa U;IOrj anfkjadfja kfa dnfasdfn aofuioaj adb amj apo dfjafk awbe riuqjeiofjdfbadfjahi au.df'
            },
            {
                id: '12312312312456',
                user: 'User ser',
                img: '',
                book: 'Mouse and cat',
                author: 'Writer Writer',
                coment: 'Qmnhf fkj laasdas drt tu rjjru r jfahadfajoic jadflkandf,ajdfhnaudfja.dfhfg hfg hnhagkb aldfa U;IOrj anfkj hdgh dghd adfja kfa dnfasdfn aofuioaj adb amj apo dfjafk awbe riuqjeiofjdfbadfjahi au.df'
            },
            {
                id: '123123qwqwqw12312456',
                user: 'User UUser',
                img: '',
                book: 'Mouse and cat and dog',
                author: 'Writer Writer Big',
                coment: 'Qmnhf fkj laasdas drt 468242sa6d 4asd4a8f s4d65ad.8ad4f89 af98sadf. stu rjjru r jfahadfajoic jadflkandf,ajdfhnaudfja.dfhfg hfg hnhagkb aldfa U;IOrj anfkj hdgh dghd adfja kfa dnfasdfn aofuioaj adb amj apo dfjafk awbe riuqjeiofjdfbadfjahi au.df'
            },

        ]
    },
    reducers: {  }
});

// export const { } = navSlice.actions;

export default miniBloglice.reducer;