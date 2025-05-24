import Image from 'next/image';

export default function InvitationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-exmouth text-gold text-center mb-0">
          Save the Date
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-pearl p-8 rounded-lg shadow-lg border border-gold/20 min-h-[340px] flex flex-col justify-center">
                <h3 className="text-2xl font-exmouth text-gold mb-4">Join Us in Celebration</h3>
                <p className="text-dark mb-4">
                  We are delighted to invite you to our wedding celebration in New York City.
                </p>
                <p className="text-dark mb-4">
                  The ceremony will be held at The Metropolitan Club, followed by an elegant reception.
                </p>
                <p className="text-dark">
                  We look forward to sharing this special day with you.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4]">
                <Image
                  src="/images/save-the-date.png"
                  alt="Save the Date Invitation"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 