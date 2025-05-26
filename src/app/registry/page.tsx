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
          
          <div className="max-w-3xl mx-auto text-center text-dark mb-12">
            <p className="mb-4">
              We are so grateful to have you join us at our wedding, and your presence is more than enough. However, for friends and family who are inclined to give a gift, please see our registries linked below.
            </p>
          </div>
          
          {/* Vertical Stack of Your Current Design */}
          <div className="max-w-lg mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg border border-gold/20 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="text-center p-6">
                  <h2 className="text-3xl font-exmouth text-gold mb-6">Over the Moon</h2>
                  <a 
                    href="https://overthemoon.com/apps/registry/mendicino-coleman-1a4a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-gold text-white px-6 py-2 text-sm rounded-md hover:bg-gold/90 transition-colors"
                  >
                    View Registry
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg border border-gold/20 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="text-center p-6">
                  <h2 className="text-3xl font-exmouth text-gold mb-6">Bloomingdale&apos;s</h2>
                  <a 
                    href="https://www.bloomingdales.com/registry/Nicolette-Mendicino-Sean-Coleman/1076594" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-gold text-white px-6 py-2 text-sm rounded-md hover:bg-gold/90 transition-colors"
                  >
                    View Registry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}