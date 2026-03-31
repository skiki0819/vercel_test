"use client";

import { useState, type FormEvent } from "react";
import SectionWrapper from "./SectionWrapper";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 300);
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-glow">
        <span className="text-matrix-green/40">//</span> CONTACT
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="terminal-card">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-matrix-green/10 bg-matrix-card">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs text-matrix-green/40">
              ~/send_message.sh
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {sent ? (
              <div className="space-y-4 py-8">
                <p className="text-matrix-green font-bold text-glow">
                  {">"} transmission_status: SUCCESS
                </p>
                <p className="text-matrix-green/60 text-sm">
                  {">"} Message received. Will respond within 24h.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-matrix-green/40 text-sm hover:text-matrix-green transition-all"
                >
                  [send_another]
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-matrix-green/50 text-sm block mb-2">
                    {">"} name:
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-matrix-green/20 text-matrix-green py-2 text-sm focus:outline-none focus:border-matrix-green/60 transition-colors placeholder:text-matrix-green/20"
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label className="text-matrix-green/50 text-sm block mb-2">
                    {">"} email:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-matrix-green/20 text-matrix-green py-2 text-sm focus:outline-none focus:border-matrix-green/60 transition-colors placeholder:text-matrix-green/20"
                    placeholder="Enter your email..."
                  />
                </div>

                <div>
                  <label className="text-matrix-green/50 text-sm block mb-2">
                    {">"} message:
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full bg-transparent border border-matrix-green/20 rounded text-matrix-green p-3 text-sm focus:outline-none focus:border-matrix-green/60 transition-colors resize-none placeholder:text-matrix-green/20"
                    placeholder="Type your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="border border-matrix-green/40 px-8 py-3 text-matrix-green text-sm uppercase tracking-widest hover:bg-matrix-green hover:text-black transition-all duration-300 border-glow w-full sm:w-auto"
                >
                  [ SEND_MESSAGE ]
                </button>
              </>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <p className="text-matrix-green/40 text-xs uppercase tracking-widest mb-6">
              {">"} find_me_on:
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-matrix-green/60 hover:text-matrix-green hover:text-glow transition-all group"
              >
                <span className="text-matrix-green/30 group-hover:text-matrix-green transition-all">
                  $
                </span>
                <span>github.com/neo_dev</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-matrix-green/60 hover:text-matrix-green hover:text-glow transition-all group"
              >
                <span className="text-matrix-green/30 group-hover:text-matrix-green transition-all">
                  $
                </span>
                <span>linkedin.com/in/neo_dev</span>
              </a>

              <a
                href="mailto:dev@matrix.io"
                className="flex items-center gap-3 text-matrix-green/60 hover:text-matrix-green hover:text-glow transition-all group"
              >
                <span className="text-matrix-green/30 group-hover:text-matrix-green transition-all">
                  $
                </span>
                <span>dev@matrix.io</span>
              </a>
            </div>
          </div>

          <div className="terminal-card p-5">
            <p className="text-matrix-green/40 text-xs mb-2">
              {"// availability"}
            </p>
            <p className="text-matrix-green text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-matrix-green mr-2 animate-[glow-pulse_2s_ease-in-out_infinite]" />
              Open for freelance & collaboration
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
