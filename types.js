/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tendermint = (function() {

    /**
     * Namespace tendermint.
     * @exports tendermint
     * @namespace
     */
    var tendermint = {};

    tendermint.abci = (function() {

        /**
         * Namespace abci.
         * @memberof tendermint
         * @namespace
         */
        var abci = {};

        abci.Request = (function() {

            /**
             * Properties of a Request.
             * @memberof tendermint.abci
             * @interface IRequest
             * @property {tendermint.abci.IRequestEcho|null} [echo] Request echo
             * @property {tendermint.abci.IRequestFlush|null} [flush] Request flush
             * @property {tendermint.abci.IRequestInfo|null} [info] Request info
             * @property {tendermint.abci.IRequestSetOption|null} [setOption] Request setOption
             * @property {tendermint.abci.IRequestInitChain|null} [initChain] Request initChain
             * @property {tendermint.abci.IRequestQuery|null} [query] Request query
             * @property {tendermint.abci.IRequestBeginBlock|null} [beginBlock] Request beginBlock
             * @property {tendermint.abci.IRequestCheckTx|null} [checkTx] Request checkTx
             * @property {tendermint.abci.IRequestDeliverTx|null} [deliverTx] Request deliverTx
             * @property {tendermint.abci.IRequestEndBlock|null} [endBlock] Request endBlock
             * @property {tendermint.abci.IRequestCommit|null} [commit] Request commit
             * @property {tendermint.abci.IRequestListSnapshots|null} [listSnapshots] Request listSnapshots
             * @property {tendermint.abci.IRequestOfferSnapshot|null} [offerSnapshot] Request offerSnapshot
             * @property {tendermint.abci.IRequestLoadSnapshotChunk|null} [loadSnapshotChunk] Request loadSnapshotChunk
             * @property {tendermint.abci.IRequestApplySnapshotChunk|null} [applySnapshotChunk] Request applySnapshotChunk
             */

            /**
             * Constructs a new Request.
             * @memberof tendermint.abci
             * @classdesc Represents a Request.
             * @implements IRequest
             * @constructor
             * @param {tendermint.abci.IRequest=} [properties] Properties to set
             */
            function Request(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Request echo.
             * @member {tendermint.abci.IRequestEcho|null|undefined} echo
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.echo = null;

            /**
             * Request flush.
             * @member {tendermint.abci.IRequestFlush|null|undefined} flush
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.flush = null;

            /**
             * Request info.
             * @member {tendermint.abci.IRequestInfo|null|undefined} info
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.info = null;

            /**
             * Request setOption.
             * @member {tendermint.abci.IRequestSetOption|null|undefined} setOption
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.setOption = null;

            /**
             * Request initChain.
             * @member {tendermint.abci.IRequestInitChain|null|undefined} initChain
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.initChain = null;

            /**
             * Request query.
             * @member {tendermint.abci.IRequestQuery|null|undefined} query
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.query = null;

            /**
             * Request beginBlock.
             * @member {tendermint.abci.IRequestBeginBlock|null|undefined} beginBlock
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.beginBlock = null;

            /**
             * Request checkTx.
             * @member {tendermint.abci.IRequestCheckTx|null|undefined} checkTx
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.checkTx = null;

            /**
             * Request deliverTx.
             * @member {tendermint.abci.IRequestDeliverTx|null|undefined} deliverTx
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.deliverTx = null;

            /**
             * Request endBlock.
             * @member {tendermint.abci.IRequestEndBlock|null|undefined} endBlock
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.endBlock = null;

            /**
             * Request commit.
             * @member {tendermint.abci.IRequestCommit|null|undefined} commit
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.commit = null;

            /**
             * Request listSnapshots.
             * @member {tendermint.abci.IRequestListSnapshots|null|undefined} listSnapshots
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.listSnapshots = null;

            /**
             * Request offerSnapshot.
             * @member {tendermint.abci.IRequestOfferSnapshot|null|undefined} offerSnapshot
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.offerSnapshot = null;

            /**
             * Request loadSnapshotChunk.
             * @member {tendermint.abci.IRequestLoadSnapshotChunk|null|undefined} loadSnapshotChunk
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.loadSnapshotChunk = null;

            /**
             * Request applySnapshotChunk.
             * @member {tendermint.abci.IRequestApplySnapshotChunk|null|undefined} applySnapshotChunk
             * @memberof tendermint.abci.Request
             * @instance
             */
            Request.prototype.applySnapshotChunk = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Request value.
             * @member {"echo"|"flush"|"info"|"setOption"|"initChain"|"query"|"beginBlock"|"checkTx"|"deliverTx"|"endBlock"|"commit"|"listSnapshots"|"offerSnapshot"|"loadSnapshotChunk"|"applySnapshotChunk"|undefined} value
             * @memberof tendermint.abci.Request
             * @instance
             */
            Object.defineProperty(Request.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["echo", "flush", "info", "setOption", "initChain", "query", "beginBlock", "checkTx", "deliverTx", "endBlock", "commit", "listSnapshots", "offerSnapshot", "loadSnapshotChunk", "applySnapshotChunk"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Request instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.Request
             * @static
             * @param {tendermint.abci.IRequest=} [properties] Properties to set
             * @returns {tendermint.abci.Request} Request instance
             */
            Request.create = function create(properties) {
                return new Request(properties);
            };

            /**
             * Encodes the specified Request message. Does not implicitly {@link tendermint.abci.Request.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.Request
             * @static
             * @param {tendermint.abci.IRequest} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.echo != null && message.hasOwnProperty("echo"))
                    $root.tendermint.abci.RequestEcho.encode(message.echo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.flush != null && message.hasOwnProperty("flush"))
                    $root.tendermint.abci.RequestFlush.encode(message.flush, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.info != null && message.hasOwnProperty("info"))
                    $root.tendermint.abci.RequestInfo.encode(message.info, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.setOption != null && message.hasOwnProperty("setOption"))
                    $root.tendermint.abci.RequestSetOption.encode(message.setOption, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.initChain != null && message.hasOwnProperty("initChain"))
                    $root.tendermint.abci.RequestInitChain.encode(message.initChain, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.query != null && message.hasOwnProperty("query"))
                    $root.tendermint.abci.RequestQuery.encode(message.query, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.beginBlock != null && message.hasOwnProperty("beginBlock"))
                    $root.tendermint.abci.RequestBeginBlock.encode(message.beginBlock, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.checkTx != null && message.hasOwnProperty("checkTx"))
                    $root.tendermint.abci.RequestCheckTx.encode(message.checkTx, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.deliverTx != null && message.hasOwnProperty("deliverTx"))
                    $root.tendermint.abci.RequestDeliverTx.encode(message.deliverTx, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.endBlock != null && message.hasOwnProperty("endBlock"))
                    $root.tendermint.abci.RequestEndBlock.encode(message.endBlock, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.commit != null && message.hasOwnProperty("commit"))
                    $root.tendermint.abci.RequestCommit.encode(message.commit, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.listSnapshots != null && message.hasOwnProperty("listSnapshots"))
                    $root.tendermint.abci.RequestListSnapshots.encode(message.listSnapshots, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.offerSnapshot != null && message.hasOwnProperty("offerSnapshot"))
                    $root.tendermint.abci.RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.loadSnapshotChunk != null && message.hasOwnProperty("loadSnapshotChunk"))
                    $root.tendermint.abci.RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.applySnapshotChunk != null && message.hasOwnProperty("applySnapshotChunk"))
                    $root.tendermint.abci.RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link tendermint.abci.Request.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.Request
             * @static
             * @param {tendermint.abci.IRequest} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.Request} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.Request();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.echo = $root.tendermint.abci.RequestEcho.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.flush = $root.tendermint.abci.RequestFlush.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.info = $root.tendermint.abci.RequestInfo.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.setOption = $root.tendermint.abci.RequestSetOption.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.initChain = $root.tendermint.abci.RequestInitChain.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.query = $root.tendermint.abci.RequestQuery.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.beginBlock = $root.tendermint.abci.RequestBeginBlock.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.checkTx = $root.tendermint.abci.RequestCheckTx.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.deliverTx = $root.tendermint.abci.RequestDeliverTx.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.endBlock = $root.tendermint.abci.RequestEndBlock.decode(reader, reader.uint32());
                        break;
                    case 11:
                        message.commit = $root.tendermint.abci.RequestCommit.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.listSnapshots = $root.tendermint.abci.RequestListSnapshots.decode(reader, reader.uint32());
                        break;
                    case 13:
                        message.offerSnapshot = $root.tendermint.abci.RequestOfferSnapshot.decode(reader, reader.uint32());
                        break;
                    case 14:
                        message.loadSnapshotChunk = $root.tendermint.abci.RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                        break;
                    case 15:
                        message.applySnapshotChunk = $root.tendermint.abci.RequestApplySnapshotChunk.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.Request} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Request message.
             * @function verify
             * @memberof tendermint.abci.Request
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Request.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.echo != null && message.hasOwnProperty("echo")) {
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestEcho.verify(message.echo);
                        if (error)
                            return "echo." + error;
                    }
                }
                if (message.flush != null && message.hasOwnProperty("flush")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestFlush.verify(message.flush);
                        if (error)
                            return "flush." + error;
                    }
                }
                if (message.info != null && message.hasOwnProperty("info")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                }
                if (message.setOption != null && message.hasOwnProperty("setOption")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestSetOption.verify(message.setOption);
                        if (error)
                            return "setOption." + error;
                    }
                }
                if (message.initChain != null && message.hasOwnProperty("initChain")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestInitChain.verify(message.initChain);
                        if (error)
                            return "initChain." + error;
                    }
                }
                if (message.query != null && message.hasOwnProperty("query")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestQuery.verify(message.query);
                        if (error)
                            return "query." + error;
                    }
                }
                if (message.beginBlock != null && message.hasOwnProperty("beginBlock")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestBeginBlock.verify(message.beginBlock);
                        if (error)
                            return "beginBlock." + error;
                    }
                }
                if (message.checkTx != null && message.hasOwnProperty("checkTx")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestCheckTx.verify(message.checkTx);
                        if (error)
                            return "checkTx." + error;
                    }
                }
                if (message.deliverTx != null && message.hasOwnProperty("deliverTx")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestDeliverTx.verify(message.deliverTx);
                        if (error)
                            return "deliverTx." + error;
                    }
                }
                if (message.endBlock != null && message.hasOwnProperty("endBlock")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestEndBlock.verify(message.endBlock);
                        if (error)
                            return "endBlock." + error;
                    }
                }
                if (message.commit != null && message.hasOwnProperty("commit")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestCommit.verify(message.commit);
                        if (error)
                            return "commit." + error;
                    }
                }
                if (message.listSnapshots != null && message.hasOwnProperty("listSnapshots")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestListSnapshots.verify(message.listSnapshots);
                        if (error)
                            return "listSnapshots." + error;
                    }
                }
                if (message.offerSnapshot != null && message.hasOwnProperty("offerSnapshot")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestOfferSnapshot.verify(message.offerSnapshot);
                        if (error)
                            return "offerSnapshot." + error;
                    }
                }
                if (message.loadSnapshotChunk != null && message.hasOwnProperty("loadSnapshotChunk")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestLoadSnapshotChunk.verify(message.loadSnapshotChunk);
                        if (error)
                            return "loadSnapshotChunk." + error;
                    }
                }
                if (message.applySnapshotChunk != null && message.hasOwnProperty("applySnapshotChunk")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.RequestApplySnapshotChunk.verify(message.applySnapshotChunk);
                        if (error)
                            return "applySnapshotChunk." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.Request
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.Request} Request
             */
            Request.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.Request)
                    return object;
                var message = new $root.tendermint.abci.Request();
                if (object.echo != null) {
                    if (typeof object.echo !== "object")
                        throw TypeError(".tendermint.abci.Request.echo: object expected");
                    message.echo = $root.tendermint.abci.RequestEcho.fromObject(object.echo);
                }
                if (object.flush != null) {
                    if (typeof object.flush !== "object")
                        throw TypeError(".tendermint.abci.Request.flush: object expected");
                    message.flush = $root.tendermint.abci.RequestFlush.fromObject(object.flush);
                }
                if (object.info != null) {
                    if (typeof object.info !== "object")
                        throw TypeError(".tendermint.abci.Request.info: object expected");
                    message.info = $root.tendermint.abci.RequestInfo.fromObject(object.info);
                }
                if (object.setOption != null) {
                    if (typeof object.setOption !== "object")
                        throw TypeError(".tendermint.abci.Request.setOption: object expected");
                    message.setOption = $root.tendermint.abci.RequestSetOption.fromObject(object.setOption);
                }
                if (object.initChain != null) {
                    if (typeof object.initChain !== "object")
                        throw TypeError(".tendermint.abci.Request.initChain: object expected");
                    message.initChain = $root.tendermint.abci.RequestInitChain.fromObject(object.initChain);
                }
                if (object.query != null) {
                    if (typeof object.query !== "object")
                        throw TypeError(".tendermint.abci.Request.query: object expected");
                    message.query = $root.tendermint.abci.RequestQuery.fromObject(object.query);
                }
                if (object.beginBlock != null) {
                    if (typeof object.beginBlock !== "object")
                        throw TypeError(".tendermint.abci.Request.beginBlock: object expected");
                    message.beginBlock = $root.tendermint.abci.RequestBeginBlock.fromObject(object.beginBlock);
                }
                if (object.checkTx != null) {
                    if (typeof object.checkTx !== "object")
                        throw TypeError(".tendermint.abci.Request.checkTx: object expected");
                    message.checkTx = $root.tendermint.abci.RequestCheckTx.fromObject(object.checkTx);
                }
                if (object.deliverTx != null) {
                    if (typeof object.deliverTx !== "object")
                        throw TypeError(".tendermint.abci.Request.deliverTx: object expected");
                    message.deliverTx = $root.tendermint.abci.RequestDeliverTx.fromObject(object.deliverTx);
                }
                if (object.endBlock != null) {
                    if (typeof object.endBlock !== "object")
                        throw TypeError(".tendermint.abci.Request.endBlock: object expected");
                    message.endBlock = $root.tendermint.abci.RequestEndBlock.fromObject(object.endBlock);
                }
                if (object.commit != null) {
                    if (typeof object.commit !== "object")
                        throw TypeError(".tendermint.abci.Request.commit: object expected");
                    message.commit = $root.tendermint.abci.RequestCommit.fromObject(object.commit);
                }
                if (object.listSnapshots != null) {
                    if (typeof object.listSnapshots !== "object")
                        throw TypeError(".tendermint.abci.Request.listSnapshots: object expected");
                    message.listSnapshots = $root.tendermint.abci.RequestListSnapshots.fromObject(object.listSnapshots);
                }
                if (object.offerSnapshot != null) {
                    if (typeof object.offerSnapshot !== "object")
                        throw TypeError(".tendermint.abci.Request.offerSnapshot: object expected");
                    message.offerSnapshot = $root.tendermint.abci.RequestOfferSnapshot.fromObject(object.offerSnapshot);
                }
                if (object.loadSnapshotChunk != null) {
                    if (typeof object.loadSnapshotChunk !== "object")
                        throw TypeError(".tendermint.abci.Request.loadSnapshotChunk: object expected");
                    message.loadSnapshotChunk = $root.tendermint.abci.RequestLoadSnapshotChunk.fromObject(object.loadSnapshotChunk);
                }
                if (object.applySnapshotChunk != null) {
                    if (typeof object.applySnapshotChunk !== "object")
                        throw TypeError(".tendermint.abci.Request.applySnapshotChunk: object expected");
                    message.applySnapshotChunk = $root.tendermint.abci.RequestApplySnapshotChunk.fromObject(object.applySnapshotChunk);
                }
                return message;
            };

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.Request
             * @static
             * @param {tendermint.abci.Request} message Request
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Request.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.echo != null && message.hasOwnProperty("echo")) {
                    object.echo = $root.tendermint.abci.RequestEcho.toObject(message.echo, options);
                    if (options.oneofs)
                        object.value = "echo";
                }
                if (message.flush != null && message.hasOwnProperty("flush")) {
                    object.flush = $root.tendermint.abci.RequestFlush.toObject(message.flush, options);
                    if (options.oneofs)
                        object.value = "flush";
                }
                if (message.info != null && message.hasOwnProperty("info")) {
                    object.info = $root.tendermint.abci.RequestInfo.toObject(message.info, options);
                    if (options.oneofs)
                        object.value = "info";
                }
                if (message.setOption != null && message.hasOwnProperty("setOption")) {
                    object.setOption = $root.tendermint.abci.RequestSetOption.toObject(message.setOption, options);
                    if (options.oneofs)
                        object.value = "setOption";
                }
                if (message.initChain != null && message.hasOwnProperty("initChain")) {
                    object.initChain = $root.tendermint.abci.RequestInitChain.toObject(message.initChain, options);
                    if (options.oneofs)
                        object.value = "initChain";
                }
                if (message.query != null && message.hasOwnProperty("query")) {
                    object.query = $root.tendermint.abci.RequestQuery.toObject(message.query, options);
                    if (options.oneofs)
                        object.value = "query";
                }
                if (message.beginBlock != null && message.hasOwnProperty("beginBlock")) {
                    object.beginBlock = $root.tendermint.abci.RequestBeginBlock.toObject(message.beginBlock, options);
                    if (options.oneofs)
                        object.value = "beginBlock";
                }
                if (message.checkTx != null && message.hasOwnProperty("checkTx")) {
                    object.checkTx = $root.tendermint.abci.RequestCheckTx.toObject(message.checkTx, options);
                    if (options.oneofs)
                        object.value = "checkTx";
                }
                if (message.deliverTx != null && message.hasOwnProperty("deliverTx")) {
                    object.deliverTx = $root.tendermint.abci.RequestDeliverTx.toObject(message.deliverTx, options);
                    if (options.oneofs)
                        object.value = "deliverTx";
                }
                if (message.endBlock != null && message.hasOwnProperty("endBlock")) {
                    object.endBlock = $root.tendermint.abci.RequestEndBlock.toObject(message.endBlock, options);
                    if (options.oneofs)
                        object.value = "endBlock";
                }
                if (message.commit != null && message.hasOwnProperty("commit")) {
                    object.commit = $root.tendermint.abci.RequestCommit.toObject(message.commit, options);
                    if (options.oneofs)
                        object.value = "commit";
                }
                if (message.listSnapshots != null && message.hasOwnProperty("listSnapshots")) {
                    object.listSnapshots = $root.tendermint.abci.RequestListSnapshots.toObject(message.listSnapshots, options);
                    if (options.oneofs)
                        object.value = "listSnapshots";
                }
                if (message.offerSnapshot != null && message.hasOwnProperty("offerSnapshot")) {
                    object.offerSnapshot = $root.tendermint.abci.RequestOfferSnapshot.toObject(message.offerSnapshot, options);
                    if (options.oneofs)
                        object.value = "offerSnapshot";
                }
                if (message.loadSnapshotChunk != null && message.hasOwnProperty("loadSnapshotChunk")) {
                    object.loadSnapshotChunk = $root.tendermint.abci.RequestLoadSnapshotChunk.toObject(message.loadSnapshotChunk, options);
                    if (options.oneofs)
                        object.value = "loadSnapshotChunk";
                }
                if (message.applySnapshotChunk != null && message.hasOwnProperty("applySnapshotChunk")) {
                    object.applySnapshotChunk = $root.tendermint.abci.RequestApplySnapshotChunk.toObject(message.applySnapshotChunk, options);
                    if (options.oneofs)
                        object.value = "applySnapshotChunk";
                }
                return object;
            };

            /**
             * Converts this Request to JSON.
             * @function toJSON
             * @memberof tendermint.abci.Request
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Request.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Request;
        })();

        abci.RequestEcho = (function() {

            /**
             * Properties of a RequestEcho.
             * @memberof tendermint.abci
             * @interface IRequestEcho
             * @property {string|null} [message] RequestEcho message
             */

            /**
             * Constructs a new RequestEcho.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestEcho.
             * @implements IRequestEcho
             * @constructor
             * @param {tendermint.abci.IRequestEcho=} [properties] Properties to set
             */
            function RequestEcho(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestEcho message.
             * @member {string} message
             * @memberof tendermint.abci.RequestEcho
             * @instance
             */
            RequestEcho.prototype.message = "";

            /**
             * Creates a new RequestEcho instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestEcho
             * @static
             * @param {tendermint.abci.IRequestEcho=} [properties] Properties to set
             * @returns {tendermint.abci.RequestEcho} RequestEcho instance
             */
            RequestEcho.create = function create(properties) {
                return new RequestEcho(properties);
            };

            /**
             * Encodes the specified RequestEcho message. Does not implicitly {@link tendermint.abci.RequestEcho.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestEcho
             * @static
             * @param {tendermint.abci.IRequestEcho} message RequestEcho message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestEcho.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified RequestEcho message, length delimited. Does not implicitly {@link tendermint.abci.RequestEcho.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestEcho
             * @static
             * @param {tendermint.abci.IRequestEcho} message RequestEcho message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestEcho.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestEcho message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestEcho
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestEcho} RequestEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestEcho.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestEcho();
                while (reader.pos < end) {
                    var tag = reader.uint32();
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
            };

            /**
             * Decodes a RequestEcho message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestEcho
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestEcho} RequestEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestEcho.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestEcho message.
             * @function verify
             * @memberof tendermint.abci.RequestEcho
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestEcho.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a RequestEcho message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestEcho
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestEcho} RequestEcho
             */
            RequestEcho.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestEcho)
                    return object;
                var message = new $root.tendermint.abci.RequestEcho();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a RequestEcho message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestEcho
             * @static
             * @param {tendermint.abci.RequestEcho} message RequestEcho
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestEcho.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this RequestEcho to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestEcho
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestEcho.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestEcho;
        })();

        abci.RequestFlush = (function() {

            /**
             * Properties of a RequestFlush.
             * @memberof tendermint.abci
             * @interface IRequestFlush
             */

            /**
             * Constructs a new RequestFlush.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestFlush.
             * @implements IRequestFlush
             * @constructor
             * @param {tendermint.abci.IRequestFlush=} [properties] Properties to set
             */
            function RequestFlush(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new RequestFlush instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestFlush
             * @static
             * @param {tendermint.abci.IRequestFlush=} [properties] Properties to set
             * @returns {tendermint.abci.RequestFlush} RequestFlush instance
             */
            RequestFlush.create = function create(properties) {
                return new RequestFlush(properties);
            };

            /**
             * Encodes the specified RequestFlush message. Does not implicitly {@link tendermint.abci.RequestFlush.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestFlush
             * @static
             * @param {tendermint.abci.IRequestFlush} message RequestFlush message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestFlush.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified RequestFlush message, length delimited. Does not implicitly {@link tendermint.abci.RequestFlush.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestFlush
             * @static
             * @param {tendermint.abci.IRequestFlush} message RequestFlush message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestFlush.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestFlush message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestFlush
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestFlush} RequestFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestFlush.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestFlush();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestFlush message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestFlush
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestFlush} RequestFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestFlush.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestFlush message.
             * @function verify
             * @memberof tendermint.abci.RequestFlush
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestFlush.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a RequestFlush message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestFlush
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestFlush} RequestFlush
             */
            RequestFlush.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestFlush)
                    return object;
                return new $root.tendermint.abci.RequestFlush();
            };

            /**
             * Creates a plain object from a RequestFlush message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestFlush
             * @static
             * @param {tendermint.abci.RequestFlush} message RequestFlush
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestFlush.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this RequestFlush to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestFlush
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestFlush.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestFlush;
        })();

        abci.RequestInfo = (function() {

            /**
             * Properties of a RequestInfo.
             * @memberof tendermint.abci
             * @interface IRequestInfo
             * @property {string|null} [version] RequestInfo version
             * @property {number|Long|null} [blockVersion] RequestInfo blockVersion
             * @property {number|Long|null} [p2pVersion] RequestInfo p2pVersion
             */

            /**
             * Constructs a new RequestInfo.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestInfo.
             * @implements IRequestInfo
             * @constructor
             * @param {tendermint.abci.IRequestInfo=} [properties] Properties to set
             */
            function RequestInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestInfo version.
             * @member {string} version
             * @memberof tendermint.abci.RequestInfo
             * @instance
             */
            RequestInfo.prototype.version = "";

            /**
             * RequestInfo blockVersion.
             * @member {number|Long} blockVersion
             * @memberof tendermint.abci.RequestInfo
             * @instance
             */
            RequestInfo.prototype.blockVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * RequestInfo p2pVersion.
             * @member {number|Long} p2pVersion
             * @memberof tendermint.abci.RequestInfo
             * @instance
             */
            RequestInfo.prototype.p2pVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new RequestInfo instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestInfo
             * @static
             * @param {tendermint.abci.IRequestInfo=} [properties] Properties to set
             * @returns {tendermint.abci.RequestInfo} RequestInfo instance
             */
            RequestInfo.create = function create(properties) {
                return new RequestInfo(properties);
            };

            /**
             * Encodes the specified RequestInfo message. Does not implicitly {@link tendermint.abci.RequestInfo.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestInfo
             * @static
             * @param {tendermint.abci.IRequestInfo} message RequestInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                if (message.blockVersion != null && message.hasOwnProperty("blockVersion"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.blockVersion);
                if (message.p2pVersion != null && message.hasOwnProperty("p2pVersion"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.p2pVersion);
                return writer;
            };

            /**
             * Encodes the specified RequestInfo message, length delimited. Does not implicitly {@link tendermint.abci.RequestInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestInfo
             * @static
             * @param {tendermint.abci.IRequestInfo} message RequestInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestInfo message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestInfo} RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.version = reader.string();
                        break;
                    case 2:
                        message.blockVersion = reader.uint64();
                        break;
                    case 3:
                        message.p2pVersion = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestInfo} RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestInfo message.
             * @function verify
             * @memberof tendermint.abci.RequestInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.blockVersion != null && message.hasOwnProperty("blockVersion"))
                    if (!$util.isInteger(message.blockVersion) && !(message.blockVersion && $util.isInteger(message.blockVersion.low) && $util.isInteger(message.blockVersion.high)))
                        return "blockVersion: integer|Long expected";
                if (message.p2pVersion != null && message.hasOwnProperty("p2pVersion"))
                    if (!$util.isInteger(message.p2pVersion) && !(message.p2pVersion && $util.isInteger(message.p2pVersion.low) && $util.isInteger(message.p2pVersion.high)))
                        return "p2pVersion: integer|Long expected";
                return null;
            };

            /**
             * Creates a RequestInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestInfo} RequestInfo
             */
            RequestInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestInfo)
                    return object;
                var message = new $root.tendermint.abci.RequestInfo();
                if (object.version != null)
                    message.version = String(object.version);
                if (object.blockVersion != null)
                    if ($util.Long)
                        (message.blockVersion = $util.Long.fromValue(object.blockVersion)).unsigned = true;
                    else if (typeof object.blockVersion === "string")
                        message.blockVersion = parseInt(object.blockVersion, 10);
                    else if (typeof object.blockVersion === "number")
                        message.blockVersion = object.blockVersion;
                    else if (typeof object.blockVersion === "object")
                        message.blockVersion = new $util.LongBits(object.blockVersion.low >>> 0, object.blockVersion.high >>> 0).toNumber(true);
                if (object.p2pVersion != null)
                    if ($util.Long)
                        (message.p2pVersion = $util.Long.fromValue(object.p2pVersion)).unsigned = true;
                    else if (typeof object.p2pVersion === "string")
                        message.p2pVersion = parseInt(object.p2pVersion, 10);
                    else if (typeof object.p2pVersion === "number")
                        message.p2pVersion = object.p2pVersion;
                    else if (typeof object.p2pVersion === "object")
                        message.p2pVersion = new $util.LongBits(object.p2pVersion.low >>> 0, object.p2pVersion.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a RequestInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestInfo
             * @static
             * @param {tendermint.abci.RequestInfo} message RequestInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.version = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.blockVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.blockVersion = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.p2pVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.p2pVersion = options.longs === String ? "0" : 0;
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.blockVersion != null && message.hasOwnProperty("blockVersion"))
                    if (typeof message.blockVersion === "number")
                        object.blockVersion = options.longs === String ? String(message.blockVersion) : message.blockVersion;
                    else
                        object.blockVersion = options.longs === String ? $util.Long.prototype.toString.call(message.blockVersion) : options.longs === Number ? new $util.LongBits(message.blockVersion.low >>> 0, message.blockVersion.high >>> 0).toNumber(true) : message.blockVersion;
                if (message.p2pVersion != null && message.hasOwnProperty("p2pVersion"))
                    if (typeof message.p2pVersion === "number")
                        object.p2pVersion = options.longs === String ? String(message.p2pVersion) : message.p2pVersion;
                    else
                        object.p2pVersion = options.longs === String ? $util.Long.prototype.toString.call(message.p2pVersion) : options.longs === Number ? new $util.LongBits(message.p2pVersion.low >>> 0, message.p2pVersion.high >>> 0).toNumber(true) : message.p2pVersion;
                return object;
            };

            /**
             * Converts this RequestInfo to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestInfo;
        })();

        abci.RequestSetOption = (function() {

            /**
             * Properties of a RequestSetOption.
             * @memberof tendermint.abci
             * @interface IRequestSetOption
             * @property {string|null} [key] RequestSetOption key
             * @property {string|null} [value] RequestSetOption value
             */

            /**
             * Constructs a new RequestSetOption.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestSetOption.
             * @implements IRequestSetOption
             * @constructor
             * @param {tendermint.abci.IRequestSetOption=} [properties] Properties to set
             */
            function RequestSetOption(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestSetOption key.
             * @member {string} key
             * @memberof tendermint.abci.RequestSetOption
             * @instance
             */
            RequestSetOption.prototype.key = "";

            /**
             * RequestSetOption value.
             * @member {string} value
             * @memberof tendermint.abci.RequestSetOption
             * @instance
             */
            RequestSetOption.prototype.value = "";

            /**
             * Creates a new RequestSetOption instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestSetOption
             * @static
             * @param {tendermint.abci.IRequestSetOption=} [properties] Properties to set
             * @returns {tendermint.abci.RequestSetOption} RequestSetOption instance
             */
            RequestSetOption.create = function create(properties) {
                return new RequestSetOption(properties);
            };

            /**
             * Encodes the specified RequestSetOption message. Does not implicitly {@link tendermint.abci.RequestSetOption.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestSetOption
             * @static
             * @param {tendermint.abci.IRequestSetOption} message RequestSetOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestSetOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified RequestSetOption message, length delimited. Does not implicitly {@link tendermint.abci.RequestSetOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestSetOption
             * @static
             * @param {tendermint.abci.IRequestSetOption} message RequestSetOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestSetOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestSetOption message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestSetOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestSetOption} RequestSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestSetOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestSetOption();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.string();
                        break;
                    case 2:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestSetOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestSetOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestSetOption} RequestSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestSetOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestSetOption message.
             * @function verify
             * @memberof tendermint.abci.RequestSetOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestSetOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a RequestSetOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestSetOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestSetOption} RequestSetOption
             */
            RequestSetOption.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestSetOption)
                    return object;
                var message = new $root.tendermint.abci.RequestSetOption();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a RequestSetOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestSetOption
             * @static
             * @param {tendermint.abci.RequestSetOption} message RequestSetOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestSetOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.key = "";
                    object.value = "";
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this RequestSetOption to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestSetOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestSetOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestSetOption;
        })();

        abci.RequestInitChain = (function() {

            /**
             * Properties of a RequestInitChain.
             * @memberof tendermint.abci
             * @interface IRequestInitChain
             * @property {google.protobuf.ITimestamp|null} [time] RequestInitChain time
             * @property {string|null} [chainId] RequestInitChain chainId
             * @property {tendermint.abci.IConsensusParams|null} [consensusParams] RequestInitChain consensusParams
             * @property {Array.<tendermint.abci.IValidatorUpdate>|null} [validators] RequestInitChain validators
             * @property {Uint8Array|null} [appStateBytes] RequestInitChain appStateBytes
             * @property {number|Long|null} [initialHeight] RequestInitChain initialHeight
             */

            /**
             * Constructs a new RequestInitChain.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestInitChain.
             * @implements IRequestInitChain
             * @constructor
             * @param {tendermint.abci.IRequestInitChain=} [properties] Properties to set
             */
            function RequestInitChain(properties) {
                this.validators = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestInitChain time.
             * @member {google.protobuf.ITimestamp|null|undefined} time
             * @memberof tendermint.abci.RequestInitChain
             * @instance
             */
            RequestInitChain.prototype.time = null;

            /**
             * RequestInitChain chainId.
             * @member {string} chainId
             * @memberof tendermint.abci.RequestInitChain
             * @instance
             */
            RequestInitChain.prototype.chainId = "";

            /**
             * RequestInitChain consensusParams.
             * @member {tendermint.abci.IConsensusParams|null|undefined} consensusParams
             * @memberof tendermint.abci.RequestInitChain
             * @instance
             */
            RequestInitChain.prototype.consensusParams = null;

            /**
             * RequestInitChain validators.
             * @member {Array.<tendermint.abci.IValidatorUpdate>} validators
             * @memberof tendermint.abci.RequestInitChain
             * @instance
             */
            RequestInitChain.prototype.validators = $util.emptyArray;

            /**
             * RequestInitChain appStateBytes.
             * @member {Uint8Array} appStateBytes
             * @memberof tendermint.abci.RequestInitChain
             * @instance
             */
            RequestInitChain.prototype.appStateBytes = $util.newBuffer([]);

            /**
             * RequestInitChain initialHeight.
             * @member {number|Long} initialHeight
             * @memberof tendermint.abci.RequestInitChain
             * @instance
             */
            RequestInitChain.prototype.initialHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new RequestInitChain instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestInitChain
             * @static
             * @param {tendermint.abci.IRequestInitChain=} [properties] Properties to set
             * @returns {tendermint.abci.RequestInitChain} RequestInitChain instance
             */
            RequestInitChain.create = function create(properties) {
                return new RequestInitChain(properties);
            };

            /**
             * Encodes the specified RequestInitChain message. Does not implicitly {@link tendermint.abci.RequestInitChain.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestInitChain
             * @static
             * @param {tendermint.abci.IRequestInitChain} message RequestInitChain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestInitChain.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && message.hasOwnProperty("time"))
                    $root.google.protobuf.Timestamp.encode(message.time, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.chainId != null && message.hasOwnProperty("chainId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.chainId);
                if (message.consensusParams != null && message.hasOwnProperty("consensusParams"))
                    $root.tendermint.abci.ConsensusParams.encode(message.consensusParams, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.validators != null && message.validators.length)
                    for (var i = 0; i < message.validators.length; ++i)
                        $root.tendermint.abci.ValidatorUpdate.encode(message.validators[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.appStateBytes != null && message.hasOwnProperty("appStateBytes"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.appStateBytes);
                if (message.initialHeight != null && message.hasOwnProperty("initialHeight"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.initialHeight);
                return writer;
            };

            /**
             * Encodes the specified RequestInitChain message, length delimited. Does not implicitly {@link tendermint.abci.RequestInitChain.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestInitChain
             * @static
             * @param {tendermint.abci.IRequestInitChain} message RequestInitChain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestInitChain.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestInitChain message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestInitChain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestInitChain} RequestInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestInitChain.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestInitChain();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.time = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.chainId = reader.string();
                        break;
                    case 3:
                        message.consensusParams = $root.tendermint.abci.ConsensusParams.decode(reader, reader.uint32());
                        break;
                    case 4:
                        if (!(message.validators && message.validators.length))
                            message.validators = [];
                        message.validators.push($root.tendermint.abci.ValidatorUpdate.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        message.appStateBytes = reader.bytes();
                        break;
                    case 6:
                        message.initialHeight = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestInitChain message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestInitChain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestInitChain} RequestInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestInitChain.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestInitChain message.
             * @function verify
             * @memberof tendermint.abci.RequestInitChain
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestInitChain.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.time != null && message.hasOwnProperty("time")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.time);
                    if (error)
                        return "time." + error;
                }
                if (message.chainId != null && message.hasOwnProperty("chainId"))
                    if (!$util.isString(message.chainId))
                        return "chainId: string expected";
                if (message.consensusParams != null && message.hasOwnProperty("consensusParams")) {
                    var error = $root.tendermint.abci.ConsensusParams.verify(message.consensusParams);
                    if (error)
                        return "consensusParams." + error;
                }
                if (message.validators != null && message.hasOwnProperty("validators")) {
                    if (!Array.isArray(message.validators))
                        return "validators: array expected";
                    for (var i = 0; i < message.validators.length; ++i) {
                        var error = $root.tendermint.abci.ValidatorUpdate.verify(message.validators[i]);
                        if (error)
                            return "validators." + error;
                    }
                }
                if (message.appStateBytes != null && message.hasOwnProperty("appStateBytes"))
                    if (!(message.appStateBytes && typeof message.appStateBytes.length === "number" || $util.isString(message.appStateBytes)))
                        return "appStateBytes: buffer expected";
                if (message.initialHeight != null && message.hasOwnProperty("initialHeight"))
                    if (!$util.isInteger(message.initialHeight) && !(message.initialHeight && $util.isInteger(message.initialHeight.low) && $util.isInteger(message.initialHeight.high)))
                        return "initialHeight: integer|Long expected";
                return null;
            };

            /**
             * Creates a RequestInitChain message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestInitChain
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestInitChain} RequestInitChain
             */
            RequestInitChain.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestInitChain)
                    return object;
                var message = new $root.tendermint.abci.RequestInitChain();
                if (object.time != null) {
                    if (typeof object.time !== "object")
                        throw TypeError(".tendermint.abci.RequestInitChain.time: object expected");
                    message.time = $root.google.protobuf.Timestamp.fromObject(object.time);
                }
                if (object.chainId != null)
                    message.chainId = String(object.chainId);
                if (object.consensusParams != null) {
                    if (typeof object.consensusParams !== "object")
                        throw TypeError(".tendermint.abci.RequestInitChain.consensusParams: object expected");
                    message.consensusParams = $root.tendermint.abci.ConsensusParams.fromObject(object.consensusParams);
                }
                if (object.validators) {
                    if (!Array.isArray(object.validators))
                        throw TypeError(".tendermint.abci.RequestInitChain.validators: array expected");
                    message.validators = [];
                    for (var i = 0; i < object.validators.length; ++i) {
                        if (typeof object.validators[i] !== "object")
                            throw TypeError(".tendermint.abci.RequestInitChain.validators: object expected");
                        message.validators[i] = $root.tendermint.abci.ValidatorUpdate.fromObject(object.validators[i]);
                    }
                }
                if (object.appStateBytes != null)
                    if (typeof object.appStateBytes === "string")
                        $util.base64.decode(object.appStateBytes, message.appStateBytes = $util.newBuffer($util.base64.length(object.appStateBytes)), 0);
                    else if (object.appStateBytes.length)
                        message.appStateBytes = object.appStateBytes;
                if (object.initialHeight != null)
                    if ($util.Long)
                        (message.initialHeight = $util.Long.fromValue(object.initialHeight)).unsigned = false;
                    else if (typeof object.initialHeight === "string")
                        message.initialHeight = parseInt(object.initialHeight, 10);
                    else if (typeof object.initialHeight === "number")
                        message.initialHeight = object.initialHeight;
                    else if (typeof object.initialHeight === "object")
                        message.initialHeight = new $util.LongBits(object.initialHeight.low >>> 0, object.initialHeight.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a RequestInitChain message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestInitChain
             * @static
             * @param {tendermint.abci.RequestInitChain} message RequestInitChain
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestInitChain.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.validators = [];
                if (options.defaults) {
                    object.time = null;
                    object.chainId = "";
                    object.consensusParams = null;
                    if (options.bytes === String)
                        object.appStateBytes = "";
                    else {
                        object.appStateBytes = [];
                        if (options.bytes !== Array)
                            object.appStateBytes = $util.newBuffer(object.appStateBytes);
                    }
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.initialHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.initialHeight = options.longs === String ? "0" : 0;
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = $root.google.protobuf.Timestamp.toObject(message.time, options);
                if (message.chainId != null && message.hasOwnProperty("chainId"))
                    object.chainId = message.chainId;
                if (message.consensusParams != null && message.hasOwnProperty("consensusParams"))
                    object.consensusParams = $root.tendermint.abci.ConsensusParams.toObject(message.consensusParams, options);
                if (message.validators && message.validators.length) {
                    object.validators = [];
                    for (var j = 0; j < message.validators.length; ++j)
                        object.validators[j] = $root.tendermint.abci.ValidatorUpdate.toObject(message.validators[j], options);
                }
                if (message.appStateBytes != null && message.hasOwnProperty("appStateBytes"))
                    object.appStateBytes = options.bytes === String ? $util.base64.encode(message.appStateBytes, 0, message.appStateBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.appStateBytes) : message.appStateBytes;
                if (message.initialHeight != null && message.hasOwnProperty("initialHeight"))
                    if (typeof message.initialHeight === "number")
                        object.initialHeight = options.longs === String ? String(message.initialHeight) : message.initialHeight;
                    else
                        object.initialHeight = options.longs === String ? $util.Long.prototype.toString.call(message.initialHeight) : options.longs === Number ? new $util.LongBits(message.initialHeight.low >>> 0, message.initialHeight.high >>> 0).toNumber() : message.initialHeight;
                return object;
            };

            /**
             * Converts this RequestInitChain to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestInitChain
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestInitChain.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestInitChain;
        })();

        abci.RequestQuery = (function() {

            /**
             * Properties of a RequestQuery.
             * @memberof tendermint.abci
             * @interface IRequestQuery
             * @property {Uint8Array|null} [data] RequestQuery data
             * @property {string|null} [path] RequestQuery path
             * @property {number|Long|null} [height] RequestQuery height
             * @property {boolean|null} [prove] RequestQuery prove
             */

            /**
             * Constructs a new RequestQuery.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestQuery.
             * @implements IRequestQuery
             * @constructor
             * @param {tendermint.abci.IRequestQuery=} [properties] Properties to set
             */
            function RequestQuery(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestQuery data.
             * @member {Uint8Array} data
             * @memberof tendermint.abci.RequestQuery
             * @instance
             */
            RequestQuery.prototype.data = $util.newBuffer([]);

            /**
             * RequestQuery path.
             * @member {string} path
             * @memberof tendermint.abci.RequestQuery
             * @instance
             */
            RequestQuery.prototype.path = "";

            /**
             * RequestQuery height.
             * @member {number|Long} height
             * @memberof tendermint.abci.RequestQuery
             * @instance
             */
            RequestQuery.prototype.height = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RequestQuery prove.
             * @member {boolean} prove
             * @memberof tendermint.abci.RequestQuery
             * @instance
             */
            RequestQuery.prototype.prove = false;

            /**
             * Creates a new RequestQuery instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestQuery
             * @static
             * @param {tendermint.abci.IRequestQuery=} [properties] Properties to set
             * @returns {tendermint.abci.RequestQuery} RequestQuery instance
             */
            RequestQuery.create = function create(properties) {
                return new RequestQuery(properties);
            };

            /**
             * Encodes the specified RequestQuery message. Does not implicitly {@link tendermint.abci.RequestQuery.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestQuery
             * @static
             * @param {tendermint.abci.IRequestQuery} message RequestQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestQuery.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                if (message.path != null && message.hasOwnProperty("path"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
                if (message.height != null && message.hasOwnProperty("height"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.height);
                if (message.prove != null && message.hasOwnProperty("prove"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.prove);
                return writer;
            };

            /**
             * Encodes the specified RequestQuery message, length delimited. Does not implicitly {@link tendermint.abci.RequestQuery.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestQuery
             * @static
             * @param {tendermint.abci.IRequestQuery} message RequestQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestQuery.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestQuery message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestQuery} RequestQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestQuery.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestQuery();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.data = reader.bytes();
                        break;
                    case 2:
                        message.path = reader.string();
                        break;
                    case 3:
                        message.height = reader.int64();
                        break;
                    case 4:
                        message.prove = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestQuery message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestQuery} RequestQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestQuery.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestQuery message.
             * @function verify
             * @memberof tendermint.abci.RequestQuery
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestQuery.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                if (message.prove != null && message.hasOwnProperty("prove"))
                    if (typeof message.prove !== "boolean")
                        return "prove: boolean expected";
                return null;
            };

            /**
             * Creates a RequestQuery message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestQuery
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestQuery} RequestQuery
             */
            RequestQuery.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestQuery)
                    return object;
                var message = new $root.tendermint.abci.RequestQuery();
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                if (object.path != null)
                    message.path = String(object.path);
                if (object.height != null)
                    if ($util.Long)
                        (message.height = $util.Long.fromValue(object.height)).unsigned = false;
                    else if (typeof object.height === "string")
                        message.height = parseInt(object.height, 10);
                    else if (typeof object.height === "number")
                        message.height = object.height;
                    else if (typeof object.height === "object")
                        message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber();
                if (object.prove != null)
                    message.prove = Boolean(object.prove);
                return message;
            };

            /**
             * Creates a plain object from a RequestQuery message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestQuery
             * @static
             * @param {tendermint.abci.RequestQuery} message RequestQuery
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestQuery.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                    object.path = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.height = options.longs === String ? "0" : 0;
                    object.prove = false;
                }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.path != null && message.hasOwnProperty("path"))
                    object.path = message.path;
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber() : message.height;
                if (message.prove != null && message.hasOwnProperty("prove"))
                    object.prove = message.prove;
                return object;
            };

            /**
             * Converts this RequestQuery to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestQuery
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestQuery.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestQuery;
        })();

        abci.RequestBeginBlock = (function() {

            /**
             * Properties of a RequestBeginBlock.
             * @memberof tendermint.abci
             * @interface IRequestBeginBlock
             * @property {Uint8Array|null} [hash] RequestBeginBlock hash
             * @property {tendermint.types.IHeader|null} [header] RequestBeginBlock header
             * @property {tendermint.abci.ILastCommitInfo|null} [lastCommitInfo] RequestBeginBlock lastCommitInfo
             * @property {Array.<tendermint.abci.IEvidence>|null} [byzantineValidators] RequestBeginBlock byzantineValidators
             */

            /**
             * Constructs a new RequestBeginBlock.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestBeginBlock.
             * @implements IRequestBeginBlock
             * @constructor
             * @param {tendermint.abci.IRequestBeginBlock=} [properties] Properties to set
             */
            function RequestBeginBlock(properties) {
                this.byzantineValidators = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestBeginBlock hash.
             * @member {Uint8Array} hash
             * @memberof tendermint.abci.RequestBeginBlock
             * @instance
             */
            RequestBeginBlock.prototype.hash = $util.newBuffer([]);

            /**
             * RequestBeginBlock header.
             * @member {tendermint.types.IHeader|null|undefined} header
             * @memberof tendermint.abci.RequestBeginBlock
             * @instance
             */
            RequestBeginBlock.prototype.header = null;

            /**
             * RequestBeginBlock lastCommitInfo.
             * @member {tendermint.abci.ILastCommitInfo|null|undefined} lastCommitInfo
             * @memberof tendermint.abci.RequestBeginBlock
             * @instance
             */
            RequestBeginBlock.prototype.lastCommitInfo = null;

            /**
             * RequestBeginBlock byzantineValidators.
             * @member {Array.<tendermint.abci.IEvidence>} byzantineValidators
             * @memberof tendermint.abci.RequestBeginBlock
             * @instance
             */
            RequestBeginBlock.prototype.byzantineValidators = $util.emptyArray;

            /**
             * Creates a new RequestBeginBlock instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestBeginBlock
             * @static
             * @param {tendermint.abci.IRequestBeginBlock=} [properties] Properties to set
             * @returns {tendermint.abci.RequestBeginBlock} RequestBeginBlock instance
             */
            RequestBeginBlock.create = function create(properties) {
                return new RequestBeginBlock(properties);
            };

            /**
             * Encodes the specified RequestBeginBlock message. Does not implicitly {@link tendermint.abci.RequestBeginBlock.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestBeginBlock
             * @static
             * @param {tendermint.abci.IRequestBeginBlock} message RequestBeginBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestBeginBlock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.hash != null && message.hasOwnProperty("hash"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
                if (message.header != null && message.hasOwnProperty("header"))
                    $root.tendermint.types.Header.encode(message.header, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.lastCommitInfo != null && message.hasOwnProperty("lastCommitInfo"))
                    $root.tendermint.abci.LastCommitInfo.encode(message.lastCommitInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.byzantineValidators != null && message.byzantineValidators.length)
                    for (var i = 0; i < message.byzantineValidators.length; ++i)
                        $root.tendermint.abci.Evidence.encode(message.byzantineValidators[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RequestBeginBlock message, length delimited. Does not implicitly {@link tendermint.abci.RequestBeginBlock.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestBeginBlock
             * @static
             * @param {tendermint.abci.IRequestBeginBlock} message RequestBeginBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestBeginBlock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestBeginBlock message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestBeginBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestBeginBlock} RequestBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestBeginBlock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestBeginBlock();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.hash = reader.bytes();
                        break;
                    case 2:
                        message.header = $root.tendermint.types.Header.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.lastCommitInfo = $root.tendermint.abci.LastCommitInfo.decode(reader, reader.uint32());
                        break;
                    case 4:
                        if (!(message.byzantineValidators && message.byzantineValidators.length))
                            message.byzantineValidators = [];
                        message.byzantineValidators.push($root.tendermint.abci.Evidence.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestBeginBlock message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestBeginBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestBeginBlock} RequestBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestBeginBlock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestBeginBlock message.
             * @function verify
             * @memberof tendermint.abci.RequestBeginBlock
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestBeginBlock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                        return "hash: buffer expected";
                if (message.header != null && message.hasOwnProperty("header")) {
                    var error = $root.tendermint.types.Header.verify(message.header);
                    if (error)
                        return "header." + error;
                }
                if (message.lastCommitInfo != null && message.hasOwnProperty("lastCommitInfo")) {
                    var error = $root.tendermint.abci.LastCommitInfo.verify(message.lastCommitInfo);
                    if (error)
                        return "lastCommitInfo." + error;
                }
                if (message.byzantineValidators != null && message.hasOwnProperty("byzantineValidators")) {
                    if (!Array.isArray(message.byzantineValidators))
                        return "byzantineValidators: array expected";
                    for (var i = 0; i < message.byzantineValidators.length; ++i) {
                        var error = $root.tendermint.abci.Evidence.verify(message.byzantineValidators[i]);
                        if (error)
                            return "byzantineValidators." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RequestBeginBlock message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestBeginBlock
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestBeginBlock} RequestBeginBlock
             */
            RequestBeginBlock.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestBeginBlock)
                    return object;
                var message = new $root.tendermint.abci.RequestBeginBlock();
                if (object.hash != null)
                    if (typeof object.hash === "string")
                        $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                    else if (object.hash.length)
                        message.hash = object.hash;
                if (object.header != null) {
                    if (typeof object.header !== "object")
                        throw TypeError(".tendermint.abci.RequestBeginBlock.header: object expected");
                    message.header = $root.tendermint.types.Header.fromObject(object.header);
                }
                if (object.lastCommitInfo != null) {
                    if (typeof object.lastCommitInfo !== "object")
                        throw TypeError(".tendermint.abci.RequestBeginBlock.lastCommitInfo: object expected");
                    message.lastCommitInfo = $root.tendermint.abci.LastCommitInfo.fromObject(object.lastCommitInfo);
                }
                if (object.byzantineValidators) {
                    if (!Array.isArray(object.byzantineValidators))
                        throw TypeError(".tendermint.abci.RequestBeginBlock.byzantineValidators: array expected");
                    message.byzantineValidators = [];
                    for (var i = 0; i < object.byzantineValidators.length; ++i) {
                        if (typeof object.byzantineValidators[i] !== "object")
                            throw TypeError(".tendermint.abci.RequestBeginBlock.byzantineValidators: object expected");
                        message.byzantineValidators[i] = $root.tendermint.abci.Evidence.fromObject(object.byzantineValidators[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestBeginBlock message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestBeginBlock
             * @static
             * @param {tendermint.abci.RequestBeginBlock} message RequestBeginBlock
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestBeginBlock.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.byzantineValidators = [];
                if (options.defaults) {
                    if (options.bytes === String)
                        object.hash = "";
                    else {
                        object.hash = [];
                        if (options.bytes !== Array)
                            object.hash = $util.newBuffer(object.hash);
                    }
                    object.header = null;
                    object.lastCommitInfo = null;
                }
                if (message.hash != null && message.hasOwnProperty("hash"))
                    object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                if (message.header != null && message.hasOwnProperty("header"))
                    object.header = $root.tendermint.types.Header.toObject(message.header, options);
                if (message.lastCommitInfo != null && message.hasOwnProperty("lastCommitInfo"))
                    object.lastCommitInfo = $root.tendermint.abci.LastCommitInfo.toObject(message.lastCommitInfo, options);
                if (message.byzantineValidators && message.byzantineValidators.length) {
                    object.byzantineValidators = [];
                    for (var j = 0; j < message.byzantineValidators.length; ++j)
                        object.byzantineValidators[j] = $root.tendermint.abci.Evidence.toObject(message.byzantineValidators[j], options);
                }
                return object;
            };

            /**
             * Converts this RequestBeginBlock to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestBeginBlock
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestBeginBlock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestBeginBlock;
        })();

        /**
         * CheckTxType enum.
         * @name tendermint.abci.CheckTxType
         * @enum {string}
         * @property {number} NEW=0 NEW value
         * @property {number} RECHECK=1 RECHECK value
         */
        abci.CheckTxType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NEW"] = 0;
            values[valuesById[1] = "RECHECK"] = 1;
            return values;
        })();

        abci.RequestCheckTx = (function() {

            /**
             * Properties of a RequestCheckTx.
             * @memberof tendermint.abci
             * @interface IRequestCheckTx
             * @property {Uint8Array|null} [tx] RequestCheckTx tx
             * @property {tendermint.abci.CheckTxType|null} [type] RequestCheckTx type
             */

            /**
             * Constructs a new RequestCheckTx.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestCheckTx.
             * @implements IRequestCheckTx
             * @constructor
             * @param {tendermint.abci.IRequestCheckTx=} [properties] Properties to set
             */
            function RequestCheckTx(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestCheckTx tx.
             * @member {Uint8Array} tx
             * @memberof tendermint.abci.RequestCheckTx
             * @instance
             */
            RequestCheckTx.prototype.tx = $util.newBuffer([]);

            /**
             * RequestCheckTx type.
             * @member {tendermint.abci.CheckTxType} type
             * @memberof tendermint.abci.RequestCheckTx
             * @instance
             */
            RequestCheckTx.prototype.type = 0;

            /**
             * Creates a new RequestCheckTx instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestCheckTx
             * @static
             * @param {tendermint.abci.IRequestCheckTx=} [properties] Properties to set
             * @returns {tendermint.abci.RequestCheckTx} RequestCheckTx instance
             */
            RequestCheckTx.create = function create(properties) {
                return new RequestCheckTx(properties);
            };

            /**
             * Encodes the specified RequestCheckTx message. Does not implicitly {@link tendermint.abci.RequestCheckTx.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestCheckTx
             * @static
             * @param {tendermint.abci.IRequestCheckTx} message RequestCheckTx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestCheckTx.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tx != null && message.hasOwnProperty("tx"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.tx);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                return writer;
            };

            /**
             * Encodes the specified RequestCheckTx message, length delimited. Does not implicitly {@link tendermint.abci.RequestCheckTx.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestCheckTx
             * @static
             * @param {tendermint.abci.IRequestCheckTx} message RequestCheckTx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestCheckTx.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestCheckTx message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestCheckTx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestCheckTx} RequestCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestCheckTx.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestCheckTx();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tx = reader.bytes();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestCheckTx message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestCheckTx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestCheckTx} RequestCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestCheckTx.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestCheckTx message.
             * @function verify
             * @memberof tendermint.abci.RequestCheckTx
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestCheckTx.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tx != null && message.hasOwnProperty("tx"))
                    if (!(message.tx && typeof message.tx.length === "number" || $util.isString(message.tx)))
                        return "tx: buffer expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates a RequestCheckTx message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestCheckTx
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestCheckTx} RequestCheckTx
             */
            RequestCheckTx.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestCheckTx)
                    return object;
                var message = new $root.tendermint.abci.RequestCheckTx();
                if (object.tx != null)
                    if (typeof object.tx === "string")
                        $util.base64.decode(object.tx, message.tx = $util.newBuffer($util.base64.length(object.tx)), 0);
                    else if (object.tx.length)
                        message.tx = object.tx;
                switch (object.type) {
                case "NEW":
                case 0:
                    message.type = 0;
                    break;
                case "RECHECK":
                case 1:
                    message.type = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestCheckTx message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestCheckTx
             * @static
             * @param {tendermint.abci.RequestCheckTx} message RequestCheckTx
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestCheckTx.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.tx = "";
                    else {
                        object.tx = [];
                        if (options.bytes !== Array)
                            object.tx = $util.newBuffer(object.tx);
                    }
                    object.type = options.enums === String ? "NEW" : 0;
                }
                if (message.tx != null && message.hasOwnProperty("tx"))
                    object.tx = options.bytes === String ? $util.base64.encode(message.tx, 0, message.tx.length) : options.bytes === Array ? Array.prototype.slice.call(message.tx) : message.tx;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.tendermint.abci.CheckTxType[message.type] : message.type;
                return object;
            };

            /**
             * Converts this RequestCheckTx to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestCheckTx
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestCheckTx.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestCheckTx;
        })();

        abci.RequestDeliverTx = (function() {

            /**
             * Properties of a RequestDeliverTx.
             * @memberof tendermint.abci
             * @interface IRequestDeliverTx
             * @property {Uint8Array|null} [tx] RequestDeliverTx tx
             */

            /**
             * Constructs a new RequestDeliverTx.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestDeliverTx.
             * @implements IRequestDeliverTx
             * @constructor
             * @param {tendermint.abci.IRequestDeliverTx=} [properties] Properties to set
             */
            function RequestDeliverTx(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestDeliverTx tx.
             * @member {Uint8Array} tx
             * @memberof tendermint.abci.RequestDeliverTx
             * @instance
             */
            RequestDeliverTx.prototype.tx = $util.newBuffer([]);

            /**
             * Creates a new RequestDeliverTx instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestDeliverTx
             * @static
             * @param {tendermint.abci.IRequestDeliverTx=} [properties] Properties to set
             * @returns {tendermint.abci.RequestDeliverTx} RequestDeliverTx instance
             */
            RequestDeliverTx.create = function create(properties) {
                return new RequestDeliverTx(properties);
            };

            /**
             * Encodes the specified RequestDeliverTx message. Does not implicitly {@link tendermint.abci.RequestDeliverTx.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestDeliverTx
             * @static
             * @param {tendermint.abci.IRequestDeliverTx} message RequestDeliverTx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestDeliverTx.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tx != null && message.hasOwnProperty("tx"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.tx);
                return writer;
            };

            /**
             * Encodes the specified RequestDeliverTx message, length delimited. Does not implicitly {@link tendermint.abci.RequestDeliverTx.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestDeliverTx
             * @static
             * @param {tendermint.abci.IRequestDeliverTx} message RequestDeliverTx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestDeliverTx.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestDeliverTx message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestDeliverTx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestDeliverTx} RequestDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestDeliverTx.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestDeliverTx();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tx = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestDeliverTx message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestDeliverTx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestDeliverTx} RequestDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestDeliverTx.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestDeliverTx message.
             * @function verify
             * @memberof tendermint.abci.RequestDeliverTx
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestDeliverTx.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tx != null && message.hasOwnProperty("tx"))
                    if (!(message.tx && typeof message.tx.length === "number" || $util.isString(message.tx)))
                        return "tx: buffer expected";
                return null;
            };

            /**
             * Creates a RequestDeliverTx message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestDeliverTx
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestDeliverTx} RequestDeliverTx
             */
            RequestDeliverTx.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestDeliverTx)
                    return object;
                var message = new $root.tendermint.abci.RequestDeliverTx();
                if (object.tx != null)
                    if (typeof object.tx === "string")
                        $util.base64.decode(object.tx, message.tx = $util.newBuffer($util.base64.length(object.tx)), 0);
                    else if (object.tx.length)
                        message.tx = object.tx;
                return message;
            };

            /**
             * Creates a plain object from a RequestDeliverTx message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestDeliverTx
             * @static
             * @param {tendermint.abci.RequestDeliverTx} message RequestDeliverTx
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestDeliverTx.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.tx = "";
                    else {
                        object.tx = [];
                        if (options.bytes !== Array)
                            object.tx = $util.newBuffer(object.tx);
                    }
                if (message.tx != null && message.hasOwnProperty("tx"))
                    object.tx = options.bytes === String ? $util.base64.encode(message.tx, 0, message.tx.length) : options.bytes === Array ? Array.prototype.slice.call(message.tx) : message.tx;
                return object;
            };

            /**
             * Converts this RequestDeliverTx to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestDeliverTx
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestDeliverTx.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestDeliverTx;
        })();

        abci.RequestEndBlock = (function() {

            /**
             * Properties of a RequestEndBlock.
             * @memberof tendermint.abci
             * @interface IRequestEndBlock
             * @property {number|Long|null} [height] RequestEndBlock height
             */

            /**
             * Constructs a new RequestEndBlock.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestEndBlock.
             * @implements IRequestEndBlock
             * @constructor
             * @param {tendermint.abci.IRequestEndBlock=} [properties] Properties to set
             */
            function RequestEndBlock(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestEndBlock height.
             * @member {number|Long} height
             * @memberof tendermint.abci.RequestEndBlock
             * @instance
             */
            RequestEndBlock.prototype.height = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new RequestEndBlock instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestEndBlock
             * @static
             * @param {tendermint.abci.IRequestEndBlock=} [properties] Properties to set
             * @returns {tendermint.abci.RequestEndBlock} RequestEndBlock instance
             */
            RequestEndBlock.create = function create(properties) {
                return new RequestEndBlock(properties);
            };

            /**
             * Encodes the specified RequestEndBlock message. Does not implicitly {@link tendermint.abci.RequestEndBlock.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestEndBlock
             * @static
             * @param {tendermint.abci.IRequestEndBlock} message RequestEndBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestEndBlock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.height != null && message.hasOwnProperty("height"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.height);
                return writer;
            };

            /**
             * Encodes the specified RequestEndBlock message, length delimited. Does not implicitly {@link tendermint.abci.RequestEndBlock.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestEndBlock
             * @static
             * @param {tendermint.abci.IRequestEndBlock} message RequestEndBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestEndBlock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestEndBlock message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestEndBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestEndBlock} RequestEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestEndBlock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestEndBlock();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.height = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestEndBlock message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestEndBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestEndBlock} RequestEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestEndBlock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestEndBlock message.
             * @function verify
             * @memberof tendermint.abci.RequestEndBlock
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestEndBlock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                return null;
            };

            /**
             * Creates a RequestEndBlock message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestEndBlock
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestEndBlock} RequestEndBlock
             */
            RequestEndBlock.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestEndBlock)
                    return object;
                var message = new $root.tendermint.abci.RequestEndBlock();
                if (object.height != null)
                    if ($util.Long)
                        (message.height = $util.Long.fromValue(object.height)).unsigned = false;
                    else if (typeof object.height === "string")
                        message.height = parseInt(object.height, 10);
                    else if (typeof object.height === "number")
                        message.height = object.height;
                    else if (typeof object.height === "object")
                        message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a RequestEndBlock message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestEndBlock
             * @static
             * @param {tendermint.abci.RequestEndBlock} message RequestEndBlock
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestEndBlock.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.height = options.longs === String ? "0" : 0;
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber() : message.height;
                return object;
            };

            /**
             * Converts this RequestEndBlock to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestEndBlock
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestEndBlock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestEndBlock;
        })();

        abci.RequestCommit = (function() {

            /**
             * Properties of a RequestCommit.
             * @memberof tendermint.abci
             * @interface IRequestCommit
             */

            /**
             * Constructs a new RequestCommit.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestCommit.
             * @implements IRequestCommit
             * @constructor
             * @param {tendermint.abci.IRequestCommit=} [properties] Properties to set
             */
            function RequestCommit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new RequestCommit instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestCommit
             * @static
             * @param {tendermint.abci.IRequestCommit=} [properties] Properties to set
             * @returns {tendermint.abci.RequestCommit} RequestCommit instance
             */
            RequestCommit.create = function create(properties) {
                return new RequestCommit(properties);
            };

            /**
             * Encodes the specified RequestCommit message. Does not implicitly {@link tendermint.abci.RequestCommit.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestCommit
             * @static
             * @param {tendermint.abci.IRequestCommit} message RequestCommit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestCommit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified RequestCommit message, length delimited. Does not implicitly {@link tendermint.abci.RequestCommit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestCommit
             * @static
             * @param {tendermint.abci.IRequestCommit} message RequestCommit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestCommit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestCommit message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestCommit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestCommit} RequestCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestCommit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestCommit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestCommit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestCommit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestCommit} RequestCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestCommit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestCommit message.
             * @function verify
             * @memberof tendermint.abci.RequestCommit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestCommit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a RequestCommit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestCommit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestCommit} RequestCommit
             */
            RequestCommit.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestCommit)
                    return object;
                return new $root.tendermint.abci.RequestCommit();
            };

            /**
             * Creates a plain object from a RequestCommit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestCommit
             * @static
             * @param {tendermint.abci.RequestCommit} message RequestCommit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestCommit.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this RequestCommit to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestCommit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestCommit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestCommit;
        })();

        abci.RequestListSnapshots = (function() {

            /**
             * Properties of a RequestListSnapshots.
             * @memberof tendermint.abci
             * @interface IRequestListSnapshots
             */

            /**
             * Constructs a new RequestListSnapshots.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestListSnapshots.
             * @implements IRequestListSnapshots
             * @constructor
             * @param {tendermint.abci.IRequestListSnapshots=} [properties] Properties to set
             */
            function RequestListSnapshots(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new RequestListSnapshots instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestListSnapshots
             * @static
             * @param {tendermint.abci.IRequestListSnapshots=} [properties] Properties to set
             * @returns {tendermint.abci.RequestListSnapshots} RequestListSnapshots instance
             */
            RequestListSnapshots.create = function create(properties) {
                return new RequestListSnapshots(properties);
            };

            /**
             * Encodes the specified RequestListSnapshots message. Does not implicitly {@link tendermint.abci.RequestListSnapshots.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestListSnapshots
             * @static
             * @param {tendermint.abci.IRequestListSnapshots} message RequestListSnapshots message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestListSnapshots.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified RequestListSnapshots message, length delimited. Does not implicitly {@link tendermint.abci.RequestListSnapshots.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestListSnapshots
             * @static
             * @param {tendermint.abci.IRequestListSnapshots} message RequestListSnapshots message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestListSnapshots.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestListSnapshots message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestListSnapshots
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestListSnapshots} RequestListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestListSnapshots.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestListSnapshots();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestListSnapshots message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestListSnapshots
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestListSnapshots} RequestListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestListSnapshots.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestListSnapshots message.
             * @function verify
             * @memberof tendermint.abci.RequestListSnapshots
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestListSnapshots.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a RequestListSnapshots message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestListSnapshots
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestListSnapshots} RequestListSnapshots
             */
            RequestListSnapshots.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestListSnapshots)
                    return object;
                return new $root.tendermint.abci.RequestListSnapshots();
            };

            /**
             * Creates a plain object from a RequestListSnapshots message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestListSnapshots
             * @static
             * @param {tendermint.abci.RequestListSnapshots} message RequestListSnapshots
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestListSnapshots.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this RequestListSnapshots to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestListSnapshots
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestListSnapshots.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestListSnapshots;
        })();

        abci.RequestOfferSnapshot = (function() {

            /**
             * Properties of a RequestOfferSnapshot.
             * @memberof tendermint.abci
             * @interface IRequestOfferSnapshot
             * @property {tendermint.abci.ISnapshot|null} [snapshot] RequestOfferSnapshot snapshot
             * @property {Uint8Array|null} [appHash] RequestOfferSnapshot appHash
             */

            /**
             * Constructs a new RequestOfferSnapshot.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestOfferSnapshot.
             * @implements IRequestOfferSnapshot
             * @constructor
             * @param {tendermint.abci.IRequestOfferSnapshot=} [properties] Properties to set
             */
            function RequestOfferSnapshot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestOfferSnapshot snapshot.
             * @member {tendermint.abci.ISnapshot|null|undefined} snapshot
             * @memberof tendermint.abci.RequestOfferSnapshot
             * @instance
             */
            RequestOfferSnapshot.prototype.snapshot = null;

            /**
             * RequestOfferSnapshot appHash.
             * @member {Uint8Array} appHash
             * @memberof tendermint.abci.RequestOfferSnapshot
             * @instance
             */
            RequestOfferSnapshot.prototype.appHash = $util.newBuffer([]);

            /**
             * Creates a new RequestOfferSnapshot instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestOfferSnapshot
             * @static
             * @param {tendermint.abci.IRequestOfferSnapshot=} [properties] Properties to set
             * @returns {tendermint.abci.RequestOfferSnapshot} RequestOfferSnapshot instance
             */
            RequestOfferSnapshot.create = function create(properties) {
                return new RequestOfferSnapshot(properties);
            };

            /**
             * Encodes the specified RequestOfferSnapshot message. Does not implicitly {@link tendermint.abci.RequestOfferSnapshot.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestOfferSnapshot
             * @static
             * @param {tendermint.abci.IRequestOfferSnapshot} message RequestOfferSnapshot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestOfferSnapshot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.snapshot != null && message.hasOwnProperty("snapshot"))
                    $root.tendermint.abci.Snapshot.encode(message.snapshot, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.appHash != null && message.hasOwnProperty("appHash"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.appHash);
                return writer;
            };

            /**
             * Encodes the specified RequestOfferSnapshot message, length delimited. Does not implicitly {@link tendermint.abci.RequestOfferSnapshot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestOfferSnapshot
             * @static
             * @param {tendermint.abci.IRequestOfferSnapshot} message RequestOfferSnapshot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestOfferSnapshot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestOfferSnapshot message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestOfferSnapshot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestOfferSnapshot} RequestOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestOfferSnapshot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestOfferSnapshot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.snapshot = $root.tendermint.abci.Snapshot.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.appHash = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestOfferSnapshot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestOfferSnapshot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestOfferSnapshot} RequestOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestOfferSnapshot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestOfferSnapshot message.
             * @function verify
             * @memberof tendermint.abci.RequestOfferSnapshot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestOfferSnapshot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.snapshot != null && message.hasOwnProperty("snapshot")) {
                    var error = $root.tendermint.abci.Snapshot.verify(message.snapshot);
                    if (error)
                        return "snapshot." + error;
                }
                if (message.appHash != null && message.hasOwnProperty("appHash"))
                    if (!(message.appHash && typeof message.appHash.length === "number" || $util.isString(message.appHash)))
                        return "appHash: buffer expected";
                return null;
            };

            /**
             * Creates a RequestOfferSnapshot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestOfferSnapshot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestOfferSnapshot} RequestOfferSnapshot
             */
            RequestOfferSnapshot.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestOfferSnapshot)
                    return object;
                var message = new $root.tendermint.abci.RequestOfferSnapshot();
                if (object.snapshot != null) {
                    if (typeof object.snapshot !== "object")
                        throw TypeError(".tendermint.abci.RequestOfferSnapshot.snapshot: object expected");
                    message.snapshot = $root.tendermint.abci.Snapshot.fromObject(object.snapshot);
                }
                if (object.appHash != null)
                    if (typeof object.appHash === "string")
                        $util.base64.decode(object.appHash, message.appHash = $util.newBuffer($util.base64.length(object.appHash)), 0);
                    else if (object.appHash.length)
                        message.appHash = object.appHash;
                return message;
            };

            /**
             * Creates a plain object from a RequestOfferSnapshot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestOfferSnapshot
             * @static
             * @param {tendermint.abci.RequestOfferSnapshot} message RequestOfferSnapshot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestOfferSnapshot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.snapshot = null;
                    if (options.bytes === String)
                        object.appHash = "";
                    else {
                        object.appHash = [];
                        if (options.bytes !== Array)
                            object.appHash = $util.newBuffer(object.appHash);
                    }
                }
                if (message.snapshot != null && message.hasOwnProperty("snapshot"))
                    object.snapshot = $root.tendermint.abci.Snapshot.toObject(message.snapshot, options);
                if (message.appHash != null && message.hasOwnProperty("appHash"))
                    object.appHash = options.bytes === String ? $util.base64.encode(message.appHash, 0, message.appHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.appHash) : message.appHash;
                return object;
            };

            /**
             * Converts this RequestOfferSnapshot to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestOfferSnapshot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestOfferSnapshot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestOfferSnapshot;
        })();

        abci.RequestLoadSnapshotChunk = (function() {

            /**
             * Properties of a RequestLoadSnapshotChunk.
             * @memberof tendermint.abci
             * @interface IRequestLoadSnapshotChunk
             * @property {number|Long|null} [height] RequestLoadSnapshotChunk height
             * @property {number|null} [format] RequestLoadSnapshotChunk format
             * @property {number|null} [chunk] RequestLoadSnapshotChunk chunk
             */

            /**
             * Constructs a new RequestLoadSnapshotChunk.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestLoadSnapshotChunk.
             * @implements IRequestLoadSnapshotChunk
             * @constructor
             * @param {tendermint.abci.IRequestLoadSnapshotChunk=} [properties] Properties to set
             */
            function RequestLoadSnapshotChunk(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestLoadSnapshotChunk height.
             * @member {number|Long} height
             * @memberof tendermint.abci.RequestLoadSnapshotChunk
             * @instance
             */
            RequestLoadSnapshotChunk.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * RequestLoadSnapshotChunk format.
             * @member {number} format
             * @memberof tendermint.abci.RequestLoadSnapshotChunk
             * @instance
             */
            RequestLoadSnapshotChunk.prototype.format = 0;

            /**
             * RequestLoadSnapshotChunk chunk.
             * @member {number} chunk
             * @memberof tendermint.abci.RequestLoadSnapshotChunk
             * @instance
             */
            RequestLoadSnapshotChunk.prototype.chunk = 0;

            /**
             * Creates a new RequestLoadSnapshotChunk instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestLoadSnapshotChunk
             * @static
             * @param {tendermint.abci.IRequestLoadSnapshotChunk=} [properties] Properties to set
             * @returns {tendermint.abci.RequestLoadSnapshotChunk} RequestLoadSnapshotChunk instance
             */
            RequestLoadSnapshotChunk.create = function create(properties) {
                return new RequestLoadSnapshotChunk(properties);
            };

            /**
             * Encodes the specified RequestLoadSnapshotChunk message. Does not implicitly {@link tendermint.abci.RequestLoadSnapshotChunk.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestLoadSnapshotChunk
             * @static
             * @param {tendermint.abci.IRequestLoadSnapshotChunk} message RequestLoadSnapshotChunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestLoadSnapshotChunk.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.height != null && message.hasOwnProperty("height"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.height);
                if (message.format != null && message.hasOwnProperty("format"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.format);
                if (message.chunk != null && message.hasOwnProperty("chunk"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.chunk);
                return writer;
            };

            /**
             * Encodes the specified RequestLoadSnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.RequestLoadSnapshotChunk.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestLoadSnapshotChunk
             * @static
             * @param {tendermint.abci.IRequestLoadSnapshotChunk} message RequestLoadSnapshotChunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestLoadSnapshotChunk.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestLoadSnapshotChunk message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestLoadSnapshotChunk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestLoadSnapshotChunk} RequestLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestLoadSnapshotChunk.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestLoadSnapshotChunk();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.height = reader.uint64();
                        break;
                    case 2:
                        message.format = reader.uint32();
                        break;
                    case 3:
                        message.chunk = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestLoadSnapshotChunk message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestLoadSnapshotChunk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestLoadSnapshotChunk} RequestLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestLoadSnapshotChunk.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestLoadSnapshotChunk message.
             * @function verify
             * @memberof tendermint.abci.RequestLoadSnapshotChunk
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestLoadSnapshotChunk.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                if (message.format != null && message.hasOwnProperty("format"))
                    if (!$util.isInteger(message.format))
                        return "format: integer expected";
                if (message.chunk != null && message.hasOwnProperty("chunk"))
                    if (!$util.isInteger(message.chunk))
                        return "chunk: integer expected";
                return null;
            };

            /**
             * Creates a RequestLoadSnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestLoadSnapshotChunk
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestLoadSnapshotChunk} RequestLoadSnapshotChunk
             */
            RequestLoadSnapshotChunk.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestLoadSnapshotChunk)
                    return object;
                var message = new $root.tendermint.abci.RequestLoadSnapshotChunk();
                if (object.height != null)
                    if ($util.Long)
                        (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                    else if (typeof object.height === "string")
                        message.height = parseInt(object.height, 10);
                    else if (typeof object.height === "number")
                        message.height = object.height;
                    else if (typeof object.height === "object")
                        message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                if (object.format != null)
                    message.format = object.format >>> 0;
                if (object.chunk != null)
                    message.chunk = object.chunk >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a RequestLoadSnapshotChunk message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestLoadSnapshotChunk
             * @static
             * @param {tendermint.abci.RequestLoadSnapshotChunk} message RequestLoadSnapshotChunk
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestLoadSnapshotChunk.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.height = options.longs === String ? "0" : 0;
                    object.format = 0;
                    object.chunk = 0;
                }
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                if (message.format != null && message.hasOwnProperty("format"))
                    object.format = message.format;
                if (message.chunk != null && message.hasOwnProperty("chunk"))
                    object.chunk = message.chunk;
                return object;
            };

            /**
             * Converts this RequestLoadSnapshotChunk to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestLoadSnapshotChunk
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestLoadSnapshotChunk.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestLoadSnapshotChunk;
        })();

        abci.RequestApplySnapshotChunk = (function() {

            /**
             * Properties of a RequestApplySnapshotChunk.
             * @memberof tendermint.abci
             * @interface IRequestApplySnapshotChunk
             * @property {number|null} [index] RequestApplySnapshotChunk index
             * @property {Uint8Array|null} [chunk] RequestApplySnapshotChunk chunk
             * @property {string|null} [sender] RequestApplySnapshotChunk sender
             */

            /**
             * Constructs a new RequestApplySnapshotChunk.
             * @memberof tendermint.abci
             * @classdesc Represents a RequestApplySnapshotChunk.
             * @implements IRequestApplySnapshotChunk
             * @constructor
             * @param {tendermint.abci.IRequestApplySnapshotChunk=} [properties] Properties to set
             */
            function RequestApplySnapshotChunk(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestApplySnapshotChunk index.
             * @member {number} index
             * @memberof tendermint.abci.RequestApplySnapshotChunk
             * @instance
             */
            RequestApplySnapshotChunk.prototype.index = 0;

            /**
             * RequestApplySnapshotChunk chunk.
             * @member {Uint8Array} chunk
             * @memberof tendermint.abci.RequestApplySnapshotChunk
             * @instance
             */
            RequestApplySnapshotChunk.prototype.chunk = $util.newBuffer([]);

            /**
             * RequestApplySnapshotChunk sender.
             * @member {string} sender
             * @memberof tendermint.abci.RequestApplySnapshotChunk
             * @instance
             */
            RequestApplySnapshotChunk.prototype.sender = "";

            /**
             * Creates a new RequestApplySnapshotChunk instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.RequestApplySnapshotChunk
             * @static
             * @param {tendermint.abci.IRequestApplySnapshotChunk=} [properties] Properties to set
             * @returns {tendermint.abci.RequestApplySnapshotChunk} RequestApplySnapshotChunk instance
             */
            RequestApplySnapshotChunk.create = function create(properties) {
                return new RequestApplySnapshotChunk(properties);
            };

            /**
             * Encodes the specified RequestApplySnapshotChunk message. Does not implicitly {@link tendermint.abci.RequestApplySnapshotChunk.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.RequestApplySnapshotChunk
             * @static
             * @param {tendermint.abci.IRequestApplySnapshotChunk} message RequestApplySnapshotChunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestApplySnapshotChunk.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.index != null && message.hasOwnProperty("index"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
                if (message.chunk != null && message.hasOwnProperty("chunk"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.chunk);
                if (message.sender != null && message.hasOwnProperty("sender"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.sender);
                return writer;
            };

            /**
             * Encodes the specified RequestApplySnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.RequestApplySnapshotChunk.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.RequestApplySnapshotChunk
             * @static
             * @param {tendermint.abci.IRequestApplySnapshotChunk} message RequestApplySnapshotChunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestApplySnapshotChunk.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestApplySnapshotChunk message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.RequestApplySnapshotChunk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.RequestApplySnapshotChunk} RequestApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestApplySnapshotChunk.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.RequestApplySnapshotChunk();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.index = reader.uint32();
                        break;
                    case 2:
                        message.chunk = reader.bytes();
                        break;
                    case 3:
                        message.sender = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestApplySnapshotChunk message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.RequestApplySnapshotChunk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.RequestApplySnapshotChunk} RequestApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestApplySnapshotChunk.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestApplySnapshotChunk message.
             * @function verify
             * @memberof tendermint.abci.RequestApplySnapshotChunk
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestApplySnapshotChunk.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.index != null && message.hasOwnProperty("index"))
                    if (!$util.isInteger(message.index))
                        return "index: integer expected";
                if (message.chunk != null && message.hasOwnProperty("chunk"))
                    if (!(message.chunk && typeof message.chunk.length === "number" || $util.isString(message.chunk)))
                        return "chunk: buffer expected";
                if (message.sender != null && message.hasOwnProperty("sender"))
                    if (!$util.isString(message.sender))
                        return "sender: string expected";
                return null;
            };

            /**
             * Creates a RequestApplySnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.RequestApplySnapshotChunk
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.RequestApplySnapshotChunk} RequestApplySnapshotChunk
             */
            RequestApplySnapshotChunk.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.RequestApplySnapshotChunk)
                    return object;
                var message = new $root.tendermint.abci.RequestApplySnapshotChunk();
                if (object.index != null)
                    message.index = object.index >>> 0;
                if (object.chunk != null)
                    if (typeof object.chunk === "string")
                        $util.base64.decode(object.chunk, message.chunk = $util.newBuffer($util.base64.length(object.chunk)), 0);
                    else if (object.chunk.length)
                        message.chunk = object.chunk;
                if (object.sender != null)
                    message.sender = String(object.sender);
                return message;
            };

            /**
             * Creates a plain object from a RequestApplySnapshotChunk message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.RequestApplySnapshotChunk
             * @static
             * @param {tendermint.abci.RequestApplySnapshotChunk} message RequestApplySnapshotChunk
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestApplySnapshotChunk.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.index = 0;
                    if (options.bytes === String)
                        object.chunk = "";
                    else {
                        object.chunk = [];
                        if (options.bytes !== Array)
                            object.chunk = $util.newBuffer(object.chunk);
                    }
                    object.sender = "";
                }
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                if (message.chunk != null && message.hasOwnProperty("chunk"))
                    object.chunk = options.bytes === String ? $util.base64.encode(message.chunk, 0, message.chunk.length) : options.bytes === Array ? Array.prototype.slice.call(message.chunk) : message.chunk;
                if (message.sender != null && message.hasOwnProperty("sender"))
                    object.sender = message.sender;
                return object;
            };

            /**
             * Converts this RequestApplySnapshotChunk to JSON.
             * @function toJSON
             * @memberof tendermint.abci.RequestApplySnapshotChunk
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestApplySnapshotChunk.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestApplySnapshotChunk;
        })();

        abci.Response = (function() {

            /**
             * Properties of a Response.
             * @memberof tendermint.abci
             * @interface IResponse
             * @property {tendermint.abci.IResponseException|null} [exception] Response exception
             * @property {tendermint.abci.IResponseEcho|null} [echo] Response echo
             * @property {tendermint.abci.IResponseFlush|null} [flush] Response flush
             * @property {tendermint.abci.IResponseInfo|null} [info] Response info
             * @property {tendermint.abci.IResponseSetOption|null} [setOption] Response setOption
             * @property {tendermint.abci.IResponseInitChain|null} [initChain] Response initChain
             * @property {tendermint.abci.IResponseQuery|null} [query] Response query
             * @property {tendermint.abci.IResponseBeginBlock|null} [beginBlock] Response beginBlock
             * @property {tendermint.abci.IResponseCheckTx|null} [checkTx] Response checkTx
             * @property {tendermint.abci.IResponseDeliverTx|null} [deliverTx] Response deliverTx
             * @property {tendermint.abci.IResponseEndBlock|null} [endBlock] Response endBlock
             * @property {tendermint.abci.IResponseCommit|null} [commit] Response commit
             * @property {tendermint.abci.IResponseListSnapshots|null} [listSnapshots] Response listSnapshots
             * @property {tendermint.abci.IResponseOfferSnapshot|null} [offerSnapshot] Response offerSnapshot
             * @property {tendermint.abci.IResponseLoadSnapshotChunk|null} [loadSnapshotChunk] Response loadSnapshotChunk
             * @property {tendermint.abci.IResponseApplySnapshotChunk|null} [applySnapshotChunk] Response applySnapshotChunk
             */

            /**
             * Constructs a new Response.
             * @memberof tendermint.abci
             * @classdesc Represents a Response.
             * @implements IResponse
             * @constructor
             * @param {tendermint.abci.IResponse=} [properties] Properties to set
             */
            function Response(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Response exception.
             * @member {tendermint.abci.IResponseException|null|undefined} exception
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.exception = null;

            /**
             * Response echo.
             * @member {tendermint.abci.IResponseEcho|null|undefined} echo
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.echo = null;

            /**
             * Response flush.
             * @member {tendermint.abci.IResponseFlush|null|undefined} flush
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.flush = null;

            /**
             * Response info.
             * @member {tendermint.abci.IResponseInfo|null|undefined} info
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.info = null;

            /**
             * Response setOption.
             * @member {tendermint.abci.IResponseSetOption|null|undefined} setOption
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.setOption = null;

            /**
             * Response initChain.
             * @member {tendermint.abci.IResponseInitChain|null|undefined} initChain
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.initChain = null;

            /**
             * Response query.
             * @member {tendermint.abci.IResponseQuery|null|undefined} query
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.query = null;

            /**
             * Response beginBlock.
             * @member {tendermint.abci.IResponseBeginBlock|null|undefined} beginBlock
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.beginBlock = null;

            /**
             * Response checkTx.
             * @member {tendermint.abci.IResponseCheckTx|null|undefined} checkTx
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.checkTx = null;

            /**
             * Response deliverTx.
             * @member {tendermint.abci.IResponseDeliverTx|null|undefined} deliverTx
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.deliverTx = null;

            /**
             * Response endBlock.
             * @member {tendermint.abci.IResponseEndBlock|null|undefined} endBlock
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.endBlock = null;

            /**
             * Response commit.
             * @member {tendermint.abci.IResponseCommit|null|undefined} commit
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.commit = null;

            /**
             * Response listSnapshots.
             * @member {tendermint.abci.IResponseListSnapshots|null|undefined} listSnapshots
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.listSnapshots = null;

            /**
             * Response offerSnapshot.
             * @member {tendermint.abci.IResponseOfferSnapshot|null|undefined} offerSnapshot
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.offerSnapshot = null;

            /**
             * Response loadSnapshotChunk.
             * @member {tendermint.abci.IResponseLoadSnapshotChunk|null|undefined} loadSnapshotChunk
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.loadSnapshotChunk = null;

            /**
             * Response applySnapshotChunk.
             * @member {tendermint.abci.IResponseApplySnapshotChunk|null|undefined} applySnapshotChunk
             * @memberof tendermint.abci.Response
             * @instance
             */
            Response.prototype.applySnapshotChunk = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Response value.
             * @member {"exception"|"echo"|"flush"|"info"|"setOption"|"initChain"|"query"|"beginBlock"|"checkTx"|"deliverTx"|"endBlock"|"commit"|"listSnapshots"|"offerSnapshot"|"loadSnapshotChunk"|"applySnapshotChunk"|undefined} value
             * @memberof tendermint.abci.Response
             * @instance
             */
            Object.defineProperty(Response.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["exception", "echo", "flush", "info", "setOption", "initChain", "query", "beginBlock", "checkTx", "deliverTx", "endBlock", "commit", "listSnapshots", "offerSnapshot", "loadSnapshotChunk", "applySnapshotChunk"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Response instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.Response
             * @static
             * @param {tendermint.abci.IResponse=} [properties] Properties to set
             * @returns {tendermint.abci.Response} Response instance
             */
            Response.create = function create(properties) {
                return new Response(properties);
            };

            /**
             * Encodes the specified Response message. Does not implicitly {@link tendermint.abci.Response.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.Response
             * @static
             * @param {tendermint.abci.IResponse} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.exception != null && message.hasOwnProperty("exception"))
                    $root.tendermint.abci.ResponseException.encode(message.exception, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.echo != null && message.hasOwnProperty("echo"))
                    $root.tendermint.abci.ResponseEcho.encode(message.echo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.flush != null && message.hasOwnProperty("flush"))
                    $root.tendermint.abci.ResponseFlush.encode(message.flush, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.info != null && message.hasOwnProperty("info"))
                    $root.tendermint.abci.ResponseInfo.encode(message.info, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.setOption != null && message.hasOwnProperty("setOption"))
                    $root.tendermint.abci.ResponseSetOption.encode(message.setOption, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.initChain != null && message.hasOwnProperty("initChain"))
                    $root.tendermint.abci.ResponseInitChain.encode(message.initChain, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.query != null && message.hasOwnProperty("query"))
                    $root.tendermint.abci.ResponseQuery.encode(message.query, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.beginBlock != null && message.hasOwnProperty("beginBlock"))
                    $root.tendermint.abci.ResponseBeginBlock.encode(message.beginBlock, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.checkTx != null && message.hasOwnProperty("checkTx"))
                    $root.tendermint.abci.ResponseCheckTx.encode(message.checkTx, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.deliverTx != null && message.hasOwnProperty("deliverTx"))
                    $root.tendermint.abci.ResponseDeliverTx.encode(message.deliverTx, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.endBlock != null && message.hasOwnProperty("endBlock"))
                    $root.tendermint.abci.ResponseEndBlock.encode(message.endBlock, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.commit != null && message.hasOwnProperty("commit"))
                    $root.tendermint.abci.ResponseCommit.encode(message.commit, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.listSnapshots != null && message.hasOwnProperty("listSnapshots"))
                    $root.tendermint.abci.ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.offerSnapshot != null && message.hasOwnProperty("offerSnapshot"))
                    $root.tendermint.abci.ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.loadSnapshotChunk != null && message.hasOwnProperty("loadSnapshotChunk"))
                    $root.tendermint.abci.ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                if (message.applySnapshotChunk != null && message.hasOwnProperty("applySnapshotChunk"))
                    $root.tendermint.abci.ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link tendermint.abci.Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.Response
             * @static
             * @param {tendermint.abci.IResponse} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.Response} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.Response();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.exception = $root.tendermint.abci.ResponseException.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.echo = $root.tendermint.abci.ResponseEcho.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.flush = $root.tendermint.abci.ResponseFlush.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.info = $root.tendermint.abci.ResponseInfo.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.setOption = $root.tendermint.abci.ResponseSetOption.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.initChain = $root.tendermint.abci.ResponseInitChain.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.query = $root.tendermint.abci.ResponseQuery.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.beginBlock = $root.tendermint.abci.ResponseBeginBlock.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.checkTx = $root.tendermint.abci.ResponseCheckTx.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.deliverTx = $root.tendermint.abci.ResponseDeliverTx.decode(reader, reader.uint32());
                        break;
                    case 11:
                        message.endBlock = $root.tendermint.abci.ResponseEndBlock.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.commit = $root.tendermint.abci.ResponseCommit.decode(reader, reader.uint32());
                        break;
                    case 13:
                        message.listSnapshots = $root.tendermint.abci.ResponseListSnapshots.decode(reader, reader.uint32());
                        break;
                    case 14:
                        message.offerSnapshot = $root.tendermint.abci.ResponseOfferSnapshot.decode(reader, reader.uint32());
                        break;
                    case 15:
                        message.loadSnapshotChunk = $root.tendermint.abci.ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                        break;
                    case 16:
                        message.applySnapshotChunk = $root.tendermint.abci.ResponseApplySnapshotChunk.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.Response} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Response message.
             * @function verify
             * @memberof tendermint.abci.Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Response.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.exception != null && message.hasOwnProperty("exception")) {
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseException.verify(message.exception);
                        if (error)
                            return "exception." + error;
                    }
                }
                if (message.echo != null && message.hasOwnProperty("echo")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseEcho.verify(message.echo);
                        if (error)
                            return "echo." + error;
                    }
                }
                if (message.flush != null && message.hasOwnProperty("flush")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseFlush.verify(message.flush);
                        if (error)
                            return "flush." + error;
                    }
                }
                if (message.info != null && message.hasOwnProperty("info")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                }
                if (message.setOption != null && message.hasOwnProperty("setOption")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseSetOption.verify(message.setOption);
                        if (error)
                            return "setOption." + error;
                    }
                }
                if (message.initChain != null && message.hasOwnProperty("initChain")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseInitChain.verify(message.initChain);
                        if (error)
                            return "initChain." + error;
                    }
                }
                if (message.query != null && message.hasOwnProperty("query")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseQuery.verify(message.query);
                        if (error)
                            return "query." + error;
                    }
                }
                if (message.beginBlock != null && message.hasOwnProperty("beginBlock")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseBeginBlock.verify(message.beginBlock);
                        if (error)
                            return "beginBlock." + error;
                    }
                }
                if (message.checkTx != null && message.hasOwnProperty("checkTx")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseCheckTx.verify(message.checkTx);
                        if (error)
                            return "checkTx." + error;
                    }
                }
                if (message.deliverTx != null && message.hasOwnProperty("deliverTx")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseDeliverTx.verify(message.deliverTx);
                        if (error)
                            return "deliverTx." + error;
                    }
                }
                if (message.endBlock != null && message.hasOwnProperty("endBlock")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseEndBlock.verify(message.endBlock);
                        if (error)
                            return "endBlock." + error;
                    }
                }
                if (message.commit != null && message.hasOwnProperty("commit")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseCommit.verify(message.commit);
                        if (error)
                            return "commit." + error;
                    }
                }
                if (message.listSnapshots != null && message.hasOwnProperty("listSnapshots")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseListSnapshots.verify(message.listSnapshots);
                        if (error)
                            return "listSnapshots." + error;
                    }
                }
                if (message.offerSnapshot != null && message.hasOwnProperty("offerSnapshot")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseOfferSnapshot.verify(message.offerSnapshot);
                        if (error)
                            return "offerSnapshot." + error;
                    }
                }
                if (message.loadSnapshotChunk != null && message.hasOwnProperty("loadSnapshotChunk")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseLoadSnapshotChunk.verify(message.loadSnapshotChunk);
                        if (error)
                            return "loadSnapshotChunk." + error;
                    }
                }
                if (message.applySnapshotChunk != null && message.hasOwnProperty("applySnapshotChunk")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.tendermint.abci.ResponseApplySnapshotChunk.verify(message.applySnapshotChunk);
                        if (error)
                            return "applySnapshotChunk." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.Response} Response
             */
            Response.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.Response)
                    return object;
                var message = new $root.tendermint.abci.Response();
                if (object.exception != null) {
                    if (typeof object.exception !== "object")
                        throw TypeError(".tendermint.abci.Response.exception: object expected");
                    message.exception = $root.tendermint.abci.ResponseException.fromObject(object.exception);
                }
                if (object.echo != null) {
                    if (typeof object.echo !== "object")
                        throw TypeError(".tendermint.abci.Response.echo: object expected");
                    message.echo = $root.tendermint.abci.ResponseEcho.fromObject(object.echo);
                }
                if (object.flush != null) {
                    if (typeof object.flush !== "object")
                        throw TypeError(".tendermint.abci.Response.flush: object expected");
                    message.flush = $root.tendermint.abci.ResponseFlush.fromObject(object.flush);
                }
                if (object.info != null) {
                    if (typeof object.info !== "object")
                        throw TypeError(".tendermint.abci.Response.info: object expected");
                    message.info = $root.tendermint.abci.ResponseInfo.fromObject(object.info);
                }
                if (object.setOption != null) {
                    if (typeof object.setOption !== "object")
                        throw TypeError(".tendermint.abci.Response.setOption: object expected");
                    message.setOption = $root.tendermint.abci.ResponseSetOption.fromObject(object.setOption);
                }
                if (object.initChain != null) {
                    if (typeof object.initChain !== "object")
                        throw TypeError(".tendermint.abci.Response.initChain: object expected");
                    message.initChain = $root.tendermint.abci.ResponseInitChain.fromObject(object.initChain);
                }
                if (object.query != null) {
                    if (typeof object.query !== "object")
                        throw TypeError(".tendermint.abci.Response.query: object expected");
                    message.query = $root.tendermint.abci.ResponseQuery.fromObject(object.query);
                }
                if (object.beginBlock != null) {
                    if (typeof object.beginBlock !== "object")
                        throw TypeError(".tendermint.abci.Response.beginBlock: object expected");
                    message.beginBlock = $root.tendermint.abci.ResponseBeginBlock.fromObject(object.beginBlock);
                }
                if (object.checkTx != null) {
                    if (typeof object.checkTx !== "object")
                        throw TypeError(".tendermint.abci.Response.checkTx: object expected");
                    message.checkTx = $root.tendermint.abci.ResponseCheckTx.fromObject(object.checkTx);
                }
                if (object.deliverTx != null) {
                    if (typeof object.deliverTx !== "object")
                        throw TypeError(".tendermint.abci.Response.deliverTx: object expected");
                    message.deliverTx = $root.tendermint.abci.ResponseDeliverTx.fromObject(object.deliverTx);
                }
                if (object.endBlock != null) {
                    if (typeof object.endBlock !== "object")
                        throw TypeError(".tendermint.abci.Response.endBlock: object expected");
                    message.endBlock = $root.tendermint.abci.ResponseEndBlock.fromObject(object.endBlock);
                }
                if (object.commit != null) {
                    if (typeof object.commit !== "object")
                        throw TypeError(".tendermint.abci.Response.commit: object expected");
                    message.commit = $root.tendermint.abci.ResponseCommit.fromObject(object.commit);
                }
                if (object.listSnapshots != null) {
                    if (typeof object.listSnapshots !== "object")
                        throw TypeError(".tendermint.abci.Response.listSnapshots: object expected");
                    message.listSnapshots = $root.tendermint.abci.ResponseListSnapshots.fromObject(object.listSnapshots);
                }
                if (object.offerSnapshot != null) {
                    if (typeof object.offerSnapshot !== "object")
                        throw TypeError(".tendermint.abci.Response.offerSnapshot: object expected");
                    message.offerSnapshot = $root.tendermint.abci.ResponseOfferSnapshot.fromObject(object.offerSnapshot);
                }
                if (object.loadSnapshotChunk != null) {
                    if (typeof object.loadSnapshotChunk !== "object")
                        throw TypeError(".tendermint.abci.Response.loadSnapshotChunk: object expected");
                    message.loadSnapshotChunk = $root.tendermint.abci.ResponseLoadSnapshotChunk.fromObject(object.loadSnapshotChunk);
                }
                if (object.applySnapshotChunk != null) {
                    if (typeof object.applySnapshotChunk !== "object")
                        throw TypeError(".tendermint.abci.Response.applySnapshotChunk: object expected");
                    message.applySnapshotChunk = $root.tendermint.abci.ResponseApplySnapshotChunk.fromObject(object.applySnapshotChunk);
                }
                return message;
            };

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.Response
             * @static
             * @param {tendermint.abci.Response} message Response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Response.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.exception != null && message.hasOwnProperty("exception")) {
                    object.exception = $root.tendermint.abci.ResponseException.toObject(message.exception, options);
                    if (options.oneofs)
                        object.value = "exception";
                }
                if (message.echo != null && message.hasOwnProperty("echo")) {
                    object.echo = $root.tendermint.abci.ResponseEcho.toObject(message.echo, options);
                    if (options.oneofs)
                        object.value = "echo";
                }
                if (message.flush != null && message.hasOwnProperty("flush")) {
                    object.flush = $root.tendermint.abci.ResponseFlush.toObject(message.flush, options);
                    if (options.oneofs)
                        object.value = "flush";
                }
                if (message.info != null && message.hasOwnProperty("info")) {
                    object.info = $root.tendermint.abci.ResponseInfo.toObject(message.info, options);
                    if (options.oneofs)
                        object.value = "info";
                }
                if (message.setOption != null && message.hasOwnProperty("setOption")) {
                    object.setOption = $root.tendermint.abci.ResponseSetOption.toObject(message.setOption, options);
                    if (options.oneofs)
                        object.value = "setOption";
                }
                if (message.initChain != null && message.hasOwnProperty("initChain")) {
                    object.initChain = $root.tendermint.abci.ResponseInitChain.toObject(message.initChain, options);
                    if (options.oneofs)
                        object.value = "initChain";
                }
                if (message.query != null && message.hasOwnProperty("query")) {
                    object.query = $root.tendermint.abci.ResponseQuery.toObject(message.query, options);
                    if (options.oneofs)
                        object.value = "query";
                }
                if (message.beginBlock != null && message.hasOwnProperty("beginBlock")) {
                    object.beginBlock = $root.tendermint.abci.ResponseBeginBlock.toObject(message.beginBlock, options);
                    if (options.oneofs)
                        object.value = "beginBlock";
                }
                if (message.checkTx != null && message.hasOwnProperty("checkTx")) {
                    object.checkTx = $root.tendermint.abci.ResponseCheckTx.toObject(message.checkTx, options);
                    if (options.oneofs)
                        object.value = "checkTx";
                }
                if (message.deliverTx != null && message.hasOwnProperty("deliverTx")) {
                    object.deliverTx = $root.tendermint.abci.ResponseDeliverTx.toObject(message.deliverTx, options);
                    if (options.oneofs)
                        object.value = "deliverTx";
                }
                if (message.endBlock != null && message.hasOwnProperty("endBlock")) {
                    object.endBlock = $root.tendermint.abci.ResponseEndBlock.toObject(message.endBlock, options);
                    if (options.oneofs)
                        object.value = "endBlock";
                }
                if (message.commit != null && message.hasOwnProperty("commit")) {
                    object.commit = $root.tendermint.abci.ResponseCommit.toObject(message.commit, options);
                    if (options.oneofs)
                        object.value = "commit";
                }
                if (message.listSnapshots != null && message.hasOwnProperty("listSnapshots")) {
                    object.listSnapshots = $root.tendermint.abci.ResponseListSnapshots.toObject(message.listSnapshots, options);
                    if (options.oneofs)
                        object.value = "listSnapshots";
                }
                if (message.offerSnapshot != null && message.hasOwnProperty("offerSnapshot")) {
                    object.offerSnapshot = $root.tendermint.abci.ResponseOfferSnapshot.toObject(message.offerSnapshot, options);
                    if (options.oneofs)
                        object.value = "offerSnapshot";
                }
                if (message.loadSnapshotChunk != null && message.hasOwnProperty("loadSnapshotChunk")) {
                    object.loadSnapshotChunk = $root.tendermint.abci.ResponseLoadSnapshotChunk.toObject(message.loadSnapshotChunk, options);
                    if (options.oneofs)
                        object.value = "loadSnapshotChunk";
                }
                if (message.applySnapshotChunk != null && message.hasOwnProperty("applySnapshotChunk")) {
                    object.applySnapshotChunk = $root.tendermint.abci.ResponseApplySnapshotChunk.toObject(message.applySnapshotChunk, options);
                    if (options.oneofs)
                        object.value = "applySnapshotChunk";
                }
                return object;
            };

            /**
             * Converts this Response to JSON.
             * @function toJSON
             * @memberof tendermint.abci.Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Response;
        })();

        abci.ResponseException = (function() {

            /**
             * Properties of a ResponseException.
             * @memberof tendermint.abci
             * @interface IResponseException
             * @property {string|null} [error] ResponseException error
             */

            /**
             * Constructs a new ResponseException.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseException.
             * @implements IResponseException
             * @constructor
             * @param {tendermint.abci.IResponseException=} [properties] Properties to set
             */
            function ResponseException(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseException error.
             * @member {string} error
             * @memberof tendermint.abci.ResponseException
             * @instance
             */
            ResponseException.prototype.error = "";

            /**
             * Creates a new ResponseException instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseException
             * @static
             * @param {tendermint.abci.IResponseException=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseException} ResponseException instance
             */
            ResponseException.create = function create(properties) {
                return new ResponseException(properties);
            };

            /**
             * Encodes the specified ResponseException message. Does not implicitly {@link tendermint.abci.ResponseException.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseException
             * @static
             * @param {tendermint.abci.IResponseException} message ResponseException message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseException.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.error);
                return writer;
            };

            /**
             * Encodes the specified ResponseException message, length delimited. Does not implicitly {@link tendermint.abci.ResponseException.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseException
             * @static
             * @param {tendermint.abci.IResponseException} message ResponseException message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseException.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseException message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseException
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseException} ResponseException
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseException.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseException();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseException message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseException
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseException} ResponseException
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseException.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseException message.
             * @function verify
             * @memberof tendermint.abci.ResponseException
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseException.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };

            /**
             * Creates a ResponseException message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseException
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseException} ResponseException
             */
            ResponseException.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseException)
                    return object;
                var message = new $root.tendermint.abci.ResponseException();
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };

            /**
             * Creates a plain object from a ResponseException message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseException
             * @static
             * @param {tendermint.abci.ResponseException} message ResponseException
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseException.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.error = "";
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Converts this ResponseException to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseException
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseException.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseException;
        })();

        abci.ResponseEcho = (function() {

            /**
             * Properties of a ResponseEcho.
             * @memberof tendermint.abci
             * @interface IResponseEcho
             * @property {string|null} [message] ResponseEcho message
             */

            /**
             * Constructs a new ResponseEcho.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseEcho.
             * @implements IResponseEcho
             * @constructor
             * @param {tendermint.abci.IResponseEcho=} [properties] Properties to set
             */
            function ResponseEcho(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseEcho message.
             * @member {string} message
             * @memberof tendermint.abci.ResponseEcho
             * @instance
             */
            ResponseEcho.prototype.message = "";

            /**
             * Creates a new ResponseEcho instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseEcho
             * @static
             * @param {tendermint.abci.IResponseEcho=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseEcho} ResponseEcho instance
             */
            ResponseEcho.create = function create(properties) {
                return new ResponseEcho(properties);
            };

            /**
             * Encodes the specified ResponseEcho message. Does not implicitly {@link tendermint.abci.ResponseEcho.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseEcho
             * @static
             * @param {tendermint.abci.IResponseEcho} message ResponseEcho message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseEcho.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified ResponseEcho message, length delimited. Does not implicitly {@link tendermint.abci.ResponseEcho.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseEcho
             * @static
             * @param {tendermint.abci.IResponseEcho} message ResponseEcho message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseEcho.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseEcho message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseEcho
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseEcho} ResponseEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseEcho.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseEcho();
                while (reader.pos < end) {
                    var tag = reader.uint32();
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
            };

            /**
             * Decodes a ResponseEcho message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseEcho
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseEcho} ResponseEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseEcho.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseEcho message.
             * @function verify
             * @memberof tendermint.abci.ResponseEcho
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseEcho.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a ResponseEcho message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseEcho
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseEcho} ResponseEcho
             */
            ResponseEcho.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseEcho)
                    return object;
                var message = new $root.tendermint.abci.ResponseEcho();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a ResponseEcho message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseEcho
             * @static
             * @param {tendermint.abci.ResponseEcho} message ResponseEcho
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseEcho.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this ResponseEcho to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseEcho
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseEcho.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseEcho;
        })();

        abci.ResponseFlush = (function() {

            /**
             * Properties of a ResponseFlush.
             * @memberof tendermint.abci
             * @interface IResponseFlush
             */

            /**
             * Constructs a new ResponseFlush.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseFlush.
             * @implements IResponseFlush
             * @constructor
             * @param {tendermint.abci.IResponseFlush=} [properties] Properties to set
             */
            function ResponseFlush(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ResponseFlush instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseFlush
             * @static
             * @param {tendermint.abci.IResponseFlush=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseFlush} ResponseFlush instance
             */
            ResponseFlush.create = function create(properties) {
                return new ResponseFlush(properties);
            };

            /**
             * Encodes the specified ResponseFlush message. Does not implicitly {@link tendermint.abci.ResponseFlush.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseFlush
             * @static
             * @param {tendermint.abci.IResponseFlush} message ResponseFlush message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseFlush.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ResponseFlush message, length delimited. Does not implicitly {@link tendermint.abci.ResponseFlush.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseFlush
             * @static
             * @param {tendermint.abci.IResponseFlush} message ResponseFlush message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseFlush.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseFlush message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseFlush
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseFlush} ResponseFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseFlush.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseFlush();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseFlush message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseFlush
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseFlush} ResponseFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseFlush.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseFlush message.
             * @function verify
             * @memberof tendermint.abci.ResponseFlush
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseFlush.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ResponseFlush message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseFlush
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseFlush} ResponseFlush
             */
            ResponseFlush.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseFlush)
                    return object;
                return new $root.tendermint.abci.ResponseFlush();
            };

            /**
             * Creates a plain object from a ResponseFlush message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseFlush
             * @static
             * @param {tendermint.abci.ResponseFlush} message ResponseFlush
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseFlush.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ResponseFlush to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseFlush
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseFlush.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseFlush;
        })();

        abci.ResponseInfo = (function() {

            /**
             * Properties of a ResponseInfo.
             * @memberof tendermint.abci
             * @interface IResponseInfo
             * @property {string|null} [data] ResponseInfo data
             * @property {string|null} [version] ResponseInfo version
             * @property {number|Long|null} [appVersion] ResponseInfo appVersion
             * @property {number|Long|null} [lastBlockHeight] ResponseInfo lastBlockHeight
             * @property {Uint8Array|null} [lastBlockAppHash] ResponseInfo lastBlockAppHash
             */

            /**
             * Constructs a new ResponseInfo.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseInfo.
             * @implements IResponseInfo
             * @constructor
             * @param {tendermint.abci.IResponseInfo=} [properties] Properties to set
             */
            function ResponseInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseInfo data.
             * @member {string} data
             * @memberof tendermint.abci.ResponseInfo
             * @instance
             */
            ResponseInfo.prototype.data = "";

            /**
             * ResponseInfo version.
             * @member {string} version
             * @memberof tendermint.abci.ResponseInfo
             * @instance
             */
            ResponseInfo.prototype.version = "";

            /**
             * ResponseInfo appVersion.
             * @member {number|Long} appVersion
             * @memberof tendermint.abci.ResponseInfo
             * @instance
             */
            ResponseInfo.prototype.appVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * ResponseInfo lastBlockHeight.
             * @member {number|Long} lastBlockHeight
             * @memberof tendermint.abci.ResponseInfo
             * @instance
             */
            ResponseInfo.prototype.lastBlockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ResponseInfo lastBlockAppHash.
             * @member {Uint8Array} lastBlockAppHash
             * @memberof tendermint.abci.ResponseInfo
             * @instance
             */
            ResponseInfo.prototype.lastBlockAppHash = $util.newBuffer([]);

            /**
             * Creates a new ResponseInfo instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseInfo
             * @static
             * @param {tendermint.abci.IResponseInfo=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseInfo} ResponseInfo instance
             */
            ResponseInfo.create = function create(properties) {
                return new ResponseInfo(properties);
            };

            /**
             * Encodes the specified ResponseInfo message. Does not implicitly {@link tendermint.abci.ResponseInfo.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseInfo
             * @static
             * @param {tendermint.abci.IResponseInfo} message ResponseInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.data);
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.appVersion);
                if (message.lastBlockHeight != null && message.hasOwnProperty("lastBlockHeight"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.lastBlockHeight);
                if (message.lastBlockAppHash != null && message.hasOwnProperty("lastBlockAppHash"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.lastBlockAppHash);
                return writer;
            };

            /**
             * Encodes the specified ResponseInfo message, length delimited. Does not implicitly {@link tendermint.abci.ResponseInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseInfo
             * @static
             * @param {tendermint.abci.IResponseInfo} message ResponseInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseInfo message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseInfo} ResponseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.data = reader.string();
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.appVersion = reader.uint64();
                        break;
                    case 4:
                        message.lastBlockHeight = reader.int64();
                        break;
                    case 5:
                        message.lastBlockAppHash = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseInfo} ResponseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseInfo message.
             * @function verify
             * @memberof tendermint.abci.ResponseInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!$util.isString(message.data))
                        return "data: string expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                    if (!$util.isInteger(message.appVersion) && !(message.appVersion && $util.isInteger(message.appVersion.low) && $util.isInteger(message.appVersion.high)))
                        return "appVersion: integer|Long expected";
                if (message.lastBlockHeight != null && message.hasOwnProperty("lastBlockHeight"))
                    if (!$util.isInteger(message.lastBlockHeight) && !(message.lastBlockHeight && $util.isInteger(message.lastBlockHeight.low) && $util.isInteger(message.lastBlockHeight.high)))
                        return "lastBlockHeight: integer|Long expected";
                if (message.lastBlockAppHash != null && message.hasOwnProperty("lastBlockAppHash"))
                    if (!(message.lastBlockAppHash && typeof message.lastBlockAppHash.length === "number" || $util.isString(message.lastBlockAppHash)))
                        return "lastBlockAppHash: buffer expected";
                return null;
            };

            /**
             * Creates a ResponseInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseInfo} ResponseInfo
             */
            ResponseInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseInfo)
                    return object;
                var message = new $root.tendermint.abci.ResponseInfo();
                if (object.data != null)
                    message.data = String(object.data);
                if (object.version != null)
                    message.version = String(object.version);
                if (object.appVersion != null)
                    if ($util.Long)
                        (message.appVersion = $util.Long.fromValue(object.appVersion)).unsigned = true;
                    else if (typeof object.appVersion === "string")
                        message.appVersion = parseInt(object.appVersion, 10);
                    else if (typeof object.appVersion === "number")
                        message.appVersion = object.appVersion;
                    else if (typeof object.appVersion === "object")
                        message.appVersion = new $util.LongBits(object.appVersion.low >>> 0, object.appVersion.high >>> 0).toNumber(true);
                if (object.lastBlockHeight != null)
                    if ($util.Long)
                        (message.lastBlockHeight = $util.Long.fromValue(object.lastBlockHeight)).unsigned = false;
                    else if (typeof object.lastBlockHeight === "string")
                        message.lastBlockHeight = parseInt(object.lastBlockHeight, 10);
                    else if (typeof object.lastBlockHeight === "number")
                        message.lastBlockHeight = object.lastBlockHeight;
                    else if (typeof object.lastBlockHeight === "object")
                        message.lastBlockHeight = new $util.LongBits(object.lastBlockHeight.low >>> 0, object.lastBlockHeight.high >>> 0).toNumber();
                if (object.lastBlockAppHash != null)
                    if (typeof object.lastBlockAppHash === "string")
                        $util.base64.decode(object.lastBlockAppHash, message.lastBlockAppHash = $util.newBuffer($util.base64.length(object.lastBlockAppHash)), 0);
                    else if (object.lastBlockAppHash.length)
                        message.lastBlockAppHash = object.lastBlockAppHash;
                return message;
            };

            /**
             * Creates a plain object from a ResponseInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseInfo
             * @static
             * @param {tendermint.abci.ResponseInfo} message ResponseInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.data = "";
                    object.version = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.appVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.appVersion = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.lastBlockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.lastBlockHeight = options.longs === String ? "0" : 0;
                    if (options.bytes === String)
                        object.lastBlockAppHash = "";
                    else {
                        object.lastBlockAppHash = [];
                        if (options.bytes !== Array)
                            object.lastBlockAppHash = $util.newBuffer(object.lastBlockAppHash);
                    }
                }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = message.data;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                    if (typeof message.appVersion === "number")
                        object.appVersion = options.longs === String ? String(message.appVersion) : message.appVersion;
                    else
                        object.appVersion = options.longs === String ? $util.Long.prototype.toString.call(message.appVersion) : options.longs === Number ? new $util.LongBits(message.appVersion.low >>> 0, message.appVersion.high >>> 0).toNumber(true) : message.appVersion;
                if (message.lastBlockHeight != null && message.hasOwnProperty("lastBlockHeight"))
                    if (typeof message.lastBlockHeight === "number")
                        object.lastBlockHeight = options.longs === String ? String(message.lastBlockHeight) : message.lastBlockHeight;
                    else
                        object.lastBlockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.lastBlockHeight) : options.longs === Number ? new $util.LongBits(message.lastBlockHeight.low >>> 0, message.lastBlockHeight.high >>> 0).toNumber() : message.lastBlockHeight;
                if (message.lastBlockAppHash != null && message.hasOwnProperty("lastBlockAppHash"))
                    object.lastBlockAppHash = options.bytes === String ? $util.base64.encode(message.lastBlockAppHash, 0, message.lastBlockAppHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.lastBlockAppHash) : message.lastBlockAppHash;
                return object;
            };

            /**
             * Converts this ResponseInfo to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseInfo;
        })();

        abci.ResponseSetOption = (function() {

            /**
             * Properties of a ResponseSetOption.
             * @memberof tendermint.abci
             * @interface IResponseSetOption
             * @property {number|null} [code] ResponseSetOption code
             * @property {string|null} [log] ResponseSetOption log
             * @property {string|null} [info] ResponseSetOption info
             */

            /**
             * Constructs a new ResponseSetOption.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseSetOption.
             * @implements IResponseSetOption
             * @constructor
             * @param {tendermint.abci.IResponseSetOption=} [properties] Properties to set
             */
            function ResponseSetOption(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseSetOption code.
             * @member {number} code
             * @memberof tendermint.abci.ResponseSetOption
             * @instance
             */
            ResponseSetOption.prototype.code = 0;

            /**
             * ResponseSetOption log.
             * @member {string} log
             * @memberof tendermint.abci.ResponseSetOption
             * @instance
             */
            ResponseSetOption.prototype.log = "";

            /**
             * ResponseSetOption info.
             * @member {string} info
             * @memberof tendermint.abci.ResponseSetOption
             * @instance
             */
            ResponseSetOption.prototype.info = "";

            /**
             * Creates a new ResponseSetOption instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseSetOption
             * @static
             * @param {tendermint.abci.IResponseSetOption=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseSetOption} ResponseSetOption instance
             */
            ResponseSetOption.create = function create(properties) {
                return new ResponseSetOption(properties);
            };

            /**
             * Encodes the specified ResponseSetOption message. Does not implicitly {@link tendermint.abci.ResponseSetOption.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseSetOption
             * @static
             * @param {tendermint.abci.IResponseSetOption} message ResponseSetOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseSetOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
                if (message.log != null && message.hasOwnProperty("log"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.log);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.info);
                return writer;
            };

            /**
             * Encodes the specified ResponseSetOption message, length delimited. Does not implicitly {@link tendermint.abci.ResponseSetOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseSetOption
             * @static
             * @param {tendermint.abci.IResponseSetOption} message ResponseSetOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseSetOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseSetOption message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseSetOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseSetOption} ResponseSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseSetOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseSetOption();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.uint32();
                        break;
                    case 3:
                        message.log = reader.string();
                        break;
                    case 4:
                        message.info = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseSetOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseSetOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseSetOption} ResponseSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseSetOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseSetOption message.
             * @function verify
             * @memberof tendermint.abci.ResponseSetOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseSetOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.log != null && message.hasOwnProperty("log"))
                    if (!$util.isString(message.log))
                        return "log: string expected";
                if (message.info != null && message.hasOwnProperty("info"))
                    if (!$util.isString(message.info))
                        return "info: string expected";
                return null;
            };

            /**
             * Creates a ResponseSetOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseSetOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseSetOption} ResponseSetOption
             */
            ResponseSetOption.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseSetOption)
                    return object;
                var message = new $root.tendermint.abci.ResponseSetOption();
                if (object.code != null)
                    message.code = object.code >>> 0;
                if (object.log != null)
                    message.log = String(object.log);
                if (object.info != null)
                    message.info = String(object.info);
                return message;
            };

            /**
             * Creates a plain object from a ResponseSetOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseSetOption
             * @static
             * @param {tendermint.abci.ResponseSetOption} message ResponseSetOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseSetOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = 0;
                    object.log = "";
                    object.info = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.log != null && message.hasOwnProperty("log"))
                    object.log = message.log;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = message.info;
                return object;
            };

            /**
             * Converts this ResponseSetOption to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseSetOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseSetOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseSetOption;
        })();

        abci.ResponseInitChain = (function() {

            /**
             * Properties of a ResponseInitChain.
             * @memberof tendermint.abci
             * @interface IResponseInitChain
             * @property {tendermint.abci.IConsensusParams|null} [consensusParams] ResponseInitChain consensusParams
             * @property {Array.<tendermint.abci.IValidatorUpdate>|null} [validators] ResponseInitChain validators
             * @property {Uint8Array|null} [appHash] ResponseInitChain appHash
             */

            /**
             * Constructs a new ResponseInitChain.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseInitChain.
             * @implements IResponseInitChain
             * @constructor
             * @param {tendermint.abci.IResponseInitChain=} [properties] Properties to set
             */
            function ResponseInitChain(properties) {
                this.validators = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseInitChain consensusParams.
             * @member {tendermint.abci.IConsensusParams|null|undefined} consensusParams
             * @memberof tendermint.abci.ResponseInitChain
             * @instance
             */
            ResponseInitChain.prototype.consensusParams = null;

            /**
             * ResponseInitChain validators.
             * @member {Array.<tendermint.abci.IValidatorUpdate>} validators
             * @memberof tendermint.abci.ResponseInitChain
             * @instance
             */
            ResponseInitChain.prototype.validators = $util.emptyArray;

            /**
             * ResponseInitChain appHash.
             * @member {Uint8Array} appHash
             * @memberof tendermint.abci.ResponseInitChain
             * @instance
             */
            ResponseInitChain.prototype.appHash = $util.newBuffer([]);

            /**
             * Creates a new ResponseInitChain instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseInitChain
             * @static
             * @param {tendermint.abci.IResponseInitChain=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseInitChain} ResponseInitChain instance
             */
            ResponseInitChain.create = function create(properties) {
                return new ResponseInitChain(properties);
            };

            /**
             * Encodes the specified ResponseInitChain message. Does not implicitly {@link tendermint.abci.ResponseInitChain.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseInitChain
             * @static
             * @param {tendermint.abci.IResponseInitChain} message ResponseInitChain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseInitChain.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.consensusParams != null && message.hasOwnProperty("consensusParams"))
                    $root.tendermint.abci.ConsensusParams.encode(message.consensusParams, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.validators != null && message.validators.length)
                    for (var i = 0; i < message.validators.length; ++i)
                        $root.tendermint.abci.ValidatorUpdate.encode(message.validators[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.appHash != null && message.hasOwnProperty("appHash"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.appHash);
                return writer;
            };

            /**
             * Encodes the specified ResponseInitChain message, length delimited. Does not implicitly {@link tendermint.abci.ResponseInitChain.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseInitChain
             * @static
             * @param {tendermint.abci.IResponseInitChain} message ResponseInitChain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseInitChain.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseInitChain message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseInitChain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseInitChain} ResponseInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseInitChain.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseInitChain();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.consensusParams = $root.tendermint.abci.ConsensusParams.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.validators && message.validators.length))
                            message.validators = [];
                        message.validators.push($root.tendermint.abci.ValidatorUpdate.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.appHash = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseInitChain message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseInitChain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseInitChain} ResponseInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseInitChain.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseInitChain message.
             * @function verify
             * @memberof tendermint.abci.ResponseInitChain
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseInitChain.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.consensusParams != null && message.hasOwnProperty("consensusParams")) {
                    var error = $root.tendermint.abci.ConsensusParams.verify(message.consensusParams);
                    if (error)
                        return "consensusParams." + error;
                }
                if (message.validators != null && message.hasOwnProperty("validators")) {
                    if (!Array.isArray(message.validators))
                        return "validators: array expected";
                    for (var i = 0; i < message.validators.length; ++i) {
                        var error = $root.tendermint.abci.ValidatorUpdate.verify(message.validators[i]);
                        if (error)
                            return "validators." + error;
                    }
                }
                if (message.appHash != null && message.hasOwnProperty("appHash"))
                    if (!(message.appHash && typeof message.appHash.length === "number" || $util.isString(message.appHash)))
                        return "appHash: buffer expected";
                return null;
            };

            /**
             * Creates a ResponseInitChain message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseInitChain
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseInitChain} ResponseInitChain
             */
            ResponseInitChain.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseInitChain)
                    return object;
                var message = new $root.tendermint.abci.ResponseInitChain();
                if (object.consensusParams != null) {
                    if (typeof object.consensusParams !== "object")
                        throw TypeError(".tendermint.abci.ResponseInitChain.consensusParams: object expected");
                    message.consensusParams = $root.tendermint.abci.ConsensusParams.fromObject(object.consensusParams);
                }
                if (object.validators) {
                    if (!Array.isArray(object.validators))
                        throw TypeError(".tendermint.abci.ResponseInitChain.validators: array expected");
                    message.validators = [];
                    for (var i = 0; i < object.validators.length; ++i) {
                        if (typeof object.validators[i] !== "object")
                            throw TypeError(".tendermint.abci.ResponseInitChain.validators: object expected");
                        message.validators[i] = $root.tendermint.abci.ValidatorUpdate.fromObject(object.validators[i]);
                    }
                }
                if (object.appHash != null)
                    if (typeof object.appHash === "string")
                        $util.base64.decode(object.appHash, message.appHash = $util.newBuffer($util.base64.length(object.appHash)), 0);
                    else if (object.appHash.length)
                        message.appHash = object.appHash;
                return message;
            };

            /**
             * Creates a plain object from a ResponseInitChain message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseInitChain
             * @static
             * @param {tendermint.abci.ResponseInitChain} message ResponseInitChain
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseInitChain.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.validators = [];
                if (options.defaults) {
                    object.consensusParams = null;
                    if (options.bytes === String)
                        object.appHash = "";
                    else {
                        object.appHash = [];
                        if (options.bytes !== Array)
                            object.appHash = $util.newBuffer(object.appHash);
                    }
                }
                if (message.consensusParams != null && message.hasOwnProperty("consensusParams"))
                    object.consensusParams = $root.tendermint.abci.ConsensusParams.toObject(message.consensusParams, options);
                if (message.validators && message.validators.length) {
                    object.validators = [];
                    for (var j = 0; j < message.validators.length; ++j)
                        object.validators[j] = $root.tendermint.abci.ValidatorUpdate.toObject(message.validators[j], options);
                }
                if (message.appHash != null && message.hasOwnProperty("appHash"))
                    object.appHash = options.bytes === String ? $util.base64.encode(message.appHash, 0, message.appHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.appHash) : message.appHash;
                return object;
            };

            /**
             * Converts this ResponseInitChain to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseInitChain
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseInitChain.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseInitChain;
        })();

        abci.ResponseQuery = (function() {

            /**
             * Properties of a ResponseQuery.
             * @memberof tendermint.abci
             * @interface IResponseQuery
             * @property {number|null} [code] ResponseQuery code
             * @property {string|null} [log] ResponseQuery log
             * @property {string|null} [info] ResponseQuery info
             * @property {number|Long|null} [index] ResponseQuery index
             * @property {Uint8Array|null} [key] ResponseQuery key
             * @property {Uint8Array|null} [value] ResponseQuery value
             * @property {tendermint.crypto.IProofOps|null} [proofOps] ResponseQuery proofOps
             * @property {number|Long|null} [height] ResponseQuery height
             * @property {string|null} [codespace] ResponseQuery codespace
             */

            /**
             * Constructs a new ResponseQuery.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseQuery.
             * @implements IResponseQuery
             * @constructor
             * @param {tendermint.abci.IResponseQuery=} [properties] Properties to set
             */
            function ResponseQuery(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseQuery code.
             * @member {number} code
             * @memberof tendermint.abci.ResponseQuery
             * @instance
             */
            ResponseQuery.prototype.code = 0;

            /**
             * ResponseQuery log.
             * @member {string} log
             * @memberof tendermint.abci.ResponseQuery
             * @instance
             */
            ResponseQuery.prototype.log = "";

            /**
             * ResponseQuery info.
             * @member {string} info
             * @memberof tendermint.abci.ResponseQuery
             * @instance
             */
            ResponseQuery.prototype.info = "";

            /**
             * ResponseQuery index.
             * @member {number|Long} index
             * @memberof tendermint.abci.ResponseQuery
             * @instance
             */
            ResponseQuery.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ResponseQuery key.
             * @member {Uint8Array} key
             * @memberof tendermint.abci.ResponseQuery
             * @instance
             */
            ResponseQuery.prototype.key = $util.newBuffer([]);

            /**
             * ResponseQuery value.
             * @member {Uint8Array} value
             * @memberof tendermint.abci.ResponseQuery
             * @instance
             */
            ResponseQuery.prototype.value = $util.newBuffer([]);

            /**
             * ResponseQuery proofOps.
             * @member {tendermint.crypto.IProofOps|null|undefined} proofOps
             * @memberof tendermint.abci.ResponseQuery
             * @instance
             */
            ResponseQuery.prototype.proofOps = null;

            /**
             * ResponseQuery height.
             * @member {number|Long} height
             * @memberof tendermint.abci.ResponseQuery
             * @instance
             */
            ResponseQuery.prototype.height = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ResponseQuery codespace.
             * @member {string} codespace
             * @memberof tendermint.abci.ResponseQuery
             * @instance
             */
            ResponseQuery.prototype.codespace = "";

            /**
             * Creates a new ResponseQuery instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseQuery
             * @static
             * @param {tendermint.abci.IResponseQuery=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseQuery} ResponseQuery instance
             */
            ResponseQuery.create = function create(properties) {
                return new ResponseQuery(properties);
            };

            /**
             * Encodes the specified ResponseQuery message. Does not implicitly {@link tendermint.abci.ResponseQuery.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseQuery
             * @static
             * @param {tendermint.abci.IResponseQuery} message ResponseQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseQuery.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
                if (message.log != null && message.hasOwnProperty("log"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.log);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.info);
                if (message.index != null && message.hasOwnProperty("index"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.index);
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.key);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.value);
                if (message.proofOps != null && message.hasOwnProperty("proofOps"))
                    $root.tendermint.crypto.ProofOps.encode(message.proofOps, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.height != null && message.hasOwnProperty("height"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int64(message.height);
                if (message.codespace != null && message.hasOwnProperty("codespace"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.codespace);
                return writer;
            };

            /**
             * Encodes the specified ResponseQuery message, length delimited. Does not implicitly {@link tendermint.abci.ResponseQuery.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseQuery
             * @static
             * @param {tendermint.abci.IResponseQuery} message ResponseQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseQuery.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseQuery message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseQuery} ResponseQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseQuery.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseQuery();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.uint32();
                        break;
                    case 3:
                        message.log = reader.string();
                        break;
                    case 4:
                        message.info = reader.string();
                        break;
                    case 5:
                        message.index = reader.int64();
                        break;
                    case 6:
                        message.key = reader.bytes();
                        break;
                    case 7:
                        message.value = reader.bytes();
                        break;
                    case 8:
                        message.proofOps = $root.tendermint.crypto.ProofOps.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.height = reader.int64();
                        break;
                    case 10:
                        message.codespace = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseQuery message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseQuery} ResponseQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseQuery.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseQuery message.
             * @function verify
             * @memberof tendermint.abci.ResponseQuery
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseQuery.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.log != null && message.hasOwnProperty("log"))
                    if (!$util.isString(message.log))
                        return "log: string expected";
                if (message.info != null && message.hasOwnProperty("info"))
                    if (!$util.isString(message.info))
                        return "info: string expected";
                if (message.index != null && message.hasOwnProperty("index"))
                    if (!$util.isInteger(message.index) && !(message.index && $util.isInteger(message.index.low) && $util.isInteger(message.index.high)))
                        return "index: integer|Long expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                        return "key: buffer expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                if (message.proofOps != null && message.hasOwnProperty("proofOps")) {
                    var error = $root.tendermint.crypto.ProofOps.verify(message.proofOps);
                    if (error)
                        return "proofOps." + error;
                }
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                if (message.codespace != null && message.hasOwnProperty("codespace"))
                    if (!$util.isString(message.codespace))
                        return "codespace: string expected";
                return null;
            };

            /**
             * Creates a ResponseQuery message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseQuery
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseQuery} ResponseQuery
             */
            ResponseQuery.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseQuery)
                    return object;
                var message = new $root.tendermint.abci.ResponseQuery();
                if (object.code != null)
                    message.code = object.code >>> 0;
                if (object.log != null)
                    message.log = String(object.log);
                if (object.info != null)
                    message.info = String(object.info);
                if (object.index != null)
                    if ($util.Long)
                        (message.index = $util.Long.fromValue(object.index)).unsigned = false;
                    else if (typeof object.index === "string")
                        message.index = parseInt(object.index, 10);
                    else if (typeof object.index === "number")
                        message.index = object.index;
                    else if (typeof object.index === "object")
                        message.index = new $util.LongBits(object.index.low >>> 0, object.index.high >>> 0).toNumber();
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                    else if (object.key.length)
                        message.key = object.key;
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                if (object.proofOps != null) {
                    if (typeof object.proofOps !== "object")
                        throw TypeError(".tendermint.abci.ResponseQuery.proofOps: object expected");
                    message.proofOps = $root.tendermint.crypto.ProofOps.fromObject(object.proofOps);
                }
                if (object.height != null)
                    if ($util.Long)
                        (message.height = $util.Long.fromValue(object.height)).unsigned = false;
                    else if (typeof object.height === "string")
                        message.height = parseInt(object.height, 10);
                    else if (typeof object.height === "number")
                        message.height = object.height;
                    else if (typeof object.height === "object")
                        message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber();
                if (object.codespace != null)
                    message.codespace = String(object.codespace);
                return message;
            };

            /**
             * Creates a plain object from a ResponseQuery message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseQuery
             * @static
             * @param {tendermint.abci.ResponseQuery} message ResponseQuery
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseQuery.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = 0;
                    object.log = "";
                    object.info = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.index = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.index = options.longs === String ? "0" : 0;
                    if (options.bytes === String)
                        object.key = "";
                    else {
                        object.key = [];
                        if (options.bytes !== Array)
                            object.key = $util.newBuffer(object.key);
                    }
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                    object.proofOps = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.height = options.longs === String ? "0" : 0;
                    object.codespace = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.log != null && message.hasOwnProperty("log"))
                    object.log = message.log;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = message.info;
                if (message.index != null && message.hasOwnProperty("index"))
                    if (typeof message.index === "number")
                        object.index = options.longs === String ? String(message.index) : message.index;
                    else
                        object.index = options.longs === String ? $util.Long.prototype.toString.call(message.index) : options.longs === Number ? new $util.LongBits(message.index.low >>> 0, message.index.high >>> 0).toNumber() : message.index;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                if (message.proofOps != null && message.hasOwnProperty("proofOps"))
                    object.proofOps = $root.tendermint.crypto.ProofOps.toObject(message.proofOps, options);
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber() : message.height;
                if (message.codespace != null && message.hasOwnProperty("codespace"))
                    object.codespace = message.codespace;
                return object;
            };

            /**
             * Converts this ResponseQuery to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseQuery
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseQuery.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseQuery;
        })();

        abci.ResponseBeginBlock = (function() {

            /**
             * Properties of a ResponseBeginBlock.
             * @memberof tendermint.abci
             * @interface IResponseBeginBlock
             * @property {Array.<tendermint.abci.IEvent>|null} [events] ResponseBeginBlock events
             */

            /**
             * Constructs a new ResponseBeginBlock.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseBeginBlock.
             * @implements IResponseBeginBlock
             * @constructor
             * @param {tendermint.abci.IResponseBeginBlock=} [properties] Properties to set
             */
            function ResponseBeginBlock(properties) {
                this.events = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseBeginBlock events.
             * @member {Array.<tendermint.abci.IEvent>} events
             * @memberof tendermint.abci.ResponseBeginBlock
             * @instance
             */
            ResponseBeginBlock.prototype.events = $util.emptyArray;

            /**
             * Creates a new ResponseBeginBlock instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseBeginBlock
             * @static
             * @param {tendermint.abci.IResponseBeginBlock=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseBeginBlock} ResponseBeginBlock instance
             */
            ResponseBeginBlock.create = function create(properties) {
                return new ResponseBeginBlock(properties);
            };

            /**
             * Encodes the specified ResponseBeginBlock message. Does not implicitly {@link tendermint.abci.ResponseBeginBlock.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseBeginBlock
             * @static
             * @param {tendermint.abci.IResponseBeginBlock} message ResponseBeginBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseBeginBlock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.events != null && message.events.length)
                    for (var i = 0; i < message.events.length; ++i)
                        $root.tendermint.abci.Event.encode(message.events[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ResponseBeginBlock message, length delimited. Does not implicitly {@link tendermint.abci.ResponseBeginBlock.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseBeginBlock
             * @static
             * @param {tendermint.abci.IResponseBeginBlock} message ResponseBeginBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseBeginBlock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseBeginBlock message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseBeginBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseBeginBlock} ResponseBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseBeginBlock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseBeginBlock();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.events && message.events.length))
                            message.events = [];
                        message.events.push($root.tendermint.abci.Event.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseBeginBlock message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseBeginBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseBeginBlock} ResponseBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseBeginBlock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseBeginBlock message.
             * @function verify
             * @memberof tendermint.abci.ResponseBeginBlock
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseBeginBlock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events))
                        return "events: array expected";
                    for (var i = 0; i < message.events.length; ++i) {
                        var error = $root.tendermint.abci.Event.verify(message.events[i]);
                        if (error)
                            return "events." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ResponseBeginBlock message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseBeginBlock
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseBeginBlock} ResponseBeginBlock
             */
            ResponseBeginBlock.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseBeginBlock)
                    return object;
                var message = new $root.tendermint.abci.ResponseBeginBlock();
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(".tendermint.abci.ResponseBeginBlock.events: array expected");
                    message.events = [];
                    for (var i = 0; i < object.events.length; ++i) {
                        if (typeof object.events[i] !== "object")
                            throw TypeError(".tendermint.abci.ResponseBeginBlock.events: object expected");
                        message.events[i] = $root.tendermint.abci.Event.fromObject(object.events[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ResponseBeginBlock message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseBeginBlock
             * @static
             * @param {tendermint.abci.ResponseBeginBlock} message ResponseBeginBlock
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseBeginBlock.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.events = [];
                if (message.events && message.events.length) {
                    object.events = [];
                    for (var j = 0; j < message.events.length; ++j)
                        object.events[j] = $root.tendermint.abci.Event.toObject(message.events[j], options);
                }
                return object;
            };

            /**
             * Converts this ResponseBeginBlock to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseBeginBlock
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseBeginBlock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseBeginBlock;
        })();

        abci.ResponseCheckTx = (function() {

            /**
             * Properties of a ResponseCheckTx.
             * @memberof tendermint.abci
             * @interface IResponseCheckTx
             * @property {number|null} [code] ResponseCheckTx code
             * @property {Uint8Array|null} [data] ResponseCheckTx data
             * @property {string|null} [log] ResponseCheckTx log
             * @property {string|null} [info] ResponseCheckTx info
             * @property {number|Long|null} [gasWanted] ResponseCheckTx gasWanted
             * @property {number|Long|null} [gasUsed] ResponseCheckTx gasUsed
             * @property {Array.<tendermint.abci.IEvent>|null} [events] ResponseCheckTx events
             * @property {string|null} [codespace] ResponseCheckTx codespace
             */

            /**
             * Constructs a new ResponseCheckTx.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseCheckTx.
             * @implements IResponseCheckTx
             * @constructor
             * @param {tendermint.abci.IResponseCheckTx=} [properties] Properties to set
             */
            function ResponseCheckTx(properties) {
                this.events = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseCheckTx code.
             * @member {number} code
             * @memberof tendermint.abci.ResponseCheckTx
             * @instance
             */
            ResponseCheckTx.prototype.code = 0;

            /**
             * ResponseCheckTx data.
             * @member {Uint8Array} data
             * @memberof tendermint.abci.ResponseCheckTx
             * @instance
             */
            ResponseCheckTx.prototype.data = $util.newBuffer([]);

            /**
             * ResponseCheckTx log.
             * @member {string} log
             * @memberof tendermint.abci.ResponseCheckTx
             * @instance
             */
            ResponseCheckTx.prototype.log = "";

            /**
             * ResponseCheckTx info.
             * @member {string} info
             * @memberof tendermint.abci.ResponseCheckTx
             * @instance
             */
            ResponseCheckTx.prototype.info = "";

            /**
             * ResponseCheckTx gasWanted.
             * @member {number|Long} gasWanted
             * @memberof tendermint.abci.ResponseCheckTx
             * @instance
             */
            ResponseCheckTx.prototype.gasWanted = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ResponseCheckTx gasUsed.
             * @member {number|Long} gasUsed
             * @memberof tendermint.abci.ResponseCheckTx
             * @instance
             */
            ResponseCheckTx.prototype.gasUsed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ResponseCheckTx events.
             * @member {Array.<tendermint.abci.IEvent>} events
             * @memberof tendermint.abci.ResponseCheckTx
             * @instance
             */
            ResponseCheckTx.prototype.events = $util.emptyArray;

            /**
             * ResponseCheckTx codespace.
             * @member {string} codespace
             * @memberof tendermint.abci.ResponseCheckTx
             * @instance
             */
            ResponseCheckTx.prototype.codespace = "";

            /**
             * Creates a new ResponseCheckTx instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseCheckTx
             * @static
             * @param {tendermint.abci.IResponseCheckTx=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseCheckTx} ResponseCheckTx instance
             */
            ResponseCheckTx.create = function create(properties) {
                return new ResponseCheckTx(properties);
            };

            /**
             * Encodes the specified ResponseCheckTx message. Does not implicitly {@link tendermint.abci.ResponseCheckTx.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseCheckTx
             * @static
             * @param {tendermint.abci.IResponseCheckTx} message ResponseCheckTx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseCheckTx.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                if (message.log != null && message.hasOwnProperty("log"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.log);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.info);
                if (message.gasWanted != null && message.hasOwnProperty("gasWanted"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.gasWanted);
                if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.gasUsed);
                if (message.events != null && message.events.length)
                    for (var i = 0; i < message.events.length; ++i)
                        $root.tendermint.abci.Event.encode(message.events[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.codespace != null && message.hasOwnProperty("codespace"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.codespace);
                return writer;
            };

            /**
             * Encodes the specified ResponseCheckTx message, length delimited. Does not implicitly {@link tendermint.abci.ResponseCheckTx.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseCheckTx
             * @static
             * @param {tendermint.abci.IResponseCheckTx} message ResponseCheckTx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseCheckTx.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseCheckTx message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseCheckTx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseCheckTx} ResponseCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseCheckTx.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseCheckTx();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.uint32();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    case 3:
                        message.log = reader.string();
                        break;
                    case 4:
                        message.info = reader.string();
                        break;
                    case 5:
                        message.gasWanted = reader.int64();
                        break;
                    case 6:
                        message.gasUsed = reader.int64();
                        break;
                    case 7:
                        if (!(message.events && message.events.length))
                            message.events = [];
                        message.events.push($root.tendermint.abci.Event.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.codespace = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseCheckTx message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseCheckTx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseCheckTx} ResponseCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseCheckTx.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseCheckTx message.
             * @function verify
             * @memberof tendermint.abci.ResponseCheckTx
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseCheckTx.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                if (message.log != null && message.hasOwnProperty("log"))
                    if (!$util.isString(message.log))
                        return "log: string expected";
                if (message.info != null && message.hasOwnProperty("info"))
                    if (!$util.isString(message.info))
                        return "info: string expected";
                if (message.gasWanted != null && message.hasOwnProperty("gasWanted"))
                    if (!$util.isInteger(message.gasWanted) && !(message.gasWanted && $util.isInteger(message.gasWanted.low) && $util.isInteger(message.gasWanted.high)))
                        return "gasWanted: integer|Long expected";
                if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                    if (!$util.isInteger(message.gasUsed) && !(message.gasUsed && $util.isInteger(message.gasUsed.low) && $util.isInteger(message.gasUsed.high)))
                        return "gasUsed: integer|Long expected";
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events))
                        return "events: array expected";
                    for (var i = 0; i < message.events.length; ++i) {
                        var error = $root.tendermint.abci.Event.verify(message.events[i]);
                        if (error)
                            return "events." + error;
                    }
                }
                if (message.codespace != null && message.hasOwnProperty("codespace"))
                    if (!$util.isString(message.codespace))
                        return "codespace: string expected";
                return null;
            };

            /**
             * Creates a ResponseCheckTx message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseCheckTx
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseCheckTx} ResponseCheckTx
             */
            ResponseCheckTx.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseCheckTx)
                    return object;
                var message = new $root.tendermint.abci.ResponseCheckTx();
                if (object.code != null)
                    message.code = object.code >>> 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                if (object.log != null)
                    message.log = String(object.log);
                if (object.info != null)
                    message.info = String(object.info);
                if (object.gasWanted != null)
                    if ($util.Long)
                        (message.gasWanted = $util.Long.fromValue(object.gasWanted)).unsigned = false;
                    else if (typeof object.gasWanted === "string")
                        message.gasWanted = parseInt(object.gasWanted, 10);
                    else if (typeof object.gasWanted === "number")
                        message.gasWanted = object.gasWanted;
                    else if (typeof object.gasWanted === "object")
                        message.gasWanted = new $util.LongBits(object.gasWanted.low >>> 0, object.gasWanted.high >>> 0).toNumber();
                if (object.gasUsed != null)
                    if ($util.Long)
                        (message.gasUsed = $util.Long.fromValue(object.gasUsed)).unsigned = false;
                    else if (typeof object.gasUsed === "string")
                        message.gasUsed = parseInt(object.gasUsed, 10);
                    else if (typeof object.gasUsed === "number")
                        message.gasUsed = object.gasUsed;
                    else if (typeof object.gasUsed === "object")
                        message.gasUsed = new $util.LongBits(object.gasUsed.low >>> 0, object.gasUsed.high >>> 0).toNumber();
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(".tendermint.abci.ResponseCheckTx.events: array expected");
                    message.events = [];
                    for (var i = 0; i < object.events.length; ++i) {
                        if (typeof object.events[i] !== "object")
                            throw TypeError(".tendermint.abci.ResponseCheckTx.events: object expected");
                        message.events[i] = $root.tendermint.abci.Event.fromObject(object.events[i]);
                    }
                }
                if (object.codespace != null)
                    message.codespace = String(object.codespace);
                return message;
            };

            /**
             * Creates a plain object from a ResponseCheckTx message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseCheckTx
             * @static
             * @param {tendermint.abci.ResponseCheckTx} message ResponseCheckTx
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseCheckTx.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.events = [];
                if (options.defaults) {
                    object.code = 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                    object.log = "";
                    object.info = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.gasWanted = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gasWanted = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.gasUsed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gasUsed = options.longs === String ? "0" : 0;
                    object.codespace = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.log != null && message.hasOwnProperty("log"))
                    object.log = message.log;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = message.info;
                if (message.gasWanted != null && message.hasOwnProperty("gasWanted"))
                    if (typeof message.gasWanted === "number")
                        object.gasWanted = options.longs === String ? String(message.gasWanted) : message.gasWanted;
                    else
                        object.gasWanted = options.longs === String ? $util.Long.prototype.toString.call(message.gasWanted) : options.longs === Number ? new $util.LongBits(message.gasWanted.low >>> 0, message.gasWanted.high >>> 0).toNumber() : message.gasWanted;
                if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                    if (typeof message.gasUsed === "number")
                        object.gasUsed = options.longs === String ? String(message.gasUsed) : message.gasUsed;
                    else
                        object.gasUsed = options.longs === String ? $util.Long.prototype.toString.call(message.gasUsed) : options.longs === Number ? new $util.LongBits(message.gasUsed.low >>> 0, message.gasUsed.high >>> 0).toNumber() : message.gasUsed;
                if (message.events && message.events.length) {
                    object.events = [];
                    for (var j = 0; j < message.events.length; ++j)
                        object.events[j] = $root.tendermint.abci.Event.toObject(message.events[j], options);
                }
                if (message.codespace != null && message.hasOwnProperty("codespace"))
                    object.codespace = message.codespace;
                return object;
            };

            /**
             * Converts this ResponseCheckTx to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseCheckTx
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseCheckTx.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseCheckTx;
        })();

        abci.ResponseDeliverTx = (function() {

            /**
             * Properties of a ResponseDeliverTx.
             * @memberof tendermint.abci
             * @interface IResponseDeliverTx
             * @property {number|null} [code] ResponseDeliverTx code
             * @property {Uint8Array|null} [data] ResponseDeliverTx data
             * @property {string|null} [log] ResponseDeliverTx log
             * @property {string|null} [info] ResponseDeliverTx info
             * @property {number|Long|null} [gasWanted] ResponseDeliverTx gasWanted
             * @property {number|Long|null} [gasUsed] ResponseDeliverTx gasUsed
             * @property {Array.<tendermint.abci.IEvent>|null} [events] ResponseDeliverTx events
             * @property {string|null} [codespace] ResponseDeliverTx codespace
             */

            /**
             * Constructs a new ResponseDeliverTx.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseDeliverTx.
             * @implements IResponseDeliverTx
             * @constructor
             * @param {tendermint.abci.IResponseDeliverTx=} [properties] Properties to set
             */
            function ResponseDeliverTx(properties) {
                this.events = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseDeliverTx code.
             * @member {number} code
             * @memberof tendermint.abci.ResponseDeliverTx
             * @instance
             */
            ResponseDeliverTx.prototype.code = 0;

            /**
             * ResponseDeliverTx data.
             * @member {Uint8Array} data
             * @memberof tendermint.abci.ResponseDeliverTx
             * @instance
             */
            ResponseDeliverTx.prototype.data = $util.newBuffer([]);

            /**
             * ResponseDeliverTx log.
             * @member {string} log
             * @memberof tendermint.abci.ResponseDeliverTx
             * @instance
             */
            ResponseDeliverTx.prototype.log = "";

            /**
             * ResponseDeliverTx info.
             * @member {string} info
             * @memberof tendermint.abci.ResponseDeliverTx
             * @instance
             */
            ResponseDeliverTx.prototype.info = "";

            /**
             * ResponseDeliverTx gasWanted.
             * @member {number|Long} gasWanted
             * @memberof tendermint.abci.ResponseDeliverTx
             * @instance
             */
            ResponseDeliverTx.prototype.gasWanted = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ResponseDeliverTx gasUsed.
             * @member {number|Long} gasUsed
             * @memberof tendermint.abci.ResponseDeliverTx
             * @instance
             */
            ResponseDeliverTx.prototype.gasUsed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ResponseDeliverTx events.
             * @member {Array.<tendermint.abci.IEvent>} events
             * @memberof tendermint.abci.ResponseDeliverTx
             * @instance
             */
            ResponseDeliverTx.prototype.events = $util.emptyArray;

            /**
             * ResponseDeliverTx codespace.
             * @member {string} codespace
             * @memberof tendermint.abci.ResponseDeliverTx
             * @instance
             */
            ResponseDeliverTx.prototype.codespace = "";

            /**
             * Creates a new ResponseDeliverTx instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseDeliverTx
             * @static
             * @param {tendermint.abci.IResponseDeliverTx=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseDeliverTx} ResponseDeliverTx instance
             */
            ResponseDeliverTx.create = function create(properties) {
                return new ResponseDeliverTx(properties);
            };

            /**
             * Encodes the specified ResponseDeliverTx message. Does not implicitly {@link tendermint.abci.ResponseDeliverTx.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseDeliverTx
             * @static
             * @param {tendermint.abci.IResponseDeliverTx} message ResponseDeliverTx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseDeliverTx.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                if (message.log != null && message.hasOwnProperty("log"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.log);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.info);
                if (message.gasWanted != null && message.hasOwnProperty("gasWanted"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.gasWanted);
                if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.gasUsed);
                if (message.events != null && message.events.length)
                    for (var i = 0; i < message.events.length; ++i)
                        $root.tendermint.abci.Event.encode(message.events[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.codespace != null && message.hasOwnProperty("codespace"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.codespace);
                return writer;
            };

            /**
             * Encodes the specified ResponseDeliverTx message, length delimited. Does not implicitly {@link tendermint.abci.ResponseDeliverTx.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseDeliverTx
             * @static
             * @param {tendermint.abci.IResponseDeliverTx} message ResponseDeliverTx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseDeliverTx.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseDeliverTx message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseDeliverTx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseDeliverTx} ResponseDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseDeliverTx.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseDeliverTx();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.uint32();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    case 3:
                        message.log = reader.string();
                        break;
                    case 4:
                        message.info = reader.string();
                        break;
                    case 5:
                        message.gasWanted = reader.int64();
                        break;
                    case 6:
                        message.gasUsed = reader.int64();
                        break;
                    case 7:
                        if (!(message.events && message.events.length))
                            message.events = [];
                        message.events.push($root.tendermint.abci.Event.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.codespace = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseDeliverTx message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseDeliverTx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseDeliverTx} ResponseDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseDeliverTx.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseDeliverTx message.
             * @function verify
             * @memberof tendermint.abci.ResponseDeliverTx
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseDeliverTx.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                if (message.log != null && message.hasOwnProperty("log"))
                    if (!$util.isString(message.log))
                        return "log: string expected";
                if (message.info != null && message.hasOwnProperty("info"))
                    if (!$util.isString(message.info))
                        return "info: string expected";
                if (message.gasWanted != null && message.hasOwnProperty("gasWanted"))
                    if (!$util.isInteger(message.gasWanted) && !(message.gasWanted && $util.isInteger(message.gasWanted.low) && $util.isInteger(message.gasWanted.high)))
                        return "gasWanted: integer|Long expected";
                if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                    if (!$util.isInteger(message.gasUsed) && !(message.gasUsed && $util.isInteger(message.gasUsed.low) && $util.isInteger(message.gasUsed.high)))
                        return "gasUsed: integer|Long expected";
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events))
                        return "events: array expected";
                    for (var i = 0; i < message.events.length; ++i) {
                        var error = $root.tendermint.abci.Event.verify(message.events[i]);
                        if (error)
                            return "events." + error;
                    }
                }
                if (message.codespace != null && message.hasOwnProperty("codespace"))
                    if (!$util.isString(message.codespace))
                        return "codespace: string expected";
                return null;
            };

            /**
             * Creates a ResponseDeliverTx message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseDeliverTx
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseDeliverTx} ResponseDeliverTx
             */
            ResponseDeliverTx.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseDeliverTx)
                    return object;
                var message = new $root.tendermint.abci.ResponseDeliverTx();
                if (object.code != null)
                    message.code = object.code >>> 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                if (object.log != null)
                    message.log = String(object.log);
                if (object.info != null)
                    message.info = String(object.info);
                if (object.gasWanted != null)
                    if ($util.Long)
                        (message.gasWanted = $util.Long.fromValue(object.gasWanted)).unsigned = false;
                    else if (typeof object.gasWanted === "string")
                        message.gasWanted = parseInt(object.gasWanted, 10);
                    else if (typeof object.gasWanted === "number")
                        message.gasWanted = object.gasWanted;
                    else if (typeof object.gasWanted === "object")
                        message.gasWanted = new $util.LongBits(object.gasWanted.low >>> 0, object.gasWanted.high >>> 0).toNumber();
                if (object.gasUsed != null)
                    if ($util.Long)
                        (message.gasUsed = $util.Long.fromValue(object.gasUsed)).unsigned = false;
                    else if (typeof object.gasUsed === "string")
                        message.gasUsed = parseInt(object.gasUsed, 10);
                    else if (typeof object.gasUsed === "number")
                        message.gasUsed = object.gasUsed;
                    else if (typeof object.gasUsed === "object")
                        message.gasUsed = new $util.LongBits(object.gasUsed.low >>> 0, object.gasUsed.high >>> 0).toNumber();
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(".tendermint.abci.ResponseDeliverTx.events: array expected");
                    message.events = [];
                    for (var i = 0; i < object.events.length; ++i) {
                        if (typeof object.events[i] !== "object")
                            throw TypeError(".tendermint.abci.ResponseDeliverTx.events: object expected");
                        message.events[i] = $root.tendermint.abci.Event.fromObject(object.events[i]);
                    }
                }
                if (object.codespace != null)
                    message.codespace = String(object.codespace);
                return message;
            };

            /**
             * Creates a plain object from a ResponseDeliverTx message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseDeliverTx
             * @static
             * @param {tendermint.abci.ResponseDeliverTx} message ResponseDeliverTx
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseDeliverTx.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.events = [];
                if (options.defaults) {
                    object.code = 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                    object.log = "";
                    object.info = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.gasWanted = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gasWanted = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.gasUsed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gasUsed = options.longs === String ? "0" : 0;
                    object.codespace = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.log != null && message.hasOwnProperty("log"))
                    object.log = message.log;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = message.info;
                if (message.gasWanted != null && message.hasOwnProperty("gasWanted"))
                    if (typeof message.gasWanted === "number")
                        object.gasWanted = options.longs === String ? String(message.gasWanted) : message.gasWanted;
                    else
                        object.gasWanted = options.longs === String ? $util.Long.prototype.toString.call(message.gasWanted) : options.longs === Number ? new $util.LongBits(message.gasWanted.low >>> 0, message.gasWanted.high >>> 0).toNumber() : message.gasWanted;
                if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                    if (typeof message.gasUsed === "number")
                        object.gasUsed = options.longs === String ? String(message.gasUsed) : message.gasUsed;
                    else
                        object.gasUsed = options.longs === String ? $util.Long.prototype.toString.call(message.gasUsed) : options.longs === Number ? new $util.LongBits(message.gasUsed.low >>> 0, message.gasUsed.high >>> 0).toNumber() : message.gasUsed;
                if (message.events && message.events.length) {
                    object.events = [];
                    for (var j = 0; j < message.events.length; ++j)
                        object.events[j] = $root.tendermint.abci.Event.toObject(message.events[j], options);
                }
                if (message.codespace != null && message.hasOwnProperty("codespace"))
                    object.codespace = message.codespace;
                return object;
            };

            /**
             * Converts this ResponseDeliverTx to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseDeliverTx
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseDeliverTx.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseDeliverTx;
        })();

        abci.ResponseEndBlock = (function() {

            /**
             * Properties of a ResponseEndBlock.
             * @memberof tendermint.abci
             * @interface IResponseEndBlock
             * @property {Array.<tendermint.abci.IValidatorUpdate>|null} [validatorUpdates] ResponseEndBlock validatorUpdates
             * @property {tendermint.abci.IConsensusParams|null} [consensusParamUpdates] ResponseEndBlock consensusParamUpdates
             * @property {Array.<tendermint.abci.IEvent>|null} [events] ResponseEndBlock events
             * @property {tendermint.types.ICoreChainLock|null} [nextCoreChainLockUpdate] ResponseEndBlock nextCoreChainLockUpdate
             */

            /**
             * Constructs a new ResponseEndBlock.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseEndBlock.
             * @implements IResponseEndBlock
             * @constructor
             * @param {tendermint.abci.IResponseEndBlock=} [properties] Properties to set
             */
            function ResponseEndBlock(properties) {
                this.validatorUpdates = [];
                this.events = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseEndBlock validatorUpdates.
             * @member {Array.<tendermint.abci.IValidatorUpdate>} validatorUpdates
             * @memberof tendermint.abci.ResponseEndBlock
             * @instance
             */
            ResponseEndBlock.prototype.validatorUpdates = $util.emptyArray;

            /**
             * ResponseEndBlock consensusParamUpdates.
             * @member {tendermint.abci.IConsensusParams|null|undefined} consensusParamUpdates
             * @memberof tendermint.abci.ResponseEndBlock
             * @instance
             */
            ResponseEndBlock.prototype.consensusParamUpdates = null;

            /**
             * ResponseEndBlock events.
             * @member {Array.<tendermint.abci.IEvent>} events
             * @memberof tendermint.abci.ResponseEndBlock
             * @instance
             */
            ResponseEndBlock.prototype.events = $util.emptyArray;

            /**
             * ResponseEndBlock nextCoreChainLockUpdate.
             * @member {tendermint.types.ICoreChainLock|null|undefined} nextCoreChainLockUpdate
             * @memberof tendermint.abci.ResponseEndBlock
             * @instance
             */
            ResponseEndBlock.prototype.nextCoreChainLockUpdate = null;

            /**
             * Creates a new ResponseEndBlock instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseEndBlock
             * @static
             * @param {tendermint.abci.IResponseEndBlock=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseEndBlock} ResponseEndBlock instance
             */
            ResponseEndBlock.create = function create(properties) {
                return new ResponseEndBlock(properties);
            };

            /**
             * Encodes the specified ResponseEndBlock message. Does not implicitly {@link tendermint.abci.ResponseEndBlock.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseEndBlock
             * @static
             * @param {tendermint.abci.IResponseEndBlock} message ResponseEndBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseEndBlock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.validatorUpdates != null && message.validatorUpdates.length)
                    for (var i = 0; i < message.validatorUpdates.length; ++i)
                        $root.tendermint.abci.ValidatorUpdate.encode(message.validatorUpdates[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.consensusParamUpdates != null && message.hasOwnProperty("consensusParamUpdates"))
                    $root.tendermint.abci.ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.events != null && message.events.length)
                    for (var i = 0; i < message.events.length; ++i)
                        $root.tendermint.abci.Event.encode(message.events[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.nextCoreChainLockUpdate != null && message.hasOwnProperty("nextCoreChainLockUpdate"))
                    $root.tendermint.types.CoreChainLock.encode(message.nextCoreChainLockUpdate, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ResponseEndBlock message, length delimited. Does not implicitly {@link tendermint.abci.ResponseEndBlock.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseEndBlock
             * @static
             * @param {tendermint.abci.IResponseEndBlock} message ResponseEndBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseEndBlock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseEndBlock message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseEndBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseEndBlock} ResponseEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseEndBlock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseEndBlock();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.validatorUpdates && message.validatorUpdates.length))
                            message.validatorUpdates = [];
                        message.validatorUpdates.push($root.tendermint.abci.ValidatorUpdate.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.consensusParamUpdates = $root.tendermint.abci.ConsensusParams.decode(reader, reader.uint32());
                        break;
                    case 3:
                        if (!(message.events && message.events.length))
                            message.events = [];
                        message.events.push($root.tendermint.abci.Event.decode(reader, reader.uint32()));
                        break;
                    case 100:
                        message.nextCoreChainLockUpdate = $root.tendermint.types.CoreChainLock.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseEndBlock message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseEndBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseEndBlock} ResponseEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseEndBlock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseEndBlock message.
             * @function verify
             * @memberof tendermint.abci.ResponseEndBlock
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseEndBlock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.validatorUpdates != null && message.hasOwnProperty("validatorUpdates")) {
                    if (!Array.isArray(message.validatorUpdates))
                        return "validatorUpdates: array expected";
                    for (var i = 0; i < message.validatorUpdates.length; ++i) {
                        var error = $root.tendermint.abci.ValidatorUpdate.verify(message.validatorUpdates[i]);
                        if (error)
                            return "validatorUpdates." + error;
                    }
                }
                if (message.consensusParamUpdates != null && message.hasOwnProperty("consensusParamUpdates")) {
                    var error = $root.tendermint.abci.ConsensusParams.verify(message.consensusParamUpdates);
                    if (error)
                        return "consensusParamUpdates." + error;
                }
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events))
                        return "events: array expected";
                    for (var i = 0; i < message.events.length; ++i) {
                        var error = $root.tendermint.abci.Event.verify(message.events[i]);
                        if (error)
                            return "events." + error;
                    }
                }
                if (message.nextCoreChainLockUpdate != null && message.hasOwnProperty("nextCoreChainLockUpdate")) {
                    var error = $root.tendermint.types.CoreChainLock.verify(message.nextCoreChainLockUpdate);
                    if (error)
                        return "nextCoreChainLockUpdate." + error;
                }
                return null;
            };

            /**
             * Creates a ResponseEndBlock message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseEndBlock
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseEndBlock} ResponseEndBlock
             */
            ResponseEndBlock.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseEndBlock)
                    return object;
                var message = new $root.tendermint.abci.ResponseEndBlock();
                if (object.validatorUpdates) {
                    if (!Array.isArray(object.validatorUpdates))
                        throw TypeError(".tendermint.abci.ResponseEndBlock.validatorUpdates: array expected");
                    message.validatorUpdates = [];
                    for (var i = 0; i < object.validatorUpdates.length; ++i) {
                        if (typeof object.validatorUpdates[i] !== "object")
                            throw TypeError(".tendermint.abci.ResponseEndBlock.validatorUpdates: object expected");
                        message.validatorUpdates[i] = $root.tendermint.abci.ValidatorUpdate.fromObject(object.validatorUpdates[i]);
                    }
                }
                if (object.consensusParamUpdates != null) {
                    if (typeof object.consensusParamUpdates !== "object")
                        throw TypeError(".tendermint.abci.ResponseEndBlock.consensusParamUpdates: object expected");
                    message.consensusParamUpdates = $root.tendermint.abci.ConsensusParams.fromObject(object.consensusParamUpdates);
                }
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(".tendermint.abci.ResponseEndBlock.events: array expected");
                    message.events = [];
                    for (var i = 0; i < object.events.length; ++i) {
                        if (typeof object.events[i] !== "object")
                            throw TypeError(".tendermint.abci.ResponseEndBlock.events: object expected");
                        message.events[i] = $root.tendermint.abci.Event.fromObject(object.events[i]);
                    }
                }
                if (object.nextCoreChainLockUpdate != null) {
                    if (typeof object.nextCoreChainLockUpdate !== "object")
                        throw TypeError(".tendermint.abci.ResponseEndBlock.nextCoreChainLockUpdate: object expected");
                    message.nextCoreChainLockUpdate = $root.tendermint.types.CoreChainLock.fromObject(object.nextCoreChainLockUpdate);
                }
                return message;
            };

            /**
             * Creates a plain object from a ResponseEndBlock message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseEndBlock
             * @static
             * @param {tendermint.abci.ResponseEndBlock} message ResponseEndBlock
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseEndBlock.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.validatorUpdates = [];
                    object.events = [];
                }
                if (options.defaults) {
                    object.consensusParamUpdates = null;
                    object.nextCoreChainLockUpdate = null;
                }
                if (message.validatorUpdates && message.validatorUpdates.length) {
                    object.validatorUpdates = [];
                    for (var j = 0; j < message.validatorUpdates.length; ++j)
                        object.validatorUpdates[j] = $root.tendermint.abci.ValidatorUpdate.toObject(message.validatorUpdates[j], options);
                }
                if (message.consensusParamUpdates != null && message.hasOwnProperty("consensusParamUpdates"))
                    object.consensusParamUpdates = $root.tendermint.abci.ConsensusParams.toObject(message.consensusParamUpdates, options);
                if (message.events && message.events.length) {
                    object.events = [];
                    for (var j = 0; j < message.events.length; ++j)
                        object.events[j] = $root.tendermint.abci.Event.toObject(message.events[j], options);
                }
                if (message.nextCoreChainLockUpdate != null && message.hasOwnProperty("nextCoreChainLockUpdate"))
                    object.nextCoreChainLockUpdate = $root.tendermint.types.CoreChainLock.toObject(message.nextCoreChainLockUpdate, options);
                return object;
            };

            /**
             * Converts this ResponseEndBlock to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseEndBlock
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseEndBlock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseEndBlock;
        })();

        abci.ResponseCommit = (function() {

            /**
             * Properties of a ResponseCommit.
             * @memberof tendermint.abci
             * @interface IResponseCommit
             * @property {Uint8Array|null} [data] ResponseCommit data
             * @property {number|Long|null} [retainHeight] ResponseCommit retainHeight
             */

            /**
             * Constructs a new ResponseCommit.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseCommit.
             * @implements IResponseCommit
             * @constructor
             * @param {tendermint.abci.IResponseCommit=} [properties] Properties to set
             */
            function ResponseCommit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseCommit data.
             * @member {Uint8Array} data
             * @memberof tendermint.abci.ResponseCommit
             * @instance
             */
            ResponseCommit.prototype.data = $util.newBuffer([]);

            /**
             * ResponseCommit retainHeight.
             * @member {number|Long} retainHeight
             * @memberof tendermint.abci.ResponseCommit
             * @instance
             */
            ResponseCommit.prototype.retainHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ResponseCommit instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseCommit
             * @static
             * @param {tendermint.abci.IResponseCommit=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseCommit} ResponseCommit instance
             */
            ResponseCommit.create = function create(properties) {
                return new ResponseCommit(properties);
            };

            /**
             * Encodes the specified ResponseCommit message. Does not implicitly {@link tendermint.abci.ResponseCommit.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseCommit
             * @static
             * @param {tendermint.abci.IResponseCommit} message ResponseCommit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseCommit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                if (message.retainHeight != null && message.hasOwnProperty("retainHeight"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.retainHeight);
                return writer;
            };

            /**
             * Encodes the specified ResponseCommit message, length delimited. Does not implicitly {@link tendermint.abci.ResponseCommit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseCommit
             * @static
             * @param {tendermint.abci.IResponseCommit} message ResponseCommit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseCommit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseCommit message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseCommit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseCommit} ResponseCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseCommit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseCommit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.data = reader.bytes();
                        break;
                    case 3:
                        message.retainHeight = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseCommit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseCommit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseCommit} ResponseCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseCommit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseCommit message.
             * @function verify
             * @memberof tendermint.abci.ResponseCommit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseCommit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                if (message.retainHeight != null && message.hasOwnProperty("retainHeight"))
                    if (!$util.isInteger(message.retainHeight) && !(message.retainHeight && $util.isInteger(message.retainHeight.low) && $util.isInteger(message.retainHeight.high)))
                        return "retainHeight: integer|Long expected";
                return null;
            };

            /**
             * Creates a ResponseCommit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseCommit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseCommit} ResponseCommit
             */
            ResponseCommit.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseCommit)
                    return object;
                var message = new $root.tendermint.abci.ResponseCommit();
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                if (object.retainHeight != null)
                    if ($util.Long)
                        (message.retainHeight = $util.Long.fromValue(object.retainHeight)).unsigned = false;
                    else if (typeof object.retainHeight === "string")
                        message.retainHeight = parseInt(object.retainHeight, 10);
                    else if (typeof object.retainHeight === "number")
                        message.retainHeight = object.retainHeight;
                    else if (typeof object.retainHeight === "object")
                        message.retainHeight = new $util.LongBits(object.retainHeight.low >>> 0, object.retainHeight.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a ResponseCommit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseCommit
             * @static
             * @param {tendermint.abci.ResponseCommit} message ResponseCommit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseCommit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.retainHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.retainHeight = options.longs === String ? "0" : 0;
                }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.retainHeight != null && message.hasOwnProperty("retainHeight"))
                    if (typeof message.retainHeight === "number")
                        object.retainHeight = options.longs === String ? String(message.retainHeight) : message.retainHeight;
                    else
                        object.retainHeight = options.longs === String ? $util.Long.prototype.toString.call(message.retainHeight) : options.longs === Number ? new $util.LongBits(message.retainHeight.low >>> 0, message.retainHeight.high >>> 0).toNumber() : message.retainHeight;
                return object;
            };

            /**
             * Converts this ResponseCommit to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseCommit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseCommit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseCommit;
        })();

        abci.ResponseListSnapshots = (function() {

            /**
             * Properties of a ResponseListSnapshots.
             * @memberof tendermint.abci
             * @interface IResponseListSnapshots
             * @property {Array.<tendermint.abci.ISnapshot>|null} [snapshots] ResponseListSnapshots snapshots
             */

            /**
             * Constructs a new ResponseListSnapshots.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseListSnapshots.
             * @implements IResponseListSnapshots
             * @constructor
             * @param {tendermint.abci.IResponseListSnapshots=} [properties] Properties to set
             */
            function ResponseListSnapshots(properties) {
                this.snapshots = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseListSnapshots snapshots.
             * @member {Array.<tendermint.abci.ISnapshot>} snapshots
             * @memberof tendermint.abci.ResponseListSnapshots
             * @instance
             */
            ResponseListSnapshots.prototype.snapshots = $util.emptyArray;

            /**
             * Creates a new ResponseListSnapshots instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseListSnapshots
             * @static
             * @param {tendermint.abci.IResponseListSnapshots=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseListSnapshots} ResponseListSnapshots instance
             */
            ResponseListSnapshots.create = function create(properties) {
                return new ResponseListSnapshots(properties);
            };

            /**
             * Encodes the specified ResponseListSnapshots message. Does not implicitly {@link tendermint.abci.ResponseListSnapshots.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseListSnapshots
             * @static
             * @param {tendermint.abci.IResponseListSnapshots} message ResponseListSnapshots message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseListSnapshots.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.snapshots != null && message.snapshots.length)
                    for (var i = 0; i < message.snapshots.length; ++i)
                        $root.tendermint.abci.Snapshot.encode(message.snapshots[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ResponseListSnapshots message, length delimited. Does not implicitly {@link tendermint.abci.ResponseListSnapshots.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseListSnapshots
             * @static
             * @param {tendermint.abci.IResponseListSnapshots} message ResponseListSnapshots message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseListSnapshots.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseListSnapshots message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseListSnapshots
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseListSnapshots} ResponseListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseListSnapshots.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseListSnapshots();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.snapshots && message.snapshots.length))
                            message.snapshots = [];
                        message.snapshots.push($root.tendermint.abci.Snapshot.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseListSnapshots message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseListSnapshots
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseListSnapshots} ResponseListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseListSnapshots.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseListSnapshots message.
             * @function verify
             * @memberof tendermint.abci.ResponseListSnapshots
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseListSnapshots.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.snapshots != null && message.hasOwnProperty("snapshots")) {
                    if (!Array.isArray(message.snapshots))
                        return "snapshots: array expected";
                    for (var i = 0; i < message.snapshots.length; ++i) {
                        var error = $root.tendermint.abci.Snapshot.verify(message.snapshots[i]);
                        if (error)
                            return "snapshots." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ResponseListSnapshots message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseListSnapshots
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseListSnapshots} ResponseListSnapshots
             */
            ResponseListSnapshots.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseListSnapshots)
                    return object;
                var message = new $root.tendermint.abci.ResponseListSnapshots();
                if (object.snapshots) {
                    if (!Array.isArray(object.snapshots))
                        throw TypeError(".tendermint.abci.ResponseListSnapshots.snapshots: array expected");
                    message.snapshots = [];
                    for (var i = 0; i < object.snapshots.length; ++i) {
                        if (typeof object.snapshots[i] !== "object")
                            throw TypeError(".tendermint.abci.ResponseListSnapshots.snapshots: object expected");
                        message.snapshots[i] = $root.tendermint.abci.Snapshot.fromObject(object.snapshots[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ResponseListSnapshots message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseListSnapshots
             * @static
             * @param {tendermint.abci.ResponseListSnapshots} message ResponseListSnapshots
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseListSnapshots.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.snapshots = [];
                if (message.snapshots && message.snapshots.length) {
                    object.snapshots = [];
                    for (var j = 0; j < message.snapshots.length; ++j)
                        object.snapshots[j] = $root.tendermint.abci.Snapshot.toObject(message.snapshots[j], options);
                }
                return object;
            };

            /**
             * Converts this ResponseListSnapshots to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseListSnapshots
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseListSnapshots.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseListSnapshots;
        })();

        abci.ResponseOfferSnapshot = (function() {

            /**
             * Properties of a ResponseOfferSnapshot.
             * @memberof tendermint.abci
             * @interface IResponseOfferSnapshot
             * @property {tendermint.abci.ResponseOfferSnapshot.Result|null} [result] ResponseOfferSnapshot result
             */

            /**
             * Constructs a new ResponseOfferSnapshot.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseOfferSnapshot.
             * @implements IResponseOfferSnapshot
             * @constructor
             * @param {tendermint.abci.IResponseOfferSnapshot=} [properties] Properties to set
             */
            function ResponseOfferSnapshot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseOfferSnapshot result.
             * @member {tendermint.abci.ResponseOfferSnapshot.Result} result
             * @memberof tendermint.abci.ResponseOfferSnapshot
             * @instance
             */
            ResponseOfferSnapshot.prototype.result = 0;

            /**
             * Creates a new ResponseOfferSnapshot instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseOfferSnapshot
             * @static
             * @param {tendermint.abci.IResponseOfferSnapshot=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseOfferSnapshot} ResponseOfferSnapshot instance
             */
            ResponseOfferSnapshot.create = function create(properties) {
                return new ResponseOfferSnapshot(properties);
            };

            /**
             * Encodes the specified ResponseOfferSnapshot message. Does not implicitly {@link tendermint.abci.ResponseOfferSnapshot.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseOfferSnapshot
             * @static
             * @param {tendermint.abci.IResponseOfferSnapshot} message ResponseOfferSnapshot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseOfferSnapshot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.result != null && message.hasOwnProperty("result"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                return writer;
            };

            /**
             * Encodes the specified ResponseOfferSnapshot message, length delimited. Does not implicitly {@link tendermint.abci.ResponseOfferSnapshot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseOfferSnapshot
             * @static
             * @param {tendermint.abci.IResponseOfferSnapshot} message ResponseOfferSnapshot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseOfferSnapshot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseOfferSnapshot message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseOfferSnapshot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseOfferSnapshot} ResponseOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseOfferSnapshot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseOfferSnapshot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseOfferSnapshot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseOfferSnapshot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseOfferSnapshot} ResponseOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseOfferSnapshot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseOfferSnapshot message.
             * @function verify
             * @memberof tendermint.abci.ResponseOfferSnapshot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseOfferSnapshot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    switch (message.result) {
                    default:
                        return "result: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                return null;
            };

            /**
             * Creates a ResponseOfferSnapshot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseOfferSnapshot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseOfferSnapshot} ResponseOfferSnapshot
             */
            ResponseOfferSnapshot.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseOfferSnapshot)
                    return object;
                var message = new $root.tendermint.abci.ResponseOfferSnapshot();
                switch (object.result) {
                case "UNKNOWN":
                case 0:
                    message.result = 0;
                    break;
                case "ACCEPT":
                case 1:
                    message.result = 1;
                    break;
                case "ABORT":
                case 2:
                    message.result = 2;
                    break;
                case "REJECT":
                case 3:
                    message.result = 3;
                    break;
                case "REJECT_FORMAT":
                case 4:
                    message.result = 4;
                    break;
                case "REJECT_SENDER":
                case 5:
                    message.result = 5;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a ResponseOfferSnapshot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseOfferSnapshot
             * @static
             * @param {tendermint.abci.ResponseOfferSnapshot} message ResponseOfferSnapshot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseOfferSnapshot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.result = options.enums === String ? "UNKNOWN" : 0;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.tendermint.abci.ResponseOfferSnapshot.Result[message.result] : message.result;
                return object;
            };

            /**
             * Converts this ResponseOfferSnapshot to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseOfferSnapshot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseOfferSnapshot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Result enum.
             * @name tendermint.abci.ResponseOfferSnapshot.Result
             * @enum {string}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} ACCEPT=1 ACCEPT value
             * @property {number} ABORT=2 ABORT value
             * @property {number} REJECT=3 REJECT value
             * @property {number} REJECT_FORMAT=4 REJECT_FORMAT value
             * @property {number} REJECT_SENDER=5 REJECT_SENDER value
             */
            ResponseOfferSnapshot.Result = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "ACCEPT"] = 1;
                values[valuesById[2] = "ABORT"] = 2;
                values[valuesById[3] = "REJECT"] = 3;
                values[valuesById[4] = "REJECT_FORMAT"] = 4;
                values[valuesById[5] = "REJECT_SENDER"] = 5;
                return values;
            })();

            return ResponseOfferSnapshot;
        })();

        abci.ResponseLoadSnapshotChunk = (function() {

            /**
             * Properties of a ResponseLoadSnapshotChunk.
             * @memberof tendermint.abci
             * @interface IResponseLoadSnapshotChunk
             * @property {Uint8Array|null} [chunk] ResponseLoadSnapshotChunk chunk
             */

            /**
             * Constructs a new ResponseLoadSnapshotChunk.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseLoadSnapshotChunk.
             * @implements IResponseLoadSnapshotChunk
             * @constructor
             * @param {tendermint.abci.IResponseLoadSnapshotChunk=} [properties] Properties to set
             */
            function ResponseLoadSnapshotChunk(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseLoadSnapshotChunk chunk.
             * @member {Uint8Array} chunk
             * @memberof tendermint.abci.ResponseLoadSnapshotChunk
             * @instance
             */
            ResponseLoadSnapshotChunk.prototype.chunk = $util.newBuffer([]);

            /**
             * Creates a new ResponseLoadSnapshotChunk instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseLoadSnapshotChunk
             * @static
             * @param {tendermint.abci.IResponseLoadSnapshotChunk=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseLoadSnapshotChunk} ResponseLoadSnapshotChunk instance
             */
            ResponseLoadSnapshotChunk.create = function create(properties) {
                return new ResponseLoadSnapshotChunk(properties);
            };

            /**
             * Encodes the specified ResponseLoadSnapshotChunk message. Does not implicitly {@link tendermint.abci.ResponseLoadSnapshotChunk.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseLoadSnapshotChunk
             * @static
             * @param {tendermint.abci.IResponseLoadSnapshotChunk} message ResponseLoadSnapshotChunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseLoadSnapshotChunk.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.chunk != null && message.hasOwnProperty("chunk"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.chunk);
                return writer;
            };

            /**
             * Encodes the specified ResponseLoadSnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.ResponseLoadSnapshotChunk.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseLoadSnapshotChunk
             * @static
             * @param {tendermint.abci.IResponseLoadSnapshotChunk} message ResponseLoadSnapshotChunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseLoadSnapshotChunk.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseLoadSnapshotChunk message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseLoadSnapshotChunk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseLoadSnapshotChunk} ResponseLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseLoadSnapshotChunk.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseLoadSnapshotChunk();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.chunk = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseLoadSnapshotChunk message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseLoadSnapshotChunk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseLoadSnapshotChunk} ResponseLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseLoadSnapshotChunk.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseLoadSnapshotChunk message.
             * @function verify
             * @memberof tendermint.abci.ResponseLoadSnapshotChunk
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseLoadSnapshotChunk.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.chunk != null && message.hasOwnProperty("chunk"))
                    if (!(message.chunk && typeof message.chunk.length === "number" || $util.isString(message.chunk)))
                        return "chunk: buffer expected";
                return null;
            };

            /**
             * Creates a ResponseLoadSnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseLoadSnapshotChunk
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseLoadSnapshotChunk} ResponseLoadSnapshotChunk
             */
            ResponseLoadSnapshotChunk.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseLoadSnapshotChunk)
                    return object;
                var message = new $root.tendermint.abci.ResponseLoadSnapshotChunk();
                if (object.chunk != null)
                    if (typeof object.chunk === "string")
                        $util.base64.decode(object.chunk, message.chunk = $util.newBuffer($util.base64.length(object.chunk)), 0);
                    else if (object.chunk.length)
                        message.chunk = object.chunk;
                return message;
            };

            /**
             * Creates a plain object from a ResponseLoadSnapshotChunk message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseLoadSnapshotChunk
             * @static
             * @param {tendermint.abci.ResponseLoadSnapshotChunk} message ResponseLoadSnapshotChunk
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseLoadSnapshotChunk.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.chunk = "";
                    else {
                        object.chunk = [];
                        if (options.bytes !== Array)
                            object.chunk = $util.newBuffer(object.chunk);
                    }
                if (message.chunk != null && message.hasOwnProperty("chunk"))
                    object.chunk = options.bytes === String ? $util.base64.encode(message.chunk, 0, message.chunk.length) : options.bytes === Array ? Array.prototype.slice.call(message.chunk) : message.chunk;
                return object;
            };

            /**
             * Converts this ResponseLoadSnapshotChunk to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseLoadSnapshotChunk
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseLoadSnapshotChunk.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseLoadSnapshotChunk;
        })();

        abci.ResponseApplySnapshotChunk = (function() {

            /**
             * Properties of a ResponseApplySnapshotChunk.
             * @memberof tendermint.abci
             * @interface IResponseApplySnapshotChunk
             * @property {tendermint.abci.ResponseApplySnapshotChunk.Result|null} [result] ResponseApplySnapshotChunk result
             * @property {Array.<number>|null} [refetchChunks] ResponseApplySnapshotChunk refetchChunks
             * @property {Array.<string>|null} [rejectSenders] ResponseApplySnapshotChunk rejectSenders
             */

            /**
             * Constructs a new ResponseApplySnapshotChunk.
             * @memberof tendermint.abci
             * @classdesc Represents a ResponseApplySnapshotChunk.
             * @implements IResponseApplySnapshotChunk
             * @constructor
             * @param {tendermint.abci.IResponseApplySnapshotChunk=} [properties] Properties to set
             */
            function ResponseApplySnapshotChunk(properties) {
                this.refetchChunks = [];
                this.rejectSenders = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseApplySnapshotChunk result.
             * @member {tendermint.abci.ResponseApplySnapshotChunk.Result} result
             * @memberof tendermint.abci.ResponseApplySnapshotChunk
             * @instance
             */
            ResponseApplySnapshotChunk.prototype.result = 0;

            /**
             * ResponseApplySnapshotChunk refetchChunks.
             * @member {Array.<number>} refetchChunks
             * @memberof tendermint.abci.ResponseApplySnapshotChunk
             * @instance
             */
            ResponseApplySnapshotChunk.prototype.refetchChunks = $util.emptyArray;

            /**
             * ResponseApplySnapshotChunk rejectSenders.
             * @member {Array.<string>} rejectSenders
             * @memberof tendermint.abci.ResponseApplySnapshotChunk
             * @instance
             */
            ResponseApplySnapshotChunk.prototype.rejectSenders = $util.emptyArray;

            /**
             * Creates a new ResponseApplySnapshotChunk instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ResponseApplySnapshotChunk
             * @static
             * @param {tendermint.abci.IResponseApplySnapshotChunk=} [properties] Properties to set
             * @returns {tendermint.abci.ResponseApplySnapshotChunk} ResponseApplySnapshotChunk instance
             */
            ResponseApplySnapshotChunk.create = function create(properties) {
                return new ResponseApplySnapshotChunk(properties);
            };

            /**
             * Encodes the specified ResponseApplySnapshotChunk message. Does not implicitly {@link tendermint.abci.ResponseApplySnapshotChunk.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ResponseApplySnapshotChunk
             * @static
             * @param {tendermint.abci.IResponseApplySnapshotChunk} message ResponseApplySnapshotChunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseApplySnapshotChunk.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.result != null && message.hasOwnProperty("result"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                if (message.refetchChunks != null && message.refetchChunks.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.refetchChunks.length; ++i)
                        writer.uint32(message.refetchChunks[i]);
                    writer.ldelim();
                }
                if (message.rejectSenders != null && message.rejectSenders.length)
                    for (var i = 0; i < message.rejectSenders.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.rejectSenders[i]);
                return writer;
            };

            /**
             * Encodes the specified ResponseApplySnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.ResponseApplySnapshotChunk.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ResponseApplySnapshotChunk
             * @static
             * @param {tendermint.abci.IResponseApplySnapshotChunk} message ResponseApplySnapshotChunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseApplySnapshotChunk.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseApplySnapshotChunk message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ResponseApplySnapshotChunk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ResponseApplySnapshotChunk} ResponseApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseApplySnapshotChunk.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ResponseApplySnapshotChunk();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = reader.int32();
                        break;
                    case 2:
                        if (!(message.refetchChunks && message.refetchChunks.length))
                            message.refetchChunks = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.refetchChunks.push(reader.uint32());
                        } else
                            message.refetchChunks.push(reader.uint32());
                        break;
                    case 3:
                        if (!(message.rejectSenders && message.rejectSenders.length))
                            message.rejectSenders = [];
                        message.rejectSenders.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseApplySnapshotChunk message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ResponseApplySnapshotChunk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ResponseApplySnapshotChunk} ResponseApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseApplySnapshotChunk.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseApplySnapshotChunk message.
             * @function verify
             * @memberof tendermint.abci.ResponseApplySnapshotChunk
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseApplySnapshotChunk.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    switch (message.result) {
                    default:
                        return "result: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                if (message.refetchChunks != null && message.hasOwnProperty("refetchChunks")) {
                    if (!Array.isArray(message.refetchChunks))
                        return "refetchChunks: array expected";
                    for (var i = 0; i < message.refetchChunks.length; ++i)
                        if (!$util.isInteger(message.refetchChunks[i]))
                            return "refetchChunks: integer[] expected";
                }
                if (message.rejectSenders != null && message.hasOwnProperty("rejectSenders")) {
                    if (!Array.isArray(message.rejectSenders))
                        return "rejectSenders: array expected";
                    for (var i = 0; i < message.rejectSenders.length; ++i)
                        if (!$util.isString(message.rejectSenders[i]))
                            return "rejectSenders: string[] expected";
                }
                return null;
            };

            /**
             * Creates a ResponseApplySnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ResponseApplySnapshotChunk
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ResponseApplySnapshotChunk} ResponseApplySnapshotChunk
             */
            ResponseApplySnapshotChunk.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ResponseApplySnapshotChunk)
                    return object;
                var message = new $root.tendermint.abci.ResponseApplySnapshotChunk();
                switch (object.result) {
                case "UNKNOWN":
                case 0:
                    message.result = 0;
                    break;
                case "ACCEPT":
                case 1:
                    message.result = 1;
                    break;
                case "ABORT":
                case 2:
                    message.result = 2;
                    break;
                case "RETRY":
                case 3:
                    message.result = 3;
                    break;
                case "RETRY_SNAPSHOT":
                case 4:
                    message.result = 4;
                    break;
                case "REJECT_SNAPSHOT":
                case 5:
                    message.result = 5;
                    break;
                }
                if (object.refetchChunks) {
                    if (!Array.isArray(object.refetchChunks))
                        throw TypeError(".tendermint.abci.ResponseApplySnapshotChunk.refetchChunks: array expected");
                    message.refetchChunks = [];
                    for (var i = 0; i < object.refetchChunks.length; ++i)
                        message.refetchChunks[i] = object.refetchChunks[i] >>> 0;
                }
                if (object.rejectSenders) {
                    if (!Array.isArray(object.rejectSenders))
                        throw TypeError(".tendermint.abci.ResponseApplySnapshotChunk.rejectSenders: array expected");
                    message.rejectSenders = [];
                    for (var i = 0; i < object.rejectSenders.length; ++i)
                        message.rejectSenders[i] = String(object.rejectSenders[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a ResponseApplySnapshotChunk message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ResponseApplySnapshotChunk
             * @static
             * @param {tendermint.abci.ResponseApplySnapshotChunk} message ResponseApplySnapshotChunk
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseApplySnapshotChunk.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.refetchChunks = [];
                    object.rejectSenders = [];
                }
                if (options.defaults)
                    object.result = options.enums === String ? "UNKNOWN" : 0;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.tendermint.abci.ResponseApplySnapshotChunk.Result[message.result] : message.result;
                if (message.refetchChunks && message.refetchChunks.length) {
                    object.refetchChunks = [];
                    for (var j = 0; j < message.refetchChunks.length; ++j)
                        object.refetchChunks[j] = message.refetchChunks[j];
                }
                if (message.rejectSenders && message.rejectSenders.length) {
                    object.rejectSenders = [];
                    for (var j = 0; j < message.rejectSenders.length; ++j)
                        object.rejectSenders[j] = message.rejectSenders[j];
                }
                return object;
            };

            /**
             * Converts this ResponseApplySnapshotChunk to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ResponseApplySnapshotChunk
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseApplySnapshotChunk.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Result enum.
             * @name tendermint.abci.ResponseApplySnapshotChunk.Result
             * @enum {string}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} ACCEPT=1 ACCEPT value
             * @property {number} ABORT=2 ABORT value
             * @property {number} RETRY=3 RETRY value
             * @property {number} RETRY_SNAPSHOT=4 RETRY_SNAPSHOT value
             * @property {number} REJECT_SNAPSHOT=5 REJECT_SNAPSHOT value
             */
            ResponseApplySnapshotChunk.Result = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "ACCEPT"] = 1;
                values[valuesById[2] = "ABORT"] = 2;
                values[valuesById[3] = "RETRY"] = 3;
                values[valuesById[4] = "RETRY_SNAPSHOT"] = 4;
                values[valuesById[5] = "REJECT_SNAPSHOT"] = 5;
                return values;
            })();

            return ResponseApplySnapshotChunk;
        })();

        abci.ConsensusParams = (function() {

            /**
             * Properties of a ConsensusParams.
             * @memberof tendermint.abci
             * @interface IConsensusParams
             * @property {tendermint.abci.IBlockParams|null} [block] ConsensusParams block
             * @property {tendermint.types.IEvidenceParams|null} [evidence] ConsensusParams evidence
             * @property {tendermint.types.IValidatorParams|null} [validator] ConsensusParams validator
             * @property {tendermint.types.IVersionParams|null} [version] ConsensusParams version
             */

            /**
             * Constructs a new ConsensusParams.
             * @memberof tendermint.abci
             * @classdesc Represents a ConsensusParams.
             * @implements IConsensusParams
             * @constructor
             * @param {tendermint.abci.IConsensusParams=} [properties] Properties to set
             */
            function ConsensusParams(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConsensusParams block.
             * @member {tendermint.abci.IBlockParams|null|undefined} block
             * @memberof tendermint.abci.ConsensusParams
             * @instance
             */
            ConsensusParams.prototype.block = null;

            /**
             * ConsensusParams evidence.
             * @member {tendermint.types.IEvidenceParams|null|undefined} evidence
             * @memberof tendermint.abci.ConsensusParams
             * @instance
             */
            ConsensusParams.prototype.evidence = null;

            /**
             * ConsensusParams validator.
             * @member {tendermint.types.IValidatorParams|null|undefined} validator
             * @memberof tendermint.abci.ConsensusParams
             * @instance
             */
            ConsensusParams.prototype.validator = null;

            /**
             * ConsensusParams version.
             * @member {tendermint.types.IVersionParams|null|undefined} version
             * @memberof tendermint.abci.ConsensusParams
             * @instance
             */
            ConsensusParams.prototype.version = null;

            /**
             * Creates a new ConsensusParams instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ConsensusParams
             * @static
             * @param {tendermint.abci.IConsensusParams=} [properties] Properties to set
             * @returns {tendermint.abci.ConsensusParams} ConsensusParams instance
             */
            ConsensusParams.create = function create(properties) {
                return new ConsensusParams(properties);
            };

            /**
             * Encodes the specified ConsensusParams message. Does not implicitly {@link tendermint.abci.ConsensusParams.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ConsensusParams
             * @static
             * @param {tendermint.abci.IConsensusParams} message ConsensusParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConsensusParams.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.block != null && message.hasOwnProperty("block"))
                    $root.tendermint.abci.BlockParams.encode(message.block, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.evidence != null && message.hasOwnProperty("evidence"))
                    $root.tendermint.types.EvidenceParams.encode(message.evidence, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.validator != null && message.hasOwnProperty("validator"))
                    $root.tendermint.types.ValidatorParams.encode(message.validator, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.version != null && message.hasOwnProperty("version"))
                    $root.tendermint.types.VersionParams.encode(message.version, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ConsensusParams message, length delimited. Does not implicitly {@link tendermint.abci.ConsensusParams.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ConsensusParams
             * @static
             * @param {tendermint.abci.IConsensusParams} message ConsensusParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConsensusParams.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ConsensusParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ConsensusParams} ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConsensusParams.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ConsensusParams();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.block = $root.tendermint.abci.BlockParams.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.evidence = $root.tendermint.types.EvidenceParams.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.validator = $root.tendermint.types.ValidatorParams.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.version = $root.tendermint.types.VersionParams.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ConsensusParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ConsensusParams} ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConsensusParams.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConsensusParams message.
             * @function verify
             * @memberof tendermint.abci.ConsensusParams
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConsensusParams.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.block != null && message.hasOwnProperty("block")) {
                    var error = $root.tendermint.abci.BlockParams.verify(message.block);
                    if (error)
                        return "block." + error;
                }
                if (message.evidence != null && message.hasOwnProperty("evidence")) {
                    var error = $root.tendermint.types.EvidenceParams.verify(message.evidence);
                    if (error)
                        return "evidence." + error;
                }
                if (message.validator != null && message.hasOwnProperty("validator")) {
                    var error = $root.tendermint.types.ValidatorParams.verify(message.validator);
                    if (error)
                        return "validator." + error;
                }
                if (message.version != null && message.hasOwnProperty("version")) {
                    var error = $root.tendermint.types.VersionParams.verify(message.version);
                    if (error)
                        return "version." + error;
                }
                return null;
            };

            /**
             * Creates a ConsensusParams message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ConsensusParams
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ConsensusParams} ConsensusParams
             */
            ConsensusParams.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ConsensusParams)
                    return object;
                var message = new $root.tendermint.abci.ConsensusParams();
                if (object.block != null) {
                    if (typeof object.block !== "object")
                        throw TypeError(".tendermint.abci.ConsensusParams.block: object expected");
                    message.block = $root.tendermint.abci.BlockParams.fromObject(object.block);
                }
                if (object.evidence != null) {
                    if (typeof object.evidence !== "object")
                        throw TypeError(".tendermint.abci.ConsensusParams.evidence: object expected");
                    message.evidence = $root.tendermint.types.EvidenceParams.fromObject(object.evidence);
                }
                if (object.validator != null) {
                    if (typeof object.validator !== "object")
                        throw TypeError(".tendermint.abci.ConsensusParams.validator: object expected");
                    message.validator = $root.tendermint.types.ValidatorParams.fromObject(object.validator);
                }
                if (object.version != null) {
                    if (typeof object.version !== "object")
                        throw TypeError(".tendermint.abci.ConsensusParams.version: object expected");
                    message.version = $root.tendermint.types.VersionParams.fromObject(object.version);
                }
                return message;
            };

            /**
             * Creates a plain object from a ConsensusParams message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ConsensusParams
             * @static
             * @param {tendermint.abci.ConsensusParams} message ConsensusParams
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConsensusParams.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.block = null;
                    object.evidence = null;
                    object.validator = null;
                    object.version = null;
                }
                if (message.block != null && message.hasOwnProperty("block"))
                    object.block = $root.tendermint.abci.BlockParams.toObject(message.block, options);
                if (message.evidence != null && message.hasOwnProperty("evidence"))
                    object.evidence = $root.tendermint.types.EvidenceParams.toObject(message.evidence, options);
                if (message.validator != null && message.hasOwnProperty("validator"))
                    object.validator = $root.tendermint.types.ValidatorParams.toObject(message.validator, options);
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = $root.tendermint.types.VersionParams.toObject(message.version, options);
                return object;
            };

            /**
             * Converts this ConsensusParams to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ConsensusParams
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConsensusParams.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ConsensusParams;
        })();

        abci.BlockParams = (function() {

            /**
             * Properties of a BlockParams.
             * @memberof tendermint.abci
             * @interface IBlockParams
             * @property {number|Long|null} [maxBytes] BlockParams maxBytes
             * @property {number|Long|null} [maxGas] BlockParams maxGas
             */

            /**
             * Constructs a new BlockParams.
             * @memberof tendermint.abci
             * @classdesc Represents a BlockParams.
             * @implements IBlockParams
             * @constructor
             * @param {tendermint.abci.IBlockParams=} [properties] Properties to set
             */
            function BlockParams(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BlockParams maxBytes.
             * @member {number|Long} maxBytes
             * @memberof tendermint.abci.BlockParams
             * @instance
             */
            BlockParams.prototype.maxBytes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * BlockParams maxGas.
             * @member {number|Long} maxGas
             * @memberof tendermint.abci.BlockParams
             * @instance
             */
            BlockParams.prototype.maxGas = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new BlockParams instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.BlockParams
             * @static
             * @param {tendermint.abci.IBlockParams=} [properties] Properties to set
             * @returns {tendermint.abci.BlockParams} BlockParams instance
             */
            BlockParams.create = function create(properties) {
                return new BlockParams(properties);
            };

            /**
             * Encodes the specified BlockParams message. Does not implicitly {@link tendermint.abci.BlockParams.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.BlockParams
             * @static
             * @param {tendermint.abci.IBlockParams} message BlockParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BlockParams.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.maxBytes != null && message.hasOwnProperty("maxBytes"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.maxBytes);
                if (message.maxGas != null && message.hasOwnProperty("maxGas"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.maxGas);
                return writer;
            };

            /**
             * Encodes the specified BlockParams message, length delimited. Does not implicitly {@link tendermint.abci.BlockParams.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.BlockParams
             * @static
             * @param {tendermint.abci.IBlockParams} message BlockParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BlockParams.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BlockParams message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.BlockParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.BlockParams} BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BlockParams.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.BlockParams();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.maxBytes = reader.int64();
                        break;
                    case 2:
                        message.maxGas = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BlockParams message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.BlockParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.BlockParams} BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BlockParams.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BlockParams message.
             * @function verify
             * @memberof tendermint.abci.BlockParams
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BlockParams.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.maxBytes != null && message.hasOwnProperty("maxBytes"))
                    if (!$util.isInteger(message.maxBytes) && !(message.maxBytes && $util.isInteger(message.maxBytes.low) && $util.isInteger(message.maxBytes.high)))
                        return "maxBytes: integer|Long expected";
                if (message.maxGas != null && message.hasOwnProperty("maxGas"))
                    if (!$util.isInteger(message.maxGas) && !(message.maxGas && $util.isInteger(message.maxGas.low) && $util.isInteger(message.maxGas.high)))
                        return "maxGas: integer|Long expected";
                return null;
            };

            /**
             * Creates a BlockParams message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.BlockParams
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.BlockParams} BlockParams
             */
            BlockParams.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.BlockParams)
                    return object;
                var message = new $root.tendermint.abci.BlockParams();
                if (object.maxBytes != null)
                    if ($util.Long)
                        (message.maxBytes = $util.Long.fromValue(object.maxBytes)).unsigned = false;
                    else if (typeof object.maxBytes === "string")
                        message.maxBytes = parseInt(object.maxBytes, 10);
                    else if (typeof object.maxBytes === "number")
                        message.maxBytes = object.maxBytes;
                    else if (typeof object.maxBytes === "object")
                        message.maxBytes = new $util.LongBits(object.maxBytes.low >>> 0, object.maxBytes.high >>> 0).toNumber();
                if (object.maxGas != null)
                    if ($util.Long)
                        (message.maxGas = $util.Long.fromValue(object.maxGas)).unsigned = false;
                    else if (typeof object.maxGas === "string")
                        message.maxGas = parseInt(object.maxGas, 10);
                    else if (typeof object.maxGas === "number")
                        message.maxGas = object.maxGas;
                    else if (typeof object.maxGas === "object")
                        message.maxGas = new $util.LongBits(object.maxGas.low >>> 0, object.maxGas.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a BlockParams message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.BlockParams
             * @static
             * @param {tendermint.abci.BlockParams} message BlockParams
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BlockParams.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.maxBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.maxBytes = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.maxGas = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.maxGas = options.longs === String ? "0" : 0;
                }
                if (message.maxBytes != null && message.hasOwnProperty("maxBytes"))
                    if (typeof message.maxBytes === "number")
                        object.maxBytes = options.longs === String ? String(message.maxBytes) : message.maxBytes;
                    else
                        object.maxBytes = options.longs === String ? $util.Long.prototype.toString.call(message.maxBytes) : options.longs === Number ? new $util.LongBits(message.maxBytes.low >>> 0, message.maxBytes.high >>> 0).toNumber() : message.maxBytes;
                if (message.maxGas != null && message.hasOwnProperty("maxGas"))
                    if (typeof message.maxGas === "number")
                        object.maxGas = options.longs === String ? String(message.maxGas) : message.maxGas;
                    else
                        object.maxGas = options.longs === String ? $util.Long.prototype.toString.call(message.maxGas) : options.longs === Number ? new $util.LongBits(message.maxGas.low >>> 0, message.maxGas.high >>> 0).toNumber() : message.maxGas;
                return object;
            };

            /**
             * Converts this BlockParams to JSON.
             * @function toJSON
             * @memberof tendermint.abci.BlockParams
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BlockParams.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BlockParams;
        })();

        abci.LastCommitInfo = (function() {

            /**
             * Properties of a LastCommitInfo.
             * @memberof tendermint.abci
             * @interface ILastCommitInfo
             * @property {number|null} [round] LastCommitInfo round
             * @property {Array.<tendermint.abci.IVoteInfo>|null} [votes] LastCommitInfo votes
             */

            /**
             * Constructs a new LastCommitInfo.
             * @memberof tendermint.abci
             * @classdesc Represents a LastCommitInfo.
             * @implements ILastCommitInfo
             * @constructor
             * @param {tendermint.abci.ILastCommitInfo=} [properties] Properties to set
             */
            function LastCommitInfo(properties) {
                this.votes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LastCommitInfo round.
             * @member {number} round
             * @memberof tendermint.abci.LastCommitInfo
             * @instance
             */
            LastCommitInfo.prototype.round = 0;

            /**
             * LastCommitInfo votes.
             * @member {Array.<tendermint.abci.IVoteInfo>} votes
             * @memberof tendermint.abci.LastCommitInfo
             * @instance
             */
            LastCommitInfo.prototype.votes = $util.emptyArray;

            /**
             * Creates a new LastCommitInfo instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.LastCommitInfo
             * @static
             * @param {tendermint.abci.ILastCommitInfo=} [properties] Properties to set
             * @returns {tendermint.abci.LastCommitInfo} LastCommitInfo instance
             */
            LastCommitInfo.create = function create(properties) {
                return new LastCommitInfo(properties);
            };

            /**
             * Encodes the specified LastCommitInfo message. Does not implicitly {@link tendermint.abci.LastCommitInfo.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.LastCommitInfo
             * @static
             * @param {tendermint.abci.ILastCommitInfo} message LastCommitInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LastCommitInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.round != null && message.hasOwnProperty("round"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.round);
                if (message.votes != null && message.votes.length)
                    for (var i = 0; i < message.votes.length; ++i)
                        $root.tendermint.abci.VoteInfo.encode(message.votes[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified LastCommitInfo message, length delimited. Does not implicitly {@link tendermint.abci.LastCommitInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.LastCommitInfo
             * @static
             * @param {tendermint.abci.ILastCommitInfo} message LastCommitInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LastCommitInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LastCommitInfo message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.LastCommitInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.LastCommitInfo} LastCommitInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LastCommitInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.LastCommitInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.round = reader.int32();
                        break;
                    case 2:
                        if (!(message.votes && message.votes.length))
                            message.votes = [];
                        message.votes.push($root.tendermint.abci.VoteInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LastCommitInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.LastCommitInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.LastCommitInfo} LastCommitInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LastCommitInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LastCommitInfo message.
             * @function verify
             * @memberof tendermint.abci.LastCommitInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LastCommitInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.round != null && message.hasOwnProperty("round"))
                    if (!$util.isInteger(message.round))
                        return "round: integer expected";
                if (message.votes != null && message.hasOwnProperty("votes")) {
                    if (!Array.isArray(message.votes))
                        return "votes: array expected";
                    for (var i = 0; i < message.votes.length; ++i) {
                        var error = $root.tendermint.abci.VoteInfo.verify(message.votes[i]);
                        if (error)
                            return "votes." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a LastCommitInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.LastCommitInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.LastCommitInfo} LastCommitInfo
             */
            LastCommitInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.LastCommitInfo)
                    return object;
                var message = new $root.tendermint.abci.LastCommitInfo();
                if (object.round != null)
                    message.round = object.round | 0;
                if (object.votes) {
                    if (!Array.isArray(object.votes))
                        throw TypeError(".tendermint.abci.LastCommitInfo.votes: array expected");
                    message.votes = [];
                    for (var i = 0; i < object.votes.length; ++i) {
                        if (typeof object.votes[i] !== "object")
                            throw TypeError(".tendermint.abci.LastCommitInfo.votes: object expected");
                        message.votes[i] = $root.tendermint.abci.VoteInfo.fromObject(object.votes[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a LastCommitInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.LastCommitInfo
             * @static
             * @param {tendermint.abci.LastCommitInfo} message LastCommitInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LastCommitInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.votes = [];
                if (options.defaults)
                    object.round = 0;
                if (message.round != null && message.hasOwnProperty("round"))
                    object.round = message.round;
                if (message.votes && message.votes.length) {
                    object.votes = [];
                    for (var j = 0; j < message.votes.length; ++j)
                        object.votes[j] = $root.tendermint.abci.VoteInfo.toObject(message.votes[j], options);
                }
                return object;
            };

            /**
             * Converts this LastCommitInfo to JSON.
             * @function toJSON
             * @memberof tendermint.abci.LastCommitInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LastCommitInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LastCommitInfo;
        })();

        abci.Event = (function() {

            /**
             * Properties of an Event.
             * @memberof tendermint.abci
             * @interface IEvent
             * @property {string|null} [type] Event type
             * @property {Array.<tendermint.abci.IEventAttribute>|null} [attributes] Event attributes
             */

            /**
             * Constructs a new Event.
             * @memberof tendermint.abci
             * @classdesc Represents an Event.
             * @implements IEvent
             * @constructor
             * @param {tendermint.abci.IEvent=} [properties] Properties to set
             */
            function Event(properties) {
                this.attributes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Event type.
             * @member {string} type
             * @memberof tendermint.abci.Event
             * @instance
             */
            Event.prototype.type = "";

            /**
             * Event attributes.
             * @member {Array.<tendermint.abci.IEventAttribute>} attributes
             * @memberof tendermint.abci.Event
             * @instance
             */
            Event.prototype.attributes = $util.emptyArray;

            /**
             * Creates a new Event instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.Event
             * @static
             * @param {tendermint.abci.IEvent=} [properties] Properties to set
             * @returns {tendermint.abci.Event} Event instance
             */
            Event.create = function create(properties) {
                return new Event(properties);
            };

            /**
             * Encodes the specified Event message. Does not implicitly {@link tendermint.abci.Event.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.Event
             * @static
             * @param {tendermint.abci.IEvent} message Event message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Event.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.attributes != null && message.attributes.length)
                    for (var i = 0; i < message.attributes.length; ++i)
                        $root.tendermint.abci.EventAttribute.encode(message.attributes[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Event message, length delimited. Does not implicitly {@link tendermint.abci.Event.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.Event
             * @static
             * @param {tendermint.abci.IEvent} message Event message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Event.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Event message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.Event
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.Event} Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Event.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.Event();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.string();
                        break;
                    case 2:
                        if (!(message.attributes && message.attributes.length))
                            message.attributes = [];
                        message.attributes.push($root.tendermint.abci.EventAttribute.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Event message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.Event
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.Event} Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Event.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Event message.
             * @function verify
             * @memberof tendermint.abci.Event
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Event.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                    if (!Array.isArray(message.attributes))
                        return "attributes: array expected";
                    for (var i = 0; i < message.attributes.length; ++i) {
                        var error = $root.tendermint.abci.EventAttribute.verify(message.attributes[i]);
                        if (error)
                            return "attributes." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Event message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.Event
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.Event} Event
             */
            Event.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.Event)
                    return object;
                var message = new $root.tendermint.abci.Event();
                if (object.type != null)
                    message.type = String(object.type);
                if (object.attributes) {
                    if (!Array.isArray(object.attributes))
                        throw TypeError(".tendermint.abci.Event.attributes: array expected");
                    message.attributes = [];
                    for (var i = 0; i < object.attributes.length; ++i) {
                        if (typeof object.attributes[i] !== "object")
                            throw TypeError(".tendermint.abci.Event.attributes: object expected");
                        message.attributes[i] = $root.tendermint.abci.EventAttribute.fromObject(object.attributes[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an Event message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.Event
             * @static
             * @param {tendermint.abci.Event} message Event
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Event.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.attributes = [];
                if (options.defaults)
                    object.type = "";
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.attributes && message.attributes.length) {
                    object.attributes = [];
                    for (var j = 0; j < message.attributes.length; ++j)
                        object.attributes[j] = $root.tendermint.abci.EventAttribute.toObject(message.attributes[j], options);
                }
                return object;
            };

            /**
             * Converts this Event to JSON.
             * @function toJSON
             * @memberof tendermint.abci.Event
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Event.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Event;
        })();

        abci.EventAttribute = (function() {

            /**
             * Properties of an EventAttribute.
             * @memberof tendermint.abci
             * @interface IEventAttribute
             * @property {Uint8Array|null} [key] EventAttribute key
             * @property {Uint8Array|null} [value] EventAttribute value
             * @property {boolean|null} [index] EventAttribute index
             */

            /**
             * Constructs a new EventAttribute.
             * @memberof tendermint.abci
             * @classdesc Represents an EventAttribute.
             * @implements IEventAttribute
             * @constructor
             * @param {tendermint.abci.IEventAttribute=} [properties] Properties to set
             */
            function EventAttribute(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EventAttribute key.
             * @member {Uint8Array} key
             * @memberof tendermint.abci.EventAttribute
             * @instance
             */
            EventAttribute.prototype.key = $util.newBuffer([]);

            /**
             * EventAttribute value.
             * @member {Uint8Array} value
             * @memberof tendermint.abci.EventAttribute
             * @instance
             */
            EventAttribute.prototype.value = $util.newBuffer([]);

            /**
             * EventAttribute index.
             * @member {boolean} index
             * @memberof tendermint.abci.EventAttribute
             * @instance
             */
            EventAttribute.prototype.index = false;

            /**
             * Creates a new EventAttribute instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.EventAttribute
             * @static
             * @param {tendermint.abci.IEventAttribute=} [properties] Properties to set
             * @returns {tendermint.abci.EventAttribute} EventAttribute instance
             */
            EventAttribute.create = function create(properties) {
                return new EventAttribute(properties);
            };

            /**
             * Encodes the specified EventAttribute message. Does not implicitly {@link tendermint.abci.EventAttribute.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.EventAttribute
             * @static
             * @param {tendermint.abci.IEventAttribute} message EventAttribute message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventAttribute.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                if (message.index != null && message.hasOwnProperty("index"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.index);
                return writer;
            };

            /**
             * Encodes the specified EventAttribute message, length delimited. Does not implicitly {@link tendermint.abci.EventAttribute.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.EventAttribute
             * @static
             * @param {tendermint.abci.IEventAttribute} message EventAttribute message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventAttribute.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EventAttribute message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.EventAttribute
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.EventAttribute} EventAttribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventAttribute.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.EventAttribute();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.bytes();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    case 3:
                        message.index = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EventAttribute message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.EventAttribute
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.EventAttribute} EventAttribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventAttribute.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EventAttribute message.
             * @function verify
             * @memberof tendermint.abci.EventAttribute
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EventAttribute.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                        return "key: buffer expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                if (message.index != null && message.hasOwnProperty("index"))
                    if (typeof message.index !== "boolean")
                        return "index: boolean expected";
                return null;
            };

            /**
             * Creates an EventAttribute message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.EventAttribute
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.EventAttribute} EventAttribute
             */
            EventAttribute.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.EventAttribute)
                    return object;
                var message = new $root.tendermint.abci.EventAttribute();
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                    else if (object.key.length)
                        message.key = object.key;
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                if (object.index != null)
                    message.index = Boolean(object.index);
                return message;
            };

            /**
             * Creates a plain object from an EventAttribute message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.EventAttribute
             * @static
             * @param {tendermint.abci.EventAttribute} message EventAttribute
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventAttribute.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.key = "";
                    else {
                        object.key = [];
                        if (options.bytes !== Array)
                            object.key = $util.newBuffer(object.key);
                    }
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                    object.index = false;
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                return object;
            };

            /**
             * Converts this EventAttribute to JSON.
             * @function toJSON
             * @memberof tendermint.abci.EventAttribute
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EventAttribute.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EventAttribute;
        })();

        abci.TxResult = (function() {

            /**
             * Properties of a TxResult.
             * @memberof tendermint.abci
             * @interface ITxResult
             * @property {number|Long|null} [height] TxResult height
             * @property {number|null} [index] TxResult index
             * @property {Uint8Array|null} [tx] TxResult tx
             * @property {tendermint.abci.IResponseDeliverTx|null} [result] TxResult result
             */

            /**
             * Constructs a new TxResult.
             * @memberof tendermint.abci
             * @classdesc Represents a TxResult.
             * @implements ITxResult
             * @constructor
             * @param {tendermint.abci.ITxResult=} [properties] Properties to set
             */
            function TxResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TxResult height.
             * @member {number|Long} height
             * @memberof tendermint.abci.TxResult
             * @instance
             */
            TxResult.prototype.height = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TxResult index.
             * @member {number} index
             * @memberof tendermint.abci.TxResult
             * @instance
             */
            TxResult.prototype.index = 0;

            /**
             * TxResult tx.
             * @member {Uint8Array} tx
             * @memberof tendermint.abci.TxResult
             * @instance
             */
            TxResult.prototype.tx = $util.newBuffer([]);

            /**
             * TxResult result.
             * @member {tendermint.abci.IResponseDeliverTx|null|undefined} result
             * @memberof tendermint.abci.TxResult
             * @instance
             */
            TxResult.prototype.result = null;

            /**
             * Creates a new TxResult instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.TxResult
             * @static
             * @param {tendermint.abci.ITxResult=} [properties] Properties to set
             * @returns {tendermint.abci.TxResult} TxResult instance
             */
            TxResult.create = function create(properties) {
                return new TxResult(properties);
            };

            /**
             * Encodes the specified TxResult message. Does not implicitly {@link tendermint.abci.TxResult.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.TxResult
             * @static
             * @param {tendermint.abci.ITxResult} message TxResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.height != null && message.hasOwnProperty("height"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.height);
                if (message.index != null && message.hasOwnProperty("index"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.index);
                if (message.tx != null && message.hasOwnProperty("tx"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.tx);
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.tendermint.abci.ResponseDeliverTx.encode(message.result, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TxResult message, length delimited. Does not implicitly {@link tendermint.abci.TxResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.TxResult
             * @static
             * @param {tendermint.abci.ITxResult} message TxResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TxResult message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.TxResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.TxResult} TxResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.TxResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.height = reader.int64();
                        break;
                    case 2:
                        message.index = reader.uint32();
                        break;
                    case 3:
                        message.tx = reader.bytes();
                        break;
                    case 4:
                        message.result = $root.tendermint.abci.ResponseDeliverTx.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TxResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.TxResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.TxResult} TxResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TxResult message.
             * @function verify
             * @memberof tendermint.abci.TxResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TxResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                if (message.index != null && message.hasOwnProperty("index"))
                    if (!$util.isInteger(message.index))
                        return "index: integer expected";
                if (message.tx != null && message.hasOwnProperty("tx"))
                    if (!(message.tx && typeof message.tx.length === "number" || $util.isString(message.tx)))
                        return "tx: buffer expected";
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = $root.tendermint.abci.ResponseDeliverTx.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };

            /**
             * Creates a TxResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.TxResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.TxResult} TxResult
             */
            TxResult.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.TxResult)
                    return object;
                var message = new $root.tendermint.abci.TxResult();
                if (object.height != null)
                    if ($util.Long)
                        (message.height = $util.Long.fromValue(object.height)).unsigned = false;
                    else if (typeof object.height === "string")
                        message.height = parseInt(object.height, 10);
                    else if (typeof object.height === "number")
                        message.height = object.height;
                    else if (typeof object.height === "object")
                        message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber();
                if (object.index != null)
                    message.index = object.index >>> 0;
                if (object.tx != null)
                    if (typeof object.tx === "string")
                        $util.base64.decode(object.tx, message.tx = $util.newBuffer($util.base64.length(object.tx)), 0);
                    else if (object.tx.length)
                        message.tx = object.tx;
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".tendermint.abci.TxResult.result: object expected");
                    message.result = $root.tendermint.abci.ResponseDeliverTx.fromObject(object.result);
                }
                return message;
            };

            /**
             * Creates a plain object from a TxResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.TxResult
             * @static
             * @param {tendermint.abci.TxResult} message TxResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TxResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.height = options.longs === String ? "0" : 0;
                    object.index = 0;
                    if (options.bytes === String)
                        object.tx = "";
                    else {
                        object.tx = [];
                        if (options.bytes !== Array)
                            object.tx = $util.newBuffer(object.tx);
                    }
                    object.result = null;
                }
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber() : message.height;
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                if (message.tx != null && message.hasOwnProperty("tx"))
                    object.tx = options.bytes === String ? $util.base64.encode(message.tx, 0, message.tx.length) : options.bytes === Array ? Array.prototype.slice.call(message.tx) : message.tx;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.tendermint.abci.ResponseDeliverTx.toObject(message.result, options);
                return object;
            };

            /**
             * Converts this TxResult to JSON.
             * @function toJSON
             * @memberof tendermint.abci.TxResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TxResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TxResult;
        })();

        abci.Validator = (function() {

            /**
             * Properties of a Validator.
             * @memberof tendermint.abci
             * @interface IValidator
             * @property {Uint8Array|null} [address] Validator address
             * @property {number|Long|null} [power] Validator power
             */

            /**
             * Constructs a new Validator.
             * @memberof tendermint.abci
             * @classdesc Represents a Validator.
             * @implements IValidator
             * @constructor
             * @param {tendermint.abci.IValidator=} [properties] Properties to set
             */
            function Validator(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Validator address.
             * @member {Uint8Array} address
             * @memberof tendermint.abci.Validator
             * @instance
             */
            Validator.prototype.address = $util.newBuffer([]);

            /**
             * Validator power.
             * @member {number|Long} power
             * @memberof tendermint.abci.Validator
             * @instance
             */
            Validator.prototype.power = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Validator instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.Validator
             * @static
             * @param {tendermint.abci.IValidator=} [properties] Properties to set
             * @returns {tendermint.abci.Validator} Validator instance
             */
            Validator.create = function create(properties) {
                return new Validator(properties);
            };

            /**
             * Encodes the specified Validator message. Does not implicitly {@link tendermint.abci.Validator.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.Validator
             * @static
             * @param {tendermint.abci.IValidator} message Validator message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Validator.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.address != null && message.hasOwnProperty("address"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
                if (message.power != null && message.hasOwnProperty("power"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.power);
                return writer;
            };

            /**
             * Encodes the specified Validator message, length delimited. Does not implicitly {@link tendermint.abci.Validator.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.Validator
             * @static
             * @param {tendermint.abci.IValidator} message Validator message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Validator.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Validator message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.Validator
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.Validator} Validator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Validator.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.Validator();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.address = reader.bytes();
                        break;
                    case 3:
                        message.power = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Validator message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.Validator
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.Validator} Validator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Validator.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Validator message.
             * @function verify
             * @memberof tendermint.abci.Validator
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Validator.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                        return "address: buffer expected";
                if (message.power != null && message.hasOwnProperty("power"))
                    if (!$util.isInteger(message.power) && !(message.power && $util.isInteger(message.power.low) && $util.isInteger(message.power.high)))
                        return "power: integer|Long expected";
                return null;
            };

            /**
             * Creates a Validator message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.Validator
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.Validator} Validator
             */
            Validator.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.Validator)
                    return object;
                var message = new $root.tendermint.abci.Validator();
                if (object.address != null)
                    if (typeof object.address === "string")
                        $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                    else if (object.address.length)
                        message.address = object.address;
                if (object.power != null)
                    if ($util.Long)
                        (message.power = $util.Long.fromValue(object.power)).unsigned = false;
                    else if (typeof object.power === "string")
                        message.power = parseInt(object.power, 10);
                    else if (typeof object.power === "number")
                        message.power = object.power;
                    else if (typeof object.power === "object")
                        message.power = new $util.LongBits(object.power.low >>> 0, object.power.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Validator message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.Validator
             * @static
             * @param {tendermint.abci.Validator} message Validator
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Validator.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.address = "";
                    else {
                        object.address = [];
                        if (options.bytes !== Array)
                            object.address = $util.newBuffer(object.address);
                    }
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.power = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.power = options.longs === String ? "0" : 0;
                }
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
                if (message.power != null && message.hasOwnProperty("power"))
                    if (typeof message.power === "number")
                        object.power = options.longs === String ? String(message.power) : message.power;
                    else
                        object.power = options.longs === String ? $util.Long.prototype.toString.call(message.power) : options.longs === Number ? new $util.LongBits(message.power.low >>> 0, message.power.high >>> 0).toNumber() : message.power;
                return object;
            };

            /**
             * Converts this Validator to JSON.
             * @function toJSON
             * @memberof tendermint.abci.Validator
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Validator.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Validator;
        })();

        abci.ValidatorUpdate = (function() {

            /**
             * Properties of a ValidatorUpdate.
             * @memberof tendermint.abci
             * @interface IValidatorUpdate
             * @property {tendermint.crypto.IPublicKey|null} [pubKey] ValidatorUpdate pubKey
             * @property {number|Long|null} [power] ValidatorUpdate power
             */

            /**
             * Constructs a new ValidatorUpdate.
             * @memberof tendermint.abci
             * @classdesc Represents a ValidatorUpdate.
             * @implements IValidatorUpdate
             * @constructor
             * @param {tendermint.abci.IValidatorUpdate=} [properties] Properties to set
             */
            function ValidatorUpdate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ValidatorUpdate pubKey.
             * @member {tendermint.crypto.IPublicKey|null|undefined} pubKey
             * @memberof tendermint.abci.ValidatorUpdate
             * @instance
             */
            ValidatorUpdate.prototype.pubKey = null;

            /**
             * ValidatorUpdate power.
             * @member {number|Long} power
             * @memberof tendermint.abci.ValidatorUpdate
             * @instance
             */
            ValidatorUpdate.prototype.power = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ValidatorUpdate instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.ValidatorUpdate
             * @static
             * @param {tendermint.abci.IValidatorUpdate=} [properties] Properties to set
             * @returns {tendermint.abci.ValidatorUpdate} ValidatorUpdate instance
             */
            ValidatorUpdate.create = function create(properties) {
                return new ValidatorUpdate(properties);
            };

            /**
             * Encodes the specified ValidatorUpdate message. Does not implicitly {@link tendermint.abci.ValidatorUpdate.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.ValidatorUpdate
             * @static
             * @param {tendermint.abci.IValidatorUpdate} message ValidatorUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ValidatorUpdate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pubKey != null && message.hasOwnProperty("pubKey"))
                    $root.tendermint.crypto.PublicKey.encode(message.pubKey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.power != null && message.hasOwnProperty("power"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.power);
                return writer;
            };

            /**
             * Encodes the specified ValidatorUpdate message, length delimited. Does not implicitly {@link tendermint.abci.ValidatorUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.ValidatorUpdate
             * @static
             * @param {tendermint.abci.IValidatorUpdate} message ValidatorUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ValidatorUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ValidatorUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.ValidatorUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.ValidatorUpdate} ValidatorUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ValidatorUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.ValidatorUpdate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.pubKey = $root.tendermint.crypto.PublicKey.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.power = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ValidatorUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.ValidatorUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.ValidatorUpdate} ValidatorUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ValidatorUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ValidatorUpdate message.
             * @function verify
             * @memberof tendermint.abci.ValidatorUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ValidatorUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pubKey != null && message.hasOwnProperty("pubKey")) {
                    var error = $root.tendermint.crypto.PublicKey.verify(message.pubKey);
                    if (error)
                        return "pubKey." + error;
                }
                if (message.power != null && message.hasOwnProperty("power"))
                    if (!$util.isInteger(message.power) && !(message.power && $util.isInteger(message.power.low) && $util.isInteger(message.power.high)))
                        return "power: integer|Long expected";
                return null;
            };

            /**
             * Creates a ValidatorUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.ValidatorUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.ValidatorUpdate} ValidatorUpdate
             */
            ValidatorUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.ValidatorUpdate)
                    return object;
                var message = new $root.tendermint.abci.ValidatorUpdate();
                if (object.pubKey != null) {
                    if (typeof object.pubKey !== "object")
                        throw TypeError(".tendermint.abci.ValidatorUpdate.pubKey: object expected");
                    message.pubKey = $root.tendermint.crypto.PublicKey.fromObject(object.pubKey);
                }
                if (object.power != null)
                    if ($util.Long)
                        (message.power = $util.Long.fromValue(object.power)).unsigned = false;
                    else if (typeof object.power === "string")
                        message.power = parseInt(object.power, 10);
                    else if (typeof object.power === "number")
                        message.power = object.power;
                    else if (typeof object.power === "object")
                        message.power = new $util.LongBits(object.power.low >>> 0, object.power.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a ValidatorUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.ValidatorUpdate
             * @static
             * @param {tendermint.abci.ValidatorUpdate} message ValidatorUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ValidatorUpdate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.pubKey = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.power = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.power = options.longs === String ? "0" : 0;
                }
                if (message.pubKey != null && message.hasOwnProperty("pubKey"))
                    object.pubKey = $root.tendermint.crypto.PublicKey.toObject(message.pubKey, options);
                if (message.power != null && message.hasOwnProperty("power"))
                    if (typeof message.power === "number")
                        object.power = options.longs === String ? String(message.power) : message.power;
                    else
                        object.power = options.longs === String ? $util.Long.prototype.toString.call(message.power) : options.longs === Number ? new $util.LongBits(message.power.low >>> 0, message.power.high >>> 0).toNumber() : message.power;
                return object;
            };

            /**
             * Converts this ValidatorUpdate to JSON.
             * @function toJSON
             * @memberof tendermint.abci.ValidatorUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ValidatorUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ValidatorUpdate;
        })();

        abci.VoteInfo = (function() {

            /**
             * Properties of a VoteInfo.
             * @memberof tendermint.abci
             * @interface IVoteInfo
             * @property {tendermint.abci.IValidator|null} [validator] VoteInfo validator
             * @property {boolean|null} [signedLastBlock] VoteInfo signedLastBlock
             */

            /**
             * Constructs a new VoteInfo.
             * @memberof tendermint.abci
             * @classdesc Represents a VoteInfo.
             * @implements IVoteInfo
             * @constructor
             * @param {tendermint.abci.IVoteInfo=} [properties] Properties to set
             */
            function VoteInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VoteInfo validator.
             * @member {tendermint.abci.IValidator|null|undefined} validator
             * @memberof tendermint.abci.VoteInfo
             * @instance
             */
            VoteInfo.prototype.validator = null;

            /**
             * VoteInfo signedLastBlock.
             * @member {boolean} signedLastBlock
             * @memberof tendermint.abci.VoteInfo
             * @instance
             */
            VoteInfo.prototype.signedLastBlock = false;

            /**
             * Creates a new VoteInfo instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.VoteInfo
             * @static
             * @param {tendermint.abci.IVoteInfo=} [properties] Properties to set
             * @returns {tendermint.abci.VoteInfo} VoteInfo instance
             */
            VoteInfo.create = function create(properties) {
                return new VoteInfo(properties);
            };

            /**
             * Encodes the specified VoteInfo message. Does not implicitly {@link tendermint.abci.VoteInfo.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.VoteInfo
             * @static
             * @param {tendermint.abci.IVoteInfo} message VoteInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VoteInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.validator != null && message.hasOwnProperty("validator"))
                    $root.tendermint.abci.Validator.encode(message.validator, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.signedLastBlock != null && message.hasOwnProperty("signedLastBlock"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.signedLastBlock);
                return writer;
            };

            /**
             * Encodes the specified VoteInfo message, length delimited. Does not implicitly {@link tendermint.abci.VoteInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.VoteInfo
             * @static
             * @param {tendermint.abci.IVoteInfo} message VoteInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VoteInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VoteInfo message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.VoteInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.VoteInfo} VoteInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VoteInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.VoteInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.validator = $root.tendermint.abci.Validator.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.signedLastBlock = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a VoteInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.VoteInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.VoteInfo} VoteInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VoteInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VoteInfo message.
             * @function verify
             * @memberof tendermint.abci.VoteInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VoteInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.validator != null && message.hasOwnProperty("validator")) {
                    var error = $root.tendermint.abci.Validator.verify(message.validator);
                    if (error)
                        return "validator." + error;
                }
                if (message.signedLastBlock != null && message.hasOwnProperty("signedLastBlock"))
                    if (typeof message.signedLastBlock !== "boolean")
                        return "signedLastBlock: boolean expected";
                return null;
            };

            /**
             * Creates a VoteInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.VoteInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.VoteInfo} VoteInfo
             */
            VoteInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.VoteInfo)
                    return object;
                var message = new $root.tendermint.abci.VoteInfo();
                if (object.validator != null) {
                    if (typeof object.validator !== "object")
                        throw TypeError(".tendermint.abci.VoteInfo.validator: object expected");
                    message.validator = $root.tendermint.abci.Validator.fromObject(object.validator);
                }
                if (object.signedLastBlock != null)
                    message.signedLastBlock = Boolean(object.signedLastBlock);
                return message;
            };

            /**
             * Creates a plain object from a VoteInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.VoteInfo
             * @static
             * @param {tendermint.abci.VoteInfo} message VoteInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VoteInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.validator = null;
                    object.signedLastBlock = false;
                }
                if (message.validator != null && message.hasOwnProperty("validator"))
                    object.validator = $root.tendermint.abci.Validator.toObject(message.validator, options);
                if (message.signedLastBlock != null && message.hasOwnProperty("signedLastBlock"))
                    object.signedLastBlock = message.signedLastBlock;
                return object;
            };

            /**
             * Converts this VoteInfo to JSON.
             * @function toJSON
             * @memberof tendermint.abci.VoteInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VoteInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return VoteInfo;
        })();

        /**
         * EvidenceType enum.
         * @name tendermint.abci.EvidenceType
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} DUPLICATE_VOTE=1 DUPLICATE_VOTE value
         * @property {number} LIGHT_CLIENT_ATTACK=2 LIGHT_CLIENT_ATTACK value
         */
        abci.EvidenceType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "DUPLICATE_VOTE"] = 1;
            values[valuesById[2] = "LIGHT_CLIENT_ATTACK"] = 2;
            return values;
        })();

        abci.Evidence = (function() {

            /**
             * Properties of an Evidence.
             * @memberof tendermint.abci
             * @interface IEvidence
             * @property {tendermint.abci.EvidenceType|null} [type] Evidence type
             * @property {tendermint.abci.IValidator|null} [validator] Evidence validator
             * @property {number|Long|null} [height] Evidence height
             * @property {google.protobuf.ITimestamp|null} [time] Evidence time
             * @property {number|Long|null} [totalVotingPower] Evidence totalVotingPower
             */

            /**
             * Constructs a new Evidence.
             * @memberof tendermint.abci
             * @classdesc Represents an Evidence.
             * @implements IEvidence
             * @constructor
             * @param {tendermint.abci.IEvidence=} [properties] Properties to set
             */
            function Evidence(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Evidence type.
             * @member {tendermint.abci.EvidenceType} type
             * @memberof tendermint.abci.Evidence
             * @instance
             */
            Evidence.prototype.type = 0;

            /**
             * Evidence validator.
             * @member {tendermint.abci.IValidator|null|undefined} validator
             * @memberof tendermint.abci.Evidence
             * @instance
             */
            Evidence.prototype.validator = null;

            /**
             * Evidence height.
             * @member {number|Long} height
             * @memberof tendermint.abci.Evidence
             * @instance
             */
            Evidence.prototype.height = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Evidence time.
             * @member {google.protobuf.ITimestamp|null|undefined} time
             * @memberof tendermint.abci.Evidence
             * @instance
             */
            Evidence.prototype.time = null;

            /**
             * Evidence totalVotingPower.
             * @member {number|Long} totalVotingPower
             * @memberof tendermint.abci.Evidence
             * @instance
             */
            Evidence.prototype.totalVotingPower = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Evidence instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.Evidence
             * @static
             * @param {tendermint.abci.IEvidence=} [properties] Properties to set
             * @returns {tendermint.abci.Evidence} Evidence instance
             */
            Evidence.create = function create(properties) {
                return new Evidence(properties);
            };

            /**
             * Encodes the specified Evidence message. Does not implicitly {@link tendermint.abci.Evidence.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.Evidence
             * @static
             * @param {tendermint.abci.IEvidence} message Evidence message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Evidence.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.validator != null && message.hasOwnProperty("validator"))
                    $root.tendermint.abci.Validator.encode(message.validator, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.height != null && message.hasOwnProperty("height"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.height);
                if (message.time != null && message.hasOwnProperty("time"))
                    $root.google.protobuf.Timestamp.encode(message.time, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.totalVotingPower != null && message.hasOwnProperty("totalVotingPower"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.totalVotingPower);
                return writer;
            };

            /**
             * Encodes the specified Evidence message, length delimited. Does not implicitly {@link tendermint.abci.Evidence.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.Evidence
             * @static
             * @param {tendermint.abci.IEvidence} message Evidence message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Evidence.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Evidence message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.Evidence
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.Evidence} Evidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Evidence.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.Evidence();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.validator = $root.tendermint.abci.Validator.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.height = reader.int64();
                        break;
                    case 4:
                        message.time = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.totalVotingPower = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Evidence message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.Evidence
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.Evidence} Evidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Evidence.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Evidence message.
             * @function verify
             * @memberof tendermint.abci.Evidence
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Evidence.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.validator != null && message.hasOwnProperty("validator")) {
                    var error = $root.tendermint.abci.Validator.verify(message.validator);
                    if (error)
                        return "validator." + error;
                }
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                if (message.time != null && message.hasOwnProperty("time")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.time);
                    if (error)
                        return "time." + error;
                }
                if (message.totalVotingPower != null && message.hasOwnProperty("totalVotingPower"))
                    if (!$util.isInteger(message.totalVotingPower) && !(message.totalVotingPower && $util.isInteger(message.totalVotingPower.low) && $util.isInteger(message.totalVotingPower.high)))
                        return "totalVotingPower: integer|Long expected";
                return null;
            };

            /**
             * Creates an Evidence message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.Evidence
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.Evidence} Evidence
             */
            Evidence.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.Evidence)
                    return object;
                var message = new $root.tendermint.abci.Evidence();
                switch (object.type) {
                case "UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "DUPLICATE_VOTE":
                case 1:
                    message.type = 1;
                    break;
                case "LIGHT_CLIENT_ATTACK":
                case 2:
                    message.type = 2;
                    break;
                }
                if (object.validator != null) {
                    if (typeof object.validator !== "object")
                        throw TypeError(".tendermint.abci.Evidence.validator: object expected");
                    message.validator = $root.tendermint.abci.Validator.fromObject(object.validator);
                }
                if (object.height != null)
                    if ($util.Long)
                        (message.height = $util.Long.fromValue(object.height)).unsigned = false;
                    else if (typeof object.height === "string")
                        message.height = parseInt(object.height, 10);
                    else if (typeof object.height === "number")
                        message.height = object.height;
                    else if (typeof object.height === "object")
                        message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber();
                if (object.time != null) {
                    if (typeof object.time !== "object")
                        throw TypeError(".tendermint.abci.Evidence.time: object expected");
                    message.time = $root.google.protobuf.Timestamp.fromObject(object.time);
                }
                if (object.totalVotingPower != null)
                    if ($util.Long)
                        (message.totalVotingPower = $util.Long.fromValue(object.totalVotingPower)).unsigned = false;
                    else if (typeof object.totalVotingPower === "string")
                        message.totalVotingPower = parseInt(object.totalVotingPower, 10);
                    else if (typeof object.totalVotingPower === "number")
                        message.totalVotingPower = object.totalVotingPower;
                    else if (typeof object.totalVotingPower === "object")
                        message.totalVotingPower = new $util.LongBits(object.totalVotingPower.low >>> 0, object.totalVotingPower.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Evidence message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.Evidence
             * @static
             * @param {tendermint.abci.Evidence} message Evidence
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Evidence.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "UNKNOWN" : 0;
                    object.validator = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.height = options.longs === String ? "0" : 0;
                    object.time = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.totalVotingPower = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.totalVotingPower = options.longs === String ? "0" : 0;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.tendermint.abci.EvidenceType[message.type] : message.type;
                if (message.validator != null && message.hasOwnProperty("validator"))
                    object.validator = $root.tendermint.abci.Validator.toObject(message.validator, options);
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber() : message.height;
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = $root.google.protobuf.Timestamp.toObject(message.time, options);
                if (message.totalVotingPower != null && message.hasOwnProperty("totalVotingPower"))
                    if (typeof message.totalVotingPower === "number")
                        object.totalVotingPower = options.longs === String ? String(message.totalVotingPower) : message.totalVotingPower;
                    else
                        object.totalVotingPower = options.longs === String ? $util.Long.prototype.toString.call(message.totalVotingPower) : options.longs === Number ? new $util.LongBits(message.totalVotingPower.low >>> 0, message.totalVotingPower.high >>> 0).toNumber() : message.totalVotingPower;
                return object;
            };

            /**
             * Converts this Evidence to JSON.
             * @function toJSON
             * @memberof tendermint.abci.Evidence
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Evidence.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Evidence;
        })();

        abci.Snapshot = (function() {

            /**
             * Properties of a Snapshot.
             * @memberof tendermint.abci
             * @interface ISnapshot
             * @property {number|Long|null} [height] Snapshot height
             * @property {number|null} [format] Snapshot format
             * @property {number|null} [chunks] Snapshot chunks
             * @property {Uint8Array|null} [hash] Snapshot hash
             * @property {Uint8Array|null} [metadata] Snapshot metadata
             */

            /**
             * Constructs a new Snapshot.
             * @memberof tendermint.abci
             * @classdesc Represents a Snapshot.
             * @implements ISnapshot
             * @constructor
             * @param {tendermint.abci.ISnapshot=} [properties] Properties to set
             */
            function Snapshot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Snapshot height.
             * @member {number|Long} height
             * @memberof tendermint.abci.Snapshot
             * @instance
             */
            Snapshot.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Snapshot format.
             * @member {number} format
             * @memberof tendermint.abci.Snapshot
             * @instance
             */
            Snapshot.prototype.format = 0;

            /**
             * Snapshot chunks.
             * @member {number} chunks
             * @memberof tendermint.abci.Snapshot
             * @instance
             */
            Snapshot.prototype.chunks = 0;

            /**
             * Snapshot hash.
             * @member {Uint8Array} hash
             * @memberof tendermint.abci.Snapshot
             * @instance
             */
            Snapshot.prototype.hash = $util.newBuffer([]);

            /**
             * Snapshot metadata.
             * @member {Uint8Array} metadata
             * @memberof tendermint.abci.Snapshot
             * @instance
             */
            Snapshot.prototype.metadata = $util.newBuffer([]);

            /**
             * Creates a new Snapshot instance using the specified properties.
             * @function create
             * @memberof tendermint.abci.Snapshot
             * @static
             * @param {tendermint.abci.ISnapshot=} [properties] Properties to set
             * @returns {tendermint.abci.Snapshot} Snapshot instance
             */
            Snapshot.create = function create(properties) {
                return new Snapshot(properties);
            };

            /**
             * Encodes the specified Snapshot message. Does not implicitly {@link tendermint.abci.Snapshot.verify|verify} messages.
             * @function encode
             * @memberof tendermint.abci.Snapshot
             * @static
             * @param {tendermint.abci.ISnapshot} message Snapshot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Snapshot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.height != null && message.hasOwnProperty("height"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.height);
                if (message.format != null && message.hasOwnProperty("format"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.format);
                if (message.chunks != null && message.hasOwnProperty("chunks"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.chunks);
                if (message.hash != null && message.hasOwnProperty("hash"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.hash);
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.metadata);
                return writer;
            };

            /**
             * Encodes the specified Snapshot message, length delimited. Does not implicitly {@link tendermint.abci.Snapshot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.abci.Snapshot
             * @static
             * @param {tendermint.abci.ISnapshot} message Snapshot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Snapshot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Snapshot message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.abci.Snapshot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.abci.Snapshot} Snapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Snapshot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.abci.Snapshot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.height = reader.uint64();
                        break;
                    case 2:
                        message.format = reader.uint32();
                        break;
                    case 3:
                        message.chunks = reader.uint32();
                        break;
                    case 4:
                        message.hash = reader.bytes();
                        break;
                    case 5:
                        message.metadata = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Snapshot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.abci.Snapshot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.abci.Snapshot} Snapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Snapshot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Snapshot message.
             * @function verify
             * @memberof tendermint.abci.Snapshot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Snapshot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                if (message.format != null && message.hasOwnProperty("format"))
                    if (!$util.isInteger(message.format))
                        return "format: integer expected";
                if (message.chunks != null && message.hasOwnProperty("chunks"))
                    if (!$util.isInteger(message.chunks))
                        return "chunks: integer expected";
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                        return "hash: buffer expected";
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    if (!(message.metadata && typeof message.metadata.length === "number" || $util.isString(message.metadata)))
                        return "metadata: buffer expected";
                return null;
            };

            /**
             * Creates a Snapshot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.abci.Snapshot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.abci.Snapshot} Snapshot
             */
            Snapshot.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.abci.Snapshot)
                    return object;
                var message = new $root.tendermint.abci.Snapshot();
                if (object.height != null)
                    if ($util.Long)
                        (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                    else if (typeof object.height === "string")
                        message.height = parseInt(object.height, 10);
                    else if (typeof object.height === "number")
                        message.height = object.height;
                    else if (typeof object.height === "object")
                        message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                if (object.format != null)
                    message.format = object.format >>> 0;
                if (object.chunks != null)
                    message.chunks = object.chunks >>> 0;
                if (object.hash != null)
                    if (typeof object.hash === "string")
                        $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                    else if (object.hash.length)
                        message.hash = object.hash;
                if (object.metadata != null)
                    if (typeof object.metadata === "string")
                        $util.base64.decode(object.metadata, message.metadata = $util.newBuffer($util.base64.length(object.metadata)), 0);
                    else if (object.metadata.length)
                        message.metadata = object.metadata;
                return message;
            };

            /**
             * Creates a plain object from a Snapshot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.abci.Snapshot
             * @static
             * @param {tendermint.abci.Snapshot} message Snapshot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Snapshot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.height = options.longs === String ? "0" : 0;
                    object.format = 0;
                    object.chunks = 0;
                    if (options.bytes === String)
                        object.hash = "";
                    else {
                        object.hash = [];
                        if (options.bytes !== Array)
                            object.hash = $util.newBuffer(object.hash);
                    }
                    if (options.bytes === String)
                        object.metadata = "";
                    else {
                        object.metadata = [];
                        if (options.bytes !== Array)
                            object.metadata = $util.newBuffer(object.metadata);
                    }
                }
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                if (message.format != null && message.hasOwnProperty("format"))
                    object.format = message.format;
                if (message.chunks != null && message.hasOwnProperty("chunks"))
                    object.chunks = message.chunks;
                if (message.hash != null && message.hasOwnProperty("hash"))
                    object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    object.metadata = options.bytes === String ? $util.base64.encode(message.metadata, 0, message.metadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.metadata) : message.metadata;
                return object;
            };

            /**
             * Converts this Snapshot to JSON.
             * @function toJSON
             * @memberof tendermint.abci.Snapshot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Snapshot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Snapshot;
        })();

        abci.ABCIApplication = (function() {

            /**
             * Constructs a new ABCIApplication service.
             * @memberof tendermint.abci
             * @classdesc Represents a ABCIApplication
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function ABCIApplication(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (ABCIApplication.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ABCIApplication;

            /**
             * Creates new ABCIApplication service using the specified rpc implementation.
             * @function create
             * @memberof tendermint.abci.ABCIApplication
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {ABCIApplication} RPC service. Useful where requests and/or responses are streamed.
             */
            ABCIApplication.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#echo}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef EchoCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseEcho} [response] ResponseEcho
             */

            /**
             * Calls Echo.
             * @function echo
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestEcho} request RequestEcho message or plain object
             * @param {tendermint.abci.ABCIApplication.EchoCallback} callback Node-style callback called with the error, if any, and ResponseEcho
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.echo = function echo(request, callback) {
                return this.rpcCall(echo, $root.tendermint.abci.RequestEcho, $root.tendermint.abci.ResponseEcho, request, callback);
            }, "name", { value: "Echo" });

            /**
             * Calls Echo.
             * @function echo
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestEcho} request RequestEcho message or plain object
             * @returns {Promise<tendermint.abci.ResponseEcho>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#flush}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef FlushCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseFlush} [response] ResponseFlush
             */

            /**
             * Calls Flush.
             * @function flush
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestFlush} request RequestFlush message or plain object
             * @param {tendermint.abci.ABCIApplication.FlushCallback} callback Node-style callback called with the error, if any, and ResponseFlush
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.flush = function flush(request, callback) {
                return this.rpcCall(flush, $root.tendermint.abci.RequestFlush, $root.tendermint.abci.ResponseFlush, request, callback);
            }, "name", { value: "Flush" });

            /**
             * Calls Flush.
             * @function flush
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestFlush} request RequestFlush message or plain object
             * @returns {Promise<tendermint.abci.ResponseFlush>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#info}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef InfoCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseInfo} [response] ResponseInfo
             */

            /**
             * Calls Info.
             * @function info
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestInfo} request RequestInfo message or plain object
             * @param {tendermint.abci.ABCIApplication.InfoCallback} callback Node-style callback called with the error, if any, and ResponseInfo
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.info = function info(request, callback) {
                return this.rpcCall(info, $root.tendermint.abci.RequestInfo, $root.tendermint.abci.ResponseInfo, request, callback);
            }, "name", { value: "Info" });

            /**
             * Calls Info.
             * @function info
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestInfo} request RequestInfo message or plain object
             * @returns {Promise<tendermint.abci.ResponseInfo>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#setOption}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef SetOptionCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseSetOption} [response] ResponseSetOption
             */

            /**
             * Calls SetOption.
             * @function setOption
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestSetOption} request RequestSetOption message or plain object
             * @param {tendermint.abci.ABCIApplication.SetOptionCallback} callback Node-style callback called with the error, if any, and ResponseSetOption
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.setOption = function setOption(request, callback) {
                return this.rpcCall(setOption, $root.tendermint.abci.RequestSetOption, $root.tendermint.abci.ResponseSetOption, request, callback);
            }, "name", { value: "SetOption" });

            /**
             * Calls SetOption.
             * @function setOption
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestSetOption} request RequestSetOption message or plain object
             * @returns {Promise<tendermint.abci.ResponseSetOption>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#deliverTx}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef DeliverTxCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseDeliverTx} [response] ResponseDeliverTx
             */

            /**
             * Calls DeliverTx.
             * @function deliverTx
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestDeliverTx} request RequestDeliverTx message or plain object
             * @param {tendermint.abci.ABCIApplication.DeliverTxCallback} callback Node-style callback called with the error, if any, and ResponseDeliverTx
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.deliverTx = function deliverTx(request, callback) {
                return this.rpcCall(deliverTx, $root.tendermint.abci.RequestDeliverTx, $root.tendermint.abci.ResponseDeliverTx, request, callback);
            }, "name", { value: "DeliverTx" });

            /**
             * Calls DeliverTx.
             * @function deliverTx
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestDeliverTx} request RequestDeliverTx message or plain object
             * @returns {Promise<tendermint.abci.ResponseDeliverTx>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#checkTx}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef CheckTxCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseCheckTx} [response] ResponseCheckTx
             */

            /**
             * Calls CheckTx.
             * @function checkTx
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestCheckTx} request RequestCheckTx message or plain object
             * @param {tendermint.abci.ABCIApplication.CheckTxCallback} callback Node-style callback called with the error, if any, and ResponseCheckTx
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.checkTx = function checkTx(request, callback) {
                return this.rpcCall(checkTx, $root.tendermint.abci.RequestCheckTx, $root.tendermint.abci.ResponseCheckTx, request, callback);
            }, "name", { value: "CheckTx" });

            /**
             * Calls CheckTx.
             * @function checkTx
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestCheckTx} request RequestCheckTx message or plain object
             * @returns {Promise<tendermint.abci.ResponseCheckTx>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#query}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef QueryCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseQuery} [response] ResponseQuery
             */

            /**
             * Calls Query.
             * @function query
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestQuery} request RequestQuery message or plain object
             * @param {tendermint.abci.ABCIApplication.QueryCallback} callback Node-style callback called with the error, if any, and ResponseQuery
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.query = function query(request, callback) {
                return this.rpcCall(query, $root.tendermint.abci.RequestQuery, $root.tendermint.abci.ResponseQuery, request, callback);
            }, "name", { value: "Query" });

            /**
             * Calls Query.
             * @function query
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestQuery} request RequestQuery message or plain object
             * @returns {Promise<tendermint.abci.ResponseQuery>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#commit}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef CommitCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseCommit} [response] ResponseCommit
             */

            /**
             * Calls Commit.
             * @function commit
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestCommit} request RequestCommit message or plain object
             * @param {tendermint.abci.ABCIApplication.CommitCallback} callback Node-style callback called with the error, if any, and ResponseCommit
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.commit = function commit(request, callback) {
                return this.rpcCall(commit, $root.tendermint.abci.RequestCommit, $root.tendermint.abci.ResponseCommit, request, callback);
            }, "name", { value: "Commit" });

            /**
             * Calls Commit.
             * @function commit
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestCommit} request RequestCommit message or plain object
             * @returns {Promise<tendermint.abci.ResponseCommit>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#initChain}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef InitChainCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseInitChain} [response] ResponseInitChain
             */

            /**
             * Calls InitChain.
             * @function initChain
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestInitChain} request RequestInitChain message or plain object
             * @param {tendermint.abci.ABCIApplication.InitChainCallback} callback Node-style callback called with the error, if any, and ResponseInitChain
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.initChain = function initChain(request, callback) {
                return this.rpcCall(initChain, $root.tendermint.abci.RequestInitChain, $root.tendermint.abci.ResponseInitChain, request, callback);
            }, "name", { value: "InitChain" });

            /**
             * Calls InitChain.
             * @function initChain
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestInitChain} request RequestInitChain message or plain object
             * @returns {Promise<tendermint.abci.ResponseInitChain>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#beginBlock}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef BeginBlockCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseBeginBlock} [response] ResponseBeginBlock
             */

            /**
             * Calls BeginBlock.
             * @function beginBlock
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestBeginBlock} request RequestBeginBlock message or plain object
             * @param {tendermint.abci.ABCIApplication.BeginBlockCallback} callback Node-style callback called with the error, if any, and ResponseBeginBlock
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.beginBlock = function beginBlock(request, callback) {
                return this.rpcCall(beginBlock, $root.tendermint.abci.RequestBeginBlock, $root.tendermint.abci.ResponseBeginBlock, request, callback);
            }, "name", { value: "BeginBlock" });

            /**
             * Calls BeginBlock.
             * @function beginBlock
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestBeginBlock} request RequestBeginBlock message or plain object
             * @returns {Promise<tendermint.abci.ResponseBeginBlock>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#endBlock}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef EndBlockCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseEndBlock} [response] ResponseEndBlock
             */

            /**
             * Calls EndBlock.
             * @function endBlock
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestEndBlock} request RequestEndBlock message or plain object
             * @param {tendermint.abci.ABCIApplication.EndBlockCallback} callback Node-style callback called with the error, if any, and ResponseEndBlock
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.endBlock = function endBlock(request, callback) {
                return this.rpcCall(endBlock, $root.tendermint.abci.RequestEndBlock, $root.tendermint.abci.ResponseEndBlock, request, callback);
            }, "name", { value: "EndBlock" });

            /**
             * Calls EndBlock.
             * @function endBlock
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestEndBlock} request RequestEndBlock message or plain object
             * @returns {Promise<tendermint.abci.ResponseEndBlock>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#listSnapshots}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef ListSnapshotsCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseListSnapshots} [response] ResponseListSnapshots
             */

            /**
             * Calls ListSnapshots.
             * @function listSnapshots
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestListSnapshots} request RequestListSnapshots message or plain object
             * @param {tendermint.abci.ABCIApplication.ListSnapshotsCallback} callback Node-style callback called with the error, if any, and ResponseListSnapshots
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.listSnapshots = function listSnapshots(request, callback) {
                return this.rpcCall(listSnapshots, $root.tendermint.abci.RequestListSnapshots, $root.tendermint.abci.ResponseListSnapshots, request, callback);
            }, "name", { value: "ListSnapshots" });

            /**
             * Calls ListSnapshots.
             * @function listSnapshots
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestListSnapshots} request RequestListSnapshots message or plain object
             * @returns {Promise<tendermint.abci.ResponseListSnapshots>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#offerSnapshot}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef OfferSnapshotCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseOfferSnapshot} [response] ResponseOfferSnapshot
             */

            /**
             * Calls OfferSnapshot.
             * @function offerSnapshot
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestOfferSnapshot} request RequestOfferSnapshot message or plain object
             * @param {tendermint.abci.ABCIApplication.OfferSnapshotCallback} callback Node-style callback called with the error, if any, and ResponseOfferSnapshot
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.offerSnapshot = function offerSnapshot(request, callback) {
                return this.rpcCall(offerSnapshot, $root.tendermint.abci.RequestOfferSnapshot, $root.tendermint.abci.ResponseOfferSnapshot, request, callback);
            }, "name", { value: "OfferSnapshot" });

            /**
             * Calls OfferSnapshot.
             * @function offerSnapshot
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestOfferSnapshot} request RequestOfferSnapshot message or plain object
             * @returns {Promise<tendermint.abci.ResponseOfferSnapshot>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#loadSnapshotChunk}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef LoadSnapshotChunkCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseLoadSnapshotChunk} [response] ResponseLoadSnapshotChunk
             */

            /**
             * Calls LoadSnapshotChunk.
             * @function loadSnapshotChunk
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestLoadSnapshotChunk} request RequestLoadSnapshotChunk message or plain object
             * @param {tendermint.abci.ABCIApplication.LoadSnapshotChunkCallback} callback Node-style callback called with the error, if any, and ResponseLoadSnapshotChunk
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.loadSnapshotChunk = function loadSnapshotChunk(request, callback) {
                return this.rpcCall(loadSnapshotChunk, $root.tendermint.abci.RequestLoadSnapshotChunk, $root.tendermint.abci.ResponseLoadSnapshotChunk, request, callback);
            }, "name", { value: "LoadSnapshotChunk" });

            /**
             * Calls LoadSnapshotChunk.
             * @function loadSnapshotChunk
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestLoadSnapshotChunk} request RequestLoadSnapshotChunk message or plain object
             * @returns {Promise<tendermint.abci.ResponseLoadSnapshotChunk>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#applySnapshotChunk}.
             * @memberof tendermint.abci.ABCIApplication
             * @typedef ApplySnapshotChunkCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {tendermint.abci.ResponseApplySnapshotChunk} [response] ResponseApplySnapshotChunk
             */

            /**
             * Calls ApplySnapshotChunk.
             * @function applySnapshotChunk
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestApplySnapshotChunk} request RequestApplySnapshotChunk message or plain object
             * @param {tendermint.abci.ABCIApplication.ApplySnapshotChunkCallback} callback Node-style callback called with the error, if any, and ResponseApplySnapshotChunk
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ABCIApplication.prototype.applySnapshotChunk = function applySnapshotChunk(request, callback) {
                return this.rpcCall(applySnapshotChunk, $root.tendermint.abci.RequestApplySnapshotChunk, $root.tendermint.abci.ResponseApplySnapshotChunk, request, callback);
            }, "name", { value: "ApplySnapshotChunk" });

            /**
             * Calls ApplySnapshotChunk.
             * @function applySnapshotChunk
             * @memberof tendermint.abci.ABCIApplication
             * @instance
             * @param {tendermint.abci.IRequestApplySnapshotChunk} request RequestApplySnapshotChunk message or plain object
             * @returns {Promise<tendermint.abci.ResponseApplySnapshotChunk>} Promise
             * @variation 2
             */

            return ABCIApplication;
        })();

        return abci;
    })();

    tendermint.crypto = (function() {

        /**
         * Namespace crypto.
         * @memberof tendermint
         * @namespace
         */
        var crypto = {};

        crypto.Proof = (function() {

            /**
             * Properties of a Proof.
             * @memberof tendermint.crypto
             * @interface IProof
             * @property {number|Long|null} [total] Proof total
             * @property {number|Long|null} [index] Proof index
             * @property {Uint8Array|null} [leafHash] Proof leafHash
             * @property {Array.<Uint8Array>|null} [aunts] Proof aunts
             */

            /**
             * Constructs a new Proof.
             * @memberof tendermint.crypto
             * @classdesc Represents a Proof.
             * @implements IProof
             * @constructor
             * @param {tendermint.crypto.IProof=} [properties] Properties to set
             */
            function Proof(properties) {
                this.aunts = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Proof total.
             * @member {number|Long} total
             * @memberof tendermint.crypto.Proof
             * @instance
             */
            Proof.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Proof index.
             * @member {number|Long} index
             * @memberof tendermint.crypto.Proof
             * @instance
             */
            Proof.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Proof leafHash.
             * @member {Uint8Array} leafHash
             * @memberof tendermint.crypto.Proof
             * @instance
             */
            Proof.prototype.leafHash = $util.newBuffer([]);

            /**
             * Proof aunts.
             * @member {Array.<Uint8Array>} aunts
             * @memberof tendermint.crypto.Proof
             * @instance
             */
            Proof.prototype.aunts = $util.emptyArray;

            /**
             * Creates a new Proof instance using the specified properties.
             * @function create
             * @memberof tendermint.crypto.Proof
             * @static
             * @param {tendermint.crypto.IProof=} [properties] Properties to set
             * @returns {tendermint.crypto.Proof} Proof instance
             */
            Proof.create = function create(properties) {
                return new Proof(properties);
            };

            /**
             * Encodes the specified Proof message. Does not implicitly {@link tendermint.crypto.Proof.verify|verify} messages.
             * @function encode
             * @memberof tendermint.crypto.Proof
             * @static
             * @param {tendermint.crypto.IProof} message Proof message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Proof.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.total != null && message.hasOwnProperty("total"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.total);
                if (message.index != null && message.hasOwnProperty("index"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.index);
                if (message.leafHash != null && message.hasOwnProperty("leafHash"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.leafHash);
                if (message.aunts != null && message.aunts.length)
                    for (var i = 0; i < message.aunts.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.aunts[i]);
                return writer;
            };

            /**
             * Encodes the specified Proof message, length delimited. Does not implicitly {@link tendermint.crypto.Proof.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.crypto.Proof
             * @static
             * @param {tendermint.crypto.IProof} message Proof message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Proof.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Proof message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.crypto.Proof
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.crypto.Proof} Proof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Proof.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.crypto.Proof();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.total = reader.int64();
                        break;
                    case 2:
                        message.index = reader.int64();
                        break;
                    case 3:
                        message.leafHash = reader.bytes();
                        break;
                    case 4:
                        if (!(message.aunts && message.aunts.length))
                            message.aunts = [];
                        message.aunts.push(reader.bytes());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Proof message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.crypto.Proof
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.crypto.Proof} Proof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Proof.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Proof message.
             * @function verify
             * @memberof tendermint.crypto.Proof
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Proof.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.total != null && message.hasOwnProperty("total"))
                    if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                        return "total: integer|Long expected";
                if (message.index != null && message.hasOwnProperty("index"))
                    if (!$util.isInteger(message.index) && !(message.index && $util.isInteger(message.index.low) && $util.isInteger(message.index.high)))
                        return "index: integer|Long expected";
                if (message.leafHash != null && message.hasOwnProperty("leafHash"))
                    if (!(message.leafHash && typeof message.leafHash.length === "number" || $util.isString(message.leafHash)))
                        return "leafHash: buffer expected";
                if (message.aunts != null && message.hasOwnProperty("aunts")) {
                    if (!Array.isArray(message.aunts))
                        return "aunts: array expected";
                    for (var i = 0; i < message.aunts.length; ++i)
                        if (!(message.aunts[i] && typeof message.aunts[i].length === "number" || $util.isString(message.aunts[i])))
                            return "aunts: buffer[] expected";
                }
                return null;
            };

            /**
             * Creates a Proof message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.crypto.Proof
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.crypto.Proof} Proof
             */
            Proof.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.crypto.Proof)
                    return object;
                var message = new $root.tendermint.crypto.Proof();
                if (object.total != null)
                    if ($util.Long)
                        (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                    else if (typeof object.total === "string")
                        message.total = parseInt(object.total, 10);
                    else if (typeof object.total === "number")
                        message.total = object.total;
                    else if (typeof object.total === "object")
                        message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
                if (object.index != null)
                    if ($util.Long)
                        (message.index = $util.Long.fromValue(object.index)).unsigned = false;
                    else if (typeof object.index === "string")
                        message.index = parseInt(object.index, 10);
                    else if (typeof object.index === "number")
                        message.index = object.index;
                    else if (typeof object.index === "object")
                        message.index = new $util.LongBits(object.index.low >>> 0, object.index.high >>> 0).toNumber();
                if (object.leafHash != null)
                    if (typeof object.leafHash === "string")
                        $util.base64.decode(object.leafHash, message.leafHash = $util.newBuffer($util.base64.length(object.leafHash)), 0);
                    else if (object.leafHash.length)
                        message.leafHash = object.leafHash;
                if (object.aunts) {
                    if (!Array.isArray(object.aunts))
                        throw TypeError(".tendermint.crypto.Proof.aunts: array expected");
                    message.aunts = [];
                    for (var i = 0; i < object.aunts.length; ++i)
                        if (typeof object.aunts[i] === "string")
                            $util.base64.decode(object.aunts[i], message.aunts[i] = $util.newBuffer($util.base64.length(object.aunts[i])), 0);
                        else if (object.aunts[i].length)
                            message.aunts[i] = object.aunts[i];
                }
                return message;
            };

            /**
             * Creates a plain object from a Proof message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.crypto.Proof
             * @static
             * @param {tendermint.crypto.Proof} message Proof
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Proof.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.aunts = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.total = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.index = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.index = options.longs === String ? "0" : 0;
                    if (options.bytes === String)
                        object.leafHash = "";
                    else {
                        object.leafHash = [];
                        if (options.bytes !== Array)
                            object.leafHash = $util.newBuffer(object.leafHash);
                    }
                }
                if (message.total != null && message.hasOwnProperty("total"))
                    if (typeof message.total === "number")
                        object.total = options.longs === String ? String(message.total) : message.total;
                    else
                        object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
                if (message.index != null && message.hasOwnProperty("index"))
                    if (typeof message.index === "number")
                        object.index = options.longs === String ? String(message.index) : message.index;
                    else
                        object.index = options.longs === String ? $util.Long.prototype.toString.call(message.index) : options.longs === Number ? new $util.LongBits(message.index.low >>> 0, message.index.high >>> 0).toNumber() : message.index;
                if (message.leafHash != null && message.hasOwnProperty("leafHash"))
                    object.leafHash = options.bytes === String ? $util.base64.encode(message.leafHash, 0, message.leafHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.leafHash) : message.leafHash;
                if (message.aunts && message.aunts.length) {
                    object.aunts = [];
                    for (var j = 0; j < message.aunts.length; ++j)
                        object.aunts[j] = options.bytes === String ? $util.base64.encode(message.aunts[j], 0, message.aunts[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.aunts[j]) : message.aunts[j];
                }
                return object;
            };

            /**
             * Converts this Proof to JSON.
             * @function toJSON
             * @memberof tendermint.crypto.Proof
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Proof.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Proof;
        })();

        crypto.ValueOp = (function() {

            /**
             * Properties of a ValueOp.
             * @memberof tendermint.crypto
             * @interface IValueOp
             * @property {Uint8Array|null} [key] ValueOp key
             * @property {tendermint.crypto.IProof|null} [proof] ValueOp proof
             */

            /**
             * Constructs a new ValueOp.
             * @memberof tendermint.crypto
             * @classdesc Represents a ValueOp.
             * @implements IValueOp
             * @constructor
             * @param {tendermint.crypto.IValueOp=} [properties] Properties to set
             */
            function ValueOp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ValueOp key.
             * @member {Uint8Array} key
             * @memberof tendermint.crypto.ValueOp
             * @instance
             */
            ValueOp.prototype.key = $util.newBuffer([]);

            /**
             * ValueOp proof.
             * @member {tendermint.crypto.IProof|null|undefined} proof
             * @memberof tendermint.crypto.ValueOp
             * @instance
             */
            ValueOp.prototype.proof = null;

            /**
             * Creates a new ValueOp instance using the specified properties.
             * @function create
             * @memberof tendermint.crypto.ValueOp
             * @static
             * @param {tendermint.crypto.IValueOp=} [properties] Properties to set
             * @returns {tendermint.crypto.ValueOp} ValueOp instance
             */
            ValueOp.create = function create(properties) {
                return new ValueOp(properties);
            };

            /**
             * Encodes the specified ValueOp message. Does not implicitly {@link tendermint.crypto.ValueOp.verify|verify} messages.
             * @function encode
             * @memberof tendermint.crypto.ValueOp
             * @static
             * @param {tendermint.crypto.IValueOp} message ValueOp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ValueOp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
                if (message.proof != null && message.hasOwnProperty("proof"))
                    $root.tendermint.crypto.Proof.encode(message.proof, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ValueOp message, length delimited. Does not implicitly {@link tendermint.crypto.ValueOp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.crypto.ValueOp
             * @static
             * @param {tendermint.crypto.IValueOp} message ValueOp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ValueOp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ValueOp message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.crypto.ValueOp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.crypto.ValueOp} ValueOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ValueOp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.crypto.ValueOp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.bytes();
                        break;
                    case 2:
                        message.proof = $root.tendermint.crypto.Proof.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ValueOp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.crypto.ValueOp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.crypto.ValueOp} ValueOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ValueOp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ValueOp message.
             * @function verify
             * @memberof tendermint.crypto.ValueOp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ValueOp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                        return "key: buffer expected";
                if (message.proof != null && message.hasOwnProperty("proof")) {
                    var error = $root.tendermint.crypto.Proof.verify(message.proof);
                    if (error)
                        return "proof." + error;
                }
                return null;
            };

            /**
             * Creates a ValueOp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.crypto.ValueOp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.crypto.ValueOp} ValueOp
             */
            ValueOp.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.crypto.ValueOp)
                    return object;
                var message = new $root.tendermint.crypto.ValueOp();
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                    else if (object.key.length)
                        message.key = object.key;
                if (object.proof != null) {
                    if (typeof object.proof !== "object")
                        throw TypeError(".tendermint.crypto.ValueOp.proof: object expected");
                    message.proof = $root.tendermint.crypto.Proof.fromObject(object.proof);
                }
                return message;
            };

            /**
             * Creates a plain object from a ValueOp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.crypto.ValueOp
             * @static
             * @param {tendermint.crypto.ValueOp} message ValueOp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ValueOp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.key = "";
                    else {
                        object.key = [];
                        if (options.bytes !== Array)
                            object.key = $util.newBuffer(object.key);
                    }
                    object.proof = null;
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                if (message.proof != null && message.hasOwnProperty("proof"))
                    object.proof = $root.tendermint.crypto.Proof.toObject(message.proof, options);
                return object;
            };

            /**
             * Converts this ValueOp to JSON.
             * @function toJSON
             * @memberof tendermint.crypto.ValueOp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ValueOp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ValueOp;
        })();

        crypto.DominoOp = (function() {

            /**
             * Properties of a DominoOp.
             * @memberof tendermint.crypto
             * @interface IDominoOp
             * @property {string|null} [key] DominoOp key
             * @property {string|null} [input] DominoOp input
             * @property {string|null} [output] DominoOp output
             */

            /**
             * Constructs a new DominoOp.
             * @memberof tendermint.crypto
             * @classdesc Represents a DominoOp.
             * @implements IDominoOp
             * @constructor
             * @param {tendermint.crypto.IDominoOp=} [properties] Properties to set
             */
            function DominoOp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DominoOp key.
             * @member {string} key
             * @memberof tendermint.crypto.DominoOp
             * @instance
             */
            DominoOp.prototype.key = "";

            /**
             * DominoOp input.
             * @member {string} input
             * @memberof tendermint.crypto.DominoOp
             * @instance
             */
            DominoOp.prototype.input = "";

            /**
             * DominoOp output.
             * @member {string} output
             * @memberof tendermint.crypto.DominoOp
             * @instance
             */
            DominoOp.prototype.output = "";

            /**
             * Creates a new DominoOp instance using the specified properties.
             * @function create
             * @memberof tendermint.crypto.DominoOp
             * @static
             * @param {tendermint.crypto.IDominoOp=} [properties] Properties to set
             * @returns {tendermint.crypto.DominoOp} DominoOp instance
             */
            DominoOp.create = function create(properties) {
                return new DominoOp(properties);
            };

            /**
             * Encodes the specified DominoOp message. Does not implicitly {@link tendermint.crypto.DominoOp.verify|verify} messages.
             * @function encode
             * @memberof tendermint.crypto.DominoOp
             * @static
             * @param {tendermint.crypto.IDominoOp} message DominoOp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DominoOp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.input != null && message.hasOwnProperty("input"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.input);
                if (message.output != null && message.hasOwnProperty("output"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.output);
                return writer;
            };

            /**
             * Encodes the specified DominoOp message, length delimited. Does not implicitly {@link tendermint.crypto.DominoOp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.crypto.DominoOp
             * @static
             * @param {tendermint.crypto.IDominoOp} message DominoOp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DominoOp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DominoOp message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.crypto.DominoOp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.crypto.DominoOp} DominoOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DominoOp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.crypto.DominoOp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.string();
                        break;
                    case 2:
                        message.input = reader.string();
                        break;
                    case 3:
                        message.output = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DominoOp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.crypto.DominoOp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.crypto.DominoOp} DominoOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DominoOp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DominoOp message.
             * @function verify
             * @memberof tendermint.crypto.DominoOp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DominoOp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.input != null && message.hasOwnProperty("input"))
                    if (!$util.isString(message.input))
                        return "input: string expected";
                if (message.output != null && message.hasOwnProperty("output"))
                    if (!$util.isString(message.output))
                        return "output: string expected";
                return null;
            };

            /**
             * Creates a DominoOp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.crypto.DominoOp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.crypto.DominoOp} DominoOp
             */
            DominoOp.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.crypto.DominoOp)
                    return object;
                var message = new $root.tendermint.crypto.DominoOp();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.input != null)
                    message.input = String(object.input);
                if (object.output != null)
                    message.output = String(object.output);
                return message;
            };

            /**
             * Creates a plain object from a DominoOp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.crypto.DominoOp
             * @static
             * @param {tendermint.crypto.DominoOp} message DominoOp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DominoOp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.key = "";
                    object.input = "";
                    object.output = "";
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.input != null && message.hasOwnProperty("input"))
                    object.input = message.input;
                if (message.output != null && message.hasOwnProperty("output"))
                    object.output = message.output;
                return object;
            };

            /**
             * Converts this DominoOp to JSON.
             * @function toJSON
             * @memberof tendermint.crypto.DominoOp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DominoOp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DominoOp;
        })();

        crypto.ProofOp = (function() {

            /**
             * Properties of a ProofOp.
             * @memberof tendermint.crypto
             * @interface IProofOp
             * @property {string|null} [type] ProofOp type
             * @property {Uint8Array|null} [key] ProofOp key
             * @property {Uint8Array|null} [data] ProofOp data
             */

            /**
             * Constructs a new ProofOp.
             * @memberof tendermint.crypto
             * @classdesc Represents a ProofOp.
             * @implements IProofOp
             * @constructor
             * @param {tendermint.crypto.IProofOp=} [properties] Properties to set
             */
            function ProofOp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProofOp type.
             * @member {string} type
             * @memberof tendermint.crypto.ProofOp
             * @instance
             */
            ProofOp.prototype.type = "";

            /**
             * ProofOp key.
             * @member {Uint8Array} key
             * @memberof tendermint.crypto.ProofOp
             * @instance
             */
            ProofOp.prototype.key = $util.newBuffer([]);

            /**
             * ProofOp data.
             * @member {Uint8Array} data
             * @memberof tendermint.crypto.ProofOp
             * @instance
             */
            ProofOp.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new ProofOp instance using the specified properties.
             * @function create
             * @memberof tendermint.crypto.ProofOp
             * @static
             * @param {tendermint.crypto.IProofOp=} [properties] Properties to set
             * @returns {tendermint.crypto.ProofOp} ProofOp instance
             */
            ProofOp.create = function create(properties) {
                return new ProofOp(properties);
            };

            /**
             * Encodes the specified ProofOp message. Does not implicitly {@link tendermint.crypto.ProofOp.verify|verify} messages.
             * @function encode
             * @memberof tendermint.crypto.ProofOp
             * @static
             * @param {tendermint.crypto.IProofOp} message ProofOp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProofOp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.key);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
                return writer;
            };

            /**
             * Encodes the specified ProofOp message, length delimited. Does not implicitly {@link tendermint.crypto.ProofOp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.crypto.ProofOp
             * @static
             * @param {tendermint.crypto.IProofOp} message ProofOp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProofOp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProofOp message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.crypto.ProofOp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.crypto.ProofOp} ProofOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProofOp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.crypto.ProofOp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.string();
                        break;
                    case 2:
                        message.key = reader.bytes();
                        break;
                    case 3:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ProofOp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.crypto.ProofOp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.crypto.ProofOp} ProofOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProofOp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProofOp message.
             * @function verify
             * @memberof tendermint.crypto.ProofOp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProofOp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                        return "key: buffer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            /**
             * Creates a ProofOp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.crypto.ProofOp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.crypto.ProofOp} ProofOp
             */
            ProofOp.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.crypto.ProofOp)
                    return object;
                var message = new $root.tendermint.crypto.ProofOp();
                if (object.type != null)
                    message.type = String(object.type);
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                    else if (object.key.length)
                        message.key = object.key;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };

            /**
             * Creates a plain object from a ProofOp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.crypto.ProofOp
             * @static
             * @param {tendermint.crypto.ProofOp} message ProofOp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProofOp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = "";
                    if (options.bytes === String)
                        object.key = "";
                    else {
                        object.key = [];
                        if (options.bytes !== Array)
                            object.key = $util.newBuffer(object.key);
                    }
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };

            /**
             * Converts this ProofOp to JSON.
             * @function toJSON
             * @memberof tendermint.crypto.ProofOp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProofOp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ProofOp;
        })();

        crypto.ProofOps = (function() {

            /**
             * Properties of a ProofOps.
             * @memberof tendermint.crypto
             * @interface IProofOps
             * @property {Array.<tendermint.crypto.IProofOp>|null} [ops] ProofOps ops
             */

            /**
             * Constructs a new ProofOps.
             * @memberof tendermint.crypto
             * @classdesc Represents a ProofOps.
             * @implements IProofOps
             * @constructor
             * @param {tendermint.crypto.IProofOps=} [properties] Properties to set
             */
            function ProofOps(properties) {
                this.ops = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProofOps ops.
             * @member {Array.<tendermint.crypto.IProofOp>} ops
             * @memberof tendermint.crypto.ProofOps
             * @instance
             */
            ProofOps.prototype.ops = $util.emptyArray;

            /**
             * Creates a new ProofOps instance using the specified properties.
             * @function create
             * @memberof tendermint.crypto.ProofOps
             * @static
             * @param {tendermint.crypto.IProofOps=} [properties] Properties to set
             * @returns {tendermint.crypto.ProofOps} ProofOps instance
             */
            ProofOps.create = function create(properties) {
                return new ProofOps(properties);
            };

            /**
             * Encodes the specified ProofOps message. Does not implicitly {@link tendermint.crypto.ProofOps.verify|verify} messages.
             * @function encode
             * @memberof tendermint.crypto.ProofOps
             * @static
             * @param {tendermint.crypto.IProofOps} message ProofOps message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProofOps.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ops != null && message.ops.length)
                    for (var i = 0; i < message.ops.length; ++i)
                        $root.tendermint.crypto.ProofOp.encode(message.ops[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ProofOps message, length delimited. Does not implicitly {@link tendermint.crypto.ProofOps.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.crypto.ProofOps
             * @static
             * @param {tendermint.crypto.IProofOps} message ProofOps message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProofOps.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProofOps message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.crypto.ProofOps
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.crypto.ProofOps} ProofOps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProofOps.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.crypto.ProofOps();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.ops && message.ops.length))
                            message.ops = [];
                        message.ops.push($root.tendermint.crypto.ProofOp.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ProofOps message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.crypto.ProofOps
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.crypto.ProofOps} ProofOps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProofOps.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProofOps message.
             * @function verify
             * @memberof tendermint.crypto.ProofOps
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProofOps.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ops != null && message.hasOwnProperty("ops")) {
                    if (!Array.isArray(message.ops))
                        return "ops: array expected";
                    for (var i = 0; i < message.ops.length; ++i) {
                        var error = $root.tendermint.crypto.ProofOp.verify(message.ops[i]);
                        if (error)
                            return "ops." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ProofOps message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.crypto.ProofOps
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.crypto.ProofOps} ProofOps
             */
            ProofOps.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.crypto.ProofOps)
                    return object;
                var message = new $root.tendermint.crypto.ProofOps();
                if (object.ops) {
                    if (!Array.isArray(object.ops))
                        throw TypeError(".tendermint.crypto.ProofOps.ops: array expected");
                    message.ops = [];
                    for (var i = 0; i < object.ops.length; ++i) {
                        if (typeof object.ops[i] !== "object")
                            throw TypeError(".tendermint.crypto.ProofOps.ops: object expected");
                        message.ops[i] = $root.tendermint.crypto.ProofOp.fromObject(object.ops[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ProofOps message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.crypto.ProofOps
             * @static
             * @param {tendermint.crypto.ProofOps} message ProofOps
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProofOps.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.ops = [];
                if (message.ops && message.ops.length) {
                    object.ops = [];
                    for (var j = 0; j < message.ops.length; ++j)
                        object.ops[j] = $root.tendermint.crypto.ProofOp.toObject(message.ops[j], options);
                }
                return object;
            };

            /**
             * Converts this ProofOps to JSON.
             * @function toJSON
             * @memberof tendermint.crypto.ProofOps
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProofOps.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ProofOps;
        })();

        crypto.PublicKey = (function() {

            /**
             * Properties of a PublicKey.
             * @memberof tendermint.crypto
             * @interface IPublicKey
             * @property {Uint8Array|null} [ed25519] PublicKey ed25519
             * @property {Uint8Array|null} [secp256k1] PublicKey secp256k1
             * @property {Uint8Array|null} [bls12381] PublicKey bls12381
             */

            /**
             * Constructs a new PublicKey.
             * @memberof tendermint.crypto
             * @classdesc Represents a PublicKey.
             * @implements IPublicKey
             * @constructor
             * @param {tendermint.crypto.IPublicKey=} [properties] Properties to set
             */
            function PublicKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PublicKey ed25519.
             * @member {Uint8Array} ed25519
             * @memberof tendermint.crypto.PublicKey
             * @instance
             */
            PublicKey.prototype.ed25519 = $util.newBuffer([]);

            /**
             * PublicKey secp256k1.
             * @member {Uint8Array} secp256k1
             * @memberof tendermint.crypto.PublicKey
             * @instance
             */
            PublicKey.prototype.secp256k1 = $util.newBuffer([]);

            /**
             * PublicKey bls12381.
             * @member {Uint8Array} bls12381
             * @memberof tendermint.crypto.PublicKey
             * @instance
             */
            PublicKey.prototype.bls12381 = $util.newBuffer([]);

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * PublicKey sum.
             * @member {"ed25519"|"secp256k1"|"bls12381"|undefined} sum
             * @memberof tendermint.crypto.PublicKey
             * @instance
             */
            Object.defineProperty(PublicKey.prototype, "sum", {
                get: $util.oneOfGetter($oneOfFields = ["ed25519", "secp256k1", "bls12381"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new PublicKey instance using the specified properties.
             * @function create
             * @memberof tendermint.crypto.PublicKey
             * @static
             * @param {tendermint.crypto.IPublicKey=} [properties] Properties to set
             * @returns {tendermint.crypto.PublicKey} PublicKey instance
             */
            PublicKey.create = function create(properties) {
                return new PublicKey(properties);
            };

            /**
             * Encodes the specified PublicKey message. Does not implicitly {@link tendermint.crypto.PublicKey.verify|verify} messages.
             * @function encode
             * @memberof tendermint.crypto.PublicKey
             * @static
             * @param {tendermint.crypto.IPublicKey} message PublicKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublicKey.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ed25519 != null && message.hasOwnProperty("ed25519"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ed25519);
                if (message.secp256k1 != null && message.hasOwnProperty("secp256k1"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.secp256k1);
                if (message.bls12381 != null && message.hasOwnProperty("bls12381"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.bls12381);
                return writer;
            };

            /**
             * Encodes the specified PublicKey message, length delimited. Does not implicitly {@link tendermint.crypto.PublicKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.crypto.PublicKey
             * @static
             * @param {tendermint.crypto.IPublicKey} message PublicKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublicKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PublicKey message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.crypto.PublicKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.crypto.PublicKey} PublicKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublicKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.crypto.PublicKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ed25519 = reader.bytes();
                        break;
                    case 2:
                        message.secp256k1 = reader.bytes();
                        break;
                    case 3:
                        message.bls12381 = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PublicKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.crypto.PublicKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.crypto.PublicKey} PublicKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublicKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PublicKey message.
             * @function verify
             * @memberof tendermint.crypto.PublicKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PublicKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                    properties.sum = 1;
                    if (!(message.ed25519 && typeof message.ed25519.length === "number" || $util.isString(message.ed25519)))
                        return "ed25519: buffer expected";
                }
                if (message.secp256k1 != null && message.hasOwnProperty("secp256k1")) {
                    if (properties.sum === 1)
                        return "sum: multiple values";
                    properties.sum = 1;
                    if (!(message.secp256k1 && typeof message.secp256k1.length === "number" || $util.isString(message.secp256k1)))
                        return "secp256k1: buffer expected";
                }
                if (message.bls12381 != null && message.hasOwnProperty("bls12381")) {
                    if (properties.sum === 1)
                        return "sum: multiple values";
                    properties.sum = 1;
                    if (!(message.bls12381 && typeof message.bls12381.length === "number" || $util.isString(message.bls12381)))
                        return "bls12381: buffer expected";
                }
                return null;
            };

            /**
             * Creates a PublicKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.crypto.PublicKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.crypto.PublicKey} PublicKey
             */
            PublicKey.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.crypto.PublicKey)
                    return object;
                var message = new $root.tendermint.crypto.PublicKey();
                if (object.ed25519 != null)
                    if (typeof object.ed25519 === "string")
                        $util.base64.decode(object.ed25519, message.ed25519 = $util.newBuffer($util.base64.length(object.ed25519)), 0);
                    else if (object.ed25519.length)
                        message.ed25519 = object.ed25519;
                if (object.secp256k1 != null)
                    if (typeof object.secp256k1 === "string")
                        $util.base64.decode(object.secp256k1, message.secp256k1 = $util.newBuffer($util.base64.length(object.secp256k1)), 0);
                    else if (object.secp256k1.length)
                        message.secp256k1 = object.secp256k1;
                if (object.bls12381 != null)
                    if (typeof object.bls12381 === "string")
                        $util.base64.decode(object.bls12381, message.bls12381 = $util.newBuffer($util.base64.length(object.bls12381)), 0);
                    else if (object.bls12381.length)
                        message.bls12381 = object.bls12381;
                return message;
            };

            /**
             * Creates a plain object from a PublicKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.crypto.PublicKey
             * @static
             * @param {tendermint.crypto.PublicKey} message PublicKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PublicKey.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                    object.ed25519 = options.bytes === String ? $util.base64.encode(message.ed25519, 0, message.ed25519.length) : options.bytes === Array ? Array.prototype.slice.call(message.ed25519) : message.ed25519;
                    if (options.oneofs)
                        object.sum = "ed25519";
                }
                if (message.secp256k1 != null && message.hasOwnProperty("secp256k1")) {
                    object.secp256k1 = options.bytes === String ? $util.base64.encode(message.secp256k1, 0, message.secp256k1.length) : options.bytes === Array ? Array.prototype.slice.call(message.secp256k1) : message.secp256k1;
                    if (options.oneofs)
                        object.sum = "secp256k1";
                }
                if (message.bls12381 != null && message.hasOwnProperty("bls12381")) {
                    object.bls12381 = options.bytes === String ? $util.base64.encode(message.bls12381, 0, message.bls12381.length) : options.bytes === Array ? Array.prototype.slice.call(message.bls12381) : message.bls12381;
                    if (options.oneofs)
                        object.sum = "bls12381";
                }
                return object;
            };

            /**
             * Converts this PublicKey to JSON.
             * @function toJSON
             * @memberof tendermint.crypto.PublicKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PublicKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PublicKey;
        })();

        return crypto;
    })();

    tendermint.types = (function() {

        /**
         * Namespace types.
         * @memberof tendermint
         * @namespace
         */
        var types = {};

        types.PartSetHeader = (function() {

            /**
             * Properties of a PartSetHeader.
             * @memberof tendermint.types
             * @interface IPartSetHeader
             * @property {number|null} [total] PartSetHeader total
             * @property {Uint8Array|null} [hash] PartSetHeader hash
             */

            /**
             * Constructs a new PartSetHeader.
             * @memberof tendermint.types
             * @classdesc Represents a PartSetHeader.
             * @implements IPartSetHeader
             * @constructor
             * @param {tendermint.types.IPartSetHeader=} [properties] Properties to set
             */
            function PartSetHeader(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PartSetHeader total.
             * @member {number} total
             * @memberof tendermint.types.PartSetHeader
             * @instance
             */
            PartSetHeader.prototype.total = 0;

            /**
             * PartSetHeader hash.
             * @member {Uint8Array} hash
             * @memberof tendermint.types.PartSetHeader
             * @instance
             */
            PartSetHeader.prototype.hash = $util.newBuffer([]);

            /**
             * Creates a new PartSetHeader instance using the specified properties.
             * @function create
             * @memberof tendermint.types.PartSetHeader
             * @static
             * @param {tendermint.types.IPartSetHeader=} [properties] Properties to set
             * @returns {tendermint.types.PartSetHeader} PartSetHeader instance
             */
            PartSetHeader.create = function create(properties) {
                return new PartSetHeader(properties);
            };

            /**
             * Encodes the specified PartSetHeader message. Does not implicitly {@link tendermint.types.PartSetHeader.verify|verify} messages.
             * @function encode
             * @memberof tendermint.types.PartSetHeader
             * @static
             * @param {tendermint.types.IPartSetHeader} message PartSetHeader message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PartSetHeader.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.total != null && message.hasOwnProperty("total"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.total);
                if (message.hash != null && message.hasOwnProperty("hash"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.hash);
                return writer;
            };

            /**
             * Encodes the specified PartSetHeader message, length delimited. Does not implicitly {@link tendermint.types.PartSetHeader.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.types.PartSetHeader
             * @static
             * @param {tendermint.types.IPartSetHeader} message PartSetHeader message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PartSetHeader.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PartSetHeader message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.types.PartSetHeader
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.types.PartSetHeader} PartSetHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PartSetHeader.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.types.PartSetHeader();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.total = reader.uint32();
                        break;
                    case 2:
                        message.hash = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PartSetHeader message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.types.PartSetHeader
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.types.PartSetHeader} PartSetHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PartSetHeader.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PartSetHeader message.
             * @function verify
             * @memberof tendermint.types.PartSetHeader
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PartSetHeader.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.total != null && message.hasOwnProperty("total"))
                    if (!$util.isInteger(message.total))
                        return "total: integer expected";
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                        return "hash: buffer expected";
                return null;
            };

            /**
             * Creates a PartSetHeader message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.types.PartSetHeader
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.types.PartSetHeader} PartSetHeader
             */
            PartSetHeader.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.types.PartSetHeader)
                    return object;
                var message = new $root.tendermint.types.PartSetHeader();
                if (object.total != null)
                    message.total = object.total >>> 0;
                if (object.hash != null)
                    if (typeof object.hash === "string")
                        $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                    else if (object.hash.length)
                        message.hash = object.hash;
                return message;
            };

            /**
             * Creates a plain object from a PartSetHeader message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.types.PartSetHeader
             * @static
             * @param {tendermint.types.PartSetHeader} message PartSetHeader
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PartSetHeader.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.total = 0;
                    if (options.bytes === String)
                        object.hash = "";
                    else {
                        object.hash = [];
                        if (options.bytes !== Array)
                            object.hash = $util.newBuffer(object.hash);
                    }
                }
                if (message.total != null && message.hasOwnProperty("total"))
                    object.total = message.total;
                if (message.hash != null && message.hasOwnProperty("hash"))
                    object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                return object;
            };

            /**
             * Converts this PartSetHeader to JSON.
             * @function toJSON
             * @memberof tendermint.types.PartSetHeader
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PartSetHeader.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PartSetHeader;
        })();

        types.BlockID = (function() {

            /**
             * Properties of a BlockID.
             * @memberof tendermint.types
             * @interface IBlockID
             * @property {Uint8Array|null} [hash] BlockID hash
             * @property {tendermint.types.IPartSetHeader|null} [partSetHeader] BlockID partSetHeader
             */

            /**
             * Constructs a new BlockID.
             * @memberof tendermint.types
             * @classdesc Represents a BlockID.
             * @implements IBlockID
             * @constructor
             * @param {tendermint.types.IBlockID=} [properties] Properties to set
             */
            function BlockID(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BlockID hash.
             * @member {Uint8Array} hash
             * @memberof tendermint.types.BlockID
             * @instance
             */
            BlockID.prototype.hash = $util.newBuffer([]);

            /**
             * BlockID partSetHeader.
             * @member {tendermint.types.IPartSetHeader|null|undefined} partSetHeader
             * @memberof tendermint.types.BlockID
             * @instance
             */
            BlockID.prototype.partSetHeader = null;

            /**
             * Creates a new BlockID instance using the specified properties.
             * @function create
             * @memberof tendermint.types.BlockID
             * @static
             * @param {tendermint.types.IBlockID=} [properties] Properties to set
             * @returns {tendermint.types.BlockID} BlockID instance
             */
            BlockID.create = function create(properties) {
                return new BlockID(properties);
            };

            /**
             * Encodes the specified BlockID message. Does not implicitly {@link tendermint.types.BlockID.verify|verify} messages.
             * @function encode
             * @memberof tendermint.types.BlockID
             * @static
             * @param {tendermint.types.IBlockID} message BlockID message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BlockID.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.hash != null && message.hasOwnProperty("hash"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
                if (message.partSetHeader != null && message.hasOwnProperty("partSetHeader"))
                    $root.tendermint.types.PartSetHeader.encode(message.partSetHeader, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BlockID message, length delimited. Does not implicitly {@link tendermint.types.BlockID.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.types.BlockID
             * @static
             * @param {tendermint.types.IBlockID} message BlockID message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BlockID.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BlockID message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.types.BlockID
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.types.BlockID} BlockID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BlockID.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.types.BlockID();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.hash = reader.bytes();
                        break;
                    case 2:
                        message.partSetHeader = $root.tendermint.types.PartSetHeader.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BlockID message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.types.BlockID
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.types.BlockID} BlockID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BlockID.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BlockID message.
             * @function verify
             * @memberof tendermint.types.BlockID
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BlockID.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                        return "hash: buffer expected";
                if (message.partSetHeader != null && message.hasOwnProperty("partSetHeader")) {
                    var error = $root.tendermint.types.PartSetHeader.verify(message.partSetHeader);
                    if (error)
                        return "partSetHeader." + error;
                }
                return null;
            };

            /**
             * Creates a BlockID message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.types.BlockID
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.types.BlockID} BlockID
             */
            BlockID.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.types.BlockID)
                    return object;
                var message = new $root.tendermint.types.BlockID();
                if (object.hash != null)
                    if (typeof object.hash === "string")
                        $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                    else if (object.hash.length)
                        message.hash = object.hash;
                if (object.partSetHeader != null) {
                    if (typeof object.partSetHeader !== "object")
                        throw TypeError(".tendermint.types.BlockID.partSetHeader: object expected");
                    message.partSetHeader = $root.tendermint.types.PartSetHeader.fromObject(object.partSetHeader);
                }
                return message;
            };

            /**
             * Creates a plain object from a BlockID message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.types.BlockID
             * @static
             * @param {tendermint.types.BlockID} message BlockID
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BlockID.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.hash = "";
                    else {
                        object.hash = [];
                        if (options.bytes !== Array)
                            object.hash = $util.newBuffer(object.hash);
                    }
                    object.partSetHeader = null;
                }
                if (message.hash != null && message.hasOwnProperty("hash"))
                    object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                if (message.partSetHeader != null && message.hasOwnProperty("partSetHeader"))
                    object.partSetHeader = $root.tendermint.types.PartSetHeader.toObject(message.partSetHeader, options);
                return object;
            };

            /**
             * Converts this BlockID to JSON.
             * @function toJSON
             * @memberof tendermint.types.BlockID
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BlockID.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BlockID;
        })();

        types.Header = (function() {

            /**
             * Properties of a Header.
             * @memberof tendermint.types
             * @interface IHeader
             * @property {tendermint.version.IConsensus|null} [version] Header version
             * @property {string|null} [chainId] Header chainId
             * @property {number|Long|null} [height] Header height
             * @property {number|null} [coreChainLockedHeight] Header coreChainLockedHeight
             * @property {google.protobuf.ITimestamp|null} [time] Header time
             * @property {tendermint.types.IBlockID|null} [lastBlockId] Header lastBlockId
             * @property {Uint8Array|null} [lastCommitHash] Header lastCommitHash
             * @property {Uint8Array|null} [dataHash] Header dataHash
             * @property {Uint8Array|null} [validatorsHash] Header validatorsHash
             * @property {Uint8Array|null} [nextValidatorsHash] Header nextValidatorsHash
             * @property {Uint8Array|null} [consensusHash] Header consensusHash
             * @property {Uint8Array|null} [appHash] Header appHash
             * @property {Uint8Array|null} [lastResultsHash] Header lastResultsHash
             * @property {Uint8Array|null} [evidenceHash] Header evidenceHash
             * @property {Uint8Array|null} [proposerAddress] Header proposerAddress
             */

            /**
             * Constructs a new Header.
             * @memberof tendermint.types
             * @classdesc Represents a Header.
             * @implements IHeader
             * @constructor
             * @param {tendermint.types.IHeader=} [properties] Properties to set
             */
            function Header(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Header version.
             * @member {tendermint.version.IConsensus|null|undefined} version
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.version = null;

            /**
             * Header chainId.
             * @member {string} chainId
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.chainId = "";

            /**
             * Header height.
             * @member {number|Long} height
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.height = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Header coreChainLockedHeight.
             * @member {number} coreChainLockedHeight
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.coreChainLockedHeight = 0;

            /**
             * Header time.
             * @member {google.protobuf.ITimestamp|null|undefined} time
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.time = null;

            /**
             * Header lastBlockId.
             * @member {tendermint.types.IBlockID|null|undefined} lastBlockId
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.lastBlockId = null;

            /**
             * Header lastCommitHash.
             * @member {Uint8Array} lastCommitHash
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.lastCommitHash = $util.newBuffer([]);

            /**
             * Header dataHash.
             * @member {Uint8Array} dataHash
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.dataHash = $util.newBuffer([]);

            /**
             * Header validatorsHash.
             * @member {Uint8Array} validatorsHash
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.validatorsHash = $util.newBuffer([]);

            /**
             * Header nextValidatorsHash.
             * @member {Uint8Array} nextValidatorsHash
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.nextValidatorsHash = $util.newBuffer([]);

            /**
             * Header consensusHash.
             * @member {Uint8Array} consensusHash
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.consensusHash = $util.newBuffer([]);

            /**
             * Header appHash.
             * @member {Uint8Array} appHash
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.appHash = $util.newBuffer([]);

            /**
             * Header lastResultsHash.
             * @member {Uint8Array} lastResultsHash
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.lastResultsHash = $util.newBuffer([]);

            /**
             * Header evidenceHash.
             * @member {Uint8Array} evidenceHash
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.evidenceHash = $util.newBuffer([]);

            /**
             * Header proposerAddress.
             * @member {Uint8Array} proposerAddress
             * @memberof tendermint.types.Header
             * @instance
             */
            Header.prototype.proposerAddress = $util.newBuffer([]);

            /**
             * Creates a new Header instance using the specified properties.
             * @function create
             * @memberof tendermint.types.Header
             * @static
             * @param {tendermint.types.IHeader=} [properties] Properties to set
             * @returns {tendermint.types.Header} Header instance
             */
            Header.create = function create(properties) {
                return new Header(properties);
            };

            /**
             * Encodes the specified Header message. Does not implicitly {@link tendermint.types.Header.verify|verify} messages.
             * @function encode
             * @memberof tendermint.types.Header
             * @static
             * @param {tendermint.types.IHeader} message Header message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Header.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.version != null && message.hasOwnProperty("version"))
                    $root.tendermint.version.Consensus.encode(message.version, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.chainId != null && message.hasOwnProperty("chainId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.chainId);
                if (message.height != null && message.hasOwnProperty("height"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.height);
                if (message.time != null && message.hasOwnProperty("time"))
                    $root.google.protobuf.Timestamp.encode(message.time, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.lastBlockId != null && message.hasOwnProperty("lastBlockId"))
                    $root.tendermint.types.BlockID.encode(message.lastBlockId, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.lastCommitHash != null && message.hasOwnProperty("lastCommitHash"))
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.lastCommitHash);
                if (message.dataHash != null && message.hasOwnProperty("dataHash"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.dataHash);
                if (message.validatorsHash != null && message.hasOwnProperty("validatorsHash"))
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.validatorsHash);
                if (message.nextValidatorsHash != null && message.hasOwnProperty("nextValidatorsHash"))
                    writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.nextValidatorsHash);
                if (message.consensusHash != null && message.hasOwnProperty("consensusHash"))
                    writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.consensusHash);
                if (message.appHash != null && message.hasOwnProperty("appHash"))
                    writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.appHash);
                if (message.lastResultsHash != null && message.hasOwnProperty("lastResultsHash"))
                    writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.lastResultsHash);
                if (message.evidenceHash != null && message.hasOwnProperty("evidenceHash"))
                    writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.evidenceHash);
                if (message.proposerAddress != null && message.hasOwnProperty("proposerAddress"))
                    writer.uint32(/* id 14, wireType 2 =*/114).bytes(message.proposerAddress);
                if (message.coreChainLockedHeight != null && message.hasOwnProperty("coreChainLockedHeight"))
                    writer.uint32(/* id 100, wireType 0 =*/800).uint32(message.coreChainLockedHeight);
                return writer;
            };

            /**
             * Encodes the specified Header message, length delimited. Does not implicitly {@link tendermint.types.Header.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.types.Header
             * @static
             * @param {tendermint.types.IHeader} message Header message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Header.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Header message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.types.Header
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.types.Header} Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Header.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.types.Header();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.version = $root.tendermint.version.Consensus.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.chainId = reader.string();
                        break;
                    case 3:
                        message.height = reader.int64();
                        break;
                    case 100:
                        message.coreChainLockedHeight = reader.uint32();
                        break;
                    case 4:
                        message.time = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.lastBlockId = $root.tendermint.types.BlockID.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.lastCommitHash = reader.bytes();
                        break;
                    case 7:
                        message.dataHash = reader.bytes();
                        break;
                    case 8:
                        message.validatorsHash = reader.bytes();
                        break;
                    case 9:
                        message.nextValidatorsHash = reader.bytes();
                        break;
                    case 10:
                        message.consensusHash = reader.bytes();
                        break;
                    case 11:
                        message.appHash = reader.bytes();
                        break;
                    case 12:
                        message.lastResultsHash = reader.bytes();
                        break;
                    case 13:
                        message.evidenceHash = reader.bytes();
                        break;
                    case 14:
                        message.proposerAddress = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Header message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.types.Header
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.types.Header} Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Header.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Header message.
             * @function verify
             * @memberof tendermint.types.Header
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Header.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.version != null && message.hasOwnProperty("version")) {
                    var error = $root.tendermint.version.Consensus.verify(message.version);
                    if (error)
                        return "version." + error;
                }
                if (message.chainId != null && message.hasOwnProperty("chainId"))
                    if (!$util.isString(message.chainId))
                        return "chainId: string expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                if (message.coreChainLockedHeight != null && message.hasOwnProperty("coreChainLockedHeight"))
                    if (!$util.isInteger(message.coreChainLockedHeight))
                        return "coreChainLockedHeight: integer expected";
                if (message.time != null && message.hasOwnProperty("time")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.time);
                    if (error)
                        return "time." + error;
                }
                if (message.lastBlockId != null && message.hasOwnProperty("lastBlockId")) {
                    var error = $root.tendermint.types.BlockID.verify(message.lastBlockId);
                    if (error)
                        return "lastBlockId." + error;
                }
                if (message.lastCommitHash != null && message.hasOwnProperty("lastCommitHash"))
                    if (!(message.lastCommitHash && typeof message.lastCommitHash.length === "number" || $util.isString(message.lastCommitHash)))
                        return "lastCommitHash: buffer expected";
                if (message.dataHash != null && message.hasOwnProperty("dataHash"))
                    if (!(message.dataHash && typeof message.dataHash.length === "number" || $util.isString(message.dataHash)))
                        return "dataHash: buffer expected";
                if (message.validatorsHash != null && message.hasOwnProperty("validatorsHash"))
                    if (!(message.validatorsHash && typeof message.validatorsHash.length === "number" || $util.isString(message.validatorsHash)))
                        return "validatorsHash: buffer expected";
                if (message.nextValidatorsHash != null && message.hasOwnProperty("nextValidatorsHash"))
                    if (!(message.nextValidatorsHash && typeof message.nextValidatorsHash.length === "number" || $util.isString(message.nextValidatorsHash)))
                        return "nextValidatorsHash: buffer expected";
                if (message.consensusHash != null && message.hasOwnProperty("consensusHash"))
                    if (!(message.consensusHash && typeof message.consensusHash.length === "number" || $util.isString(message.consensusHash)))
                        return "consensusHash: buffer expected";
                if (message.appHash != null && message.hasOwnProperty("appHash"))
                    if (!(message.appHash && typeof message.appHash.length === "number" || $util.isString(message.appHash)))
                        return "appHash: buffer expected";
                if (message.lastResultsHash != null && message.hasOwnProperty("lastResultsHash"))
                    if (!(message.lastResultsHash && typeof message.lastResultsHash.length === "number" || $util.isString(message.lastResultsHash)))
                        return "lastResultsHash: buffer expected";
                if (message.evidenceHash != null && message.hasOwnProperty("evidenceHash"))
                    if (!(message.evidenceHash && typeof message.evidenceHash.length === "number" || $util.isString(message.evidenceHash)))
                        return "evidenceHash: buffer expected";
                if (message.proposerAddress != null && message.hasOwnProperty("proposerAddress"))
                    if (!(message.proposerAddress && typeof message.proposerAddress.length === "number" || $util.isString(message.proposerAddress)))
                        return "proposerAddress: buffer expected";
                return null;
            };

            /**
             * Creates a Header message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.types.Header
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.types.Header} Header
             */
            Header.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.types.Header)
                    return object;
                var message = new $root.tendermint.types.Header();
                if (object.version != null) {
                    if (typeof object.version !== "object")
                        throw TypeError(".tendermint.types.Header.version: object expected");
                    message.version = $root.tendermint.version.Consensus.fromObject(object.version);
                }
                if (object.chainId != null)
                    message.chainId = String(object.chainId);
                if (object.height != null)
                    if ($util.Long)
                        (message.height = $util.Long.fromValue(object.height)).unsigned = false;
                    else if (typeof object.height === "string")
                        message.height = parseInt(object.height, 10);
                    else if (typeof object.height === "number")
                        message.height = object.height;
                    else if (typeof object.height === "object")
                        message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber();
                if (object.coreChainLockedHeight != null)
                    message.coreChainLockedHeight = object.coreChainLockedHeight >>> 0;
                if (object.time != null) {
                    if (typeof object.time !== "object")
                        throw TypeError(".tendermint.types.Header.time: object expected");
                    message.time = $root.google.protobuf.Timestamp.fromObject(object.time);
                }
                if (object.lastBlockId != null) {
                    if (typeof object.lastBlockId !== "object")
                        throw TypeError(".tendermint.types.Header.lastBlockId: object expected");
                    message.lastBlockId = $root.tendermint.types.BlockID.fromObject(object.lastBlockId);
                }
                if (object.lastCommitHash != null)
                    if (typeof object.lastCommitHash === "string")
                        $util.base64.decode(object.lastCommitHash, message.lastCommitHash = $util.newBuffer($util.base64.length(object.lastCommitHash)), 0);
                    else if (object.lastCommitHash.length)
                        message.lastCommitHash = object.lastCommitHash;
                if (object.dataHash != null)
                    if (typeof object.dataHash === "string")
                        $util.base64.decode(object.dataHash, message.dataHash = $util.newBuffer($util.base64.length(object.dataHash)), 0);
                    else if (object.dataHash.length)
                        message.dataHash = object.dataHash;
                if (object.validatorsHash != null)
                    if (typeof object.validatorsHash === "string")
                        $util.base64.decode(object.validatorsHash, message.validatorsHash = $util.newBuffer($util.base64.length(object.validatorsHash)), 0);
                    else if (object.validatorsHash.length)
                        message.validatorsHash = object.validatorsHash;
                if (object.nextValidatorsHash != null)
                    if (typeof object.nextValidatorsHash === "string")
                        $util.base64.decode(object.nextValidatorsHash, message.nextValidatorsHash = $util.newBuffer($util.base64.length(object.nextValidatorsHash)), 0);
                    else if (object.nextValidatorsHash.length)
                        message.nextValidatorsHash = object.nextValidatorsHash;
                if (object.consensusHash != null)
                    if (typeof object.consensusHash === "string")
                        $util.base64.decode(object.consensusHash, message.consensusHash = $util.newBuffer($util.base64.length(object.consensusHash)), 0);
                    else if (object.consensusHash.length)
                        message.consensusHash = object.consensusHash;
                if (object.appHash != null)
                    if (typeof object.appHash === "string")
                        $util.base64.decode(object.appHash, message.appHash = $util.newBuffer($util.base64.length(object.appHash)), 0);
                    else if (object.appHash.length)
                        message.appHash = object.appHash;
                if (object.lastResultsHash != null)
                    if (typeof object.lastResultsHash === "string")
                        $util.base64.decode(object.lastResultsHash, message.lastResultsHash = $util.newBuffer($util.base64.length(object.lastResultsHash)), 0);
                    else if (object.lastResultsHash.length)
                        message.lastResultsHash = object.lastResultsHash;
                if (object.evidenceHash != null)
                    if (typeof object.evidenceHash === "string")
                        $util.base64.decode(object.evidenceHash, message.evidenceHash = $util.newBuffer($util.base64.length(object.evidenceHash)), 0);
                    else if (object.evidenceHash.length)
                        message.evidenceHash = object.evidenceHash;
                if (object.proposerAddress != null)
                    if (typeof object.proposerAddress === "string")
                        $util.base64.decode(object.proposerAddress, message.proposerAddress = $util.newBuffer($util.base64.length(object.proposerAddress)), 0);
                    else if (object.proposerAddress.length)
                        message.proposerAddress = object.proposerAddress;
                return message;
            };

            /**
             * Creates a plain object from a Header message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.types.Header
             * @static
             * @param {tendermint.types.Header} message Header
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Header.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.version = null;
                    object.chainId = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.height = options.longs === String ? "0" : 0;
                    object.time = null;
                    object.lastBlockId = null;
                    if (options.bytes === String)
                        object.lastCommitHash = "";
                    else {
                        object.lastCommitHash = [];
                        if (options.bytes !== Array)
                            object.lastCommitHash = $util.newBuffer(object.lastCommitHash);
                    }
                    if (options.bytes === String)
                        object.dataHash = "";
                    else {
                        object.dataHash = [];
                        if (options.bytes !== Array)
                            object.dataHash = $util.newBuffer(object.dataHash);
                    }
                    if (options.bytes === String)
                        object.validatorsHash = "";
                    else {
                        object.validatorsHash = [];
                        if (options.bytes !== Array)
                            object.validatorsHash = $util.newBuffer(object.validatorsHash);
                    }
                    if (options.bytes === String)
                        object.nextValidatorsHash = "";
                    else {
                        object.nextValidatorsHash = [];
                        if (options.bytes !== Array)
                            object.nextValidatorsHash = $util.newBuffer(object.nextValidatorsHash);
                    }
                    if (options.bytes === String)
                        object.consensusHash = "";
                    else {
                        object.consensusHash = [];
                        if (options.bytes !== Array)
                            object.consensusHash = $util.newBuffer(object.consensusHash);
                    }
                    if (options.bytes === String)
                        object.appHash = "";
                    else {
                        object.appHash = [];
                        if (options.bytes !== Array)
                            object.appHash = $util.newBuffer(object.appHash);
                    }
                    if (options.bytes === String)
                        object.lastResultsHash = "";
                    else {
                        object.lastResultsHash = [];
                        if (options.bytes !== Array)
                            object.lastResultsHash = $util.newBuffer(object.lastResultsHash);
                    }
                    if (options.bytes === String)
                        object.evidenceHash = "";
                    else {
                        object.evidenceHash = [];
                        if (options.bytes !== Array)
                            object.evidenceHash = $util.newBuffer(object.evidenceHash);
                    }
                    if (options.bytes === String)
                        object.proposerAddress = "";
                    else {
                        object.proposerAddress = [];
                        if (options.bytes !== Array)
                            object.proposerAddress = $util.newBuffer(object.proposerAddress);
                    }
                    object.coreChainLockedHeight = 0;
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = $root.tendermint.version.Consensus.toObject(message.version, options);
                if (message.chainId != null && message.hasOwnProperty("chainId"))
                    object.chainId = message.chainId;
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber() : message.height;
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = $root.google.protobuf.Timestamp.toObject(message.time, options);
                if (message.lastBlockId != null && message.hasOwnProperty("lastBlockId"))
                    object.lastBlockId = $root.tendermint.types.BlockID.toObject(message.lastBlockId, options);
                if (message.lastCommitHash != null && message.hasOwnProperty("lastCommitHash"))
                    object.lastCommitHash = options.bytes === String ? $util.base64.encode(message.lastCommitHash, 0, message.lastCommitHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.lastCommitHash) : message.lastCommitHash;
                if (message.dataHash != null && message.hasOwnProperty("dataHash"))
                    object.dataHash = options.bytes === String ? $util.base64.encode(message.dataHash, 0, message.dataHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.dataHash) : message.dataHash;
                if (message.validatorsHash != null && message.hasOwnProperty("validatorsHash"))
                    object.validatorsHash = options.bytes === String ? $util.base64.encode(message.validatorsHash, 0, message.validatorsHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.validatorsHash) : message.validatorsHash;
                if (message.nextValidatorsHash != null && message.hasOwnProperty("nextValidatorsHash"))
                    object.nextValidatorsHash = options.bytes === String ? $util.base64.encode(message.nextValidatorsHash, 0, message.nextValidatorsHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.nextValidatorsHash) : message.nextValidatorsHash;
                if (message.consensusHash != null && message.hasOwnProperty("consensusHash"))
                    object.consensusHash = options.bytes === String ? $util.base64.encode(message.consensusHash, 0, message.consensusHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.consensusHash) : message.consensusHash;
                if (message.appHash != null && message.hasOwnProperty("appHash"))
                    object.appHash = options.bytes === String ? $util.base64.encode(message.appHash, 0, message.appHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.appHash) : message.appHash;
                if (message.lastResultsHash != null && message.hasOwnProperty("lastResultsHash"))
                    object.lastResultsHash = options.bytes === String ? $util.base64.encode(message.lastResultsHash, 0, message.lastResultsHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.lastResultsHash) : message.lastResultsHash;
                if (message.evidenceHash != null && message.hasOwnProperty("evidenceHash"))
                    object.evidenceHash = options.bytes === String ? $util.base64.encode(message.evidenceHash, 0, message.evidenceHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.evidenceHash) : message.evidenceHash;
                if (message.proposerAddress != null && message.hasOwnProperty("proposerAddress"))
                    object.proposerAddress = options.bytes === String ? $util.base64.encode(message.proposerAddress, 0, message.proposerAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.proposerAddress) : message.proposerAddress;
                if (message.coreChainLockedHeight != null && message.hasOwnProperty("coreChainLockedHeight"))
                    object.coreChainLockedHeight = message.coreChainLockedHeight;
                return object;
            };

            /**
             * Converts this Header to JSON.
             * @function toJSON
             * @memberof tendermint.types.Header
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Header.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Header;
        })();

        types.CoreChainLock = (function() {

            /**
             * Properties of a CoreChainLock.
             * @memberof tendermint.types
             * @interface ICoreChainLock
             * @property {number|null} [coreBlockHeight] CoreChainLock coreBlockHeight
             * @property {Uint8Array|null} [coreBlockHash] CoreChainLock coreBlockHash
             * @property {Uint8Array|null} [signature] CoreChainLock signature
             */

            /**
             * Constructs a new CoreChainLock.
             * @memberof tendermint.types
             * @classdesc Represents a CoreChainLock.
             * @implements ICoreChainLock
             * @constructor
             * @param {tendermint.types.ICoreChainLock=} [properties] Properties to set
             */
            function CoreChainLock(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CoreChainLock coreBlockHeight.
             * @member {number} coreBlockHeight
             * @memberof tendermint.types.CoreChainLock
             * @instance
             */
            CoreChainLock.prototype.coreBlockHeight = 0;

            /**
             * CoreChainLock coreBlockHash.
             * @member {Uint8Array} coreBlockHash
             * @memberof tendermint.types.CoreChainLock
             * @instance
             */
            CoreChainLock.prototype.coreBlockHash = $util.newBuffer([]);

            /**
             * CoreChainLock signature.
             * @member {Uint8Array} signature
             * @memberof tendermint.types.CoreChainLock
             * @instance
             */
            CoreChainLock.prototype.signature = $util.newBuffer([]);

            /**
             * Creates a new CoreChainLock instance using the specified properties.
             * @function create
             * @memberof tendermint.types.CoreChainLock
             * @static
             * @param {tendermint.types.ICoreChainLock=} [properties] Properties to set
             * @returns {tendermint.types.CoreChainLock} CoreChainLock instance
             */
            CoreChainLock.create = function create(properties) {
                return new CoreChainLock(properties);
            };

            /**
             * Encodes the specified CoreChainLock message. Does not implicitly {@link tendermint.types.CoreChainLock.verify|verify} messages.
             * @function encode
             * @memberof tendermint.types.CoreChainLock
             * @static
             * @param {tendermint.types.ICoreChainLock} message CoreChainLock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CoreChainLock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.coreBlockHeight != null && message.hasOwnProperty("coreBlockHeight"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.coreBlockHeight);
                if (message.coreBlockHash != null && message.hasOwnProperty("coreBlockHash"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.coreBlockHash);
                if (message.signature != null && message.hasOwnProperty("signature"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signature);
                return writer;
            };

            /**
             * Encodes the specified CoreChainLock message, length delimited. Does not implicitly {@link tendermint.types.CoreChainLock.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.types.CoreChainLock
             * @static
             * @param {tendermint.types.ICoreChainLock} message CoreChainLock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CoreChainLock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CoreChainLock message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.types.CoreChainLock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.types.CoreChainLock} CoreChainLock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CoreChainLock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.types.CoreChainLock();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.coreBlockHeight = reader.uint32();
                        break;
                    case 2:
                        message.coreBlockHash = reader.bytes();
                        break;
                    case 3:
                        message.signature = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CoreChainLock message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.types.CoreChainLock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.types.CoreChainLock} CoreChainLock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CoreChainLock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CoreChainLock message.
             * @function verify
             * @memberof tendermint.types.CoreChainLock
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CoreChainLock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.coreBlockHeight != null && message.hasOwnProperty("coreBlockHeight"))
                    if (!$util.isInteger(message.coreBlockHeight))
                        return "coreBlockHeight: integer expected";
                if (message.coreBlockHash != null && message.hasOwnProperty("coreBlockHash"))
                    if (!(message.coreBlockHash && typeof message.coreBlockHash.length === "number" || $util.isString(message.coreBlockHash)))
                        return "coreBlockHash: buffer expected";
                if (message.signature != null && message.hasOwnProperty("signature"))
                    if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                        return "signature: buffer expected";
                return null;
            };

            /**
             * Creates a CoreChainLock message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.types.CoreChainLock
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.types.CoreChainLock} CoreChainLock
             */
            CoreChainLock.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.types.CoreChainLock)
                    return object;
                var message = new $root.tendermint.types.CoreChainLock();
                if (object.coreBlockHeight != null)
                    message.coreBlockHeight = object.coreBlockHeight >>> 0;
                if (object.coreBlockHash != null)
                    if (typeof object.coreBlockHash === "string")
                        $util.base64.decode(object.coreBlockHash, message.coreBlockHash = $util.newBuffer($util.base64.length(object.coreBlockHash)), 0);
                    else if (object.coreBlockHash.length)
                        message.coreBlockHash = object.coreBlockHash;
                if (object.signature != null)
                    if (typeof object.signature === "string")
                        $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                    else if (object.signature.length)
                        message.signature = object.signature;
                return message;
            };

            /**
             * Creates a plain object from a CoreChainLock message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.types.CoreChainLock
             * @static
             * @param {tendermint.types.CoreChainLock} message CoreChainLock
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CoreChainLock.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.coreBlockHeight = 0;
                    if (options.bytes === String)
                        object.coreBlockHash = "";
                    else {
                        object.coreBlockHash = [];
                        if (options.bytes !== Array)
                            object.coreBlockHash = $util.newBuffer(object.coreBlockHash);
                    }
                    if (options.bytes === String)
                        object.signature = "";
                    else {
                        object.signature = [];
                        if (options.bytes !== Array)
                            object.signature = $util.newBuffer(object.signature);
                    }
                }
                if (message.coreBlockHeight != null && message.hasOwnProperty("coreBlockHeight"))
                    object.coreBlockHeight = message.coreBlockHeight;
                if (message.coreBlockHash != null && message.hasOwnProperty("coreBlockHash"))
                    object.coreBlockHash = options.bytes === String ? $util.base64.encode(message.coreBlockHash, 0, message.coreBlockHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.coreBlockHash) : message.coreBlockHash;
                if (message.signature != null && message.hasOwnProperty("signature"))
                    object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
                return object;
            };

            /**
             * Converts this CoreChainLock to JSON.
             * @function toJSON
             * @memberof tendermint.types.CoreChainLock
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CoreChainLock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CoreChainLock;
        })();

        types.ConsensusParams = (function() {

            /**
             * Properties of a ConsensusParams.
             * @memberof tendermint.types
             * @interface IConsensusParams
             * @property {tendermint.types.IBlockParams|null} [block] ConsensusParams block
             * @property {tendermint.types.IEvidenceParams|null} [evidence] ConsensusParams evidence
             * @property {tendermint.types.IValidatorParams|null} [validator] ConsensusParams validator
             * @property {tendermint.types.IVersionParams|null} [version] ConsensusParams version
             */

            /**
             * Constructs a new ConsensusParams.
             * @memberof tendermint.types
             * @classdesc Represents a ConsensusParams.
             * @implements IConsensusParams
             * @constructor
             * @param {tendermint.types.IConsensusParams=} [properties] Properties to set
             */
            function ConsensusParams(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConsensusParams block.
             * @member {tendermint.types.IBlockParams|null|undefined} block
             * @memberof tendermint.types.ConsensusParams
             * @instance
             */
            ConsensusParams.prototype.block = null;

            /**
             * ConsensusParams evidence.
             * @member {tendermint.types.IEvidenceParams|null|undefined} evidence
             * @memberof tendermint.types.ConsensusParams
             * @instance
             */
            ConsensusParams.prototype.evidence = null;

            /**
             * ConsensusParams validator.
             * @member {tendermint.types.IValidatorParams|null|undefined} validator
             * @memberof tendermint.types.ConsensusParams
             * @instance
             */
            ConsensusParams.prototype.validator = null;

            /**
             * ConsensusParams version.
             * @member {tendermint.types.IVersionParams|null|undefined} version
             * @memberof tendermint.types.ConsensusParams
             * @instance
             */
            ConsensusParams.prototype.version = null;

            /**
             * Creates a new ConsensusParams instance using the specified properties.
             * @function create
             * @memberof tendermint.types.ConsensusParams
             * @static
             * @param {tendermint.types.IConsensusParams=} [properties] Properties to set
             * @returns {tendermint.types.ConsensusParams} ConsensusParams instance
             */
            ConsensusParams.create = function create(properties) {
                return new ConsensusParams(properties);
            };

            /**
             * Encodes the specified ConsensusParams message. Does not implicitly {@link tendermint.types.ConsensusParams.verify|verify} messages.
             * @function encode
             * @memberof tendermint.types.ConsensusParams
             * @static
             * @param {tendermint.types.IConsensusParams} message ConsensusParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConsensusParams.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.block != null && message.hasOwnProperty("block"))
                    $root.tendermint.types.BlockParams.encode(message.block, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.evidence != null && message.hasOwnProperty("evidence"))
                    $root.tendermint.types.EvidenceParams.encode(message.evidence, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.validator != null && message.hasOwnProperty("validator"))
                    $root.tendermint.types.ValidatorParams.encode(message.validator, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.version != null && message.hasOwnProperty("version"))
                    $root.tendermint.types.VersionParams.encode(message.version, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ConsensusParams message, length delimited. Does not implicitly {@link tendermint.types.ConsensusParams.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.types.ConsensusParams
             * @static
             * @param {tendermint.types.IConsensusParams} message ConsensusParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConsensusParams.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.types.ConsensusParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.types.ConsensusParams} ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConsensusParams.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.types.ConsensusParams();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.block = $root.tendermint.types.BlockParams.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.evidence = $root.tendermint.types.EvidenceParams.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.validator = $root.tendermint.types.ValidatorParams.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.version = $root.tendermint.types.VersionParams.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.types.ConsensusParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.types.ConsensusParams} ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConsensusParams.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConsensusParams message.
             * @function verify
             * @memberof tendermint.types.ConsensusParams
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConsensusParams.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.block != null && message.hasOwnProperty("block")) {
                    var error = $root.tendermint.types.BlockParams.verify(message.block);
                    if (error)
                        return "block." + error;
                }
                if (message.evidence != null && message.hasOwnProperty("evidence")) {
                    var error = $root.tendermint.types.EvidenceParams.verify(message.evidence);
                    if (error)
                        return "evidence." + error;
                }
                if (message.validator != null && message.hasOwnProperty("validator")) {
                    var error = $root.tendermint.types.ValidatorParams.verify(message.validator);
                    if (error)
                        return "validator." + error;
                }
                if (message.version != null && message.hasOwnProperty("version")) {
                    var error = $root.tendermint.types.VersionParams.verify(message.version);
                    if (error)
                        return "version." + error;
                }
                return null;
            };

            /**
             * Creates a ConsensusParams message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.types.ConsensusParams
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.types.ConsensusParams} ConsensusParams
             */
            ConsensusParams.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.types.ConsensusParams)
                    return object;
                var message = new $root.tendermint.types.ConsensusParams();
                if (object.block != null) {
                    if (typeof object.block !== "object")
                        throw TypeError(".tendermint.types.ConsensusParams.block: object expected");
                    message.block = $root.tendermint.types.BlockParams.fromObject(object.block);
                }
                if (object.evidence != null) {
                    if (typeof object.evidence !== "object")
                        throw TypeError(".tendermint.types.ConsensusParams.evidence: object expected");
                    message.evidence = $root.tendermint.types.EvidenceParams.fromObject(object.evidence);
                }
                if (object.validator != null) {
                    if (typeof object.validator !== "object")
                        throw TypeError(".tendermint.types.ConsensusParams.validator: object expected");
                    message.validator = $root.tendermint.types.ValidatorParams.fromObject(object.validator);
                }
                if (object.version != null) {
                    if (typeof object.version !== "object")
                        throw TypeError(".tendermint.types.ConsensusParams.version: object expected");
                    message.version = $root.tendermint.types.VersionParams.fromObject(object.version);
                }
                return message;
            };

            /**
             * Creates a plain object from a ConsensusParams message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.types.ConsensusParams
             * @static
             * @param {tendermint.types.ConsensusParams} message ConsensusParams
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConsensusParams.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.block = null;
                    object.evidence = null;
                    object.validator = null;
                    object.version = null;
                }
                if (message.block != null && message.hasOwnProperty("block"))
                    object.block = $root.tendermint.types.BlockParams.toObject(message.block, options);
                if (message.evidence != null && message.hasOwnProperty("evidence"))
                    object.evidence = $root.tendermint.types.EvidenceParams.toObject(message.evidence, options);
                if (message.validator != null && message.hasOwnProperty("validator"))
                    object.validator = $root.tendermint.types.ValidatorParams.toObject(message.validator, options);
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = $root.tendermint.types.VersionParams.toObject(message.version, options);
                return object;
            };

            /**
             * Converts this ConsensusParams to JSON.
             * @function toJSON
             * @memberof tendermint.types.ConsensusParams
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConsensusParams.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ConsensusParams;
        })();

        types.BlockParams = (function() {

            /**
             * Properties of a BlockParams.
             * @memberof tendermint.types
             * @interface IBlockParams
             * @property {number|Long|null} [maxBytes] BlockParams maxBytes
             * @property {number|Long|null} [maxGas] BlockParams maxGas
             * @property {number|Long|null} [timeIotaMs] BlockParams timeIotaMs
             */

            /**
             * Constructs a new BlockParams.
             * @memberof tendermint.types
             * @classdesc Represents a BlockParams.
             * @implements IBlockParams
             * @constructor
             * @param {tendermint.types.IBlockParams=} [properties] Properties to set
             */
            function BlockParams(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BlockParams maxBytes.
             * @member {number|Long} maxBytes
             * @memberof tendermint.types.BlockParams
             * @instance
             */
            BlockParams.prototype.maxBytes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * BlockParams maxGas.
             * @member {number|Long} maxGas
             * @memberof tendermint.types.BlockParams
             * @instance
             */
            BlockParams.prototype.maxGas = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * BlockParams timeIotaMs.
             * @member {number|Long} timeIotaMs
             * @memberof tendermint.types.BlockParams
             * @instance
             */
            BlockParams.prototype.timeIotaMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new BlockParams instance using the specified properties.
             * @function create
             * @memberof tendermint.types.BlockParams
             * @static
             * @param {tendermint.types.IBlockParams=} [properties] Properties to set
             * @returns {tendermint.types.BlockParams} BlockParams instance
             */
            BlockParams.create = function create(properties) {
                return new BlockParams(properties);
            };

            /**
             * Encodes the specified BlockParams message. Does not implicitly {@link tendermint.types.BlockParams.verify|verify} messages.
             * @function encode
             * @memberof tendermint.types.BlockParams
             * @static
             * @param {tendermint.types.IBlockParams} message BlockParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BlockParams.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.maxBytes != null && message.hasOwnProperty("maxBytes"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.maxBytes);
                if (message.maxGas != null && message.hasOwnProperty("maxGas"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.maxGas);
                if (message.timeIotaMs != null && message.hasOwnProperty("timeIotaMs"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timeIotaMs);
                return writer;
            };

            /**
             * Encodes the specified BlockParams message, length delimited. Does not implicitly {@link tendermint.types.BlockParams.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.types.BlockParams
             * @static
             * @param {tendermint.types.IBlockParams} message BlockParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BlockParams.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BlockParams message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.types.BlockParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.types.BlockParams} BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BlockParams.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.types.BlockParams();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.maxBytes = reader.int64();
                        break;
                    case 2:
                        message.maxGas = reader.int64();
                        break;
                    case 3:
                        message.timeIotaMs = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BlockParams message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.types.BlockParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.types.BlockParams} BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BlockParams.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BlockParams message.
             * @function verify
             * @memberof tendermint.types.BlockParams
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BlockParams.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.maxBytes != null && message.hasOwnProperty("maxBytes"))
                    if (!$util.isInteger(message.maxBytes) && !(message.maxBytes && $util.isInteger(message.maxBytes.low) && $util.isInteger(message.maxBytes.high)))
                        return "maxBytes: integer|Long expected";
                if (message.maxGas != null && message.hasOwnProperty("maxGas"))
                    if (!$util.isInteger(message.maxGas) && !(message.maxGas && $util.isInteger(message.maxGas.low) && $util.isInteger(message.maxGas.high)))
                        return "maxGas: integer|Long expected";
                if (message.timeIotaMs != null && message.hasOwnProperty("timeIotaMs"))
                    if (!$util.isInteger(message.timeIotaMs) && !(message.timeIotaMs && $util.isInteger(message.timeIotaMs.low) && $util.isInteger(message.timeIotaMs.high)))
                        return "timeIotaMs: integer|Long expected";
                return null;
            };

            /**
             * Creates a BlockParams message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.types.BlockParams
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.types.BlockParams} BlockParams
             */
            BlockParams.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.types.BlockParams)
                    return object;
                var message = new $root.tendermint.types.BlockParams();
                if (object.maxBytes != null)
                    if ($util.Long)
                        (message.maxBytes = $util.Long.fromValue(object.maxBytes)).unsigned = false;
                    else if (typeof object.maxBytes === "string")
                        message.maxBytes = parseInt(object.maxBytes, 10);
                    else if (typeof object.maxBytes === "number")
                        message.maxBytes = object.maxBytes;
                    else if (typeof object.maxBytes === "object")
                        message.maxBytes = new $util.LongBits(object.maxBytes.low >>> 0, object.maxBytes.high >>> 0).toNumber();
                if (object.maxGas != null)
                    if ($util.Long)
                        (message.maxGas = $util.Long.fromValue(object.maxGas)).unsigned = false;
                    else if (typeof object.maxGas === "string")
                        message.maxGas = parseInt(object.maxGas, 10);
                    else if (typeof object.maxGas === "number")
                        message.maxGas = object.maxGas;
                    else if (typeof object.maxGas === "object")
                        message.maxGas = new $util.LongBits(object.maxGas.low >>> 0, object.maxGas.high >>> 0).toNumber();
                if (object.timeIotaMs != null)
                    if ($util.Long)
                        (message.timeIotaMs = $util.Long.fromValue(object.timeIotaMs)).unsigned = false;
                    else if (typeof object.timeIotaMs === "string")
                        message.timeIotaMs = parseInt(object.timeIotaMs, 10);
                    else if (typeof object.timeIotaMs === "number")
                        message.timeIotaMs = object.timeIotaMs;
                    else if (typeof object.timeIotaMs === "object")
                        message.timeIotaMs = new $util.LongBits(object.timeIotaMs.low >>> 0, object.timeIotaMs.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a BlockParams message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.types.BlockParams
             * @static
             * @param {tendermint.types.BlockParams} message BlockParams
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BlockParams.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.maxBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.maxBytes = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.maxGas = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.maxGas = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.timeIotaMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timeIotaMs = options.longs === String ? "0" : 0;
                }
                if (message.maxBytes != null && message.hasOwnProperty("maxBytes"))
                    if (typeof message.maxBytes === "number")
                        object.maxBytes = options.longs === String ? String(message.maxBytes) : message.maxBytes;
                    else
                        object.maxBytes = options.longs === String ? $util.Long.prototype.toString.call(message.maxBytes) : options.longs === Number ? new $util.LongBits(message.maxBytes.low >>> 0, message.maxBytes.high >>> 0).toNumber() : message.maxBytes;
                if (message.maxGas != null && message.hasOwnProperty("maxGas"))
                    if (typeof message.maxGas === "number")
                        object.maxGas = options.longs === String ? String(message.maxGas) : message.maxGas;
                    else
                        object.maxGas = options.longs === String ? $util.Long.prototype.toString.call(message.maxGas) : options.longs === Number ? new $util.LongBits(message.maxGas.low >>> 0, message.maxGas.high >>> 0).toNumber() : message.maxGas;
                if (message.timeIotaMs != null && message.hasOwnProperty("timeIotaMs"))
                    if (typeof message.timeIotaMs === "number")
                        object.timeIotaMs = options.longs === String ? String(message.timeIotaMs) : message.timeIotaMs;
                    else
                        object.timeIotaMs = options.longs === String ? $util.Long.prototype.toString.call(message.timeIotaMs) : options.longs === Number ? new $util.LongBits(message.timeIotaMs.low >>> 0, message.timeIotaMs.high >>> 0).toNumber() : message.timeIotaMs;
                return object;
            };

            /**
             * Converts this BlockParams to JSON.
             * @function toJSON
             * @memberof tendermint.types.BlockParams
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BlockParams.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BlockParams;
        })();

        types.EvidenceParams = (function() {

            /**
             * Properties of an EvidenceParams.
             * @memberof tendermint.types
             * @interface IEvidenceParams
             * @property {number|Long|null} [maxAgeNumBlocks] EvidenceParams maxAgeNumBlocks
             * @property {google.protobuf.IDuration|null} [maxAgeDuration] EvidenceParams maxAgeDuration
             * @property {number|Long|null} [maxBytes] EvidenceParams maxBytes
             */

            /**
             * Constructs a new EvidenceParams.
             * @memberof tendermint.types
             * @classdesc Represents an EvidenceParams.
             * @implements IEvidenceParams
             * @constructor
             * @param {tendermint.types.IEvidenceParams=} [properties] Properties to set
             */
            function EvidenceParams(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EvidenceParams maxAgeNumBlocks.
             * @member {number|Long} maxAgeNumBlocks
             * @memberof tendermint.types.EvidenceParams
             * @instance
             */
            EvidenceParams.prototype.maxAgeNumBlocks = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * EvidenceParams maxAgeDuration.
             * @member {google.protobuf.IDuration|null|undefined} maxAgeDuration
             * @memberof tendermint.types.EvidenceParams
             * @instance
             */
            EvidenceParams.prototype.maxAgeDuration = null;

            /**
             * EvidenceParams maxBytes.
             * @member {number|Long} maxBytes
             * @memberof tendermint.types.EvidenceParams
             * @instance
             */
            EvidenceParams.prototype.maxBytes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new EvidenceParams instance using the specified properties.
             * @function create
             * @memberof tendermint.types.EvidenceParams
             * @static
             * @param {tendermint.types.IEvidenceParams=} [properties] Properties to set
             * @returns {tendermint.types.EvidenceParams} EvidenceParams instance
             */
            EvidenceParams.create = function create(properties) {
                return new EvidenceParams(properties);
            };

            /**
             * Encodes the specified EvidenceParams message. Does not implicitly {@link tendermint.types.EvidenceParams.verify|verify} messages.
             * @function encode
             * @memberof tendermint.types.EvidenceParams
             * @static
             * @param {tendermint.types.IEvidenceParams} message EvidenceParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EvidenceParams.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.maxAgeNumBlocks != null && message.hasOwnProperty("maxAgeNumBlocks"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.maxAgeNumBlocks);
                if (message.maxAgeDuration != null && message.hasOwnProperty("maxAgeDuration"))
                    $root.google.protobuf.Duration.encode(message.maxAgeDuration, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.maxBytes != null && message.hasOwnProperty("maxBytes"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.maxBytes);
                return writer;
            };

            /**
             * Encodes the specified EvidenceParams message, length delimited. Does not implicitly {@link tendermint.types.EvidenceParams.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.types.EvidenceParams
             * @static
             * @param {tendermint.types.IEvidenceParams} message EvidenceParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EvidenceParams.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EvidenceParams message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.types.EvidenceParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.types.EvidenceParams} EvidenceParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EvidenceParams.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.types.EvidenceParams();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.maxAgeNumBlocks = reader.int64();
                        break;
                    case 2:
                        message.maxAgeDuration = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.maxBytes = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EvidenceParams message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.types.EvidenceParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.types.EvidenceParams} EvidenceParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EvidenceParams.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EvidenceParams message.
             * @function verify
             * @memberof tendermint.types.EvidenceParams
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EvidenceParams.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.maxAgeNumBlocks != null && message.hasOwnProperty("maxAgeNumBlocks"))
                    if (!$util.isInteger(message.maxAgeNumBlocks) && !(message.maxAgeNumBlocks && $util.isInteger(message.maxAgeNumBlocks.low) && $util.isInteger(message.maxAgeNumBlocks.high)))
                        return "maxAgeNumBlocks: integer|Long expected";
                if (message.maxAgeDuration != null && message.hasOwnProperty("maxAgeDuration")) {
                    var error = $root.google.protobuf.Duration.verify(message.maxAgeDuration);
                    if (error)
                        return "maxAgeDuration." + error;
                }
                if (message.maxBytes != null && message.hasOwnProperty("maxBytes"))
                    if (!$util.isInteger(message.maxBytes) && !(message.maxBytes && $util.isInteger(message.maxBytes.low) && $util.isInteger(message.maxBytes.high)))
                        return "maxBytes: integer|Long expected";
                return null;
            };

            /**
             * Creates an EvidenceParams message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.types.EvidenceParams
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.types.EvidenceParams} EvidenceParams
             */
            EvidenceParams.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.types.EvidenceParams)
                    return object;
                var message = new $root.tendermint.types.EvidenceParams();
                if (object.maxAgeNumBlocks != null)
                    if ($util.Long)
                        (message.maxAgeNumBlocks = $util.Long.fromValue(object.maxAgeNumBlocks)).unsigned = false;
                    else if (typeof object.maxAgeNumBlocks === "string")
                        message.maxAgeNumBlocks = parseInt(object.maxAgeNumBlocks, 10);
                    else if (typeof object.maxAgeNumBlocks === "number")
                        message.maxAgeNumBlocks = object.maxAgeNumBlocks;
                    else if (typeof object.maxAgeNumBlocks === "object")
                        message.maxAgeNumBlocks = new $util.LongBits(object.maxAgeNumBlocks.low >>> 0, object.maxAgeNumBlocks.high >>> 0).toNumber();
                if (object.maxAgeDuration != null) {
                    if (typeof object.maxAgeDuration !== "object")
                        throw TypeError(".tendermint.types.EvidenceParams.maxAgeDuration: object expected");
                    message.maxAgeDuration = $root.google.protobuf.Duration.fromObject(object.maxAgeDuration);
                }
                if (object.maxBytes != null)
                    if ($util.Long)
                        (message.maxBytes = $util.Long.fromValue(object.maxBytes)).unsigned = false;
                    else if (typeof object.maxBytes === "string")
                        message.maxBytes = parseInt(object.maxBytes, 10);
                    else if (typeof object.maxBytes === "number")
                        message.maxBytes = object.maxBytes;
                    else if (typeof object.maxBytes === "object")
                        message.maxBytes = new $util.LongBits(object.maxBytes.low >>> 0, object.maxBytes.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an EvidenceParams message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.types.EvidenceParams
             * @static
             * @param {tendermint.types.EvidenceParams} message EvidenceParams
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EvidenceParams.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.maxAgeNumBlocks = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.maxAgeNumBlocks = options.longs === String ? "0" : 0;
                    object.maxAgeDuration = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.maxBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.maxBytes = options.longs === String ? "0" : 0;
                }
                if (message.maxAgeNumBlocks != null && message.hasOwnProperty("maxAgeNumBlocks"))
                    if (typeof message.maxAgeNumBlocks === "number")
                        object.maxAgeNumBlocks = options.longs === String ? String(message.maxAgeNumBlocks) : message.maxAgeNumBlocks;
                    else
                        object.maxAgeNumBlocks = options.longs === String ? $util.Long.prototype.toString.call(message.maxAgeNumBlocks) : options.longs === Number ? new $util.LongBits(message.maxAgeNumBlocks.low >>> 0, message.maxAgeNumBlocks.high >>> 0).toNumber() : message.maxAgeNumBlocks;
                if (message.maxAgeDuration != null && message.hasOwnProperty("maxAgeDuration"))
                    object.maxAgeDuration = $root.google.protobuf.Duration.toObject(message.maxAgeDuration, options);
                if (message.maxBytes != null && message.hasOwnProperty("maxBytes"))
                    if (typeof message.maxBytes === "number")
                        object.maxBytes = options.longs === String ? String(message.maxBytes) : message.maxBytes;
                    else
                        object.maxBytes = options.longs === String ? $util.Long.prototype.toString.call(message.maxBytes) : options.longs === Number ? new $util.LongBits(message.maxBytes.low >>> 0, message.maxBytes.high >>> 0).toNumber() : message.maxBytes;
                return object;
            };

            /**
             * Converts this EvidenceParams to JSON.
             * @function toJSON
             * @memberof tendermint.types.EvidenceParams
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EvidenceParams.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EvidenceParams;
        })();

        types.ValidatorParams = (function() {

            /**
             * Properties of a ValidatorParams.
             * @memberof tendermint.types
             * @interface IValidatorParams
             * @property {Array.<string>|null} [pubKeyTypes] ValidatorParams pubKeyTypes
             */

            /**
             * Constructs a new ValidatorParams.
             * @memberof tendermint.types
             * @classdesc Represents a ValidatorParams.
             * @implements IValidatorParams
             * @constructor
             * @param {tendermint.types.IValidatorParams=} [properties] Properties to set
             */
            function ValidatorParams(properties) {
                this.pubKeyTypes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ValidatorParams pubKeyTypes.
             * @member {Array.<string>} pubKeyTypes
             * @memberof tendermint.types.ValidatorParams
             * @instance
             */
            ValidatorParams.prototype.pubKeyTypes = $util.emptyArray;

            /**
             * Creates a new ValidatorParams instance using the specified properties.
             * @function create
             * @memberof tendermint.types.ValidatorParams
             * @static
             * @param {tendermint.types.IValidatorParams=} [properties] Properties to set
             * @returns {tendermint.types.ValidatorParams} ValidatorParams instance
             */
            ValidatorParams.create = function create(properties) {
                return new ValidatorParams(properties);
            };

            /**
             * Encodes the specified ValidatorParams message. Does not implicitly {@link tendermint.types.ValidatorParams.verify|verify} messages.
             * @function encode
             * @memberof tendermint.types.ValidatorParams
             * @static
             * @param {tendermint.types.IValidatorParams} message ValidatorParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ValidatorParams.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pubKeyTypes != null && message.pubKeyTypes.length)
                    for (var i = 0; i < message.pubKeyTypes.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.pubKeyTypes[i]);
                return writer;
            };

            /**
             * Encodes the specified ValidatorParams message, length delimited. Does not implicitly {@link tendermint.types.ValidatorParams.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.types.ValidatorParams
             * @static
             * @param {tendermint.types.IValidatorParams} message ValidatorParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ValidatorParams.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ValidatorParams message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.types.ValidatorParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.types.ValidatorParams} ValidatorParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ValidatorParams.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.types.ValidatorParams();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.pubKeyTypes && message.pubKeyTypes.length))
                            message.pubKeyTypes = [];
                        message.pubKeyTypes.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ValidatorParams message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.types.ValidatorParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.types.ValidatorParams} ValidatorParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ValidatorParams.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ValidatorParams message.
             * @function verify
             * @memberof tendermint.types.ValidatorParams
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ValidatorParams.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pubKeyTypes != null && message.hasOwnProperty("pubKeyTypes")) {
                    if (!Array.isArray(message.pubKeyTypes))
                        return "pubKeyTypes: array expected";
                    for (var i = 0; i < message.pubKeyTypes.length; ++i)
                        if (!$util.isString(message.pubKeyTypes[i]))
                            return "pubKeyTypes: string[] expected";
                }
                return null;
            };

            /**
             * Creates a ValidatorParams message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.types.ValidatorParams
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.types.ValidatorParams} ValidatorParams
             */
            ValidatorParams.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.types.ValidatorParams)
                    return object;
                var message = new $root.tendermint.types.ValidatorParams();
                if (object.pubKeyTypes) {
                    if (!Array.isArray(object.pubKeyTypes))
                        throw TypeError(".tendermint.types.ValidatorParams.pubKeyTypes: array expected");
                    message.pubKeyTypes = [];
                    for (var i = 0; i < object.pubKeyTypes.length; ++i)
                        message.pubKeyTypes[i] = String(object.pubKeyTypes[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a ValidatorParams message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.types.ValidatorParams
             * @static
             * @param {tendermint.types.ValidatorParams} message ValidatorParams
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ValidatorParams.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.pubKeyTypes = [];
                if (message.pubKeyTypes && message.pubKeyTypes.length) {
                    object.pubKeyTypes = [];
                    for (var j = 0; j < message.pubKeyTypes.length; ++j)
                        object.pubKeyTypes[j] = message.pubKeyTypes[j];
                }
                return object;
            };

            /**
             * Converts this ValidatorParams to JSON.
             * @function toJSON
             * @memberof tendermint.types.ValidatorParams
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ValidatorParams.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ValidatorParams;
        })();

        types.VersionParams = (function() {

            /**
             * Properties of a VersionParams.
             * @memberof tendermint.types
             * @interface IVersionParams
             * @property {number|Long|null} [appVersion] VersionParams appVersion
             */

            /**
             * Constructs a new VersionParams.
             * @memberof tendermint.types
             * @classdesc Represents a VersionParams.
             * @implements IVersionParams
             * @constructor
             * @param {tendermint.types.IVersionParams=} [properties] Properties to set
             */
            function VersionParams(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VersionParams appVersion.
             * @member {number|Long} appVersion
             * @memberof tendermint.types.VersionParams
             * @instance
             */
            VersionParams.prototype.appVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new VersionParams instance using the specified properties.
             * @function create
             * @memberof tendermint.types.VersionParams
             * @static
             * @param {tendermint.types.IVersionParams=} [properties] Properties to set
             * @returns {tendermint.types.VersionParams} VersionParams instance
             */
            VersionParams.create = function create(properties) {
                return new VersionParams(properties);
            };

            /**
             * Encodes the specified VersionParams message. Does not implicitly {@link tendermint.types.VersionParams.verify|verify} messages.
             * @function encode
             * @memberof tendermint.types.VersionParams
             * @static
             * @param {tendermint.types.IVersionParams} message VersionParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VersionParams.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.appVersion);
                return writer;
            };

            /**
             * Encodes the specified VersionParams message, length delimited. Does not implicitly {@link tendermint.types.VersionParams.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.types.VersionParams
             * @static
             * @param {tendermint.types.IVersionParams} message VersionParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VersionParams.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VersionParams message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.types.VersionParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.types.VersionParams} VersionParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VersionParams.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.types.VersionParams();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.appVersion = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a VersionParams message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.types.VersionParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.types.VersionParams} VersionParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VersionParams.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VersionParams message.
             * @function verify
             * @memberof tendermint.types.VersionParams
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VersionParams.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                    if (!$util.isInteger(message.appVersion) && !(message.appVersion && $util.isInteger(message.appVersion.low) && $util.isInteger(message.appVersion.high)))
                        return "appVersion: integer|Long expected";
                return null;
            };

            /**
             * Creates a VersionParams message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.types.VersionParams
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.types.VersionParams} VersionParams
             */
            VersionParams.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.types.VersionParams)
                    return object;
                var message = new $root.tendermint.types.VersionParams();
                if (object.appVersion != null)
                    if ($util.Long)
                        (message.appVersion = $util.Long.fromValue(object.appVersion)).unsigned = true;
                    else if (typeof object.appVersion === "string")
                        message.appVersion = parseInt(object.appVersion, 10);
                    else if (typeof object.appVersion === "number")
                        message.appVersion = object.appVersion;
                    else if (typeof object.appVersion === "object")
                        message.appVersion = new $util.LongBits(object.appVersion.low >>> 0, object.appVersion.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a VersionParams message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.types.VersionParams
             * @static
             * @param {tendermint.types.VersionParams} message VersionParams
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VersionParams.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.appVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.appVersion = options.longs === String ? "0" : 0;
                if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                    if (typeof message.appVersion === "number")
                        object.appVersion = options.longs === String ? String(message.appVersion) : message.appVersion;
                    else
                        object.appVersion = options.longs === String ? $util.Long.prototype.toString.call(message.appVersion) : options.longs === Number ? new $util.LongBits(message.appVersion.low >>> 0, message.appVersion.high >>> 0).toNumber(true) : message.appVersion;
                return object;
            };

            /**
             * Converts this VersionParams to JSON.
             * @function toJSON
             * @memberof tendermint.types.VersionParams
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VersionParams.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return VersionParams;
        })();

        types.HashedParams = (function() {

            /**
             * Properties of a HashedParams.
             * @memberof tendermint.types
             * @interface IHashedParams
             * @property {number|Long|null} [blockMaxBytes] HashedParams blockMaxBytes
             * @property {number|Long|null} [blockMaxGas] HashedParams blockMaxGas
             */

            /**
             * Constructs a new HashedParams.
             * @memberof tendermint.types
             * @classdesc Represents a HashedParams.
             * @implements IHashedParams
             * @constructor
             * @param {tendermint.types.IHashedParams=} [properties] Properties to set
             */
            function HashedParams(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HashedParams blockMaxBytes.
             * @member {number|Long} blockMaxBytes
             * @memberof tendermint.types.HashedParams
             * @instance
             */
            HashedParams.prototype.blockMaxBytes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * HashedParams blockMaxGas.
             * @member {number|Long} blockMaxGas
             * @memberof tendermint.types.HashedParams
             * @instance
             */
            HashedParams.prototype.blockMaxGas = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new HashedParams instance using the specified properties.
             * @function create
             * @memberof tendermint.types.HashedParams
             * @static
             * @param {tendermint.types.IHashedParams=} [properties] Properties to set
             * @returns {tendermint.types.HashedParams} HashedParams instance
             */
            HashedParams.create = function create(properties) {
                return new HashedParams(properties);
            };

            /**
             * Encodes the specified HashedParams message. Does not implicitly {@link tendermint.types.HashedParams.verify|verify} messages.
             * @function encode
             * @memberof tendermint.types.HashedParams
             * @static
             * @param {tendermint.types.IHashedParams} message HashedParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HashedParams.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.blockMaxBytes != null && message.hasOwnProperty("blockMaxBytes"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.blockMaxBytes);
                if (message.blockMaxGas != null && message.hasOwnProperty("blockMaxGas"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.blockMaxGas);
                return writer;
            };

            /**
             * Encodes the specified HashedParams message, length delimited. Does not implicitly {@link tendermint.types.HashedParams.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.types.HashedParams
             * @static
             * @param {tendermint.types.IHashedParams} message HashedParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HashedParams.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HashedParams message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.types.HashedParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.types.HashedParams} HashedParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HashedParams.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.types.HashedParams();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.blockMaxBytes = reader.int64();
                        break;
                    case 2:
                        message.blockMaxGas = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a HashedParams message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.types.HashedParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.types.HashedParams} HashedParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HashedParams.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HashedParams message.
             * @function verify
             * @memberof tendermint.types.HashedParams
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HashedParams.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.blockMaxBytes != null && message.hasOwnProperty("blockMaxBytes"))
                    if (!$util.isInteger(message.blockMaxBytes) && !(message.blockMaxBytes && $util.isInteger(message.blockMaxBytes.low) && $util.isInteger(message.blockMaxBytes.high)))
                        return "blockMaxBytes: integer|Long expected";
                if (message.blockMaxGas != null && message.hasOwnProperty("blockMaxGas"))
                    if (!$util.isInteger(message.blockMaxGas) && !(message.blockMaxGas && $util.isInteger(message.blockMaxGas.low) && $util.isInteger(message.blockMaxGas.high)))
                        return "blockMaxGas: integer|Long expected";
                return null;
            };

            /**
             * Creates a HashedParams message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.types.HashedParams
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.types.HashedParams} HashedParams
             */
            HashedParams.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.types.HashedParams)
                    return object;
                var message = new $root.tendermint.types.HashedParams();
                if (object.blockMaxBytes != null)
                    if ($util.Long)
                        (message.blockMaxBytes = $util.Long.fromValue(object.blockMaxBytes)).unsigned = false;
                    else if (typeof object.blockMaxBytes === "string")
                        message.blockMaxBytes = parseInt(object.blockMaxBytes, 10);
                    else if (typeof object.blockMaxBytes === "number")
                        message.blockMaxBytes = object.blockMaxBytes;
                    else if (typeof object.blockMaxBytes === "object")
                        message.blockMaxBytes = new $util.LongBits(object.blockMaxBytes.low >>> 0, object.blockMaxBytes.high >>> 0).toNumber();
                if (object.blockMaxGas != null)
                    if ($util.Long)
                        (message.blockMaxGas = $util.Long.fromValue(object.blockMaxGas)).unsigned = false;
                    else if (typeof object.blockMaxGas === "string")
                        message.blockMaxGas = parseInt(object.blockMaxGas, 10);
                    else if (typeof object.blockMaxGas === "number")
                        message.blockMaxGas = object.blockMaxGas;
                    else if (typeof object.blockMaxGas === "object")
                        message.blockMaxGas = new $util.LongBits(object.blockMaxGas.low >>> 0, object.blockMaxGas.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a HashedParams message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.types.HashedParams
             * @static
             * @param {tendermint.types.HashedParams} message HashedParams
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HashedParams.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.blockMaxBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.blockMaxBytes = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.blockMaxGas = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.blockMaxGas = options.longs === String ? "0" : 0;
                }
                if (message.blockMaxBytes != null && message.hasOwnProperty("blockMaxBytes"))
                    if (typeof message.blockMaxBytes === "number")
                        object.blockMaxBytes = options.longs === String ? String(message.blockMaxBytes) : message.blockMaxBytes;
                    else
                        object.blockMaxBytes = options.longs === String ? $util.Long.prototype.toString.call(message.blockMaxBytes) : options.longs === Number ? new $util.LongBits(message.blockMaxBytes.low >>> 0, message.blockMaxBytes.high >>> 0).toNumber() : message.blockMaxBytes;
                if (message.blockMaxGas != null && message.hasOwnProperty("blockMaxGas"))
                    if (typeof message.blockMaxGas === "number")
                        object.blockMaxGas = options.longs === String ? String(message.blockMaxGas) : message.blockMaxGas;
                    else
                        object.blockMaxGas = options.longs === String ? $util.Long.prototype.toString.call(message.blockMaxGas) : options.longs === Number ? new $util.LongBits(message.blockMaxGas.low >>> 0, message.blockMaxGas.high >>> 0).toNumber() : message.blockMaxGas;
                return object;
            };

            /**
             * Converts this HashedParams to JSON.
             * @function toJSON
             * @memberof tendermint.types.HashedParams
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HashedParams.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return HashedParams;
        })();

        return types;
    })();

    tendermint.version = (function() {

        /**
         * Namespace version.
         * @memberof tendermint
         * @namespace
         */
        var version = {};

        version.App = (function() {

            /**
             * Properties of an App.
             * @memberof tendermint.version
             * @interface IApp
             * @property {number|Long|null} [protocol] App protocol
             * @property {string|null} [software] App software
             */

            /**
             * Constructs a new App.
             * @memberof tendermint.version
             * @classdesc Represents an App.
             * @implements IApp
             * @constructor
             * @param {tendermint.version.IApp=} [properties] Properties to set
             */
            function App(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * App protocol.
             * @member {number|Long} protocol
             * @memberof tendermint.version.App
             * @instance
             */
            App.prototype.protocol = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * App software.
             * @member {string} software
             * @memberof tendermint.version.App
             * @instance
             */
            App.prototype.software = "";

            /**
             * Creates a new App instance using the specified properties.
             * @function create
             * @memberof tendermint.version.App
             * @static
             * @param {tendermint.version.IApp=} [properties] Properties to set
             * @returns {tendermint.version.App} App instance
             */
            App.create = function create(properties) {
                return new App(properties);
            };

            /**
             * Encodes the specified App message. Does not implicitly {@link tendermint.version.App.verify|verify} messages.
             * @function encode
             * @memberof tendermint.version.App
             * @static
             * @param {tendermint.version.IApp} message App message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            App.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.protocol != null && message.hasOwnProperty("protocol"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.protocol);
                if (message.software != null && message.hasOwnProperty("software"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.software);
                return writer;
            };

            /**
             * Encodes the specified App message, length delimited. Does not implicitly {@link tendermint.version.App.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.version.App
             * @static
             * @param {tendermint.version.IApp} message App message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            App.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an App message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.version.App
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.version.App} App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            App.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.version.App();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.protocol = reader.uint64();
                        break;
                    case 2:
                        message.software = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an App message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.version.App
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.version.App} App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            App.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an App message.
             * @function verify
             * @memberof tendermint.version.App
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            App.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.protocol != null && message.hasOwnProperty("protocol"))
                    if (!$util.isInteger(message.protocol) && !(message.protocol && $util.isInteger(message.protocol.low) && $util.isInteger(message.protocol.high)))
                        return "protocol: integer|Long expected";
                if (message.software != null && message.hasOwnProperty("software"))
                    if (!$util.isString(message.software))
                        return "software: string expected";
                return null;
            };

            /**
             * Creates an App message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.version.App
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.version.App} App
             */
            App.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.version.App)
                    return object;
                var message = new $root.tendermint.version.App();
                if (object.protocol != null)
                    if ($util.Long)
                        (message.protocol = $util.Long.fromValue(object.protocol)).unsigned = true;
                    else if (typeof object.protocol === "string")
                        message.protocol = parseInt(object.protocol, 10);
                    else if (typeof object.protocol === "number")
                        message.protocol = object.protocol;
                    else if (typeof object.protocol === "object")
                        message.protocol = new $util.LongBits(object.protocol.low >>> 0, object.protocol.high >>> 0).toNumber(true);
                if (object.software != null)
                    message.software = String(object.software);
                return message;
            };

            /**
             * Creates a plain object from an App message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.version.App
             * @static
             * @param {tendermint.version.App} message App
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            App.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.protocol = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.protocol = options.longs === String ? "0" : 0;
                    object.software = "";
                }
                if (message.protocol != null && message.hasOwnProperty("protocol"))
                    if (typeof message.protocol === "number")
                        object.protocol = options.longs === String ? String(message.protocol) : message.protocol;
                    else
                        object.protocol = options.longs === String ? $util.Long.prototype.toString.call(message.protocol) : options.longs === Number ? new $util.LongBits(message.protocol.low >>> 0, message.protocol.high >>> 0).toNumber(true) : message.protocol;
                if (message.software != null && message.hasOwnProperty("software"))
                    object.software = message.software;
                return object;
            };

            /**
             * Converts this App to JSON.
             * @function toJSON
             * @memberof tendermint.version.App
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            App.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return App;
        })();

        version.Consensus = (function() {

            /**
             * Properties of a Consensus.
             * @memberof tendermint.version
             * @interface IConsensus
             * @property {number|Long|null} [block] Consensus block
             * @property {number|Long|null} [app] Consensus app
             */

            /**
             * Constructs a new Consensus.
             * @memberof tendermint.version
             * @classdesc Represents a Consensus.
             * @implements IConsensus
             * @constructor
             * @param {tendermint.version.IConsensus=} [properties] Properties to set
             */
            function Consensus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Consensus block.
             * @member {number|Long} block
             * @memberof tendermint.version.Consensus
             * @instance
             */
            Consensus.prototype.block = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Consensus app.
             * @member {number|Long} app
             * @memberof tendermint.version.Consensus
             * @instance
             */
            Consensus.prototype.app = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new Consensus instance using the specified properties.
             * @function create
             * @memberof tendermint.version.Consensus
             * @static
             * @param {tendermint.version.IConsensus=} [properties] Properties to set
             * @returns {tendermint.version.Consensus} Consensus instance
             */
            Consensus.create = function create(properties) {
                return new Consensus(properties);
            };

            /**
             * Encodes the specified Consensus message. Does not implicitly {@link tendermint.version.Consensus.verify|verify} messages.
             * @function encode
             * @memberof tendermint.version.Consensus
             * @static
             * @param {tendermint.version.IConsensus} message Consensus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Consensus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.block != null && message.hasOwnProperty("block"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.block);
                if (message.app != null && message.hasOwnProperty("app"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.app);
                return writer;
            };

            /**
             * Encodes the specified Consensus message, length delimited. Does not implicitly {@link tendermint.version.Consensus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tendermint.version.Consensus
             * @static
             * @param {tendermint.version.IConsensus} message Consensus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Consensus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Consensus message from the specified reader or buffer.
             * @function decode
             * @memberof tendermint.version.Consensus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tendermint.version.Consensus} Consensus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Consensus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tendermint.version.Consensus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.block = reader.uint64();
                        break;
                    case 2:
                        message.app = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Consensus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tendermint.version.Consensus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tendermint.version.Consensus} Consensus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Consensus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Consensus message.
             * @function verify
             * @memberof tendermint.version.Consensus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Consensus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.block != null && message.hasOwnProperty("block"))
                    if (!$util.isInteger(message.block) && !(message.block && $util.isInteger(message.block.low) && $util.isInteger(message.block.high)))
                        return "block: integer|Long expected";
                if (message.app != null && message.hasOwnProperty("app"))
                    if (!$util.isInteger(message.app) && !(message.app && $util.isInteger(message.app.low) && $util.isInteger(message.app.high)))
                        return "app: integer|Long expected";
                return null;
            };

            /**
             * Creates a Consensus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tendermint.version.Consensus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tendermint.version.Consensus} Consensus
             */
            Consensus.fromObject = function fromObject(object) {
                if (object instanceof $root.tendermint.version.Consensus)
                    return object;
                var message = new $root.tendermint.version.Consensus();
                if (object.block != null)
                    if ($util.Long)
                        (message.block = $util.Long.fromValue(object.block)).unsigned = true;
                    else if (typeof object.block === "string")
                        message.block = parseInt(object.block, 10);
                    else if (typeof object.block === "number")
                        message.block = object.block;
                    else if (typeof object.block === "object")
                        message.block = new $util.LongBits(object.block.low >>> 0, object.block.high >>> 0).toNumber(true);
                if (object.app != null)
                    if ($util.Long)
                        (message.app = $util.Long.fromValue(object.app)).unsigned = true;
                    else if (typeof object.app === "string")
                        message.app = parseInt(object.app, 10);
                    else if (typeof object.app === "number")
                        message.app = object.app;
                    else if (typeof object.app === "object")
                        message.app = new $util.LongBits(object.app.low >>> 0, object.app.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a Consensus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tendermint.version.Consensus
             * @static
             * @param {tendermint.version.Consensus} message Consensus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Consensus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.block = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.block = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.app = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.app = options.longs === String ? "0" : 0;
                }
                if (message.block != null && message.hasOwnProperty("block"))
                    if (typeof message.block === "number")
                        object.block = options.longs === String ? String(message.block) : message.block;
                    else
                        object.block = options.longs === String ? $util.Long.prototype.toString.call(message.block) : options.longs === Number ? new $util.LongBits(message.block.low >>> 0, message.block.high >>> 0).toNumber(true) : message.block;
                if (message.app != null && message.hasOwnProperty("app"))
                    if (typeof message.app === "number")
                        object.app = options.longs === String ? String(message.app) : message.app;
                    else
                        object.app = options.longs === String ? $util.Long.prototype.toString.call(message.app) : options.longs === Number ? new $util.LongBits(message.app.low >>> 0, message.app.high >>> 0).toNumber(true) : message.app;
                return object;
            };

            /**
             * Converts this Consensus to JSON.
             * @function toJSON
             * @memberof tendermint.version.Consensus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Consensus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Consensus;
        })();

        return version;
    })();

    return tendermint;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        protobuf.Duration = (function() {

            /**
             * Properties of a Duration.
             * @memberof google.protobuf
             * @interface IDuration
             * @property {number|Long|null} [seconds] Duration seconds
             * @property {number|null} [nanos] Duration nanos
             */

            /**
             * Constructs a new Duration.
             * @memberof google.protobuf
             * @classdesc Represents a Duration.
             * @implements IDuration
             * @constructor
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             */
            function Duration(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Duration seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Duration nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.nanos = 0;

            /**
             * Creates a new Duration instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             * @returns {google.protobuf.Duration} Duration instance
             */
            Duration.create = function create(properties) {
                return new Duration(properties);
            };

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Duration message.
             * @function verify
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Duration.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Duration} Duration
             */
            Duration.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Duration)
                    return object;
                var message = new $root.google.protobuf.Duration();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.Duration} message Duration
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Duration.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Duration to JSON.
             * @function toJSON
             * @memberof google.protobuf.Duration
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Duration.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Duration;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
