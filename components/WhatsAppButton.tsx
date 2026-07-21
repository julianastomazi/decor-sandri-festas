"use client";
import {motion} from "framer-motion";
const link="https://wa.me/5551998429491?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20para%20minha%20festa!";
export function WhatsAppButton({label="Quero meu orçamento",className=""}:{label?:string,className?:string}){return <motion.a whileHover={{y:-2}} whileTap={{scale:.98}} className={`button ${className}`} href={link} target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"/> {label}</motion.a>}
export function WhatsAppFloat(){return <a className="whatsapp-float" href={link} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><i className="fa-brands fa-whatsapp"/><span>Fale com a Sandri</span></a>}
