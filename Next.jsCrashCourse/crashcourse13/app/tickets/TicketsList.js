import Link from "next/link"

async function getTickets() {
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0, // This value indicates if the data is going to be cached and how many seconds is it going to wait until it revalidates/refetches the data. 
        }
    })

    return res.json()
}

export default async function TicketsList() {
    const tickets = await getTickets()

  return (
    <div>
        {
            tickets.map((ticket) => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`tickets/${ticket.id}`}>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0,200)}...</p>
                    <div 
                    className= 
                        {`pill ${ticket.priority}`}
                    >
                        {ticket.priority}
                        </div>
                        </Link>
                        { ticket.length === 0 && (<p className="text-center">There are no open tickets, yay!</p>)}
                </div>
            ))
        }
    </div>
  )
}
