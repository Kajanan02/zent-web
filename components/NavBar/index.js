import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Logo = "/senzagro_black_logo.png"

export default function NavBar() {
  const router = useRouter()
  const [visibleToggleIndex, setVisibleToggleIndex] = useState(0)
  const location = router;

  function menuClick() {
    console.log("request_headers_to_remove")
    let header = document.querySelector(".nav-default")

    header.classList.toggle("menu-opened")
  }
  function onVisibleToggleIndexChange(index) {
    setVisibleToggleIndex(index === visibleToggleIndex ? 0 : index)
  }


  return (
    <div className={"nav-box"}>
      <nav className={`nav-default nav-next`}>
        <div className="container">
          <div className="logo" onClick={() => {
            router.push("/")
          }}>
            <img alt="SenzAgro Logo" src={Logo} className={"dark"} />
          </div>

          <div className={"nav-right"}>
            <div className="primary-menu pr-1">
              <a className={location.pathname === "/solutions/solution-1" || location.pathname === "/solutions/solution-2" || location.pathname === "/solutions/solution-3" || location.pathname === "/solutions/solution-4" ? "active" : ""}>
                {`Our Solutions`}
                <b style={{ lineHeight: "0px", fontSize: "14px", marginLeft: "2px", }} > &#9660; </b>
                <ul className="navbar_submenu dropdown_menu-6">
                  <li><Link href={`/solutions/precision-agriculture`}>{`Precision Agriculture`}</Link></li>
                  <li><Link href="/solutions/farmer-management-system">{`Farmer Management System`}</Link></li>
                  <li><Link href="/solutions/farm-operations-management">{`Farm Operations Management`}</Link></li>
                  <li><Link href="/solutions/farm-financial-management">{`Farm Financial Management`}</Link></li>
                </ul>
              </a>

              <a className={location.pathname === "/box-products" || location.pathname === "/menu-products" || location.pathname === "/diagnosis-products" ? "active" : ""} >
                {`Products`}
                <b style={{ lineHeight: "0px", fontSize: "14px", marginLeft: "2px", }} > &#9660; </b>
                <ul className="navbar_submenu dropdown_menu-6">
                  <li><Link href="/box-products">{`Box Products`}</Link></li>
                  <li><Link href="/menu-products">{`Menu Products`}</Link></li>
                  <li><Link href="/diagnosis-products">{`Diagnosis Products`}</Link></li>
                </ul>
              </a>

              <a className={location.pathname === "/about" || location.pathname === "/news" || location.pathname === "/careers" || location.pathname === "/case-studies" || location.pathname === "/blogs" ? "active" : ""} >
                {`Company`}
                <b style={{ lineHeight: "0px", fontSize: "14px", marginLeft: "2px", }} > &#9660; </b>
                <ul className="navbar_submenu dropdown_menu-6">
                  <li><Link href="/about">{`About`}</Link></li>
                  <li><Link href="/news">{`News`}</Link></li>
                  <li><Link href="/careers">{`Careers`}</Link></li>
                  <li><Link href="/case-studies">{`Case Studies`}</Link></li>
                  <li><Link href="/blogs">{`Blogs`}</Link></li>
                </ul>
              </a>


              <Link href="/contact-us" className={location.pathname === "/contact-us" ? "active" : ""} >
                {`Contact Us`}
              </Link>

              <Link href="/agronomist-portal" className={location.pathname === "/agronomist-portal" ? "active" : ""} >
                {`Agronomist Portal`}
              </Link>

            </div>

            <Link href="/book-demo">
              <a className={"primary-square-btn-style w-120 mt-5 ml-16 frame-min p-for-demo-btn"}> {`Book Demo`} </a>
            </Link>
          </div>
          <div className="burger-container">
            <div id="burger">
              <div className="bar topBar"></div>
              <div className="bar btmBar"></div>
              <div className="bar middleBar m-t-12"></div>
            </div>
          </div>
        </div>
        <ul className="mob-menu ">

          <li className="menu-item">
            <a onClick={() => onVisibleToggleIndexChange(1)}>
              {`Our Solutions`}
              <span className={"down-icon"}> {`▼`} </span>
              {1 === visibleToggleIndex && (
                <ul className={"dropdown-menu"}>
                  <li onClick={menuClick}><Link href={`/solutions/precision-agriculture`}>{`Precision Agriculture`}</Link></li>
                  <li onClick={menuClick}><Link href="/solutions/farmer-management-system">{`Farmer Management System`}</Link></li>
                  <li onClick={menuClick}><Link href="/solutions/farm-operations-management">{`Farm Operations Management`}</Link></li>
                  <li onClick={menuClick}><Link href="/solutions/farm-financial-management">{`Farm Financial Management`}</Link></li>
                </ul>
              )}
            </a>
          </li>

          <li className={"menu-item"}>
            <a onClick={() => onVisibleToggleIndexChange(2)}>
              {`Products`}
              <span className={"down-icon"}> {`▼`} </span>
              {2 === visibleToggleIndex && (
                <ul>
                  <li onClick={menuClick} ><Link href="/box-products">{`Box Products`}</Link></li>
                  <li onClick={menuClick} ><Link href="/menu-products">{`Menu Products`}</Link></li>
                  <li onClick={menuClick} ><Link href="/diagnosis-products">{`Diagnosis Products`}</Link></li>
                </ul>
              )}
            </a>
          </li>

          <li className={"menu-item"}>
            <a onClick={() => onVisibleToggleIndexChange(3)}>
              {`Company`}
              <span className={"down-icon"}> {`▼`} </span>
              {3 === visibleToggleIndex && (
                <ul>
                  <li onClick={menuClick}><Link href="/about">{`About`}</Link></li>
                  <li onClick={menuClick}><Link href="/news">{`News`}</Link></li>
                  <li onClick={menuClick}><Link href="/careers">{`Careers`}</Link></li>
                  <li onClick={menuClick}><Link href="/case-studies">{`Case Studies`}</Link></li>
                  <li onClick={menuClick}><Link href="/blogs">{`Blogs`}</Link></li>
                </ul>
              )}
            </a>
          </li>

          <li className="menu-item" onClick={() => menuClick()}>
            <Link href="/contact-us">{`Contact Us`}</Link>
          </li>

          <li className="menu-item" onClick={menuClick}>
            <Link href="/agronomist-portal">{`Agronomist Portal`}</Link>
          </li>

          <li className={"menu-item"}>
            <button onClick={menuClick} className={"primary-square-btn-style h-auto p-0 white-color w-100-per nav-book-demo"} ><Link href="/book-demo">
              {`Book Demo`}
            </Link> </button> </li>
        </ul>
      </nav>
    </div>
  )
}