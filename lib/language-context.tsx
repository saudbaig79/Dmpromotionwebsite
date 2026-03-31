'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
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
    
    // Hero
    'hero.about': 'About Us',
    'hero.title': 'Your partner for exclusive luxury events',
    'hero.subtitle': 'Whether its a festival, celebrity appearance, corporate event, brand launches or just a high end VIP event Duncan McHugh CEO and his team can bring your vision to life. With 25 years experience our team are experts in media and promotion at the highest level',
    
    // Features
    'feature.satisfaction': '100% Satisfaction Guarantee',
    'feature.commitment': 'Commitment to Customers',
    'feature.professional': 'Highly Professional Team',
    'feature.quality': 'Quality Control System',
    
    // About Section
    'about.title': 'About Us',
    'about.description': 'A comprehensive solution for a seamless celebration. Our experienced team brings creativity and precision to the table, ensuring your festival is a well-orchestrated spectacle. With a focus on safety, efficiency, and a flair for the extraordinary,',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Explore some of the services available at DM Promotions, however we cater to every event so if you have something unique in mind get in touch.',
    'services.festivals': 'Festivals',
    'services.festivals.desc': 'A comprehensive solution for a seamless celebration. Our experienced team brings creativity and precision to the table, ensuring your festival is a well-orchestrated spectacle. With a focus on safety, efficiency, and a flair for the extraordinary,',
    'services.celebrity': 'Celebrity Appearances',
    'services.celebrity.desc': 'Elevate your event with an appearance from a well known celebrity guest. Our team have connections with numerous celebrities including Bruno Mars, Rhianna, Katy Perry, Mike Tyson to name a few. For a full list of celebrities available enquire today.',
    'services.corporate': 'Corporate Events',
    'services.corporate.desc': 'Our service is tailored to meet your specific needs. We pride ourselves on our attention to detail, ensuring that every element of your event is customised to suit your brand and company values. We guarantee that your attendees will have an unforgettable experience that will leave a lasting impression.',
    'services.brand': 'Brand Launches',
    'services.brand.desc': "A successful brand launch is all about making a memorable impression. That's why we're here to help you create an unforgettable event that your guests and customers will remember for years to come. Our team is committed to helping your brand make a big impact.",
    'services.security': 'Personal Security',
    'services.security.desc': 'A successful event requires careful preparation, and ensuring the safety of everyone involved is key. Our personal security service complete with a driver provides you with peace of mind, knowing that a discreet and experienced team is watching over the event. You can trust us to prioritise your safety above all else.',
    
    // CTA
    'cta.title': 'Providing a premium service for your event',
    'cta.subtitle': 'Let a member of our team discuss how we can bring your event to the next level',
    'cta.button': 'Contact Us',
    
    // Events
    'events.title': 'OUR EVENTS',
    'events.subtitle': 'Upcoming Events & Media Launches',
    'events.cta': "Don't Hesitate to Use Our Services. Your Event Will Be Special.",
    
    // Showcase
    'showcase.title': 'SHOWCASE',
    'showcase.subtitle': 'Recent Events',
    'showcase.diary': 'Diary of a CEO',
    'showcase.duncan.title': 'Duncan McHugh: The Maverick Maestro of Music and Media',
    'showcase.duncan.desc': 'Duncan McHugh CEO of DM Promotions has a team around him with 25 years experience in media and promotion at the highest level, dealing with the limelight and front page stories. Some of our trusted clients include Rolex, Ferrari and Bentley alongside A list celebrities such as Neil Diamond, Rhianna and Rita Ora.',
    'showcase.learnMore': 'Learn More',
    
    // Blog
    'blog.title': 'OUR BLOG',
    'blog.subtitle': 'Latest Reviews',
    'blog.ski.title': 'Ski Review',
    'blog.ski.excerpt': "At DM Promotions, we are always on the lookout for the best destinations for our elite clientele. That's why we were thrilled to visit...",
    'blog.ceo.title': "A CEO's Review",
    'blog.ceo.excerpt': 'As a ski expert, I have visited resorts all around the world, but none of them impressed me as much as Sierra Nevada passion and rapidly...',
    'blog.sierra.title': 'Exclusive Sierra Nevada Sponsorship Packages',
    'blog.sierra.subtitle': 'VIP Igloos Now Available',
    
    // Contact
    'contact.title': 'Get in Touch Today',
    'contact.firstName': 'First name',
    'contact.lastName': 'Last name',
    'contact.email': 'Email',
    'contact.company': 'Company name',
    'contact.message': 'Message',
    'contact.submit': 'Submit',
    
    // About Page
    'aboutPage.title': 'About',
    'aboutPage.story': 'Our Story',
    'aboutPage.story.p1': 'Duncan McHugh CEO of DM Promotions has a team around him with 25 years experience in media and promotion at the highest level, dealing with the limelight and front page stories. Some of our trusted clients include Rolex, Ferrari and Bentley alongside A list celebrities such as Rhianna and Rita Ora.',
    'aboutPage.story.p2': 'We respect the importance of confidentiality so privacy and exclusivity are guaranteed with every project. We are experts in event promotion and artist management, with worldwide contacts in the media our experience and expertise will make your event excel in every aspect.',
    'aboutPage.story.p3': 'At DM Promotions, perfection is paramount.',
    'aboutPage.moreDuncan': 'More on Duncan',
    'aboutPage.murderMystery': 'Murder Mystery',
    'aboutPage.experience': 'Experience',
    'aboutPage.upcoming': 'Upcoming Events',
    'aboutPage.services': 'Our Services',
    'aboutPage.media': 'Media Links',
    'aboutPage.mediaDesc': 'Check out what the media has to say about our latest event',
    'aboutPage.instagram': 'Visit our Instagram',
    
    // Events Page
    'eventsPage.title': 'Murder Mystery Experience',
    'eventsPage.immersive': 'Immersive and captivating experience',
    'eventsPage.intro': 'At DM Productions our role is to help create an immersive and captivating atmosphere for the murder mystery experience. Designing unique clues and hints that will keep the participants on their toes. Prompted by seasoned entertainers who create interesting scenarios to assist you in finding the murderer or throwing you off the scent, you have to decide which!?!',
    'eventsPage.innovation': 'Bringing innovation to the murder mystery sector',
    'eventsPage.plot': 'The Plot Thickens...',
    'eventsPage.plotDesc': 'Our dining experience which adds to the whole murder mystery experience which embodies contemporary theatrical gastronomy prepared by award winning chefs.',
    'eventsPage.friend': 'Friend, Confidant or Arch Enemy?',
    'eventsPage.friendDesc': 'Cameo appearances from personalities from the Music, TV and Social Media Industries',
    'eventsPage.cinema': 'Cinema Quality',
    'eventsPage.cinemaDesc': "Every element of the narrative is engaging, our sets are designed by Hollywood's finest. Our scripts are created with intelligence, humor with clever dialogue that keeps the participants guessing and engages them emotionally. Our script writers bring more than 15 years experience and began their murder mystery journey working alongside Channel 4 and the BBC in the UK often crafting events for the networks and their key production companies.",
    'eventsPage.teamBuilding': 'Great for team building and Networking',
    'eventsPage.location': 'The location',
    'eventsPage.locationDesc': 'Our murder mystery experiences take place in Spain in a location easy to reach from Malaga airport but remote enough to elevate the murder mystery with all the characteristics of a macabre yet beautiful mansion. Where select guests can stay over and have the full homocidal experience In an environment which offers so many murderous settings',
    'eventsPage.props': 'The Props',
    'eventsPage.propsDesc': 'These custom props will certainly add to the experience making it more memorable. Each set and scenario will be reminiscent of an homicidal Hollywood silver screen moment.',
    'eventsPage.host': 'Meet the Host',
    'eventsPage.hostDesc': 'Adding to the extravagance and intrigue of the murder mystery experience is World renowned artist and Queen of luxury Debbie Wingham, recognised globally for her unique diamond creations, she will be the host of our first murder mystery. Adding her artistic touch to create a visually stunning experience.',
    'eventsPage.silverScreen': 'The Silver Screen',
    'eventsPage.silverScreenDesc': 'All participants will get the chance to be featured on leading global TV platforms and the chance to go viral on social media. Our venue is not only spookilicous and sophisticated, there will be countless social media back drops which not only make killer photo opportunities but that could potentially serve as hints to help solve the murder mystery.',
    'eventsPage.alist': 'A-List Treatment',
    'eventsPage.alistDesc': 'Our guests are treated to an exclusive experience where they have the opportunity to wear haute couture looks provided by our team of celebrity stylists, as well as receive professional hair and makeup services.',
    'eventsPage.register': 'We have an extensive range of packages and themes for more details please register your interest here',
    'eventsPage.disclaimer': '*All Applicants for the show must be 18 and over in good health',
    
    // Blog Page
    'blogPage.title': 'Reviews',
    'blogPage.subtitle': 'Explore our reviews of destinations across the world.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.events': 'Eventos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.about': 'Sobre Nosotros',
    'hero.title': 'Tu socio para eventos de lujo exclusivos',
    'hero.subtitle': 'Ya sea un festival, aparición de celebridades, evento corporativo, lanzamiento de marcas o simplemente un evento VIP de alto nivel, Duncan McHugh CEO y su equipo pueden dar vida a tu visión. Con 25 años de experiencia, nuestro equipo son expertos en medios y promoción al más alto nivel',
    
    // Features
    'feature.satisfaction': '100% Garantía de Satisfacción',
    'feature.commitment': 'Compromiso con los Clientes',
    'feature.professional': 'Equipo Altamente Profesional',
    'feature.quality': 'Sistema de Control de Calidad',
    
    // About Section
    'about.title': 'Sobre Nosotros',
    'about.description': 'Una solución integral para una celebración perfecta. Nuestro experimentado equipo aporta creatividad y precisión, asegurando que tu festival sea un espectáculo bien orquestado. Con un enfoque en la seguridad, eficiencia y un toque extraordinario,',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Explora algunos de los servicios disponibles en DM Promotions, sin embargo, atendemos todo tipo de eventos, así que si tienes algo único en mente, contáctanos.',
    'services.festivals': 'Festivales',
    'services.festivals.desc': 'Una solución integral para una celebración perfecta. Nuestro experimentado equipo aporta creatividad y precisión, asegurando que tu festival sea un espectáculo bien orquestado. Con un enfoque en la seguridad, eficiencia y un toque extraordinario,',
    'services.celebrity': 'Apariciones de Celebridades',
    'services.celebrity.desc': 'Eleva tu evento con la aparición de un invitado famoso. Nuestro equipo tiene conexiones con numerosas celebridades incluyendo Bruno Mars, Rhianna, Katy Perry, Mike Tyson por nombrar algunos. Para una lista completa de celebridades disponibles, consulta hoy.',
    'services.corporate': 'Eventos Corporativos',
    'services.corporate.desc': 'Nuestro servicio está diseñado para satisfacer tus necesidades específicas. Nos enorgullecemos de nuestra atención al detalle, asegurando que cada elemento de tu evento esté personalizado para adaptarse a tu marca y valores de la empresa. Garantizamos que tus asistentes tendrán una experiencia inolvidable.',
    'services.brand': 'Lanzamientos de Marca',
    'services.brand.desc': 'Un lanzamiento de marca exitoso se trata de causar una impresión memorable. Por eso estamos aquí para ayudarte a crear un evento inolvidable que tus invitados y clientes recordarán por años.',
    'services.security': 'Seguridad Personal',
    'services.security.desc': 'Un evento exitoso requiere una preparación cuidadosa, y garantizar la seguridad de todos los involucrados es clave. Nuestro servicio de seguridad personal con conductor te brinda tranquilidad, sabiendo que un equipo discreto y experimentado está vigilando el evento.',
    
    // CTA
    'cta.title': 'Proporcionando un servicio premium para tu evento',
    'cta.subtitle': 'Deja que un miembro de nuestro equipo discuta cómo podemos llevar tu evento al siguiente nivel',
    'cta.button': 'Contáctanos',
    
    // Events
    'events.title': 'NUESTROS EVENTOS',
    'events.subtitle': 'Próximos Eventos y Lanzamientos de Medios',
    'events.cta': 'No dudes en usar nuestros servicios. Tu evento será especial.',
    
    // Showcase
    'showcase.title': 'GALERÍA',
    'showcase.subtitle': 'Eventos Recientes',
    'showcase.diary': 'Diario de un CEO',
    'showcase.duncan.title': 'Duncan McHugh: El Maestro Inconformista de la Música y los Medios',
    'showcase.duncan.desc': 'Duncan McHugh CEO de DM Promotions tiene un equipo a su alrededor con 25 años de experiencia en medios y promoción al más alto nivel, tratando con la fama y las historias de primera plana. Algunos de nuestros clientes de confianza incluyen Rolex, Ferrari y Bentley junto con celebridades de primer nivel como Neil Diamond, Rhianna y Rita Ora.',
    'showcase.learnMore': 'Saber Más',
    
    // Blog
    'blog.title': 'NUESTRO BLOG',
    'blog.subtitle': 'Últimas Reseñas',
    'blog.ski.title': 'Reseña de Esquí',
    'blog.ski.excerpt': 'En DM Promotions, siempre estamos buscando los mejores destinos para nuestra clientela de élite. Por eso nos emocionó visitar...',
    'blog.ceo.title': 'Reseña del CEO',
    'blog.ceo.excerpt': 'Como experto en esquí, he visitado estaciones de todo el mundo, pero ninguna me impresionó tanto como Sierra Nevada...',
    'blog.sierra.title': 'Paquetes Exclusivos de Patrocinio Sierra Nevada',
    'blog.sierra.subtitle': 'Iglús VIP Ya Disponibles',
    
    // Contact
    'contact.title': 'Ponte en Contacto Hoy',
    'contact.firstName': 'Nombre',
    'contact.lastName': 'Apellido',
    'contact.email': 'Correo electrónico',
    'contact.company': 'Nombre de la empresa',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar',
    
    // About Page
    'aboutPage.title': 'Nosotros',
    'aboutPage.story': 'Nuestra Historia',
    'aboutPage.story.p1': 'Duncan McHugh CEO de DM Promotions tiene un equipo a su alrededor con 25 años de experiencia en medios y promoción al más alto nivel, tratando con la fama y las historias de primera plana. Algunos de nuestros clientes de confianza incluyen Rolex, Ferrari y Bentley junto con celebridades de primer nivel como Rhianna y Rita Ora.',
    'aboutPage.story.p2': 'Respetamos la importancia de la confidencialidad, por lo que la privacidad y exclusividad están garantizadas en cada proyecto. Somos expertos en promoción de eventos y gestión de artistas, con contactos mundiales en los medios, nuestra experiencia y conocimientos harán que tu evento sobresalga en todos los aspectos.',
    'aboutPage.story.p3': 'En DM Promotions, la perfección es primordial.',
    'aboutPage.moreDuncan': 'Más sobre Duncan',
    'aboutPage.murderMystery': 'Misterio de Asesinato',
    'aboutPage.experience': 'Experiencia',
    'aboutPage.upcoming': 'Próximos Eventos',
    'aboutPage.services': 'Nuestros Servicios',
    'aboutPage.media': 'Enlaces de Medios',
    'aboutPage.mediaDesc': 'Mira lo que los medios dicen sobre nuestro último evento',
    'aboutPage.instagram': 'Visita nuestro Instagram',
    
    // Events Page
    'eventsPage.title': 'Experiencia de Misterio de Asesinato',
    'eventsPage.immersive': 'Experiencia inmersiva y cautivadora',
    'eventsPage.intro': 'En DM Productions nuestro papel es ayudar a crear una atmósfera inmersiva y cautivadora para la experiencia de misterio de asesinato. Diseñando pistas únicas que mantendrán a los participantes alerta. Guiados por animadores experimentados que crean escenarios interesantes para ayudarte a encontrar al asesino o despistarte, ¡tú decides!',
    'eventsPage.innovation': 'Llevando innovación al sector del misterio de asesinato',
    'eventsPage.plot': 'La trama se complica...',
    'eventsPage.plotDesc': 'Nuestra experiencia gastronómica que añade a toda la experiencia de misterio de asesinato que encarna la gastronomía teatral contemporánea preparada por chefs galardonados.',
    'eventsPage.friend': '¿Amigo, Confidente o Archienemigo?',
    'eventsPage.friendDesc': 'Apariciones especiales de personalidades de las industrias de la Música, TV y Redes Sociales',
    'eventsPage.cinema': 'Calidad de Cine',
    'eventsPage.cinemaDesc': 'Cada elemento de la narrativa es atractivo, nuestros escenarios están diseñados por los mejores de Hollywood. Nuestros guiones están creados con inteligencia, humor y diálogos ingeniosos que mantienen a los participantes adivinando y los involucra emocionalmente.',
    'eventsPage.teamBuilding': 'Ideal para trabajo en equipo y Networking',
    'eventsPage.location': 'La ubicación',
    'eventsPage.locationDesc': 'Nuestras experiencias de misterio de asesinato tienen lugar en España en una ubicación fácil de alcanzar desde el aeropuerto de Málaga pero lo suficientemente remota para elevar el misterio con todas las características de una mansión macabra pero hermosa.',
    'eventsPage.props': 'Los Accesorios',
    'eventsPage.propsDesc': 'Estos accesorios personalizados ciertamente añadirán a la experiencia haciéndola más memorable. Cada escenario será reminiscente de un momento homicida de la pantalla plateada de Hollywood.',
    'eventsPage.host': 'Conoce a la Anfitriona',
    'eventsPage.hostDesc': 'Añadiendo extravagancia e intriga a la experiencia de misterio de asesinato está la artista de renombre mundial y Reina del lujo Debbie Wingham, reconocida globalmente por sus únicas creaciones de diamantes.',
    'eventsPage.silverScreen': 'La Pantalla Plateada',
    'eventsPage.silverScreenDesc': 'Todos los participantes tendrán la oportunidad de aparecer en plataformas de TV globales líderes y la posibilidad de volverse virales en redes sociales.',
    'eventsPage.alist': 'Tratamiento de Primera',
    'eventsPage.alistDesc': 'Nuestros invitados reciben una experiencia exclusiva donde tienen la oportunidad de usar looks de alta costura proporcionados por nuestro equipo de estilistas de celebridades, así como recibir servicios profesionales de cabello y maquillaje.',
    'eventsPage.register': 'Tenemos una extensa gama de paquetes y temas, para más detalles por favor registra tu interés aquí',
    'eventsPage.disclaimer': '*Todos los solicitantes para el show deben ser mayores de 18 años y estar en buena salud',
    
    // Blog Page
    'blogPage.title': 'Reseñas',
    'blogPage.subtitle': 'Explora nuestras reseñas de destinos alrededor del mundo.',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'en' || saved === 'es')) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
