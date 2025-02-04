import picture from '../assets/profil-logo.jpg';

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={picture} alt="picture" />
            <h2 className='card-title'>React With Website</h2>
            <p className='card-text'>I make Website with react</p>
        </div>
    )
}

export default Card