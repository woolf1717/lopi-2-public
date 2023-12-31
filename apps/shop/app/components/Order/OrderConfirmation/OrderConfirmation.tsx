'use client';

import { Col, Container, Row } from 'react-bootstrap';

import { Button } from '@lopi-2/common';
import { FC } from 'react';
import { IconWrapper } from '../../Icons/IconWrapper';
import { OrderDetails } from './components/OrderDetails/OrderDetails';
import { OrderSummary } from '../OrderSummary/OrderSummary';
import { PaymentMethod } from './PaymentMethod';
import { createPayUOrder } from '../../../../actions/orderApi';
import style from './OrderConfirmation.module.scss';
import { useOrderContext } from '../../../contexts/OrderContext';

export const OrderConfirmation: FC = () => {
  const { orderData } = useOrderContext();
  const isPayUPayment = orderData?.paymentMethod === PaymentMethod.PAYU;

  const handlePayNowClick = async () => {
    try {
      const orderUuid = orderData?.orderUid;
      const payUOrderResponse = await createPayUOrder(orderUuid);
      const redirectUri = payUOrderResponse?.redirectUri;

      if (redirectUri) {
        window.location.href = redirectUri;
      } else {
        console.error('No redirectUri in the PayU response.');
      }
    } catch (error) {
      console.error('Error during payment process:', error);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col className={style.titleContainer}>
          <h1 className={style.title}>
            <IconWrapper icon={<i className="bi bi-check"></i>} />
            Dziękujemy za złożożenie zamówienia
          </h1>
        </Col>
      </Row>
      <Row className={style.orderContainer}>
        <Col>
          <OrderDetails />
        </Col>
        <Col>
          <h2>Podsumowanie Zamówienia</h2>
          <div className={style.summaryContainer}>
            <OrderSummary />
            {isPayUPayment && (
              <Button
                type={'button'}
                onClick={handlePayNowClick}
                title="Opłać zamówienie"
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
