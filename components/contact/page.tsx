import React from 'react'

const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'sent'>('idle');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Wire this up to a real endpoint (API route, form service, etc.)
      setStatus('sent');
    };

    if (status === 'sent') {
      return (
        <div className="border border-white/15 px-6 py-8 text-center">
          <p className="text-sm text-gray-300">
            Thanks, {name || 'friend'} — your message has been noted. This is a demo form, so
            nothing was actually sent; wire it up to a real endpoint when you're ready.
          </p>
        </div>
      );
    }
  return (
    <>
      (
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-3 gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
          />
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            required
            className="bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
          />
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
          rows={7}
          className="w-full bg-transparent border border-white/20 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full text-xs uppercase tracking-wide2 border border-white/30 px-5 py-3 hover:bg-white hover:text-black transition-colors"
        >
          Send Message
        </button>
      </form>
      )
    </>
  );
}

export default ContactForm