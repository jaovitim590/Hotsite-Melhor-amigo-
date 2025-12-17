// Tipos
export interface Product {
  id: number;
  name: string;
  category: 'alimento' | 'servico' | 'brinquedo' | 'higiene';
  description: string;
  price: number;
  image: string;
  featured: boolean;
}


export const productsData: Product[] = [
  {
    id: 1,
    name: "Ração Premium",
    category: "alimento",
    description: "No Petshop 'Melhor Amigo', oferecemos uma seleção de rações premium para cães e gatos. Essas rações são formuladas com ingredientes de alta qualidade, garantindo uma nutrição balanceada e adequada para o seu pet. Temos opções para diferentes idades, raças e necessidades específicas, proporcionando uma dieta saudável e saborosa para o seu melhor amigo.",
    price: 149.90,
    image: "/produtos/racao-premium.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Serviço de Tosa Especializada",
    category: "servico",
    description: "Proporcionamos serviços profissionais de tosa para cães de todas as raças. Nossos tosadores experientes e qualificados utilizam técnicas avançadas para garantir que seu pet tenha um visual impecável. Além de cortes de pelos personalizados, também realizamos higienização e cuidados especiais, como limpeza de ouvidos e corte de unhas, deixando seu cãozinho limpo e bem cuidado.",
    price: 89.90,
    image: "/produtos/tosa.jpg",
    featured: true
  },
  {
    id: 3,
    name: "Banho Relaxante",
    category: "servico",
    description: "No Petshop 'Melhor Amigo', oferecemos banhos relaxantes para cães e gatos. Utilizamos produtos de qualidade, seguros e adequados para cada tipo de pelagem, garantindo uma limpeza profunda e refrescante. Nossos profissionais carinhosos proporcionam um ambiente tranquilo e seguro para que seu pet desfrute de um banho agradável, deixando-o com uma pelagem macia, brilhante e cheirosa.",
    price: 59.90,
    image: "/produtos/banho.jpg",
    featured: false
  },
  {
    id: 4,
    name: "Brinquedos Interativos",
    category: "brinquedo",
    description: "Valorizamos o enriquecimento e a diversão dos animais, por isso oferecemos uma variedade de brinquedos interativos. Esses brinquedos estimulam a mente e o corpo do seu pet, promovendo o exercício físico e mental. Desde brinquedos de mastigação duráveis até jogos interativos, temos opções para cães e gatos de todos os tamanhos e idades, garantindo horas de entretenimento e diversão saudável.",
    price: 34.90,
    image: "/produtos/brinquedos.jpg",
    featured: true
  },
  {
    id: 5,
    name: "Produtos de Higiene e Cuidados",
    category: "higiene",
    description: "Na nossa seleção de produtos, você encontrará uma gama de itens de higiene e cuidados para o seu pet. Isso inclui shampoos e condicionadores específicos para diferentes tipos de pelagem, escovas e pentes para manter os pelos desembaraçados e saudáveis, produtos de limpeza auricular e ocular, além de acessórios essenciais como coleiras, guias e comedouros. Tudo o que você precisa para manter seu animalzinho limpo, confortável e bem cuidado.",
    price: 45.90,
    image: "../produtos/higiene.jpg",
    featured: false
  }
];

export const fetchProducts = async (): Promise<Product[]> => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData);
    }, 800);
  });
};

