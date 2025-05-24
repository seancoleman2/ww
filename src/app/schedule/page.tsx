import Header from '@/components/Header';

export default function Schedule() {
  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen bg-pearl">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-exmouth text-gold text-center mb-6">
            Schedule
          </h1>
          <div className="max-w-3xl mx-auto text-center text-dark mb-12">
            <p className="mb-4">
              We are delighted to invite you to our wedding celebration in New York City. The ceremony will be held at the Church of St. Ignatius Loyola, followed by an elegant reception at The Metropolitan Club.
            </p>
            <p>
              We look forward to sharing this special day with you.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gold/20 mb-8">
              <h2 className="text-2xl font-exmouth text-gold mb-4">Ceremony</h2>
              <p className="text-dark mb-2">January 17, 2026</p>
              <p className="text-dark mb-4">3:00 PM</p>
              <p className="text-dark">Church of St. Ignatius Loyola</p>
              <p className="text-dark">980 Park Ave, New York, NY 10028</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gold/20">
              <h2 className="text-2xl font-exmouth text-gold mb-4">Reception</h2>
              <p className="text-dark mb-2">January 17, 2026</p>
              <p className="text-dark mb-4">5:00 PM - 10:30 PM</p>
              <p className="text-dark">The Metropolitan Club</p>
              <p className="text-dark">1 E 60th St, New York, NY 10022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 