import { Header } from "../components/Header"
import { useState } from "react"

export const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    newsletter: false
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário enviado:", formData)
    setSubmitted(true)

    setTimeout(() => {
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
        newsletter: false
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
      
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col justify-self-center">
        <div className="text-center mb-12 flex flex-col items-center">
          <h1 className="text-5xl font-bold text-green-700 mb-4">
            Entre em Contato
          </h1>
          <div className="w-24 h-1 bg-green-500 rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl">
            Estamos aqui para ajudar! Entre em contato conosco e teremos prazer em atendê-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h2>
            
            {submitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600">Obrigado pelo contato! Responderemos em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-gray-700 font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Como podemos ajudar você e seu pet?"
                  />
                </div>
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <div>
                      <span className="font-semibold text-gray-800 block mb-1">
                        📧 Assinar Newsletter
                      </span>
                      <span className="text-sm text-gray-600">
                        Receba atualizações, dicas e promoções exclusivas para seu pet!
                      </span>
                    </div>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6 h-full bg-white rounded-2xl shadow-lg  border-2 border-green-100 flex flex-col justify-between" >
            <div className="p-5 flex flex-col">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-3 ">Nossas Informações</h2>
              
              <div className="space-y-6 flex flex-col  gap-5">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3 shrink-0">
                    <span className="text-2xl ">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      Rua dos Pets, 123 - Centro<br />
                      Rio Acima, MG - CEP 34300-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3 shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">Telefone</h3>
                    <p className="text-gray-600">
                      (31) 3456-7890<br />
                      <span className="flex">(31) 98765-4321 <img className="max-w-4 max-h-4"  src="whatsapp.png" alt="" /></span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3 shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">E-mail</h3>
                    <p className="text-gray-600">
                      contato@melhoramigo.com.br<br />
                      agendamento@melhoramigo.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3 hrink-0">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 14h<br />
                      Domingo: <span className="text-red-700 font-bold">Fechado</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-r from-green-500 to-green-400 rounded-b-2xl shadow-lg p-8 text-white ">
              <h2 className="text-3xl font-bold mb-6">Siga-nos nas Redes Sociais! 🐾</h2>
              <div className="flex gap-4">
                <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-110 shadow-md">
                  📘 Facebook
                </button>
                <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-110 shadow-md">
                  📷 Instagram
                </button>
              </div>
              <p className="mt-4 text-green-50">
                Acompanhe nosso dia a dia, veja fotos dos pets e fique por dentro das novidades!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}