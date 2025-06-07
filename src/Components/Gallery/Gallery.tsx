import { useEffect, useState } from "react"
import "./Gallery.css"
import { Product } from "../../types"
import { useNavigate } from "react-router-dom"

export const Gallery = () => {
    const navigate = useNavigate();
    const [productsArr, setProductsArr] = useState<Product[]>([])



    useEffect(() => {
        setProductsArr([
            {
                prodName: "aaa",
                prodPrice: 5
            },
            {
                prodName: "bbb",
                prodPrice: 10
            },
        ])
    }, []);


    return (
        <div>
            <h2>Gallery</h2>
            {productsArr.map((curr) => {
                return (
                    <div onClick={() => { navigate(`/fullpageprod/${curr.prodName}`) }}>
                        <div>====================</div>
                        <div>{curr.prodName}</div>
                        <div>{curr.prodPrice}</div>
                        <div>====================</div>
                    </div>
                )
            })}
        </div>
    )
}
