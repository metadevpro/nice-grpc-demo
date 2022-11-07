import {
  DeepPartial,
  ExampleRequest,
  ExampleResponse,
  ExampleServiceServiceImplementation,
} from "./compiled_proto/example";

import { createServer } from "nice-grpc";
import { ExampleServiceDefinition } from "./compiled_proto/example";

const exampleServiceImpl: ExampleServiceServiceImplementation = {
  async exampleUnaryMethod(
    request: ExampleRequest
  ): Promise<DeepPartial<ExampleResponse>> {
    // Implementación
    const response: ExampleResponse = {
      message: `${request.name} ${request.surname} tiene ${request.age} años`,
    };

    console.log(new Date().toISOString(), response);

    return response;
  },
};

/*

class ExampleServiceImpl implements ExampleServiceImplementation {
  async exampleUnaryMethod(
    request: ExampleRequest,
  ): Promise<DeepPartial<ExampleResponse>> {
    // ... method logic

    return response;
  }
}

*/

async function bootstrap() {
  const server = createServer();
  server.add(ExampleServiceDefinition, exampleServiceImpl);

  console.log("Server running at 0.0.0.0:8080");
  await server.listen("0.0.0.0:8080");
}

bootstrap();
