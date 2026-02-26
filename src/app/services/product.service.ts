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
      name: 'PRODUCTS.P1.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P1.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/e1eddcc8/5fef938a3f7746db971de408caf6ea5c_1209x1379.png',
      features: ['PRODUCTS.P1.F1', 'PRODUCTS.P1.F2', 'PRODUCTS.P1.F3'],
      purchaseUrl: 'https://sfera.ua/palichki-vatni-v-kruglij-banci-novita-gapchinska-200-sht'
    },
    {
      id: 2,
      name: 'PRODUCTS.P2.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P2.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/7cefc0f6/317a5e6267e74baaace2c3048905b5ea_553x2000.png',
      features: ['PRODUCTS.P2.F1', 'PRODUCTS.P2.F2', 'PRODUCTS.P2.F3'],
      purchaseUrl: 'https://sfera.ua/novita-professional-diski-vatni-kosmetichni-120-sht-35-sht-jasch'
    },
    {
      id: 3,
      name: 'PRODUCTS.P3.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P3.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/ee8e0c44/c97cc3e9bc3844768a2a23834810cfa8_900x680.png',
      features: ['PRODUCTS.P3.F1', 'PRODUCTS.P3.F2', 'PRODUCTS.P3.F3'],
      purchaseUrl: 'https://sfera.ua/novita-professional-vatni-palichki-v-kartonnnij-korobci-200-sht-24sht-jasch'
    },
    {
      id: 4,
      name: 'PRODUCTS.P4.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P4.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/a5d8fa1f/1ee24669959c45dc8296aba2d81e27a9_1052x1810.png',
      features: ['PRODUCTS.P4.F1', 'PRODUCTS.P4.F2', 'PRODUCTS.P4.F3'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-novita-delicate-50-sht'
    },
    {
      id: 5,
      name: 'PRODUCTS.P5.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P5.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/281302c4/a8ba306f6b38442ba4e3dc53388e2151_635x2000.png',
      features: ['PRODUCTS.P5.F1', 'PRODUCTS.P5.F2', 'PRODUCTS.P5.F3'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-novita-delicate-100-sht'
    },
    {
      id: 6,
      name: 'PRODUCTS.P6.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P6.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/2ce999ad/2a160be490a04fb98c751b1b5a565e55_553x2000.png',
      features: ['PRODUCTS.P6.F1', 'PRODUCTS.P6.F2', 'PRODUCTS.P6.F3'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-120sht-novita-delicate'
    },
    {
      id: 7,
      name: 'PRODUCTS.P7.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P7.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/7e46567f/ae62a0f0ccfd4d6fb65edecf9aec4f18_635x2000.png',
      features: ['PRODUCTS.P7.F1', 'PRODUCTS.P7.F2', 'PRODUCTS.P7.F3'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-novita-soft-100sht'
    },
    {
      id: 8,
      name: 'PRODUCTS.P8.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P8.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/8b77e822/c7148557930645938fc56344f4049378_553x2000.png',
      features: ['PRODUCTS.P8.F1', 'PRODUCTS.P8.F2', 'PRODUCTS.P8.F3'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-novita-soft-120sht'
    },
    {
      id: 9,
      name: 'PRODUCTS.P9.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P9.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/0a1b357f/49b935334b854e3cbdceb8e71c9d567a_724x2000.png',
      features: ['PRODUCTS.P9.F1', 'PRODUCTS.P9.F2', 'PRODUCTS.P9.F3'],
      purchaseUrl: 'https://sfera.ua/novita-organic-diski-vatni-kosmetichni-80sht-30sht-jasch-z-pdv-new?q=novita'
    },
    {
      id: 10,
      name: 'PRODUCTS.P10.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P10.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/05557351/1977dcec979d4db489dc0e6eaaaa6f6b_650x2000.png',
      features: ['PRODUCTS.P10.F1', 'PRODUCTS.P10.F2', 'PRODUCTS.P10.F3'],
      purchaseUrl: 'https://sfera.ua/novita-organic-diski-vatni-kosmetichni-120sht-30sht-jasch-z-pdv-new?q=novita'
    },
    {
      id: 11,
      name: 'PRODUCTS.P11.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P11.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/13421533/3f05381b853b403b9ea2576eeff5cd14_2000x837.png',
      features: ['PRODUCTS.P11.F1', 'PRODUCTS.P11.F2', 'PRODUCTS.P11.F3'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-novita-gapchinska-100-sht'
    },
    {
      id: 12,
      name: 'PRODUCTS.P12.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P12.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/5a0b0d8a/a044266efeab445fa4aa73c93ed4bd1c_2000x781.png',
      features: ['PRODUCTS.P12.F1', 'PRODUCTS.P12.F2', 'PRODUCTS.P12.F3'],
      purchaseUrl: 'https://sfera.ua/diski-vatni-kosmetichni-novita-gapchinska-120-sht'
    },
    {
      id: 13,
      name: 'PRODUCTS.P13.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P13.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/35129371/44032373a6334eca9bf77dfb5207d56c_1299x1436.png',
      features: ['PRODUCTS.P13.F1', 'PRODUCTS.P13.F2', 'PRODUCTS.P13.F3'],
      purchaseUrl: 'https://sfera.ua/palichki-vatni-v-polietilenovomu-paketi-novita-delicate-100sht'
    },
    {
      id: 14,
      name: 'PRODUCTS.P14.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P14.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/07aa0982/773950444eb0426eb1752bb3e26c92ab_1417x1436.png',
      features: ['PRODUCTS.P14.F1', 'PRODUCTS.P14.F2', 'PRODUCTS.P14.F3'],
      purchaseUrl: 'https://sfera.ua/palichki-vatni-v-polietilenovomu-paketi-novita-delicate-200sht'
    },
    {
      id: 15,
      name: 'PRODUCTS.P15.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P15.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/978a6fa8/1236ab4b524f46a2af4ca764173d43d6_1818x1577.png',
      features: ['PRODUCTS.P15.F1', 'PRODUCTS.P15.F2', 'PRODUCTS.P15.F3'],
      purchaseUrl: 'https://sfera.ua/novita-delicate-palichki-vatni-deco-box-300-sht-32sht-jasch?q=novita'
    },
    {
      id: 16,
      name: 'PRODUCTS.P16.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P16.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/0887310f/f95dabda3a294347ac53263604704645_1299x1436.png',
      features: ['PRODUCTS.P16.F1', 'PRODUCTS.P16.F2', 'PRODUCTS.P16.F3'],
      purchaseUrl: 'https://sfera.ua/novita-soft-palichki-vatni-v-polietilenovomu-paketi-160-sht-32-sht-jasch-pr-vo?q=novita'
    },
    {
      id: 17,
      name: 'PRODUCTS.P17.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P17.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/86d58520/725781f255ec49fa8a4df4258c234531_1299x1436.jpg',
      features: ['PRODUCTS.P17.F1', 'PRODUCTS.P17.F2', 'PRODUCTS.P17.F3'],
      purchaseUrl: 'https://sfera.ua/novita-organic-palichki-vatni-v-polietilenovomu-paketi-100sht-50sht-jasch-z-pdv-new?q=novita'
    },
    {
      id: 18,
      name: 'PRODUCTS.P18.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P18.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/120686cc/48ff72edcbf143b0982a7553bc8def4d_1145x1095.png',
      features: ['PRODUCTS.P18.F1', 'PRODUCTS.P18.F2', 'PRODUCTS.P18.F3'],
      purchaseUrl: 'https://sfera.ua/novita-gapchinska-palichki-vatni-kosmetichni-v-p-e-paketi-100-sht-50-sht-jasch-new'
    },
    {
      id: 19,
      name: 'PRODUCTS.P19.NAME',
      category: 'PRODUCTS.CATEGORIES.COTTON',
      description: 'PRODUCTS.P19.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/5bcec8fd/bd3a5e16e67142ce92441cb46478402f_1145x1095.png',
      features: ['PRODUCTS.P19.F1', 'PRODUCTS.P19.F2', 'PRODUCTS.P19.F3'],
      purchaseUrl: 'https://sfera.ua/palichki-vatni-kosmetichni-v-p-e-paketi-novita-gapchinska-200-sht'
    },
    {
      id: 20,
      name: 'PRODUCTS.P20.NAME',
      category: 'PRODUCTS.CATEGORIES.WIPES',
      description: 'PRODUCTS.P20.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/b67f5b7c/6691d5feafba4a4d969ba44390ef8a41_1247x1890.png',
      features: ['PRODUCTS.P20.F1', 'PRODUCTS.P20.F2', 'PRODUCTS.P20.F3'],
      purchaseUrl: 'https://sfera.ua/vologa-servetka-make-up-mors-ki-vodorosti-novita-15sht'
    },
    {
      id: 21,
      name: 'PRODUCTS.P21.NAME',
      category: 'PRODUCTS.CATEGORIES.WIPES',
      description: 'PRODUCTS.P21.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/cc77ccbe/3631053bde8348c084580abcebb20fe5_1247x1890.png',
      features: ['PRODUCTS.P21.F1', 'PRODUCTS.P21.F2', 'PRODUCTS.P21.F3'],
      purchaseUrl: 'https://sfera.ua/vologa-servetka-make-up-kompleks-masel-novita-15sht'
    },
    {
      id: 22,
      name: 'PRODUCTS.P22.NAME',
      category: 'PRODUCTS.CATEGORIES.WIPES',
      description: 'PRODUCTS.P22.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/d55a8939/b566d8e34b404b47aa939322e7455eb7_1247x1890.png',
      features: ['PRODUCTS.P22.F1', 'PRODUCTS.P22.F2', 'PRODUCTS.P22.F3'],
      purchaseUrl: 'https://sfera.ua/vologa-servetka-intimate-prebiotik-biolin-novita-15sht'
    },
    {
      id: 23,
      name: 'PRODUCTS.P23.NAME',
      category: 'PRODUCTS.CATEGORIES.WIPES',
      description: 'PRODUCTS.P23.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/b91df862/eb0b67abf64644ca9c1e597d5ce8fa55_1247x1890.png',
      features: ['PRODUCTS.P23.F1', 'PRODUCTS.P23.F2', 'PRODUCTS.P23.F3'],
      purchaseUrl: 'https://sfera.ua/vologa-servetka-intimatekompleks-amiderm-novita-15sht'
    },
    {
      id: 24,
      name: 'PRODUCTS.P24.NAME',
      category: 'PRODUCTS.CATEGORIES.MAKEUP',
      description: 'PRODUCTS.P24.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/e30ff94f/523e7fc1a1064498b861d78e4b72ce54_428x700.png',
      features: ['PRODUCTS.P24.F1', 'PRODUCTS.P24.F2', 'PRODUCTS.P24.F3'],
      purchaseUrl: 'https://sfera.ua/novita-professional-vologa-servetka-dlja-znjattja-makijazhu-z-fitokompleksom-15sht-evroslot-48-sht-jasch'
    },
    {
      id: 25,
      name: 'PRODUCTS.P25.NAME',
      category: 'PRODUCTS.CATEGORIES.INTIMATE',
      description: 'PRODUCTS.P25.DESCRIPTION',
      image: 'https://novita.ua/data/product/card/_max_160x285/625c5fed/9dc972372b0e497b9cb898fe14167600_428x700.png',
      features: ['PRODUCTS.P25.F1', 'PRODUCTS.P25.F2', 'PRODUCTS.P25.F3'],
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
