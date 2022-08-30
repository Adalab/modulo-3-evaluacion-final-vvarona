import '../styles/CharacterDetail.scss'

function CharacterDetail(prop) {

    return (
        <article className='card-detail-item'>

            <img
                className='card-detail-item-img'
                src={prop.item.image}
                title={prop.item.imageAlt}
                alt={prop.item.imageAlt}
            />

            <h3 className='card-detail-item-name'>{prop.item.name}</h3>
            <p className='card-detail-item-species'>{prop.item.species}</p>
            <img
                className='card-detail-item-emblem'
                title={prop.item.house}
                alt={prop.item.house}
                src={prop.item.houseEmblem}
            />
            <i className="card-detail-item-more fa-solid fa-circle-plus"></i>

        </article>
    )
}

export default CharacterDetail;