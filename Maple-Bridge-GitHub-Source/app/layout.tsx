import type { Metadata } from 'next';

import SiteNav,{Logo} from './site-nav';
import './globals.css';
import Motion from './motion';
export const metadata:Metadata={title:{default:'Maple Bridge Therapy | Pediatric OT Assessment in Cairo',template:'%s | Maple Bridge Therapy'},description:'Canadian-trained pediatric occupational therapists in Cairo. Occupational Therapy Assessment, home observation, practical plans, and follow-up.',icons:{icon:'/icon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a href="#main" className="skip">Skip to content</a><Motion/><SiteNav/><noscript><nav className="no-script-nav" aria-label="Page navigation"><a href="/">Home</a><a href="/assessment">Occupational Therapy Assessment</a><a href="/about">About</a><a href="/contact">Contact</a></nav></noscript>{children}<footer><div className="wrap footer-top"><Logo/><p>Clarity. Participation. Change.<br/><span>Pediatric occupational therapy · Cairo.</span></p><div className="footer-links"><a href="/resources">Parent resources</a><a href="/shop">Shop</a><a href="/contact">Let’s connect ↗</a></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Maple Bridge Therapy</span><span>Understand. Plan. Participate.</span></div></footer></body></html>}
