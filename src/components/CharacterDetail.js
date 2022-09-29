import '../styles/CharacterDetail.scss'
import { Link } from "react-router-dom";

function CharacterDetail(prop) {

    if (!prop.item) {
        return <p>personaje no existe</p>
    } else {

        return (
            <article className='card-detail-item'>

                <img
                    className='card-detail-item-img'
                    src={prop.item.image}
                    title={prop.item.imageAlt}
                    alt={prop.item.imageAlt}
                />

                <h3 className='card-detail-item-name'>{prop.item.name}</h3>
                <p className='card-detail-item-species'>{`Species: ${prop.item.species}`}</p>
                <p className='card-detail-item-patronus'>{`Patronus: ${prop.item.patronus}`}</p>
                <p className='card-detail-item-alias'>{`Other names: ${prop.item.alias}`}</p>

                <img
                    className='card-detail-item-emblem'
                    title={prop.item.house}
                    alt={prop.item.house}
                    src={prop.item.houseEmblem}
                />

                <Link to={'/'}><button className='button-back'><i className="button-back-icon fa-solid fa-chevron-left"></i>Back</button></Link>

            </article>
        )
    }
}

export default CharacterDetail;