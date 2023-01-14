import { IBackCategory, ICategory } from './interfaces';

export const transformCategories = ({
  idCategory, strCategory, strCategoryDescription, strCategoryThumb,
}: IBackCategory): ICategory => ({
  id: idCategory,
  category: strCategory,
  description: strCategoryDescription,
  image: strCategoryThumb,
});
