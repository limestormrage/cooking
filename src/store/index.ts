import { createAPI } from '../config/axios';
import { TApi } from '../config/axios/interface';
import CategoriesStore from './categories/categories';

export class RootStore {
  categoriesStore: CategoriesStore;

  constructor(api: TApi) {
    this.categoriesStore = new CategoriesStore(api);
  }
}

const rootStore = new RootStore(createAPI());

export default rootStore;
