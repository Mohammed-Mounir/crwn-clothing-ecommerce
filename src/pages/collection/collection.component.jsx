import { selectCollection } from '../../redux/shop/shop.selectors';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const CollectionPage = () => {
  let { collectionId } = useParams();
  const collection = useSelector(state =>
    selectCollection(collectionId)(state)
  );

  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
    </div>
  );
};

export default CollectionPage;
