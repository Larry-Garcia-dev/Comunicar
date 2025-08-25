"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ArrowRight,
  Users,
  Zap,
  Globe,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Building,
  Handshake,
  Target,
  Loader2,
} from "lucide-react"
import Image from "next/image"

export default function ComunicarLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://n8n.macondofood.online/webhook/7255544c-a7f7-4490-b387-c8b73be729fe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("¡Gracias por contactarnos! Te responderemos pronto.")
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        alert("Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      alert("Hubo un error de red al enviar tu mensaje. Por favor, revisa tu conexión e inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* <div className="text-2xl font-bold text-primary font-[var(--font-heading)]">Comunicar</div> */}
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Comunicar Logo" width={90} height={90} />
              <span className="text-2xl font-bold text-primary font-[var(--font-heading)]"></span>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("aliados")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Aliados
              </button>
              <button
                onClick={() => scrollToSection("casos")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Casos de Éxito
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Experiencia
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("aliados")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Aliados
                </button>
                <button
                  onClick={() => scrollToSection("casos")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Casos de Éxito
                </button>
                <button
                  onClick={() => scrollToSection("experiencia")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Experiencia
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-muted via-background to-card"
          style={{
            backgroundImage: `url('/abstract-digital-transformation.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-[var(--font-heading)] animate-fade-in-up">
              Comunicar: <span className="text-primary">Transformando Relaciones</span>, Impulsando el Futuro Digital
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up max-w-3xl mx-auto"
              style={{ animationDelay: "0.2s" }}
            >
              Con más de 20 años de experiencia, Comunicar es líder en relaciones públicas y consultoría para el sector
              tecnológico. Nos especializamos en la transformación digital de vanguardia y en la creación de alianzas
              estratégicas que conectan a empresas de tecnología con sectores gubernamentales y corporativos.
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-6 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
              onClick={() => scrollToSection("aliados")}
            >
              Conoce más <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Allies Section */}
      <section id="aliados" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-heading)] animate-on-scroll">
              Aliados Estratégicos y Conexiones Globales
            </h2>

            <div className="text-center mb-16 animate-on-scroll">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                Comunicar actúa como el puente entre la innovación tecnológica y las relaciones públicas de alto nivel.
                Con alianzas clave en sectores gubernamentales, privados y corporativos, hemos trabajado con
                multinacionales de primer nivel, gobiernos locales como el de Caldas, Cundinamarca, y Gobierno Central,
                además de estar en contacto con importantes actores del sector de telecomunicaciones y banca.
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Nuestra misión es conectar a las empresas tecnológicas con los principales actores económicos y
                gubernamentales para generar oportunidades estratégicas que trascienden fronteras.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <CardContent className="pt-6">
                  <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2 font-[var(--font-heading)]">Multinacionales</h4>
                  <p className="text-muted-foreground text-sm">Alianzas con empresas de primer nivel global</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2 font-[var(--font-heading)]">Gobiernos</h4>
                  <p className="text-muted-foreground text-sm">Conexiones con gobiernos locales y centrales</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <CardContent className="pt-6">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2 font-[var(--font-heading)]">Telecomunicaciones</h4>
                  <p className="text-muted-foreground text-sm">Vínculos estratégicos en el sector telecom</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2 font-[var(--font-heading)]">Banca</h4>
                  <p className="text-muted-foreground text-sm">Relaciones con importantes actores financieros</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-heading)] animate-on-scroll">
              Nosotros
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6 font-[var(--font-heading)]">Nuestra Historia</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Con más de dos décadas de experiencia, Comunicar se ha consolidado como líder en consultoría de
                  transformación digital y relaciones públicas estratégicas.
                </p>
                <p className="text-lg text-muted-foreground">
                  Hemos construido puentes sólidos entre el sector tecnológico, empresarial y gubernamental, facilitando
                  alianzas que impulsan la innovación y el crecimiento.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 animate-on-scroll">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-2xl mb-2">20+</h4>
                    <p className="text-muted-foreground">Años de Experiencia</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-2xl mb-2">100+</h4>
                    <p className="text-muted-foreground">Proyectos Exitosos</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16 text-center animate-on-scroll">
              <h3 className="text-2xl font-bold mb-8 font-[var(--font-heading)]">Misión y Visión</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Misión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Facilitar la transformación digital de organizaciones mediante estrategias de comunicación
                      innovadoras y alianzas estratégicas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Visión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Ser el puente líder entre tecnología, negocios y gobierno en el ecosistema digital
                      latinoamericano.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-heading)] animate-on-scroll">
              Nuestros Servicios
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-[var(--font-heading)]">
                    Consultoría en Transformación Digital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Estrategias integrales para modernizar procesos empresariales y adoptar tecnologías de vanguardia.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Auditoría digital
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Roadmap tecnológico
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Gestión del cambio
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-[var(--font-heading)]">Relaciones Públicas Estratégicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Construcción de reputación y gestión de comunicaciones para el sector tecnológico y empresarial.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Gestión de crisis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Relaciones con medios
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Comunicación corporativa
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-[var(--font-heading)]">
                    Generación de Alianzas Internacionales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Facilitamos conexiones estratégicas entre empresas, gobiernos y organizaciones tecnológicas a nivel
                    global.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Networking estratégico
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Partnerships tecnológicos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Expansión internacional
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="casos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-heading)] animate-on-scroll">
              Casos de Éxito y Soluciones Innovadoras
            </h2>

            <div className="text-center mb-16 animate-on-scroll">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Durante más de dos décadas, Comunicar ha sido el motor detrás de numerosos proyectos transformadores.
                Desde colaborar en el desarrollo de superaplicaciones con Whale Cloud, hasta impulsar proyectos innovadores
                con Claro Colombia y la Gobernación de Caldas, nuestra experiencia abarca una amplia gama de sectores. A
                través de cada colaboración, hemos generado alianzas sólidas y resultados exitosos que demuestran
                nuestra capacidad para conectar tecnología, negocios y gobiernos de manera efectiva.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="animate-on-scroll hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Tecnología</Badge>
                  <CardTitle className="font-[var(--font-heading)]">Whale Cloud</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Colaboración estratégica en el desarrollo de superaplicaciones, facilitando la transformación
                    digital y la innovación tecnológica en el ecosistema empresarial.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="animate-on-scroll hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Telecomunicaciones</Badge>
                  <CardTitle className="font-[var(--font-heading)]">Claro Colombia</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Impulso de proyectos innovadores en el sector de telecomunicaciones, fortaleciendo las relaciones
                    públicas y la expansión de servicios digitales.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="animate-on-scroll hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Gobierno</Badge>
                  <CardTitle className="font-[var(--font-heading)]">Gobernación de Caldas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Asesoría integral en transformación digital gubernamental, mejorando la eficiencia operativa y la
                    comunicación con la ciudadanía.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-heading)] animate-on-scroll">
              Más de 20 Años de Experiencia Transformadora
            </h2>

            <div className="text-center mb-16 animate-on-scroll">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Con una trayectoria de más de 20 años, Comunicar ha sido un actor clave en el mundo de las relaciones
                públicas y la transformación digital. Nuestra experiencia internacional abarca múltiples sectores, con
                un enfoque especial en tecnología, inversiones estratégicas y planes de negocios digitales. Gracias a
                nuestro profundo conocimiento del mercado y a una red de alianzas globales, hemos ayudado a empresas,
                gobiernos y organizaciones a lograr una evolución digital exitosa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow animate-on-scroll">
                <CardContent className="pt-6">
                  <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-3xl mb-2">20+</h4>
                  <p className="text-muted-foreground">Años de Experiencia</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow animate-on-scroll">
                <CardContent className="pt-6">
                  <Handshake className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-3xl mb-2">100+</h4>
                  <p className="text-muted-foreground">Alianzas Estratégicas</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow animate-on-scroll">
                <CardContent className="pt-6">
                  <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-3xl mb-2">50+</h4>
                  <p className="text-muted-foreground">Proyectos Transformadores</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-[var(--font-heading)]">
              ¡Transforma tu negocio hoy!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Si estás listo para llevar tu empresa o proyecto a la era digital, Comunicar es tu aliado estratégico.
              Contáctanos y descubre cómo podemos ayudarte a conectar con los principales actores del mercado y alcanzar
              nuevas oportunidades de negocio.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection("contacto")}
            >
              Contáctanos <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-heading)] animate-on-scroll">
              Contacto
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6 font-[var(--font-heading)]">
                  ¿Listo para transformar tu negocio?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos de transformación digital.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <span>administracion@comunicar.com.co</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <span>+57 (322) 7126-811</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    <span>Bogotá, Colombia</span>
                  </div>
                </div>
              </div>

              <Card className="animate-on-scroll">
                <CardHeader>
                  <CardTitle className="font-[var(--font-heading)]">Envíanos un mensaje</CardTitle>
                  <CardDescription>Completa el formulario y te contactaremos pronto.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Nombre completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Empresa"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Mensaje"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        "Enviar mensaje"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold text-primary mb-4 font-[var(--font-heading)]">Comunicar</div>
                <p className="text-muted-foreground">Transformando relaciones, impulsando el futuro digital.</p>
              </div>

              <div>
                <h4 className="font-bold mb-4 font-[var(--font-heading)]">Servicios</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Transformación Digital</li>
                  <li>Relaciones Públicas</li>
                  <li>Alianzas Estratégicas</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 font-[var(--font-heading)]">Sectores</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Tecnología</li>
                  <li>Telecomunicaciones</li>
                  <li>Gobierno</li>
                  <li>Corporativo</li>
                </ul>
              </div>

              <div className="w-25%">
                <h4 className="font-bold mb-4 font-[var(--font-heading)]">Comunicar</h4> 
                <div className="flex space-x-4">
                  {/* <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Facebook className="w-5 h-5" />
                  </Button> */}
                  <img className="logoFooter" src="/logo.png" alt="" />
                </div>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
              <p>&copy; 2023 Comunicar. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
