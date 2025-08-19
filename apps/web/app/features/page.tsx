import React from "react";
import Link from "next/link";

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
              RN + Next.js Monorepo
            </Link>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-green-600 dark:text-green-400 font-medium">
                Features
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Features
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to build and scale cross-platform applications
            </p>
          </div>
        </div>
      </div>

      {/* Features Sections */}
      <div className="pb-24">
        <div className="container mx-auto px-6">
          {/* Architecture */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Architecture
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Monorepo Structure
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Organized codebase with clear separation of concerns. Apps and packages
                  are structured for maximum code reuse and maintainability.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                    </div>
                    Shared business logic across platforms
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                    </div>
                    Consistent UI components and design system
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                    </div>
                    Centralized configuration and tooling
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                    </div>
                    Type-safe development with TypeScript
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 font-mono text-sm text-green-400 shadow-lg border border-gray-700">
                <div className="text-gray-400 mb-4 text-center">{/* Project Structure */}</div>
                <div className="space-y-1">
                  <div className="text-green-300">apps/</div>
                  <div className="ml-4 text-blue-300">├── web/          <span className="text-gray-400"># Next.js app</span></div>
                  <div className="ml-4 text-blue-300">└── mobile/       <span className="text-gray-400"># React Native app</span></div>
                  <div className="mt-3 text-green-300">packages/</div>
                  <div className="ml-4 text-yellow-300">├── ui/           <span className="text-gray-400"># Shared components</span></div>
                  <div className="ml-4 text-yellow-300">├── api/          <span className="text-gray-400"># API layer</span></div>
                  <div className="ml-4 text-yellow-300">├── forms/        <span className="text-gray-400"># Form utilities</span></div>
                  <div className="ml-4 text-yellow-300">├── stores/       <span className="text-gray-400"># State management</span></div>
                  <div className="ml-4 text-yellow-300">└── design-system/<span className="text-gray-400"># Storybook docs</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Development Experience */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Developer Experience
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Lightning Fast Builds
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Turborepo provides intelligent build optimization with caching and parallelization for blazing fast development cycles
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Zero Configuration
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  ESLint, Prettier, TypeScript, testing tools, and CI/CD pipelines are pre-configured and ready to use
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Interactive Documentation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Storybook provides interactive component documentation with live examples and automated testing
                </p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {[
                { name: "React 19", description: "Latest React with concurrent features", category: "Frontend", featured: true },
                { name: "Next.js", description: "Full-stack React framework", category: "Web", featured: true },
                { name: "React Native", description: "Cross-platform mobile development", category: "Mobile", featured: true },
                { name: "Expo Router", description: "File-based routing for React Native", category: "Mobile" },
                { name: "TypeScript", description: "Type-safe JavaScript development", category: "Language", featured: true },
                { name: "Tailwind CSS", description: "Utility-first CSS framework", category: "Styling", featured: true },
                { name: "Radix UI", description: "Accessible UI primitives", category: "Components" },
                { name: "React Hook Form", description: "Performant form library", category: "Forms" },
                { name: "Zod", description: "TypeScript schema validation", category: "Validation" },
                { name: "Zustand", description: "Lightweight state management", category: "State" },
                { name: "TanStack Query", description: "Server state management", category: "Data", featured: true },
                { name: "Supabase", description: "Backend-as-a-Service", category: "Backend", featured: true }
              ].map((tech, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {tech.name}
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full font-medium bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
              Clone the template and have a full-stack application running in minutes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/guts-env/rn-next-monorepo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-green-600 transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}