import { Header } from "../components/Header";

export const Home = () => {
  return (
    <>
    <Header/>
    {content()}
    </>
  )
}

const content = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen flex justify-center">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-6">
            Bem-vindo ao Petshop "Melhor Amigo"! 🐾
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed text-center">
            <p className="text-lg bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              No Petshop "Melhor Amigo", nós entendemos que seu animal de estimação é
              mais do que apenas um bichinho, é um membro especial da sua família. Com
              isso em mente, estamos comprometidos em fornecer cuidados excepcionais e
              serviços de alta qualidade para garantir que seu melhor amigo tenha uma vida
              feliz e saudável.
            </p>

            <p className="text-lg p-6">
              Com uma equipe dedicada e apaixonada por animais, nossos profissionais
              treinados estão prontos para oferecer os melhores cuidados para o seu pet.
              Desde serviços de tosa profissional, onde deixaremos seu animalzinho com um
              visual impecável, até a limpeza e higienização completa, proporcionamos um
              ambiente seguro e tranquilo para que seu amigo se sinta confortável durante
              todo o processo.
            </p>

            <p className="text-lg bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              Sabemos que a alimentação é fundamental para a saúde do seu pet, por isso
              oferecemos uma ampla variedade de rações de alta qualidade e alimentos
              balanceados, adaptados às necessidades individuais de cada animal. Nossos
              especialistas estão disponíveis para fornecer orientação personalizada e ajudá-lo a escolher a melhor opção para o seu amiguinho.
            </p>

            <p className="text-lg p-6">
              No Petshop "Melhor Amigo", também acreditamos na importância da
              socialização e diversão para o bem-estar dos animais. Por isso, oferecemos
              momentos especiais de brincadeiras e interação em nosso espaço dedicado,
              garantindo que seu pet se divirta e faça novos amigos. Além disso, temos uma
              ampla variedade de brinquedos e acessórios para enriquecer a vida do seu
              animalzinho.
            </p>

            <p className="text-lg bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              Nossa galeria de fotos é o reflexo do nosso amor e cuidado pelos animais. Lá,
              você poderá ver alguns dos adoráveis clientes que já passaram pelo nosso
              petshop. É um verdadeiro prazer atender a cada um deles e contribuir para o
              seu bem-estar e felicidade.
            </p>

            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-8 rounded-xl mt-8 shadow-md">
              <p className="text-lg leading-relaxed">
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
  );
}