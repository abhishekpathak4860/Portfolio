import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  CircleNotch, // Added for loading spinner
} from "@phosphor-icons/react";
import { useToast } from "@/hooks/use-toast";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const formContentRef = useRef<HTMLDivElement>(null);

  // Added isSubmitting state
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animation for the Whole Container
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // 2. Animation for Left Image
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // 3. Animation for Right Form Inputs
      const inputs = formContentRef.current?.querySelectorAll(".form-element");
      if (inputs) {
        gsap.fromTo(
          inputs,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleImageHover = () => {
    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleImageLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading

    const formDataToSend = new FormData(e.target as HTMLFormElement);
    formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        // Updated Success Message
        toast({
          title: "Form Submitted Successfully!",
          description: "Abhishek Pathak will reach out to you soon.",
          duration: 5000,
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false); // Stop loading regardless of success or failure
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 xl:px-8"
    >
      <div
        ref={containerRef}
        className="glass-card w-full max-w-6xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl border border-white/10"
      >
        {/* LEFT SIDE: Image */}
        <div
          className="relative w-full h-64 lg:h-auto overflow-hidden cursor-pointer"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        >
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
          <img
            ref={imageRef}
            src="/images/exitDoor.jpg"
            alt="Contact Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="p-8 lg:p-12 xl:p-16 bg-background/30 backdrop-blur-md flex flex-col justify-center">
          <div ref={formContentRef} className="space-y-8">
            <div className="form-element text-center lg:text-left">
              <h2 className="text-3xl xl:text-5xl font-light mb-2">
                Get In <span className="gradient-text font-normal">Touch</span>
              </h2>
              <p className="text-muted-foreground text-sm xl:text-base">
                Have a project in mind? Let's work together to create something
                amazing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="hidden"
                name="from_name"
                value="Portfolio Contact Form"
              />
              <input
                type="hidden"
                name="subject"
                value="New Contact Form Submission"
              />
              <div className="form-element">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="glass bg-background/50 border-primary/20 focus:border-primary h-12"
                  placeholder="Your name"
                />
              </div>

              <div className="form-element">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="glass bg-background/50 border-primary/20 focus:border-primary h-12"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-element">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="glass bg-background/50 border-primary/20 focus:border-primary resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Updated Button with Loading State */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="form-element w-full neon-glow hover:neon-glow-violet transition-all duration-300 group h-12 text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <CircleNotch
                      size={20}
                      weight="bold"
                      className="ml-2 animate-spin"
                    />
                  </>
                ) : (
                  <>
                    Send Message
                    <PaperPlaneTilt
                      size={20}
                      weight="bold"
                      className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </>
                )}
              </Button>
            </form>

            <div className="form-element pt-6 border-t border-white/10">
              <p className="text-center lg:text-left text-sm text-muted-foreground mb-4">
                Connect with me on social media
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <a
                  href="https://github.com/abhishekpathak4860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-lg hover:neon-glow transition-all duration-300 group"
                >
                  <GithubLogo
                    size={24}
                    weight="fill"
                    className="text-foreground group-hover:text-primary transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-pathak-2118a025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-lg hover:neon-glow transition-all duration-300 group"
                >
                  <LinkedinLogo
                    size={24}
                    weight="fill"
                    className="text-foreground group-hover:text-primary transition-colors duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
