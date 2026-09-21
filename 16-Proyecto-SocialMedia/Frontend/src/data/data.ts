import type { Publication, User } from '../types/index';

// Usuario autenticado de prueba
export const currentUser: User = {
  _id: 'usr-1',
  name: 'Alex Developer',
  nick: 'alexdev',
  email: 'alex@bubbleweb.com',
  image: 'https://i.pravatar.cc/150?img=11'
};

// Lista simulada de publicaciones
export const initialPosts: Publication[] = [
  {
    _id: 'post-101',
    user: {
      _id: 'usr-2',
      name: 'María García',
      nick: 'mariag',
      email: 'maria@bubbleweb.com',
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
      email: 'carlos@bubbleweb.com',
      image: 'https://i.pravatar.cc/150?img=8'
    },
    text: 'Construyendo el feed de noticias con React, TypeScript y CSS Modules. ¡Quedando impecable!',
    file: 'https://picsum.photos/600/300',
    created_at: 'Hace 1 hora'
  }
];