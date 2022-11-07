import { createChannel, createClient } from "nice-grpc";
import {
  ExampleServiceClient,
  ExampleServiceDefinition,
} from "./compiled_proto/example";

const channel = createChannel("localhost:8080");

const client: ExampleServiceClient = createClient(
  ExampleServiceDefinition,
  channel
);

async function bootstrap() {
  const request = {
    name: "Pepe",
    surname: "Lopez",
    age: 32,
  };

  console.log("Enviado:", request);

  const response = await client.exampleUnaryMethod(request);

  console.log("Recibido:", response);

  channel.close();
}

bootstrap();
