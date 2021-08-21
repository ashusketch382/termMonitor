import './NavBaar.css';
import MenuItem from './MenuItem';
import Setting from './Setting';

function NavBaar(){
    return(
        <div className="top-side">


            <div className="menu-item1">
                <div className="svg-logo1">
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99998 16V11H12V16C12 16.55 12.45 17 13 17H16C16.55 17 17 16.55 17 16V9H18.7C19.16 9 19.38 8.43 19.03 8.13L10.67 0.600001C10.29 0.260001 9.70998 0.260001 9.32998 0.600001L0.969976 8.13C0.629976 8.43 0.839976 9 1.29998 9H2.99998V16C2.99998 16.55 3.44998 17 3.99998 17H6.99998C7.54998 17 7.99998 16.55 7.99998 16Z" fill="white"/>
</svg>

                </div>
                <p className="item1">Add keywords</p>
            </div>
            

            <MenuItem svg={<svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V13C0 13.55 0.45 14 1 14H13C13.55 14 14 13.55 14 13V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C14.05 8.06 14.06 8.08 14.07 8.09C15.21 8.92 16 10.03 16 11.5V13C16 13.35 15.93 13.69 15.82 14H21C21.55 14 22 13.55 22 13V11.5C22 9.17 17.33 8 15 8Z" fill="black" fill-opacity="0.54"/>
</svg>
} text={'Matches'} style={{backgroundColor: "#FFFFFF"}}></MenuItem>
            
                        
            <MenuItem svg={<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM17 14H3C2.45 14 2 13.55 2 13V8H18V13C18 13.55 17.55 14 17 14ZM18 4H2V3C2 2.45 2.45 2 3 2H17C17.55 2 18 2.45 18 3V4Z" fill="black" fill-opacity="0.54"/>
</svg>
} text={'Manage sources'} style={{backgroundColor: "#FFFFFF"}}></MenuItem>
            
            
            <MenuItem svg={<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM17 14H3C2.45 14 2 13.55 2 13V8H18V13C18 13.55 17.55 14 17 14ZM18 4H2V3C2 2.45 2.45 2 3 2H17C17.55 2 18 2.45 18 3V4Z" fill="black" fill-opacity="0.54"/>
</svg>
} text={'Integration'} style={{backgroundColor: "#FFFFFF"}}></MenuItem>
            
            
            <MenuItem svg={<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM17 14H3C2.45 14 2 13.55 2 13V8H18V13C18 13.55 17.55 14 17 14ZM18 4H2V3C2 2.45 2.45 2 3 2H17C17.55 2 18 2.45 18 3V4Z" fill="black" fill-opacity="0.54"/>
</svg>
} text={'Alerts'} style={{backgroundColor: "#FFFFFF"}}></MenuItem>

<Setting></Setting>

        </div>
    );
}

export default NavBaar;