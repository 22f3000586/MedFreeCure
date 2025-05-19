import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-light-beige">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-soft-green">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#222]">Transform Your Health Naturally</h1>
        <p className="text-lg md:text-xl mb-8 text-[#333]">Join our 30-day wellness program for diabetes and hypertension</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <button className="bg-soft-blue text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-400 transition">Join the Program</button>
          <button className="bg-white text-soft-blue font-semibold px-6 py-3 rounded-full border border-soft-blue shadow hover:bg-blue-50 transition">Watch a Free Demo</button>
        </div>
        <div className="w-full flex justify-center">
          <Image src="/images/hero-calm.jpg" alt="Calming header" width={600} height={300} className="rounded-xl object-cover max-h-64 w-auto" />
        </div>
      </section>

      {/* About the Program */}
      <section className="py-16 px-4 bg-light-beige flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4 text-[#222]">🌿 About the Program</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg text-[#333]">
            <li>Personalized routines for every participant</li>
            <li>Holistic approach: diet, yoga, and mindfulness</li>
            <li>Supportive community and expert guidance</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/images/yoga-nature.jpg" alt="Yoga in nature" width={350} height={250} className="rounded-lg object-cover" />
        </div>
      </section>

      {/* Meet the Coach */}
      <section className="py-16 px-4 bg-soft-green flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center">
          <Image src="/images/dr-gupta.jpg" alt="Dr. Gupta" width={200} height={200} className="rounded-full object-cover border-4 border-soft-blue" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4 text-[#222]">👨‍⚕️ Meet the Coach</h2>
          <p className="text-lg font-bold mb-2 text-[#333]">Dr. Gupta, MD (Ayurveda), Wellness Expert</p>
          <ul className="list-disc pl-5 space-y-1 text-[#333]">
            <li>20+ years of experience in holistic health</li>
            <li>Specialist in diabetes & hypertension reversal</li>
            <li>Renowned speaker & author</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-light-beige">
        <h2 className="text-3xl font-semibold mb-8 text-center text-[#222]">📋 How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🧘‍♂️</span>
            <p className="font-semibold text-[#333]">Attend Live Sessions</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">📅</span>
            <p className="font-semibold text-[#333]">Follow Weekly Routines</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">📈</span>
            <p className="font-semibold text-[#333]">Track Progress</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🎯</span>
            <p className="font-semibold text-[#333]">Achieve Medication-Free Control</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-soft-blue">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">💬 Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <Image src={`/images/testimonial${i}.jpg`} alt={`Testimonial ${i}`} width={80} height={80} className="rounded-full mb-4 object-cover" />
              <p className="italic mb-2 text-[#333]">“This program changed my life! My sugar levels are under control.”</p>
              <span className="font-semibold text-[#222]">Participant {i}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-light-beige max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center text-[#222]">❓ FAQs</h2>
        <details className="mb-4 bg-white rounded shadow p-4">
          <summary className="font-semibold cursor-pointer text-[#222]">Who can join this program?</summary>
          <p className="mt-2 text-[#333]">Anyone with diabetes or hypertension looking for a natural, holistic approach.</p>
        </details>
        <details className="mb-4 bg-white rounded shadow p-4">
          <summary className="font-semibold cursor-pointer text-[#222]">Are the sessions live or recorded?</summary>
          <p className="mt-2 text-[#333]">All sessions are live, but recordings are available for later viewing.</p>
        </details>
        <details className="mb-4 bg-white rounded shadow p-4">
          <summary className="font-semibold cursor-pointer text-[#222]">Is this program safe with my current medication?</summary>
          <p className="mt-2 text-[#333]">Yes, but always consult your doctor before making changes to your medication.</p>
        </details>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 px-4 bg-soft-green text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#222]">Ready to take control of your health?</h2>
        <p className="mb-6 text-lg text-[#333]">Start your journey to a medication-free life today!</p>
        <button className="bg-soft-blue text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-blue-400 transition text-lg">Start the 30-Day Challenge</button>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] text-white py-8 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <a href="#about" className="hover:underline text-white">About</a>
          <a href="#contact" className="hover:underline text-white">Contact</a>
          <a href="https://wa.me/7077073465" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">WhatsApp</a>
        </div>
        <div className="text-sm text-white">&copy; {new Date().getFullYear()} Wellness Program. All rights reserved.</div>
        <a href="https://wa.me/7077073465" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50">
          <span className="sr-only">Chat on WhatsApp</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12c0-4.556-3.694-8.25-8.25-8.25S3.75 7.444 3.75 12c0 1.334.324 2.59.895 3.688L3 21l5.437-1.645A8.212 8.212 0 0012 20.25c4.556 0 8.25-3.694 8.25-8.25z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 10.125c.621 1.242 1.983 2.625 3.375 3.375" />
          </svg>
        </a>
      </footer>
    </div>
  );
}
