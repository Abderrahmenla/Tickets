import useRequest from '../../hooks/use-request'
import Router from 'next/router'
const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      ticketId: ticket.id
    },
    onSuccess: (order) => Router.push('/orders/[orderId]',`/orders/${order.id}`),
  })
  return <div>
    <h1>{ticket.title}</h1>
    <h4>Price: {ticket.price} </h4>
    {errors}  
    <button onCLick={() => doRequest() } className="btn btn-primary">Purchase</button>
  </div>;
};

TicketShow.getInitialProps = async (context, client) => {
  const { tikcetId } = context.query;
  const { data } = await client.get(`/api/ticketS/${ticket.id}`);
  return { ticket: data };
}
export default TicketShow;