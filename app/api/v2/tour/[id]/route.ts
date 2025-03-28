import { NextResponse } from "next/server";

const tripDetails = [
  { id: 1, duration: "03 Nights / 04 Days", title: "Gangtok Tour Package", price: 6200, location: "Gangtok 3N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-tour-boxx.jpg" },
  { id: 2, duration: "04 Nights / 05 Days", title: "Gangtok Lachung Tour", price: 8000, location: "Gangtok 3N, Lachung 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/spellbinding-sikkim-tourr.jpg" },
  { id: 3, duration: "05 Nights / 06 Days", title: "Mesmerizing Meghalaya Tour", price: 22000, location: "Shillong 3N, Cherrapunji 2N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/darjeeling-gangtok-family-tour.jpg" },
  { id: 4, duration: "07 Nights / 08 Days", title: "Himalayan Wonder Tour", price: 28000, location: "Darjeeling 3N, Gangtok 3N, Lachung 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/Scintillating-Sikkim-box.jpg" },
  { id: 5, duration: "03 Nights / 04 Days", title: "Goa Beach Special", price: 15500, location: "Goa 3N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-with-lachung-tour-boxx.jpg" },
  { id: 6, duration: "05 Nights / 06 Days", title: "Kerala Backwater Delight", price: 20000, location: "Munnar 2N, Alleppey 2N, Cochin 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/with-yak.jpg" },
  { id: 7, duration: "08 Nights / 09 Days", title: "Royal Rajasthan Tour", price: 35000, location: "Jaipur 2N, Udaipur 2N, Jodhpur 2N, Jaisalmer 2N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/06/green-lake-trek-n.jpg" },
  { id: 8, duration: "06 Nights / 07 Days", title: "Andaman Island Escape", price: 25000, location: "Port Blair 3N, Havelock 2N, Neil 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/rumtek-monastery-side-boxx.jpg" },
  { id: 9, duration: "04 Nights / 05 Days", title: "Kashmir Paradise Tour", price: 19000, location: "Srinagar 2N, Gulmarg 1N, Pahalgam 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/with-yak.jpg" },
  { id: 10, duration: "07 Nights / 08 Days", title: "Leh-Ladakh Adventure", price: 40000, location: "Leh 3N, Nubra 2N, Pangong 2N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/amazing-family-holiday-sikkim-boxx.jpg" }
];

export async function GET(req:Request) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  const tripId = parseInt(id || "0");

  if (!tripId) {
    return NextResponse.json({ error: "Invalid trip ID" }, { status: 400 });
  }

  const trip = tripDetails.find((t) => t.id === tripId);
  if (!trip) {
    return NextResponse.json({ error: "Trip not found" }, { status: 404 });
  }

  return NextResponse.json(trip);
}
