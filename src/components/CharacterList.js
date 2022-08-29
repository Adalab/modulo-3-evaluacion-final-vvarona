import '../styles/CharacterList.scss'
import {Link} from "react-router-dom";

function RenderCharactersData(prop) {
    const filteredList = prop.filterCards;

    const errorHtml = <h2>Uy,  aquí no hay { prop.texInputValue === '' ? ' nada' : ` nadie llamado ${prop.texInputValue}` } </h2>;
    const renderList = filteredList.map((item, index) => {

        return (
            <li className='card-item stacked' key={index} onClick={prop.onClick} id={item.id}>
                <Link to={`/user/${item.id}` }>
                    <img
                        className='card-item-img'
                        src={item.image}
                        title={item.imageAlt}
                        alt={item.imageAlt}
                    />
                    <div className="info-container">
                        <h3 className='card-item-name'>{item.name}</h3>
                        <p className='card-item-species'>{item.species}</p>
                        <img
                            className='card-item-emblem'
                            src={item.houseEmblem}
                            title={item.house}
                            alt={item.house}
                        />
                    </div>
                </Link>
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