export interface GalleryPhoto {
  id: number;
  title: string;
  petName: string;
  petType: 'cachorro' | 'gato' | 'outro';
  service: string;
  image: string;
  description: string;
  date: string;
}

export const galleryData: GalleryPhoto[] = [
  {
    id: 1,
    title: "Thor após a tosa",
    petName: "Thor",
    petType: "cachorro",
    service: "Tosa Especializada",
    image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&q=80",
    description: "Thor ficou lindo com seu novo corte! Um Golden Retriever cheio de energia que adora brincar.",
    date: "2024-12-10"
  },
  {
    id: 2,
    title: "Mia no banho relaxante",
    petName: "Mia",
    petType: "gato",
    service: "Banho Relaxante",
    image: "https://blog-static.petlove.com.br/wp-content/uploads/2018/11/gato-tomando-banho.jpg",
    description: "Mia aproveitou seu banho relaxante e saiu com os pelos macios e brilhantes.",
    date: "2024-12-08"
  },
  {
    id: 3,
    title: "Bob brincando",
    petName: "Bob",
    petType: "cachorro",
    service: "Day Care",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80",
    description: "Bob se divertiu muito no nosso espaço de recreação com novos amiguinhos!",
    date: "2024-12-12"
  },
  {
    id: 4,
    title: "Luna toda estilosa",
    petName: "Luna",
    petType: "cachorro",
    service: "Tosa + Laço",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&q=80",
    description: "Luna ficou uma princesa com sua tosa e laço especial. Poodle sempre elegante!",
    date: "2024-12-05"
  },
  {
    id: 5,
    title: "Simba dormindo",
    petName: "Simba",
    petType: "gato",
    service: "Spa Felino",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&q=80",
    description: "Depois do spa, Simba tirou uma soneca merecida. Que fofura!",
    date: "2024-12-11"
  },
  {
    id: 6,
    title: "Max e Rex juntos",
    petName: "Max & Rex",
    petType: "cachorro",
    service: "Socialização",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&q=80",
    description: "Max e Rex fizeram amizade rápido! Nosso espaço de socialização é perfeito para novos amigos.",
    date: "2024-12-09"
  },
  {
    id: 7,
    title: "Nina após higienização",
    petName: "Nina",
    petType: "gato",
    service: "Higienização Completa",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=500&q=80",
    description: "Nina toda limpinha e cheirosa após sua sessão de higienização completa.",
    date: "2024-12-07"
  },
  {
    id: 8,
    title: "Buddy com novo corte",
    petName: "Buddy",
    petType: "cachorro",
    service: "Tosa Higiênica",
    image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=500&q=80",
    description: "Buddy adorou seu novo visual! Yorkshire sempre elegantes.",
    date: "2024-12-13"
  },
  {
    id: 9,
    title: "Bella na área de recreação",
    petName: "Bella",
    petType: "cachorro",
    service: "Recreação",
    image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=500&q=80",
    description: "Bella se divertindo com os brinquedos! Momentos de alegria garantidos.",
    date: "2024-12-06"
  }
];

export const fetchGalleryPhotos = async (): Promise<GalleryPhoto[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(galleryData);
    }, 800);
  });
};


export const fetchPhotosByPetType = async (petType: GalleryPhoto['petType']): Promise<GalleryPhoto[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = galleryData.filter(p => p.petType === petType);
      resolve(filtered);
    }, 600);
  });
};