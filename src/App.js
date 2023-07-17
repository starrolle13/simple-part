import React from "react";
import './styles.less';
import "./App.css";
// import './files/englishPartsStyles.min.css';
import logo from"./files/logo.png";
import austinHealeyImage from "./files/austin-healey.png";
import bodyImage from "./files/body.jpg";
import brakeSystemImage from "./files/brake-system.jpg";
import cablesImage from "./files/cables.jpg";
import carCareImage from "./files/car-care.jpg";
import competitionPartsImage from "./files/competition-parts.jpg";
import coolingImage from "./files/cooling.jpg";
import electricalComponentsImage from "./files/electrical-components.jpg";
import engineDrivelineImage from "./files/engine-driveline.jpg";
import exhaustEmissionImage from "./files/exhaust-emission.jpg";
import exteriorImage from "./files/exterior.jpg";
import fuelSystemImage from "./files/fuel-system.jpg";
import interiorImage from "./files/interior.jpg";
import jaguarImage from "./files/jaguar.png";
import maintenanceImage from "./files/maintenance.jpg";
import mgImage from "./files/mg.png";
import oilSystemImage from "./files/oil-system.jpg";
import performanceHandlingImage from "./files/performance-handling.jpg";
import suspensionImage from "./files/suspension.jpg";
import topsCoversImage from "./files/tops-covers.jpg";
import transmissionImage from "./files/transmission.jpg";
import triumphImage from "./files/triumph.png";


const App = () => {
  const styles = {
    backgroundColor: "white",
    color: "black"
  };
  return (
    <>
      <a href="#">Skip to Content</a>

      <div className="h1TextHeader">
        <div className="container">
          <div className="row navbar-row">
            <div className="col-sm-11 small single-text-line-small h1Text">
              <h1 className="body-2 text-muted">
                Browse our complete catalog of OEM and licensed British heritage
                parts for your classNameic British automobile. | Kalamazoo, MI
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div id="ContentPlaceHolderContainer" className="content en">
        <div
          className="header-navigation sp-nav dealer"
          id="HeaderNavigationContainer"
        >
          <div className="navbar navbar-default header-nav-default">
            <nav className="navbar navbar-default headerNav">
              <div className="container">
                <div className="collapse navbar-collapse" id="nav-links"></div>

                <div className="navbar-header header-logo">
                  <a className="navbar-brand business-logo" href="#">
                    <img alt="" src={logo}></img>
                  </a>
                </div>
                <div className="navbar-text business-information">
                  <div
                    className="business-information__name heading-2"
                    href="/"
                  >
                    EnglishParts.com
                  </div>
                  <div className="business-contact-details">
                    <div className="contact-detail business-contact-details__location">
                      5850 Stadium Dr, Kalamazoo, MI 49009
                    </div>
                    <div className="contact-detail business-contact-details__phone">
                      866.467.1776
                    </div>
                    <div className="contact-detail business-contact-details__email">
                      <a className="small" href="#">
                        sales@englishparts.com
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="navbar-toggle collapsed header-mobile-toggle"
                  data-toggle="collapse"
                  aria-expanded="false"
                  id="MobileNavToggle"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <ul
                  className="nav navbar-nav navbar-right navigation-link-group"
                  id="HeaderNavigationLinks"
                >
                  <li
                    id="PartsDropdown"
                    className="dropdown navigation-list-item"
                  >
                    <a
                      href="#"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="dropdown-toggle navigation-link category-links-button"
                    >
                      Parts
                    </a>{" "}
                    <ul className="dropdown-menu navlink-dropdown-menu"> </ul>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="about-us-link navigation-links heading-4"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="utility-bar cf" id="UtilityBar">
          <div className="utility-bar-top">
            <div className="container utility-bar-container">
              <div
                className="utility-bar__section utility-bar__search"
                id="SmartSearch"
                role="search"
                aria-labelledby="header-search"
              >
                <div
                  id="utilitySmartSearch"
                  className="input-group utility-bar__element"
                >
                  <span className="input-group-addon utility-bar__search-icon icon-magnifier"></span>
                  <label className="sr-only">Search</label>
                  <input
                    id="SearchInput"
                    type="text"
                    title="Click here to search"
                    className="form-control utility-bar__search-input"
                    placeholder="Search by Keywords, Part Numbers or VIN"
                  ></input>
                  <span className="input-group-btn" title="Search Button">
                    <button
                      type="button"
                      className="btn btn-default utility-bar__search-button"
                      id="searchBtn"
                    >
                      Go{" "}
                    </button>
                  </span>
                </div>
              </div>
              <div
                id="MyGarage"
                className="utility-bar__section utility-bar__select-vehicle"
              >
                <div id="selectVehicle" className="utility-bar__element">
                  <div
                    id="selectVehicleText"
                    title="My Garage"
                    className="utility-bar__select-vehicle-text"
                  >
                    Select Your Vehicle
                  </div>{" "}
                  <button
                    type="button"
                    id="UtilityBarToggleButton"
                    title="Select Vehicle Button"
                    aria-label="Select Vehicle Button"
                    className="utility-bar__select-vehicle-button"
                  >
                    <span className="icon-arrow-down select-vehicle-icon"></span>
                  </button>
                </div>{" "}
                <div className="boxTriangle" style={styles}>
                  <span className="top-bot my-garage-top"></span>
                </div>{" "}
                <div className="garage__container" style={styles}>
                  <div id="garageContainer" className="garage garage-vehicles">
                    <div className="garage__header">
                      My Garage
                      <button
                        type="button"
                        aria-label="close"
                        className="close my-garage__close"
                      >
                        <span aria-hidden="true"></span>
                      </button>
                    </div>{" "}
                    <div className="garage__content no-garage-content">
                      {" "}
                      <div className="garage__selection" style={styles}>
                        <span
                          aria-hidden="true"
                          className="icon-partman"
                        ></span>{" "}
                        <div className="garage__help">
                          You can edit the name of your vehicle by clicking the
                          pencil icon on the right.
                        </div>{" "}
                        <div className="garage-vehicles"></div>{" "}
                        <div className="garage__additions no-vehicles">
                          <div className="vehicle-selection-addition">
                            <button
                              type="button"
                              className="garage__select-vehicle"
                            >
                              + Add New Vehicle
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="utility-bar__section"
                id="CartWidgetUtility"
                title="Cart"
              >
                <button
                  type="button"
                  id="CartWidgetHeaderButton"
                  className="utility-bar__section utility-bar__element utility-bar__cart cart-widget-button"
                >
                  <span className="cart-widget-button__icon icon-basket"></span>{" "}
                  <span
                    id="NumCartItems"
                    aria-label="0 in Cart. Click to view Cart"
                    className="cart-widget-button__number badge-normal"
                  >
                    0
                  </span>
                </button>
              </div>
            </div>

            <div className="cartControlContainer" style={styles}>
              <div className="cartControlLightBox" style={styles}></div>
              <div className="cartWidgetContainer">
                <div className="row">
                  <div className="col-md-12 cartWidget">
                    <div className="panel">
                      <div className="panel-heading">
                        <div className="panel-title">
                          <div className="row">
                            <div className="col-xs-8">
                              <h2 id="LblCart" aria-labelledby="Your Cart">
                                Your Cart
                              </h2>
                            </div>
                            <button
                              type="button"
                              className="col-xs-4 closeWidget"
                              title=""
                            >
                              <span className="sr-only">Close Cart</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="panel-body mobileCheckoutTop">
                        <input
                          type="button"
                          name="proceedtoCheckoutMbl"
                          value="Checkout"
                          id="proceedtoCheckoutMbl"
                          title="Go to Secure Checkout"
                          className="btn btn-primary btn-block text-uppercase"
                        ></input>
                      </div>
                      <div className="widgetItemsWrapper"></div>
                      <div className="panel-body orderTotalWidget">
                        <div className="row">
                          <div className="col-xs-7 text-left"></div>
                          <div className="col-xs-5 text-right"></div>
                        </div>
                      </div>
                      <div className="panel-body cartWidgetTotal ">
                        <div className="row">
                          <div className="col-xs-6 text-left totalText"></div>
                          <div className="col-xs-6 text-right money"></div>
                        </div>
                      </div>
                      <div className="panel-footer">
                        <div className="panel-body">
                          <button
                            type="button"
                            className="btn btn-default btn-block btn-tertiary"
                            title=""
                          >
                            Continue Shopping
                          </button>
                          <a
                            href="#"
                            className="btn btn-tertiary btn-block viewCartWidgetBtn"
                            title=""
                          >
                            View Cart
                          </a>
                          <input
                            type="button"
                            name="proceedtoCheckout"
                            value="Checkout"
                            id="proceedtoCheckout"
                            title="Go to Secure Checkout"
                            className="btn btn-primary btn-block text-uppercase"
                          ></input>
                        </div>
                      </div>
                      <div className="panel-body cartWidgetWarning">
                        <a
                          id="TabbingCartWidgetWarning"
                          className="lastLink"
                          aria-labelledby="Tabbing past or clicking of this link will close the Cart"
                        >
                          Tabbing past or clicking of this link will close the
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="breadcrumb-container">
          <div className="container topBreadcrumbs">
            <ol className="breadcrumb">
              <li>
                <a id="breadcrumbItem-1" href="#" aria-label="" title="">
                  Welcome to EnglishParts.com, your home for Jaguar, MG, Triumph
                  and Austin Healey Parts!
                </a>
              </li>
            </ol>
            <div className="breadcrumb-links"></div>
          </div>
        </div>

        <div id="contentWrapper">
          <div className="" id="contentDiv" role="main">
            <div
              id="Content_PageBody_heroJumbotron"
              className="jumbotron dealer"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 jumbotronElementContainer">
                    <div
                      id="Content_PageBody_CarouselTextPlacement"
                      className="panel heroPlacementContainer"
                    >
                      <div className="panel-heading">
                        <h2 className="panel-title">
                          Premium Austin Healey, Jaguar, MG, and Triumph Parts
                        </h2>
                      </div>
                      <div className="panel-body">
                        <span className="defaultHeroBodyText">
                          <span className="bodyTextSpan">
                            Unmistakable style. That's what you love about your
                            Austin Healey, Jaguar, MG, or Triumph. At
                            EnglishParts.com, we carry a large selection of
                            premium repair, maintenance and restoration parts
                            for classNameic British cars. You know you can count
                            on us because we're located in Kalamazoo, MI.
                            Finding the right premium repair parts has always
                            been our first priority. Our state of the art
                            premium parts diagrams ensure that you're getting
                            the perfect part the first time. Our experienced
                            team knows these cars inside and out, and is here to
                            help. Excellence. The first time, every time.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="Content_PageBody_RefineVehicleLinksUpdatePanel">
              <div
                id="Content_PageBody_VehicleSelector"
                className="selectVehicle"
              >
                <div id="Content_PageBody_div_seoLinks" className="container">
                  <div
                    id="Content_PageBody_seoContainerDiv"
                    className="seoContainer"
                  >
                    <div
                      id="Content_PageBody_seoTitle"
                      className="seoTitle lead text-center"
                    >
                      <h2>Select a Make</h2>
                    </div>
                    <div
                      id="Content_PageBody_RefineResultsDefaultContainer"
                      className="row refineResults"
                    >
                      <a
                        className="seoLinkItem Make"
                        href="#"
                        title="Shop OEM Austin Healey Parts"
                      >
                        <img src={austinHealeyImage} alt=""></img>
                        <div>Austin Healey</div>
                      </a>

                      <a
                        className="seoLinkItem Make"
                        href="#"
                        title="Shop OEM Jaguar Parts"
                      >
                        <img src={jaguarImage} alt=""></img>
                        <div>Jaguar</div>
                      </a>

                      <a
                        className="seoLinkItem Make"
                        href="#"
                        title="Shop OEM MG Parts"
                      >
                        <img src={mgImage} alt=""></img>
                        <div>MG</div>
                      </a>

                      <a
                        className="seoLinkItem Make"
                        href="#"
                        title="Shop OEM Triumph Parts"
                      >
                        <img src={triumphImage} alt=""></img>
                        <div>Triumph</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Content_PageBody_QuickStartControl_QuickStartUpdatePanel"
              className="quick-start-update-panel"
            >
              <div
                id="Content_PageBody_QuickStartControl_categoriesSelector"
                className="QuickStartLinksControl"
              >
                <div
                  id="Content_PageBody_QuickStartControl_div_quickStartLinks"
                  className="quickStart-Categories"
                >
                  <div
                    id="Content_PageBody_QuickStartControl_QuickStartPlacementAlternative"
                    className="quickStartContentWrap qsLinksContainer"
                  >
                    <div className="quickStartAltTitle">
                      <h2>Select a Category</h2>
                    </div>
                    <div className="quickStartAltText"></div>
                  </div>

                  <div className="qsLinksContainer">
                    <div
                      id="Content_PageBody_QuickStartControl_CategoryList"
                      className="category-panel"
                    >
                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Body Parts"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={bodyImage}
                              aria-hidden="true"
                              alt="Shop OEM Body Parts"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">Body</div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Brake System Parts"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={brakeSystemImage}
                              aria-hidden="true"
                              alt="Shop OEM Brake System Parts"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">Brake System</div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Cables"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={cablesImage}
                              aria-hidden="true"
                              alt="Shop OEM Cables"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">Cables</div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Car Care, Tools and Shop Supplies"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={carCareImage}
                              aria-hidden="true"
                              alt="Shop OEM Car Care, Tools and Shop Supplies"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">
                            Car Care, Tools and Shop Supplies
                          </div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Competition Parts"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={competitionPartsImage}
                              aria-hidden="true"
                              alt="Shop OEM Competition Parts"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">
                            Competition Parts
                          </div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Convertible Tops, Hard Tops and Tonneau Covers"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={topsCoversImage}
                              aria-hidden="true"
                              alt="Shop OEM Convertible Tops, Hard Tops and Tonneau Covers"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">
                            Convertible Tops, Hard Tops and Tonneau Covers
                          </div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Cooling System Parts"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={coolingImage}
                              aria-hidden="true"
                              alt="Shop OEM Cooling System Parts"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">
                            Cooling System
                          </div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Electrical Components"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={electricalComponentsImage}
                              aria-hidden="true"
                              alt="Shop OEM Electrical Components"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">
                            Electrical Components
                          </div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Engine and Driveline Parts"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={engineDrivelineImage}
                              aria-hidden="true"
                              alt="Shop OEM Engine and Driveline Parts"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">
                            Engine and Driveline
                          </div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Exhaust and Emissions"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={exhaustEmissionImage}
                              aria-hidden="true"
                              alt="Shop OEM Exhaust and Emissions"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">
                            Exhaust and Emissions
                          </div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Exterior Parts"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={exteriorImage}
                              aria-hidden="true"
                              alt="Shop OEM Exterior Parts"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">Exterior</div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Fuel Systems"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={fuelSystemImage}
                              aria-hidden="true"
                              alt="Shop OEM Fuel Systems"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">Fuel Systems</div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Interior Parts"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={interiorImage}
                              aria-hidden="true"
                              alt="Shop OEM Interior Parts"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">Interior</div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Maintenance Parts"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={maintenanceImage}
                              aria-hidden="true"
                              alt="Shop OEM Maintenance Parts"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">Maintenance</div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Oil System Parts"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img 
                              src={oilSystemImage}
                              aria-hidden="true"
                              alt="Shop OEM Oil System Parts"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">Oil System</div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Performance &amp; Handling"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={performanceHandlingImage}
                              aria-hidden="true"
                              alt="Shop OEM Performance &amp; Handling"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">
                            Performance &amp; Handling
                          </div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Suspension Parts"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={suspensionImage}
                              aria-hidden="true"
                              alt="Shop OEM Suspension Parts"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">Suspension</div>
                        </div>
                      </a>

                      <a
                        className="qsCategoryLinkItem"
                        href="#"
                        title="Shop OEM Transmission, Gearbox and Clutch Parts"
                      >
                        <div className="qsCategoryWrapper">
                          <div className="qsImgWrapper">
                            <img
                              src={transmissionImage}
                              aria-hidden="true"
                              alt="Shop OEM Transmission, Gearbox and Clutch Parts"
                            ></img>
                          </div>
                          <div className="qsdisplayStringDiv">
                            Transmission, Gearbox and Clutch
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="VinControl_VinContainer" className="vin-container">
          <div className="vin-row row">
            <button
              id="VinControl_VinCloseModal"
              type="button"
              className="closeModal"
            >
              <span className="sr-only">Close VIN entry layer</span>
            </button>
            <div className="vin-col col-md-12">
              <div className="form-inline">
                <label className="center-block">Enter VIN</label>
                <div className="form-group">
                  <label className="sr-only">Enter 17 digit VIN here</label>
                  <input
                    name="VinControl$vinEntry"
                    type="text"
                    id="VinControl_vinEntry"
                    className="form-inline"
                    placeholder="Enter 17 digit VIN here"
                  ></input>
                </div>
                <button
                  id="VinControl_vinSubmit"
                  type="button"
                  className="btn btn-sm btn-primary"
                >
                  Go
                </button>
              </div>
              <div className="vinResults"></div>
            </div>
          </div>
        </div>

        <div className="footer" role="contentinfo">
          <div className="panel">
            <div className="panel-body links-panel">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 contactLinksList">
                    <h2 className="list-header">About</h2>
                    <ul className="list-unstyled links-list">
                      <li className="acceptedPaymentsLink">
                        <a href="#" title="Accepted Payment">
                          Accepted Payment
                        </a>
                      </li>

                      <li className="contactLink">
                        <a href="#" title="Contact Us">
                          Contact Us
                        </a>
                      </li>
                      <li className="policyLink">
                        <a href="#" title="Policies">
                          Policies
                        </a>
                      </li>
                      <li className="refundsLink">
                        <a href="#" title="Refunds">
                          Refunds
                        </a>
                      </li>
                      <li className="returnsLink">
                        <a href="#" title="Returns">
                          Returns
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-3 legalLinksList">
                    <h2 className="list-header">Legal</h2>
                    <ul className="list-unstyled links-list">
                      <li title="Policies">
                        <a href="#" title="Policies">
                          Policies
                        </a>
                      </li>
                      <li></li>
                    </ul>
                  </div>

                  <div className="col-md-3 miscLinksList">
                    <h2 className="list-header">Links</h2>

                    <ul className="list-unstyled links-list">
                      <li>
                        <a href="#" title="My Information">
                          My Information
                        </a>
                      </li>

                      <li>
                        <a href="#" title="Testimonials">
                          Testimonials
                        </a>
                      </li>
                    </ul>
                    <ul className="list-unstyled links-list sites-list"></ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body disclaimer-panel">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div id="disclaimer-icon"></div>
                    <div className="disclaimer-text">
                      While every reasonable effort is made to ensure the
                      accuracy of this data, we are not responsible for any
                      errors or omissions contained on these pages. Please
                      verify any information in question with a sales
                      representative.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="logoCopyrightContainer">
              <div className="row panel-body copyright-panel">
                <div className="container">
                  <div className="row copyrightRow">
                    <div className="copyright-column">
                      © 2021 EnglishParts.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body copyright-panel spLogoPanel">
                <div className="container">
                  <div className="row spLogoRow">
                    <div className="spLogoColumn">
                      <div className="spLogo"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cf"></div>
        <div className="serverName small text-muted container">
          SPWEB49
          <input type="hidden" name="Vsnum" id="Vsnum" value="V7.429"></input>
        </div>
      </div>

      <input
        type="hidden"
        name="hdnSearchBtnFitmentQueryString"
        id="hdnSearchBtnFitmentQueryString"
      ></input>
    </>
  );
};

export default App;
