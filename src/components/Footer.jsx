import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-light" />
            <span className="font-display text-lg font-bold">Railed</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="mailto:support@railed.com" className="hover:text-white transition-colors">
              support@railed.com
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span className="text-gray-600">•</span>
            <a href="mailto:support@railed.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
            Not a loan. No personal credit check. Funding is based on creator revenue history
            across supported platforms. Terms vary by individual. Subject to approval and state
            restrictions. Not available everywhere. Railed structures all transactions as purchases
            of future receivables (factoring). This website does not constitute an offer to lend
            or a solicitation for a loan. All funding decisions are subject to Railed's
            underwriting criteria and applicable state and federal regulations.
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-700">
            &copy; {new Date().getFullYear()} Railed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
