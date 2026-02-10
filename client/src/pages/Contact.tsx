import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you for your inquiry. We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#002D62] to-[#005EB8] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Get in touch with our team to discuss your testing, inspection, and certification needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#005EB8]">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="text-[#005EB8]" size={32} />
                <h3 className="text-2xl font-bold text-[#002D62]">Johannesburg HQ</h3>
              </div>
              <p className="text-gray-700 mb-2">South Africa</p>
              <p className="text-gray-600 text-sm">
                Regional headquarters with advanced testing laboratories
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#005EB8]">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="text-[#005EB8]" size={32} />
                <h3 className="text-2xl font-bold text-[#002D62]">Phone</h3>
              </div>
              <p className="text-gray-700 mb-2">+27 (0) 11 XXX XXXX</p>
              <p className="text-gray-600 text-sm">
                Available during business hours (Mon-Fri, 8am-5pm SAST)
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#005EB8]">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="text-[#005EB8]" size={32} />
                <h3 className="text-2xl font-bold text-[#002D62]">Email</h3>
              </div>
              <p className="text-gray-700 mb-2">info@acia.africa</p>
              <p className="text-gray-600 text-sm">
                We respond to inquiries within 24 hours
              </p>
            </div>
          </div>

          {/* Regional Offices */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#F4F4F4] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002D62] mb-4">Kampala Office</h3>
              <p className="text-gray-700 mb-2">Uganda</p>
              <p className="text-gray-600 text-sm mb-4">
                East Africa Operations Center
              </p>
              <p className="text-gray-700 font-semibold">+256 (0) XXX XXXX</p>
              <p className="text-gray-700">kampala@acia.africa</p>
            </div>
            <div className="bg-[#F4F4F4] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002D62] mb-4">Lusaka Office</h3>
              <p className="text-gray-700 mb-2">Zambia</p>
              <p className="text-gray-600 text-sm mb-4">
                Southern Africa Operations Center
              </p>
              <p className="text-gray-700 font-semibold">+260 (0) XXX XXXX</p>
              <p className="text-gray-700">lusaka@acia.africa</p>
            </div>
            <div className="bg-[#F4F4F4] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002D62] mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <Clock size={16} className="text-[#005EB8]" />
                  <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={16} className="text-[#005EB8]" />
                  <span>Saturday: 9:00 AM - 1:00 PM</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={16} className="text-[#005EB8]" />
                  <span>Sunday: Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-[#002D62] mb-12 text-center">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+27 (0) XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Company</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005EB8]"
                >
                  <option value="">Select a subject...</option>
                  <option value="mineral">Mineral Testing</option>
                  <option value="oil">Oil & Gas Testing</option>
                  <option value="ev">EV/AV Testing</option>
                  <option value="certification">Certification Services</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..."
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005EB8]"
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#005EB8] hover:bg-[#002D62] text-white text-lg py-6"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#002D62] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What testing services does ACIA offer?",
                a: "ACIA provides comprehensive Testing, Inspection, and Certification services including mineral testing, oil and petrochemical analysis, EV/AV testing, and industry-specific certifications."
              },
              {
                q: "How long does the testing process take?",
                a: "Testing timelines vary depending on the type of analysis and complexity. Most standard tests are completed within 5-10 business days. Contact us for specific turnaround times."
              },
              {
                q: "Are ACIA certifications internationally recognized?",
                a: "Yes, ACIA is accredited by SANAS (South African National Accreditation System) and maintains partnerships with international standards bodies, ensuring global recognition of our certifications."
              },
              {
                q: "Can ACIA provide customized testing solutions?",
                a: "Absolutely. Our team of experts can develop tailored testing and certification programs to meet your specific industry and regulatory requirements."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#005EB8]">
                <h3 className="text-lg font-bold text-[#002D62] mb-3">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
