import * as $protobuf from "protobufjs";
/** Namespace tendermint. */
export namespace tendermint {

    /** Namespace abci. */
    namespace abci {

        /** Properties of a Request. */
        interface IRequest {

            /** Request echo */
            echo?: (tendermint.abci.IRequestEcho|null);

            /** Request flush */
            flush?: (tendermint.abci.IRequestFlush|null);

            /** Request info */
            info?: (tendermint.abci.IRequestInfo|null);

            /** Request setOption */
            setOption?: (tendermint.abci.IRequestSetOption|null);

            /** Request initChain */
            initChain?: (tendermint.abci.IRequestInitChain|null);

            /** Request query */
            query?: (tendermint.abci.IRequestQuery|null);

            /** Request beginBlock */
            beginBlock?: (tendermint.abci.IRequestBeginBlock|null);

            /** Request checkTx */
            checkTx?: (tendermint.abci.IRequestCheckTx|null);

            /** Request deliverTx */
            deliverTx?: (tendermint.abci.IRequestDeliverTx|null);

            /** Request endBlock */
            endBlock?: (tendermint.abci.IRequestEndBlock|null);

            /** Request commit */
            commit?: (tendermint.abci.IRequestCommit|null);

            /** Request listSnapshots */
            listSnapshots?: (tendermint.abci.IRequestListSnapshots|null);

            /** Request offerSnapshot */
            offerSnapshot?: (tendermint.abci.IRequestOfferSnapshot|null);

            /** Request loadSnapshotChunk */
            loadSnapshotChunk?: (tendermint.abci.IRequestLoadSnapshotChunk|null);

            /** Request applySnapshotChunk */
            applySnapshotChunk?: (tendermint.abci.IRequestApplySnapshotChunk|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequest);

            /** Request echo. */
            public echo?: (tendermint.abci.IRequestEcho|null);

            /** Request flush. */
            public flush?: (tendermint.abci.IRequestFlush|null);

            /** Request info. */
            public info?: (tendermint.abci.IRequestInfo|null);

            /** Request setOption. */
            public setOption?: (tendermint.abci.IRequestSetOption|null);

            /** Request initChain. */
            public initChain?: (tendermint.abci.IRequestInitChain|null);

            /** Request query. */
            public query?: (tendermint.abci.IRequestQuery|null);

            /** Request beginBlock. */
            public beginBlock?: (tendermint.abci.IRequestBeginBlock|null);

            /** Request checkTx. */
            public checkTx?: (tendermint.abci.IRequestCheckTx|null);

            /** Request deliverTx. */
            public deliverTx?: (tendermint.abci.IRequestDeliverTx|null);

            /** Request endBlock. */
            public endBlock?: (tendermint.abci.IRequestEndBlock|null);

            /** Request commit. */
            public commit?: (tendermint.abci.IRequestCommit|null);

            /** Request listSnapshots. */
            public listSnapshots?: (tendermint.abci.IRequestListSnapshots|null);

            /** Request offerSnapshot. */
            public offerSnapshot?: (tendermint.abci.IRequestOfferSnapshot|null);

            /** Request loadSnapshotChunk. */
            public loadSnapshotChunk?: (tendermint.abci.IRequestLoadSnapshotChunk|null);

            /** Request applySnapshotChunk. */
            public applySnapshotChunk?: (tendermint.abci.IRequestApplySnapshotChunk|null);

            /** Request value. */
            public value?: ("echo"|"flush"|"info"|"setOption"|"initChain"|"query"|"beginBlock"|"checkTx"|"deliverTx"|"endBlock"|"commit"|"listSnapshots"|"offerSnapshot"|"loadSnapshotChunk"|"applySnapshotChunk");

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: tendermint.abci.IRequest): tendermint.abci.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link tendermint.abci.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link tendermint.abci.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestEcho. */
        interface IRequestEcho {

            /** RequestEcho message */
            message?: (string|null);
        }

        /** Represents a RequestEcho. */
        class RequestEcho implements IRequestEcho {

            /**
             * Constructs a new RequestEcho.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestEcho);

            /** RequestEcho message. */
            public message: string;

            /**
             * Creates a new RequestEcho instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestEcho instance
             */
            public static create(properties?: tendermint.abci.IRequestEcho): tendermint.abci.RequestEcho;

            /**
             * Encodes the specified RequestEcho message. Does not implicitly {@link tendermint.abci.RequestEcho.verify|verify} messages.
             * @param message RequestEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestEcho message, length delimited. Does not implicitly {@link tendermint.abci.RequestEcho.verify|verify} messages.
             * @param message RequestEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestEcho message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestEcho;

            /**
             * Decodes a RequestEcho message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestEcho;

            /**
             * Verifies a RequestEcho message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestEcho message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestEcho
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestEcho;

            /**
             * Creates a plain object from a RequestEcho message. Also converts values to other types if specified.
             * @param message RequestEcho
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestEcho, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestEcho to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestFlush. */
        interface IRequestFlush {
        }

        /** Represents a RequestFlush. */
        class RequestFlush implements IRequestFlush {

            /**
             * Constructs a new RequestFlush.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestFlush);

            /**
             * Creates a new RequestFlush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestFlush instance
             */
            public static create(properties?: tendermint.abci.IRequestFlush): tendermint.abci.RequestFlush;

            /**
             * Encodes the specified RequestFlush message. Does not implicitly {@link tendermint.abci.RequestFlush.verify|verify} messages.
             * @param message RequestFlush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestFlush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestFlush message, length delimited. Does not implicitly {@link tendermint.abci.RequestFlush.verify|verify} messages.
             * @param message RequestFlush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestFlush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestFlush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestFlush;

            /**
             * Decodes a RequestFlush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestFlush;

            /**
             * Verifies a RequestFlush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestFlush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestFlush
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestFlush;

            /**
             * Creates a plain object from a RequestFlush message. Also converts values to other types if specified.
             * @param message RequestFlush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestFlush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestFlush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestInfo. */
        interface IRequestInfo {

            /** RequestInfo version */
            version?: (string|null);

            /** RequestInfo blockVersion */
            blockVersion?: (number|Long|null);

            /** RequestInfo p2pVersion */
            p2pVersion?: (number|Long|null);
        }

        /** Represents a RequestInfo. */
        class RequestInfo implements IRequestInfo {

            /**
             * Constructs a new RequestInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestInfo);

            /** RequestInfo version. */
            public version: string;

            /** RequestInfo blockVersion. */
            public blockVersion: (number|Long);

            /** RequestInfo p2pVersion. */
            public p2pVersion: (number|Long);

            /**
             * Creates a new RequestInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestInfo instance
             */
            public static create(properties?: tendermint.abci.IRequestInfo): tendermint.abci.RequestInfo;

            /**
             * Encodes the specified RequestInfo message. Does not implicitly {@link tendermint.abci.RequestInfo.verify|verify} messages.
             * @param message RequestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestInfo message, length delimited. Does not implicitly {@link tendermint.abci.RequestInfo.verify|verify} messages.
             * @param message RequestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestInfo;

            /**
             * Decodes a RequestInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestInfo;

            /**
             * Verifies a RequestInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestInfo;

            /**
             * Creates a plain object from a RequestInfo message. Also converts values to other types if specified.
             * @param message RequestInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestSetOption. */
        interface IRequestSetOption {

            /** RequestSetOption key */
            key?: (string|null);

            /** RequestSetOption value */
            value?: (string|null);
        }

        /** Represents a RequestSetOption. */
        class RequestSetOption implements IRequestSetOption {

            /**
             * Constructs a new RequestSetOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestSetOption);

            /** RequestSetOption key. */
            public key: string;

            /** RequestSetOption value. */
            public value: string;

            /**
             * Creates a new RequestSetOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestSetOption instance
             */
            public static create(properties?: tendermint.abci.IRequestSetOption): tendermint.abci.RequestSetOption;

            /**
             * Encodes the specified RequestSetOption message. Does not implicitly {@link tendermint.abci.RequestSetOption.verify|verify} messages.
             * @param message RequestSetOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestSetOption message, length delimited. Does not implicitly {@link tendermint.abci.RequestSetOption.verify|verify} messages.
             * @param message RequestSetOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestSetOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestSetOption;

            /**
             * Decodes a RequestSetOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestSetOption;

            /**
             * Verifies a RequestSetOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestSetOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestSetOption
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestSetOption;

            /**
             * Creates a plain object from a RequestSetOption message. Also converts values to other types if specified.
             * @param message RequestSetOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestSetOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestSetOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestInitChain. */
        interface IRequestInitChain {

            /** RequestInitChain time */
            time?: (google.protobuf.ITimestamp|null);

            /** RequestInitChain chainId */
            chainId?: (string|null);

            /** RequestInitChain consensusParams */
            consensusParams?: (tendermint.abci.IConsensusParams|null);

            /** RequestInitChain validators */
            validators?: (tendermint.abci.IValidatorUpdate[]|null);

            /** RequestInitChain appStateBytes */
            appStateBytes?: (Uint8Array|null);

            /** RequestInitChain initialHeight */
            initialHeight?: (number|Long|null);
        }

        /** Represents a RequestInitChain. */
        class RequestInitChain implements IRequestInitChain {

            /**
             * Constructs a new RequestInitChain.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestInitChain);

            /** RequestInitChain time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** RequestInitChain chainId. */
            public chainId: string;

            /** RequestInitChain consensusParams. */
            public consensusParams?: (tendermint.abci.IConsensusParams|null);

            /** RequestInitChain validators. */
            public validators: tendermint.abci.IValidatorUpdate[];

            /** RequestInitChain appStateBytes. */
            public appStateBytes: Uint8Array;

            /** RequestInitChain initialHeight. */
            public initialHeight: (number|Long);

            /**
             * Creates a new RequestInitChain instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestInitChain instance
             */
            public static create(properties?: tendermint.abci.IRequestInitChain): tendermint.abci.RequestInitChain;

            /**
             * Encodes the specified RequestInitChain message. Does not implicitly {@link tendermint.abci.RequestInitChain.verify|verify} messages.
             * @param message RequestInitChain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestInitChain message, length delimited. Does not implicitly {@link tendermint.abci.RequestInitChain.verify|verify} messages.
             * @param message RequestInitChain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestInitChain message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestInitChain;

            /**
             * Decodes a RequestInitChain message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestInitChain;

            /**
             * Verifies a RequestInitChain message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestInitChain message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestInitChain
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestInitChain;

            /**
             * Creates a plain object from a RequestInitChain message. Also converts values to other types if specified.
             * @param message RequestInitChain
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestInitChain, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestInitChain to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestQuery. */
        interface IRequestQuery {

            /** RequestQuery data */
            data?: (Uint8Array|null);

            /** RequestQuery path */
            path?: (string|null);

            /** RequestQuery height */
            height?: (number|Long|null);

            /** RequestQuery prove */
            prove?: (boolean|null);
        }

        /** Represents a RequestQuery. */
        class RequestQuery implements IRequestQuery {

            /**
             * Constructs a new RequestQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestQuery);

            /** RequestQuery data. */
            public data: Uint8Array;

            /** RequestQuery path. */
            public path: string;

            /** RequestQuery height. */
            public height: (number|Long);

            /** RequestQuery prove. */
            public prove: boolean;

            /**
             * Creates a new RequestQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestQuery instance
             */
            public static create(properties?: tendermint.abci.IRequestQuery): tendermint.abci.RequestQuery;

            /**
             * Encodes the specified RequestQuery message. Does not implicitly {@link tendermint.abci.RequestQuery.verify|verify} messages.
             * @param message RequestQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestQuery message, length delimited. Does not implicitly {@link tendermint.abci.RequestQuery.verify|verify} messages.
             * @param message RequestQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestQuery;

            /**
             * Decodes a RequestQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestQuery;

            /**
             * Verifies a RequestQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestQuery
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestQuery;

            /**
             * Creates a plain object from a RequestQuery message. Also converts values to other types if specified.
             * @param message RequestQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestBeginBlock. */
        interface IRequestBeginBlock {

            /** RequestBeginBlock hash */
            hash?: (Uint8Array|null);

            /** RequestBeginBlock header */
            header?: (tendermint.types.IHeader|null);

            /** RequestBeginBlock lastCommitInfo */
            lastCommitInfo?: (tendermint.abci.ILastCommitInfo|null);

            /** RequestBeginBlock byzantineValidators */
            byzantineValidators?: (tendermint.abci.IEvidence[]|null);
        }

        /** Represents a RequestBeginBlock. */
        class RequestBeginBlock implements IRequestBeginBlock {

            /**
             * Constructs a new RequestBeginBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestBeginBlock);

            /** RequestBeginBlock hash. */
            public hash: Uint8Array;

            /** RequestBeginBlock header. */
            public header?: (tendermint.types.IHeader|null);

            /** RequestBeginBlock lastCommitInfo. */
            public lastCommitInfo?: (tendermint.abci.ILastCommitInfo|null);

            /** RequestBeginBlock byzantineValidators. */
            public byzantineValidators: tendermint.abci.IEvidence[];

            /**
             * Creates a new RequestBeginBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestBeginBlock instance
             */
            public static create(properties?: tendermint.abci.IRequestBeginBlock): tendermint.abci.RequestBeginBlock;

            /**
             * Encodes the specified RequestBeginBlock message. Does not implicitly {@link tendermint.abci.RequestBeginBlock.verify|verify} messages.
             * @param message RequestBeginBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestBeginBlock message, length delimited. Does not implicitly {@link tendermint.abci.RequestBeginBlock.verify|verify} messages.
             * @param message RequestBeginBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestBeginBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestBeginBlock;

            /**
             * Decodes a RequestBeginBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestBeginBlock;

            /**
             * Verifies a RequestBeginBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestBeginBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestBeginBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestBeginBlock;

            /**
             * Creates a plain object from a RequestBeginBlock message. Also converts values to other types if specified.
             * @param message RequestBeginBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestBeginBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestBeginBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** CheckTxType enum. */
        enum CheckTxType {
            NEW = 0,
            RECHECK = 1
        }

        /** Properties of a RequestCheckTx. */
        interface IRequestCheckTx {

            /** RequestCheckTx tx */
            tx?: (Uint8Array|null);

            /** RequestCheckTx type */
            type?: (tendermint.abci.CheckTxType|null);
        }

        /** Represents a RequestCheckTx. */
        class RequestCheckTx implements IRequestCheckTx {

            /**
             * Constructs a new RequestCheckTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestCheckTx);

            /** RequestCheckTx tx. */
            public tx: Uint8Array;

            /** RequestCheckTx type. */
            public type: tendermint.abci.CheckTxType;

            /**
             * Creates a new RequestCheckTx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestCheckTx instance
             */
            public static create(properties?: tendermint.abci.IRequestCheckTx): tendermint.abci.RequestCheckTx;

            /**
             * Encodes the specified RequestCheckTx message. Does not implicitly {@link tendermint.abci.RequestCheckTx.verify|verify} messages.
             * @param message RequestCheckTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestCheckTx message, length delimited. Does not implicitly {@link tendermint.abci.RequestCheckTx.verify|verify} messages.
             * @param message RequestCheckTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestCheckTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestCheckTx;

            /**
             * Decodes a RequestCheckTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestCheckTx;

            /**
             * Verifies a RequestCheckTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestCheckTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestCheckTx
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestCheckTx;

            /**
             * Creates a plain object from a RequestCheckTx message. Also converts values to other types if specified.
             * @param message RequestCheckTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestCheckTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestCheckTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestDeliverTx. */
        interface IRequestDeliverTx {

            /** RequestDeliverTx tx */
            tx?: (Uint8Array|null);
        }

        /** Represents a RequestDeliverTx. */
        class RequestDeliverTx implements IRequestDeliverTx {

            /**
             * Constructs a new RequestDeliverTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestDeliverTx);

            /** RequestDeliverTx tx. */
            public tx: Uint8Array;

            /**
             * Creates a new RequestDeliverTx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestDeliverTx instance
             */
            public static create(properties?: tendermint.abci.IRequestDeliverTx): tendermint.abci.RequestDeliverTx;

            /**
             * Encodes the specified RequestDeliverTx message. Does not implicitly {@link tendermint.abci.RequestDeliverTx.verify|verify} messages.
             * @param message RequestDeliverTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestDeliverTx message, length delimited. Does not implicitly {@link tendermint.abci.RequestDeliverTx.verify|verify} messages.
             * @param message RequestDeliverTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestDeliverTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestDeliverTx;

            /**
             * Decodes a RequestDeliverTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestDeliverTx;

            /**
             * Verifies a RequestDeliverTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestDeliverTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestDeliverTx
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestDeliverTx;

            /**
             * Creates a plain object from a RequestDeliverTx message. Also converts values to other types if specified.
             * @param message RequestDeliverTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestDeliverTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestDeliverTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestEndBlock. */
        interface IRequestEndBlock {

            /** RequestEndBlock height */
            height?: (number|Long|null);
        }

        /** Represents a RequestEndBlock. */
        class RequestEndBlock implements IRequestEndBlock {

            /**
             * Constructs a new RequestEndBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestEndBlock);

            /** RequestEndBlock height. */
            public height: (number|Long);

            /**
             * Creates a new RequestEndBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestEndBlock instance
             */
            public static create(properties?: tendermint.abci.IRequestEndBlock): tendermint.abci.RequestEndBlock;

            /**
             * Encodes the specified RequestEndBlock message. Does not implicitly {@link tendermint.abci.RequestEndBlock.verify|verify} messages.
             * @param message RequestEndBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestEndBlock message, length delimited. Does not implicitly {@link tendermint.abci.RequestEndBlock.verify|verify} messages.
             * @param message RequestEndBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestEndBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestEndBlock;

            /**
             * Decodes a RequestEndBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestEndBlock;

            /**
             * Verifies a RequestEndBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestEndBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestEndBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestEndBlock;

            /**
             * Creates a plain object from a RequestEndBlock message. Also converts values to other types if specified.
             * @param message RequestEndBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestEndBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestEndBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestCommit. */
        interface IRequestCommit {
        }

        /** Represents a RequestCommit. */
        class RequestCommit implements IRequestCommit {

            /**
             * Constructs a new RequestCommit.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestCommit);

            /**
             * Creates a new RequestCommit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestCommit instance
             */
            public static create(properties?: tendermint.abci.IRequestCommit): tendermint.abci.RequestCommit;

            /**
             * Encodes the specified RequestCommit message. Does not implicitly {@link tendermint.abci.RequestCommit.verify|verify} messages.
             * @param message RequestCommit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestCommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestCommit message, length delimited. Does not implicitly {@link tendermint.abci.RequestCommit.verify|verify} messages.
             * @param message RequestCommit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestCommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestCommit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestCommit;

            /**
             * Decodes a RequestCommit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestCommit;

            /**
             * Verifies a RequestCommit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestCommit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestCommit
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestCommit;

            /**
             * Creates a plain object from a RequestCommit message. Also converts values to other types if specified.
             * @param message RequestCommit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestCommit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestCommit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestListSnapshots. */
        interface IRequestListSnapshots {
        }

        /** Represents a RequestListSnapshots. */
        class RequestListSnapshots implements IRequestListSnapshots {

            /**
             * Constructs a new RequestListSnapshots.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestListSnapshots);

            /**
             * Creates a new RequestListSnapshots instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestListSnapshots instance
             */
            public static create(properties?: tendermint.abci.IRequestListSnapshots): tendermint.abci.RequestListSnapshots;

            /**
             * Encodes the specified RequestListSnapshots message. Does not implicitly {@link tendermint.abci.RequestListSnapshots.verify|verify} messages.
             * @param message RequestListSnapshots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestListSnapshots, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestListSnapshots message, length delimited. Does not implicitly {@link tendermint.abci.RequestListSnapshots.verify|verify} messages.
             * @param message RequestListSnapshots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestListSnapshots, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestListSnapshots message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestListSnapshots;

            /**
             * Decodes a RequestListSnapshots message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestListSnapshots;

            /**
             * Verifies a RequestListSnapshots message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestListSnapshots message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestListSnapshots
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestListSnapshots;

            /**
             * Creates a plain object from a RequestListSnapshots message. Also converts values to other types if specified.
             * @param message RequestListSnapshots
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestListSnapshots, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestListSnapshots to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestOfferSnapshot. */
        interface IRequestOfferSnapshot {

            /** RequestOfferSnapshot snapshot */
            snapshot?: (tendermint.abci.ISnapshot|null);

            /** RequestOfferSnapshot appHash */
            appHash?: (Uint8Array|null);
        }

        /** Represents a RequestOfferSnapshot. */
        class RequestOfferSnapshot implements IRequestOfferSnapshot {

            /**
             * Constructs a new RequestOfferSnapshot.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestOfferSnapshot);

            /** RequestOfferSnapshot snapshot. */
            public snapshot?: (tendermint.abci.ISnapshot|null);

            /** RequestOfferSnapshot appHash. */
            public appHash: Uint8Array;

            /**
             * Creates a new RequestOfferSnapshot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestOfferSnapshot instance
             */
            public static create(properties?: tendermint.abci.IRequestOfferSnapshot): tendermint.abci.RequestOfferSnapshot;

            /**
             * Encodes the specified RequestOfferSnapshot message. Does not implicitly {@link tendermint.abci.RequestOfferSnapshot.verify|verify} messages.
             * @param message RequestOfferSnapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestOfferSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestOfferSnapshot message, length delimited. Does not implicitly {@link tendermint.abci.RequestOfferSnapshot.verify|verify} messages.
             * @param message RequestOfferSnapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestOfferSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestOfferSnapshot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestOfferSnapshot;

            /**
             * Decodes a RequestOfferSnapshot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestOfferSnapshot;

            /**
             * Verifies a RequestOfferSnapshot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestOfferSnapshot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestOfferSnapshot
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestOfferSnapshot;

            /**
             * Creates a plain object from a RequestOfferSnapshot message. Also converts values to other types if specified.
             * @param message RequestOfferSnapshot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestOfferSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestOfferSnapshot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestLoadSnapshotChunk. */
        interface IRequestLoadSnapshotChunk {

            /** RequestLoadSnapshotChunk height */
            height?: (number|Long|null);

            /** RequestLoadSnapshotChunk format */
            format?: (number|null);

            /** RequestLoadSnapshotChunk chunk */
            chunk?: (number|null);
        }

        /** Represents a RequestLoadSnapshotChunk. */
        class RequestLoadSnapshotChunk implements IRequestLoadSnapshotChunk {

            /**
             * Constructs a new RequestLoadSnapshotChunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestLoadSnapshotChunk);

            /** RequestLoadSnapshotChunk height. */
            public height: (number|Long);

            /** RequestLoadSnapshotChunk format. */
            public format: number;

            /** RequestLoadSnapshotChunk chunk. */
            public chunk: number;

            /**
             * Creates a new RequestLoadSnapshotChunk instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestLoadSnapshotChunk instance
             */
            public static create(properties?: tendermint.abci.IRequestLoadSnapshotChunk): tendermint.abci.RequestLoadSnapshotChunk;

            /**
             * Encodes the specified RequestLoadSnapshotChunk message. Does not implicitly {@link tendermint.abci.RequestLoadSnapshotChunk.verify|verify} messages.
             * @param message RequestLoadSnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestLoadSnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestLoadSnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.RequestLoadSnapshotChunk.verify|verify} messages.
             * @param message RequestLoadSnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestLoadSnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestLoadSnapshotChunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestLoadSnapshotChunk;

            /**
             * Decodes a RequestLoadSnapshotChunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestLoadSnapshotChunk;

            /**
             * Verifies a RequestLoadSnapshotChunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestLoadSnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestLoadSnapshotChunk
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestLoadSnapshotChunk;

            /**
             * Creates a plain object from a RequestLoadSnapshotChunk message. Also converts values to other types if specified.
             * @param message RequestLoadSnapshotChunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestLoadSnapshotChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestLoadSnapshotChunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestApplySnapshotChunk. */
        interface IRequestApplySnapshotChunk {

            /** RequestApplySnapshotChunk index */
            index?: (number|null);

            /** RequestApplySnapshotChunk chunk */
            chunk?: (Uint8Array|null);

            /** RequestApplySnapshotChunk sender */
            sender?: (string|null);
        }

        /** Represents a RequestApplySnapshotChunk. */
        class RequestApplySnapshotChunk implements IRequestApplySnapshotChunk {

            /**
             * Constructs a new RequestApplySnapshotChunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestApplySnapshotChunk);

            /** RequestApplySnapshotChunk index. */
            public index: number;

            /** RequestApplySnapshotChunk chunk. */
            public chunk: Uint8Array;

            /** RequestApplySnapshotChunk sender. */
            public sender: string;

            /**
             * Creates a new RequestApplySnapshotChunk instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestApplySnapshotChunk instance
             */
            public static create(properties?: tendermint.abci.IRequestApplySnapshotChunk): tendermint.abci.RequestApplySnapshotChunk;

            /**
             * Encodes the specified RequestApplySnapshotChunk message. Does not implicitly {@link tendermint.abci.RequestApplySnapshotChunk.verify|verify} messages.
             * @param message RequestApplySnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestApplySnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestApplySnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.RequestApplySnapshotChunk.verify|verify} messages.
             * @param message RequestApplySnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestApplySnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestApplySnapshotChunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestApplySnapshotChunk;

            /**
             * Decodes a RequestApplySnapshotChunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestApplySnapshotChunk;

            /**
             * Verifies a RequestApplySnapshotChunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestApplySnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestApplySnapshotChunk
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestApplySnapshotChunk;

            /**
             * Creates a plain object from a RequestApplySnapshotChunk message. Also converts values to other types if specified.
             * @param message RequestApplySnapshotChunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestApplySnapshotChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestApplySnapshotChunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Response. */
        interface IResponse {

            /** Response exception */
            exception?: (tendermint.abci.IResponseException|null);

            /** Response echo */
            echo?: (tendermint.abci.IResponseEcho|null);

            /** Response flush */
            flush?: (tendermint.abci.IResponseFlush|null);

            /** Response info */
            info?: (tendermint.abci.IResponseInfo|null);

            /** Response setOption */
            setOption?: (tendermint.abci.IResponseSetOption|null);

            /** Response initChain */
            initChain?: (tendermint.abci.IResponseInitChain|null);

            /** Response query */
            query?: (tendermint.abci.IResponseQuery|null);

            /** Response beginBlock */
            beginBlock?: (tendermint.abci.IResponseBeginBlock|null);

            /** Response checkTx */
            checkTx?: (tendermint.abci.IResponseCheckTx|null);

            /** Response deliverTx */
            deliverTx?: (tendermint.abci.IResponseDeliverTx|null);

            /** Response endBlock */
            endBlock?: (tendermint.abci.IResponseEndBlock|null);

            /** Response commit */
            commit?: (tendermint.abci.IResponseCommit|null);

            /** Response listSnapshots */
            listSnapshots?: (tendermint.abci.IResponseListSnapshots|null);

            /** Response offerSnapshot */
            offerSnapshot?: (tendermint.abci.IResponseOfferSnapshot|null);

            /** Response loadSnapshotChunk */
            loadSnapshotChunk?: (tendermint.abci.IResponseLoadSnapshotChunk|null);

            /** Response applySnapshotChunk */
            applySnapshotChunk?: (tendermint.abci.IResponseApplySnapshotChunk|null);
        }

        /** Represents a Response. */
        class Response implements IResponse {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponse);

            /** Response exception. */
            public exception?: (tendermint.abci.IResponseException|null);

            /** Response echo. */
            public echo?: (tendermint.abci.IResponseEcho|null);

            /** Response flush. */
            public flush?: (tendermint.abci.IResponseFlush|null);

            /** Response info. */
            public info?: (tendermint.abci.IResponseInfo|null);

            /** Response setOption. */
            public setOption?: (tendermint.abci.IResponseSetOption|null);

            /** Response initChain. */
            public initChain?: (tendermint.abci.IResponseInitChain|null);

            /** Response query. */
            public query?: (tendermint.abci.IResponseQuery|null);

            /** Response beginBlock. */
            public beginBlock?: (tendermint.abci.IResponseBeginBlock|null);

            /** Response checkTx. */
            public checkTx?: (tendermint.abci.IResponseCheckTx|null);

            /** Response deliverTx. */
            public deliverTx?: (tendermint.abci.IResponseDeliverTx|null);

            /** Response endBlock. */
            public endBlock?: (tendermint.abci.IResponseEndBlock|null);

            /** Response commit. */
            public commit?: (tendermint.abci.IResponseCommit|null);

            /** Response listSnapshots. */
            public listSnapshots?: (tendermint.abci.IResponseListSnapshots|null);

            /** Response offerSnapshot. */
            public offerSnapshot?: (tendermint.abci.IResponseOfferSnapshot|null);

            /** Response loadSnapshotChunk. */
            public loadSnapshotChunk?: (tendermint.abci.IResponseLoadSnapshotChunk|null);

            /** Response applySnapshotChunk. */
            public applySnapshotChunk?: (tendermint.abci.IResponseApplySnapshotChunk|null);

            /** Response value. */
            public value?: ("exception"|"echo"|"flush"|"info"|"setOption"|"initChain"|"query"|"beginBlock"|"checkTx"|"deliverTx"|"endBlock"|"commit"|"listSnapshots"|"offerSnapshot"|"loadSnapshotChunk"|"applySnapshotChunk");

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: tendermint.abci.IResponse): tendermint.abci.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link tendermint.abci.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link tendermint.abci.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Response;

            /**
             * Verifies a Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Response
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseException. */
        interface IResponseException {

            /** ResponseException error */
            error?: (string|null);
        }

        /** Represents a ResponseException. */
        class ResponseException implements IResponseException {

            /**
             * Constructs a new ResponseException.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseException);

            /** ResponseException error. */
            public error: string;

            /**
             * Creates a new ResponseException instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseException instance
             */
            public static create(properties?: tendermint.abci.IResponseException): tendermint.abci.ResponseException;

            /**
             * Encodes the specified ResponseException message. Does not implicitly {@link tendermint.abci.ResponseException.verify|verify} messages.
             * @param message ResponseException message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseException, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseException message, length delimited. Does not implicitly {@link tendermint.abci.ResponseException.verify|verify} messages.
             * @param message ResponseException message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseException, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseException message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseException
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseException;

            /**
             * Decodes a ResponseException message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseException
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseException;

            /**
             * Verifies a ResponseException message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseException message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseException
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseException;

            /**
             * Creates a plain object from a ResponseException message. Also converts values to other types if specified.
             * @param message ResponseException
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseException, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseException to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseEcho. */
        interface IResponseEcho {

            /** ResponseEcho message */
            message?: (string|null);
        }

        /** Represents a ResponseEcho. */
        class ResponseEcho implements IResponseEcho {

            /**
             * Constructs a new ResponseEcho.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseEcho);

            /** ResponseEcho message. */
            public message: string;

            /**
             * Creates a new ResponseEcho instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseEcho instance
             */
            public static create(properties?: tendermint.abci.IResponseEcho): tendermint.abci.ResponseEcho;

            /**
             * Encodes the specified ResponseEcho message. Does not implicitly {@link tendermint.abci.ResponseEcho.verify|verify} messages.
             * @param message ResponseEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseEcho message, length delimited. Does not implicitly {@link tendermint.abci.ResponseEcho.verify|verify} messages.
             * @param message ResponseEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseEcho message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseEcho;

            /**
             * Decodes a ResponseEcho message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseEcho;

            /**
             * Verifies a ResponseEcho message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseEcho message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseEcho
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseEcho;

            /**
             * Creates a plain object from a ResponseEcho message. Also converts values to other types if specified.
             * @param message ResponseEcho
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseEcho, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseEcho to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseFlush. */
        interface IResponseFlush {
        }

        /** Represents a ResponseFlush. */
        class ResponseFlush implements IResponseFlush {

            /**
             * Constructs a new ResponseFlush.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseFlush);

            /**
             * Creates a new ResponseFlush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseFlush instance
             */
            public static create(properties?: tendermint.abci.IResponseFlush): tendermint.abci.ResponseFlush;

            /**
             * Encodes the specified ResponseFlush message. Does not implicitly {@link tendermint.abci.ResponseFlush.verify|verify} messages.
             * @param message ResponseFlush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseFlush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseFlush message, length delimited. Does not implicitly {@link tendermint.abci.ResponseFlush.verify|verify} messages.
             * @param message ResponseFlush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseFlush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseFlush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseFlush;

            /**
             * Decodes a ResponseFlush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseFlush;

            /**
             * Verifies a ResponseFlush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseFlush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseFlush
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseFlush;

            /**
             * Creates a plain object from a ResponseFlush message. Also converts values to other types if specified.
             * @param message ResponseFlush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseFlush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseFlush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseInfo. */
        interface IResponseInfo {

            /** ResponseInfo data */
            data?: (string|null);

            /** ResponseInfo version */
            version?: (string|null);

            /** ResponseInfo appVersion */
            appVersion?: (number|Long|null);

            /** ResponseInfo lastBlockHeight */
            lastBlockHeight?: (number|Long|null);

            /** ResponseInfo lastBlockAppHash */
            lastBlockAppHash?: (Uint8Array|null);
        }

        /** Represents a ResponseInfo. */
        class ResponseInfo implements IResponseInfo {

            /**
             * Constructs a new ResponseInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseInfo);

            /** ResponseInfo data. */
            public data: string;

            /** ResponseInfo version. */
            public version: string;

            /** ResponseInfo appVersion. */
            public appVersion: (number|Long);

            /** ResponseInfo lastBlockHeight. */
            public lastBlockHeight: (number|Long);

            /** ResponseInfo lastBlockAppHash. */
            public lastBlockAppHash: Uint8Array;

            /**
             * Creates a new ResponseInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseInfo instance
             */
            public static create(properties?: tendermint.abci.IResponseInfo): tendermint.abci.ResponseInfo;

            /**
             * Encodes the specified ResponseInfo message. Does not implicitly {@link tendermint.abci.ResponseInfo.verify|verify} messages.
             * @param message ResponseInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseInfo message, length delimited. Does not implicitly {@link tendermint.abci.ResponseInfo.verify|verify} messages.
             * @param message ResponseInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseInfo;

            /**
             * Decodes a ResponseInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseInfo;

            /**
             * Verifies a ResponseInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseInfo;

            /**
             * Creates a plain object from a ResponseInfo message. Also converts values to other types if specified.
             * @param message ResponseInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseSetOption. */
        interface IResponseSetOption {

            /** ResponseSetOption code */
            code?: (number|null);

            /** ResponseSetOption log */
            log?: (string|null);

            /** ResponseSetOption info */
            info?: (string|null);
        }

        /** Represents a ResponseSetOption. */
        class ResponseSetOption implements IResponseSetOption {

            /**
             * Constructs a new ResponseSetOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseSetOption);

            /** ResponseSetOption code. */
            public code: number;

            /** ResponseSetOption log. */
            public log: string;

            /** ResponseSetOption info. */
            public info: string;

            /**
             * Creates a new ResponseSetOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseSetOption instance
             */
            public static create(properties?: tendermint.abci.IResponseSetOption): tendermint.abci.ResponseSetOption;

            /**
             * Encodes the specified ResponseSetOption message. Does not implicitly {@link tendermint.abci.ResponseSetOption.verify|verify} messages.
             * @param message ResponseSetOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseSetOption message, length delimited. Does not implicitly {@link tendermint.abci.ResponseSetOption.verify|verify} messages.
             * @param message ResponseSetOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseSetOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseSetOption;

            /**
             * Decodes a ResponseSetOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseSetOption;

            /**
             * Verifies a ResponseSetOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseSetOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseSetOption
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseSetOption;

            /**
             * Creates a plain object from a ResponseSetOption message. Also converts values to other types if specified.
             * @param message ResponseSetOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseSetOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseSetOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseInitChain. */
        interface IResponseInitChain {

            /** ResponseInitChain consensusParams */
            consensusParams?: (tendermint.abci.IConsensusParams|null);

            /** ResponseInitChain validators */
            validators?: (tendermint.abci.IValidatorUpdate[]|null);

            /** ResponseInitChain appHash */
            appHash?: (Uint8Array|null);
        }

        /** Represents a ResponseInitChain. */
        class ResponseInitChain implements IResponseInitChain {

            /**
             * Constructs a new ResponseInitChain.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseInitChain);

            /** ResponseInitChain consensusParams. */
            public consensusParams?: (tendermint.abci.IConsensusParams|null);

            /** ResponseInitChain validators. */
            public validators: tendermint.abci.IValidatorUpdate[];

            /** ResponseInitChain appHash. */
            public appHash: Uint8Array;

            /**
             * Creates a new ResponseInitChain instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseInitChain instance
             */
            public static create(properties?: tendermint.abci.IResponseInitChain): tendermint.abci.ResponseInitChain;

            /**
             * Encodes the specified ResponseInitChain message. Does not implicitly {@link tendermint.abci.ResponseInitChain.verify|verify} messages.
             * @param message ResponseInitChain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseInitChain message, length delimited. Does not implicitly {@link tendermint.abci.ResponseInitChain.verify|verify} messages.
             * @param message ResponseInitChain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseInitChain message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseInitChain;

            /**
             * Decodes a ResponseInitChain message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseInitChain;

            /**
             * Verifies a ResponseInitChain message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseInitChain message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseInitChain
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseInitChain;

            /**
             * Creates a plain object from a ResponseInitChain message. Also converts values to other types if specified.
             * @param message ResponseInitChain
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseInitChain, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseInitChain to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseQuery. */
        interface IResponseQuery {

            /** ResponseQuery code */
            code?: (number|null);

            /** ResponseQuery log */
            log?: (string|null);

            /** ResponseQuery info */
            info?: (string|null);

            /** ResponseQuery index */
            index?: (number|Long|null);

            /** ResponseQuery key */
            key?: (Uint8Array|null);

            /** ResponseQuery value */
            value?: (Uint8Array|null);

            /** ResponseQuery proofOps */
            proofOps?: (tendermint.crypto.IProofOps|null);

            /** ResponseQuery height */
            height?: (number|Long|null);

            /** ResponseQuery codespace */
            codespace?: (string|null);
        }

        /** Represents a ResponseQuery. */
        class ResponseQuery implements IResponseQuery {

            /**
             * Constructs a new ResponseQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseQuery);

            /** ResponseQuery code. */
            public code: number;

            /** ResponseQuery log. */
            public log: string;

            /** ResponseQuery info. */
            public info: string;

            /** ResponseQuery index. */
            public index: (number|Long);

            /** ResponseQuery key. */
            public key: Uint8Array;

            /** ResponseQuery value. */
            public value: Uint8Array;

            /** ResponseQuery proofOps. */
            public proofOps?: (tendermint.crypto.IProofOps|null);

            /** ResponseQuery height. */
            public height: (number|Long);

            /** ResponseQuery codespace. */
            public codespace: string;

            /**
             * Creates a new ResponseQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseQuery instance
             */
            public static create(properties?: tendermint.abci.IResponseQuery): tendermint.abci.ResponseQuery;

            /**
             * Encodes the specified ResponseQuery message. Does not implicitly {@link tendermint.abci.ResponseQuery.verify|verify} messages.
             * @param message ResponseQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseQuery message, length delimited. Does not implicitly {@link tendermint.abci.ResponseQuery.verify|verify} messages.
             * @param message ResponseQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseQuery;

            /**
             * Decodes a ResponseQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseQuery;

            /**
             * Verifies a ResponseQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseQuery
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseQuery;

            /**
             * Creates a plain object from a ResponseQuery message. Also converts values to other types if specified.
             * @param message ResponseQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseBeginBlock. */
        interface IResponseBeginBlock {

            /** ResponseBeginBlock events */
            events?: (tendermint.abci.IEvent[]|null);
        }

        /** Represents a ResponseBeginBlock. */
        class ResponseBeginBlock implements IResponseBeginBlock {

            /**
             * Constructs a new ResponseBeginBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseBeginBlock);

            /** ResponseBeginBlock events. */
            public events: tendermint.abci.IEvent[];

            /**
             * Creates a new ResponseBeginBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseBeginBlock instance
             */
            public static create(properties?: tendermint.abci.IResponseBeginBlock): tendermint.abci.ResponseBeginBlock;

            /**
             * Encodes the specified ResponseBeginBlock message. Does not implicitly {@link tendermint.abci.ResponseBeginBlock.verify|verify} messages.
             * @param message ResponseBeginBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseBeginBlock message, length delimited. Does not implicitly {@link tendermint.abci.ResponseBeginBlock.verify|verify} messages.
             * @param message ResponseBeginBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseBeginBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseBeginBlock;

            /**
             * Decodes a ResponseBeginBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseBeginBlock;

            /**
             * Verifies a ResponseBeginBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseBeginBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseBeginBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseBeginBlock;

            /**
             * Creates a plain object from a ResponseBeginBlock message. Also converts values to other types if specified.
             * @param message ResponseBeginBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseBeginBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseBeginBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseCheckTx. */
        interface IResponseCheckTx {

            /** ResponseCheckTx code */
            code?: (number|null);

            /** ResponseCheckTx data */
            data?: (Uint8Array|null);

            /** ResponseCheckTx log */
            log?: (string|null);

            /** ResponseCheckTx info */
            info?: (string|null);

            /** ResponseCheckTx gasWanted */
            gasWanted?: (number|Long|null);

            /** ResponseCheckTx gasUsed */
            gasUsed?: (number|Long|null);

            /** ResponseCheckTx events */
            events?: (tendermint.abci.IEvent[]|null);

            /** ResponseCheckTx codespace */
            codespace?: (string|null);
        }

        /** Represents a ResponseCheckTx. */
        class ResponseCheckTx implements IResponseCheckTx {

            /**
             * Constructs a new ResponseCheckTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseCheckTx);

            /** ResponseCheckTx code. */
            public code: number;

            /** ResponseCheckTx data. */
            public data: Uint8Array;

            /** ResponseCheckTx log. */
            public log: string;

            /** ResponseCheckTx info. */
            public info: string;

            /** ResponseCheckTx gasWanted. */
            public gasWanted: (number|Long);

            /** ResponseCheckTx gasUsed. */
            public gasUsed: (number|Long);

            /** ResponseCheckTx events. */
            public events: tendermint.abci.IEvent[];

            /** ResponseCheckTx codespace. */
            public codespace: string;

            /**
             * Creates a new ResponseCheckTx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseCheckTx instance
             */
            public static create(properties?: tendermint.abci.IResponseCheckTx): tendermint.abci.ResponseCheckTx;

            /**
             * Encodes the specified ResponseCheckTx message. Does not implicitly {@link tendermint.abci.ResponseCheckTx.verify|verify} messages.
             * @param message ResponseCheckTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseCheckTx message, length delimited. Does not implicitly {@link tendermint.abci.ResponseCheckTx.verify|verify} messages.
             * @param message ResponseCheckTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseCheckTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseCheckTx;

            /**
             * Decodes a ResponseCheckTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseCheckTx;

            /**
             * Verifies a ResponseCheckTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseCheckTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseCheckTx
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseCheckTx;

            /**
             * Creates a plain object from a ResponseCheckTx message. Also converts values to other types if specified.
             * @param message ResponseCheckTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseCheckTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseCheckTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseDeliverTx. */
        interface IResponseDeliverTx {

            /** ResponseDeliverTx code */
            code?: (number|null);

            /** ResponseDeliverTx data */
            data?: (Uint8Array|null);

            /** ResponseDeliverTx log */
            log?: (string|null);

            /** ResponseDeliverTx info */
            info?: (string|null);

            /** ResponseDeliverTx gasWanted */
            gasWanted?: (number|Long|null);

            /** ResponseDeliverTx gasUsed */
            gasUsed?: (number|Long|null);

            /** ResponseDeliverTx events */
            events?: (tendermint.abci.IEvent[]|null);

            /** ResponseDeliverTx codespace */
            codespace?: (string|null);
        }

        /** Represents a ResponseDeliverTx. */
        class ResponseDeliverTx implements IResponseDeliverTx {

            /**
             * Constructs a new ResponseDeliverTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseDeliverTx);

            /** ResponseDeliverTx code. */
            public code: number;

            /** ResponseDeliverTx data. */
            public data: Uint8Array;

            /** ResponseDeliverTx log. */
            public log: string;

            /** ResponseDeliverTx info. */
            public info: string;

            /** ResponseDeliverTx gasWanted. */
            public gasWanted: (number|Long);

            /** ResponseDeliverTx gasUsed. */
            public gasUsed: (number|Long);

            /** ResponseDeliverTx events. */
            public events: tendermint.abci.IEvent[];

            /** ResponseDeliverTx codespace. */
            public codespace: string;

            /**
             * Creates a new ResponseDeliverTx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseDeliverTx instance
             */
            public static create(properties?: tendermint.abci.IResponseDeliverTx): tendermint.abci.ResponseDeliverTx;

            /**
             * Encodes the specified ResponseDeliverTx message. Does not implicitly {@link tendermint.abci.ResponseDeliverTx.verify|verify} messages.
             * @param message ResponseDeliverTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseDeliverTx message, length delimited. Does not implicitly {@link tendermint.abci.ResponseDeliverTx.verify|verify} messages.
             * @param message ResponseDeliverTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseDeliverTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseDeliverTx;

            /**
             * Decodes a ResponseDeliverTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseDeliverTx;

            /**
             * Verifies a ResponseDeliverTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseDeliverTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseDeliverTx
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseDeliverTx;

            /**
             * Creates a plain object from a ResponseDeliverTx message. Also converts values to other types if specified.
             * @param message ResponseDeliverTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseDeliverTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseDeliverTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseEndBlock. */
        interface IResponseEndBlock {

            /** ResponseEndBlock validatorUpdates */
            validatorUpdates?: (tendermint.abci.IValidatorUpdate[]|null);

            /** ResponseEndBlock consensusParamUpdates */
            consensusParamUpdates?: (tendermint.abci.IConsensusParams|null);

            /** ResponseEndBlock events */
            events?: (tendermint.abci.IEvent[]|null);

            /** ResponseEndBlock coreChainLockUpdate */
            coreChainLockUpdate?: (tendermint.types.ICoreChainLock|null);
        }

        /** Represents a ResponseEndBlock. */
        class ResponseEndBlock implements IResponseEndBlock {

            /**
             * Constructs a new ResponseEndBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseEndBlock);

            /** ResponseEndBlock validatorUpdates. */
            public validatorUpdates: tendermint.abci.IValidatorUpdate[];

            /** ResponseEndBlock consensusParamUpdates. */
            public consensusParamUpdates?: (tendermint.abci.IConsensusParams|null);

            /** ResponseEndBlock events. */
            public events: tendermint.abci.IEvent[];

            /** ResponseEndBlock coreChainLockUpdate. */
            public coreChainLockUpdate?: (tendermint.types.ICoreChainLock|null);

            /**
             * Creates a new ResponseEndBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseEndBlock instance
             */
            public static create(properties?: tendermint.abci.IResponseEndBlock): tendermint.abci.ResponseEndBlock;

            /**
             * Encodes the specified ResponseEndBlock message. Does not implicitly {@link tendermint.abci.ResponseEndBlock.verify|verify} messages.
             * @param message ResponseEndBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseEndBlock message, length delimited. Does not implicitly {@link tendermint.abci.ResponseEndBlock.verify|verify} messages.
             * @param message ResponseEndBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseEndBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseEndBlock;

            /**
             * Decodes a ResponseEndBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseEndBlock;

            /**
             * Verifies a ResponseEndBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseEndBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseEndBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseEndBlock;

            /**
             * Creates a plain object from a ResponseEndBlock message. Also converts values to other types if specified.
             * @param message ResponseEndBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseEndBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseEndBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseCommit. */
        interface IResponseCommit {

            /** ResponseCommit data */
            data?: (Uint8Array|null);

            /** ResponseCommit retainHeight */
            retainHeight?: (number|Long|null);
        }

        /** Represents a ResponseCommit. */
        class ResponseCommit implements IResponseCommit {

            /**
             * Constructs a new ResponseCommit.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseCommit);

            /** ResponseCommit data. */
            public data: Uint8Array;

            /** ResponseCommit retainHeight. */
            public retainHeight: (number|Long);

            /**
             * Creates a new ResponseCommit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseCommit instance
             */
            public static create(properties?: tendermint.abci.IResponseCommit): tendermint.abci.ResponseCommit;

            /**
             * Encodes the specified ResponseCommit message. Does not implicitly {@link tendermint.abci.ResponseCommit.verify|verify} messages.
             * @param message ResponseCommit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseCommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseCommit message, length delimited. Does not implicitly {@link tendermint.abci.ResponseCommit.verify|verify} messages.
             * @param message ResponseCommit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseCommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseCommit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseCommit;

            /**
             * Decodes a ResponseCommit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseCommit;

            /**
             * Verifies a ResponseCommit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseCommit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseCommit
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseCommit;

            /**
             * Creates a plain object from a ResponseCommit message. Also converts values to other types if specified.
             * @param message ResponseCommit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseCommit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseCommit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseListSnapshots. */
        interface IResponseListSnapshots {

            /** ResponseListSnapshots snapshots */
            snapshots?: (tendermint.abci.ISnapshot[]|null);
        }

        /** Represents a ResponseListSnapshots. */
        class ResponseListSnapshots implements IResponseListSnapshots {

            /**
             * Constructs a new ResponseListSnapshots.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseListSnapshots);

            /** ResponseListSnapshots snapshots. */
            public snapshots: tendermint.abci.ISnapshot[];

            /**
             * Creates a new ResponseListSnapshots instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseListSnapshots instance
             */
            public static create(properties?: tendermint.abci.IResponseListSnapshots): tendermint.abci.ResponseListSnapshots;

            /**
             * Encodes the specified ResponseListSnapshots message. Does not implicitly {@link tendermint.abci.ResponseListSnapshots.verify|verify} messages.
             * @param message ResponseListSnapshots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseListSnapshots, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseListSnapshots message, length delimited. Does not implicitly {@link tendermint.abci.ResponseListSnapshots.verify|verify} messages.
             * @param message ResponseListSnapshots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseListSnapshots, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseListSnapshots message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseListSnapshots;

            /**
             * Decodes a ResponseListSnapshots message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseListSnapshots;

            /**
             * Verifies a ResponseListSnapshots message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseListSnapshots message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseListSnapshots
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseListSnapshots;

            /**
             * Creates a plain object from a ResponseListSnapshots message. Also converts values to other types if specified.
             * @param message ResponseListSnapshots
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseListSnapshots, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseListSnapshots to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseOfferSnapshot. */
        interface IResponseOfferSnapshot {

            /** ResponseOfferSnapshot result */
            result?: (tendermint.abci.ResponseOfferSnapshot.Result|null);
        }

        /** Represents a ResponseOfferSnapshot. */
        class ResponseOfferSnapshot implements IResponseOfferSnapshot {

            /**
             * Constructs a new ResponseOfferSnapshot.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseOfferSnapshot);

            /** ResponseOfferSnapshot result. */
            public result: tendermint.abci.ResponseOfferSnapshot.Result;

            /**
             * Creates a new ResponseOfferSnapshot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseOfferSnapshot instance
             */
            public static create(properties?: tendermint.abci.IResponseOfferSnapshot): tendermint.abci.ResponseOfferSnapshot;

            /**
             * Encodes the specified ResponseOfferSnapshot message. Does not implicitly {@link tendermint.abci.ResponseOfferSnapshot.verify|verify} messages.
             * @param message ResponseOfferSnapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseOfferSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseOfferSnapshot message, length delimited. Does not implicitly {@link tendermint.abci.ResponseOfferSnapshot.verify|verify} messages.
             * @param message ResponseOfferSnapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseOfferSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseOfferSnapshot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseOfferSnapshot;

            /**
             * Decodes a ResponseOfferSnapshot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseOfferSnapshot;

            /**
             * Verifies a ResponseOfferSnapshot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseOfferSnapshot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseOfferSnapshot
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseOfferSnapshot;

            /**
             * Creates a plain object from a ResponseOfferSnapshot message. Also converts values to other types if specified.
             * @param message ResponseOfferSnapshot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseOfferSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseOfferSnapshot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResponseOfferSnapshot {

            /** Result enum. */
            enum Result {
                UNKNOWN = 0,
                ACCEPT = 1,
                ABORT = 2,
                REJECT = 3,
                REJECT_FORMAT = 4,
                REJECT_SENDER = 5
            }
        }

        /** Properties of a ResponseLoadSnapshotChunk. */
        interface IResponseLoadSnapshotChunk {

            /** ResponseLoadSnapshotChunk chunk */
            chunk?: (Uint8Array|null);
        }

        /** Represents a ResponseLoadSnapshotChunk. */
        class ResponseLoadSnapshotChunk implements IResponseLoadSnapshotChunk {

            /**
             * Constructs a new ResponseLoadSnapshotChunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseLoadSnapshotChunk);

            /** ResponseLoadSnapshotChunk chunk. */
            public chunk: Uint8Array;

            /**
             * Creates a new ResponseLoadSnapshotChunk instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseLoadSnapshotChunk instance
             */
            public static create(properties?: tendermint.abci.IResponseLoadSnapshotChunk): tendermint.abci.ResponseLoadSnapshotChunk;

            /**
             * Encodes the specified ResponseLoadSnapshotChunk message. Does not implicitly {@link tendermint.abci.ResponseLoadSnapshotChunk.verify|verify} messages.
             * @param message ResponseLoadSnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseLoadSnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseLoadSnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.ResponseLoadSnapshotChunk.verify|verify} messages.
             * @param message ResponseLoadSnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseLoadSnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseLoadSnapshotChunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseLoadSnapshotChunk;

            /**
             * Decodes a ResponseLoadSnapshotChunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseLoadSnapshotChunk;

            /**
             * Verifies a ResponseLoadSnapshotChunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseLoadSnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseLoadSnapshotChunk
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseLoadSnapshotChunk;

            /**
             * Creates a plain object from a ResponseLoadSnapshotChunk message. Also converts values to other types if specified.
             * @param message ResponseLoadSnapshotChunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseLoadSnapshotChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseLoadSnapshotChunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseApplySnapshotChunk. */
        interface IResponseApplySnapshotChunk {

            /** ResponseApplySnapshotChunk result */
            result?: (tendermint.abci.ResponseApplySnapshotChunk.Result|null);

            /** ResponseApplySnapshotChunk refetchChunks */
            refetchChunks?: (number[]|null);

            /** ResponseApplySnapshotChunk rejectSenders */
            rejectSenders?: (string[]|null);
        }

        /** Represents a ResponseApplySnapshotChunk. */
        class ResponseApplySnapshotChunk implements IResponseApplySnapshotChunk {

            /**
             * Constructs a new ResponseApplySnapshotChunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseApplySnapshotChunk);

            /** ResponseApplySnapshotChunk result. */
            public result: tendermint.abci.ResponseApplySnapshotChunk.Result;

            /** ResponseApplySnapshotChunk refetchChunks. */
            public refetchChunks: number[];

            /** ResponseApplySnapshotChunk rejectSenders. */
            public rejectSenders: string[];

            /**
             * Creates a new ResponseApplySnapshotChunk instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseApplySnapshotChunk instance
             */
            public static create(properties?: tendermint.abci.IResponseApplySnapshotChunk): tendermint.abci.ResponseApplySnapshotChunk;

            /**
             * Encodes the specified ResponseApplySnapshotChunk message. Does not implicitly {@link tendermint.abci.ResponseApplySnapshotChunk.verify|verify} messages.
             * @param message ResponseApplySnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseApplySnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseApplySnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.ResponseApplySnapshotChunk.verify|verify} messages.
             * @param message ResponseApplySnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseApplySnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseApplySnapshotChunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseApplySnapshotChunk;

            /**
             * Decodes a ResponseApplySnapshotChunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseApplySnapshotChunk;

            /**
             * Verifies a ResponseApplySnapshotChunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseApplySnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseApplySnapshotChunk
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseApplySnapshotChunk;

            /**
             * Creates a plain object from a ResponseApplySnapshotChunk message. Also converts values to other types if specified.
             * @param message ResponseApplySnapshotChunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseApplySnapshotChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseApplySnapshotChunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResponseApplySnapshotChunk {

            /** Result enum. */
            enum Result {
                UNKNOWN = 0,
                ACCEPT = 1,
                ABORT = 2,
                RETRY = 3,
                RETRY_SNAPSHOT = 4,
                REJECT_SNAPSHOT = 5
            }
        }

        /** Properties of a ConsensusParams. */
        interface IConsensusParams {

            /** ConsensusParams block */
            block?: (tendermint.abci.IBlockParams|null);

            /** ConsensusParams evidence */
            evidence?: (tendermint.types.IEvidenceParams|null);

            /** ConsensusParams validator */
            validator?: (tendermint.types.IValidatorParams|null);

            /** ConsensusParams version */
            version?: (tendermint.types.IVersionParams|null);
        }

        /** Represents a ConsensusParams. */
        class ConsensusParams implements IConsensusParams {

            /**
             * Constructs a new ConsensusParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IConsensusParams);

            /** ConsensusParams block. */
            public block?: (tendermint.abci.IBlockParams|null);

            /** ConsensusParams evidence. */
            public evidence?: (tendermint.types.IEvidenceParams|null);

            /** ConsensusParams validator. */
            public validator?: (tendermint.types.IValidatorParams|null);

            /** ConsensusParams version. */
            public version?: (tendermint.types.IVersionParams|null);

            /**
             * Creates a new ConsensusParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConsensusParams instance
             */
            public static create(properties?: tendermint.abci.IConsensusParams): tendermint.abci.ConsensusParams;

            /**
             * Encodes the specified ConsensusParams message. Does not implicitly {@link tendermint.abci.ConsensusParams.verify|verify} messages.
             * @param message ConsensusParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConsensusParams message, length delimited. Does not implicitly {@link tendermint.abci.ConsensusParams.verify|verify} messages.
             * @param message ConsensusParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ConsensusParams;

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ConsensusParams;

            /**
             * Verifies a ConsensusParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConsensusParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConsensusParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ConsensusParams;

            /**
             * Creates a plain object from a ConsensusParams message. Also converts values to other types if specified.
             * @param message ConsensusParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ConsensusParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConsensusParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockParams. */
        interface IBlockParams {

            /** BlockParams maxBytes */
            maxBytes?: (number|Long|null);

            /** BlockParams maxGas */
            maxGas?: (number|Long|null);
        }

        /** Represents a BlockParams. */
        class BlockParams implements IBlockParams {

            /**
             * Constructs a new BlockParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IBlockParams);

            /** BlockParams maxBytes. */
            public maxBytes: (number|Long);

            /** BlockParams maxGas. */
            public maxGas: (number|Long);

            /**
             * Creates a new BlockParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockParams instance
             */
            public static create(properties?: tendermint.abci.IBlockParams): tendermint.abci.BlockParams;

            /**
             * Encodes the specified BlockParams message. Does not implicitly {@link tendermint.abci.BlockParams.verify|verify} messages.
             * @param message BlockParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IBlockParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockParams message, length delimited. Does not implicitly {@link tendermint.abci.BlockParams.verify|verify} messages.
             * @param message BlockParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IBlockParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.BlockParams;

            /**
             * Decodes a BlockParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.BlockParams;

            /**
             * Verifies a BlockParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.BlockParams;

            /**
             * Creates a plain object from a BlockParams message. Also converts values to other types if specified.
             * @param message BlockParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.BlockParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LastCommitInfo. */
        interface ILastCommitInfo {

            /** LastCommitInfo round */
            round?: (number|null);

            /** LastCommitInfo votes */
            votes?: (tendermint.abci.IVoteInfo[]|null);
        }

        /** Represents a LastCommitInfo. */
        class LastCommitInfo implements ILastCommitInfo {

            /**
             * Constructs a new LastCommitInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.ILastCommitInfo);

            /** LastCommitInfo round. */
            public round: number;

            /** LastCommitInfo votes. */
            public votes: tendermint.abci.IVoteInfo[];

            /**
             * Creates a new LastCommitInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LastCommitInfo instance
             */
            public static create(properties?: tendermint.abci.ILastCommitInfo): tendermint.abci.LastCommitInfo;

            /**
             * Encodes the specified LastCommitInfo message. Does not implicitly {@link tendermint.abci.LastCommitInfo.verify|verify} messages.
             * @param message LastCommitInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.ILastCommitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LastCommitInfo message, length delimited. Does not implicitly {@link tendermint.abci.LastCommitInfo.verify|verify} messages.
             * @param message LastCommitInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.ILastCommitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LastCommitInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LastCommitInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.LastCommitInfo;

            /**
             * Decodes a LastCommitInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LastCommitInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.LastCommitInfo;

            /**
             * Verifies a LastCommitInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LastCommitInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LastCommitInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.LastCommitInfo;

            /**
             * Creates a plain object from a LastCommitInfo message. Also converts values to other types if specified.
             * @param message LastCommitInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.LastCommitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LastCommitInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Event. */
        interface IEvent {

            /** Event type */
            type?: (string|null);

            /** Event attributes */
            attributes?: (tendermint.abci.IEventAttribute[]|null);
        }

        /** Represents an Event. */
        class Event implements IEvent {

            /**
             * Constructs a new Event.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IEvent);

            /** Event type. */
            public type: string;

            /** Event attributes. */
            public attributes: tendermint.abci.IEventAttribute[];

            /**
             * Creates a new Event instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Event instance
             */
            public static create(properties?: tendermint.abci.IEvent): tendermint.abci.Event;

            /**
             * Encodes the specified Event message. Does not implicitly {@link tendermint.abci.Event.verify|verify} messages.
             * @param message Event message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Event message, length delimited. Does not implicitly {@link tendermint.abci.Event.verify|verify} messages.
             * @param message Event message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Event message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Event;

            /**
             * Decodes an Event message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Event;

            /**
             * Verifies an Event message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Event message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Event
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Event;

            /**
             * Creates a plain object from an Event message. Also converts values to other types if specified.
             * @param message Event
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Event to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EventAttribute. */
        interface IEventAttribute {

            /** EventAttribute key */
            key?: (Uint8Array|null);

            /** EventAttribute value */
            value?: (Uint8Array|null);

            /** EventAttribute index */
            index?: (boolean|null);
        }

        /** Represents an EventAttribute. */
        class EventAttribute implements IEventAttribute {

            /**
             * Constructs a new EventAttribute.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IEventAttribute);

            /** EventAttribute key. */
            public key: Uint8Array;

            /** EventAttribute value. */
            public value: Uint8Array;

            /** EventAttribute index. */
            public index: boolean;

            /**
             * Creates a new EventAttribute instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EventAttribute instance
             */
            public static create(properties?: tendermint.abci.IEventAttribute): tendermint.abci.EventAttribute;

            /**
             * Encodes the specified EventAttribute message. Does not implicitly {@link tendermint.abci.EventAttribute.verify|verify} messages.
             * @param message EventAttribute message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IEventAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EventAttribute message, length delimited. Does not implicitly {@link tendermint.abci.EventAttribute.verify|verify} messages.
             * @param message EventAttribute message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IEventAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EventAttribute message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EventAttribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.EventAttribute;

            /**
             * Decodes an EventAttribute message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EventAttribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.EventAttribute;

            /**
             * Verifies an EventAttribute message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EventAttribute message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EventAttribute
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.EventAttribute;

            /**
             * Creates a plain object from an EventAttribute message. Also converts values to other types if specified.
             * @param message EventAttribute
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.EventAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EventAttribute to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TxResult. */
        interface ITxResult {

            /** TxResult height */
            height?: (number|Long|null);

            /** TxResult index */
            index?: (number|null);

            /** TxResult tx */
            tx?: (Uint8Array|null);

            /** TxResult result */
            result?: (tendermint.abci.IResponseDeliverTx|null);
        }

        /** Represents a TxResult. */
        class TxResult implements ITxResult {

            /**
             * Constructs a new TxResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.ITxResult);

            /** TxResult height. */
            public height: (number|Long);

            /** TxResult index. */
            public index: number;

            /** TxResult tx. */
            public tx: Uint8Array;

            /** TxResult result. */
            public result?: (tendermint.abci.IResponseDeliverTx|null);

            /**
             * Creates a new TxResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TxResult instance
             */
            public static create(properties?: tendermint.abci.ITxResult): tendermint.abci.TxResult;

            /**
             * Encodes the specified TxResult message. Does not implicitly {@link tendermint.abci.TxResult.verify|verify} messages.
             * @param message TxResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.ITxResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TxResult message, length delimited. Does not implicitly {@link tendermint.abci.TxResult.verify|verify} messages.
             * @param message TxResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.ITxResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TxResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.TxResult;

            /**
             * Decodes a TxResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TxResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.TxResult;

            /**
             * Verifies a TxResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TxResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TxResult
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.TxResult;

            /**
             * Creates a plain object from a TxResult message. Also converts values to other types if specified.
             * @param message TxResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.TxResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TxResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Validator. */
        interface IValidator {

            /** Validator address */
            address?: (Uint8Array|null);

            /** Validator power */
            power?: (number|Long|null);
        }

        /** Represents a Validator. */
        class Validator implements IValidator {

            /**
             * Constructs a new Validator.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IValidator);

            /** Validator address. */
            public address: Uint8Array;

            /** Validator power. */
            public power: (number|Long);

            /**
             * Creates a new Validator instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Validator instance
             */
            public static create(properties?: tendermint.abci.IValidator): tendermint.abci.Validator;

            /**
             * Encodes the specified Validator message. Does not implicitly {@link tendermint.abci.Validator.verify|verify} messages.
             * @param message Validator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Validator message, length delimited. Does not implicitly {@link tendermint.abci.Validator.verify|verify} messages.
             * @param message Validator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Validator message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Validator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Validator;

            /**
             * Decodes a Validator message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Validator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Validator;

            /**
             * Verifies a Validator message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Validator message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Validator
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Validator;

            /**
             * Creates a plain object from a Validator message. Also converts values to other types if specified.
             * @param message Validator
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Validator, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Validator to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValidatorUpdate. */
        interface IValidatorUpdate {

            /** ValidatorUpdate pubKey */
            pubKey?: (tendermint.crypto.IPublicKey|null);

            /** ValidatorUpdate power */
            power?: (number|Long|null);
        }

        /** Represents a ValidatorUpdate. */
        class ValidatorUpdate implements IValidatorUpdate {

            /**
             * Constructs a new ValidatorUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IValidatorUpdate);

            /** ValidatorUpdate pubKey. */
            public pubKey?: (tendermint.crypto.IPublicKey|null);

            /** ValidatorUpdate power. */
            public power: (number|Long);

            /**
             * Creates a new ValidatorUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValidatorUpdate instance
             */
            public static create(properties?: tendermint.abci.IValidatorUpdate): tendermint.abci.ValidatorUpdate;

            /**
             * Encodes the specified ValidatorUpdate message. Does not implicitly {@link tendermint.abci.ValidatorUpdate.verify|verify} messages.
             * @param message ValidatorUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IValidatorUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValidatorUpdate message, length delimited. Does not implicitly {@link tendermint.abci.ValidatorUpdate.verify|verify} messages.
             * @param message ValidatorUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IValidatorUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidatorUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValidatorUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ValidatorUpdate;

            /**
             * Decodes a ValidatorUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValidatorUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ValidatorUpdate;

            /**
             * Verifies a ValidatorUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValidatorUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValidatorUpdate
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ValidatorUpdate;

            /**
             * Creates a plain object from a ValidatorUpdate message. Also converts values to other types if specified.
             * @param message ValidatorUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ValidatorUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValidatorUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VoteInfo. */
        interface IVoteInfo {

            /** VoteInfo validator */
            validator?: (tendermint.abci.IValidator|null);

            /** VoteInfo signedLastBlock */
            signedLastBlock?: (boolean|null);
        }

        /** Represents a VoteInfo. */
        class VoteInfo implements IVoteInfo {

            /**
             * Constructs a new VoteInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IVoteInfo);

            /** VoteInfo validator. */
            public validator?: (tendermint.abci.IValidator|null);

            /** VoteInfo signedLastBlock. */
            public signedLastBlock: boolean;

            /**
             * Creates a new VoteInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VoteInfo instance
             */
            public static create(properties?: tendermint.abci.IVoteInfo): tendermint.abci.VoteInfo;

            /**
             * Encodes the specified VoteInfo message. Does not implicitly {@link tendermint.abci.VoteInfo.verify|verify} messages.
             * @param message VoteInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IVoteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VoteInfo message, length delimited. Does not implicitly {@link tendermint.abci.VoteInfo.verify|verify} messages.
             * @param message VoteInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IVoteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VoteInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VoteInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.VoteInfo;

            /**
             * Decodes a VoteInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VoteInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.VoteInfo;

            /**
             * Verifies a VoteInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VoteInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VoteInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.VoteInfo;

            /**
             * Creates a plain object from a VoteInfo message. Also converts values to other types if specified.
             * @param message VoteInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.VoteInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VoteInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** EvidenceType enum. */
        enum EvidenceType {
            UNKNOWN = 0,
            DUPLICATE_VOTE = 1,
            LIGHT_CLIENT_ATTACK = 2
        }

        /** Properties of an Evidence. */
        interface IEvidence {

            /** Evidence type */
            type?: (tendermint.abci.EvidenceType|null);

            /** Evidence validator */
            validator?: (tendermint.abci.IValidator|null);

            /** Evidence height */
            height?: (number|Long|null);

            /** Evidence time */
            time?: (google.protobuf.ITimestamp|null);

            /** Evidence totalVotingPower */
            totalVotingPower?: (number|Long|null);
        }

        /** Represents an Evidence. */
        class Evidence implements IEvidence {

            /**
             * Constructs a new Evidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IEvidence);

            /** Evidence type. */
            public type: tendermint.abci.EvidenceType;

            /** Evidence validator. */
            public validator?: (tendermint.abci.IValidator|null);

            /** Evidence height. */
            public height: (number|Long);

            /** Evidence time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** Evidence totalVotingPower. */
            public totalVotingPower: (number|Long);

            /**
             * Creates a new Evidence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Evidence instance
             */
            public static create(properties?: tendermint.abci.IEvidence): tendermint.abci.Evidence;

            /**
             * Encodes the specified Evidence message. Does not implicitly {@link tendermint.abci.Evidence.verify|verify} messages.
             * @param message Evidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Evidence message, length delimited. Does not implicitly {@link tendermint.abci.Evidence.verify|verify} messages.
             * @param message Evidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Evidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Evidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Evidence;

            /**
             * Decodes an Evidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Evidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Evidence;

            /**
             * Verifies an Evidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Evidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Evidence
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Evidence;

            /**
             * Creates a plain object from an Evidence message. Also converts values to other types if specified.
             * @param message Evidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Evidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Evidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Snapshot. */
        interface ISnapshot {

            /** Snapshot height */
            height?: (number|Long|null);

            /** Snapshot format */
            format?: (number|null);

            /** Snapshot chunks */
            chunks?: (number|null);

            /** Snapshot hash */
            hash?: (Uint8Array|null);

            /** Snapshot metadata */
            metadata?: (Uint8Array|null);
        }

        /** Represents a Snapshot. */
        class Snapshot implements ISnapshot {

            /**
             * Constructs a new Snapshot.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.ISnapshot);

            /** Snapshot height. */
            public height: (number|Long);

            /** Snapshot format. */
            public format: number;

            /** Snapshot chunks. */
            public chunks: number;

            /** Snapshot hash. */
            public hash: Uint8Array;

            /** Snapshot metadata. */
            public metadata: Uint8Array;

            /**
             * Creates a new Snapshot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Snapshot instance
             */
            public static create(properties?: tendermint.abci.ISnapshot): tendermint.abci.Snapshot;

            /**
             * Encodes the specified Snapshot message. Does not implicitly {@link tendermint.abci.Snapshot.verify|verify} messages.
             * @param message Snapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Snapshot message, length delimited. Does not implicitly {@link tendermint.abci.Snapshot.verify|verify} messages.
             * @param message Snapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Snapshot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Snapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Snapshot;

            /**
             * Decodes a Snapshot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Snapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Snapshot;

            /**
             * Verifies a Snapshot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Snapshot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Snapshot
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Snapshot;

            /**
             * Creates a plain object from a Snapshot message. Also converts values to other types if specified.
             * @param message Snapshot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Snapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Snapshot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a ABCIApplication */
        class ABCIApplication extends $protobuf.rpc.Service {

            /**
             * Constructs a new ABCIApplication service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new ABCIApplication service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ABCIApplication;

            /**
             * Calls Echo.
             * @param request RequestEcho message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseEcho
             */
            public echo(request: tendermint.abci.IRequestEcho, callback: tendermint.abci.ABCIApplication.EchoCallback): void;

            /**
             * Calls Echo.
             * @param request RequestEcho message or plain object
             * @returns Promise
             */
            public echo(request: tendermint.abci.IRequestEcho): Promise<tendermint.abci.ResponseEcho>;

            /**
             * Calls Flush.
             * @param request RequestFlush message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseFlush
             */
            public flush(request: tendermint.abci.IRequestFlush, callback: tendermint.abci.ABCIApplication.FlushCallback): void;

            /**
             * Calls Flush.
             * @param request RequestFlush message or plain object
             * @returns Promise
             */
            public flush(request: tendermint.abci.IRequestFlush): Promise<tendermint.abci.ResponseFlush>;

            /**
             * Calls Info.
             * @param request RequestInfo message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseInfo
             */
            public info(request: tendermint.abci.IRequestInfo, callback: tendermint.abci.ABCIApplication.InfoCallback): void;

            /**
             * Calls Info.
             * @param request RequestInfo message or plain object
             * @returns Promise
             */
            public info(request: tendermint.abci.IRequestInfo): Promise<tendermint.abci.ResponseInfo>;

            /**
             * Calls SetOption.
             * @param request RequestSetOption message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseSetOption
             */
            public setOption(request: tendermint.abci.IRequestSetOption, callback: tendermint.abci.ABCIApplication.SetOptionCallback): void;

            /**
             * Calls SetOption.
             * @param request RequestSetOption message or plain object
             * @returns Promise
             */
            public setOption(request: tendermint.abci.IRequestSetOption): Promise<tendermint.abci.ResponseSetOption>;

            /**
             * Calls DeliverTx.
             * @param request RequestDeliverTx message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseDeliverTx
             */
            public deliverTx(request: tendermint.abci.IRequestDeliverTx, callback: tendermint.abci.ABCIApplication.DeliverTxCallback): void;

            /**
             * Calls DeliverTx.
             * @param request RequestDeliverTx message or plain object
             * @returns Promise
             */
            public deliverTx(request: tendermint.abci.IRequestDeliverTx): Promise<tendermint.abci.ResponseDeliverTx>;

            /**
             * Calls CheckTx.
             * @param request RequestCheckTx message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseCheckTx
             */
            public checkTx(request: tendermint.abci.IRequestCheckTx, callback: tendermint.abci.ABCIApplication.CheckTxCallback): void;

            /**
             * Calls CheckTx.
             * @param request RequestCheckTx message or plain object
             * @returns Promise
             */
            public checkTx(request: tendermint.abci.IRequestCheckTx): Promise<tendermint.abci.ResponseCheckTx>;

            /**
             * Calls Query.
             * @param request RequestQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseQuery
             */
            public query(request: tendermint.abci.IRequestQuery, callback: tendermint.abci.ABCIApplication.QueryCallback): void;

            /**
             * Calls Query.
             * @param request RequestQuery message or plain object
             * @returns Promise
             */
            public query(request: tendermint.abci.IRequestQuery): Promise<tendermint.abci.ResponseQuery>;

            /**
             * Calls Commit.
             * @param request RequestCommit message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseCommit
             */
            public commit(request: tendermint.abci.IRequestCommit, callback: tendermint.abci.ABCIApplication.CommitCallback): void;

            /**
             * Calls Commit.
             * @param request RequestCommit message or plain object
             * @returns Promise
             */
            public commit(request: tendermint.abci.IRequestCommit): Promise<tendermint.abci.ResponseCommit>;

            /**
             * Calls InitChain.
             * @param request RequestInitChain message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseInitChain
             */
            public initChain(request: tendermint.abci.IRequestInitChain, callback: tendermint.abci.ABCIApplication.InitChainCallback): void;

            /**
             * Calls InitChain.
             * @param request RequestInitChain message or plain object
             * @returns Promise
             */
            public initChain(request: tendermint.abci.IRequestInitChain): Promise<tendermint.abci.ResponseInitChain>;

            /**
             * Calls BeginBlock.
             * @param request RequestBeginBlock message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseBeginBlock
             */
            public beginBlock(request: tendermint.abci.IRequestBeginBlock, callback: tendermint.abci.ABCIApplication.BeginBlockCallback): void;

            /**
             * Calls BeginBlock.
             * @param request RequestBeginBlock message or plain object
             * @returns Promise
             */
            public beginBlock(request: tendermint.abci.IRequestBeginBlock): Promise<tendermint.abci.ResponseBeginBlock>;

            /**
             * Calls EndBlock.
             * @param request RequestEndBlock message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseEndBlock
             */
            public endBlock(request: tendermint.abci.IRequestEndBlock, callback: tendermint.abci.ABCIApplication.EndBlockCallback): void;

            /**
             * Calls EndBlock.
             * @param request RequestEndBlock message or plain object
             * @returns Promise
             */
            public endBlock(request: tendermint.abci.IRequestEndBlock): Promise<tendermint.abci.ResponseEndBlock>;

            /**
             * Calls ListSnapshots.
             * @param request RequestListSnapshots message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseListSnapshots
             */
            public listSnapshots(request: tendermint.abci.IRequestListSnapshots, callback: tendermint.abci.ABCIApplication.ListSnapshotsCallback): void;

            /**
             * Calls ListSnapshots.
             * @param request RequestListSnapshots message or plain object
             * @returns Promise
             */
            public listSnapshots(request: tendermint.abci.IRequestListSnapshots): Promise<tendermint.abci.ResponseListSnapshots>;

            /**
             * Calls OfferSnapshot.
             * @param request RequestOfferSnapshot message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseOfferSnapshot
             */
            public offerSnapshot(request: tendermint.abci.IRequestOfferSnapshot, callback: tendermint.abci.ABCIApplication.OfferSnapshotCallback): void;

            /**
             * Calls OfferSnapshot.
             * @param request RequestOfferSnapshot message or plain object
             * @returns Promise
             */
            public offerSnapshot(request: tendermint.abci.IRequestOfferSnapshot): Promise<tendermint.abci.ResponseOfferSnapshot>;

            /**
             * Calls LoadSnapshotChunk.
             * @param request RequestLoadSnapshotChunk message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseLoadSnapshotChunk
             */
            public loadSnapshotChunk(request: tendermint.abci.IRequestLoadSnapshotChunk, callback: tendermint.abci.ABCIApplication.LoadSnapshotChunkCallback): void;

            /**
             * Calls LoadSnapshotChunk.
             * @param request RequestLoadSnapshotChunk message or plain object
             * @returns Promise
             */
            public loadSnapshotChunk(request: tendermint.abci.IRequestLoadSnapshotChunk): Promise<tendermint.abci.ResponseLoadSnapshotChunk>;

            /**
             * Calls ApplySnapshotChunk.
             * @param request RequestApplySnapshotChunk message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseApplySnapshotChunk
             */
            public applySnapshotChunk(request: tendermint.abci.IRequestApplySnapshotChunk, callback: tendermint.abci.ABCIApplication.ApplySnapshotChunkCallback): void;

            /**
             * Calls ApplySnapshotChunk.
             * @param request RequestApplySnapshotChunk message or plain object
             * @returns Promise
             */
            public applySnapshotChunk(request: tendermint.abci.IRequestApplySnapshotChunk): Promise<tendermint.abci.ResponseApplySnapshotChunk>;
        }

        namespace ABCIApplication {

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#echo}.
             * @param error Error, if any
             * @param [response] ResponseEcho
             */
            type EchoCallback = (error: (Error|null), response?: tendermint.abci.ResponseEcho) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#flush}.
             * @param error Error, if any
             * @param [response] ResponseFlush
             */
            type FlushCallback = (error: (Error|null), response?: tendermint.abci.ResponseFlush) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#info}.
             * @param error Error, if any
             * @param [response] ResponseInfo
             */
            type InfoCallback = (error: (Error|null), response?: tendermint.abci.ResponseInfo) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#setOption}.
             * @param error Error, if any
             * @param [response] ResponseSetOption
             */
            type SetOptionCallback = (error: (Error|null), response?: tendermint.abci.ResponseSetOption) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#deliverTx}.
             * @param error Error, if any
             * @param [response] ResponseDeliverTx
             */
            type DeliverTxCallback = (error: (Error|null), response?: tendermint.abci.ResponseDeliverTx) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#checkTx}.
             * @param error Error, if any
             * @param [response] ResponseCheckTx
             */
            type CheckTxCallback = (error: (Error|null), response?: tendermint.abci.ResponseCheckTx) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#query}.
             * @param error Error, if any
             * @param [response] ResponseQuery
             */
            type QueryCallback = (error: (Error|null), response?: tendermint.abci.ResponseQuery) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#commit}.
             * @param error Error, if any
             * @param [response] ResponseCommit
             */
            type CommitCallback = (error: (Error|null), response?: tendermint.abci.ResponseCommit) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#initChain}.
             * @param error Error, if any
             * @param [response] ResponseInitChain
             */
            type InitChainCallback = (error: (Error|null), response?: tendermint.abci.ResponseInitChain) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#beginBlock}.
             * @param error Error, if any
             * @param [response] ResponseBeginBlock
             */
            type BeginBlockCallback = (error: (Error|null), response?: tendermint.abci.ResponseBeginBlock) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#endBlock}.
             * @param error Error, if any
             * @param [response] ResponseEndBlock
             */
            type EndBlockCallback = (error: (Error|null), response?: tendermint.abci.ResponseEndBlock) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#listSnapshots}.
             * @param error Error, if any
             * @param [response] ResponseListSnapshots
             */
            type ListSnapshotsCallback = (error: (Error|null), response?: tendermint.abci.ResponseListSnapshots) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#offerSnapshot}.
             * @param error Error, if any
             * @param [response] ResponseOfferSnapshot
             */
            type OfferSnapshotCallback = (error: (Error|null), response?: tendermint.abci.ResponseOfferSnapshot) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#loadSnapshotChunk}.
             * @param error Error, if any
             * @param [response] ResponseLoadSnapshotChunk
             */
            type LoadSnapshotChunkCallback = (error: (Error|null), response?: tendermint.abci.ResponseLoadSnapshotChunk) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#applySnapshotChunk}.
             * @param error Error, if any
             * @param [response] ResponseApplySnapshotChunk
             */
            type ApplySnapshotChunkCallback = (error: (Error|null), response?: tendermint.abci.ResponseApplySnapshotChunk) => void;
        }
    }

    /** Namespace crypto. */
    namespace crypto {

        /** Properties of a Proof. */
        interface IProof {

            /** Proof total */
            total?: (number|Long|null);

            /** Proof index */
            index?: (number|Long|null);

            /** Proof leafHash */
            leafHash?: (Uint8Array|null);

            /** Proof aunts */
            aunts?: (Uint8Array[]|null);
        }

        /** Represents a Proof. */
        class Proof implements IProof {

            /**
             * Constructs a new Proof.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IProof);

            /** Proof total. */
            public total: (number|Long);

            /** Proof index. */
            public index: (number|Long);

            /** Proof leafHash. */
            public leafHash: Uint8Array;

            /** Proof aunts. */
            public aunts: Uint8Array[];

            /**
             * Creates a new Proof instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Proof instance
             */
            public static create(properties?: tendermint.crypto.IProof): tendermint.crypto.Proof;

            /**
             * Encodes the specified Proof message. Does not implicitly {@link tendermint.crypto.Proof.verify|verify} messages.
             * @param message Proof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Proof message, length delimited. Does not implicitly {@link tendermint.crypto.Proof.verify|verify} messages.
             * @param message Proof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Proof message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Proof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.Proof;

            /**
             * Decodes a Proof message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Proof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.Proof;

            /**
             * Verifies a Proof message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Proof message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Proof
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.Proof;

            /**
             * Creates a plain object from a Proof message. Also converts values to other types if specified.
             * @param message Proof
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.Proof, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Proof to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValueOp. */
        interface IValueOp {

            /** ValueOp key */
            key?: (Uint8Array|null);

            /** ValueOp proof */
            proof?: (tendermint.crypto.IProof|null);
        }

        /** Represents a ValueOp. */
        class ValueOp implements IValueOp {

            /**
             * Constructs a new ValueOp.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IValueOp);

            /** ValueOp key. */
            public key: Uint8Array;

            /** ValueOp proof. */
            public proof?: (tendermint.crypto.IProof|null);

            /**
             * Creates a new ValueOp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValueOp instance
             */
            public static create(properties?: tendermint.crypto.IValueOp): tendermint.crypto.ValueOp;

            /**
             * Encodes the specified ValueOp message. Does not implicitly {@link tendermint.crypto.ValueOp.verify|verify} messages.
             * @param message ValueOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IValueOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValueOp message, length delimited. Does not implicitly {@link tendermint.crypto.ValueOp.verify|verify} messages.
             * @param message ValueOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IValueOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValueOp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValueOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.ValueOp;

            /**
             * Decodes a ValueOp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValueOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.ValueOp;

            /**
             * Verifies a ValueOp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValueOp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValueOp
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.ValueOp;

            /**
             * Creates a plain object from a ValueOp message. Also converts values to other types if specified.
             * @param message ValueOp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.ValueOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValueOp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DominoOp. */
        interface IDominoOp {

            /** DominoOp key */
            key?: (string|null);

            /** DominoOp input */
            input?: (string|null);

            /** DominoOp output */
            output?: (string|null);
        }

        /** Represents a DominoOp. */
        class DominoOp implements IDominoOp {

            /**
             * Constructs a new DominoOp.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IDominoOp);

            /** DominoOp key. */
            public key: string;

            /** DominoOp input. */
            public input: string;

            /** DominoOp output. */
            public output: string;

            /**
             * Creates a new DominoOp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DominoOp instance
             */
            public static create(properties?: tendermint.crypto.IDominoOp): tendermint.crypto.DominoOp;

            /**
             * Encodes the specified DominoOp message. Does not implicitly {@link tendermint.crypto.DominoOp.verify|verify} messages.
             * @param message DominoOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IDominoOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DominoOp message, length delimited. Does not implicitly {@link tendermint.crypto.DominoOp.verify|verify} messages.
             * @param message DominoOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IDominoOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DominoOp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DominoOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.DominoOp;

            /**
             * Decodes a DominoOp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DominoOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.DominoOp;

            /**
             * Verifies a DominoOp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DominoOp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DominoOp
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.DominoOp;

            /**
             * Creates a plain object from a DominoOp message. Also converts values to other types if specified.
             * @param message DominoOp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.DominoOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DominoOp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProofOp. */
        interface IProofOp {

            /** ProofOp type */
            type?: (string|null);

            /** ProofOp key */
            key?: (Uint8Array|null);

            /** ProofOp data */
            data?: (Uint8Array|null);
        }

        /** Represents a ProofOp. */
        class ProofOp implements IProofOp {

            /**
             * Constructs a new ProofOp.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IProofOp);

            /** ProofOp type. */
            public type: string;

            /** ProofOp key. */
            public key: Uint8Array;

            /** ProofOp data. */
            public data: Uint8Array;

            /**
             * Creates a new ProofOp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProofOp instance
             */
            public static create(properties?: tendermint.crypto.IProofOp): tendermint.crypto.ProofOp;

            /**
             * Encodes the specified ProofOp message. Does not implicitly {@link tendermint.crypto.ProofOp.verify|verify} messages.
             * @param message ProofOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IProofOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProofOp message, length delimited. Does not implicitly {@link tendermint.crypto.ProofOp.verify|verify} messages.
             * @param message ProofOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IProofOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProofOp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProofOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.ProofOp;

            /**
             * Decodes a ProofOp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProofOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.ProofOp;

            /**
             * Verifies a ProofOp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProofOp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProofOp
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.ProofOp;

            /**
             * Creates a plain object from a ProofOp message. Also converts values to other types if specified.
             * @param message ProofOp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.ProofOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProofOp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProofOps. */
        interface IProofOps {

            /** ProofOps ops */
            ops?: (tendermint.crypto.IProofOp[]|null);
        }

        /** Represents a ProofOps. */
        class ProofOps implements IProofOps {

            /**
             * Constructs a new ProofOps.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IProofOps);

            /** ProofOps ops. */
            public ops: tendermint.crypto.IProofOp[];

            /**
             * Creates a new ProofOps instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProofOps instance
             */
            public static create(properties?: tendermint.crypto.IProofOps): tendermint.crypto.ProofOps;

            /**
             * Encodes the specified ProofOps message. Does not implicitly {@link tendermint.crypto.ProofOps.verify|verify} messages.
             * @param message ProofOps message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IProofOps, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProofOps message, length delimited. Does not implicitly {@link tendermint.crypto.ProofOps.verify|verify} messages.
             * @param message ProofOps message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IProofOps, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProofOps message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProofOps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.ProofOps;

            /**
             * Decodes a ProofOps message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProofOps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.ProofOps;

            /**
             * Verifies a ProofOps message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProofOps message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProofOps
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.ProofOps;

            /**
             * Creates a plain object from a ProofOps message. Also converts values to other types if specified.
             * @param message ProofOps
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.ProofOps, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProofOps to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PublicKey. */
        interface IPublicKey {

            /** PublicKey ed25519 */
            ed25519?: (Uint8Array|null);

            /** PublicKey secp256k1 */
            secp256k1?: (Uint8Array|null);

            /** PublicKey bls12381 */
            bls12381?: (Uint8Array|null);
        }

        /** Represents a PublicKey. */
        class PublicKey implements IPublicKey {

            /**
             * Constructs a new PublicKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IPublicKey);

            /** PublicKey ed25519. */
            public ed25519: Uint8Array;

            /** PublicKey secp256k1. */
            public secp256k1: Uint8Array;

            /** PublicKey bls12381. */
            public bls12381: Uint8Array;

            /** PublicKey sum. */
            public sum?: ("ed25519"|"secp256k1"|"bls12381");

            /**
             * Creates a new PublicKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PublicKey instance
             */
            public static create(properties?: tendermint.crypto.IPublicKey): tendermint.crypto.PublicKey;

            /**
             * Encodes the specified PublicKey message. Does not implicitly {@link tendermint.crypto.PublicKey.verify|verify} messages.
             * @param message PublicKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PublicKey message, length delimited. Does not implicitly {@link tendermint.crypto.PublicKey.verify|verify} messages.
             * @param message PublicKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PublicKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PublicKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.PublicKey;

            /**
             * Decodes a PublicKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PublicKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.PublicKey;

            /**
             * Verifies a PublicKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PublicKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PublicKey
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.PublicKey;

            /**
             * Creates a plain object from a PublicKey message. Also converts values to other types if specified.
             * @param message PublicKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.PublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PublicKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace types. */
    namespace types {

        /** Properties of a PartSetHeader. */
        interface IPartSetHeader {

            /** PartSetHeader total */
            total?: (number|null);

            /** PartSetHeader hash */
            hash?: (Uint8Array|null);
        }

        /** Represents a PartSetHeader. */
        class PartSetHeader implements IPartSetHeader {

            /**
             * Constructs a new PartSetHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IPartSetHeader);

            /** PartSetHeader total. */
            public total: number;

            /** PartSetHeader hash. */
            public hash: Uint8Array;

            /**
             * Creates a new PartSetHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PartSetHeader instance
             */
            public static create(properties?: tendermint.types.IPartSetHeader): tendermint.types.PartSetHeader;

            /**
             * Encodes the specified PartSetHeader message. Does not implicitly {@link tendermint.types.PartSetHeader.verify|verify} messages.
             * @param message PartSetHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IPartSetHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PartSetHeader message, length delimited. Does not implicitly {@link tendermint.types.PartSetHeader.verify|verify} messages.
             * @param message PartSetHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IPartSetHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PartSetHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PartSetHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.PartSetHeader;

            /**
             * Decodes a PartSetHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PartSetHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.PartSetHeader;

            /**
             * Verifies a PartSetHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PartSetHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PartSetHeader
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.PartSetHeader;

            /**
             * Creates a plain object from a PartSetHeader message. Also converts values to other types if specified.
             * @param message PartSetHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.PartSetHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PartSetHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockID. */
        interface IBlockID {

            /** BlockID hash */
            hash?: (Uint8Array|null);

            /** BlockID partSetHeader */
            partSetHeader?: (tendermint.types.IPartSetHeader|null);
        }

        /** Represents a BlockID. */
        class BlockID implements IBlockID {

            /**
             * Constructs a new BlockID.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IBlockID);

            /** BlockID hash. */
            public hash: Uint8Array;

            /** BlockID partSetHeader. */
            public partSetHeader?: (tendermint.types.IPartSetHeader|null);

            /**
             * Creates a new BlockID instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockID instance
             */
            public static create(properties?: tendermint.types.IBlockID): tendermint.types.BlockID;

            /**
             * Encodes the specified BlockID message. Does not implicitly {@link tendermint.types.BlockID.verify|verify} messages.
             * @param message BlockID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IBlockID, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockID message, length delimited. Does not implicitly {@link tendermint.types.BlockID.verify|verify} messages.
             * @param message BlockID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IBlockID, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockID message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.BlockID;

            /**
             * Decodes a BlockID message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.BlockID;

            /**
             * Verifies a BlockID message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockID message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockID
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.BlockID;

            /**
             * Creates a plain object from a BlockID message. Also converts values to other types if specified.
             * @param message BlockID
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.BlockID, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockID to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Header. */
        interface IHeader {

            /** Header version */
            version?: (tendermint.version.IConsensus|null);

            /** Header chainId */
            chainId?: (string|null);

            /** Header height */
            height?: (number|Long|null);

            /** Header coreChainLockedHeight */
            coreChainLockedHeight?: (number|null);

            /** Header time */
            time?: (google.protobuf.ITimestamp|null);

            /** Header lastBlockId */
            lastBlockId?: (tendermint.types.IBlockID|null);

            /** Header lastCommitHash */
            lastCommitHash?: (Uint8Array|null);

            /** Header dataHash */
            dataHash?: (Uint8Array|null);

            /** Header validatorsHash */
            validatorsHash?: (Uint8Array|null);

            /** Header nextValidatorsHash */
            nextValidatorsHash?: (Uint8Array|null);

            /** Header consensusHash */
            consensusHash?: (Uint8Array|null);

            /** Header appHash */
            appHash?: (Uint8Array|null);

            /** Header lastResultsHash */
            lastResultsHash?: (Uint8Array|null);

            /** Header evidenceHash */
            evidenceHash?: (Uint8Array|null);

            /** Header proposerAddress */
            proposerAddress?: (Uint8Array|null);
        }

        /** Represents a Header. */
        class Header implements IHeader {

            /**
             * Constructs a new Header.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IHeader);

            /** Header version. */
            public version?: (tendermint.version.IConsensus|null);

            /** Header chainId. */
            public chainId: string;

            /** Header height. */
            public height: (number|Long);

            /** Header coreChainLockedHeight. */
            public coreChainLockedHeight: number;

            /** Header time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** Header lastBlockId. */
            public lastBlockId?: (tendermint.types.IBlockID|null);

            /** Header lastCommitHash. */
            public lastCommitHash: Uint8Array;

            /** Header dataHash. */
            public dataHash: Uint8Array;

            /** Header validatorsHash. */
            public validatorsHash: Uint8Array;

            /** Header nextValidatorsHash. */
            public nextValidatorsHash: Uint8Array;

            /** Header consensusHash. */
            public consensusHash: Uint8Array;

            /** Header appHash. */
            public appHash: Uint8Array;

            /** Header lastResultsHash. */
            public lastResultsHash: Uint8Array;

            /** Header evidenceHash. */
            public evidenceHash: Uint8Array;

            /** Header proposerAddress. */
            public proposerAddress: Uint8Array;

            /**
             * Creates a new Header instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Header instance
             */
            public static create(properties?: tendermint.types.IHeader): tendermint.types.Header;

            /**
             * Encodes the specified Header message. Does not implicitly {@link tendermint.types.Header.verify|verify} messages.
             * @param message Header message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Header message, length delimited. Does not implicitly {@link tendermint.types.Header.verify|verify} messages.
             * @param message Header message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Header message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Header;

            /**
             * Decodes a Header message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Header;

            /**
             * Verifies a Header message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Header message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Header
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Header;

            /**
             * Creates a plain object from a Header message. Also converts values to other types if specified.
             * @param message Header
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Header to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CoreChainLock. */
        interface ICoreChainLock {

            /** CoreChainLock blockHeight */
            blockHeight?: (number|null);

            /** CoreChainLock blockHash */
            blockHash?: (Uint8Array|null);

            /** CoreChainLock signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a CoreChainLock. */
        class CoreChainLock implements ICoreChainLock {

            /**
             * Constructs a new CoreChainLock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ICoreChainLock);

            /** CoreChainLock blockHeight. */
            public blockHeight: number;

            /** CoreChainLock blockHash. */
            public blockHash: Uint8Array;

            /** CoreChainLock signature. */
            public signature: Uint8Array;

            /**
             * Creates a new CoreChainLock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CoreChainLock instance
             */
            public static create(properties?: tendermint.types.ICoreChainLock): tendermint.types.CoreChainLock;

            /**
             * Encodes the specified CoreChainLock message. Does not implicitly {@link tendermint.types.CoreChainLock.verify|verify} messages.
             * @param message CoreChainLock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ICoreChainLock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CoreChainLock message, length delimited. Does not implicitly {@link tendermint.types.CoreChainLock.verify|verify} messages.
             * @param message CoreChainLock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ICoreChainLock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CoreChainLock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CoreChainLock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.CoreChainLock;

            /**
             * Decodes a CoreChainLock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CoreChainLock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.CoreChainLock;

            /**
             * Verifies a CoreChainLock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CoreChainLock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CoreChainLock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.CoreChainLock;

            /**
             * Creates a plain object from a CoreChainLock message. Also converts values to other types if specified.
             * @param message CoreChainLock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.CoreChainLock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CoreChainLock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ConsensusParams. */
        interface IConsensusParams {

            /** ConsensusParams block */
            block?: (tendermint.types.IBlockParams|null);

            /** ConsensusParams evidence */
            evidence?: (tendermint.types.IEvidenceParams|null);

            /** ConsensusParams validator */
            validator?: (tendermint.types.IValidatorParams|null);

            /** ConsensusParams version */
            version?: (tendermint.types.IVersionParams|null);
        }

        /** Represents a ConsensusParams. */
        class ConsensusParams implements IConsensusParams {

            /**
             * Constructs a new ConsensusParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IConsensusParams);

            /** ConsensusParams block. */
            public block?: (tendermint.types.IBlockParams|null);

            /** ConsensusParams evidence. */
            public evidence?: (tendermint.types.IEvidenceParams|null);

            /** ConsensusParams validator. */
            public validator?: (tendermint.types.IValidatorParams|null);

            /** ConsensusParams version. */
            public version?: (tendermint.types.IVersionParams|null);

            /**
             * Creates a new ConsensusParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConsensusParams instance
             */
            public static create(properties?: tendermint.types.IConsensusParams): tendermint.types.ConsensusParams;

            /**
             * Encodes the specified ConsensusParams message. Does not implicitly {@link tendermint.types.ConsensusParams.verify|verify} messages.
             * @param message ConsensusParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConsensusParams message, length delimited. Does not implicitly {@link tendermint.types.ConsensusParams.verify|verify} messages.
             * @param message ConsensusParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.ConsensusParams;

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.ConsensusParams;

            /**
             * Verifies a ConsensusParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConsensusParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConsensusParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.ConsensusParams;

            /**
             * Creates a plain object from a ConsensusParams message. Also converts values to other types if specified.
             * @param message ConsensusParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.ConsensusParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConsensusParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockParams. */
        interface IBlockParams {

            /** BlockParams maxBytes */
            maxBytes?: (number|Long|null);

            /** BlockParams maxGas */
            maxGas?: (number|Long|null);

            /** BlockParams timeIotaMs */
            timeIotaMs?: (number|Long|null);
        }

        /** Represents a BlockParams. */
        class BlockParams implements IBlockParams {

            /**
             * Constructs a new BlockParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IBlockParams);

            /** BlockParams maxBytes. */
            public maxBytes: (number|Long);

            /** BlockParams maxGas. */
            public maxGas: (number|Long);

            /** BlockParams timeIotaMs. */
            public timeIotaMs: (number|Long);

            /**
             * Creates a new BlockParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockParams instance
             */
            public static create(properties?: tendermint.types.IBlockParams): tendermint.types.BlockParams;

            /**
             * Encodes the specified BlockParams message. Does not implicitly {@link tendermint.types.BlockParams.verify|verify} messages.
             * @param message BlockParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IBlockParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockParams message, length delimited. Does not implicitly {@link tendermint.types.BlockParams.verify|verify} messages.
             * @param message BlockParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IBlockParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.BlockParams;

            /**
             * Decodes a BlockParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.BlockParams;

            /**
             * Verifies a BlockParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.BlockParams;

            /**
             * Creates a plain object from a BlockParams message. Also converts values to other types if specified.
             * @param message BlockParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.BlockParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EvidenceParams. */
        interface IEvidenceParams {

            /** EvidenceParams maxAgeNumBlocks */
            maxAgeNumBlocks?: (number|Long|null);

            /** EvidenceParams maxAgeDuration */
            maxAgeDuration?: (google.protobuf.IDuration|null);

            /** EvidenceParams maxBytes */
            maxBytes?: (number|Long|null);
        }

        /** Represents an EvidenceParams. */
        class EvidenceParams implements IEvidenceParams {

            /**
             * Constructs a new EvidenceParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IEvidenceParams);

            /** EvidenceParams maxAgeNumBlocks. */
            public maxAgeNumBlocks: (number|Long);

            /** EvidenceParams maxAgeDuration. */
            public maxAgeDuration?: (google.protobuf.IDuration|null);

            /** EvidenceParams maxBytes. */
            public maxBytes: (number|Long);

            /**
             * Creates a new EvidenceParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EvidenceParams instance
             */
            public static create(properties?: tendermint.types.IEvidenceParams): tendermint.types.EvidenceParams;

            /**
             * Encodes the specified EvidenceParams message. Does not implicitly {@link tendermint.types.EvidenceParams.verify|verify} messages.
             * @param message EvidenceParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IEvidenceParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EvidenceParams message, length delimited. Does not implicitly {@link tendermint.types.EvidenceParams.verify|verify} messages.
             * @param message EvidenceParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IEvidenceParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EvidenceParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EvidenceParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.EvidenceParams;

            /**
             * Decodes an EvidenceParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EvidenceParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.EvidenceParams;

            /**
             * Verifies an EvidenceParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EvidenceParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EvidenceParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.EvidenceParams;

            /**
             * Creates a plain object from an EvidenceParams message. Also converts values to other types if specified.
             * @param message EvidenceParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.EvidenceParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EvidenceParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValidatorParams. */
        interface IValidatorParams {

            /** ValidatorParams pubKeyTypes */
            pubKeyTypes?: (string[]|null);
        }

        /** Represents a ValidatorParams. */
        class ValidatorParams implements IValidatorParams {

            /**
             * Constructs a new ValidatorParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IValidatorParams);

            /** ValidatorParams pubKeyTypes. */
            public pubKeyTypes: string[];

            /**
             * Creates a new ValidatorParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValidatorParams instance
             */
            public static create(properties?: tendermint.types.IValidatorParams): tendermint.types.ValidatorParams;

            /**
             * Encodes the specified ValidatorParams message. Does not implicitly {@link tendermint.types.ValidatorParams.verify|verify} messages.
             * @param message ValidatorParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IValidatorParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValidatorParams message, length delimited. Does not implicitly {@link tendermint.types.ValidatorParams.verify|verify} messages.
             * @param message ValidatorParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IValidatorParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidatorParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValidatorParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.ValidatorParams;

            /**
             * Decodes a ValidatorParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValidatorParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.ValidatorParams;

            /**
             * Verifies a ValidatorParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValidatorParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValidatorParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.ValidatorParams;

            /**
             * Creates a plain object from a ValidatorParams message. Also converts values to other types if specified.
             * @param message ValidatorParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.ValidatorParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValidatorParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VersionParams. */
        interface IVersionParams {

            /** VersionParams appVersion */
            appVersion?: (number|Long|null);
        }

        /** Represents a VersionParams. */
        class VersionParams implements IVersionParams {

            /**
             * Constructs a new VersionParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IVersionParams);

            /** VersionParams appVersion. */
            public appVersion: (number|Long);

            /**
             * Creates a new VersionParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VersionParams instance
             */
            public static create(properties?: tendermint.types.IVersionParams): tendermint.types.VersionParams;

            /**
             * Encodes the specified VersionParams message. Does not implicitly {@link tendermint.types.VersionParams.verify|verify} messages.
             * @param message VersionParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IVersionParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VersionParams message, length delimited. Does not implicitly {@link tendermint.types.VersionParams.verify|verify} messages.
             * @param message VersionParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IVersionParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VersionParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VersionParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.VersionParams;

            /**
             * Decodes a VersionParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VersionParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.VersionParams;

            /**
             * Verifies a VersionParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VersionParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VersionParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.VersionParams;

            /**
             * Creates a plain object from a VersionParams message. Also converts values to other types if specified.
             * @param message VersionParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.VersionParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VersionParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HashedParams. */
        interface IHashedParams {

            /** HashedParams blockMaxBytes */
            blockMaxBytes?: (number|Long|null);

            /** HashedParams blockMaxGas */
            blockMaxGas?: (number|Long|null);
        }

        /** Represents a HashedParams. */
        class HashedParams implements IHashedParams {

            /**
             * Constructs a new HashedParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IHashedParams);

            /** HashedParams blockMaxBytes. */
            public blockMaxBytes: (number|Long);

            /** HashedParams blockMaxGas. */
            public blockMaxGas: (number|Long);

            /**
             * Creates a new HashedParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HashedParams instance
             */
            public static create(properties?: tendermint.types.IHashedParams): tendermint.types.HashedParams;

            /**
             * Encodes the specified HashedParams message. Does not implicitly {@link tendermint.types.HashedParams.verify|verify} messages.
             * @param message HashedParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IHashedParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HashedParams message, length delimited. Does not implicitly {@link tendermint.types.HashedParams.verify|verify} messages.
             * @param message HashedParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IHashedParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HashedParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HashedParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.HashedParams;

            /**
             * Decodes a HashedParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HashedParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.HashedParams;

            /**
             * Verifies a HashedParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HashedParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HashedParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.HashedParams;

            /**
             * Creates a plain object from a HashedParams message. Also converts values to other types if specified.
             * @param message HashedParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.HashedParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HashedParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace version. */
    namespace version {

        /** Properties of an App. */
        interface IApp {

            /** App protocol */
            protocol?: (number|Long|null);

            /** App software */
            software?: (string|null);
        }

        /** Represents an App. */
        class App implements IApp {

            /**
             * Constructs a new App.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.version.IApp);

            /** App protocol. */
            public protocol: (number|Long);

            /** App software. */
            public software: string;

            /**
             * Creates a new App instance using the specified properties.
             * @param [properties] Properties to set
             * @returns App instance
             */
            public static create(properties?: tendermint.version.IApp): tendermint.version.App;

            /**
             * Encodes the specified App message. Does not implicitly {@link tendermint.version.App.verify|verify} messages.
             * @param message App message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.version.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified App message, length delimited. Does not implicitly {@link tendermint.version.App.verify|verify} messages.
             * @param message App message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.version.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an App message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.version.App;

            /**
             * Decodes an App message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.version.App;

            /**
             * Verifies an App message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an App message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns App
             */
            public static fromObject(object: { [k: string]: any }): tendermint.version.App;

            /**
             * Creates a plain object from an App message. Also converts values to other types if specified.
             * @param message App
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.version.App, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this App to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Consensus. */
        interface IConsensus {

            /** Consensus block */
            block?: (number|Long|null);

            /** Consensus app */
            app?: (number|Long|null);
        }

        /** Represents a Consensus. */
        class Consensus implements IConsensus {

            /**
             * Constructs a new Consensus.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.version.IConsensus);

            /** Consensus block. */
            public block: (number|Long);

            /** Consensus app. */
            public app: (number|Long);

            /**
             * Creates a new Consensus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Consensus instance
             */
            public static create(properties?: tendermint.version.IConsensus): tendermint.version.Consensus;

            /**
             * Encodes the specified Consensus message. Does not implicitly {@link tendermint.version.Consensus.verify|verify} messages.
             * @param message Consensus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.version.IConsensus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Consensus message, length delimited. Does not implicitly {@link tendermint.version.Consensus.verify|verify} messages.
             * @param message Consensus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.version.IConsensus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Consensus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Consensus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.version.Consensus;

            /**
             * Decodes a Consensus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Consensus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.version.Consensus;

            /**
             * Verifies a Consensus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Consensus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Consensus
             */
            public static fromObject(object: { [k: string]: any }): tendermint.version.Consensus;

            /**
             * Creates a plain object from a Consensus message. Also converts values to other types if specified.
             * @param message Consensus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.version.Consensus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Consensus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
