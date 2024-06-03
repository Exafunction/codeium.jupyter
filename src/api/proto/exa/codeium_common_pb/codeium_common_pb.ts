// Copyright Exafunction, Inc.

// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file exa/codeium_common_pb/codeium_common.proto (package exa.codeium_common_pb, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage
} from '@bufbuild/protobuf';
import { Message, proto3, protoInt64 } from '@bufbuild/protobuf';

/**
 * @generated from enum exa.codeium_common_pb.ExperimentKey
 */
export enum ExperimentKey {
  /**
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: JUPYTER_FORMAT = 77;
   */
  JUPYTER_FORMAT = 77
}
// Retrieve enum metadata with: proto3.getEnumType(ExperimentKey)
proto3.util.setEnumType(ExperimentKey, 'exa.codeium_common_pb.ExperimentKey', [
  { no: 0, name: 'UNSPECIFIED' },
  { no: 77, name: 'JUPYTER_FORMAT' }
]);

/**
 * Authentication source for users on the cloud service.
 *
 * @generated from enum exa.codeium_common_pb.AuthSource
 */
export enum AuthSource {
  /**
   * @generated from enum value: AUTH_SOURCE_CODEIUM = 0;
   */
  CODEIUM = 0
}
// Retrieve enum metadata with: proto3.getEnumType(AuthSource)
proto3.util.setEnumType(AuthSource, 'exa.codeium_common_pb.AuthSource', [
  { no: 0, name: 'AUTH_SOURCE_CODEIUM' }
]);

/**
 * @generated from enum exa.codeium_common_pb.EventType
 */
export enum EventType {
  /**
   * @generated from enum value: EVENT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: EVENT_TYPE_ENABLE_CODEIUM = 1;
   */
  ENABLE_CODEIUM = 1,

  /**
   * @generated from enum value: EVENT_TYPE_DISABLE_CODEIUM = 2;
   */
  DISABLE_CODEIUM = 2,

  /**
   * @generated from enum value: EVENT_TYPE_SHOW_PREVIOUS_COMPLETION = 3;
   */
  SHOW_PREVIOUS_COMPLETION = 3,

  /**
   * @generated from enum value: EVENT_TYPE_SHOW_NEXT_COMPLETION = 4;
   */
  SHOW_NEXT_COMPLETION = 4
}
// Retrieve enum metadata with: proto3.getEnumType(EventType)
proto3.util.setEnumType(EventType, 'exa.codeium_common_pb.EventType', [
  { no: 0, name: 'EVENT_TYPE_UNSPECIFIED' },
  { no: 1, name: 'EVENT_TYPE_ENABLE_CODEIUM' },
  { no: 2, name: 'EVENT_TYPE_DISABLE_CODEIUM' },
  { no: 3, name: 'EVENT_TYPE_SHOW_PREVIOUS_COMPLETION' },
  { no: 4, name: 'EVENT_TYPE_SHOW_NEXT_COMPLETION' }
]);

/**
 * @generated from enum exa.codeium_common_pb.CompletionSource
 */
export enum CompletionSource {
  /**
   * @generated from enum value: COMPLETION_SOURCE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: COMPLETION_SOURCE_TYPING_AS_SUGGESTED = 1;
   */
  TYPING_AS_SUGGESTED = 1,

  /**
   * @generated from enum value: COMPLETION_SOURCE_CACHE = 2;
   */
  CACHE = 2,

  /**
   * @generated from enum value: COMPLETION_SOURCE_NETWORK = 3;
   */
  NETWORK = 3
}
// Retrieve enum metadata with: proto3.getEnumType(CompletionSource)
proto3.util.setEnumType(
  CompletionSource,
  'exa.codeium_common_pb.CompletionSource',
  [
    { no: 0, name: 'COMPLETION_SOURCE_UNSPECIFIED' },
    { no: 1, name: 'COMPLETION_SOURCE_TYPING_AS_SUGGESTED' },
    { no: 2, name: 'COMPLETION_SOURCE_CACHE' },
    { no: 3, name: 'COMPLETION_SOURCE_NETWORK' }
  ]
);

/**
 * Every time this list is updated, we should be redeploying the API server
 * since it uses the string representation for BQ.
 *
 * @generated from enum exa.codeium_common_pb.Language
 */
export enum Language {
  /**
   * @generated from enum value: LANGUAGE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: LANGUAGE_C = 1;
   */
  C = 1,

  /**
   * @generated from enum value: LANGUAGE_CLOJURE = 2;
   */
  CLOJURE = 2,

  /**
   * @generated from enum value: LANGUAGE_COFFEESCRIPT = 3;
   */
  COFFEESCRIPT = 3,

  /**
   * @generated from enum value: LANGUAGE_CPP = 4;
   */
  CPP = 4,

  /**
   * @generated from enum value: LANGUAGE_CSHARP = 5;
   */
  CSHARP = 5,

  /**
   * @generated from enum value: LANGUAGE_CSS = 6;
   */
  CSS = 6,

  /**
   * @generated from enum value: LANGUAGE_CUDACPP = 7;
   */
  CUDACPP = 7,

  /**
   * @generated from enum value: LANGUAGE_DOCKERFILE = 8;
   */
  DOCKERFILE = 8,

  /**
   * @generated from enum value: LANGUAGE_GO = 9;
   */
  GO = 9,

  /**
   * @generated from enum value: LANGUAGE_GROOVY = 10;
   */
  GROOVY = 10,

  /**
   * @generated from enum value: LANGUAGE_HANDLEBARS = 11;
   */
  HANDLEBARS = 11,

  /**
   * @generated from enum value: LANGUAGE_HASKELL = 12;
   */
  HASKELL = 12,

  /**
   * @generated from enum value: LANGUAGE_HCL = 13;
   */
  HCL = 13,

  /**
   * @generated from enum value: LANGUAGE_HTML = 14;
   */
  HTML = 14,

  /**
   * @generated from enum value: LANGUAGE_INI = 15;
   */
  INI = 15,

  /**
   * @generated from enum value: LANGUAGE_JAVA = 16;
   */
  JAVA = 16,

  /**
   * @generated from enum value: LANGUAGE_JAVASCRIPT = 17;
   */
  JAVASCRIPT = 17,

  /**
   * @generated from enum value: LANGUAGE_JSON = 18;
   */
  JSON = 18,

  /**
   * @generated from enum value: LANGUAGE_JULIA = 19;
   */
  JULIA = 19,

  /**
   * @generated from enum value: LANGUAGE_KOTLIN = 20;
   */
  KOTLIN = 20,

  /**
   * @generated from enum value: LANGUAGE_LATEX = 21;
   */
  LATEX = 21,

  /**
   * @generated from enum value: LANGUAGE_LESS = 22;
   */
  LESS = 22,

  /**
   * @generated from enum value: LANGUAGE_LUA = 23;
   */
  LUA = 23,

  /**
   * @generated from enum value: LANGUAGE_MAKEFILE = 24;
   */
  MAKEFILE = 24,

  /**
   * @generated from enum value: LANGUAGE_MARKDOWN = 25;
   */
  MARKDOWN = 25,

  /**
   * @generated from enum value: LANGUAGE_OBJECTIVEC = 26;
   */
  OBJECTIVEC = 26,

  /**
   * @generated from enum value: LANGUAGE_OBJECTIVECPP = 27;
   */
  OBJECTIVECPP = 27,

  /**
   * @generated from enum value: LANGUAGE_PERL = 28;
   */
  PERL = 28,

  /**
   * @generated from enum value: LANGUAGE_PHP = 29;
   */
  PHP = 29,

  /**
   * @generated from enum value: LANGUAGE_PLAINTEXT = 30;
   */
  PLAINTEXT = 30,

  /**
   * @generated from enum value: LANGUAGE_PROTOBUF = 31;
   */
  PROTOBUF = 31,

  /**
   * @generated from enum value: LANGUAGE_PBTXT = 32;
   */
  PBTXT = 32,

  /**
   * @generated from enum value: LANGUAGE_PYTHON = 33;
   */
  PYTHON = 33,

  /**
   * @generated from enum value: LANGUAGE_R = 34;
   */
  R = 34,

  /**
   * @generated from enum value: LANGUAGE_RUBY = 35;
   */
  RUBY = 35,

  /**
   * @generated from enum value: LANGUAGE_RUST = 36;
   */
  RUST = 36,

  /**
   * @generated from enum value: LANGUAGE_SASS = 37;
   */
  SASS = 37,

  /**
   * @generated from enum value: LANGUAGE_SCALA = 38;
   */
  SCALA = 38,

  /**
   * @generated from enum value: LANGUAGE_SCSS = 39;
   */
  SCSS = 39,

  /**
   * @generated from enum value: LANGUAGE_SHELL = 40;
   */
  SHELL = 40,

  /**
   * @generated from enum value: LANGUAGE_SQL = 41;
   */
  SQL = 41,

  /**
   * @generated from enum value: LANGUAGE_STARLARK = 42;
   */
  STARLARK = 42,

  /**
   * @generated from enum value: LANGUAGE_SWIFT = 43;
   */
  SWIFT = 43,

  /**
   * @generated from enum value: LANGUAGE_TSX = 44;
   */
  TSX = 44,

  /**
   * @generated from enum value: LANGUAGE_TYPESCRIPT = 45;
   */
  TYPESCRIPT = 45,

  /**
   * @generated from enum value: LANGUAGE_VISUALBASIC = 46;
   */
  VISUALBASIC = 46,

  /**
   * @generated from enum value: LANGUAGE_VUE = 47;
   */
  VUE = 47,

  /**
   * @generated from enum value: LANGUAGE_XML = 48;
   */
  XML = 48,

  /**
   * @generated from enum value: LANGUAGE_XSL = 49;
   */
  XSL = 49,

  /**
   * @generated from enum value: LANGUAGE_YAML = 50;
   */
  YAML = 50,

  /**
   * @generated from enum value: LANGUAGE_SVELTE = 51;
   */
  SVELTE = 51,

  /**
   * @generated from enum value: LANGUAGE_TOML = 52;
   */
  TOML = 52,

  /**
   * @generated from enum value: LANGUAGE_DART = 53;
   */
  DART = 53,

  /**
   * @generated from enum value: LANGUAGE_RST = 54;
   */
  RST = 54,

  /**
   * @generated from enum value: LANGUAGE_OCAML = 55;
   */
  OCAML = 55,

  /**
   * @generated from enum value: LANGUAGE_CMAKE = 56;
   */
  CMAKE = 56,

  /**
   * @generated from enum value: LANGUAGE_PASCAL = 57;
   */
  PASCAL = 57,

  /**
   * @generated from enum value: LANGUAGE_ELIXIR = 58;
   */
  ELIXIR = 58,

  /**
   * @generated from enum value: LANGUAGE_FSHARP = 59;
   */
  FSHARP = 59,

  /**
   * @generated from enum value: LANGUAGE_LISP = 60;
   */
  LISP = 60,

  /**
   * @generated from enum value: LANGUAGE_MATLAB = 61;
   */
  MATLAB = 61,

  /**
   * @generated from enum value: LANGUAGE_POWERSHELL = 62;
   */
  POWERSHELL = 62,

  /**
   * @generated from enum value: LANGUAGE_SOLIDITY = 63;
   */
  SOLIDITY = 63,

  /**
   * @generated from enum value: LANGUAGE_ADA = 64;
   */
  ADA = 64,

  /**
   * @generated from enum value: LANGUAGE_OCAML_INTERFACE = 65;
   */
  OCAML_INTERFACE = 65
}
// Retrieve enum metadata with: proto3.getEnumType(Language)
proto3.util.setEnumType(Language, 'exa.codeium_common_pb.Language', [
  { no: 0, name: 'LANGUAGE_UNSPECIFIED' },
  { no: 1, name: 'LANGUAGE_C' },
  { no: 2, name: 'LANGUAGE_CLOJURE' },
  { no: 3, name: 'LANGUAGE_COFFEESCRIPT' },
  { no: 4, name: 'LANGUAGE_CPP' },
  { no: 5, name: 'LANGUAGE_CSHARP' },
  { no: 6, name: 'LANGUAGE_CSS' },
  { no: 7, name: 'LANGUAGE_CUDACPP' },
  { no: 8, name: 'LANGUAGE_DOCKERFILE' },
  { no: 9, name: 'LANGUAGE_GO' },
  { no: 10, name: 'LANGUAGE_GROOVY' },
  { no: 11, name: 'LANGUAGE_HANDLEBARS' },
  { no: 12, name: 'LANGUAGE_HASKELL' },
  { no: 13, name: 'LANGUAGE_HCL' },
  { no: 14, name: 'LANGUAGE_HTML' },
  { no: 15, name: 'LANGUAGE_INI' },
  { no: 16, name: 'LANGUAGE_JAVA' },
  { no: 17, name: 'LANGUAGE_JAVASCRIPT' },
  { no: 18, name: 'LANGUAGE_JSON' },
  { no: 19, name: 'LANGUAGE_JULIA' },
  { no: 20, name: 'LANGUAGE_KOTLIN' },
  { no: 21, name: 'LANGUAGE_LATEX' },
  { no: 22, name: 'LANGUAGE_LESS' },
  { no: 23, name: 'LANGUAGE_LUA' },
  { no: 24, name: 'LANGUAGE_MAKEFILE' },
  { no: 25, name: 'LANGUAGE_MARKDOWN' },
  { no: 26, name: 'LANGUAGE_OBJECTIVEC' },
  { no: 27, name: 'LANGUAGE_OBJECTIVECPP' },
  { no: 28, name: 'LANGUAGE_PERL' },
  { no: 29, name: 'LANGUAGE_PHP' },
  { no: 30, name: 'LANGUAGE_PLAINTEXT' },
  { no: 31, name: 'LANGUAGE_PROTOBUF' },
  { no: 32, name: 'LANGUAGE_PBTXT' },
  { no: 33, name: 'LANGUAGE_PYTHON' },
  { no: 34, name: 'LANGUAGE_R' },
  { no: 35, name: 'LANGUAGE_RUBY' },
  { no: 36, name: 'LANGUAGE_RUST' },
  { no: 37, name: 'LANGUAGE_SASS' },
  { no: 38, name: 'LANGUAGE_SCALA' },
  { no: 39, name: 'LANGUAGE_SCSS' },
  { no: 40, name: 'LANGUAGE_SHELL' },
  { no: 41, name: 'LANGUAGE_SQL' },
  { no: 42, name: 'LANGUAGE_STARLARK' },
  { no: 43, name: 'LANGUAGE_SWIFT' },
  { no: 44, name: 'LANGUAGE_TSX' },
  { no: 45, name: 'LANGUAGE_TYPESCRIPT' },
  { no: 46, name: 'LANGUAGE_VISUALBASIC' },
  { no: 47, name: 'LANGUAGE_VUE' },
  { no: 48, name: 'LANGUAGE_XML' },
  { no: 49, name: 'LANGUAGE_XSL' },
  { no: 50, name: 'LANGUAGE_YAML' },
  { no: 51, name: 'LANGUAGE_SVELTE' },
  { no: 52, name: 'LANGUAGE_TOML' },
  { no: 53, name: 'LANGUAGE_DART' },
  { no: 54, name: 'LANGUAGE_RST' },
  { no: 55, name: 'LANGUAGE_OCAML' },
  { no: 56, name: 'LANGUAGE_CMAKE' },
  { no: 57, name: 'LANGUAGE_PASCAL' },
  { no: 58, name: 'LANGUAGE_ELIXIR' },
  { no: 59, name: 'LANGUAGE_FSHARP' },
  { no: 60, name: 'LANGUAGE_LISP' },
  { no: 61, name: 'LANGUAGE_MATLAB' },
  { no: 62, name: 'LANGUAGE_POWERSHELL' },
  { no: 63, name: 'LANGUAGE_SOLIDITY' },
  { no: 64, name: 'LANGUAGE_ADA' },
  { no: 65, name: 'LANGUAGE_OCAML_INTERFACE' }
]);

/**
 * Next ID: 12, Previous field: entropy.
 *
 * @generated from message exa.codeium_common_pb.Completion
 */
export class Completion extends Message<Completion> {
  /**
   * @generated from field: string completion_id = 1;
   */
  completionId = '';

  /**
   * @generated from field: string text = 2;
   */
  text = '';

  /**
   * @generated from field: string prefix = 3;
   */
  prefix = '';

  /**
   * @generated from field: string stop = 4;
   */
  stop = '';

  /**
   * @generated from field: double score = 5;
   */
  score = 0;

  /**
   * @generated from field: repeated uint64 tokens = 6;
   */
  tokens: bigint[] = [];

  /**
   * @generated from field: repeated string decoded_tokens = 7;
   */
  decodedTokens: string[] = [];

  /**
   * @generated from field: repeated double probabilities = 8;
   */
  probabilities: number[] = [];

  /**
   * @generated from field: repeated double adjusted_probabilities = 9;
   */
  adjustedProbabilities: number[] = [];

  /**
   * @generated from field: uint64 generated_length = 10;
   */
  generatedLength = protoInt64.zero;

  constructor(data?: PartialMessage<Completion>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'exa.codeium_common_pb.Completion';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'completion_id',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    },
    { no: 2, name: 'text', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'prefix', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'stop', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 5, name: 'score', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */ },
    {
      no: 6,
      name: 'tokens',
      kind: 'scalar',
      T: 4 /* ScalarType.UINT64 */,
      repeated: true
    },
    {
      no: 7,
      name: 'decoded_tokens',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true
    },
    {
      no: 8,
      name: 'probabilities',
      kind: 'scalar',
      T: 1 /* ScalarType.DOUBLE */,
      repeated: true
    },
    {
      no: 9,
      name: 'adjusted_probabilities',
      kind: 'scalar',
      T: 1 /* ScalarType.DOUBLE */,
      repeated: true
    },
    {
      no: 10,
      name: 'generated_length',
      kind: 'scalar',
      T: 4 /* ScalarType.UINT64 */
    }
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Completion {
    return new Completion().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Completion {
    return new Completion().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Completion {
    return new Completion().fromJsonString(jsonString, options);
  }

  static equals(
    a: Completion | PlainMessage<Completion> | undefined,
    b: Completion | PlainMessage<Completion> | undefined
  ): boolean {
    return proto3.util.equals(Completion, a, b);
  }
}

/**
 * Next ID: 15, Previous field: url.
 *
 * @generated from message exa.codeium_common_pb.Metadata
 */
export class Metadata extends Message<Metadata> {
  /**
   * @generated from field: string ide_name = 1;
   */
  ideName = '';

  /**
   * @generated from field: string ide_version = 7;
   */
  ideVersion = '';

  /**
   * @generated from field: string extension_name = 12;
   */
  extensionName = '';

  /**
   * @generated from field: string extension_version = 2;
   */
  extensionVersion = '';

  /**
   * @generated from field: string api_key = 3;
   */
  apiKey = '';

  /**
   * Regex derived from https://stackoverflow.com/a/48300605.
   * TODO(prem): Should this be mandatory?
   *
   * @generated from field: string locale = 4;
   */
  locale = '';

  /**
   * UID identifying a single session for the given user.
   *
   * @generated from field: string session_id = 10;
   */
  sessionId = '';

  /**
   * Used purely in language server to cancel in flight requests.
   * If request_id is 0, then the request is not cancelable.
   * This should be a strictly monotonically increasing number
   * for the duration of a session.
   *
   * @generated from field: uint64 request_id = 9;
   */
  requestId = protoInt64.zero;

  /**
   * Browser-specific information.
   *
   * @generated from field: string user_agent = 13;
   */
  userAgent = '';

  /**
   * @generated from field: string url = 14;
   */
  url = '';

  /**
   * Authentication source information.
   *
   * @generated from field: exa.codeium_common_pb.AuthSource auth_source = 15;
   */
  authSource = AuthSource.CODEIUM;

  constructor(data?: PartialMessage<Metadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'exa.codeium_common_pb.Metadata';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'ide_name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 7,
      name: 'ide_version',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    },
    {
      no: 12,
      name: 'extension_name',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    },
    {
      no: 2,
      name: 'extension_version',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    },
    { no: 3, name: 'api_key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'locale', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 10,
      name: 'session_id',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    },
    { no: 9, name: 'request_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    {
      no: 13,
      name: 'user_agent',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */
    },
    { no: 14, name: 'url', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 15,
      name: 'auth_source',
      kind: 'enum',
      T: proto3.getEnumType(AuthSource)
    }
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Metadata {
    return new Metadata().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Metadata {
    return new Metadata().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Metadata {
    return new Metadata().fromJsonString(jsonString, options);
  }

  static equals(
    a: Metadata | PlainMessage<Metadata> | undefined,
    b: Metadata | PlainMessage<Metadata> | undefined
  ): boolean {
    return proto3.util.equals(Metadata, a, b);
  }
}

/**
 * Next ID: 3, Previous field: insert_spaces.
 *
 * @generated from message exa.codeium_common_pb.EditorOptions
 */
export class EditorOptions extends Message<EditorOptions> {
  /**
   * @generated from field: uint64 tab_size = 1;
   */
  tabSize = protoInt64.zero;

  /**
   * @generated from field: bool insert_spaces = 2;
   */
  insertSpaces = false;

  constructor(data?: PartialMessage<EditorOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'exa.codeium_common_pb.EditorOptions';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'tab_size', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'insert_spaces', kind: 'scalar', T: 8 /* ScalarType.BOOL */ }
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): EditorOptions {
    return new EditorOptions().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): EditorOptions {
    return new EditorOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): EditorOptions {
    return new EditorOptions().fromJsonString(jsonString, options);
  }

  static equals(
    a: EditorOptions | PlainMessage<EditorOptions> | undefined,
    b: EditorOptions | PlainMessage<EditorOptions> | undefined
  ): boolean {
    return proto3.util.equals(EditorOptions, a, b);
  }
}

/**
 * @generated from message exa.codeium_common_pb.Event
 */
export class Event extends Message<Event> {
  /**
   * @generated from field: exa.codeium_common_pb.EventType event_type = 1;
   */
  eventType = EventType.UNSPECIFIED;

  /**
   * @generated from field: string event_json = 2;
   */
  eventJson = '';

  /**
   * @generated from field: int64 timestamp_unix_ms = 3;
   */
  timestampUnixMs = protoInt64.zero;

  constructor(data?: PartialMessage<Event>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'exa.codeium_common_pb.Event';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'event_type',
      kind: 'enum',
      T: proto3.getEnumType(EventType)
    },
    { no: 2, name: 'event_json', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 3,
      name: 'timestamp_unix_ms',
      kind: 'scalar',
      T: 3 /* ScalarType.INT64 */
    }
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Event {
    return new Event().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Event {
    return new Event().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Event {
    return new Event().fromJsonString(jsonString, options);
  }

  static equals(
    a: Event | PlainMessage<Event> | undefined,
    b: Event | PlainMessage<Event> | undefined
  ): boolean {
    return proto3.util.equals(Event, a, b);
  }
}
