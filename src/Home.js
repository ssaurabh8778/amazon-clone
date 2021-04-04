import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
      />
      <div className="home__row">
        <Product
          id="12345"
          title="WD 12TB Elements Desktop Hard Drive, USB 3.0 - WDBWLG0120HBK-NESN"
          price={215.25}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/31NBRkcO0ZL._AC_US160_.jpg://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
        />
        <Product
          id="12346"
          title="AmazonBasics Nylon Braided Lightning to USB Cable - MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot (2-Pack) (Durability Rated 4,000 Bends)"
          price={21.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61stA5Z9W0L._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12347"
          title="AmazonBasics Premium Single Monitor Stand - Lift Engine Arm Mount, Aluminum - Black"
          price={116.0}
          rating={3}
          image="https://m.media-amazon.com/images/I/81vVhNmk8JL._AC_UL320_.jpgC_US160_.jpg://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
        />
        <Product
          id="12348"
          title="AmazonBasics Wireless Computer Mouse with USB Nano Receiver - Black"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_UL320_.jpg"
        />
        <Product
          id="12349"
          title="JBL Boombox - Waterproof Portable Bluetooth Speaker - Black (JBLBOOMBOXBLKAM)"
          price={400.27}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41JNB2gbb2L._AC_US160_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12350"
          title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
          price={299.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41jSuUHT8eL._AC_US160_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
