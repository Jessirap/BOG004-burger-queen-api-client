import './css/kitchen.scss';
// import { AiOutlineMinusCircle } from "react-icons/ai";
// import Timekeeper from "./Timekeeper.jsx";
import { updateOrder } from './providers/OrderProducts.js';
import { getId } from './providers/UserProvider.js';
import { useState } from 'react';
import { Alert } from 'reactstrap';

const Kitchen = (props) => {
  const [messageTime, setMessageTime] = useState('');

  const handleClick = () => {
    let dateNow = new Date();
    const upOrder = {
      userId: getId(),
      status: 'delivered',
      dateProcessed:
        dateNow.getFullYear() +
        '-' +
        (dateNow.getMonth() + 1) +
        '-' +
        dateNow.getDate() +
        ' ' +
        dateNow.getHours() +
        ':' +
        dateNow.getMinutes(),
    };
    
    updateOrder(props.id, upOrder).then((res) => {
      console.log('fechas', res.data.dataEntry, res.data.dateProcessed);

      // let timeOrderMs = new Date().getHours().getTime()
      // console.log(timeOrderMs);
      let timeMs = Math.abs(
        new Date(res.data.dateProcessed).getTime() -
          new Date(res.data.dataEntry).getTime()
      );

      console.log(timeMs);

      const timeOrder = (timeMs) => {
        let seconds = Math.floor((timeMs / 1000) % 60),
          minutes = Math.floor((timeMs / (1000 * 60)) % 60),
          hours = Math.floor((timeMs / (1000 * 60 * 60)) % 24);

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return hours + ':' + minutes + ':' + seconds;
      };


      setTimeout(() => {
        setMessageTime(null);
      }, 3000);

      if (timeOrder(timeMs) < '01:00:00') {
        return setMessageTime(
          `La preparación del pedido tomó ${timeOrder(timeMs)} minutos`
        );
      } else {
        return setMessageTime(
          `La preparación del pedido tomó ${timeOrder(timeMs)} horas`
        );
      }
    });

    // props.dataEntry
  };
  return (
    <div className='container-Kitchen'>
      <section className='container-order'>
        <p className='clientName'>Cliente: {props.client}</p>
        <div>
          {props.product.map((product) => {
            return (
              <section
                className='amount-product'
                key={'order-product-' + product.id}
              >
                <div className='amount'>{product.quantity}</div>
                <div className='product-name'>{product.name}</div>
              </section>
            );
          })}
        </div>
        <div className='dataEntry'>{props.dataEntry}</div>
        <button type='button' className='btn-order' onClick={handleClick}>
          ENVIAR
        </button>
        {messageTime && <Alert color='success'>{messageTime}</Alert>}
      </section>
    </div>
  );
};

export default Kitchen;
