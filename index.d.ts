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

            /** Request initChain */
            initChain?: (tendermint.abci.IRequestInitChain|null);

            /** Request query */
            query?: (tendermint.abci.IRequestQuery|null);

            /** Request checkTx */
            checkTx?: (tendermint.abci.IRequestCheckTx|null);

            /** Request listSnapshots */
            listSnapshots?: (tendermint.abci.IRequestListSnapshots|null);

            /** Request offerSnapshot */
            offerSnapshot?: (tendermint.abci.IRequestOfferSnapshot|null);

            /** Request loadSnapshotChunk */
            loadSnapshotChunk?: (tendermint.abci.IRequestLoadSnapshotChunk|null);

            /** Request applySnapshotChunk */
            applySnapshotChunk?: (tendermint.abci.IRequestApplySnapshotChunk|null);

            /** Request prepareProposal */
            prepareProposal?: (tendermint.abci.IRequestPrepareProposal|null);

            /** Request processProposal */
            processProposal?: (tendermint.abci.IRequestProcessProposal|null);

            /** Request extendVote */
            extendVote?: (tendermint.abci.IRequestExtendVote|null);

            /** Request verifyVoteExtension */
            verifyVoteExtension?: (tendermint.abci.IRequestVerifyVoteExtension|null);

            /** Request finalizeBlock */
            finalizeBlock?: (tendermint.abci.IRequestFinalizeBlock|null);
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

            /** Request initChain. */
            public initChain?: (tendermint.abci.IRequestInitChain|null);

            /** Request query. */
            public query?: (tendermint.abci.IRequestQuery|null);

            /** Request checkTx. */
            public checkTx?: (tendermint.abci.IRequestCheckTx|null);

            /** Request listSnapshots. */
            public listSnapshots?: (tendermint.abci.IRequestListSnapshots|null);

            /** Request offerSnapshot. */
            public offerSnapshot?: (tendermint.abci.IRequestOfferSnapshot|null);

            /** Request loadSnapshotChunk. */
            public loadSnapshotChunk?: (tendermint.abci.IRequestLoadSnapshotChunk|null);

            /** Request applySnapshotChunk. */
            public applySnapshotChunk?: (tendermint.abci.IRequestApplySnapshotChunk|null);

            /** Request prepareProposal. */
            public prepareProposal?: (tendermint.abci.IRequestPrepareProposal|null);

            /** Request processProposal. */
            public processProposal?: (tendermint.abci.IRequestProcessProposal|null);

            /** Request extendVote. */
            public extendVote?: (tendermint.abci.IRequestExtendVote|null);

            /** Request verifyVoteExtension. */
            public verifyVoteExtension?: (tendermint.abci.IRequestVerifyVoteExtension|null);

            /** Request finalizeBlock. */
            public finalizeBlock?: (tendermint.abci.IRequestFinalizeBlock|null);

            /** Request value. */
            public value?: ("echo"|"flush"|"info"|"initChain"|"query"|"checkTx"|"listSnapshots"|"offerSnapshot"|"loadSnapshotChunk"|"applySnapshotChunk"|"prepareProposal"|"processProposal"|"extendVote"|"verifyVoteExtension"|"finalizeBlock");

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

            /** RequestInfo abciVersion */
            abciVersion?: (string|null);
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

            /** RequestInfo abciVersion. */
            public abciVersion: string;

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

        /** Properties of a RequestInitChain. */
        interface IRequestInitChain {

            /** RequestInitChain time */
            time?: (google.protobuf.ITimestamp|null);

            /** RequestInitChain chainId */
            chainId?: (string|null);

            /** RequestInitChain consensusParams */
            consensusParams?: (tendermint.types.IConsensusParams|null);

            /** RequestInitChain validatorSet */
            validatorSet?: (tendermint.abci.IValidatorSetUpdate|null);

            /** RequestInitChain appStateBytes */
            appStateBytes?: (Uint8Array|null);

            /** RequestInitChain initialHeight */
            initialHeight?: (number|Long|null);

            /** RequestInitChain initialCoreHeight */
            initialCoreHeight?: (number|null);
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
            public consensusParams?: (tendermint.types.IConsensusParams|null);

            /** RequestInitChain validatorSet. */
            public validatorSet?: (tendermint.abci.IValidatorSetUpdate|null);

            /** RequestInitChain appStateBytes. */
            public appStateBytes: Uint8Array;

            /** RequestInitChain initialHeight. */
            public initialHeight: (number|Long);

            /** RequestInitChain initialCoreHeight. */
            public initialCoreHeight: number;

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

        /** Properties of a RequestPrepareProposal. */
        interface IRequestPrepareProposal {

            /** RequestPrepareProposal maxTxBytes */
            maxTxBytes?: (number|Long|null);

            /** RequestPrepareProposal txs */
            txs?: (Uint8Array[]|null);

            /** RequestPrepareProposal localLastCommit */
            localLastCommit?: (tendermint.abci.IExtendedCommitInfo|null);

            /** RequestPrepareProposal misbehavior */
            misbehavior?: (tendermint.abci.IMisbehavior[]|null);

            /** RequestPrepareProposal height */
            height?: (number|Long|null);

            /** RequestPrepareProposal time */
            time?: (google.protobuf.ITimestamp|null);

            /** RequestPrepareProposal nextValidatorsHash */
            nextValidatorsHash?: (Uint8Array|null);

            /** RequestPrepareProposal coreChainLockedHeight */
            coreChainLockedHeight?: (number|null);

            /** RequestPrepareProposal proposerProTxHash */
            proposerProTxHash?: (Uint8Array|null);

            /** RequestPrepareProposal proposedAppVersion */
            proposedAppVersion?: (number|Long|null);

            /** RequestPrepareProposal version */
            version?: (tendermint.version.IConsensus|null);
        }

        /** Represents a RequestPrepareProposal. */
        class RequestPrepareProposal implements IRequestPrepareProposal {

            /**
             * Constructs a new RequestPrepareProposal.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestPrepareProposal);

            /** RequestPrepareProposal maxTxBytes. */
            public maxTxBytes: (number|Long);

            /** RequestPrepareProposal txs. */
            public txs: Uint8Array[];

            /** RequestPrepareProposal localLastCommit. */
            public localLastCommit?: (tendermint.abci.IExtendedCommitInfo|null);

            /** RequestPrepareProposal misbehavior. */
            public misbehavior: tendermint.abci.IMisbehavior[];

            /** RequestPrepareProposal height. */
            public height: (number|Long);

            /** RequestPrepareProposal time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** RequestPrepareProposal nextValidatorsHash. */
            public nextValidatorsHash: Uint8Array;

            /** RequestPrepareProposal coreChainLockedHeight. */
            public coreChainLockedHeight: number;

            /** RequestPrepareProposal proposerProTxHash. */
            public proposerProTxHash: Uint8Array;

            /** RequestPrepareProposal proposedAppVersion. */
            public proposedAppVersion: (number|Long);

            /** RequestPrepareProposal version. */
            public version?: (tendermint.version.IConsensus|null);

            /**
             * Creates a new RequestPrepareProposal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestPrepareProposal instance
             */
            public static create(properties?: tendermint.abci.IRequestPrepareProposal): tendermint.abci.RequestPrepareProposal;

            /**
             * Encodes the specified RequestPrepareProposal message. Does not implicitly {@link tendermint.abci.RequestPrepareProposal.verify|verify} messages.
             * @param message RequestPrepareProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestPrepareProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestPrepareProposal message, length delimited. Does not implicitly {@link tendermint.abci.RequestPrepareProposal.verify|verify} messages.
             * @param message RequestPrepareProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestPrepareProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestPrepareProposal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestPrepareProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestPrepareProposal;

            /**
             * Decodes a RequestPrepareProposal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestPrepareProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestPrepareProposal;

            /**
             * Verifies a RequestPrepareProposal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestPrepareProposal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestPrepareProposal
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestPrepareProposal;

            /**
             * Creates a plain object from a RequestPrepareProposal message. Also converts values to other types if specified.
             * @param message RequestPrepareProposal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestPrepareProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestPrepareProposal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestProcessProposal. */
        interface IRequestProcessProposal {

            /** RequestProcessProposal txs */
            txs?: (Uint8Array[]|null);

            /** RequestProcessProposal proposedLastCommit */
            proposedLastCommit?: (tendermint.abci.ICommitInfo|null);

            /** RequestProcessProposal misbehavior */
            misbehavior?: (tendermint.abci.IMisbehavior[]|null);

            /** RequestProcessProposal hash */
            hash?: (Uint8Array|null);

            /** RequestProcessProposal height */
            height?: (number|Long|null);

            /** RequestProcessProposal time */
            time?: (google.protobuf.ITimestamp|null);

            /** RequestProcessProposal nextValidatorsHash */
            nextValidatorsHash?: (Uint8Array|null);

            /** RequestProcessProposal coreChainLockedHeight */
            coreChainLockedHeight?: (number|null);

            /** RequestProcessProposal proposerProTxHash */
            proposerProTxHash?: (Uint8Array|null);

            /** RequestProcessProposal proposedAppVersion */
            proposedAppVersion?: (number|Long|null);

            /** RequestProcessProposal version */
            version?: (tendermint.version.IConsensus|null);
        }

        /** Represents a RequestProcessProposal. */
        class RequestProcessProposal implements IRequestProcessProposal {

            /**
             * Constructs a new RequestProcessProposal.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestProcessProposal);

            /** RequestProcessProposal txs. */
            public txs: Uint8Array[];

            /** RequestProcessProposal proposedLastCommit. */
            public proposedLastCommit?: (tendermint.abci.ICommitInfo|null);

            /** RequestProcessProposal misbehavior. */
            public misbehavior: tendermint.abci.IMisbehavior[];

            /** RequestProcessProposal hash. */
            public hash: Uint8Array;

            /** RequestProcessProposal height. */
            public height: (number|Long);

            /** RequestProcessProposal time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** RequestProcessProposal nextValidatorsHash. */
            public nextValidatorsHash: Uint8Array;

            /** RequestProcessProposal coreChainLockedHeight. */
            public coreChainLockedHeight: number;

            /** RequestProcessProposal proposerProTxHash. */
            public proposerProTxHash: Uint8Array;

            /** RequestProcessProposal proposedAppVersion. */
            public proposedAppVersion: (number|Long);

            /** RequestProcessProposal version. */
            public version?: (tendermint.version.IConsensus|null);

            /**
             * Creates a new RequestProcessProposal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestProcessProposal instance
             */
            public static create(properties?: tendermint.abci.IRequestProcessProposal): tendermint.abci.RequestProcessProposal;

            /**
             * Encodes the specified RequestProcessProposal message. Does not implicitly {@link tendermint.abci.RequestProcessProposal.verify|verify} messages.
             * @param message RequestProcessProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestProcessProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestProcessProposal message, length delimited. Does not implicitly {@link tendermint.abci.RequestProcessProposal.verify|verify} messages.
             * @param message RequestProcessProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestProcessProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestProcessProposal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestProcessProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestProcessProposal;

            /**
             * Decodes a RequestProcessProposal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestProcessProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestProcessProposal;

            /**
             * Verifies a RequestProcessProposal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestProcessProposal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestProcessProposal
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestProcessProposal;

            /**
             * Creates a plain object from a RequestProcessProposal message. Also converts values to other types if specified.
             * @param message RequestProcessProposal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestProcessProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestProcessProposal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestExtendVote. */
        interface IRequestExtendVote {

            /** RequestExtendVote hash */
            hash?: (Uint8Array|null);

            /** RequestExtendVote height */
            height?: (number|Long|null);
        }

        /** Represents a RequestExtendVote. */
        class RequestExtendVote implements IRequestExtendVote {

            /**
             * Constructs a new RequestExtendVote.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestExtendVote);

            /** RequestExtendVote hash. */
            public hash: Uint8Array;

            /** RequestExtendVote height. */
            public height: (number|Long);

            /**
             * Creates a new RequestExtendVote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestExtendVote instance
             */
            public static create(properties?: tendermint.abci.IRequestExtendVote): tendermint.abci.RequestExtendVote;

            /**
             * Encodes the specified RequestExtendVote message. Does not implicitly {@link tendermint.abci.RequestExtendVote.verify|verify} messages.
             * @param message RequestExtendVote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestExtendVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestExtendVote message, length delimited. Does not implicitly {@link tendermint.abci.RequestExtendVote.verify|verify} messages.
             * @param message RequestExtendVote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestExtendVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestExtendVote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestExtendVote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestExtendVote;

            /**
             * Decodes a RequestExtendVote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestExtendVote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestExtendVote;

            /**
             * Verifies a RequestExtendVote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestExtendVote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestExtendVote
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestExtendVote;

            /**
             * Creates a plain object from a RequestExtendVote message. Also converts values to other types if specified.
             * @param message RequestExtendVote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestExtendVote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestExtendVote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestVerifyVoteExtension. */
        interface IRequestVerifyVoteExtension {

            /** RequestVerifyVoteExtension hash */
            hash?: (Uint8Array|null);

            /** RequestVerifyVoteExtension validatorProTxHash */
            validatorProTxHash?: (Uint8Array|null);

            /** RequestVerifyVoteExtension height */
            height?: (number|Long|null);

            /** RequestVerifyVoteExtension voteExtensions */
            voteExtensions?: (tendermint.abci.IExtendVoteExtension[]|null);
        }

        /** Represents a RequestVerifyVoteExtension. */
        class RequestVerifyVoteExtension implements IRequestVerifyVoteExtension {

            /**
             * Constructs a new RequestVerifyVoteExtension.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestVerifyVoteExtension);

            /** RequestVerifyVoteExtension hash. */
            public hash: Uint8Array;

            /** RequestVerifyVoteExtension validatorProTxHash. */
            public validatorProTxHash: Uint8Array;

            /** RequestVerifyVoteExtension height. */
            public height: (number|Long);

            /** RequestVerifyVoteExtension voteExtensions. */
            public voteExtensions: tendermint.abci.IExtendVoteExtension[];

            /**
             * Creates a new RequestVerifyVoteExtension instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestVerifyVoteExtension instance
             */
            public static create(properties?: tendermint.abci.IRequestVerifyVoteExtension): tendermint.abci.RequestVerifyVoteExtension;

            /**
             * Encodes the specified RequestVerifyVoteExtension message. Does not implicitly {@link tendermint.abci.RequestVerifyVoteExtension.verify|verify} messages.
             * @param message RequestVerifyVoteExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestVerifyVoteExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestVerifyVoteExtension message, length delimited. Does not implicitly {@link tendermint.abci.RequestVerifyVoteExtension.verify|verify} messages.
             * @param message RequestVerifyVoteExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestVerifyVoteExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestVerifyVoteExtension message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestVerifyVoteExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestVerifyVoteExtension;

            /**
             * Decodes a RequestVerifyVoteExtension message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestVerifyVoteExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestVerifyVoteExtension;

            /**
             * Verifies a RequestVerifyVoteExtension message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestVerifyVoteExtension message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestVerifyVoteExtension
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestVerifyVoteExtension;

            /**
             * Creates a plain object from a RequestVerifyVoteExtension message. Also converts values to other types if specified.
             * @param message RequestVerifyVoteExtension
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestVerifyVoteExtension, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestVerifyVoteExtension to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestFinalizeBlock. */
        interface IRequestFinalizeBlock {

            /** RequestFinalizeBlock txs */
            txs?: (Uint8Array[]|null);

            /** RequestFinalizeBlock decidedLastCommit */
            decidedLastCommit?: (tendermint.abci.ICommitInfo|null);

            /** RequestFinalizeBlock misbehavior */
            misbehavior?: (tendermint.abci.IMisbehavior[]|null);

            /** RequestFinalizeBlock hash */
            hash?: (Uint8Array|null);

            /** RequestFinalizeBlock height */
            height?: (number|Long|null);

            /** RequestFinalizeBlock time */
            time?: (google.protobuf.ITimestamp|null);

            /** RequestFinalizeBlock nextValidatorsHash */
            nextValidatorsHash?: (Uint8Array|null);

            /** RequestFinalizeBlock coreChainLockedHeight */
            coreChainLockedHeight?: (number|null);

            /** RequestFinalizeBlock proposerProTxHash */
            proposerProTxHash?: (Uint8Array|null);

            /** RequestFinalizeBlock proposedAppVersion */
            proposedAppVersion?: (number|Long|null);

            /** RequestFinalizeBlock version */
            version?: (tendermint.version.IConsensus|null);

            /** RequestFinalizeBlock appHash */
            appHash?: (Uint8Array|null);
        }

        /** Represents a RequestFinalizeBlock. */
        class RequestFinalizeBlock implements IRequestFinalizeBlock {

            /**
             * Constructs a new RequestFinalizeBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestFinalizeBlock);

            /** RequestFinalizeBlock txs. */
            public txs: Uint8Array[];

            /** RequestFinalizeBlock decidedLastCommit. */
            public decidedLastCommit?: (tendermint.abci.ICommitInfo|null);

            /** RequestFinalizeBlock misbehavior. */
            public misbehavior: tendermint.abci.IMisbehavior[];

            /** RequestFinalizeBlock hash. */
            public hash: Uint8Array;

            /** RequestFinalizeBlock height. */
            public height: (number|Long);

            /** RequestFinalizeBlock time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** RequestFinalizeBlock nextValidatorsHash. */
            public nextValidatorsHash: Uint8Array;

            /** RequestFinalizeBlock coreChainLockedHeight. */
            public coreChainLockedHeight: number;

            /** RequestFinalizeBlock proposerProTxHash. */
            public proposerProTxHash: Uint8Array;

            /** RequestFinalizeBlock proposedAppVersion. */
            public proposedAppVersion: (number|Long);

            /** RequestFinalizeBlock version. */
            public version?: (tendermint.version.IConsensus|null);

            /** RequestFinalizeBlock appHash. */
            public appHash: Uint8Array;

            /**
             * Creates a new RequestFinalizeBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestFinalizeBlock instance
             */
            public static create(properties?: tendermint.abci.IRequestFinalizeBlock): tendermint.abci.RequestFinalizeBlock;

            /**
             * Encodes the specified RequestFinalizeBlock message. Does not implicitly {@link tendermint.abci.RequestFinalizeBlock.verify|verify} messages.
             * @param message RequestFinalizeBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestFinalizeBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestFinalizeBlock message, length delimited. Does not implicitly {@link tendermint.abci.RequestFinalizeBlock.verify|verify} messages.
             * @param message RequestFinalizeBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestFinalizeBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestFinalizeBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestFinalizeBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestFinalizeBlock;

            /**
             * Decodes a RequestFinalizeBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestFinalizeBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestFinalizeBlock;

            /**
             * Verifies a RequestFinalizeBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestFinalizeBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestFinalizeBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestFinalizeBlock;

            /**
             * Creates a plain object from a RequestFinalizeBlock message. Also converts values to other types if specified.
             * @param message RequestFinalizeBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestFinalizeBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestFinalizeBlock to JSON.
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

            /** Response initChain */
            initChain?: (tendermint.abci.IResponseInitChain|null);

            /** Response query */
            query?: (tendermint.abci.IResponseQuery|null);

            /** Response checkTx */
            checkTx?: (tendermint.abci.IResponseCheckTx|null);

            /** Response listSnapshots */
            listSnapshots?: (tendermint.abci.IResponseListSnapshots|null);

            /** Response offerSnapshot */
            offerSnapshot?: (tendermint.abci.IResponseOfferSnapshot|null);

            /** Response loadSnapshotChunk */
            loadSnapshotChunk?: (tendermint.abci.IResponseLoadSnapshotChunk|null);

            /** Response applySnapshotChunk */
            applySnapshotChunk?: (tendermint.abci.IResponseApplySnapshotChunk|null);

            /** Response prepareProposal */
            prepareProposal?: (tendermint.abci.IResponsePrepareProposal|null);

            /** Response processProposal */
            processProposal?: (tendermint.abci.IResponseProcessProposal|null);

            /** Response extendVote */
            extendVote?: (tendermint.abci.IResponseExtendVote|null);

            /** Response verifyVoteExtension */
            verifyVoteExtension?: (tendermint.abci.IResponseVerifyVoteExtension|null);

            /** Response finalizeBlock */
            finalizeBlock?: (tendermint.abci.IResponseFinalizeBlock|null);
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

            /** Response initChain. */
            public initChain?: (tendermint.abci.IResponseInitChain|null);

            /** Response query. */
            public query?: (tendermint.abci.IResponseQuery|null);

            /** Response checkTx. */
            public checkTx?: (tendermint.abci.IResponseCheckTx|null);

            /** Response listSnapshots. */
            public listSnapshots?: (tendermint.abci.IResponseListSnapshots|null);

            /** Response offerSnapshot. */
            public offerSnapshot?: (tendermint.abci.IResponseOfferSnapshot|null);

            /** Response loadSnapshotChunk. */
            public loadSnapshotChunk?: (tendermint.abci.IResponseLoadSnapshotChunk|null);

            /** Response applySnapshotChunk. */
            public applySnapshotChunk?: (tendermint.abci.IResponseApplySnapshotChunk|null);

            /** Response prepareProposal. */
            public prepareProposal?: (tendermint.abci.IResponsePrepareProposal|null);

            /** Response processProposal. */
            public processProposal?: (tendermint.abci.IResponseProcessProposal|null);

            /** Response extendVote. */
            public extendVote?: (tendermint.abci.IResponseExtendVote|null);

            /** Response verifyVoteExtension. */
            public verifyVoteExtension?: (tendermint.abci.IResponseVerifyVoteExtension|null);

            /** Response finalizeBlock. */
            public finalizeBlock?: (tendermint.abci.IResponseFinalizeBlock|null);

            /** Response value. */
            public value?: ("exception"|"echo"|"flush"|"info"|"initChain"|"query"|"checkTx"|"listSnapshots"|"offerSnapshot"|"loadSnapshotChunk"|"applySnapshotChunk"|"prepareProposal"|"processProposal"|"extendVote"|"verifyVoteExtension"|"finalizeBlock");

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

        /** Properties of a ResponseInitChain. */
        interface IResponseInitChain {

            /** ResponseInitChain consensusParams */
            consensusParams?: (tendermint.types.IConsensusParams|null);

            /** ResponseInitChain appHash */
            appHash?: (Uint8Array|null);

            /** ResponseInitChain validatorSetUpdate */
            validatorSetUpdate?: (tendermint.abci.IValidatorSetUpdate|null);

            /** ResponseInitChain nextCoreChainLockUpdate */
            nextCoreChainLockUpdate?: (tendermint.types.ICoreChainLock|null);

            /** ResponseInitChain initialCoreHeight */
            initialCoreHeight?: (number|null);
        }

        /** Represents a ResponseInitChain. */
        class ResponseInitChain implements IResponseInitChain {

            /**
             * Constructs a new ResponseInitChain.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseInitChain);

            /** ResponseInitChain consensusParams. */
            public consensusParams?: (tendermint.types.IConsensusParams|null);

            /** ResponseInitChain appHash. */
            public appHash: Uint8Array;

            /** ResponseInitChain validatorSetUpdate. */
            public validatorSetUpdate?: (tendermint.abci.IValidatorSetUpdate|null);

            /** ResponseInitChain nextCoreChainLockUpdate. */
            public nextCoreChainLockUpdate?: (tendermint.types.ICoreChainLock|null);

            /** ResponseInitChain initialCoreHeight. */
            public initialCoreHeight: number;

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

        /** Properties of a ResponseCheckTx. */
        interface IResponseCheckTx {

            /** ResponseCheckTx code */
            code?: (number|null);

            /** ResponseCheckTx data */
            data?: (Uint8Array|null);

            /** ResponseCheckTx info */
            info?: (string|null);

            /** ResponseCheckTx gasWanted */
            gasWanted?: (number|Long|null);

            /** ResponseCheckTx codespace */
            codespace?: (string|null);

            /** ResponseCheckTx sender */
            sender?: (string|null);

            /** ResponseCheckTx priority */
            priority?: (number|Long|null);

            /** ResponseCheckTx mempoolError */
            mempoolError?: (string|null);
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

            /** ResponseCheckTx info. */
            public info: string;

            /** ResponseCheckTx gasWanted. */
            public gasWanted: (number|Long);

            /** ResponseCheckTx codespace. */
            public codespace: string;

            /** ResponseCheckTx sender. */
            public sender: string;

            /** ResponseCheckTx priority. */
            public priority: (number|Long);

            /** ResponseCheckTx mempoolError. */
            public mempoolError: string;

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

        /** Properties of a ResponsePrepareProposal. */
        interface IResponsePrepareProposal {

            /** ResponsePrepareProposal txRecords */
            txRecords?: (tendermint.abci.ITxRecord[]|null);

            /** ResponsePrepareProposal appHash */
            appHash?: (Uint8Array|null);

            /** ResponsePrepareProposal txResults */
            txResults?: (tendermint.abci.IExecTxResult[]|null);

            /** ResponsePrepareProposal consensusParamUpdates */
            consensusParamUpdates?: (tendermint.types.IConsensusParams|null);

            /** ResponsePrepareProposal coreChainLockUpdate */
            coreChainLockUpdate?: (tendermint.types.ICoreChainLock|null);

            /** ResponsePrepareProposal validatorSetUpdate */
            validatorSetUpdate?: (tendermint.abci.IValidatorSetUpdate|null);
        }

        /** Represents a ResponsePrepareProposal. */
        class ResponsePrepareProposal implements IResponsePrepareProposal {

            /**
             * Constructs a new ResponsePrepareProposal.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponsePrepareProposal);

            /** ResponsePrepareProposal txRecords. */
            public txRecords: tendermint.abci.ITxRecord[];

            /** ResponsePrepareProposal appHash. */
            public appHash: Uint8Array;

            /** ResponsePrepareProposal txResults. */
            public txResults: tendermint.abci.IExecTxResult[];

            /** ResponsePrepareProposal consensusParamUpdates. */
            public consensusParamUpdates?: (tendermint.types.IConsensusParams|null);

            /** ResponsePrepareProposal coreChainLockUpdate. */
            public coreChainLockUpdate?: (tendermint.types.ICoreChainLock|null);

            /** ResponsePrepareProposal validatorSetUpdate. */
            public validatorSetUpdate?: (tendermint.abci.IValidatorSetUpdate|null);

            /**
             * Creates a new ResponsePrepareProposal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponsePrepareProposal instance
             */
            public static create(properties?: tendermint.abci.IResponsePrepareProposal): tendermint.abci.ResponsePrepareProposal;

            /**
             * Encodes the specified ResponsePrepareProposal message. Does not implicitly {@link tendermint.abci.ResponsePrepareProposal.verify|verify} messages.
             * @param message ResponsePrepareProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponsePrepareProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponsePrepareProposal message, length delimited. Does not implicitly {@link tendermint.abci.ResponsePrepareProposal.verify|verify} messages.
             * @param message ResponsePrepareProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponsePrepareProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponsePrepareProposal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponsePrepareProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponsePrepareProposal;

            /**
             * Decodes a ResponsePrepareProposal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponsePrepareProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponsePrepareProposal;

            /**
             * Verifies a ResponsePrepareProposal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponsePrepareProposal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponsePrepareProposal
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponsePrepareProposal;

            /**
             * Creates a plain object from a ResponsePrepareProposal message. Also converts values to other types if specified.
             * @param message ResponsePrepareProposal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponsePrepareProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponsePrepareProposal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseProcessProposal. */
        interface IResponseProcessProposal {

            /** ResponseProcessProposal status */
            status?: (tendermint.abci.ResponseProcessProposal.ProposalStatus|null);

            /** ResponseProcessProposal appHash */
            appHash?: (Uint8Array|null);

            /** ResponseProcessProposal txResults */
            txResults?: (tendermint.abci.IExecTxResult[]|null);

            /** ResponseProcessProposal consensusParamUpdates */
            consensusParamUpdates?: (tendermint.types.IConsensusParams|null);

            /** ResponseProcessProposal validatorSetUpdate */
            validatorSetUpdate?: (tendermint.abci.IValidatorSetUpdate|null);
        }

        /** Represents a ResponseProcessProposal. */
        class ResponseProcessProposal implements IResponseProcessProposal {

            /**
             * Constructs a new ResponseProcessProposal.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseProcessProposal);

            /** ResponseProcessProposal status. */
            public status: tendermint.abci.ResponseProcessProposal.ProposalStatus;

            /** ResponseProcessProposal appHash. */
            public appHash: Uint8Array;

            /** ResponseProcessProposal txResults. */
            public txResults: tendermint.abci.IExecTxResult[];

            /** ResponseProcessProposal consensusParamUpdates. */
            public consensusParamUpdates?: (tendermint.types.IConsensusParams|null);

            /** ResponseProcessProposal validatorSetUpdate. */
            public validatorSetUpdate?: (tendermint.abci.IValidatorSetUpdate|null);

            /**
             * Creates a new ResponseProcessProposal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseProcessProposal instance
             */
            public static create(properties?: tendermint.abci.IResponseProcessProposal): tendermint.abci.ResponseProcessProposal;

            /**
             * Encodes the specified ResponseProcessProposal message. Does not implicitly {@link tendermint.abci.ResponseProcessProposal.verify|verify} messages.
             * @param message ResponseProcessProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseProcessProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseProcessProposal message, length delimited. Does not implicitly {@link tendermint.abci.ResponseProcessProposal.verify|verify} messages.
             * @param message ResponseProcessProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseProcessProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseProcessProposal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseProcessProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseProcessProposal;

            /**
             * Decodes a ResponseProcessProposal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseProcessProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseProcessProposal;

            /**
             * Verifies a ResponseProcessProposal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseProcessProposal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseProcessProposal
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseProcessProposal;

            /**
             * Creates a plain object from a ResponseProcessProposal message. Also converts values to other types if specified.
             * @param message ResponseProcessProposal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseProcessProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseProcessProposal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResponseProcessProposal {

            /** ProposalStatus enum. */
            enum ProposalStatus {
                UNKNOWN = 0,
                ACCEPT = 1,
                REJECT = 2
            }
        }

        /** Properties of an ExtendVoteExtension. */
        interface IExtendVoteExtension {

            /** ExtendVoteExtension type */
            type?: (tendermint.types.VoteExtensionType|null);

            /** ExtendVoteExtension extension */
            extension?: (Uint8Array|null);
        }

        /** Represents an ExtendVoteExtension. */
        class ExtendVoteExtension implements IExtendVoteExtension {

            /**
             * Constructs a new ExtendVoteExtension.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IExtendVoteExtension);

            /** ExtendVoteExtension type. */
            public type: tendermint.types.VoteExtensionType;

            /** ExtendVoteExtension extension. */
            public extension: Uint8Array;

            /**
             * Creates a new ExtendVoteExtension instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtendVoteExtension instance
             */
            public static create(properties?: tendermint.abci.IExtendVoteExtension): tendermint.abci.ExtendVoteExtension;

            /**
             * Encodes the specified ExtendVoteExtension message. Does not implicitly {@link tendermint.abci.ExtendVoteExtension.verify|verify} messages.
             * @param message ExtendVoteExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IExtendVoteExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtendVoteExtension message, length delimited. Does not implicitly {@link tendermint.abci.ExtendVoteExtension.verify|verify} messages.
             * @param message ExtendVoteExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IExtendVoteExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtendVoteExtension message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtendVoteExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ExtendVoteExtension;

            /**
             * Decodes an ExtendVoteExtension message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtendVoteExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ExtendVoteExtension;

            /**
             * Verifies an ExtendVoteExtension message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtendVoteExtension message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtendVoteExtension
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ExtendVoteExtension;

            /**
             * Creates a plain object from an ExtendVoteExtension message. Also converts values to other types if specified.
             * @param message ExtendVoteExtension
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ExtendVoteExtension, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtendVoteExtension to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseExtendVote. */
        interface IResponseExtendVote {

            /** ResponseExtendVote voteExtensions */
            voteExtensions?: (tendermint.abci.IExtendVoteExtension[]|null);
        }

        /** Represents a ResponseExtendVote. */
        class ResponseExtendVote implements IResponseExtendVote {

            /**
             * Constructs a new ResponseExtendVote.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseExtendVote);

            /** ResponseExtendVote voteExtensions. */
            public voteExtensions: tendermint.abci.IExtendVoteExtension[];

            /**
             * Creates a new ResponseExtendVote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseExtendVote instance
             */
            public static create(properties?: tendermint.abci.IResponseExtendVote): tendermint.abci.ResponseExtendVote;

            /**
             * Encodes the specified ResponseExtendVote message. Does not implicitly {@link tendermint.abci.ResponseExtendVote.verify|verify} messages.
             * @param message ResponseExtendVote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseExtendVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseExtendVote message, length delimited. Does not implicitly {@link tendermint.abci.ResponseExtendVote.verify|verify} messages.
             * @param message ResponseExtendVote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseExtendVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseExtendVote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseExtendVote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseExtendVote;

            /**
             * Decodes a ResponseExtendVote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseExtendVote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseExtendVote;

            /**
             * Verifies a ResponseExtendVote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseExtendVote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseExtendVote
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseExtendVote;

            /**
             * Creates a plain object from a ResponseExtendVote message. Also converts values to other types if specified.
             * @param message ResponseExtendVote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseExtendVote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseExtendVote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseVerifyVoteExtension. */
        interface IResponseVerifyVoteExtension {

            /** ResponseVerifyVoteExtension status */
            status?: (tendermint.abci.ResponseVerifyVoteExtension.VerifyStatus|null);
        }

        /** Represents a ResponseVerifyVoteExtension. */
        class ResponseVerifyVoteExtension implements IResponseVerifyVoteExtension {

            /**
             * Constructs a new ResponseVerifyVoteExtension.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseVerifyVoteExtension);

            /** ResponseVerifyVoteExtension status. */
            public status: tendermint.abci.ResponseVerifyVoteExtension.VerifyStatus;

            /**
             * Creates a new ResponseVerifyVoteExtension instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseVerifyVoteExtension instance
             */
            public static create(properties?: tendermint.abci.IResponseVerifyVoteExtension): tendermint.abci.ResponseVerifyVoteExtension;

            /**
             * Encodes the specified ResponseVerifyVoteExtension message. Does not implicitly {@link tendermint.abci.ResponseVerifyVoteExtension.verify|verify} messages.
             * @param message ResponseVerifyVoteExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseVerifyVoteExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseVerifyVoteExtension message, length delimited. Does not implicitly {@link tendermint.abci.ResponseVerifyVoteExtension.verify|verify} messages.
             * @param message ResponseVerifyVoteExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseVerifyVoteExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseVerifyVoteExtension message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseVerifyVoteExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseVerifyVoteExtension;

            /**
             * Decodes a ResponseVerifyVoteExtension message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseVerifyVoteExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseVerifyVoteExtension;

            /**
             * Verifies a ResponseVerifyVoteExtension message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseVerifyVoteExtension message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseVerifyVoteExtension
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseVerifyVoteExtension;

            /**
             * Creates a plain object from a ResponseVerifyVoteExtension message. Also converts values to other types if specified.
             * @param message ResponseVerifyVoteExtension
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseVerifyVoteExtension, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseVerifyVoteExtension to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResponseVerifyVoteExtension {

            /** VerifyStatus enum. */
            enum VerifyStatus {
                UNKNOWN = 0,
                ACCEPT = 1,
                REJECT = 2
            }
        }

        /** Properties of a ResponseFinalizeBlock. */
        interface IResponseFinalizeBlock {

            /** ResponseFinalizeBlock events */
            events?: (tendermint.abci.IEvent[]|null);

            /** ResponseFinalizeBlock retainHeight */
            retainHeight?: (number|Long|null);
        }

        /** Represents a ResponseFinalizeBlock. */
        class ResponseFinalizeBlock implements IResponseFinalizeBlock {

            /**
             * Constructs a new ResponseFinalizeBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseFinalizeBlock);

            /** ResponseFinalizeBlock events. */
            public events: tendermint.abci.IEvent[];

            /** ResponseFinalizeBlock retainHeight. */
            public retainHeight: (number|Long);

            /**
             * Creates a new ResponseFinalizeBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseFinalizeBlock instance
             */
            public static create(properties?: tendermint.abci.IResponseFinalizeBlock): tendermint.abci.ResponseFinalizeBlock;

            /**
             * Encodes the specified ResponseFinalizeBlock message. Does not implicitly {@link tendermint.abci.ResponseFinalizeBlock.verify|verify} messages.
             * @param message ResponseFinalizeBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseFinalizeBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseFinalizeBlock message, length delimited. Does not implicitly {@link tendermint.abci.ResponseFinalizeBlock.verify|verify} messages.
             * @param message ResponseFinalizeBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseFinalizeBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseFinalizeBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseFinalizeBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseFinalizeBlock;

            /**
             * Decodes a ResponseFinalizeBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseFinalizeBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseFinalizeBlock;

            /**
             * Verifies a ResponseFinalizeBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseFinalizeBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseFinalizeBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseFinalizeBlock;

            /**
             * Creates a plain object from a ResponseFinalizeBlock message. Also converts values to other types if specified.
             * @param message ResponseFinalizeBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseFinalizeBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseFinalizeBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CommitInfo. */
        interface ICommitInfo {

            /** CommitInfo round */
            round?: (number|null);

            /** CommitInfo quorumHash */
            quorumHash?: (Uint8Array|null);

            /** CommitInfo blockSignature */
            blockSignature?: (Uint8Array|null);

            /** CommitInfo stateSignature */
            stateSignature?: (Uint8Array|null);

            /** CommitInfo thresholdVoteExtensions */
            thresholdVoteExtensions?: (tendermint.types.IVoteExtension[]|null);
        }

        /** Represents a CommitInfo. */
        class CommitInfo implements ICommitInfo {

            /**
             * Constructs a new CommitInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.ICommitInfo);

            /** CommitInfo round. */
            public round: number;

            /** CommitInfo quorumHash. */
            public quorumHash: Uint8Array;

            /** CommitInfo blockSignature. */
            public blockSignature: Uint8Array;

            /** CommitInfo stateSignature. */
            public stateSignature: Uint8Array;

            /** CommitInfo thresholdVoteExtensions. */
            public thresholdVoteExtensions: tendermint.types.IVoteExtension[];

            /**
             * Creates a new CommitInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommitInfo instance
             */
            public static create(properties?: tendermint.abci.ICommitInfo): tendermint.abci.CommitInfo;

            /**
             * Encodes the specified CommitInfo message. Does not implicitly {@link tendermint.abci.CommitInfo.verify|verify} messages.
             * @param message CommitInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.ICommitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommitInfo message, length delimited. Does not implicitly {@link tendermint.abci.CommitInfo.verify|verify} messages.
             * @param message CommitInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.ICommitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommitInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommitInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.CommitInfo;

            /**
             * Decodes a CommitInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommitInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.CommitInfo;

            /**
             * Verifies a CommitInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommitInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommitInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.CommitInfo;

            /**
             * Creates a plain object from a CommitInfo message. Also converts values to other types if specified.
             * @param message CommitInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.CommitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommitInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExtendedCommitInfo. */
        interface IExtendedCommitInfo {

            /** ExtendedCommitInfo round */
            round?: (number|null);

            /** ExtendedCommitInfo quorumHash */
            quorumHash?: (Uint8Array|null);

            /** ExtendedCommitInfo blockSignature */
            blockSignature?: (Uint8Array|null);

            /** ExtendedCommitInfo stateSignature */
            stateSignature?: (Uint8Array|null);

            /** ExtendedCommitInfo thresholdVoteExtensions */
            thresholdVoteExtensions?: (tendermint.types.IVoteExtension[]|null);
        }

        /** Represents an ExtendedCommitInfo. */
        class ExtendedCommitInfo implements IExtendedCommitInfo {

            /**
             * Constructs a new ExtendedCommitInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IExtendedCommitInfo);

            /** ExtendedCommitInfo round. */
            public round: number;

            /** ExtendedCommitInfo quorumHash. */
            public quorumHash: Uint8Array;

            /** ExtendedCommitInfo blockSignature. */
            public blockSignature: Uint8Array;

            /** ExtendedCommitInfo stateSignature. */
            public stateSignature: Uint8Array;

            /** ExtendedCommitInfo thresholdVoteExtensions. */
            public thresholdVoteExtensions: tendermint.types.IVoteExtension[];

            /**
             * Creates a new ExtendedCommitInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtendedCommitInfo instance
             */
            public static create(properties?: tendermint.abci.IExtendedCommitInfo): tendermint.abci.ExtendedCommitInfo;

            /**
             * Encodes the specified ExtendedCommitInfo message. Does not implicitly {@link tendermint.abci.ExtendedCommitInfo.verify|verify} messages.
             * @param message ExtendedCommitInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IExtendedCommitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtendedCommitInfo message, length delimited. Does not implicitly {@link tendermint.abci.ExtendedCommitInfo.verify|verify} messages.
             * @param message ExtendedCommitInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IExtendedCommitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtendedCommitInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtendedCommitInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ExtendedCommitInfo;

            /**
             * Decodes an ExtendedCommitInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtendedCommitInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ExtendedCommitInfo;

            /**
             * Verifies an ExtendedCommitInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtendedCommitInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtendedCommitInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ExtendedCommitInfo;

            /**
             * Creates a plain object from an ExtendedCommitInfo message. Also converts values to other types if specified.
             * @param message ExtendedCommitInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ExtendedCommitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtendedCommitInfo to JSON.
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
            key?: (string|null);

            /** EventAttribute value */
            value?: (string|null);

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
            public key: string;

            /** EventAttribute value. */
            public value: string;

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

        /** Properties of an ExecTxResult. */
        interface IExecTxResult {

            /** ExecTxResult code */
            code?: (number|null);

            /** ExecTxResult data */
            data?: (Uint8Array|null);

            /** ExecTxResult log */
            log?: (string|null);

            /** ExecTxResult info */
            info?: (string|null);

            /** ExecTxResult gasWanted */
            gasWanted?: (number|Long|null);

            /** ExecTxResult gasUsed */
            gasUsed?: (number|Long|null);

            /** ExecTxResult events */
            events?: (tendermint.abci.IEvent[]|null);

            /** ExecTxResult codespace */
            codespace?: (string|null);
        }

        /** Represents an ExecTxResult. */
        class ExecTxResult implements IExecTxResult {

            /**
             * Constructs a new ExecTxResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IExecTxResult);

            /** ExecTxResult code. */
            public code: number;

            /** ExecTxResult data. */
            public data: Uint8Array;

            /** ExecTxResult log. */
            public log: string;

            /** ExecTxResult info. */
            public info: string;

            /** ExecTxResult gasWanted. */
            public gasWanted: (number|Long);

            /** ExecTxResult gasUsed. */
            public gasUsed: (number|Long);

            /** ExecTxResult events. */
            public events: tendermint.abci.IEvent[];

            /** ExecTxResult codespace. */
            public codespace: string;

            /**
             * Creates a new ExecTxResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecTxResult instance
             */
            public static create(properties?: tendermint.abci.IExecTxResult): tendermint.abci.ExecTxResult;

            /**
             * Encodes the specified ExecTxResult message. Does not implicitly {@link tendermint.abci.ExecTxResult.verify|verify} messages.
             * @param message ExecTxResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IExecTxResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecTxResult message, length delimited. Does not implicitly {@link tendermint.abci.ExecTxResult.verify|verify} messages.
             * @param message ExecTxResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IExecTxResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecTxResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecTxResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ExecTxResult;

            /**
             * Decodes an ExecTxResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecTxResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ExecTxResult;

            /**
             * Verifies an ExecTxResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecTxResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecTxResult
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ExecTxResult;

            /**
             * Creates a plain object from an ExecTxResult message. Also converts values to other types if specified.
             * @param message ExecTxResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ExecTxResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecTxResult to JSON.
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
            result?: (tendermint.abci.IExecTxResult|null);
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
            public result?: (tendermint.abci.IExecTxResult|null);

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

        /** Properties of a TxRecord. */
        interface ITxRecord {

            /** TxRecord action */
            action?: (tendermint.abci.TxRecord.TxAction|null);

            /** TxRecord tx */
            tx?: (Uint8Array|null);
        }

        /** Represents a TxRecord. */
        class TxRecord implements ITxRecord {

            /**
             * Constructs a new TxRecord.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.ITxRecord);

            /** TxRecord action. */
            public action: tendermint.abci.TxRecord.TxAction;

            /** TxRecord tx. */
            public tx: Uint8Array;

            /**
             * Creates a new TxRecord instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TxRecord instance
             */
            public static create(properties?: tendermint.abci.ITxRecord): tendermint.abci.TxRecord;

            /**
             * Encodes the specified TxRecord message. Does not implicitly {@link tendermint.abci.TxRecord.verify|verify} messages.
             * @param message TxRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.ITxRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TxRecord message, length delimited. Does not implicitly {@link tendermint.abci.TxRecord.verify|verify} messages.
             * @param message TxRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.ITxRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxRecord message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TxRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.TxRecord;

            /**
             * Decodes a TxRecord message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TxRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.TxRecord;

            /**
             * Verifies a TxRecord message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TxRecord message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TxRecord
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.TxRecord;

            /**
             * Creates a plain object from a TxRecord message. Also converts values to other types if specified.
             * @param message TxRecord
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.TxRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TxRecord to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace TxRecord {

            /** TxAction enum. */
            enum TxAction {
                UNKNOWN = 0,
                UNMODIFIED = 1,
                ADDED = 2,
                REMOVED = 3
            }
        }

        /** Properties of a Validator. */
        interface IValidator {

            /** Validator power */
            power?: (number|Long|null);

            /** Validator proTxHash */
            proTxHash?: (Uint8Array|null);
        }

        /** Represents a Validator. */
        class Validator implements IValidator {

            /**
             * Constructs a new Validator.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IValidator);

            /** Validator power. */
            public power: (number|Long);

            /** Validator proTxHash. */
            public proTxHash: Uint8Array;

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

            /** ValidatorUpdate proTxHash */
            proTxHash?: (Uint8Array|null);

            /** ValidatorUpdate nodeAddress */
            nodeAddress?: (string|null);
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

            /** ValidatorUpdate proTxHash. */
            public proTxHash: Uint8Array;

            /** ValidatorUpdate nodeAddress. */
            public nodeAddress: string;

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

        /** Properties of a ValidatorSetUpdate. */
        interface IValidatorSetUpdate {

            /** ValidatorSetUpdate validatorUpdates */
            validatorUpdates?: (tendermint.abci.IValidatorUpdate[]|null);

            /** ValidatorSetUpdate thresholdPublicKey */
            thresholdPublicKey?: (tendermint.crypto.IPublicKey|null);

            /** ValidatorSetUpdate quorumHash */
            quorumHash?: (Uint8Array|null);
        }

        /** Represents a ValidatorSetUpdate. */
        class ValidatorSetUpdate implements IValidatorSetUpdate {

            /**
             * Constructs a new ValidatorSetUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IValidatorSetUpdate);

            /** ValidatorSetUpdate validatorUpdates. */
            public validatorUpdates: tendermint.abci.IValidatorUpdate[];

            /** ValidatorSetUpdate thresholdPublicKey. */
            public thresholdPublicKey?: (tendermint.crypto.IPublicKey|null);

            /** ValidatorSetUpdate quorumHash. */
            public quorumHash: Uint8Array;

            /**
             * Creates a new ValidatorSetUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValidatorSetUpdate instance
             */
            public static create(properties?: tendermint.abci.IValidatorSetUpdate): tendermint.abci.ValidatorSetUpdate;

            /**
             * Encodes the specified ValidatorSetUpdate message. Does not implicitly {@link tendermint.abci.ValidatorSetUpdate.verify|verify} messages.
             * @param message ValidatorSetUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IValidatorSetUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValidatorSetUpdate message, length delimited. Does not implicitly {@link tendermint.abci.ValidatorSetUpdate.verify|verify} messages.
             * @param message ValidatorSetUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IValidatorSetUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidatorSetUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValidatorSetUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ValidatorSetUpdate;

            /**
             * Decodes a ValidatorSetUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValidatorSetUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ValidatorSetUpdate;

            /**
             * Verifies a ValidatorSetUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValidatorSetUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValidatorSetUpdate
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ValidatorSetUpdate;

            /**
             * Creates a plain object from a ValidatorSetUpdate message. Also converts values to other types if specified.
             * @param message ValidatorSetUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ValidatorSetUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValidatorSetUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ThresholdPublicKeyUpdate. */
        interface IThresholdPublicKeyUpdate {

            /** ThresholdPublicKeyUpdate thresholdPublicKey */
            thresholdPublicKey?: (tendermint.crypto.IPublicKey|null);
        }

        /** Represents a ThresholdPublicKeyUpdate. */
        class ThresholdPublicKeyUpdate implements IThresholdPublicKeyUpdate {

            /**
             * Constructs a new ThresholdPublicKeyUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IThresholdPublicKeyUpdate);

            /** ThresholdPublicKeyUpdate thresholdPublicKey. */
            public thresholdPublicKey?: (tendermint.crypto.IPublicKey|null);

            /**
             * Creates a new ThresholdPublicKeyUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ThresholdPublicKeyUpdate instance
             */
            public static create(properties?: tendermint.abci.IThresholdPublicKeyUpdate): tendermint.abci.ThresholdPublicKeyUpdate;

            /**
             * Encodes the specified ThresholdPublicKeyUpdate message. Does not implicitly {@link tendermint.abci.ThresholdPublicKeyUpdate.verify|verify} messages.
             * @param message ThresholdPublicKeyUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IThresholdPublicKeyUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ThresholdPublicKeyUpdate message, length delimited. Does not implicitly {@link tendermint.abci.ThresholdPublicKeyUpdate.verify|verify} messages.
             * @param message ThresholdPublicKeyUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IThresholdPublicKeyUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ThresholdPublicKeyUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ThresholdPublicKeyUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ThresholdPublicKeyUpdate;

            /**
             * Decodes a ThresholdPublicKeyUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ThresholdPublicKeyUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ThresholdPublicKeyUpdate;

            /**
             * Verifies a ThresholdPublicKeyUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ThresholdPublicKeyUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ThresholdPublicKeyUpdate
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ThresholdPublicKeyUpdate;

            /**
             * Creates a plain object from a ThresholdPublicKeyUpdate message. Also converts values to other types if specified.
             * @param message ThresholdPublicKeyUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ThresholdPublicKeyUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ThresholdPublicKeyUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QuorumHashUpdate. */
        interface IQuorumHashUpdate {

            /** QuorumHashUpdate quorumHash */
            quorumHash?: (Uint8Array|null);
        }

        /** Represents a QuorumHashUpdate. */
        class QuorumHashUpdate implements IQuorumHashUpdate {

            /**
             * Constructs a new QuorumHashUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IQuorumHashUpdate);

            /** QuorumHashUpdate quorumHash. */
            public quorumHash: Uint8Array;

            /**
             * Creates a new QuorumHashUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QuorumHashUpdate instance
             */
            public static create(properties?: tendermint.abci.IQuorumHashUpdate): tendermint.abci.QuorumHashUpdate;

            /**
             * Encodes the specified QuorumHashUpdate message. Does not implicitly {@link tendermint.abci.QuorumHashUpdate.verify|verify} messages.
             * @param message QuorumHashUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IQuorumHashUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QuorumHashUpdate message, length delimited. Does not implicitly {@link tendermint.abci.QuorumHashUpdate.verify|verify} messages.
             * @param message QuorumHashUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IQuorumHashUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QuorumHashUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QuorumHashUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.QuorumHashUpdate;

            /**
             * Decodes a QuorumHashUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QuorumHashUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.QuorumHashUpdate;

            /**
             * Verifies a QuorumHashUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QuorumHashUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QuorumHashUpdate
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.QuorumHashUpdate;

            /**
             * Creates a plain object from a QuorumHashUpdate message. Also converts values to other types if specified.
             * @param message QuorumHashUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.QuorumHashUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QuorumHashUpdate to JSON.
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

        /** Properties of an ExtendedVoteInfo. */
        interface IExtendedVoteInfo {

            /** ExtendedVoteInfo validator */
            validator?: (tendermint.abci.IValidator|null);

            /** ExtendedVoteInfo signedLastBlock */
            signedLastBlock?: (boolean|null);

            /** ExtendedVoteInfo voteExtension */
            voteExtension?: (Uint8Array|null);
        }

        /** Represents an ExtendedVoteInfo. */
        class ExtendedVoteInfo implements IExtendedVoteInfo {

            /**
             * Constructs a new ExtendedVoteInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IExtendedVoteInfo);

            /** ExtendedVoteInfo validator. */
            public validator?: (tendermint.abci.IValidator|null);

            /** ExtendedVoteInfo signedLastBlock. */
            public signedLastBlock: boolean;

            /** ExtendedVoteInfo voteExtension. */
            public voteExtension: Uint8Array;

            /**
             * Creates a new ExtendedVoteInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtendedVoteInfo instance
             */
            public static create(properties?: tendermint.abci.IExtendedVoteInfo): tendermint.abci.ExtendedVoteInfo;

            /**
             * Encodes the specified ExtendedVoteInfo message. Does not implicitly {@link tendermint.abci.ExtendedVoteInfo.verify|verify} messages.
             * @param message ExtendedVoteInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IExtendedVoteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtendedVoteInfo message, length delimited. Does not implicitly {@link tendermint.abci.ExtendedVoteInfo.verify|verify} messages.
             * @param message ExtendedVoteInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IExtendedVoteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtendedVoteInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtendedVoteInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ExtendedVoteInfo;

            /**
             * Decodes an ExtendedVoteInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtendedVoteInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ExtendedVoteInfo;

            /**
             * Verifies an ExtendedVoteInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtendedVoteInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtendedVoteInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ExtendedVoteInfo;

            /**
             * Creates a plain object from an ExtendedVoteInfo message. Also converts values to other types if specified.
             * @param message ExtendedVoteInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ExtendedVoteInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtendedVoteInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** MisbehaviorType enum. */
        enum MisbehaviorType {
            UNKNOWN = 0,
            DUPLICATE_VOTE = 1,
            LIGHT_CLIENT_ATTACK = 2
        }

        /** Properties of a Misbehavior. */
        interface IMisbehavior {

            /** Misbehavior type */
            type?: (tendermint.abci.MisbehaviorType|null);

            /** Misbehavior validator */
            validator?: (tendermint.abci.IValidator|null);

            /** Misbehavior height */
            height?: (number|Long|null);

            /** Misbehavior time */
            time?: (google.protobuf.ITimestamp|null);

            /** Misbehavior totalVotingPower */
            totalVotingPower?: (number|Long|null);
        }

        /** Represents a Misbehavior. */
        class Misbehavior implements IMisbehavior {

            /**
             * Constructs a new Misbehavior.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IMisbehavior);

            /** Misbehavior type. */
            public type: tendermint.abci.MisbehaviorType;

            /** Misbehavior validator. */
            public validator?: (tendermint.abci.IValidator|null);

            /** Misbehavior height. */
            public height: (number|Long);

            /** Misbehavior time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** Misbehavior totalVotingPower. */
            public totalVotingPower: (number|Long);

            /**
             * Creates a new Misbehavior instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Misbehavior instance
             */
            public static create(properties?: tendermint.abci.IMisbehavior): tendermint.abci.Misbehavior;

            /**
             * Encodes the specified Misbehavior message. Does not implicitly {@link tendermint.abci.Misbehavior.verify|verify} messages.
             * @param message Misbehavior message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IMisbehavior, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Misbehavior message, length delimited. Does not implicitly {@link tendermint.abci.Misbehavior.verify|verify} messages.
             * @param message Misbehavior message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IMisbehavior, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Misbehavior message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Misbehavior
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Misbehavior;

            /**
             * Decodes a Misbehavior message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Misbehavior
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Misbehavior;

            /**
             * Verifies a Misbehavior message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Misbehavior message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Misbehavior
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Misbehavior;

            /**
             * Creates a plain object from a Misbehavior message. Also converts values to other types if specified.
             * @param message Misbehavior
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Misbehavior, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Misbehavior to JSON.
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

            /** Snapshot coreChainLockedHeight */
            coreChainLockedHeight?: (number|null);
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

            /** Snapshot coreChainLockedHeight. */
            public coreChainLockedHeight: number;

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

            /**
             * Calls PrepareProposal.
             * @param request RequestPrepareProposal message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponsePrepareProposal
             */
            public prepareProposal(request: tendermint.abci.IRequestPrepareProposal, callback: tendermint.abci.ABCIApplication.PrepareProposalCallback): void;

            /**
             * Calls PrepareProposal.
             * @param request RequestPrepareProposal message or plain object
             * @returns Promise
             */
            public prepareProposal(request: tendermint.abci.IRequestPrepareProposal): Promise<tendermint.abci.ResponsePrepareProposal>;

            /**
             * Calls ProcessProposal.
             * @param request RequestProcessProposal message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseProcessProposal
             */
            public processProposal(request: tendermint.abci.IRequestProcessProposal, callback: tendermint.abci.ABCIApplication.ProcessProposalCallback): void;

            /**
             * Calls ProcessProposal.
             * @param request RequestProcessProposal message or plain object
             * @returns Promise
             */
            public processProposal(request: tendermint.abci.IRequestProcessProposal): Promise<tendermint.abci.ResponseProcessProposal>;

            /**
             * Calls ExtendVote.
             * @param request RequestExtendVote message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseExtendVote
             */
            public extendVote(request: tendermint.abci.IRequestExtendVote, callback: tendermint.abci.ABCIApplication.ExtendVoteCallback): void;

            /**
             * Calls ExtendVote.
             * @param request RequestExtendVote message or plain object
             * @returns Promise
             */
            public extendVote(request: tendermint.abci.IRequestExtendVote): Promise<tendermint.abci.ResponseExtendVote>;

            /**
             * Calls VerifyVoteExtension.
             * @param request RequestVerifyVoteExtension message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseVerifyVoteExtension
             */
            public verifyVoteExtension(request: tendermint.abci.IRequestVerifyVoteExtension, callback: tendermint.abci.ABCIApplication.VerifyVoteExtensionCallback): void;

            /**
             * Calls VerifyVoteExtension.
             * @param request RequestVerifyVoteExtension message or plain object
             * @returns Promise
             */
            public verifyVoteExtension(request: tendermint.abci.IRequestVerifyVoteExtension): Promise<tendermint.abci.ResponseVerifyVoteExtension>;

            /**
             * Calls FinalizeBlock.
             * @param request RequestFinalizeBlock message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseFinalizeBlock
             */
            public finalizeBlock(request: tendermint.abci.IRequestFinalizeBlock, callback: tendermint.abci.ABCIApplication.FinalizeBlockCallback): void;

            /**
             * Calls FinalizeBlock.
             * @param request RequestFinalizeBlock message or plain object
             * @returns Promise
             */
            public finalizeBlock(request: tendermint.abci.IRequestFinalizeBlock): Promise<tendermint.abci.ResponseFinalizeBlock>;
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
             * Callback as used by {@link tendermint.abci.ABCIApplication#initChain}.
             * @param error Error, if any
             * @param [response] ResponseInitChain
             */
            type InitChainCallback = (error: (Error|null), response?: tendermint.abci.ResponseInitChain) => void;

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

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#prepareProposal}.
             * @param error Error, if any
             * @param [response] ResponsePrepareProposal
             */
            type PrepareProposalCallback = (error: (Error|null), response?: tendermint.abci.ResponsePrepareProposal) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#processProposal}.
             * @param error Error, if any
             * @param [response] ResponseProcessProposal
             */
            type ProcessProposalCallback = (error: (Error|null), response?: tendermint.abci.ResponseProcessProposal) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#extendVote}.
             * @param error Error, if any
             * @param [response] ResponseExtendVote
             */
            type ExtendVoteCallback = (error: (Error|null), response?: tendermint.abci.ResponseExtendVote) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#verifyVoteExtension}.
             * @param error Error, if any
             * @param [response] ResponseVerifyVoteExtension
             */
            type VerifyVoteExtensionCallback = (error: (Error|null), response?: tendermint.abci.ResponseVerifyVoteExtension) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#finalizeBlock}.
             * @param error Error, if any
             * @param [response] ResponseFinalizeBlock
             */
            type FinalizeBlockCallback = (error: (Error|null), response?: tendermint.abci.ResponseFinalizeBlock) => void;
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

        /** Properties of a CoreChainLock. */
        interface ICoreChainLock {

            /** CoreChainLock coreBlockHeight */
            coreBlockHeight?: (number|null);

            /** CoreChainLock coreBlockHash */
            coreBlockHash?: (Uint8Array|null);

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

            /** CoreChainLock coreBlockHeight. */
            public coreBlockHeight: number;

            /** CoreChainLock coreBlockHash. */
            public coreBlockHash: Uint8Array;

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

        /** VoteExtensionType enum. */
        enum VoteExtensionType {
            DEFAULT = 0,
            THRESHOLD_RECOVER = 1
        }

        /** Properties of a VoteExtension. */
        interface IVoteExtension {

            /** VoteExtension type */
            type?: (tendermint.types.VoteExtensionType|null);

            /** VoteExtension extension */
            extension?: (Uint8Array|null);

            /** VoteExtension signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a VoteExtension. */
        class VoteExtension implements IVoteExtension {

            /**
             * Constructs a new VoteExtension.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IVoteExtension);

            /** VoteExtension type. */
            public type: tendermint.types.VoteExtensionType;

            /** VoteExtension extension. */
            public extension: Uint8Array;

            /** VoteExtension signature. */
            public signature: Uint8Array;

            /**
             * Creates a new VoteExtension instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VoteExtension instance
             */
            public static create(properties?: tendermint.types.IVoteExtension): tendermint.types.VoteExtension;

            /**
             * Encodes the specified VoteExtension message. Does not implicitly {@link tendermint.types.VoteExtension.verify|verify} messages.
             * @param message VoteExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IVoteExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VoteExtension message, length delimited. Does not implicitly {@link tendermint.types.VoteExtension.verify|verify} messages.
             * @param message VoteExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IVoteExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VoteExtension message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VoteExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.VoteExtension;

            /**
             * Decodes a VoteExtension message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VoteExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.VoteExtension;

            /**
             * Verifies a VoteExtension message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VoteExtension message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VoteExtension
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.VoteExtension;

            /**
             * Creates a plain object from a VoteExtension message. Also converts values to other types if specified.
             * @param message VoteExtension
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.VoteExtension, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VoteExtension to JSON.
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

            /** ConsensusParams synchrony */
            synchrony?: (tendermint.types.ISynchronyParams|null);

            /** ConsensusParams timeout */
            timeout?: (tendermint.types.ITimeoutParams|null);

            /** ConsensusParams abci */
            abci?: (tendermint.types.IABCIParams|null);
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

            /** ConsensusParams synchrony. */
            public synchrony?: (tendermint.types.ISynchronyParams|null);

            /** ConsensusParams timeout. */
            public timeout?: (tendermint.types.ITimeoutParams|null);

            /** ConsensusParams abci. */
            public abci?: (tendermint.types.IABCIParams|null);

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

        /** Properties of a SynchronyParams. */
        interface ISynchronyParams {

            /** SynchronyParams messageDelay */
            messageDelay?: (google.protobuf.IDuration|null);

            /** SynchronyParams precision */
            precision?: (google.protobuf.IDuration|null);
        }

        /** Represents a SynchronyParams. */
        class SynchronyParams implements ISynchronyParams {

            /**
             * Constructs a new SynchronyParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ISynchronyParams);

            /** SynchronyParams messageDelay. */
            public messageDelay?: (google.protobuf.IDuration|null);

            /** SynchronyParams precision. */
            public precision?: (google.protobuf.IDuration|null);

            /**
             * Creates a new SynchronyParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SynchronyParams instance
             */
            public static create(properties?: tendermint.types.ISynchronyParams): tendermint.types.SynchronyParams;

            /**
             * Encodes the specified SynchronyParams message. Does not implicitly {@link tendermint.types.SynchronyParams.verify|verify} messages.
             * @param message SynchronyParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ISynchronyParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SynchronyParams message, length delimited. Does not implicitly {@link tendermint.types.SynchronyParams.verify|verify} messages.
             * @param message SynchronyParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ISynchronyParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SynchronyParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SynchronyParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.SynchronyParams;

            /**
             * Decodes a SynchronyParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SynchronyParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.SynchronyParams;

            /**
             * Verifies a SynchronyParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SynchronyParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SynchronyParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.SynchronyParams;

            /**
             * Creates a plain object from a SynchronyParams message. Also converts values to other types if specified.
             * @param message SynchronyParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.SynchronyParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SynchronyParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TimeoutParams. */
        interface ITimeoutParams {

            /** TimeoutParams propose */
            propose?: (google.protobuf.IDuration|null);

            /** TimeoutParams proposeDelta */
            proposeDelta?: (google.protobuf.IDuration|null);

            /** TimeoutParams vote */
            vote?: (google.protobuf.IDuration|null);

            /** TimeoutParams voteDelta */
            voteDelta?: (google.protobuf.IDuration|null);

            /** TimeoutParams commit */
            commit?: (google.protobuf.IDuration|null);

            /** TimeoutParams bypassCommitTimeout */
            bypassCommitTimeout?: (boolean|null);
        }

        /** Represents a TimeoutParams. */
        class TimeoutParams implements ITimeoutParams {

            /**
             * Constructs a new TimeoutParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ITimeoutParams);

            /** TimeoutParams propose. */
            public propose?: (google.protobuf.IDuration|null);

            /** TimeoutParams proposeDelta. */
            public proposeDelta?: (google.protobuf.IDuration|null);

            /** TimeoutParams vote. */
            public vote?: (google.protobuf.IDuration|null);

            /** TimeoutParams voteDelta. */
            public voteDelta?: (google.protobuf.IDuration|null);

            /** TimeoutParams commit. */
            public commit?: (google.protobuf.IDuration|null);

            /** TimeoutParams bypassCommitTimeout. */
            public bypassCommitTimeout: boolean;

            /**
             * Creates a new TimeoutParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeoutParams instance
             */
            public static create(properties?: tendermint.types.ITimeoutParams): tendermint.types.TimeoutParams;

            /**
             * Encodes the specified TimeoutParams message. Does not implicitly {@link tendermint.types.TimeoutParams.verify|verify} messages.
             * @param message TimeoutParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ITimeoutParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeoutParams message, length delimited. Does not implicitly {@link tendermint.types.TimeoutParams.verify|verify} messages.
             * @param message TimeoutParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ITimeoutParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeoutParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeoutParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.TimeoutParams;

            /**
             * Decodes a TimeoutParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeoutParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.TimeoutParams;

            /**
             * Verifies a TimeoutParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeoutParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeoutParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.TimeoutParams;

            /**
             * Creates a plain object from a TimeoutParams message. Also converts values to other types if specified.
             * @param message TimeoutParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.TimeoutParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeoutParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ABCIParams. */
        interface IABCIParams {

            /** ABCIParams recheckTx */
            recheckTx?: (boolean|null);
        }

        /** Represents a ABCIParams. */
        class ABCIParams implements IABCIParams {

            /**
             * Constructs a new ABCIParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IABCIParams);

            /** ABCIParams recheckTx. */
            public recheckTx: boolean;

            /**
             * Creates a new ABCIParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ABCIParams instance
             */
            public static create(properties?: tendermint.types.IABCIParams): tendermint.types.ABCIParams;

            /**
             * Encodes the specified ABCIParams message. Does not implicitly {@link tendermint.types.ABCIParams.verify|verify} messages.
             * @param message ABCIParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IABCIParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ABCIParams message, length delimited. Does not implicitly {@link tendermint.types.ABCIParams.verify|verify} messages.
             * @param message ABCIParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IABCIParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ABCIParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ABCIParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.ABCIParams;

            /**
             * Decodes a ABCIParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ABCIParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.ABCIParams;

            /**
             * Verifies a ABCIParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ABCIParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ABCIParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.ABCIParams;

            /**
             * Creates a plain object from a ABCIParams message. Also converts values to other types if specified.
             * @param message ABCIParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.ABCIParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ABCIParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace version. */
    namespace version {

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

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .gogoproto.goprotoGettersAll */
            ".gogoproto.goprotoGettersAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoEnumPrefixAll */
            ".gogoproto.goprotoEnumPrefixAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoStringerAll */
            ".gogoproto.goprotoStringerAll"?: (boolean|null);

            /** FileOptions .gogoproto.verboseEqualAll */
            ".gogoproto.verboseEqualAll"?: (boolean|null);

            /** FileOptions .gogoproto.faceAll */
            ".gogoproto.faceAll"?: (boolean|null);

            /** FileOptions .gogoproto.gostringAll */
            ".gogoproto.gostringAll"?: (boolean|null);

            /** FileOptions .gogoproto.populateAll */
            ".gogoproto.populateAll"?: (boolean|null);

            /** FileOptions .gogoproto.stringerAll */
            ".gogoproto.stringerAll"?: (boolean|null);

            /** FileOptions .gogoproto.onlyoneAll */
            ".gogoproto.onlyoneAll"?: (boolean|null);

            /** FileOptions .gogoproto.equalAll */
            ".gogoproto.equalAll"?: (boolean|null);

            /** FileOptions .gogoproto.descriptionAll */
            ".gogoproto.descriptionAll"?: (boolean|null);

            /** FileOptions .gogoproto.testgenAll */
            ".gogoproto.testgenAll"?: (boolean|null);

            /** FileOptions .gogoproto.benchgenAll */
            ".gogoproto.benchgenAll"?: (boolean|null);

            /** FileOptions .gogoproto.marshalerAll */
            ".gogoproto.marshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.unmarshalerAll */
            ".gogoproto.unmarshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.stableMarshalerAll */
            ".gogoproto.stableMarshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.sizerAll */
            ".gogoproto.sizerAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoEnumStringerAll */
            ".gogoproto.goprotoEnumStringerAll"?: (boolean|null);

            /** FileOptions .gogoproto.enumStringerAll */
            ".gogoproto.enumStringerAll"?: (boolean|null);

            /** FileOptions .gogoproto.unsafeMarshalerAll */
            ".gogoproto.unsafeMarshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.unsafeUnmarshalerAll */
            ".gogoproto.unsafeUnmarshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoExtensionsMapAll */
            ".gogoproto.goprotoExtensionsMapAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoUnrecognizedAll */
            ".gogoproto.goprotoUnrecognizedAll"?: (boolean|null);

            /** FileOptions .gogoproto.gogoprotoImport */
            ".gogoproto.gogoprotoImport"?: (boolean|null);

            /** FileOptions .gogoproto.protosizerAll */
            ".gogoproto.protosizerAll"?: (boolean|null);

            /** FileOptions .gogoproto.compareAll */
            ".gogoproto.compareAll"?: (boolean|null);

            /** FileOptions .gogoproto.typedeclAll */
            ".gogoproto.typedeclAll"?: (boolean|null);

            /** FileOptions .gogoproto.enumdeclAll */
            ".gogoproto.enumdeclAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoRegistration */
            ".gogoproto.goprotoRegistration"?: (boolean|null);

            /** FileOptions .gogoproto.messagenameAll */
            ".gogoproto.messagenameAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoSizecacheAll */
            ".gogoproto.goprotoSizecacheAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoUnkeyedAll */
            ".gogoproto.goprotoUnkeyedAll"?: (boolean|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .gogoproto.goprotoGetters */
            ".gogoproto.goprotoGetters"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoStringer */
            ".gogoproto.goprotoStringer"?: (boolean|null);

            /** MessageOptions .gogoproto.verboseEqual */
            ".gogoproto.verboseEqual"?: (boolean|null);

            /** MessageOptions .gogoproto.face */
            ".gogoproto.face"?: (boolean|null);

            /** MessageOptions .gogoproto.gostring */
            ".gogoproto.gostring"?: (boolean|null);

            /** MessageOptions .gogoproto.populate */
            ".gogoproto.populate"?: (boolean|null);

            /** MessageOptions .gogoproto.stringer */
            ".gogoproto.stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.onlyone */
            ".gogoproto.onlyone"?: (boolean|null);

            /** MessageOptions .gogoproto.equal */
            ".gogoproto.equal"?: (boolean|null);

            /** MessageOptions .gogoproto.description */
            ".gogoproto.description"?: (boolean|null);

            /** MessageOptions .gogoproto.testgen */
            ".gogoproto.testgen"?: (boolean|null);

            /** MessageOptions .gogoproto.benchgen */
            ".gogoproto.benchgen"?: (boolean|null);

            /** MessageOptions .gogoproto.marshaler */
            ".gogoproto.marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unmarshaler */
            ".gogoproto.unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.stableMarshaler */
            ".gogoproto.stableMarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.sizer */
            ".gogoproto.sizer"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafeMarshaler */
            ".gogoproto.unsafeMarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafeUnmarshaler */
            ".gogoproto.unsafeUnmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoExtensionsMap */
            ".gogoproto.goprotoExtensionsMap"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoUnrecognized */
            ".gogoproto.goprotoUnrecognized"?: (boolean|null);

            /** MessageOptions .gogoproto.protosizer */
            ".gogoproto.protosizer"?: (boolean|null);

            /** MessageOptions .gogoproto.compare */
            ".gogoproto.compare"?: (boolean|null);

            /** MessageOptions .gogoproto.typedecl */
            ".gogoproto.typedecl"?: (boolean|null);

            /** MessageOptions .gogoproto.messagename */
            ".gogoproto.messagename"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoSizecache */
            ".gogoproto.goprotoSizecache"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoUnkeyed */
            ".gogoproto.goprotoUnkeyed"?: (boolean|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .gogoproto.nullable */
            ".gogoproto.nullable"?: (boolean|null);

            /** FieldOptions .gogoproto.embed */
            ".gogoproto.embed"?: (boolean|null);

            /** FieldOptions .gogoproto.customtype */
            ".gogoproto.customtype"?: (string|null);

            /** FieldOptions .gogoproto.customname */
            ".gogoproto.customname"?: (string|null);

            /** FieldOptions .gogoproto.jsontag */
            ".gogoproto.jsontag"?: (string|null);

            /** FieldOptions .gogoproto.moretags */
            ".gogoproto.moretags"?: (string|null);

            /** FieldOptions .gogoproto.casttype */
            ".gogoproto.casttype"?: (string|null);

            /** FieldOptions .gogoproto.castkey */
            ".gogoproto.castkey"?: (string|null);

            /** FieldOptions .gogoproto.castvalue */
            ".gogoproto.castvalue"?: (string|null);

            /** FieldOptions .gogoproto.stdtime */
            ".gogoproto.stdtime"?: (boolean|null);

            /** FieldOptions .gogoproto.stdduration */
            ".gogoproto.stdduration"?: (boolean|null);

            /** FieldOptions .gogoproto.wktpointer */
            ".gogoproto.wktpointer"?: (boolean|null);

            /** FieldOptions .gogoproto.castrepeated */
            ".gogoproto.castrepeated"?: (string|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumOptions .gogoproto.goprotoEnumPrefix */
            ".gogoproto.goprotoEnumPrefix"?: (boolean|null);

            /** EnumOptions .gogoproto.goprotoEnumStringer */
            ".gogoproto.goprotoEnumStringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enumStringer */
            ".gogoproto.enumStringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enumCustomname */
            ".gogoproto.enumCustomname"?: (string|null);

            /** EnumOptions .gogoproto.enumdecl */
            ".gogoproto.enumdecl"?: (boolean|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .gogoproto.enumvalueCustomname */
            ".gogoproto.enumvalueCustomname"?: (string|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
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
    }
}
