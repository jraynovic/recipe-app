import React, { useEffect, useState } from 'react'
import { useHistory, useParams} from "react-router-dom";
import recipeServices from '../services/recipeServices'
const SelectComponent = ({match}) => {
  const history = useHistory();
  const {titleId} = useParams();
  const [recipe, setRecipe] = useState('');
  const [notFound, setNotFound] = useState('')

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const {data:{title}} = await recipeServices.getRecipeByTitle(titleId);
        setRecipe(title[0]);
      } catch (err) {
        console.log(err);
      }
    };
    if(titleId === 'new'){
      setRecipe('New Recipe')
    }else{
      getRecipes()
    }
    
  }, [titleId]);

  return (
    <div  className='m-5'>
      <div>{JSON.stringify(recipe)}</div>
      SelectComponent
      <button onClick={()=>history.push('steps/2')}>STEPS PAGE</button>
      <div className='m-5'>{titleId}</div>
    </div>
  )
}

export default SelectComponent