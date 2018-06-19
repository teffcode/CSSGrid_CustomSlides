import React from 'react';

import './Logo.css';

import TreeSheetOrange from '../../assets/tree_sheet_orange.png';
import TreeSheetYellow from '../../assets/tree_sheet_yellow.png';

const Logo = () => (
    <div className="logo">
        <p className="logo_principal_text">CSS</p>
        <div className="logo_images">
            <img className="tree_sheet_orange" src={TreeSheetOrange} alt="TreeSheetOrange"/>
            <img className="tree_sheet_yellow" src={TreeSheetYellow} alt="TreeSheetYellow"/>
        </div>
        <p className="logo_text">Medellín</p>
    </div>
);

export default Logo;