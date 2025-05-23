
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Info } from "lucide-react";

const AboutLineTab: React.FC = () => {
  return (
    <TabsContent value="linha" className="space-y-4">
      <div className="flex items-start space-x-3">
        <Info className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">Propósito da Linha Delta Run Muscle</h3>
          <p className="text-sm sm:text-base">A linha Delta Run Muscle foi criada para atender atletas e amantes de fitness que buscam peças com alta performance, conforto e estilo. Cada peça combina tecnologia inovadora, materiais premium e design moderno, garantindo durabilidade e versatilidade para treinos intensos ou uso casual.</p>
        </div>
      </div>
      
      <div className="my-4">
        <h3 className="text-lg font-semibold mb-2">Características Principais</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
          <li>Tecnologia de secagem rápida e respirabilidade para máxima performance.</li>
          <li>Design ergonômico que valoriza o corpo e oferece liberdade de movimento.</li>
          <li>Estilo versátil, perfeito para academia, corridas ou até mesmo looks casuais.</li>
        </ul>
      </div>
      
      <div className="my-4">
        <h3 className="text-lg font-semibold mb-2">Peças da Linha</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
          <li><span className="font-medium">Camisetas Performance:</span> Feitas com tecido leve e resistente, ideais para treinos intensos.</li>
          <li><span className="font-medium">Calças e Shorts Atléticos:</span> Design ajustável e bolsos funcionais.</li>
          <li><span className="font-medium">Tops Esportivos:</span> Com suporte reforçado para atividades de alto impacto.</li>
          <li><span className="font-medium">Jaquetas e Casacos:</span> Perfeitos para dias frios, com proteção contra vento e umidade.</li>
        </ul>
      </div>
    </TabsContent>
  );
};

export default AboutLineTab;
