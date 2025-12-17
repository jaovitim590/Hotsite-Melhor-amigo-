import { Header } from "../components/Header"
import { type Product, fetchProducts } from "../seeds/Produto"
import { useState, useEffect } from "react"

export const Produtos = () => {
  const [produtos, setProdutos] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts()
      setProdutos(data)
      setLoading(false)
    }
    loadProducts()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col justify-self-center items-center">

        <div className="text-center mb-12 flex flex-col items-center pb-10">
          <h1 className="text-5xl font-bold text-green-700 mb-4">
            Nossos Produtos e Serviços
          </h1>
          <div className="w-24 h-1 bg-green-500 rounded-full"></div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-green-600 text-xl">
            Carregando produtos...
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-start gap-8 mb-12">
            {produtos.map((produto) => (
              <Produto key={produto.id} {...produto} />
            ))}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-12 border-l-4 border-green-500 mx-auto max-w-4xl justify-self-center">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            Esses são apenas alguns dos produtos disponíveis no Petshop "Melhor Amigo".
            Temos um catálogo completo e diversificado, cuidadosamente selecionado para
            atender às necessidades dos animais de estimação. Nossa equipe terá prazer
            em orientá-lo e ajudá-lo a escolher os melhores produtos para o seu amiguinho
            de quatro patas! 🐾
          </p>
        </div>
      </div>
    </div>
  )
}

const Produto = ({ id, name, category, description, price, image, featured }: Product) => {
  const categoryColors = {
    alimento: "bg-green-100 text-green-700",
    servico: "bg-blue-100 text-blue-700",
    brinquedo: "bg-purple-100 text-purple-700",
    higiene: "bg-teal-100 text-teal-700"
  }

  const categoryLabels = {
    alimento: "Alimento",
    servico: "Serviço",
    brinquedo: "Brinquedo",
    higiene: "Higiene"
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-green-100 w-full max-w-sm flex flex-col">

      <div className={`text-sm font-bold py-2 px-4 text-center ${featured ? 'bg-gradient-to-r from-green-500 to-green-400 text-white' : 'bg-transparent h-10'}`}>
        {featured && '⭐ Destaque'}
      </div>

      <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <img
          className="max-h-40 w-auto object-contain rounded-lg"
          src={image}
          alt={name}
          onError={(e) => {
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%2322c55e' width='200' height='200'/%3E%3Ctext fill='white' font-size='24' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3E🐾%3C/text%3E%3C/svg%3E"
          }}
        />
      </div>

      <div className="p-6">
        <div className="mb-3">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[category]}`}>
            {categoryLabels[category]}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-green-100">
          <span className="text-3xl font-bold text-green-600">
            R$ {price.toFixed(2)}
          </span>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  )
}