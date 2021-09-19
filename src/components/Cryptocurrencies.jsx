import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

// captialize the variables with big caps
const Cryptocurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  console.log(cryptos);
  return (
    <>
      <Row gutters={(32, 32)} className="crypto-card-container">
        {cryptos.map((currency) => {
          <Col xs={24} sm={12} ig={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              {/* card */}
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price:{millify(currency.price)}</p>
                <p>Market Cap:{millify(currency.marketCap)}</p>
                <p>Dailt Change:{millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>;
        })}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
