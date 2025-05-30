import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Code, User, Briefcase, FileText, ArrowDown, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Django', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Angular', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'SQL', level: 80 },
    { name: 'Power BI', level: 70 },
    { name: 'Java', level: 75 },
    { name: 'C', level: 70 }
  ];

  const services = [
    {
      title: "Full Stack Python Development",
      description: "End-to-end web application development using Python, Django, and modern frontend technologies.",
      icon: <Code className="h-8 w-8" />
    },
    {
      title: "Web Application Design",
      description: "Creating responsive and user-friendly web interfaces with modern design principles.",
      icon: <User className="h-8 w-8" />
    },
    {
      title: "Database Solutions",
      description: "Designing and implementing efficient database structures using SQL and SQLite.",
      icon: <FileText className="h-8 w-8" />
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init('oHTC0QR5Ij1Ev83zG');

      // Send email using EmailJS
      await emailjs.send(
        'service_ip0y2up', // Service ID
        'template_5vgsgkg', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Vedant Thombre',
        }
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Vedant
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-600 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section with Profile Image */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-100/10 to-orange-100/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 left-20 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-52 right-32 w-1 h-1 bg-orange-500 rounded-full opacity-40 animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 animate-bounce delay-700"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in max-w-6xl mx-auto">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-gray-300 rounded-full px-6 py-3 mb-12">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <span className="text-gray-700 text-lg">Available for new opportunities</span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            {/* Main Content with Profile Image and Text Side by Side */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
              {/* Profile Image */}
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative">
                  <img 
                    src="https://i.postimg.cc/T36Ssh1h/t-patil.jpg" 
                    alt="Vedant Thombre" 
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white shadow-2xl transition-transform duration-300 group-hover:scale-105 relative z-10"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/10 to-transparent"></div>
                </div>
              </div>

              {/* Main Heading and Text */}
              <div className="text-left lg:text-left order-1 lg:order-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="block text-gray-800 mb-4">Hello, I'm</span>
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Vedant Thombre
                  </span>
                </h1>
                
                {/* Animated Role Text */}
                <div className="relative mb-6">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-4">
                    Full Stack 
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent ml-4">
                      Python Developer
                    </span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full lg:mx-0"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="mb-10">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto">
                Passionate about solving complex problems with 
                <span className="text-blue-600 font-semibold"> innovative tech solutions</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-base">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-300 px-4 py-2">
                  Django Expert
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-300 px-4 py-2">
                  Python Developer
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-300 px-4 py-2">
                  Problem Solver
                </Badge>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-5 text-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span>View My Work</span>
                <ArrowDown className="ml-3 h-6 w-6 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-400 text-gray-700 hover:bg-gray-100 hover:border-blue-500 hover:text-blue-600 px-10 py-5 text-xl font-semibold backdrop-blur-sm transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center gap-2">
                <span className="text-gray-500 text-sm">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">Designing Solutions, Not Just Code</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Enthusiastic and motivated Final-Year Computer Science student with a passion for solving complex problems and exploring innovative technologies. I specialize in full-stack Python development and enjoy creating efficient, scalable solutions.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Education</h4>
                    <p className="text-gray-700">B.Tech in Computer Science</p>
                    <p className="text-gray-600">Shri Shivaji Institute of Engineering and Management Studies, Parbhani</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative group mx-auto w-fit">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <img 
                    src="https://i.postimg.cc/T36Ssh1h/t-patil.jpg" 
                    alt="Vedant Thombre - Professional" 
                    className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors shadow-md">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center">
                  <Briefcase className="mr-3 h-6 w-6 text-blue-600" />
                  Python Developer Intern
                </CardTitle>
                <CardDescription className="text-gray-700">
                  CCA Techno Private Limited • 3 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gained hands-on experience in Python development, working on real-world projects and collaborating with development teams to deliver quality solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-gray-200 shadow-lg overflow-hidden group hover:border-blue-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-gray-900">Python Django Authentication Project</CardTitle>
                <CardDescription className="text-gray-700">
                  A comprehensive authentication system built with Django
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Built using Django, HTML, CSS, and SQLite. Provides secure user authentication and management functionalities with a clean, responsive interface.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">Django</Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">Python</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">SQLite</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">HTML/CSS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white border-gray-200 shadow-lg hover:border-blue-500 transition-colors group">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg w-fit group-hover:scale-110 transition-transform text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white border-gray-200 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-gray-900 flex items-center">
                        <Mail className="mr-3 h-6 w-6 text-blue-600" />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href="mailto:tvedant532@gmail.com" className="text-blue-600 hover:text-blue-700">
                        tvedant532@gmail.com
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-gray-200 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-gray-900 flex items-center">
                        <Phone className="mr-3 h-6 w-6 text-blue-600" />
                        Phone
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href="tel:8999057599" className="text-blue-600 hover:text-blue-700">
                        8999057599
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-gray-200 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-gray-900 flex items-center">
                        <Linkedin className="mr-3 h-6 w-6 text-blue-600" />
                        LinkedIn
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href="#" className="text-blue-600 hover:text-blue-700">
                        Vedant Thombre
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-gray-200 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-gray-900 flex items-center">
                        <Github className="mr-3 h-6 w-6 text-blue-600" />
                        GitHub
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href="#" className="text-blue-600 hover:text-blue-700">
                        Vedant Thombre
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Send Me a Message</h3>
                <Card className="bg-white border-gray-200 shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-700">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            className="border-gray-300 focus:border-blue-500"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            className="border-gray-300 focus:border-blue-500"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleFormChange}
                          className="border-gray-300 focus:border-blue-500"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleFormChange}
                          className="border-gray-300 focus:border-blue-500 min-h-[120px]"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2024 Vedant Thombre. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
