
import { Route , Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import CategoriesPreview from "../categories-preview/categories.preview";
import Category from "../category/Category";

import "../../styles/shop.styles.scss";

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import { setCategories } from '../../store/categories/categories.action';



const Shop = () => {
const dispatch = useDispatch()

useEffect(() => {
  const getCategoriesMap = async () => {
    const categoriesArray = await getCategoriesAndDocuments('categories');
    console.log(categoriesArray)
    dispatch(setCategories(categoriesArray));
  };

  getCategoriesMap();
}, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};  
export default Shop;
