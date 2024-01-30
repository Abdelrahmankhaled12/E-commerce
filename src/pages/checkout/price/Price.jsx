import './style.scss'

const Price = ({ totalPrice  }) => {
    return (
        <div className="priceCheck">
            <div className="flex">
                <h4>Subtotal</h4>
                <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex">
                <h4>Shipping</h4>
                <p>$60.00</p>
            </div>
            <div className="flex">
                <h3>Total</h3>
                <p>${(totalPrice + 60).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Price