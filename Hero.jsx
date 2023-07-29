const Hero = ()=>{
    return(
        <>
        <div className="hero container">
            <div className = "hero_contatent">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Minus qui amet nisi blanditiis magni voluptatem <br></br>architecto explicabo nihil esse facere.</p>
                <div className="hero_btn">
                    <button>Shop Now</button>
                    <button>Category</button>

                </div>
                <div className="shoping">
                    <p>Avilable Now</p>
                    <div className="brand_icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png"/>
                        <img src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-png-download-0.png"/>
                    </div>
                </div>
            </div>
            <div className="hero_img">

           <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"/>
            </div>
        </div>
       
        
       
        

        </>
    );
}
export default Hero;