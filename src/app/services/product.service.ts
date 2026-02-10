import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Ватні диски Novita Delicate, 100 шт',
      category: 'Ватна продукція',
      description: 'Косметичні ватні диски Novita Delicate забезпечують делікатний догляд та ефективне очищення шкіри.',
      image: 'https://novita.ua/data/product/card/_max_160x285/281302c4/a8ba306f6b38442ba4e3dc53388e2151_635x2000.png',
      features: ['100% натуральна бавовна', 'Прошитий край', 'Не залишають ворсинок']
    },
    {
      id: 2,
      name: 'Гель для інтимної гігієни Novita, 250 мл',
      category: 'Інтимна гігієна',
      description: 'Ніжний гель для щоденної інтимної гігієни, що підтримує природний баланс.',
      image: 'https://novita.ua/data/product/card/_max_160x285/ebe78f2f/3bb3a6459846412fad42fbdcbd8d475d_395x700.png',
      features: ['Збалансований pH', 'Ніжний догляд', 'Гіпоалергенно']
    },
    {
      id: 3,
      name: 'Ватні палички Novita Delicate, 200 шт',
      category: 'Ватна продукція',
      description: 'Ватні палички в зручному поліетиленовому пакеті для щоденних гігієнічних процедур.',
      image: 'https://novita.ua/data/product/card/_max_160x285/07aa0982/773950444eb0426eb1752bb3e26c92ab_1417x1436.png',
      features: ['М’яка бавовна', 'Міцний стік', 'Універсальне використання']
    },
    {
      id: 4,
      name: 'Ватні диски NOVITA Organic, 120 шт',
      category: 'Ватна продукція',
      description: 'Органічні ватні диски для максимально дбайливого догляду за вашою шкірою.',
      image: 'https://novita.ua/data/product/card/_max_160x285/7cefc0f6/317a5e6267e74baaace2c3048905b5ea_553x2000.png',
      features: ['Органічна бавовна', 'Екологічно чистий продукт', 'Для чутливої шкіри']
    },
    {
      id: 5,
      name: 'Молочко для інтимної гігієни Novita, 250 мл',
      category: 'Інтимна гігієна',
      description: 'Кремове молочко для інтимної гігієни з особливо ніжною формулою.',
      image: 'https://novita.ua/data/product/card/_max_160x285/38ce6e54/ed279f8c84d248388c613e8306760dff_395x700.png',
      features: ['Кремова текстура', 'Заспокійливий ефект', 'Дерматологічно протестовано']
    },
    {
      id: 6,
      name: 'Ватні палички Novita Gapchinska, 200 шт',
      category: 'Ватна продукція',
      description: 'Ватні палички в стильній банці з ексклюзивним дизайном від Євгенії Гапчинської.',
      image: 'https://novita.ua/data/product/card/_max_160x285/e1eddcc8/5fef938a3f7746db971de408caf6ea5c_1209x1379.png',
      features: ['Дизайнерська упаковка', 'Зручна банка', 'Висока якість']
    },
    {
      id: 7,
      name: 'Серветки Make up з міцелярною водою, 15 шт',
      category: 'Вологі серветки',
      description: 'Вологі серветки для зняття макіяжу з міцелярною водою та морськими водоростями.',
      image: 'https://novita.ua/data/product/card/_max_160x285/b67f5b7c/6691d5feafba4a4d969ba44390ef8a41_1247x1890.png',
      features: ['З міцелярною водою', 'Ефект зволоження', 'Зручний формат']
    },
    {
      id: 8,
      name: 'Серветки Make up Delicate, 15 шт',
      category: 'Вологі серветки',
      description: 'Делікатні серветки для зняття макіяжу з комплексом олій.',
      image: 'https://novita.ua/data/product/card/_max_160x285/cc77ccbe/3631053bde8348c084580abcebb20fe5_1247x1890.png',
      features: ['Комплекс олій', 'Живлення шкіри', 'Для стійкого макіяжу']
    },
    {
      id: 9,
      name: 'Серветки Intimate з пребіотиком, 15 шт',
      category: 'Вологі серветки',
      description: 'Вологі серветки для інтимної гігієни з пребіотиком Biolin.',
      image: 'https://novita.ua/data/product/card/_max_160x285/d55a8939/b566d8e34b404b47aa939322e7455eb7_1247x1890.png',
      features: ['Пребіотик Biolin', 'Свіжість та комфорт', 'Компактна упаковка']
    },
    {
      id: 10,
      name: 'Серветки для зняття макіяжу Professional, 15 шт',
      category: 'Зняття макіяжу',
      description: 'Професійні серветки для зняття макіяжу з фітокомплексом.',
      image: 'https://novita.ua/data/product/card/_max_160x285/e30ff94f/523e7fc1a1064498b861d78e4b72ce54_428x700.png',
      features: ['Фітокомплекс', 'Глибоке очищення', 'Професійна серія']
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(this.products.filter(p => p.category === category));
  }
}
