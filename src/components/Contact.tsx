import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:betsycynthia@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        Have a project in mind? Let's discuss how we can bring your ideas to life.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-30 max-w-6xl mx-auto">
      {/* Contact Form */}
      <Card className="bg-gray-800 shadow-lg border border-gray-700">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border-gray-600 bg-gray-700 text-white placeholder:text-gray-400"
                required
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border-gray-600 bg-gray-700 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border-gray-600 bg-gray-700 text-white placeholder:text-gray-400"
              required
            />
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="border-gray-600 bg-gray-700 text-white placeholder:text-gray-400"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="border-gray-600 bg-gray-700 text-white placeholder:text-gray-400"
              rows={5}
              required
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-colors"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Info + Socials */}
      <div className="space-y-15">
        {/* Contact Info Blocks */}
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-400">betsycynthia@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Phone className="text-white" size={20} />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-400">+234 903 082 8658</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <MapPin className="text-white" size={20} />
            </div>
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-400">Abuja, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-6">
          <h4 className="font-semibold mb-4">Follow me</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/CynthiaBetsy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/CynthiaEmeka/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:betsycynthia@gmail.com"
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://wa.me/2349030828658"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-gray-300 hover:bg-green-500 hover:text-white transition-all duration-300"
              aria-label="WhatsApp"
            >
              {/* WhatsApp SVG icon */}
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                <g>
                  <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.61-1.72c1.87 1.02 3.98 1.56 6.19 1.56 7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-2.01 0-3.98-.54-5.67-1.56l-.41-.24-3.93 1.02 1.05-3.83-.27-.39c-1.09-1.6-1.67-3.47-1.67-5.4 0-5.44 4.43-9.87 9.87-9.87s9.87 4.43 9.87 9.87-4.43 9.87-9.87 9.87zm5.41-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.38.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" fill="currentColor"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;