import { Link } from 'react-router'
import catalogList from '../../data/catalog.json'
import './catalog.css'

export default function Catalog() {
  return (
    <div id="catalog">
      <div className="container">
        <div className="catalog-wrapper">
          {catalogList.map((catalogItem) => (
            <Link
              className="catalog-item"
              to={`/${catalogItem.name.toLowerCase().split` `.join`-`}`}
              key={catalogItem.id}
            >
              <img src={`/img/cat${catalogItem.id}.jpg`} />
              <h4 className="catalog-item__title">{catalogItem.name}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
