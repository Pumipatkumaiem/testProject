import Menu from "./Menu";

function Product(){
    return(
        <>
        <div style={{marginTop:  "50px", marginLeft: "50px"}}>
            <Menu/>
            <div>This is Product
            <input style={{borderColor:"red",padding:"10px"}}/>
            </div>
        </div>
        </>
    );
}

export default Product;