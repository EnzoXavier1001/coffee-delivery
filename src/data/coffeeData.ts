import { v4 as uuidv4 } from 'uuid';
import { ICoffee } from "../@types/Coffee"


export const coffeeData: ICoffee[] = [
    { id: uuidv4(), name: 'Expresso Tradicional', description: 'O tradicional café feito com água quente e grãos moídos', tags: ['Tradicional'], amount: 9.90},
    { id: uuidv4(), name: 'Expresso Americano', description: 'Expresso diluído, menos intenso que o tradicional', tags: ['Tradicional'], amount: 9.90},
    { id: uuidv4(), name: 'Expresso Cremoso', description: 'Café expresso tradicional com espuma cremosa' , tags: ['Tradicional'], amount: 9.90},
    { id: uuidv4(), name: 'Expresso Gelado', description: 'Bebida preparada com café expresso e cubos de gelo' , tags: ['Tradicional', 'Gelado'], amount: 9.90},
    { id: uuidv4(), name: 'Café com Leite', description: 'Meio a meio de expresso tradicional com leite vaporizado' , tags: ['Tradicional', 'Com Leite'], amount: 9.90},
    { id: uuidv4(), name: 'Latte', description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa' , tags: ['Tradicional', 'Com Leite'], amount: 9.90},
    { id: uuidv4(), name: 'Capuccino', description: 'Bebida com canela feita de doses iguais de café, leite e espuma' , tags: ['Tradicional', 'Com Leite'], amount: 9.90},
    { id: uuidv4(), name: 'Macchiato', description: 'Café expresso misturado com um pouco de leite quente e espuma' , tags: ['Tradicional', 'Com Leite'], amount: 9.90},
    { id: uuidv4(), name: 'Mocaccino', description: 'Café expresso com calda de chocolate, pouco leite e espuma' , tags: ['Tradicional', 'Com Leite'], amount: 9.90},
    { id: uuidv4(), name: 'Chocolate Quente', description: 'Bebida feita com chocolate dissolvido no leite quente e café' , tags: ['Especial', 'Com Leite'], amount: 9.90},
    { id: uuidv4(), name: 'Cubano', description: 'Drink gelado de café expresso com rum, creme de leite e hortelã' , tags: ['Especial', 'Alcoólico', 'Gelado'], amount: 9.90},
    { id: uuidv4(), name: 'Havaiano', description: 'Bebida adocicada preparada com café e leite de coco' , tags: ['Especial'], amount: 9.90},
    { id: uuidv4(), name: 'Árabe', description: 'Bebida preparada com grãos de café árabe e especiarias' , tags: ['Especial'], amount: 9.90},
    { id: uuidv4(), name: 'Irlandês', description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly' , tags: ['Especial', 'Alcoólico'], amount: 9.90},
]