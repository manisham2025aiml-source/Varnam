import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[Varnam ErrorBoundary Caught Error]:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  private handleClearAndReset = () => {
    try {
      localStorage.removeItem('varnam_custom_products');
      localStorage.removeItem('varnam_seller_auth');
    } catch (e) {
      // ignore
    }
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#131E35] text-[#FAF6F0] flex items-center justify-center p-6 relative">
          <div className="max-w-lg w-full bg-[#1B2A4A] border-2 border-[#C59B27]/40 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-[#F5D77F]">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-bold text-white">
                Display Restored
              </h2>
              <p className="text-xs text-stone-300">
                A component refreshed unexpectedly while loading artisan or product data.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/30 text-left font-mono text-[11px] text-amber-300/80 overflow-x-auto max-h-28">
              {this.state.error?.message || 'Unexpected application render pause'}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#C59B27] text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-[#D4AF37] transition flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>

              <button
                onClick={this.handleClearAndReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition flex items-center justify-center gap-2 border border-white/20"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
