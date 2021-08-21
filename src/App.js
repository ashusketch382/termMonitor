import './App.css';
import TermMonitorTitle from './TermMonitorTitle';
import  NavBaar from  './NavBaar';
import Table from './Table';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="header1">
          <TermMonitorTitle></TermMonitorTitle>
        </div>
        <div className="header2">
          <div className="header-parts">
            <div className="header-keywords-part1">KEYWORDS</div>
            <div className="header-keywords-part2">
              <div className="keyword-search">
                <input type="text" placeholder="SUBMIT" className="keyword-search"></input>
                <svg className="arrow-logo-line" width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.41406 0.776062L10.078 0.776062" stroke="#3F0E40" stroke-width="1.15519" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg className="arrow-logo-tip" width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.886017 0.586094L4.078 3.77808L0.886017 6.97006" stroke="#3F0E40" stroke-width="1.15519" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


              </div>
              {/* <div className="submit-arrow">
                  <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.886017 0.586094L4.078 3.77808L0.886017 6.97006" stroke="#3F0E40" stroke-width="1.15519" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </div> */}
              <div className="account-logo">
                <div className="account-first-letter">A</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="main-body">
        <div className="main-body1">
          <NavBaar></NavBaar>
        </div>
        <div className="main-body2">
          <div className="para1">
            <div className="para1-part1">
              <div className="add-another-keyword-text">Add Another keyword</div>
              <div className="divide1by3"><p className="divide1by3text">1/3</p></div>
              <div className="upgrade-text">UPGRADE</div>
            </div>
            <div className="Advance-serach-text">Advance search</div>
          </div>
          <div className="para2">
            <div className="filters">
              <div className="search-container">
                <svg alt="search logo svg" className="search-logo-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#151515"/>
</svg>

                <input type="text" placeholder="Enter your filters here" className="filter-search-box"></input>
              </div>
              <button className="save-filter-button"><p className="save-filter-text">SAVE FILTERS</p></button>
            </div>
          </div>
          <div className="para-3">
            <div className="terms-tracking">
              <p>The terms you are tracking</p>
            </div>
            <div className="data-refresh">
              <p>The data will refresh every 5 min</p>
            </div>
          </div>
          
          
          <Table svg={<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1ZM1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H1V16Z" fill="black"/>
</svg>
}></Table>

        </div>
      </section>
      {/* <div className="side-baar"></div>
      <div className="main-body"></div> */}
    </div>
  );
}

export default App;
