import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PasswordProtection from '@/components/PasswordProtection';
import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {
  return (
    <>
      <PasswordProtection />
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <Hero />
        </div>
        <CountdownTimer />
      </div>
    </>
  );
}