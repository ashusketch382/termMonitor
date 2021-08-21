import './TermMonitorTitle.css';

function TermMonitorTitle(){
    return(
        <header className="term-monitor">
            <div className="term-monitor-logo-container">
                <div className="term-monitor-logo">
                    <div className="logo-background-color">
                        <div className="term-monitor-center-logo"></div>
                    </div>
                </div>
            </div>
            <div className="term-monitor-title-container">
                <p className="term-monitor-text">Term<b>Monitor</b></p>
            </div>
        </header>
    );
}

export default TermMonitorTitle;