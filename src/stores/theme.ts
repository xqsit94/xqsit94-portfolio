import { atom } from 'nanostores';

export const $theme = atom<string>(localStorage.getItem('theme') || 'dark');
