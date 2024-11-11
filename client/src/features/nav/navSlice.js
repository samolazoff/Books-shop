import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    mainItems: [
        {
            name: 'Main',
            href: '/',
        },
        {
            name: 'About Us',
            href: '/about',
        }, 
        {
            name: 'Shop',
            href: '/shop',
        },
        {
            name: 'Blog',
            href: '/blog',
        }
    ],
    acauntItems: [
        {
            name: 'Sign in',
            href: '/login',
        }, 
        {
            name: 'Sign up',
            href: '/registration',
        }
    ]
  },
  reducers: {  }
});

// export const { } = navSlice.actions;

export default navSlice.reducer;