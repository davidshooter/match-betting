import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const matchData = [
  {
    rank: 1,
    match: "Wolverhampton Wanderers vs Manchester City",
    team1: "Wolverhampton Wanderers",
    team2: "Manchester City",
    bestOddsTeam1: 10.00,
    bestOddsTeam2: 1.34,
    bestOddsTeam1Bookmaker: "Betfair",
    bestOddsTeam2Bookmaker: "Betfair",
    expectedReturnTeam1: 100.00,
    expectedReturnTeam2: 13.40,
    logoTeam1: "/wolves-logo.png",
    logoTeam2: "/mancity-logo.png",
    linkTeam1: "https://www.betfair.com/wolves",
    linkTeam2: "https://www.betfair.com/mancity"
  },
  {
    rank: 2,
    match: "Liverpool vs Chelsea",
    team1: "Liverpool",
    team2: "Chelsea",
    bestOddsTeam1: 1.74,
    bestOddsTeam2: 5.00,
    bestOddsTeam1Bookmaker: "Matchbook",
    bestOddsTeam2Bookmaker: "Betfair",
    expectedReturnTeam1: 17.40,
    expectedReturnTeam2: 50.00,
    logoTeam1: "/liverpool-logo.png",
    logoTeam2: "/chelsea-logo.png",
    linkTeam1: "https://www.matchbook.com/liverpool",
    linkTeam2: "https://www.betfair.com/chelsea"
  },
  {
    rank: 3,
    match: "Tottenham Hotspur vs West Ham United",
    team1: "Tottenham Hotspur",
    team2: "West Ham United",
    bestOddsTeam1: 1.53,
    bestOddsTeam2: 6.25,
    bestOddsTeam1Bookmaker: "Betfair",
    bestOddsTeam2Bookmaker: "Mr Green",
    expectedReturnTeam1: 15.30,
    expectedReturnTeam2: 62.50,
    logoTeam1: "/tottenham-logo.png",
    logoTeam2: "/westham-logo.png",
    linkTeam1: "https://www.betfair.com/tottenham",
    linkTeam2: "https://www.mrgreen.com/westham"
  }
];

const testimonials = [
  {
    name: "John Doe",
    role: "Sports Enthusiast",
    content: "This platform has revolutionized how I approach sports betting. The odds comparison is invaluable!",
    avatar: "/avatar1.png"
  },
  {
    name: "Jane Smith",
    role: "Professional Gambler",
    content: "I've been using this service for months now, and it's consistently helped me make informed decisions.",
    avatar: "/avatar2.png"
  },
  {
    name: "Mike Johnson",
    role: "Casual Bettor",
    content: "Even as a casual bettor, I find the insights here incredibly useful. It's user-friendly and informative.",
    avatar: "/avatar3.png"
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-bold text-xl">Match Betting</div>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-blue-50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <p className="text-blue-600">
                <span className="font-semibold">Reminder:</span> New betting opportunities are posted each week at the beginning of the week.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                Get Notified
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">Premier League Match Rankings</h1>
          <div className="max-w-xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 mb-8">Get the best odds for Premier League matches and maximize your returns.</p>
            <div className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12">Top Ranked Matches</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {matchData.map((match) => (
              <div key={match.rank} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl font-semibold mb-4 text-gray-700">
                  Rank {match.rank}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{match.match}</h3>
                <div className="space-y-4">
                  <TeamOdds
                    team={match.team1}
                    odds={match.bestOddsTeam1}
                    bookmaker={match.bestOddsTeam1Bookmaker}
                    expectedReturn={match.expectedReturnTeam1}
                    logo={match.logoTeam1}
                    link={match.linkTeam1}
                  />
                  <TeamOdds
                    team={match.team2}
                    odds={match.bestOddsTeam2}
                    bookmaker={match.bestOddsTeam2Bookmaker}
                    expectedReturn={match.expectedReturnTeam2}
                    logo={match.logoTeam2}
                    link={match.linkTeam2}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Match Betting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

interface TeamOddsProps {
  team: string;
  odds: number;
  bookmaker: string;
  expectedReturn: number;
  logo: string;
  link: string;
}

function TeamOdds({ team, odds, bookmaker, expectedReturn, logo, link }: TeamOddsProps) {
  const [betAmount, setBetAmount] = useState<number>(10);
  const ev = betAmount * (odds - 1);

  return (
    <Link href={link} className="block">
      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center mb-2">
          <Image src={logo} alt={`${team} logo`} width={24} height={24} className="mr-2" />
          <h4 className="font-semibold text-gray-800">{team}</h4>
        </div>
        <p className="text-sm text-gray-600">
          Best odds: <span className="font-bold text-gray-800">{odds.toFixed(2)}</span> from {bookmaker}
        </p>
        <p className="text-sm text-gray-600">
          Expected return on $10 bet: <span className="font-bold text-gray-800">${expectedReturn.toFixed(2)}</span>
        </p>
        <div className="mt-2">
          <label htmlFor={`bet-amount-${team}`} className="block text-sm font-medium text-gray-700">
            Calculate EV:
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
              $
            </span>
            <input
              type="number"
              name={`bet-amount-${team}`}
              id={`bet-amount-${team}`}
              className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
              value={betAmount}
              onChange={(e) => setBetAmount(Number(e.target.value))}
            />
          </div>
          <p className="mt-1 text-sm text-gray-600">
            EV: <span className="font-bold text-gray-800">${ev.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
