// src/app/ClientLayout.tsx
'use client'; // Marca o componente como cliente

import { usePathname } from 'next/navigation';
import Menu from './menu/page'; // Corrija o caminho para o componente Menu
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Obtém o caminho atual

  return (
    <div className={inter.className}>
      {pathname !== '/' && <Menu />} {/* Renderiza o Menu apenas se não estiver na página inicial */}
      {children}
    </div>
  );
}
