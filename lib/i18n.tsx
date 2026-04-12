'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

type Language = 'en' | 'es'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.events': 'Events',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.about': 'DM Promotions',
    'hero.title': 'Luxury Meets Influence',
    'hero.description': 'Your go-to for high-end media events & promotion',
    'hero.satisfaction': '100% Satisfaction Guarantee',
    'hero.commitment': 'Commitment to Customers',
    'hero.professional': 'Highly Professional Team',
    'hero.quality': 'Quality Control System',
    'hero.aboutBtn': 'About Us',
    'hero.whyChoose': 'Why Choose Us',
    'hero.guarantee': '100% Satisfaction Guarantee',
    'hero.commitment2': 'Commitment to Customers',
    'hero.professional2': 'Highly Professional Team',
    'hero.quality2': 'Quality Control System',
    
    // Services
    'services.title': 'Exclusive Services',
    'services.subtitle': 'Exclusive service by application only. VIPs, celebrities, sports men & women, and all those just living a luxury lifestyle qualify for our exclusive and elite packages.',
    'services.celebrity': 'Celebrity Appearances',
    'services.celebrityDesc': 'Elevate your event with an appearance from a well known celebrity guest. Our team have connections with numerous celebrities including Bruno Mars, Rhianna, Katy Perry, Mike Tyson to name a few. For a full list of celebrities available enquire today.',
    'services.corporate': 'Corporate Events',
    'services.corporateDesc': 'Our service is tailored to meet your specific needs. We pride ourselves on our attention to detail, ensuring that every element of your event is customised to suit your brand and company values. We guarantee that your attendees will have an unforgettable experience that will leave a lasting impression.',
    'services.brand': 'Brand Launches',
    'services.brandDesc': 'A successful brand launch is all about making a memorable impression. That\'s why we\'re here to help you create an unforgettable event that your guests and customers will remember for years to come. Our team is committed to helping your brand make a big impact.',
    'services.security': 'Personal Security',
    'services.securityDesc': 'A successful event requires careful preparation, and ensuring the safety of everyone involved is key. Our personal security service complete with a driver provides you with peace of mind, knowing that a discreet and experienced team is watching over the event. You can trust us to prioritise your safety above all else.',
    
    // CTA Section
    'cta.title': 'Providing a premium service for your event',
    'cta.subtitle': 'Let a member of our team discuss how we can bring your event to the next level',
    'cta.contact': 'Contact Us',
    
    // Events Section
    'events.title': 'THE BOSS',
    'events.subtitle': 'Gallery',
    'events.cta': 'Experience the Pinnacle of Luxury',
    
    // Showcase Section
    'showcase.title': 'LUXURY LIFESTYLE',
    'showcase.subtitle': 'Exclusive Access',
    'showcase.diary': 'Premium Experiences',
    'showcase.duncanTitle': 'Malex Super Yacht Charter',
    'showcase.duncanDesc': 'Experience the pinnacle of nautical luxury aboard our magnificent Malex super yacht. Designed for those with refined taste and discerning standards, this exclusive vessel offers unparalleled elegance, world-class service, and unforgettable Mediterranean adventures.',
    'showcase.learnMore': 'Learn More',
    
    // Luxury Assets
    'luxury.yacht': 'Malex Super Yacht',
    'luxury.yachtDesc': 'Experience the pinnacle of nautical luxury aboard our magnificent Malex super yacht. Designed for those with refined taste and discerning standards, this exclusive vessel offers unparalleled elegance, world-class service, and unforgettable Mediterranean adventures.',
    'luxury.jet': 'Private Jet Charter',
    'luxury.jetDesc': 'Travel in ultimate comfort and style with our private jet charter service. Enjoy exclusive access to premium aircraft, personalized service, and the freedom to travel on your own schedule. Perfect for VIPs and those accustomed to the finest things in life.',
    'luxury.helicopter': 'Helicopter Tours & Transfers',
    'luxury.helicopterDesc': 'Rise above the ordinary with our helicopter charter service. Experience breathtaking aerial views, convenient transfers to exclusive destinations, and an unforgettable perspective on luxury travel.',
    
    // Blog Section
    'blog.title': 'OUR BLOG',
    'blog.subtitle': 'Latest Reviews',
    'blog.skiTitle': 'Ski Review',
    'blog.skiDesc': 'At DM Promotions, we are always on the lookout for the best destinations for our elite clientele. That\'s why we were thrilled to visit...',
    'blog.ceoTitle': "A CEO's Review",
    'blog.ceoDesc': 'As a ski expert, I have visited resorts all around the world, but none of them impressed me as much as Sierra Nevada passion and rapidly...',
    'blog.sponsorship': 'Exclusive Sierra Nevada Sponsorship Packages',
    'blog.vip': 'VIP Igloos Now Available',
    
    // About Page
    'about.title': 'About',
    'about.storyTitle': 'Our Story',
    'about.storyP1': 'Duncan McHugh CEO of DM Promotions has a team around him with 25 years experience in media and promotion at the highest level, dealing with the limelight and front page stories. Some of our trusted clients include Rolex, Ferrari and Bentley alongside A list celebrities such as Rhianna and Rita Ora.',
    'about.storyP2': 'We respect the importance of confidentiality so privacy and exclusivity are guaranteed with every project. We are experts in event promotion and artist management, with worldwide contacts in the media our experience and expertise will make your event excel in every aspect.',
    'about.storyP3': 'At DM Promotions, perfection is paramount.',
    'about.moreDuncan': 'More on Duncan',
    'about.learnMore': 'Learn More',
    'about.experience': 'Experience',
    'about.upcomingEvents': 'Upcoming Events',
    'about.murderMystery': 'Murder Mystery',
    'about.ourServices': 'Our Services',
    'about.mediaLinks': 'Media Links',
    'about.mediaSubtitle': 'Check out what the media has to say about our latest event',
    'about.visitInstagram': 'Visit our Instagram',
    
    // Contact Page
    'contact.title': 'Get in Touch Today',
    'contact.sendMessage': 'Send Message',
    'contact.getInTouch': 'Get In Touch',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email',
    'contact.company': 'Company Name',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.submit': 'Submit',
    
    // Events/Murder Mystery Page
    'murder.title': 'Murder Mystery Experience',
    'murder.subtitle': 'Immersive and captivating experience',
    'murder.intro': 'At DM Productions our role is to help create an immersive and captivating atmosphere for the murder mystery experience. Designing unique clues and hints that will keep the participants on their toes.',
    'murder.innovation': 'Bringing innovation to the murder mystery sector',
    'murder.plot': 'The Plot Thickens...',
    'murder.plotDesc': 'Our dining experience which adds to the whole murder mystery experience which embodies contemporary theatrical gastronomy prepared by award winning chefs.',
    'murder.friend': 'Friend, Confidant or Arch Enemy?',
    'murder.friendDesc': 'Cameo appearances from personalities from the Music, TV and Social Media Industries',
    'murder.cinema': 'Cinema Quality',
    'murder.cinemaDesc': 'Every element of the narrative is engaging, our sets are designed by Hollywood\'s finest. Our scripts are created with intelligence, humor with clever dialogue that keeps the participants guessing and engages them emotionally.',
    'murder.team': 'Great for team building and Networking',
    'murder.location': 'The location',
    'murder.locationDesc': 'Our murder mystery experiences take place in Spain in a location easy to reach from Malaga airport but remote enough to elevate the murder mystery with all the characteristics of a macabre yet beautiful mansion.',
    'murder.props': 'The Props',
    'murder.propsDesc': 'These custom props will certainly add to the experience making it more memorable. Each set and scenario will be reminiscent of an homicidal Hollywood silver screen moment.',
    'murder.screen': 'The Silver Screen',
    'murder.screenDesc': 'All participants will get the chance to be featured on leading global TV platforms and the chance to go viral on social media.',
    'murder.host': 'Meet the Host',
    'murder.hostDesc': 'Adding to the extravagance and intrigue of the murder mystery experience is World renowned artist and Queen of luxury Debbie Wingham, recognised globally for her unique diamond creations.',
    'murder.treatment': 'A-List Treatment',
    'murder.treatmentDesc': 'Our guests are treated to an exclusive experience where they have the opportunity to wear haute couture looks provided by our team of celebrity stylists.',
    'murder.register': 'We have an extensive range of packages and themes for more details please register your interest here',
    'murder.disclaimer': '*All Applicants for the show must be 18 and over in good health',
    
    // Footer
    'footer.rights': '© 2024 DM Media Group. All rights reserved.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre nosotros',
    'nav.services': 'Servicios',
    'nav.events': 'Eventos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.about': 'DM Promotions',
    'hero.title': 'Lujo Meets Influencia',
    'hero.description': 'Tu destino para eventos multimedia de alto nivel y promoción',
    'hero.satisfaction': 'Garantía de satisfacción del 100%',
    'hero.commitment': 'Compromiso con los clientes',
    'hero.professional': 'Equipo altamente profesional',
    'hero.quality': 'Sistema de control de calidad',
    'hero.aboutBtn': 'Sobre nosotros',
    'hero.whyChoose': 'Por qué elegirnos',
    'hero.guarantee': 'Garantía de satisfacción del 100%',
    'hero.commitment2': 'Compromiso con los clientes',
    'hero.professional2': 'Equipo altamente profesional',
    'hero.quality2': 'Sistema de control de calidad',
    
    // Services
    'services.title': 'Servicios Exclusivos',
    'services.subtitle': 'Servicio exclusivo solo por solicitud. VIPs, celebridades, deportistas y todos aquellos que viven un estilo de vida de lujo califican para nuestros paquetes exclusivos y de élite.',
    'services.festivals': 'Festivales',
    'services.festivalsDesc': 'Una solución integral para una celebración perfecta. Nuestro experimentado equipo aporta creatividad y precisión, garantizando que su festival sea un espectáculo bien orquestado. Con un enfoque en la seguridad, la eficiencia y un don para lo extraordinario,',
    'services.celebrity': 'Apariciones de celebridades',
    'services.celebrityDesc': 'Mejore su evento con la aparición de un invitado famoso y conocido. Nuestro equipo tiene conexiones con numerosas celebridades, incluidas Bruno Mars, Rhianna, Katy Perry y Mike Tyson, por nombrar algunas.',
    'services.corporate': 'Eventos corporativos',
    'services.corporateDesc': 'Nuestro servicio está diseñado para satisfacer sus necesidades específicas. Nos enorgullecemos de nuestra atención al detalle, garantizando que cada elemento de su evento se personalice para adaptarse a su marca y los valores de su empresa.',
    'services.brand': 'Lanzamientos de marca',
    'services.brandDesc': 'El lanzamiento de una marca exitoso consiste en causar una impresión memorable. Es por eso que estamos aquí para ayudarlo a crear un evento inolvidable que sus invitados y clientes recordarán en los años venideros.',
    'services.security': 'Seguridad personal',
    'services.securityDesc': 'Un evento exitoso requiere una preparación cuidadosa y garantizar la seguridad de todos los involucrados es clave. Nuestro servicio de seguridad personal con conductor le proporciona la tranquilidad de saber que un equipo discreto y experimentado vigila el evento.',
    
    // CTA Section
    'cta.title': 'Proporcionando un servicio premium para tu evento',
    'cta.subtitle': 'Permita que un miembro de nuestro equipo discuta cómo podemos llevar su evento al siguiente nivel',
    'cta.contact': 'Contáctenos',
    
    // Events Section
    'events.title': 'EL JEFE',
    'events.subtitle': 'Galería',
    'events.cta': 'Experimenta el Pináculo del Lujo',
    
    // Showcase Section
    'showcase.title': 'ESTILO DE VIDA DE LUJO',
    'showcase.subtitle': 'Acceso Exclusivo',
    'showcase.diary': 'Experiencias Premium',
    'showcase.duncanTitle': 'Alquiler de Yate Malex Super',
    'showcase.duncanDesc': 'Experimenta el pináculo del lujo náutico a bordo de nuestro magnífico yate super Malex. Diseñado para quienes tienen gusto refinado y estándares exigentes, este buque exclusivo ofrece elegancia incomparable, servicio de clase mundial y aventuras mediterráneas inolvidables.',
    'showcase.learnMore': 'Más información',
    
    // Luxury Assets - Spanish
    'luxury.yacht': 'Alquiler de Yate Malex',
    'luxury.yachtDesc': 'Experimenta el pináculo del lujo náutico a bordo de nuestro magnífico yate. Diseñado para quienes tienen gusto refinado, este buque exclusivo ofrece elegancia incomparable y aventuras inolvidables.',
    'luxury.jet': 'Alquiler de Jet Privado',
    'luxury.jetDesc': 'Viaja con comodidad y estilo en nuestro servicio de alquiler de jets privados. Acceso exclusivo a aeronaves premium, servicio personalizado y libertad de viajar según tu horario.',
    'luxury.helicopter': 'Tours y Traslados en Helicóptero',
    'luxury.helicopterDesc': 'Elévate sobre lo ordinario con nuestro servicio de alquiler de helicópteros. Experiencias aéreas espectaculares, traslados convenientes y perspectivas inolvidables del lujo.',
    
    // Blog Section
    'blog.title': 'NUESTRO BLOG',
    'blog.subtitle': 'Últimas reseñas',
    'blog.skiTitle': 'Reseña de esquí',
    'blog.skiDesc': 'En DM Promotions, siempre estamos buscando los mejores destinos para nuestra clientela de élite. Por eso nos emocionó visitar...',
    'blog.ceoTitle': 'Reseña del CEO',
    'blog.ceoDesc': 'Como experto en esquí, he visitado resorts en todo el mundo, pero ninguno me impresionó tanto como Sierra Nevada...',
    'blog.sponsorship': 'Paquetes exclusivos de patrocinio de Sierra Nevada',
    'blog.vip': 'Iglús VIP ahora disponibles',
    
    // About Page
    'about.title': 'Sobre nosotros',
    'about.storyTitle': 'Nuestra historia',
    'about.storyP1': 'Duncan McHugh, CEO de DM Promotions, tiene un equipo a su alrededor con 25 años de experiencia en medios y promoción al más alto nivel.',
    'about.storyP2': 'Respetamos la importancia de la confidencialidad, por lo que la privacidad y la exclusividad están garantizadas en cada proyecto.',
    'about.storyP3': 'En DM Promotions, la perfección es primordial.',
    'about.moreDuncan': 'Más sobre Duncan',
    'about.learnMore': 'Más información',
    'about.experience': 'Experiencia',
    'about.upcomingEvents': 'Próximos eventos',
    'about.murderMystery': 'Misterio de asesinato',
    'about.ourServices': 'Nuestros servicios',
    'about.mediaLinks': 'Enlaces de medios',
    'about.mediaSubtitle': 'Vea lo que los medios tienen que decir sobre nuestro último evento',
    'about.visitInstagram': 'Visita nuestro Instagram',
    
    // Contact Page
    'contact.title': 'Ponte en contacto hoy',
    'contact.sendMessage': 'Enviar Mensaje',
    'contact.getInTouch': 'Ponte en Contacto',
    'contact.firstName': 'Nombre',
    'contact.lastName': 'Apellido',
    'contact.email': 'Correo electrónico',
    'contact.company': 'Nombre de la empresa',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.submit': 'Enviar',
    
    // Events/Murder Mystery Page
    'murder.title': 'Experiencia de misterio de asesinato',
    'murder.subtitle': 'Experiencia inmersiva y cautivadora',
    'murder.intro': 'En DM Productions, nuestro papel es ayudar a crear una atmósfera inmersiva y cautivadora para la experiencia de misterio de asesinato.',
    'murder.innovation': 'Aportando innovación al sector del misterio de asesinato',
    'murder.plot': 'La trama se complica...',
    'murder.plotDesc': 'Nuestra experiencia gastronómica que se suma a toda la experiencia de misterio de asesinato que encarna la gastronomía teatral contemporánea preparada por chefs galardonados.',
    'murder.friend': '¿Amigo, confidente o archienemigo?',
    'murder.friendDesc': 'Apariciones de personalidades de las industrias de la música, la televisión y las redes sociales',
    'murder.cinema': 'Calidad cinematográfica',
    'murder.cinemaDesc': 'Cada elemento de la narrativa es atractivo, nuestros escenarios están diseñados por los mejores de Hollywood.',
    'murder.team': 'Ideal para trabajo en equipo y networking',
    'murder.location': 'La ubicación',
    'murder.locationDesc': 'Nuestras experiencias de misterio de asesinato tienen lugar en España en una ubicación fácil de alcanzar desde el aeropuerto de Málaga.',
    'murder.props': 'Los accesorios',
    'murder.propsDesc': 'Estos accesorios personalizados ciertamente agregarán a la experiencia haciéndola más memorable.',
    'murder.screen': 'La pantalla de plata',
    'murder.screenDesc': 'Todos los participantes tendrán la oportunidad de aparecer en las principales plataformas de televisión mundial.',
    'murder.host': 'Conoce al anfitrión',
    'murder.hostDesc': 'Añadiendo extravagancia e intriga a la experiencia de misterio de asesinato está la artista de renombre mundial Debbie Wingham.',
    'murder.treatment': 'Trato de primera clase',
    'murder.treatmentDesc': 'Nuestros invitados reciben una experiencia exclusiva donde tienen la oportunidad de usar looks de alta costura.',
    'murder.register': 'Tenemos una amplia gama de paquetes y temas, para más detalles regístrese aquí',
    'murder.disclaimer': '*Todos los solicitantes para el programa deben ser mayores de 18 años y gozar de buena salud',
    
    // Footer
    'footer.rights': '© 2024 DM Media Group. Todos los derechos reservados.',
  }
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = useCallback((key: string): string => {
    return translations[language][key] || key
  }, [language])

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

export function useTranslation() {
  return useI18n()
}
