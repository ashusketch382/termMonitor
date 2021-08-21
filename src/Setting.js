import './Setting.css';

function Setting(){
    return(
        <div className="setting-section">
            <div className="dropdown">
                <div className="setting-star">
                    <svg className="star-logo" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="black" fill-opacity="0.54"/>
                    </svg>

                    <p className="settings-text">Settings</p>
                </div>


                <svg className="arrow-logo" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0H0Z" fill="black" fill-opacity="0.54"/>
                </svg>
            </div>

            <p className="billings">Billings</p>
        </div>

        
    );
}

export default Setting;