import { selectCollection } from '../../redux/shop/shop.selectors';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const CollectionPage = () => {
  let { collectionId } = useParams();
  const collection = useSelector(state =>
    selectCollection(collectionId)(state)
  );
  const { title, items } = collection;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
