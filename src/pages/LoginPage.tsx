import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth, CONVEX_DATASET_USER } from '../context/AuthContext';
import { 
  Sparkles, 
  ShoppingBag, 
  ArrowRight, 
  User, 
  Mail, 
  Lock, 
  KeyRound,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  RefreshCw
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [authMethod, setAuthMethod] = useState<'otp' | 'password'>('otp');
  const [fullName, setFullName] = useState('Manisha M');
  const [email, setEmail] = useState('manisha.m2025aiml@sece.ac.in');
  const [password, setPassword] = useState('••••••••');
  const [otpCode, setOtpCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [receivedOtpPreview, setReceivedOtpPreview] = useState<string | null>(null);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);

  const { loginAsCustomer, requestEmailOtp, verifyEmailOtp, loginWithConvexDatasetUser } = useAuth();
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address');
      return;
    }
    setErrorMsg(null);
    setIsSendingOtp(true);
    const result = await requestEmailOtp(email);
    setIsSendingOtp(false);
    if (result.success) {
      setOtpSent(true);
      if (result.code) {
        setReceivedOtpPreview(result.code);
        setOtpCode(result.code); // Pre-fill for convenience
      }
    } else {
      setErrorMsg(result.message || 'Failed to send OTP code');
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode || otpCode.length !== 6) {
      setErrorMsg('Please enter the 6-digit OTP code');
      return;
    }
    setErrorMsg(null);
    setIsVerifying(true);
    const result = await verifyEmailOtp(email, otpCode);
    setIsVerifying(false);
    if (result.success) {
      navigate('/explore-india');
    } else {
      setErrorMsg(result.message || 'Invalid or expired OTP code');
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginAsCustomer(fullName || 'Manisha M', email || 'manisha.m2025aiml@sece.ac.in');
    navigate('/explore-india');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6 sm:p-12 bg-[#FAF6F0] relative overflow-hidden">
      {/* Background kolam decoration */}
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#C59B27]/10 pointer-events-none blur-3xl" />
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#6E2A38]/10 pointer-events-none blur-3xl" />

      <div className="w-full max-w-md bg-white border border-[#D9C4A5]/60 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Top Decorative Border Banner */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6E2A38] via-[#BE5A3B] to-[#AD7C2B]" />

        {/* Back Link */}
        <div className="flex justify-between items-center mb-6 mt-1">
          <Link
            to="/select-role"
            className="text-xs text-stone-500 hover:text-[#6E2A38] font-semibold transition flex items-center gap-1"
          >
            ← Switch Role
          </Link>
          <span className="text-[10px] text-[#AD7C2B] font-mono uppercase tracking-widest font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#AD7C2B]" />
            Convex Verified Auth
          </span>
        </div>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#C59B27]/30 text-[#6E2A38] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#AD7C2B]" />
            Buyer & Collector Sign In
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#1C1917]">
            Welcome to <span className="text-[#6E2A38]">VARNAM</span>
          </h1>
          <p className="text-xs text-stone-600 max-w-xs mx-auto">
            Access certified handicrafts, verified NFC tags, and living oral traditions across 28 Indian states.
          </p>
        </div>

        {/* Auth Method Selector (Email OTP vs Password) */}
        <div className="flex rounded-xl bg-[#FAF6F0] p-1 border border-[#D9C4A5]/50 mb-6">
          <button
            type="button"
            onClick={() => { setAuthMethod('otp'); setErrorMsg(null); }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 ${
              authMethod === 'otp'
                ? 'bg-white text-[#6E2A38] shadow-sm border border-[#D9C4A5]/40'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Email OTP (Passwordless)</span>
          </button>
          <button
            type="button"
            onClick={() => { setAuthMethod('password'); setErrorMsg(null); }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 ${
              authMethod === 'password'
                ? 'bg-white text-[#6E2A38] shadow-sm border border-[#D9C4A5]/40'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Lock className="w-3.5 h-3.5 text-[#8C3446]" />
            <span>Password Sign In</span>
          </button>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* METHOD 1: EMAIL OTP FLOW */}
        {authMethod === 'otp' ? (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-stone-700">Email Address</label>
                <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  Dataset Verified
                </span>
              </div>
              <div className="relative flex items-center">
                <Mail className="absolute left-3.5 w-4 h-4 text-stone-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setOtpSent(false); }}
                  required
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-24 py-2.5 bg-[#FAF6F0] border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E2A38] text-sm font-mono text-xs"
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={isSendingOtp}
                  className="absolute right-1.5 px-3 py-1.5 bg-[#6E2A38] hover:bg-[#541E2A] text-white text-[11px] font-bold rounded-lg transition disabled:opacity-50"
                >
                  {isSendingOtp ? 'Sending...' : otpSent ? 'Resend' : 'Send Code'}
                </button>
              </div>
            </div>

            {otpSent && (
              <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-amber-900 flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5 text-amber-700" />
                    One-Time Verification Code
                  </span>
                  <span className="text-[10px] font-mono text-amber-700">Expires in 10m</span>
                </div>
                {receivedOtpPreview && (
                  <p className="text-[11px] text-amber-800">
                    Live Demo Code: <strong className="font-mono text-amber-950 px-1 py-0.5 bg-amber-200/60 rounded">{receivedOtpPreview}</strong> (or use universal test code <strong>123456</strong>)
                  </p>
                )}
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Enter 6-Digit Code</label>
              <div className="relative flex items-center">
                <KeyRound className="absolute left-3.5 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  maxLength={6}
                  value={otpCode}
                  onChange={e => setOtpCode(e.target.value.replace(/\D/g, ''))}
                  required
                  placeholder="e.g. 123456"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF6F0] border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E2A38] text-base font-mono tracking-widest text-center"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isVerifying || otpCode.length !== 6}
              className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#6E2A38] via-[#8C3446] to-[#6E2A38] hover:from-[#541E2A] hover:to-[#541E2A] transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isVerifying ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying Session...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify OTP & Enter Varnam</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          /* METHOD 2: TRADITIONAL PASSWORD FLOW */
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Your Full Name</label>
              <div className="relative flex items-center">
                <User className="absolute left-3.5 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  required
                  placeholder="e.g. Manisha M"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF6F0] border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E2A38] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Email Address</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3.5 w-4 h-4 text-stone-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF6F0] border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E2A38] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Password</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3.5 w-4 h-4 text-stone-400" />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF6F0] border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E2A38] text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#6E2A38] via-[#8C3446] to-[#6E2A38] hover:from-[#541E2A] hover:to-[#541E2A] transition shadow-md flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{isSignUp ? 'Create Customer Account' : 'Sign In as Customer'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Quick Demo Logins */}
        <div className="mt-6 pt-5 border-t border-stone-200 text-center space-y-2.5">
          <button
            type="button"
            onClick={() => {
              loginWithConvexDatasetUser();
              navigate('/explore-india');
            }}
            className="text-xs w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FAF6F0] to-[#F2E8DC] hover:from-[#F2E8DC] hover:to-[#EAD8C4] border border-[#C59B27]/40 text-stone-800 font-semibold transition flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-2 text-left">
              <Sparkles className="w-4 h-4 text-[#AD7C2B] shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-[#6E2A38]">1-Click Verified Login: Manisha M</p>
                <p className="text-[10px] text-stone-500 font-mono">manisha.m2025aiml@sece.ac.in (Convex ID)</p>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#AD7C2B]" />
          </button>

          <button
            type="button"
            onClick={() => {
              loginAsCustomer('Ananya Sharma', 'ananya.heritage@gmail.com');
              navigate('/explore-india');
            }}
            className="text-xs w-full py-2 rounded-lg bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-600 font-medium transition flex items-center justify-center gap-2"
          >
            <span>Alternate Demo: Sign in as Ananya (Collector)</span>
          </button>

          <p className="text-xs text-stone-500 pt-1">
            {isSignUp ? 'Already registered? ' : 'New to Varnam? '}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#6E2A38] font-bold hover:underline"
            >
              {isSignUp ? 'Sign In' : 'Create Free Account'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

