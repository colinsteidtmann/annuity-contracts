import * as dotenv from "dotenv";
import "@nomiclabs/hardhat-waffle"; // hardhat-waffle plugin depends on hardhat-ethers
import "@typechain/hardhat";
import { HardhatUserConfig } from "hardhat/types";
dotenv.config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
    solidity: "0.7.3",
    networks: {
        hardhat: {},
        rinkeby: {
            url: process.env.RINKEBY_URL || "",
            accounts:
                process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        },
        alfajores: {
            url: "https://alfajores-forno.celo-testnet.org",
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
            chainId: 44787
        }
    },
    typechain: {
        outDir: 'src/types',
        target: 'ethers-v5',
        alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
        externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
    },
};

export default config;
