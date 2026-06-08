import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, MessageSquare, Mail, Phone, MapPin, Trash2, ShieldAlert } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { ContactMessage } from "../types";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [messagesList, setMessagesList] = useState<ContactMessage[]>([]);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Load any previously saved messages from localStorage for simulation
  useEffect(() => {
    try {
      const stored = localStorage.getItem("munna_portfolio_messages");
      if (stored) {
        setMessagesList(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Local storage access failed: ", e);
    }
  }, []);

  const handleValidation = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = "Full Name is required";
    if (!email.trim()) {
      tempErrors.email = "Email representation is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please input a valid email address";
    }
    if (!subject.trim()) tempErrors.subject = "Subject is required";
    if (!message.trim()) {
      tempErrors.message = "Message content is required";
    } else if (message.length < 10) {
      tempErrors.message = "Please write a substantive message (at least 10 characters)";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitted(false);

    try {
      const response = await fetch("https://formspree.io/f/mqeoqpne", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim()
        })
      });

      if (response.ok) {
        // Build the message object for local history cache as well
        const newMsg: ContactMessage = {
          id: "msg-" + Date.now(),
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          timestamp: new Date().toLocaleString()
        };

        const updated = [newMsg, ...messagesList];
        setMessagesList(updated);
        try {
          localStorage.setItem("munna_portfolio_messages", JSON.stringify(updated));
        } catch (err) {
          console.error(err);
        }

        setSubmitted(true);
        // Reset form inputs
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        // Automatically hide success notification after 7 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 7000);
      } else {
        const data = await response.json().catch(() => ({}));
        if (data && data.errors && Array.isArray(data.errors)) {
          setSubmitError(data.errors.map((error: any) => error.message).join(", "));
        } else if (data && data.error) {
          setSubmitError(data.error);
        } else {
          setSubmitError("Failed to submit message to Formspree. Contact endpoint returned an invalid status.");
        }
      }
    } catch (err) {
      console.error(err);
      setSubmitError("Network connectivity issue. Please check your internet link and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearMessage = (id: string) => {
    const filtered = messagesList.filter(m => m.id !== id);
    setMessagesList(filtered);
    try {
      localStorage.setItem("munna_portfolio_messages", JSON.stringify(filtered));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-5">
          <div>
            <span className="text-brand-500 font-mono text-xs font-semibold uppercase tracking-[0.2em] block mb-1">
              Collaborations Welcome
            </span>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-brand-500" />
              <span>Get In touch easily</span>
            </h2>
          </div>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact coordinates and direct methods */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#111111] border border-white/10 rounded-sm space-y-6">
              <h3 className="font-display font-bold text-white text-base leading-snug">
                Direct Contact Details
              </h3>
              <p className="text-sm font-sans text-white/60 leading-normal">
                If you are a prospective academic research partner, development agency, or digital client, please feel free to drop a line directly.
              </p>

              <div className="space-y-4 font-sans text-sm">
                <a href={`mailto:${personalInfo.email}`} className="flex items-start gap-3 hover:text-brand-500 transition-colors">
                  <Mail className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                  <div>
                    <strong className="block text-white/40 text-[10px] font-mono tracking-widest">EMAIL ADDRESS:</strong>
                    <span className="text-white/85 font-mono text-xs break-all">{personalInfo.email}</span>
                  </div>
                </a>

                <a href={`tel:${personalInfo.phone}`} className="flex items-start gap-3 hover:text-brand-500 transition-colors">
                  <Phone className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                  <div>
                    <strong className="block text-white/40 text-[10px] font-mono tracking-widest">PHONE NUMBER:</strong>
                    <span className="text-white/85 font-mono text-xs">{personalInfo.phone}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                  <div>
                    <strong className="block text-white/40 text-[10px] font-mono tracking-widest">LOCATION:</strong>
                    <span className="text-white/85 text-xs">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick warning details about local simulation messages */}
            <div className="p-5 border border-brand-500/20 bg-brand-500/5 rounded-sm">
              <h4 className="flex items-center gap-1.5 font-display font-semibold text-brand-500 text-xs font-mono uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-brand-500" />
                <span>Simulation Demonstration</span>
              </h4>
              <p className="text-[11px] font-sans text-white/50 leading-relaxed mt-1.5">
                Because this portfolio operates statically inside your browser sandbox, messages are saved securely to your browser's persistent key-value <strong>localStorage</strong>.
              </p>
              <button
                onClick={() => setShowAdminPanel(!showAdminPanel)}
                className="mt-3 inline-flex items-center gap-1 text-[11px] font-mono text-brand-500 hover:underline cursor-pointer"
              >
                <span>{showAdminPanel ? "Hide" : "Toggle"} Client message Inbox ({messagesList.length})</span>
              </button>
            </div>
          </div>

          {/* Form container */}
          <div className="lg:col-span-8">
            <div className="border border-white/10 rounded-sm p-6 sm:p-8 bg-white/5 shadow-xs">
              
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-sm p-4 mb-6 flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#00ff88] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#00ff88] text-sm font-sans">Message Transmitted Successfully!</h4>
                      <p className="text-white/80 text-xs font-sans mt-0.5">Thank you, G.H. Ahmad Munna has received your message via Formspree integration.</p>
                    </div>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-rose-500/10 border border-rose-500/25 rounded-sm p-4 mb-6 flex items-start gap-3"
                  >
                    <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-rose-400 text-sm font-sans">Submission Error</h4>
                      <p className="text-rose-300 text-xs font-sans mt-0.5">{submitError}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest font-mono mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                      placeholder="e.g. John Doe"
                      className={`w-full px-3.5 py-2.5 bg-[#121212] text-white border rounded-sm text-sm transition-all focus:outline-none focus:bg-[#151515] focus:ring-2 disabled:opacity-50 ${
                        errors.name ? "border-rose-500 focus:ring-rose-500/20" : "border-white/10 focus:border-brand-500 focus:ring-brand-500/20"
                      }`}
                    />
                    {errors.name && <p className="text-rose-500 text-xs mt-1 font-mono">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest font-mono mb-1.5">Email address</label>
                    <input 
                      type="text" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      placeholder="e.g. jdoe@gmail.com"
                      className={`w-full px-3.5 py-2.5 bg-[#121212] text-white border rounded-sm text-sm transition-all focus:outline-none focus:bg-[#151515] focus:ring-2 disabled:opacity-50 ${
                        errors.email ? "border-rose-500 focus:ring-rose-500/20" : "border-white/10 focus:border-brand-500 focus:ring-brand-500/20"
                      }`}
                    />
                    {errors.email && <p className="text-rose-500 text-xs mt-1 font-mono">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest font-mono mb-1.5">Subject</label>
                  <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="e.g. Research Collaboration Proposal"
                    className={`w-full px-3.5 py-2.5 bg-[#121212] text-white border rounded-sm text-sm transition-all focus:outline-none focus:bg-[#151515] focus:ring-2 disabled:opacity-50 ${
                      errors.subject ? "border-rose-500 focus:ring-rose-500/20" : "border-white/10 focus:border-brand-500 focus:ring-brand-500/20"
                    }`}
                  />
                  {errors.subject && <p className="text-rose-500 text-xs mt-1 font-mono">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest font-mono mb-1.5">Your Message</label>
                  <textarea 
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="Please write your detailed academic or client inquiry here..."
                    className={`w-full px-3.5 py-2.5 bg-[#121212] text-white border rounded-sm text-sm transition-all focus:outline-none focus:bg-[#151515] focus:ring-2 disabled:opacity-50 ${
                      errors.message ? "border-rose-500 focus:ring-rose-500/20" : "border-white/10 focus:border-brand-500 focus:ring-brand-500/20"
                    }`}
                  />
                  {errors.message && <p className="text-rose-500 text-xs mt-1 font-mono">{errors.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-500/45 disabled:cursor-not-allowed text-[#0a0a0a] font-mono font-bold uppercase tracking-wider px-4 py-3 rounded-sm transition-all active:scale-98 text-xs cursor-pointer"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? "animate-pulse" : ""}`} />
                  <span>{isSubmitting ? "Transmitting Message..." : "Send Live Message via Formspree"}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

        {/* Administration Inbox Demonstration Pane */}
        <AnimatePresence>
          {showAdminPanel && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-16 border border-white/10 bg-[#121212] rounded-sm p-6"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-6">
                <div>
                  <h3 className="font-display font-bold text-white text-sm tracking-wide">
                    Administrative Inbox Demo Pane
                  </h3>
                  <p className="text-xs text-white/45 font-sans mt-0.5">
                    View list of client submissions logged in browser state
                  </p>
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem("munna_portfolio_messages");
                    setMessagesList([]);
                  }}
                  className="px-3 py-1 text-[11px] font-mono hover:bg-white/10 border border-white/10 rounded-sm text-white/80 flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Local Inbox</span>
                </button>
              </div>

              {messagesList.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-xs font-mono text-white/40">INBOX EMPTY. Drop a message above to see it populate here instantly.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messagesList.map((msg) => (
                    <div key={msg.id} className="bg-[#151515] border border-white/10 rounded-sm p-4 relative">
                      <button 
                        onClick={() => clearMessage(msg.id)}
                        className="absolute right-3 top-3 p-1 text-white/40 hover:text-white rounded cursor-pointer"
                        title="Delete message from browser"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      
                      <div className="flex flex-wrap gap-2 items-center text-[10px] font-mono text-white/40 mb-1">
                        <span className="bg-white/5 text-brand-500 px-2 py-0.5 rounded-sm font-bold">
                          {msg.timestamp}
                        </span>
                        <span>FROM: {msg.email}</span>
                      </div>

                      <h4 className="font-sans font-bold text-white text-sm">
                        {msg.subject}
                      </h4>
                      <p className="text-xs text-white/50 font-mono mt-0.5">
                        Inquirer: {msg.name}
                      </p>
                      
                      <p className="text-xs text-white/80 font-sans bg-white/5 border border-white/5 rounded-sm p-3 mt-3 leading-relaxed">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
