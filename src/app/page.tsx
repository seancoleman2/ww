import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PasswordProtection from '@/components/PasswordProtection';

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-pearl">
      <PasswordProtection />
      <Header />
      <main className="pt-16 flex items-center justify-center h-[calc(100dvh-64px)]">
        <Hero />
      </main>
    </div>
  );
}