import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


function ItemDetail ({product, onAdd, added}) {

    return (
        <div className= "itemBox2">

            <img src={product.image} alt={product.title}/>

            <div>
                <h2>{product.title}</h2>
                <h3>►{product.category}◄</h3>
                <p>{product.description}</p>
                <h4>${product.price}</h4>
                <div id="contador">
                    {added ? <Link id="go-to-cart" to='/cart'><button className="btn btn-main btn-submit">Go to cart</button></Link> : <ItemCount stock ={5} initial={1} onAdd={onAdd}/>}
                </div>
            </div>   
            
        </div>  
    )
}

export default ItemDetail