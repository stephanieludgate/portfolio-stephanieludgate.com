import React, {useState} from 'react';

import { Link } from 'react-scroll';
import IconChevronUpSVG from '../icons/chevron-up';

const ScrollArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 500){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 500){
            setShowScroll(false)
        }
    };

    window.addEventListener('scroll', checkScrollTop)
    
    return (
    <Link
        className="scrollTop"
        style={{height: 60, display: showScroll ? 'flex' : 'none'}}
        activeClass="active"
        to="welcome"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}>
            <IconChevronUpSVG />
      </Link>      
  );
}

export default ScrollArrow;

