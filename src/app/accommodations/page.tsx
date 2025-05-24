import Header from '@/components/Header';

export default function Accommodations() {
  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen bg-pearl">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-exmouth text-gold text-center mb-12">
            Accommodations
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gold/20 mb-8">
              <h2 className="text-2xl font-exmouth text-gold mb-4">The Plaza</h2>
              <p className="text-dark mb-4">768 5th Ave, New York, NY 10019</p>
              <p className="text-dark mb-4">
                A block from The Metropolitan Club, The Plaza offers luxurious accommodations in the heart of Manhattan.
              </p>
              <a
                href="https://www.theplazany.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                Visit Website →
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gold/20">
              <h2 className="text-2xl font-exmouth text-gold mb-4">The Pierre</h2>
              <p className="text-dark mb-4">2 E 61st St, New York, NY 10065</p>
              <p className="text-dark mb-4">
                Just steps from The Metropolitan Club, The Pierre offers elegant rooms and suites with stunning views of Central Park.
              </p>
              <a
                href="https://www.tajhotels.com/en-in/taj/the-pierre-new-york/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                Visit Website →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 