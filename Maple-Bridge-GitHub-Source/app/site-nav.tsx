'use client';

import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem } from '@/components/ui/dropdown-menu';
const links=[['Home','/'],['Occupational Therapy Assessment','/assessment'],['Our Approach','/approach'],['About','/about'],['Shop','/shop'],['Contact','/contact']];
export function Logo(){return <a href="/" className="logo" aria-label="Maple Bridge Therapy home"><svg width="43" height="42" viewBox="0 0 43 42" fill="none" aria-hidden="true"><path d="M4 33V19a9 9 0 0 1 18 0v14M22 33V12a8 8 0 0 1 16 0v21" stroke="currentColor" strokeWidth="5"/><circle cx="5" cy="6" r="3" fill="currentColor"/></svg><span>maple bridge<small>THERAPY · OCCUPATIONAL THERAPY</small></span></a>}
export default function SiteNav(){const path=usePathname();return <header className="header"><div className="wrap nav-inner"><Logo/><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,url])=><a key={url} href={url} aria-current={path===url?'page':undefined}>{label}</a>)}</nav><div className="mobile-nav"><DropdownMenu><DropdownMenuTrigger className="menu-trigger" aria-label="Open navigation"><Menu/></DropdownMenuTrigger><DropdownMenuContent align="end" className="service-menu">{links.map(([label,url])=><DropdownMenuItem key={url} render={<a href={url}/>}>{label}</DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu></div></div></header>}
