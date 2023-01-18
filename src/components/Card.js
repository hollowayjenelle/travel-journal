export default function Card(props){
    return(
        <div>
            <div className="card-container">
                <div className="img-container">
                    <img className="location-img" src={props.imageUrl} alt={props.title}/>
                </div>
                <div className="details">
                    <div className="location">
                        <span className="fa fa-map-marker"></span>
                        <span className="country">{props.location}</span>
                        <span><a className="map-link" href={props.googleMapsUrl}>View on Google Maps</a></span>
                    </div>
                    <h2 className="place-name">{props.title}</h2>
                    <h4 className="dates">{props.startDate} - {props.endDate}</h4>
                    <p className="description">{props.description}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}