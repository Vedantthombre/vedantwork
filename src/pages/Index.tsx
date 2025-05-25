
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, Code, User, Briefcase, FileText } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Vedant
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-orange-900/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Vedant Thombre
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">Full Stack Python Developer</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about solving complex problems with innovative tech solutions
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                  <User className="h-32 w-32 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Designing Solutions, Not Just Code</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Enthusiastic and motivated Final-Year Computer Science student with a passion for solving complex problems and exploring innovative technologies. I specialize in full-stack Python development and enjoy creating efficient, scalable solutions.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
                    <p className="text-gray-300">B.Tech in Computer Science</p>
                    <p className="text-gray-400">Shri Shivaji Institute of Engineering and Management Studies, Parbhani</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-white">{skill.name}</h3>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
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
      <section id="experience" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Briefcase className="mr-3 h-6 w-6 text-blue-400" />
                  Python Developer Intern
                </CardTitle>
                <CardDescription className="text-gray-300">
                  CCA Techno Private Limited • 3 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Gained hands-on experience in Python development, working on real-world projects and collaborating with development teams to deliver quality solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-blue-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-white">Python Django Authentication Project</CardTitle>
                <CardDescription className="text-gray-300">
                  A comprehensive authentication system built with Django
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Built using Django, HTML, CSS, and SQLite. Provides secure user authentication and management functionalities with a clean, responsive interface.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600 text-white">Django</Badge>
                  <Badge variant="secondary" className="bg-orange-600 text-white">Python</Badge>
                  <Badge variant="secondary" className="bg-gray-600 text-white">SQLite</Badge>
                  <Badge variant="secondary" className="bg-green-600 text-white">HTML/CSS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors group">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg w-fit group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-center">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Mail className="mr-3 h-6 w-6 text-blue-400" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:tvedant532@gmail.com" className="text-blue-400 hover:text-blue-300">
                    tvedant532@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Phone className="mr-3 h-6 w-6 text-blue-400" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:8999057599" className="text-blue-400 hover:text-blue-300">
                    8999057599
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Linkedin className="mr-3 h-6 w-6 text-blue-400" />
                    LinkedIn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Vedant Thombre
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Github className="mr-3 h-6 w-6 text-blue-400" />
                    GitHub
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Vedant Thombre
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Vedant Thombre. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
