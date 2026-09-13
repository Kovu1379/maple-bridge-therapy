'use client';
import {useEffect,useState} from 'react';
import {ArrowUpRight,Check,Mail} from 'lucide-react';
import {Dialog,DialogTrigger,DialogContent,DialogTitle,DialogDescription} from '@/components/ui/dialog';
const options=['General enquiry','School-based occupational therapy','Pediatric occupational therapy','Virtual consultation','Adult rehabilitation','Accessibility & universal design','Consulting & education'];
export default function ContactOptions(){
 const[service,setService]=useState(options[0]);
 useEffect(()=>{const value=new URLSearchParams(window.location.search).get('service');if(value&&options.includes(value))setService(value)},[]);
 const message=service==='General enquiry'?'Hello Maple Bridge Therapy, I’d like to discuss arranging a consultation.':`Hello Maple Bridge Therapy, I’d like to ask about ${service.toLowerCase()}.`;
 const email='maplebridge6@gmail.com';
 return <><fieldset className="enquiry-options"><legend>What would you like to talk about?</legend><p>Choose a topic to include in your message.</p><div>{options.map(o=><label key={o} className={service===o?'selected':''}><input type="radio" name="enquiry" value={o} checked={service===o} onChange={()=>setService(o)}/>{service===o&&<Check size={14}/>}<span>{o}</span></label>)}</div></fieldset>
 <div className="contact-grid" style={{gridTemplateColumns:'1fr'}}><section className="contact-card"><Mail size={32} strokeWidth={1.3}/><h2>Start a conversation</h2><p>Share your enquiry, school requirements, or a consulting opportunity with our team.</p>
 <Dialog><DialogTrigger className="button">Contact us <ArrowUpRight size={18}/></DialogTrigger>
 <DialogContent style={{background:'#f7f7f0',color:'#10372e',padding:'2rem',borderRadius:'1.25rem',maxWidth:'min(30rem, calc(100vw - 2rem))'}}>
 <DialogTitle style={{fontSize:'1.7rem',paddingRight:'1rem'}}>Email Maple Bridge Therapy</DialogTitle>
 <DialogDescription style={{fontSize:'1rem',color:'#36584d'}}>Your selected topic will be included when you open your email app. You can review your message before sending.</DialogDescription>
 <a className="button" href={'mailto:'+email+'?subject='+encodeURIComponent('Maple Bridge Therapy — '+service)+'&body='+encodeURIComponent(message)}>Open email app <ArrowUpRight size={18}/></a>
 <p style={{fontSize:'1rem',overflowWrap:'anywhere'}}>Or email us at <a href={'mailto:'+email}>{email}</a>.</p>
 </DialogContent></Dialog><a className="button" style={{marginTop:"1rem",marginLeft:"0.75rem"}} href={"https://wa.me/201224185264?text="+encodeURIComponent(message)} target="_blank" rel="noopener noreferrer">Message on WhatsApp <ArrowUpRight size={18}/></a></section></div></>;
}
