import { ICoffee } from "../@types/Coffee";

const isLocalEnvironment = import.meta.env.MODE === 'development';

const buildImagePath = (imageName: string) => {
  return isLocalEnvironment ? `/src/assets/${imageName}` : `https://raw.githubusercontent.com/EnzoXavier1001/coffee-delivery/main/src/assets/${imageName}`;
};

export const coffeeData: ICoffee[] = [
  { id: 'expresso-tradicional', img: buildImagePath('Image.png'), name: 'Expresso Tradicional', description: 'O tradicional café feito com água quente e grãos moídos', tags: ['Tradicional'], price: 3.50 },
  { id: 'expresso-americano', img: buildImagePath('Image-1.png'), name: 'Expresso Americano', description: 'Expresso diluído, menos intenso que o tradicional', tags: ['Tradicional'], price: 4.20 },
  { id: 'expresso-cremoso', img: buildImagePath('Image-2.png'), name: 'Expresso Cremoso', description: 'Café expresso tradicional com espuma cremosa' , tags: ['Tradicional'], price: 4.80 },
  { id: 'expresso-gelado', img: buildImagePath('Image-3.png'), name: 'Expresso Gelado', description: 'Bebida preparada com café expresso e cubos de gelo' , tags: ['Tradicional', 'Gelado'], price: 5.00 },
  { id: 'cafe-com-leite', img: buildImagePath('Image-4.png'), name: 'Café com Leite', description: 'Meio a meio de expresso tradicional com leite vaporizado' , tags: ['Tradicional', 'Com Leite'], price: 6.00 },
  { id: 'latte', img: buildImagePath('Image-5.png'), name: 'Latte', description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa' , tags: ['Tradicional', 'Com Leite'], price: 7.00 },
  { id: 'cappucino', img: buildImagePath('Image-6.png'), name: 'Capuccino', description: 'Bebida com canela feita de doses iguais de café, leite e espuma' , tags: ['Tradicional', 'Com Leite'], price: 5.50 },
  { id: 'macchiato', img: buildImagePath('Image-7.png'), name: 'Macchiato', description: 'Café expresso misturado com um pouco de leite quente e espuma' , tags: ['Tradicional', 'Com Leite'], price: 4.50 },
  { id: 'mocaccino', img: buildImagePath('Image-8.png'), name: 'Mocaccino', description: 'Café expresso com calda de chocolate, pouco leite e espuma' , tags: ['Tradicional', 'Com Leite'], price: 6.50 },
  { id: 'chocolate-quente', img: buildImagePath('Image-9.png'), name: 'Chocolate Quente', description: 'Bebida feita com chocolate dissolvido no leite quente e café' , tags: ['Especial', 'Com Leite'], price: 8.00 },
  { id: 'cubano', img: buildImagePath('Image-10.png'), name: 'Cubano', description: 'Drink gelado de café expresso com rum, creme de leite e hortelã' , tags: ['Especial', 'Alcoólico', 'Gelado'], price: 7.50 },
  { id: 'havaiano', img: buildImagePath('Image-11.png'), name: 'Havaiano', description: 'Bebida adocicada preparada com café e leite de coco' , tags: ['Especial'], price: 6.80 },
  { id: 'arabe', img: buildImagePath('Image-12.png'), name: 'Árabe', description: 'Bebida preparada com grãos de café árabe e especiarias' , tags: ['Especial'], price: 5.80 },
  { id: 'irlandes', img: buildImagePath('Image-13.png'), name: 'Irlandês', description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly' , tags: ['Especial', 'Alcoólico'], price: 8.50 },
];

