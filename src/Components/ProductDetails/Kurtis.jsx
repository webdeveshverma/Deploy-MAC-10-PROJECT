
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { useNavigate } from "react-router"

export const KurtisDetails = () => {

    const {id} = useParams()
    const navigate = useNavigate();
    const [data ,setData] = useState([])
    
    useEffect(()=>{getData()},[])

    var KurtisData = useSelector((store)=> store.kurtis.kurtis)
    console.log(KurtisData)
    
     const getData = ()=>{
         console.log(id)
        let updatedData = KurtisData.filter((el)=>el.id==id )
        setData(updatedData)
     }
   // console.log(data)

   let arr = JSON.parse(localStorage.getItem("cartData")) || [];

   function AddToCart(el){
       //console.log(el)
       
       arr.push(el);
       localStorage.setItem("cartData",JSON.stringify(arr));
       navigate("/cart")
   }
    

    return(

       <>    
            <div className="detailsPage">
            {data.map((el)=>(
                <div key={el.id}  className="leftPart">
                    <img src={el.imgUrl} alt="" height="100%" width="100%" />
                </div>

            ))}
            {data.map((el)=>(
                <div key={el.id}  className="rightPart">
                    <h1 id="price"> Rs . {el.price}</h1>
                    <h3> Color - {el.colour}</h3>
                    <h3> Brand - {el.brand}</h3>
                    <h3> Size - {el.size}</h3>

                    <button onClick={()=>AddToCart(el)} id="cartButton">ADD TO CART</button>
                </div>
                
            ))}
            </div>
            

       </>
    )
}