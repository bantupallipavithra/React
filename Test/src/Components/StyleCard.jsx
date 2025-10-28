import "./StyleCard.css";
import Data1 from "../assets/Datajson.json"
export default function StyleCard(){
    return(
        <>
        {
            Data1.products.map((item,index)=>(
                <div key={index} className="product">
                    <p>The name of the product is {item.name}</p>
                    <p>The price of the product is {item.price}</p>
                </div>
            ))
        }
        </>
    )
}