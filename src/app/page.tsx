import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PasswordProtection from '@/components/PasswordProtection';

export default function Home() {
  return (
    <div className="min-h-screen bg-pearl">
      <PasswordProtection />
      <Header />
      <main className="pt-16 flex items-center justify-center h-[calc(100vh-64px)]">
        <Hero />
      </main>
    </div>
  );
}