import React, { forwardRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight, MessageSquare, Loader2 } from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export const Contact = forwardRef<HTMLElement, ContactProps>(({ initialService = '' }, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: initialService || 'Website Design & Development',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  // Sync if initialService changed from parent
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, projectType: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details about your project or enquiry.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    setSubmissionError(null);

    const recipientEmail = 'webgonex43@gmail.com';
    const endpoint = (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT as string | undefined;

    // Direct mailto fallback builder
    const mailtoSubject = encodeURIComponent(`WebGonex Enquiry: ${formData.projectType} from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Full Name: ${formData.name}\nEmail Address: ${formData.email}\nService Category: ${formData.projectType}\n\nProject Details / Message:\n${formData.message}\n`
    );
    const directMailtoUrl = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            service: formData.projectType,
            message: formData.message,
            _replyto: formData.email,
            _subject: `WebGonex Enquiry from ${formData.name}`,
          }),
        });

        if (response.ok) {
          setIsSending(false);
          setIsSubmitted(true);
          return;
        } else {
          throw new Error('Endpoint returned error status');
        }
      } catch {
        // Fallback gracefully
        setIsSending(false);
        setIsSubmitted(true);
        window.open(directMailtoUrl, '_blank');
        return;
      }
    } else {
      // If endpoint not yet configured by user in .env, dispatch directly via user email client to webgonex43@gmail.com
      setTimeout(() => {
        setIsSending(false);
        setIsSubmitted(true);
        window.open(directMailtoUrl, '_blank');
      }, 500);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Website Design & Development',
      message: '',
    });
    setIsSubmitted(false);
    setSubmissionError(null);
  };

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Red ambient background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-brand-red/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-mono uppercase tracking-widest mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Enquiry &amp; Collaboration</span>
        </div>
        <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-white tracking-tight break-words">
          Have an Idea? <span className="text-brand-red">Let&apos;s Build It.</span>
        </h2>
        <p className="mt-4 text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Looking for a responsive website, video editing, or digital experience for your business? Submit your project details below to connect directly with WebGonex.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-brand-red to-orange-500 rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Direct Contact Info & Availability */}
        <div className="lg:col-span-5 flex flex-col gap-6 min-w-0">
          <div className="glass-panel-glow rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden min-w-0">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">Direct Contact</h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
              Reach out directly for freelance consultations, website redesigns, or digital media projects.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">Email Address</div>
                  <a
                    href="mailto:webgonex43@gmail.com"
                    className="text-white hover:text-brand-red text-xs sm:text-base font-semibold transition-colors break-all"
                  >
                    webgonex43@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">Direct WhatsApp / Phone</div>
                  <a
                    href="https://wa.me/918277279985"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-red text-xs sm:text-base font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <span>+91 8277279985</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">LinkedIn Profile</div>
                  <a
                    href="https://www.linkedin.com/in/harsha-t11/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-red text-xs sm:text-base font-semibold transition-colors flex items-center gap-1"
                  >
                    <span className="truncate">linkedin.com/in/harsha-t11</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">GitHub Profile</div>
                  <a
                    href="https://github.com/Harsha4323"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-red text-xs sm:text-base font-semibold transition-colors flex items-center gap-1"
                  >
                    <span className="truncate">github.com/Harsha4323</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">Instagram Page</div>
                  <a
                    href="https://www.instagram.com/webgonex_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-red text-xs sm:text-base font-semibold transition-colors flex items-center gap-1"
                  >
                    <span className="truncate">webgonex_</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">Operating Base</div>
                  <span className="text-white text-xs sm:text-base font-semibold truncate block">Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex items-center gap-2.5 sm:gap-3">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500"></span>
              </span>
              <p className="text-[11px] sm:text-xs text-zinc-300">
                <strong className="text-white font-medium">Currently Available:</strong> Available for New Projects
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Enquiry Form */}
        <div className="lg:col-span-7 min-w-0 w-full">
          <div className="glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 relative min-w-0">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-scale-fade">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="font-display font-bold text-2xl text-white">Enquiry Prepared &amp; Dispatched!</h4>
                <p className="text-zinc-300 text-sm max-w-md">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your project details have been formatted for delivery to <strong className="text-brand-red">webgonex43@gmail.com</strong>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`mailto:webgonex43@gmail.com?subject=WebGonex%20Enquiry:%20${encodeURIComponent(formData.projectType)}%20from%20${encodeURIComponent(formData.name)}`}
                    className="px-6 py-3 rounded-full bg-brand-red hover:bg-brand-red-light text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-1.5"
                  >
                    <span>Open Email Client</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Full Name field */}
                  <div className="min-w-0">
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                      Full Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Harsha or Business Name"
                      className={`w-full min-w-0 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#09090D] border ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-brand-red'
                      } text-white text-base sm:text-sm outline-none transition-all placeholder:text-zinc-600`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address field */}
                  <div className="min-w-0">
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                      Email Address <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full min-w-0 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#09090D] border ${
                        errors.email ? 'border-red-500' : 'border-white/10 focus:border-brand-red'
                      } text-white text-base sm:text-sm outline-none transition-all placeholder:text-zinc-600`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Category */}
                <div className="min-w-0">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Service Category
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{ colorScheme: 'dark' }}
                    className="w-full min-w-0 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#09090D] border border-white/10 focus:border-brand-red text-white text-base sm:text-sm outline-none transition-all truncate"
                  >
                    <option value="Website Design & Development">Website Design &amp; Development</option>
                    <option value="Video Editing">Video Editing (Reels, Promos, Brand Content)</option>
                    <option value="Frontend Development">Frontend Development (HTML/CSS/JS/React)</option>
                    <option value="UI/UX Design">UI/UX Design &amp; Figma Wireframing</option>
                    <option value="Website Deployment">Website Deployment &amp; Hosting</option>
                    <option value="Cloud Fundamentals">AWS Cloud / Linux Administration</option>
                    <option value="Other / Custom Inquiry">Other / Custom Inquiry</option>
                  </select>
                </div>

                {/* Project Details / Message Field */}
                <div className="min-w-0">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Project Details / Message <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project requirements, goals, preferred timeline..."
                    className={`w-full min-w-0 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#09090D] border ${
                      errors.message ? 'border-red-500' : 'border-white/10 focus:border-brand-red'
                    } text-white text-base sm:text-sm outline-none transition-all placeholder:text-zinc-600 resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Transparent submission note */}
                <p className="text-[11px] text-zinc-400 font-mono">
                  * Enquiry is routed directly to <strong className="text-brand-red">webgonex43@gmail.com</strong>.
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full min-w-0 py-3.5 sm:py-4 rounded-xl bg-brand-red hover:bg-brand-red-light text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(255,38,38,0.4)] hover:shadow-[0_0_30px_rgba(255,38,38,0.65)] disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Project Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
