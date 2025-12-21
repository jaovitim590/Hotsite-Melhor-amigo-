import { type GalleryPhoto, fetchGalleryPhotos } from "../seeds/Galery"
import { useState, useEffect } from "react"

export const Galeria = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null)
  const [filter, setFilter] = useState<'todos' | 'cachorro' | 'gato'>('todos')

  useEffect(() => {
    const loadPhotos = async () => {
      const data = await fetchGalleryPhotos()
      setPhotos(data)
      setLoading(false)
    }
    loadPhotos()
  }, [])

  const filteredPhotos = photos.filter(photo => 
    filter === 'todos' ? true : photo.petType === filter
  )

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
      
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col justify-self-center ">
        <div className="text-center mb-12 flex flex-col items-center">
          <h1 className="text-5xl font-bold text-green-700 mb-4">
            Galeria de Fotos 📸
          </h1>
          <div className="w-24 h-1 bg-green-500 rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl">
            Conheça alguns dos nossos adoráveis clientes! Cada foto conta uma história de amor e cuidado.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8 pb-5">
          <button
            onClick={() => setFilter('todos')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              filter === 'todos'
                ? 'bg-green-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border-2 border-green-200 hover:border-green-400'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('cachorro')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              filter === 'cachorro'
                ? 'bg-green-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border-2 border-green-200 hover:border-green-400'
            }`}
          >
            🐕 Cachorros
          </button>
          <button
            onClick={() => setFilter('gato')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              filter === 'gato'
                ? 'bg-green-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border-2 border-green-200 hover:border-green-400'
            }`}
          >
            🐱 Gatos
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-green-600 text-xl">
            Carregando fotos...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPhotos.map((photo) => (
              <PhotoCard 
                key={photo.id} 
                photo={photo}
                onClick={() => setSelectedPhoto(photo)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)} 
        />
      )}
    </div>
  )
}

const PhotoCard = ({ photo, onClick }: { photo: GalleryPhoto; onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
    >
      
      <div className="relative h-64 bg-linear-to-br from-green-100 to-green-50 overflow-hidden">
        <img
          src={photo.image}
          alt={photo.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-black opacity-80 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ver mais
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{photo.petName}</h3>
        <p className="text-sm text-green-600 font-semibold mb-2">{photo.service}</p>
        <p className="text-gray-600 text-sm line-clamp-2">{photo.description}</p>
      </div>
    </div>
  )
}

const PhotoModal = ({ photo, onClose }: { photo: GalleryPhoto; onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <div className="sticky top-0 bg-white p-4 flex justify-between items-center border-b border-gray-200 z-10">
          <h2 className="text-2xl font-bold text-gray-800">{photo.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            ×
          </button>
        </div>

        <div className="relative bg-linear-to-br from-green-50 to-green-100">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full max-h-125 object-contain"
            onError={(e) => {
              e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect fill='%2322c55e' width='800' height='500'/%3E%3Ctext fill='white' font-size='100' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3E${photo.petType === 'cachorro' ? '🐕' : '🐱'}%3C/text%3E%3C/svg%3E`
            }}
          />
        </div>

        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{photo.petType === 'cachorro' ? '🐕' : '🐱'}</span>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">{photo.petName}</h3>
              <p className="text-green-600 font-semibold">{photo.service}</p>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {photo.description}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <span className="text-gray-500">
              📅 {new Date(photo.date).toLocaleDateString('pt-BR', { 
                day: '2-digit', 
                month: 'long', 
                year: 'numeric' 
              })}
            </span>
            <button
              onClick={onClose}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}