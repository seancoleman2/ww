import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PasswordProtection from '@/components/PasswordProtection';
import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {
  return (
    <>
      <PasswordProtection />
      <div className="h-[100dvh] flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center overflow-hidden">
          <Hero />
        </main>
      </div>
    </>
  );
}