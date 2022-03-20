import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Annuity } from "../src/types/Annuity";

describe("Annuity contract", function () {
    let AnnuityFactory;
    let Annuity: Annuity;
    let deployer: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addr3: SignerWithAddress;

    // Redeploy the contract and reset Annuity & wallet address variables before each test
    beforeEach(async function () {
        AnnuityFactory = await ethers.getContractFactory("Annuity");
        Annuity = (await AnnuityFactory.deploy({ value: 10 })) as Annuity;
        [deployer, addr1, addr2, addr3] = await ethers.getSigners();
    });

    describe("Deployment", function () {

        it("Should set the right deployer", async function () {
            expect(await Annuity.deployer()).to.equal(deployer.address);
        });

        it("Should initilize with capital", async function () {
            expect(await Annuity.assets()).to.equal(10);
        });

        it("Should set the right interest rate", async function () {
            expect(await Annuity.RATE()).to.equal(5);
        });

    });

    describe("Purchasing annuity", function () {
        let annuitant;
        const periods = 60; // 60 monthly payments
        const periodDuration = 60 * 60 * 24 * 30; // 1 month in seconds
        const principal = 5; // 5 wei

        this.beforeAll(async function () {
            annuitant = addr1.address;
            // check for the console.logs() in the contract
            await Annuity.connect(addr1).buy(principal, periods, periodDuration, { value: principal });
        });

        it("should require the principal to be greater than 0");

        it("should let a anntuiant purchase an annutee");

        it("should call the function that calculates the periodic payment");

        it("Should correctly store the annuitant's purchase details");/*, async function () {
            const BuyDetails = await Annuity.buyDetails(annuitant);
            // expect(BuyDetails.buyer).to.equal(buyer);
            // expect(BuyDetails.periods).to.equal(periods);
            // expect(BuyDetails.principal).to.equal(principal);
        });*/

        it("should transfer the principal value from the annuitant to the smart contract");
    });

    describe("Withdraw annuity payment", function () {
        let annuitant;
        const periods = 60; // 60 monthly payments
        const periodDuration = 60 * 60 * 24 * 30; // 1 month in seconds
        const principal = 5; // 5 wei 

        this.beforeAll(async function () {
            annuitant = addr1.address;
            // check for the console.logs() in the contract
            await Annuity.connect(addr1).withdraw();
        });

        it("should require the caller to be an annuitant");
        it("should require the annuitant to wait for least the duration of payment periods before consecutively withdrawing");
        it("should require the annuitant to have money remaining in their investment");
        it("should allow the annuitant to withdraw");
        it("should transfer the periodic payment amount to the annuitant");
        it("should update the annuitant's buyDetails");
        it("should call the checkForLiquidation function");
    });

    describe("Insure annuity", function () {
        let insurer;
        const periods = 60; // 60 monthly payments
        const periodDuration = 60 * 60 * 24 * 30; // 1 month in seconds
        const collateral = 10; // 10 wei aka. future value

        this.beforeAll(async function () {
            insurer = addr2.address;
            // check for the console.logs() in the contract
            await Annuity.connect(addr2).insure(collateral, periods, periodDuration, { value: collateral });
        });

        it("should require the collateral be > 0 and msg.value == collateral");
        it("should call the calculatePMT_FV function");
        it("should call the calculatePV_0 function");
        it("should correctly store the terms of the insurance/loan agreement");
        it("should store the insurer's address in a seperate array");
        it("should allow the insurer to insure an annuity and transfer the calculated principal value to them.");
    });

    describe("Liquidate insurance position", function () {
        let annuitant;
        let insurer;
        const periods = 60; // 60 monthly payments
        const periodDuration = 5; // 5 seconds
        const collateral = 10; // 10 wei aka. future value
        const delay = async (ms: number) => new Promise(res => setTimeout(res, ms));

        this.beforeAll(async function () {
            annuitant = addr1.address;
            insurer = addr2.address;
            // check for the console.logs() in the contract
            await Annuity.connect(addr2).insure(collateral, periods, periodDuration, { value: collateral });
            // wait 5 seconds so that the insurer misses their next payment
            await delay(periodDuration * 1000);
        });

        it("should liquidate the insurer if they missed their last payment and the annuitant tries to withdraw");
    });

});