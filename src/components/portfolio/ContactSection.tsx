import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const inputs = formContainerRef.current?.querySelectorAll('.form-field');
      if (inputs) {
        gsap.fromTo(
          inputs,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: formContainerRef.current,
              start: 'top 80%'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-4 xl:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl xl:text-5xl font-light mb-4 text-center">
          Get In <span className="gradient-text font-normal">Touch</span>
        </h2>
        <p className="text-base xl:text-lg text-muted-foreground text-center mb-12">
          Have a project in mind? Let's work together to create something amazing.
        </p>

        <div className="glass-card rounded-2xl p-6 xl:p-10">
          <div ref={formContainerRef}>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-field">
              <label htmlFor="name" className="block text-sm xl:text-base mb-2 text-foreground">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="glass bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="block text-sm xl:text-base mb-2 text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="glass bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message" className="block text-sm xl:text-base mb-2 text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="glass bg-background/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full neon-glow hover:neon-glow-violet transition-all duration-300 group"
            >
              Send Message
              <PaperPlaneTilt
                size={20}
                weight="bold"
                className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Button>
            </form>
          </div>

          <div className="mt-10 pt-8 border-t border-border/50">
            <p className="text-center text-sm xl:text-base text-muted-foreground mb-6">
              Connect with me on social media
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-lg hover:neon-glow transition-all duration-300 group"
              >
                <GithubLogo
                  size={28}
                  weight="fill"
                  className="text-foreground group-hover:text-primary transition-colors duration-300"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-lg hover:neon-glow transition-all duration-300 group"
              >
                <LinkedinLogo
                  size={28}
                  weight="fill"
                  className="text-foreground group-hover:text-primary transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
