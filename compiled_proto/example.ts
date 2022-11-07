/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "nice_grpc.example";

export interface ExampleRequest {
  /** ... */
  name: string;
  surname?: string | undefined;
  age?: number | undefined;
}

export interface ExampleResponse {
  /** ... */
  message: string;
}

function createBaseExampleRequest(): ExampleRequest {
  return { name: "", surname: undefined, age: undefined };
}

export const ExampleRequest = {
  encode(message: ExampleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.surname !== undefined) {
      writer.uint32(18).string(message.surname);
    }
    if (message.age !== undefined) {
      writer.uint32(24).int32(message.age);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExampleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExampleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.surname = reader.string();
          break;
        case 3:
          message.age = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExampleRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      surname: isSet(object.surname) ? String(object.surname) : undefined,
      age: isSet(object.age) ? Number(object.age) : undefined,
    };
  },

  toJSON(message: ExampleRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.surname !== undefined && (obj.surname = message.surname);
    message.age !== undefined && (obj.age = Math.round(message.age));
    return obj;
  },

  fromPartial(object: DeepPartial<ExampleRequest>): ExampleRequest {
    const message = createBaseExampleRequest();
    message.name = object.name ?? "";
    message.surname = object.surname ?? undefined;
    message.age = object.age ?? undefined;
    return message;
  },
};

function createBaseExampleResponse(): ExampleResponse {
  return { message: "" };
}

export const ExampleResponse = {
  encode(message: ExampleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExampleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExampleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExampleResponse {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: ExampleResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<ExampleResponse>): ExampleResponse {
    const message = createBaseExampleResponse();
    message.message = object.message ?? "";
    return message;
  },
};

export type ExampleServiceDefinition = typeof ExampleServiceDefinition;
export const ExampleServiceDefinition = {
  name: "ExampleService",
  fullName: "nice_grpc.example.ExampleService",
  methods: {
    exampleUnaryMethod: {
      name: "ExampleUnaryMethod",
      requestType: ExampleRequest,
      requestStream: false,
      responseType: ExampleResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ExampleServiceServiceImplementation<CallContextExt = {}> {
  exampleUnaryMethod(
    request: ExampleRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ExampleResponse>>;
}

export interface ExampleServiceClient<CallOptionsExt = {}> {
  exampleUnaryMethod(
    request: DeepPartial<ExampleRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ExampleResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
