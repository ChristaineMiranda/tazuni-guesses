import { w } from 'windstitch';

export const LoginButton = w.button(`
w-80	
rounded-lg	
bg-cyan-600	
h-12
hover:bg-amber-600
text-white
font-black	    
`);

export const LoginContainer = w.div(`
    h-screen
    w-full
    flex
    flex-col
    items-center
    justify-start
    bg-cyan-900
   	
`);
export const InputBox = w.form(`
    w-6/12	
    h-4/5
    flex
    flex-col
    items-center	
    justify-center
    
`);

export const Input = w.input(`
    w-80
    h-9
    p-5
    border-orange-600
    rounded-lg		
    my-5	
    border
`);

export const Link = w.h1(`
    cursor-pointer
    text-white
    my-1
    text-sm		
`);
 
export const TopBox = w.div(`
    
    h-44
    w-screen
    bg-white
    mt-12	
    rounded-lg	
    flex
    items-center
    justify-start
`);
export const TitleBox = w.div(`
   text-white 
`)

export const Image = w.img(`
    w-100
    mr-9
`)