import type { Metadata } from 'next';

import SiteNav,{Logo} from './site-nav';
import './globals.css';
import Motion from './motion';
export const metadata:Metadata={title:{default:'Maple Bridge Therapy | Possibility in everyday life',template:'%s | Maple Bridge Therapy'},description:'Occupational therapy and consulting for children, families, international schools, and adults across the Middle East and North Africa.',icons:{icon:'/icon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a href="#main" className="skip">Skip to content</a><Motion/><SiteNav/><noscript><nav className="no-script-nav" aria-label="Page navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/about">About</a><a href="/contact">Contact</a></nav></noscript>{children}<footer><div className="wrap footer-top"><Logo/><p>Possibility in everyday life.<br/><span>Occupational therapy across MENA.</span></p><a href="/contact">Let’s connect ↗</a></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Maple Bridge Therapy</span><span>People. Participation. Possibility.</span></div></footer></body></html>}
