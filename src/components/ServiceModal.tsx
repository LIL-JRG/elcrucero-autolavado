import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Service } from '@/data/services';
import { Check, MessageCircle } from 'lucide-react';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');

  if (!service) return null;

  const handleWhatsAppContact = () => {
    const vehicleTypeMap = {
      automoviles: 'Automóvil',
      camionetas: 'Camioneta',
      motocicletas: 'Motocicleta',
      mototaxis: 'Mototaxi'
    };
    
    const vehicleTypeName = vehicleTypeMap[service.vehicleType];
    
    // Create a formatted list of features
    const featuresList = service.features
      .map(feature => `• ${feature}`)
      .join('\n');
    
    // Build the message in parts to ensure proper encoding
    const messageParts = [
      `¡Hola! Me interesa el ${service.name} para mi ${vehicleTypeName}.`,
      '\n\n',
      '📋 *Mis datos:*',
      `\n• Nombre: ${name}`,
      `\n• Vehículo: ${vehicle}`,
      `\n• Servicio: ${service.name}`,
      `\n• Precio: ${service.price}`,
      '\n\n*Incluye:*',
      `\n${featuresList}`,
      '\n\n¿Podrían ayudarme a agendar una cita?'
    ];
    
    // Join the message and encode it
    const message = messageParts.join('');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=529711135744&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const isFormValid = name.trim() && vehicle.trim();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-md border-border/50">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground">
            {service.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-muted/50 rounded-lg p-3 sm:p-4 border border-border/30">
            <p className="text-lg sm:text-xl font-semibold text-primary mb-2">{service.price}</p>
            <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-foreground text-sm sm:text-base">Servicios incluidos:</h4>
            <div className="grid gap-2">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-border/30 pt-4 sm:pt-6">
            <h4 className="font-semibold mb-4 text-foreground text-sm sm:text-base">Solicita tu cita ahora</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground text-sm">Tu nombre</Label>
                <Input
                  id="name"
                  placeholder="Ingresa tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 bg-input border-border/50 focus:border-primary text-sm sm:text-base"
                />
              </div>
              
              <div>
                <Label htmlFor="vehicle" className="text-foreground text-sm">
                  Detalles de tu vehículo
                </Label>
                <Input
                  id="vehicle"
                  placeholder="Ej: Honda Civic 2020 Sedán, color blanco"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="mt-1 bg-input border-border/50 focus:border-primary text-sm sm:text-base"
                />
              </div>
              
              <Button
                onClick={handleWhatsAppContact}
                disabled={!isFormValid}
                className={`w-full transition-[var(--transition-smooth)] text-sm sm:text-lg py-4 sm:py-6 ${
                  isFormValid 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--shadow-primary)]' 
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                ¡Lo quiero! - Contactar por WhatsApp
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Al hacer click serás redirigido a WhatsApp para completar tu solicitud
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};