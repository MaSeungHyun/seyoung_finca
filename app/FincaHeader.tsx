import React from 'react';
import logo from "./assets/logo.png"
import bag from "./assets/shopping_bag.png"
import user from "./assets/person.png"
import Image from 'next/image';

export default function FincaHeader(props) {
    return (
        <div>
            <div className="header">
                <div className="header_text">
                    마리테 베딩시뮬레이션 단독 UPTO 17% COUPON
                </div>
                <div className="header-nav">
                    <div className="header-left">
                        <Image className='logo' src={logo} alt="logo" />
                        <nav className="nav-item">
                            <div className="nav-item">SHOP</div>
                            <div className="nav-item">INFO</div>
                            <div className="nav-item">MAGAZIN</div>
                            <div className="nav-item">GIFT</div>
                        </nav>
                        
                    </div>
                    <div className="header-right">
                            <Image className="shoping" src={bag} alt="bag" />
                            <Image className="shoping" src={user} alt="user" />
                        </div>
                </div>
            </div>
        </div>
    )

}