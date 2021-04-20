function Cake(props) {
    return (
        <div className="card" style={{width:"18rem", display: "inline-block"}}>
            <img src={props.cakedata.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.cakedata.name}</h5>
                <p className="card-text">{props.cakedata.cardtext}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Cake