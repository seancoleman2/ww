import Header from '@/components/Header';

export default function Schedule() {
  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen bg-pearl">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-exmouth text-gold text-center mb-12">
            Schedule
          </h1>
          <div className="max-w-3xl mx-auto text-center text-dark mb-12">
            <p className="mb-4">
              We are delighted to invite you to our wedding on January 17, 2026 in New York City.
            </p>
            <p>
              We look forward to sharing this special day with you.
            </p>
          </div>
          
          {/* Variation 2: Structured Flow */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Ceremony Card */}
              <div className="bg-white rounded-lg shadow-lg border border-gold/20 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-b from-gray-50 to-white text-center py-6 px-6">
                  <div className="mb-3">
                    <span className="text-3xl">⛪</span>
                  </div>
                  <h3 className="text-3xl font-exmouth text-gold">Ceremony</h3>
                </div>
                <div className="px-6 pb-6 text-center">
                  <div className="text-base font-crimson font-semibold text-gray-800 mb-3">3:00 PM</div>
                  <p className="text-gray-700 font-medium text-base mb-4">Church of St. Ignatius Loyola</p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>980 Park Ave</p>
                    <p>New York, NY 10028</p>
                  </div>
                </div>
              </div>
              
              {/* Reception Card */}
              <div className="bg-white rounded-lg shadow-lg border border-gold/20 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-b from-gray-50 to-white text-center py-6 px-6">
                  <div className="mb-3">
                    <span className="text-3xl">🥂</span>
                  </div>
                  <h3 className="text-3xl font-exmouth text-gold">Reception</h3>
                </div>
                <div className="px-6 pb-6 text-center">
                  <div className="text-base font-crimson font-semibold text-gray-800 mb-3">5:00 PM - 10:30 PM</div>
                  <p className="text-gray-700 font-medium text-base mb-4">The Metropolitan Club</p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>1 E 60th St</p>
                    <p>New York, NY 10022</p>
                  </div>
                </div>
              </div>
              
              {/* Late Night Card */}
              <div className="bg-white rounded-lg shadow-lg border border-gold/20 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-b from-gray-50 to-white text-center py-6 px-6">
                  <div className="mb-3">
                    <span className="text-3xl">🌙</span>
                  </div>
                  <h3 className="text-3xl font-exmouth text-gold">Late Night</h3>
                </div>
                <div className="px-6 pb-6 text-center">
                  <div className="text-base font-crimson font-semibold text-gray-800 mb-3">10:30 PM - 12:30 AM</div>
                  <p className="text-gray-700 font-medium text-base mb-4">TBD</p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p className="italic">Location details</p>
                    <p className="italic">coming soon</p>
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