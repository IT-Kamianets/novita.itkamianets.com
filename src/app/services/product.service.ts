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
      name: 'Novita Gapchinska Ватні палички в круглій банці, 200 шт',
      category: 'Ватна продукція',
      description: 'Ватні палички в стильній банці з ексклюзивним дизайном від Євгенії Гапчинської.',
      image: 'https://novita.ua/data/product/card/_max_160x285/e1eddcc8/5fef938a3f7746db971de408caf6ea5c_1209x1379.png',
      features: ['Дизайнерська упаковка', 'Зручна банка', 'Висока якість'],
      purchaseUrl: 'https://sfera.ua/palichki-vatni-v-kruglij-banci-novita-gapchinska-200-sht'
    },
    {
      id: 2,
      name: 'NOVITA Organic Косметичні ватні диски, 120 шт',
      category: 'Ватна продукція',
      description: 'Органічні ватні диски для максимально дбайливого догляду за вашою шкірою.',
      image: 'https://novita.ua/data/product/card/_max_160x285/7cefc0f6/317a5e6267e74baaace2c3048905b5ea_553x2000.png',
      features: ['Органічна бавовна', 'Екологічно чистий продукт', 'Для чутливої шкіри'],
      purchaseUrl: 'https://sfera.ua/novita-professional-diski-vatni-kosmetichni-120-sht-35-sht-jasch'
    },
    {
      id: 3,
      name: 'Novita Professional Ватні палички, 200 шт',
      category: 'Ватна продукція',
      description: 'Професійні ватні палички для щоденного використання та косметичних процедур.',
      image: 'https://novita.ua/data/product/card/_max_160x285/ee8e0c44/c97cc3e9bc3844768a2a23834810cfa8_900x680.png',
      features: ['Міцний стік', 'М’яка бавовна', 'Професійна серія'],
      purchaseUrl: 'https://sfera.ua/novita-professional-vatni-palichki-v-kartonnnij-korobci-200-sht-24sht-jasch'
    },
    {
      id: 4,
      name: 'NOVITA Delicate Косметичні ватні диски, 50 шт',
      category: 'Ватна продукція',
      description: 'Компактна упаковка ватних дисків для подорожей та щоденного догляду.',
      image: 'https://novita.ua/data/product/card/_max_160x285/a5d8fa1f/1ee24669959c45dc8296aba2d81e27a9_1052x1810.png',
      features: ['100% натуральна бавовна', 'Прошитий край', 'Не залишають ворсинок'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-novita-delicate-50-sht'
    },
    {
      id: 5,
      name: 'NOVITA Delicate Косметичні ватні диски, 100 шт',
      category: 'Ватна продукція',
      description: 'Класична упаковка ватних дисків для делікатного очищення шкіри.',
      image: 'https://novita.ua/data/product/card/_max_160x285/281302c4/a8ba306f6b38442ba4e3dc53388e2151_635x2000.png',
      features: ['100% натуральна бавовна', 'М’яка текстура', 'Ефективне очищення'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-novita-delicate-100-sht'
    },
    {
      id: 6,
      name: 'NOVITA Delicate Косметичні ватні диски, 120 шт',
      category: 'Ватна продукція',
      description: 'Економічна упаковка ватних дисків Delicate.',
      image: 'https://novita.ua/data/product/card/_max_160x285/2ce999ad/2a160be490a04fb98c751b1b5a565e55_553x2000.png',
      features: ['Велика упаковка', 'Подвійний ефект', 'Гіпоалергенно'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-120sht-novita-delicate'
    },
    {
      id: 7,
      name: 'NOVITA Soft Косметичні ватні диски, 100 шт',
      category: 'Ватна продукція',
      description: 'Особливо м’які ватні диски для найчутливішої шкіри.',
      image: 'https://novita.ua/data/product/card/_max_160x285/7e46567f/ae62a0f0ccfd4d6fb65edecf9aec4f18_635x2000.png',
      features: ['Ефект Soft', 'Ніжний догляд', 'Натуральний склад'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-novita-soft-100sht'
    },
    {
      id: 8,
      name: 'NOVITA Soft Косметичні ватні диски, 120 шт',
      category: 'Ватна продукція',
      description: 'М’які ватні диски у великій упаковці.',
      image: 'https://novita.ua/data/product/card/_max_160x285/8b77e822/c7148557930645938fc56344f4049378_553x2000.png',
      features: ['120 штук', 'Максимальна м’якість', 'Для всієї родини'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-novita-soft-120sht'
    },
    {
      id: 9,
      name: 'NOVITA Organic Косметичні ватні диски, 80 шт',
      category: 'Ватна продукція',
      description: 'Органічна серія ватних дисків для еко-свідомих споживачів.',
      image: 'https://novita.ua/data/product/card/_max_160x285/0a1b357f/49b935334b854e3cbdceb8e71c9d567a_724x2000.png',
      features: ['Біорозкладні', 'Без хлору', 'Organic Cotton'],
      purchaseUrl: 'https://sfera.ua/novita-organic-diski-vatni-kosmetichni-80sht-30sht-jasch-z-pdv-new?q=novita'
    },
    {
      id: 10,
      name: 'NOVITA Organic Косметичні ватні диски, 120 шт',
      category: 'Ватна продукція',
      description: 'Максимальна упаковка органічних дисків.',
      image: 'https://novita.ua/data/product/card/_max_160x285/05557351/1977dcec979d4db489dc0e6eaaaa6f6b_650x2000.png',
      features: ['Еко-упаковка', 'Висока якість', 'Делікатність'],
      purchaseUrl: 'https://sfera.ua/novita-organic-diski-vatni-kosmetichni-120sht-30sht-jasch-z-pdv-new?q=novita'
    },
    {
      id: 11,
      name: 'NOVITA Gapchinska Косметичні ватні диски, 100 шт',
      category: 'Ватна продукція',
      description: 'Ватні диски з авторським дизайном Гапчинської.',
      image: 'https://novita.ua/data/product/card/_max_160x285/13421533/3f05381b853b403b9ea2576eeff5cd14_2000x837.png',
      features: ['Арт-дизайн', 'Колекційна серія', '100% бавовна'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-novita-gapchinska-100-sht'
    },
    {
      id: 12,
      name: 'NOVITA Gapchinska Косметичні ватні диски, 120 шт',
      category: 'Ватна продукція',
      description: 'Стильні ватні диски у великій упаковці.',
      image: 'https://novita.ua/data/product/card/_max_160x285/5a0b0d8a/a044266efeab445fa4aa73c93ed4bd1c_2000x781.png',
      features: ['Яскравий дизайн', 'Якість Novita', '120 дисків'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-novita-gapchinska-120-sht'
    },
    {
      id: 13,
      name: 'NOVITA Delicate Ватні палички в поліетиленовому пакеті, 100 шт',
      category: 'Ватна продукція',
      description: 'Класичні ватні палички для гігієни.',
      image: 'https://novita.ua/data/product/card/_max_160x285/35129371/44032373a6334eca9bf77dfb5207d56c_1299x1436.png',
      features: ['Зручна упаковка', 'Гігієнічно', 'Натуральна вата'],
      purchaseUrl: 'https://sfera.ua/palichki-vatni-v-polietilenovomu-paketi-novita-delicate-100sht'
    },
    {
      id: 14,
      name: 'NOVITA Delicate Ватні палички в поліетиленовому пакеті, 200 шт',
      category: 'Ватна продукція',
      description: 'Ватні палички Delicate у великій упаковці.',
      image: 'https://novita.ua/data/product/card/_max_160x285/07aa0982/773950444eb0426eb1752bb3e26c92ab_1417x1436.png',
      features: ['200 штук', 'Міцний стік', 'М’яка головка'],
      purchaseUrl: 'https://sfera.ua/palichki-vatni-v-polietilenovomu-paketi-novita-delicate-200sht'
    },
    {
      id: 15,
      name: 'NOVITA Delicate Ватні палички в квадратній коробці, 300 шт',
      category: 'Ватна продукція',
      description: 'Зручна коробка з великою кількістю ватних паличок.',
      image: 'https://novita.ua/data/product/card/_max_160x285/978a6fa8/1236ab4b524f46a2af4ca764173d43d6_1818x1577.png',
      features: ['Deco Box', '300 штук', 'Довге використання'],
      purchaseUrl: 'https://sfera.ua/novita-delicate-palichki-vatni-deco-box-300-sht-32sht-jasch?q=novita'
    },
    {
      id: 16,
      name: 'NOVITA Soft Ватні палички в поліетиленовому пакеті, 160 шт',
      category: 'Ватна продукція',
      description: 'М’які ватні палички серії Soft.',
      image: 'https://novita.ua/data/product/card/_max_160x285/0887310f/f95dabda3a294347ac53263604704645_1299x1436.png',
      features: ['Soft-ефект', '160 штук', 'Безпечно'],
      purchaseUrl: 'https://sfera.ua/novita-soft-palichki-vatni-v-polietilenovomu-paketi-160-sht-32-sht-jasch-pr-vo?q=novita'
    },
    {
      id: 17,
      name: 'NOVITA Organic Ватні палички в поліетиленовому пакеті, 100 шт',
      category: 'Ватна продукція',
      description: 'Екологічні ватні палички з органічної бавовни.',
      image: 'https://novita.ua/data/product/card/_max_160x285/86d58520/725781f255ec49fa8a4df4258c234531_1299x1436.jpg',
      features: ['Organic Cotton', 'Еко-упаковка', '100 штук'],
      purchaseUrl: 'https://sfera.ua/novita-organic-palichki-vatni-v-polietilenovomu-paketi-100sht-50sht-jasch-z-pdv-new?q=novita'
    },
    {
      id: 18,
      name: 'NOVITA Gapchinska Ватні палички в поліетиленовому пакеті, 100 шт',
      category: 'Ватна продукція',
      description: 'Ватні палички Gapchinska в м’якій упаковці.',
      image: 'https://novita.ua/data/product/card/_max_160x285/120686cc/48ff72edcbf143b0982a7553bc8def4d_1145x1095.png',
      features: ['Авторський дизайн', 'Novita Quality', 'Зручність'],
      purchaseUrl: 'https://sfera.ua/novita-gapchinska-palichki-vatni-kosmetichni-v-p-e-paketi-100-sht-50-sht-jasch-new'
    },
    {
      id: 19,
      name: 'NOVITA Gapchinska Ватні палички в поліетиленовому пакеті, 200 шт',
      category: 'Ватна продукція',
      description: 'Велика упаковка паличок Gapchinska.',
      image: 'https://novita.ua/data/product/card/_max_160x285/5bcec8fd/bd3a5e16e67142ce92441cb46478402f_1145x1095.png',
      features: ['200 штук', 'Дизайнерська серія', 'М’яка бавовна'],
      purchaseUrl: 'https://sfera.ua/palichki-vatni-kosmetichni-v-p-e-paketi-novita-gapchinska-200-sht'
    },
    {
      id: 20,
      name: 'NOVITA Волога серветка Make up з міцелярною водою, 15 шт',
      category: 'Вологі серветки',
      description: 'Серветки для зняття макіяжу з міцелярною водою та морськими водоростями.',
      image: 'https://novita.ua/data/product/card/_max_160x285/b67f5b7c/6691d5feafba4a4d969ba44390ef8a41_1247x1890.png',
      features: ['Міцелярна вода', 'Морські водорості', 'Ефект зволоження'],
      purchaseUrl: 'https://sfera.ua/vologa-servetka-make-up-mors-ki-vodorosti-novita-15sht'
    },
    {
      id: 21,
      name: 'Novita Волога серветка Make up Delicate комплекс масел, 15 шт',
      category: 'Вологі серветки',
      description: 'Делікатні серветки для зняття макіяжу з комплексом масел.',
      image: 'https://novita.ua/data/product/card/_max_160x285/cc77ccbe/3631053bde8348c084580abcebb20fe5_1247x1890.png',
      features: ['Комплекс масел', 'Живлення', 'М’яке очищення'],
      purchaseUrl: 'https://sfera.ua/vologa-servetka-make-up-kompleks-masel-novita-15sht'
    },
    {
      id: 22,
      name: 'Novita Волога серветка Intimate Пребіотик біолин, 15 шт',
      category: 'Вологі серветки',
      description: 'Серветки для інтимної гігієни з пребіотиком Biolin.',
      image: 'https://novita.ua/data/product/card/_max_160x285/d55a8939/b566d8e34b404b47aa939322e7455eb7_1247x1890.png',
      features: ['Biolin Prebiotic', 'Баланс мікрофлори', 'Свіжість'],
      purchaseUrl: 'https://sfera.ua/vologa-servetka-intimate-prebiotik-biolin-novita-15sht'
    },
    {
      id: 23,
      name: 'Novita Волога серветка Intimate Soft комплекс Amiderm, 15 шт',
      category: 'Вологі серветки',
      description: 'Особливо ніжні серветки для інтимної гігієни.',
      image: 'https://novita.ua/data/product/card/_max_160x285/b91df862/eb0b67abf64644ca9c1e597d5ce8fa55_1247x1890.png',
      features: ['Amiderm Complex', 'Soft touch', 'Гіпоалергенно'],
      purchaseUrl: 'https://sfera.ua/vologa-servetka-intimatekompleks-amiderm-novita-15sht'
    },
    {
      id: 24,
      name: 'NOVITA PROFESSIONAL Серветка для зняття макіяжу, 15 шт',
      category: 'Зняття макіяжу',
      description: 'Професійні серветки з фітокомплексом.',
      image: 'https://novita.ua/data/product/card/_max_160x285/e30ff94f/523e7fc1a1064498b861d78e4b72ce54_428x700.png',
      features: ['Фітокомплекс', 'Professional care', 'Глибоке очищення'],
      purchaseUrl: 'https://sfera.ua/novita-professional-vologa-servetka-dlja-znjattja-makijazhu-z-fitokompleksom-15sht-evroslot-48-sht-jasch'
    },
    {
      id: 25,
      name: 'NOVITA PROFESSIONAL Серветка для інтим.гігієни, 15 шт',
      category: 'Інтимна гігієна',
      description: 'Професійні серветки з рослинним комплексом.',
      image: 'https://novita.ua/data/product/card/_max_160x285/625c5fed/9dc972372b0e497b9cb898fe14167600_428x700.png',
      features: ['Рослинний комплекс', 'Захист', 'Для щоденного використання'],
      purchaseUrl: 'https://sfera.ua/novita-professional-vologa-servetka-dlja-intim-gigieni-z-roslinnim-kompleksom-15sht-evroslot-48sht-jasch'
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(this.products.filter(p => p.category === category));
  }
}
