/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Token, TokenInterface } from "../Token";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280601081526020017f4d79206861726468617420546f6b656e000000000000000000000000000000008152506000908051906020019061004f92919061013c565b506040518060400160405280600381526020017f4d485400000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b92919061013c565b50620186a06002553480156100af57600080fd5b50600254600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101d9565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017d57805160ff19168380011785556101ab565b828001600101855582156101ab579182015b828111156101aa57825182559160200191906001019061018f565b5b5090506101b891906101bc565b5090565b5b808211156101d55760008160009055506001016101bd565b5090565b61062a806101e86000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806370a082311161005b57806370a082311461017b5780638da5cb5b146101d357806395d89b4114610207578063a9059cbb1461028a5761007d565b806306fdde031461008257806318160ddd1461010557806327e235e314610123575b600080fd5b61008a6102d8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100ca5780820151818401526020810190506100af565b50505050905090810190601f1680156100f75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61010d610376565b6040518082815260200191505060405180910390f35b6101656004803603602081101561013957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061037c565b6040518082815260200191505060405180910390f35b6101bd6004803603602081101561019157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610394565b6040518082815260200191505060405180910390f35b6101db6103dd565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61020f610403565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561024f578082015181840152602081019050610234565b50505050905090810190601f16801561027c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102d6600480360360408110156102a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104a1565b005b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561036e5780601f106103435761010080835404028352916020019161036e565b820191906000526020600020905b81548152906001019060200180831161035157829003601f168201915b505050505081565b60025481565b60046020528060005260406000206000915090505481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104995780601f1061046e57610100808354040283529160200191610499565b820191906000526020600020905b81548152906001019060200180831161047c57829003601f168201915b505050505081565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610556576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260038152602001807f6c6f77000000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550505056fea264697066735822122056c7ac60be236ad342e2b5f59f65d9d178e576026439a23bd851473ce2f5fdf364736f6c63430007030033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Token";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(overrides || {}) as Promise<Token>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Token {
    return super.attach(address) as Token;
  }
  connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }
  static readonly contractName: "Token";
  public readonly contractName: "Token";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}
