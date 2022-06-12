const flightTimeCalculation = (payload) => {
  return payload.map(ticket => {
    const arrivalThere = new Date(`${ticket.segments[0].arrival_date} ${ticket.segments[0].arrival_time}`)
    const departureThere = new Date(`${ticket.segments[0].departure_date} ${ticket.segments[0].departure_time}`)
    const arrivalBack = new Date(`${ticket.segments[1].arrival_date} ${ticket.segments[1].arrival_time}`)
    const departureBack = new Date(`${ticket.segments[1].departure_date} ${ticket.segments[1].departure_time}`)
    return {
      ...ticket, 'fullTimeThere': {
        hours: arrivalThere.getHours() - departureThere.getHours(),
        min: arrivalThere.getMinutes() % departureThere.getMinutes(),
      },
      'fullTimeBack': {
        hours: arrivalBack.getHours() - departureBack.getHours(),
        min: arrivalBack.getMinutes() % departureBack.getMinutes(),
      }
    }
  })
};

export default flightTimeCalculation;