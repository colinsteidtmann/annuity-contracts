import { ethers } from "hardhat";

const ANNUITY = "Annuity";
const TOKEN = "Token";

async function deployContract(name: string) {
    console.log("\nDeploying contract: " + name + " -----");
    const ContractFactory = await ethers.getContractFactory(name);

    let ContractInstance;
    if (name == ANNUITY) {
        ContractInstance = await ContractFactory.deploy({ value: 10 }); // deploy contract with 10 wei
    } else {
        ContractInstance = await ContractFactory.deploy();
    }

    const contractAddress = ContractInstance.address;

    console.log("Deployed %s contract at address: %s", name, contractAddress);
    return;
}

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("\nDeploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    await deployContract(TOKEN);
    await deployContract(ANNUITY);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });