// 

import Header from '@/components/Header';

export default function Accommodations() {
  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen bg-pearl">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-exmouth text-gold text-center mb-8">
            Accommodations
          </h1>
          
          <div className="max-w-3xl mx-auto text-center text-dark mb-12">
            <p className="mb-4">
              Please see the below recommendations for stay and transportation for your visit to New York City. 
            </p>
            <p>
              We look forward to celebrating with you!
            </p>
          </div>
          
          {/* Variation 2: Clean Single Section */}
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Stay Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gold/20 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="text-center p-6">
                <div className="mb-3">
                  <span className="text-3xl">🗝️</span>
                </div>
                <h2 className="text-3xl font-exmouth text-gold mb-6">Stay</h2>
                <div className="space-y-4 text-left">
                  <div className="border-b border-gray-100 pb-3">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="text-base font-crimson font-semibold text-gray-800">New York Hilton Midtown</h3>
                        <p className="text-gray-600 text-sm">1335 Avenue of the Americas, New York, NY 10019</p>
                      </div>
                      <a 
                        href="https://www.hilton.com/en/hotels/nycnhhh-new-york-hilton-midtown/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gold text-white px-4 py-1 rounded text-sm hover:bg-gold/90 transition-colors ml-4 inline-block"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                  
                  <div className="border-b border-gray-100 pb-3">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="text-base font-crimson font-semibold text-gray-800">Loews Regency New York</h3>
                        <p className="text-gray-600 text-sm">540 Park Avenue, New York, NY 10065</p>
                      </div>
                      <a 
                        href="https://www.loewshotels.com/regency-hotel" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gold text-white px-4 py-1 rounded text-sm hover:bg-gold/90 transition-colors ml-4 inline-block"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                  
                  <div className="border-b border-gray-100 pb-3">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="text-base font-crimson font-semibold text-gray-800">The Pierre</h3>
                        <p className="text-gray-600 text-sm">2 E 61st St, New York, NY 10065</p>
                      </div>
                      <a 
                        href="https://www.thepierreny.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gold text-white px-4 py-1 rounded text-sm hover:bg-gold/90 transition-colors ml-4 inline-block"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="text-base font-crimson font-semibold text-gray-800">The Plaza</h3>
                        <p className="text-gray-600 text-sm">768 5th Ave, New York, NY 10019</p>
                      </div>
                      <a 
                        href="https://www.theplazany.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gold text-white px-4 py-1 rounded text-sm hover:bg-gold/90 transition-colors ml-4 inline-block"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Transportation Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gold/20 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="text-center p-6">
                <div className="mb-3">
                  <span className="text-3xl">🚕</span>
                </div>
                <h2 className="text-3xl font-exmouth text-gold mb-5">Transportation</h2>
                <div className="space-y-4 text-left">
                  <div>
                    <h3 className="text-base font-crimson font-semibold text-gray-800 mb-2">Taxi & Rideshare</h3>
                    <p className="text-gray-700 text-sm">
                      Transportation to the ceremony and reception will not be provided. We recommend traveling by Taxi, Uber, or Lyft, as they are readily available throughout Manhattan. The ride from the Church of St. Ignatius Loyola to the Metropolitan Club takes approximately 10-15 minutes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-crimson font-semibold text-gray-800 mb-2">Subway</h3>
                    <p className="text-gray-700 text-sm">
                      If you would rather subway from the ceremony to the reception, take the 4, 5, or 6 train from 86th Street (near the church) to 59th Street. The stop is a short walk to the Metropolitan Club.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}