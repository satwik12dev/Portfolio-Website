import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { PROFILE } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // ---------------- Validation ----------------

  const validate = () => {
    const e: Record<string, string> = {};

    if (!form.name.trim()) {
      e.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email.";
    }

    if (form.message.trim().length < 10) {
      e.message = "Message should be at least 10 characters.";
    }

    return e;
  };

  // ---------------- Submit ----------------

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    const e = validate();
    setErrors(e);

    if (Object.keys(e).length > 0) return;

    try {
      setLoading(true);

      const response = await fetch(
        "https://email-server-h3fp.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 4000);
    } catch (error: any) {
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- Input Fields ----------------

  const field = (
    key: keyof typeof form,
    label: string,
    type: "text" | "email" | "textarea",
    placeholder: string
  ) => (
    <div>
      <label
        htmlFor={key}
        className="mb-1.5 block text-xs font-medium text-white/60"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={key}
          rows={5}
          value={form[key]}
          placeholder={placeholder}
          onChange={(e) =>
            setForm({
              ...form,
              [key]: e.target.value,
            })
          }
          className="w-full rounded-xl glass px-4 py-3 text-sm text-white placeholder-white/30 outline-none resize-none transition-all focus:border-accent-400/60 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
        />
      ) : (
        <input
          id={key}
          type={type}
          value={form[key]}
          placeholder={placeholder}
          onChange={(e) =>
            setForm({
              ...form,
              [key]: e.target.value,
            })
          }
          className="w-full rounded-xl glass px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-accent-400/60 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
        />
      )}

      {errors[key] && (
        <p className="mt-1 text-xs text-red-400">
          {errors[key]}
        </p>
      )}
    </div>
  );
    return (
    <section id="contact" className="relative section-pad py-24 sm:py-32">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let's build something{" "}
            <span className="gradient-text">together</span>
          </>
        }
        subtitle="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-5">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 lg:col-span-2"
        >
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">
              Get in touch
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Whether it's a freelance project, internship opportunity,
              collaboration, or just a friendly hello — I'd love to hear from
              you.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href={`mailto:satwiksaxena41@gmail.com`}
                className="flex items-center gap-3 text-white/70 transition hover:text-accent-300"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent-400/20 bg-accent-500/10">
                  <Mail className="h-5 w-5 text-accent-300" />
                </span>

                satwiksaxena41@gmail.com
              </a>

              <div className="flex items-center gap-3 text-white/70">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent-400/20 bg-accent-500/10">
                  <MapPin className="h-5 w-5 text-accent-300" />
                </span>

                {PROFILE.location}
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              {[
                {
                  href: PROFILE.github,
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/satwik-12-dev/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: `mailto:satwiksaxena41@gmail.com`,
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl glass text-white/70 transition-all hover:scale-110 hover:text-accent-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass space-y-5 rounded-2xl p-6 sm:p-8 lg:col-span-3"
        >
          {field("name", "Name", "text", "Your Name")}

          {field("email", "Email", "email", "you@example.com")}

          {field(
            "message",
            "Message",
            "textarea",
            "Tell me about your project..."
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary flex w-full items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Sending...
              </>
            ) : sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Message Sent!
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>

          {sent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center text-sm text-green-300"
            >
              ✅ Thank you! Your message has been sent successfully.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}