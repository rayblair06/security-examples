import consumer from "./consumer";
import producer from "./producer";

// Serve Consumer
consumer.listen(3001, () => {
  console.log(`Consumer is listening at port 3001`);
});

// Serve Producer
producer.listen(3002, () => {
  console.log(`Producer is listening at port 3002`);
});
