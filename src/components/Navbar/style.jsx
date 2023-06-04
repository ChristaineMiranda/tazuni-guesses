import { w } from 'windstitch';

export const Navbar = w.nav(`
    min-w-full 
    h-20
    items-center		
    flex 
    justify-around	
    white
`);

export const Logo = w.img(`
w-36	
`);

export const LoginButton = w.button(`
    w-48	
    rounded-lg	
    bg-amber-400	
    h-12
    hover:bg-amber-600
    text-white
    font-black		
`);
