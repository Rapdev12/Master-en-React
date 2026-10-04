import type { Publication } from '../types/index';




// Lista simulada de publicaciones
export const initialPosts: Publication[] = [
  {
    _id: 'post-101',
    user: {
      _id: 'usr-2',
      name: 'María García',
      nick: 'mariag',
      image: 'https://i.pravatar.cc/150?img=5'
    },
    text: '¡Bienvenidos a BubbleWeb! 🚀 Estoy probando la nueva interfaz de nuestra red social. ¿Qué opinan del diseño?',
    created_at: 'Hace 10 min'
  },
  {
    _id: 'post-102',
    user: {
      _id: 'usr-3',
      name: 'Carlos Ruiz',
      nick: 'carlosr',
      image: 'https://i.pravatar.cc/150?img=8'
    },
    text: 'Construyendo el feed de noticias con React, TypeScript y CSS Modules. ¡Quedando impecable!',
    file: 'https://picsum.photos/600/300',
    created_at: 'Hace 1 hora'
  }
];