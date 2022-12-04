import './cart.css';

function Cart(){
    return(
        <div className='wrapper'>
            <div className='container'>
                <div className='foto__container'>
                    <img            
                        src="../img/foto.jpg"
                        alt="img"
                        >       
                    </img>
                </div>
                <div className='text__container'>
                    <h3>Связаться</h3>
                    <div className='text__block'>
                        <div className='text__main'>ibozic90@gmail.com</div>
                        <div className='text__main'>8(800) 555 3535</div>
                    </div>
                    <h3>Адресс</h3>
                    <div className='text__block'>
                        <div className='text__main'>ул. Ярослава Мудрого 55/29</div>
                        <div className='text__main'>г. Каменское</div>
                        <div className='text__main'>Днепропетровская обл.</div>
                        <div className='text__main'>51905</div>
                    </div>
                    <div className='text__block block__flex'>
                        <a className='text__link' href='https://github.com/Tibilex/React_ContactCart'>GitHub</a>
                        <a className='text__link' href='../index.html'>Instagram</a>
                        <a className='text__link' href='../index.html'>Facebook</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;