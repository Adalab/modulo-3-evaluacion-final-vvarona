import '../styles/CharacterList.scss'



function RenderCharactersData(prop) {
    const filteredList = prop.filterCards;
    console.log(filteredList);
    const errorHtml = <h2>Uy, no hay nada aquí</h2>;
    const renderList = filteredList.map((item, index) => {

        return (
            <li className='card-item' key={index} onClick={prop.onClick} id={item.name}>
                <div className='card-item-more'>+</div>
                <img
                    className='card-item-img'
                    src={item.image}
                    title={item.imageAlt}
                    alt={item.imageAlt}
                />
                <h3 className='card-item-name'>{item.name}</h3>
                <p className='card-item-species'>{item.species}</p>
                <img
                    className='card-item-emblem'
                    src={item.houseEmblem}
                    title={item.house}
                    alt={item.house}
                />
            </li>
        )
    })

    return (
        <section>
            <p>Se encontraron {renderList.length} resultados </p>
            <ul className='list-cards'>
                {filteredList.length === 0 ? errorHtml : renderList}
            </ul>
        </section>
    )
}
export default RenderCharactersData;