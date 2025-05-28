import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PasswordProtection from '@/components/PasswordProtection';

export default function Home() {
  return (
    <>
      <PasswordProtection />
      <Header />
      <main className="flex-1 flex items-center justify-center h-[calc(100dvh-80px)]">
        <Hero />
      </main>
    </>
  );
}