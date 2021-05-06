import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCategoryList, setPrases} from '../actions';

export const useContext = () => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);
  const [categoryToDisplayId, setCategoryToDisplayId] = useState(null);
  const [randomPhraseAnswersArray, setRandomPhraseAnswersArray] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();
  const categoryListState = useSelector(state => state.categoryList);
  const seenPhrases = useSelector(state => state.seenPhrases);
  const learntPhrases = useSelector(state => state.learntPhrases);
  const phrasesState = useSelector(state => state.phrases);
  const categoryListId = useSelector(state => state.categoryListId);
  const {categoryList, isLoading} = categoryListState;
  const {phrases} = phrasesState;

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(setPrases());
  }, []);

  const getPhraseForCategory = () => {
    // Find the category obj by the id from the list item
    const category =
      categoryList &&
      !isLoading &&
      categoryList.categories.find(category => category.id === categoryListId);
    // For the category name in learning screen
    setCategoryName(isEnglishLanguage ? category?.name.en : category?.name.ma);
  };

  function getPhrasesArrayFromCategoryList(phrasesArr) {
    // FIltering the phrases by the categorylist id but removing the harsh and the numbers in that id
    return (
      phrasesArr &&
      phrasesArr.filter(cat =>
        cat.id.includes(categoryListId.slice(3, categoryListId.length - 3)),
      )
    );
  }

  useEffect(() => {
    // Create an array of the answers from the phrases array and the random ID
    const phrasesArr = getPhrasesArrayFromCategoryList(phrases);
    const phrasesArray = [
      phrasesArr[1],
      phrasesArr[2],
      phrasesArr[3],
      phrasesArr[4],
    ];
    setRandomPhraseAnswersArray(phrasesArray);
  }, [phrases]);

  useEffect(() => {
    getPhraseForCategory();
  }, [categoryListState]);

  return {
    isEnglishLanguage,
    setIsEnglishLanguage,
    categoryList,
    seenPhrases,
    learntPhrases,
    randomPhraseAnswersArray,
    categoryName,
    categoryToDisplayId,
    setCategoryToDisplayId,
  };
};