import './style.scss'

const Timer = () => {
    return (
        <div className='timer'>
            <p>Remains until the end of the offer</p>
            <div className="boxes">
                <div className="box">
                    <div className="time">
                        00
                    </div>
                    <h6>Days</h6>
                </div>
                <div className="box">
                    <div className="time">
                        00
                    </div>
                    <h6>Hours</h6>
                </div>
                <div className="box">
                    <div className="time">
                        00
                    </div>
                    <h6>Mins</h6>
                </div>
                <div className="box">
                    <div className="time">
                        00
                    </div>
                    <h6>Secs</h6>
                </div>
            </div>
        </div>
    )
}

export default Timer