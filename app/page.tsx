import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header/Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-amber-800">
              ☕ Brew & Bean
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-amber-600 transition-colors">Menu</a>
              <a href="#location" className="text-gray-700 hover:text-amber-600 transition-colors">Location</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
            Welcome to Brew & Bean
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of premium coffee, cozy atmosphere, and exceptional service 
            in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors">
              View Menu
            </a>
            <a href="#location" className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-colors">
              Find Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            Why Choose Brew & Bean?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                We source only the finest beans from sustainable farms around the world.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Cozy Atmosphere</h3>
              <p className="text-gray-600">
                A warm, inviting space perfect for work, study, or catching up with friends.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Expert Baristas</h3>
              <p className="text-gray-600">
                Our skilled team crafts each cup with precision and passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            Our Menu
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coffee Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">☕ Coffee</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Espresso</span>
                  <span className="font-semibold">$3.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Americano</span>
                  <span className="font-semibold">$4.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cappuccino</span>
                  <span className="font-semibold">$4.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Latte</span>
                  <span className="font-semibold">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Mocha</span>
                  <span className="font-semibold">$5.50</span>
                </div>
              </div>
            </div>

            {/* Specialty Drinks */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">🌟 Specialty</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Caramel Macchiato</span>
                  <span className="font-semibold">$6.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Vanilla Latte</span>
                  <span className="font-semibold">$5.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Iced Coffee</span>
                  <span className="font-semibold">$4.25</span>
                </div>
                <div className="flex justify-between">
                  <span>Cold Brew</span>
                  <span className="font-semibold">$4.75</span>
                </div>
                <div className="flex justify-between">
                  <span>Frappuccino</span>
                  <span className="font-semibold">$6.50</span>
                </div>
              </div>
            </div>

            {/* Pastries & Snacks */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">🥐 Pastries</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Croissant</span>
                  <span className="font-semibold">$3.25</span>
                </div>
                <div className="flex justify-between">
                  <span>Blueberry Muffin</span>
                  <span className="font-semibold">$3.75</span>
                </div>
                <div className="flex justify-between">
                  <span>Chocolate Chip Cookie</span>
                  <span className="font-semibold">$2.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Bagel with Cream Cheese</span>
                  <span className="font-semibold">$4.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Danish</span>
                  <span className="font-semibold">$3.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            Visit Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-amber-800 mb-6">Location & Hours</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3">📍</span>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">123 Coffee Street<br />Downtown District<br />City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3">🕐</span>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-600">
                      Monday - Friday: 6:00 AM - 8:00 PM<br />
                      Saturday: 7:00 AM - 9:00 PM<br />
                      Sunday: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">(555) 123-BREW</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-600 text-center">
                🗺️<br />
                Interactive Map<br />
                (Google Maps integration would go here)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="bg-white rounded-lg shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-amber-800 font-semibold mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">☕ Brew & Bean</h3>
              <p className="text-amber-200">
                Premium coffee and exceptional service in a cozy atmosphere.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-2 text-amber-200">
                <p>📧 info@brewandbean.com</p>
                <p>📞 (555) 123-BREW</p>
                <p>📍 123 Coffee Street, Downtown</p>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 Brew & Bean Coffee Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}