'use client';

import { useState } from 'react';
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Globe,
  Mail,
  ArrowUpRight,
  Music2,
  Rss,
  Twitch,
  type LucideIcon,
  GlobeIcon,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';


type LinkItem = {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
  accent: string;
};

const links: LinkItem[] = [
  {
    title: 'Portfolio',
    subtitle: 'View my portfolio',
    href: 'https://akshays.me',
    icon: Globe,
    accent: 'from-sky-500 to-blue-600',
  },
  {
    title: 'GitHub',
    subtitle: 'Open source projects',
    href: 'https://github.com/Akshay-2024',
    icon: Github,
    accent: 'from-slate-600 to-slate-900',
  },
  //{
    //title: 'Twitter / X',
    //subtitle: 'Thoughts & updates',
    //href: 'https://twitter.com',
    //icon: Twitter,
   // accent: 'from-sky-400 to-sky-600',
  //},
  //{
    //title: 'YouTube',
    //subtitle: 'Tutorials & vlogs',
    //href: 'https://youtube.com',
    //icon: Youtube,
    //accent: 'from-red-500 to-rose-600',
  //},
  {
    title: 'LinkedIn',
    subtitle: 'Let’s connect',
    href: 'https://www.linkedin.com/in/akshay-s-992aa431b',
    icon: Linkedin,
    accent: 'from-blue-600 to-blue-800',
  },
  {
    title: 'Instagram',
    subtitle: 'Follow me on Instagram',
    href: 'https://instagram.com/ak.s.ay/',
    icon: Instagram,
    accent: 'from-fuchsia-500 to-amber-500',
  },
  //{
    //title: 'Spotify',
    //subtitle: 'What I’m listening to',
    //href: 'https://spotify.com',
    //icon: Music2,
    //accent: 'from-emerald-500 to-green-600',
  //},
 
  {
    title: 'Email Me',
    subtitle: 'akshay20119@gmail.com',
    href: 'mailto:akshay20119@gmail.com',
    icon: Mail,
    accent: 'from-teal-500 to-cyan-600',
  },
];

const socials: { icon: LucideIcon; href: string; label: string }[] = [
  { icon: Github, href: 'https://github.com/Akshay-2024', label: 'GitHub' },
  { icon: GlobeIcon, href: 'https://akshays.me', label: 'Portfolio' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/akshay-s-992aa431b', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/ak.s.ay/', label: 'Instagram' },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[hsl(222_47%_7%)] text-white">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="animate-float-slow absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="animate-float absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-xl flex-col items-center px-5 py-12 sm:py-16">
        {/* Profile */}
        <div className="animate-fade-in flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-blue-500 via-emerald-400 to-fuchsia-500 p-[3px] blur-md" />
            <Avatar className="h-28 w-28 border-2 border-white/20 ring-4 ring-white/5">
              <AvatarImage
                src="/icon1.png"
                alt="Akshay S"
              />
              <AvatarFallback className="bg-gradient-to-tr from-blue-500 to-emerald-400 text-3xl font-semibold text-white">
                AS
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
            Akshay S
          </h1>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
            Photographer &amp; developer passionate about creating beautiful visuals &amp; 
            modern web experiences through design, code, and creativity.
          </p>

          {/* Social row */}
          <div className="mt-5 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 flex w-full flex-col gap-3">
          {links.map((link, i) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/40"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* hover gradient sweep */}
              <div
                className={cn(
                  'absolute inset-0 -z-10 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10',
                  link.accent
                )}
              />
              <div
                className={cn(
                  'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg',
                  link.accent
                )}
              >
                <link.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold leading-tight">{link.title}</p>
                <p className="truncate text-sm text-white/50">
                  {link.subtitle}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>
          ))}
        </div>

        {/* Share button */}
        <button
          onClick={handleShare}
          className="mt-8 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          {copied ? 'Link copied!' : 'Share this page'}
        </button>

        {/* Footer */}
        <footer className="mt-auto pt-12 text-center">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Designed & Developed by Akshay S.
          </p>
        </footer>
      </div>
    </main>
  );
}
