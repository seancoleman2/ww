import Header from '@/components/Header';
import PasswordProtection from '@/components/PasswordProtection';

export default function Registry() {
  return (
    <>
      <PasswordProtection />
      <Header />
      <div className="pt-20 min-h-screen bg-pearl">
        <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-exmouth text-gold text-center mb-12">
            Registry
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gold/20 text-center">
                <h2 className="text-3xl font-crimson text-dark mb-4">Over the Moon</h2>
                <a 
                  href="https://overthemoon.com/apps/registry/mendicino-coleman-1a4a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gold text-white px-6 py-2 rounded-md hover:bg-gold/90 transition-colors"
                >
                  View Registry
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gold/20 text-center">
                <h2 className="text-3xl font-crimson text-dark mb-4">Bloomingdale&apos;s</h2>
                <a 
                  href="https://www.bloomingdales.com/registry" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gold text-white px-6 py-2 rounded-md hover:bg-gold/90 transition-colors"
                >
                  View Registry
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}