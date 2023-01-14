import { makeAutoObservable, flow } from 'mobx';
import { TApi } from '../../config/axios/interface';
import { ICategory } from '../../interfaces';
import { transformCategories } from '../../utils';

export class CategoriesStore {
  private api: TApi;

  categories: ICategory[] = [];

  isLoading = false;

  isError = false;

  constructor(api: TApi) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.api = api;
  }

  getCategories = flow(function* (this: CategoriesStore) {
    this.isError = false;
    this.isLoading = true;

    const response = yield this.api({
      method: 'GET',
      url: '/categories.php',
    });

    if (response.status === 200) {
      const { data } = response;
      this.categories = data.categories.map(transformCategories);
    } else {
      this.isError = true;
    }

    this.isLoading = false;
  });

  //   getTodoos = flow(function* (this: TodosStore, id: string) {
  //     this.isLoading = true;
  //     const response = yield this.api.get('categories.php');

  //     if (response.status === 200) {
  //       console.log(response.data);
  //     }

//     this.isLoading = false;
//   });
}

export default CategoriesStore;
