import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PasswordProtection from '@/components/PasswordProtection';
import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PasswordProtection />
      <Header />
      <Hero />
      <CountdownTimer />
    </div>
  );
}