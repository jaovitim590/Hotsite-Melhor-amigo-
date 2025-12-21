import { useState, useEffect } from 'react';
import { Sparkles, Heart, Star, Bone } from 'lucide-react';

export default function Home() {
  return (
    <>
      {content()}
    </>
  );
}

const content = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSections(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-section').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 3,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2
  }));

  const floatingIcons = [
    { Icon: Heart, x: 10, y: 20, delay: 0 },
    { Icon: Star, x: 85, y: 15, delay: 1 },
    { Icon: Bone, x: 15, y: 70, delay: 2 },
    { Icon: Sparkles, x: 90, y: 65, delay: 1.5 }
  ];

  return (
    <div className="relative bg-linear-to-b from-green-50 via-white to-emerald-50 min-h-screen overflow-hidden">

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-green-400 opacity-20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
        
        {floatingIcons.map(({ Icon, x, y, delay }, i) => (
          <div
            key={i}
            className="absolute animate-bounce opacity-10"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDelay: `${delay}s`,
              animationDuration: '3s'
            }}
          >
            <Icon className="w-8 h-8 text-green-500" />
          </div>
        ))}
      </div>

      <div className="relative flex justify-center">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 space-y-8 border-4 border-green-100 flex flex-col justify-evenly gap-3">

            <div className="relative ">
              <div className="absolute inset-0 bg-linear-to-r from-green-400 via-emerald-400 to-green-400 opacity-10 animate-gradient" />
              <h2 className="relative text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
                <span className="bg-linear-to-r from-green-600 via-emerald-600 to-green-600 bg-clip-text text-transparent animate-gradient">
                  Bem-vindo ao Petshop
                </span>
                <br />
                <span className="text-green-700 inline-flex items-center gap-3">
                  "Melhor Amigo"
                  <Heart className="inline w-10 h-10 text-red-500 animate-pulse" />
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div 
                className="animate-section group"
                data-index="0"
                style={{
                  opacity: visibleSections.has(0) ? 1 : 0,
                  transform: visibleSections.has(0) ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out'
                }}
              >
                <div className="relative text-lg bg-linear-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-l-8 border-green-500 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-10 transform rotate-12">
                    <Sparkles className="w-32 h-32 text-green-500" />
                  </div>
                  <p className="relative z-10">
                    No Petshop "Melhor Amigo", nós entendemos que seu animal de estimação é
                    mais do que apenas um bichinho, é um membro especial da sua família. Com
                    isso em mente, estamos comprometidos em fornecer cuidados excepcionais e
                    serviços de alta qualidade para garantir que seu melhor amigo tenha uma vida
                    feliz e saudável.
                  </p>
                </div>
              </div>

              <div 
                className="animate-section"
                data-index="1"
                style={{
                  opacity: visibleSections.has(1) ? 1 : 0,
                  transform: visibleSections.has(1) ? 'translateX(0)' : 'translateX(-50px)',
                  transition: 'all 0.8s ease-out 0.2s'
                }}
              >
                <div className="text-lg p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-100 hover:border-green-300 transform hover:scale-[1.02]">
                  <p>
                    Com uma equipe dedicada e apaixonada por animais, nossos profissionais
                    treinados estão prontos para oferecer os melhores cuidados para o seu pet.
                    Desde serviços de tosa profissional, onde deixaremos seu animalzinho com um
                    visual impecável, até a limpeza e higienização completa, proporcionamos um
                    ambiente seguro e tranquilo para que seu amigo se sinta confortável durante
                    todo o processo.
                  </p>
                </div>
              </div>

              <div 
                className="animate-section"
                data-index="2"
                style={{
                  opacity: visibleSections.has(2) ? 1 : 0,
                  transform: visibleSections.has(2) ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out 0.3s'
                }}
              >
                <div className="relative text-lg bg-linear-to-r from-emerald-50 to-green-50 p-8 rounded-2xl border-l-8 border-emerald-500 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden">
                  <div className="absolute bottom-0 left-0 opacity-10">
                    <Bone className="w-40 h-40 text-green-500 transform -rotate-45" />
                  </div>
                  <p className="relative z-10">
                    Sabemos que a alimentação é fundamental para a saúde do seu pet, por isso
                    oferecemos uma ampla variedade de rações de alta qualidade e alimentos
                    balanceados, adaptados às necessidades individuais de cada animal. Nossos
                    especialistas estão disponíveis para fornecer orientação personalizada e ajudá-lo a escolher a melhor opção para o seu amiguinho.
                  </p>
                </div>
              </div>

              <div 
                className="animate-section"
                data-index="3"
                style={{
                  opacity: visibleSections.has(3) ? 1 : 0,
                  transform: visibleSections.has(3) ? 'translateX(0)' : 'translateX(50px)',
                  transition: 'all 0.8s ease-out 0.4s'
                }}
              >
                <div className="text-lg p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-emerald-100 hover:border-emerald-300 transform hover:scale-[1.02]">
                  <p>
                    No Petshop "Melhor Amigo", também acreditamos na importância da
                    socialização e diversão para o bem-estar dos animais. Por isso, oferecemos
                    momentos especiais de brincadeiras e interação em nosso espaço dedicado,
                    garantindo que seu pet se divirta e faça novos amigos. Além disso, temos uma
                    ampla variedade de brinquedos e acessórios para enriquecer a vida do seu
                    animalzinho.
                  </p>
                </div>
              </div>

              {/* Seção 5 */}
              <div 
                className="animate-section"
                data-index="4"
                style={{
                  opacity: visibleSections.has(4) ? 1 : 0,
                  transform: visibleSections.has(4) ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out 0.5s'
                }}
              >
                <div className="relative text-lg bg-linear-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-l-8 border-green-500 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-10">
                    <Star className="w-36 h-36 text-green-500 animate-spin" style={{ animationDuration: '20s' }} />
                  </div>
                  <p className="relative z-10">
                    Nossa galeria de fotos é o reflexo do nosso amor e cuidado pelos animais. Lá,
                    você poderá ver alguns dos adoráveis clientes que já passaram pelo nosso
                    petshop. É um verdadeiro prazer atender a cada um deles e contribuir para o
                    seu bem-estar e felicidade.
                  </p>
                </div>
              </div>

              <div 
                className="animate-section"
                data-index="5"
                style={{
                  opacity: visibleSections.has(5) ? 1 : 0,
                  transform: visibleSections.has(5) ? 'scale(1)' : 'scale(0.9)',
                  transition: 'all 0.8s ease-out 0.6s'
                }}
              >
                <div className="relative bg-linear-to-r from-green-600 via-emerald-600 to-green-600 text-white p-10 rounded-2xl mt-8 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 animate-gradient">
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-32 h-32 rounded-full border-2 border-white animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: '4s'
                        }}
                      />
                    ))}
                  </div>
                  <p className="relative z-10 text-lg leading-relaxed">
                    Estamos ansiosos para conhecê-lo e ao seu melhor amigo! Visite-nos no
                    Petshop "Melhor Amigo" e descubra a diferença que fazemos na vida dos
                    animais de estimação. Entre em contato conosco por telefone, e-mail ou através
                    do nosso formulário de contato no nosso site. Seu pet merece o melhor, e nós
                    estamos aqui para fornecer exatamente isso. Confie no Petshop "Melhor
                    Amigo" para cuidar do seu melhor amigo como se fosse nosso próprio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
      `}</style>
    </div>
  );
}