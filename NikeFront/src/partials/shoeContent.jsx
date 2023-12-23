export default function ShoeContent() {
    return (
        <main>
            <div className="content">
                <h1>Your Feet deserve the best</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.
                </p>
                <div className="btns">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="socialContent">
                    <p>Also Available On</p>
                    <div className="social-images">
                        <img src="/images/flipkart.png" alt="" />
                        <img src="/images/amazon.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="image">
                <img src="/images/hero-image.png" alt="" />
            </div>
        </main>
    )
}