// app/components/Navbar.tsx
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <Link href="/">Home</Link> | 
      <Link href="/about">About</Link> | 
      <Link href="/contact">Contact</Link>
    </nav>
  );
}