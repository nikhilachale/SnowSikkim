import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    const faqData = [
      {
        question: "How do I plan my Sikkim tour?",
        answer:
          "Firstly, you can book your tickets to either Bagdogra Airport, Pakyong Airport of Sikkim, or New Jalpaiguri Railway station as per your convenience. Later, draw a day-wise itinerary covering popular tourist attractions like Tsomgo Lake, Baba Mandir, Gurudongmar Lake, Lachen, Lachung, Yumthang Valley, etc.",
      },
      {
        question: "What is the best time to take the North Sikkim tour package?",
        answer:
          "The most ideal time to visit North Sikkim is between May and September when the weather remains pleasant and temperatures range between 28 and 30 degrees Celsius. If you wish to experience snowfall with low temperatures, you may also plan your North Sikkim tour between January and February.",
      },
      {
        question: "How much does the Sikkim travel package cost?",
        answer:
          "A comfortable trip to Sikkim for two people for 7 days costs an average of ₨. 13,000 with accommodation and transfers.",
      },
      {
        question: "How can I plan a 5-day Sikkim tour itinerary?",
        answer: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Day 1 – Arrive at Gangtok and transfer to the hotel. Rest of the day relax.</li>
            <li>Day 2 – Explore popular tourist attractions in Gangtok</li>
            <li>Day 3 – Transfer from Gangtok to Darjeeling</li>
            <li>Day 4 – Explore popular tourist attractions in Darjeeling</li>
            <li>Day 5 – Transfer to the airport or railway station</li>
          </ul>
        ),
      },
      {
        question: "Which part of Sikkim is best for a holiday?",
        answer:
          "Lachen, Lachung, and Yumthang Valley are the best parts of Sikkim for a leisure holiday and are known for their calm and serenity. Lachen is home to Tibetan nomadic tribes during winters, and tourists visit here to experience peace. Lachung is a perfect place to experience snow and is a gateway to beautiful Gurudongmar Lake and Tso Lhamu Lake. Yumthang Valley is known as the flower valley of Sikkim and offers breathtaking natural scenic beauty.",
      },
      {
        question: "What is the ideal duration of the trip for the Sikkim holiday package?",
        answer: (
          <>
            Sikkim has a lot to explore and experience. To get a proper insight into
            this beautiful destination, it is best to plan a 7-8 day trip which should
            include visits to popular sightseeing places like:
            <ul className="list-disc pl-5 space-y-1">
              <li>Gangtok (Tsomgo Lake, Nathula Pass, Baba Mandir)</li>
              <li>Lachen and Lachung (Gurudongmar Lake, Yumthang Valley)</li>
              <li>Pelling with Namchi and Ravangla</li>
            </ul>
          </>
        ),
      },
    ]
  
    return (
      <div className="bg-white p-10  mt-7 flex flex-col items-center justify-center">
        <h2 className=" text-3xl px-4 text-black font-semibold">Sikkim Travel FAQs</h2>
        <Accordion type="single" collapsible className="w-full max-w-4xl">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg text-black font-medium">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-black">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }