function CharacterDetail (prop) {

    return(
        <article className='card-detail-item'>
                <i className="card-detail-item-more fa-solid fa-circle-plus"></i>
                <img
                    className='card-detail-item-img'
                    src={prop.item.image}
                    title={prop.item.imageAlt}
                    alt={prop.item.imageAlt}
                />
                <div className="info-detail-container">
                    <h3 className='card-detail-item-name'>{prop.item.name}</h3>
                    <p className='card-detail-item-species'>{prop.item.species}</p>
                    <img
                        className='card-detail-item-emblem'
                        title={prop.item.house}
                        alt={prop.item.house}
                    />
                </div>
        </article>
    )
}

export default CharacterDetail;