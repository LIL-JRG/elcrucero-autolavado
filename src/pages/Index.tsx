import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageSlider } from '@/components/ImageSlider';
import { Car, Truck, Bike, ChevronDown, Facebook, MessageCircle, MapPin } from 'lucide-react';
import { MototaxiIcon } from '@/components/MototaxiIcon';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants with proper types
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const item: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const vehicleTypes = [
    {
      id: 'automoviles',
      name: 'Automóviles',
      icon: Car,
      description: 'Servicios especializados para autos'
    },
    {
      id: 'camionetas', 
      name: 'Camionetas',
      icon: Truck,
      description: 'Lavado premium para camionetas'
    },
    {
      id: 'motocicletas',
      name: 'Motocicletas', 
      icon: Bike,
      description: 'Cuidado especial para motos'
    },
    {
      id: 'mototaxis',
      name: 'Mototaxis',
      icon: MototaxiIcon,
      description: 'Servicio para mototaxis'
    }
  ];

  // Show loading state while mounting
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-foreground">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ImageSlider />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      <motion.div 
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center min-h-screen flex flex-col justify-center"
        initial="hidden"
        animate="show"
        variants={container}
      >
          <motion.div
            variants={item}
            className="max-w-4xl mx-auto py-20"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-lg leading-tight"
              variants={item}
            >
              Autolavado <span className="text-primary">El Crucero</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6"
              variants={item}
            >
              El mejor cuidado para tu vehículo
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-8"
              variants={item}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100064603132192"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className='w-5 h-5' role="img" viewBox="0 0 24 24" fill='#fff' xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
              </a>
              <a
                href="https://wa.me/529711138346?text=Buen%20día,%20me%20gustaría%20saber%20más%20información%20sobre%20los%20paquetes%20disponibles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className='w-5 h-5' role="img" viewBox="0 0 24 24" fill='#fff' xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
              <a
                href="https://maps.app.goo.gl/pKvYDe1p9YtsxFaU7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-full transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Visítanos
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-20"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {vehicleTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.button
                  key={type.id}
                  variants={item}
                  onClick={() => navigate(`/servicios/${type.id}`)}
                  className="group relative h-28 sm:h-32 md:h-36 flex flex-col items-center justify-center gap-2 sm:gap-3 bg-[var(--gradient-card)] backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 hover:bg-[var(--gradient-primary)] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  <div className="text-center px-2">
                    <div className="font-semibold text-sm sm:text-base text-foreground group-hover:text-white transition-colors">
                      {type.name}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-white/90 transition-colors">
                      {type.description}
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-[var(--gradient-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </motion.button>
              );
            })}
          </motion.div>
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            variants={item}
            animate={{ 
              y: [0, 10, 0],
              transition: { 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut",
                delay: 1 // Start after other animations
              } 
            }}
          >
          </motion.div>
          
          {/* Footer */}
          <motion.footer 
            className="text-center py-4 text-sm text-gray-300"
            variants={item}
          >
            Hecho con 💖 y ☕ por{' '}
            <a 
              href="https://www.instagram.com/jrgmrc.hr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Jorge Rasgado
            </a>
          </motion.footer>
      </motion.div>
    </div>
  );
};

export default Index;
