import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Token } from "../src/types/Token";

describe("Token contract", function () {
    let TokenFactory;
    let HardhatToken: Token;
    let owner: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addr3: SignerWithAddress;

    // Redeploy the contract and reset HardhatToken & wallet address variables before each test
    beforeEach(async function () {
        TokenFactory = await ethers.getContractFactory("Token");
        HardhatToken = (await TokenFactory.deploy()) as Token;
        [owner, addr1, addr2, addr3] = await ethers.getSigners();
    });

    describe("Deployment", function () {

        it("Should set the right owner", async function () {
            expect(await HardhatToken.owner()).to.equal(owner.address);
        });

        it("Should assign the total supply of the tokens to the owner's balance", async function () {
            const ownerBalance = await HardhatToken.balanceOf(owner.address);
            expect(await HardhatToken.totalSupply()).to.equal(ownerBalance);
        });
    });

    describe("Transactions", function () {
        it("Should transfer tokens between accounts", async function () {
            const amount = 50;

            await HardhatToken.transfer(addr1.address, amount);
            expect(await HardhatToken.balanceOf(addr1.address)).to.equal(amount);

            await HardhatToken.connect(addr1).transfer(addr2.address, amount);
            expect(await HardhatToken.balanceOf(addr2.address)).to.equal(amount);
        });

        it("Should fail if the sender doesn't have enough tokens"/*, async function () {
            const amount = "200";
            const initialOwnerBalance = await HardhatToken.balanceOf(owner.address);

            await expect(await HardhatToken.connect(addr2).transfer(owner.address, amount)).to.be.revertedWith("low");

            expect(await HardhatToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
        }*/);

        it("Should update balances after transfers", async function () {
            const amount = "1234";
            const initialOwnerBalance = await HardhatToken.balanceOf(owner.address);

            // Transfer amount from owner --> addr1
            await HardhatToken.transfer(addr1.address, amount);
            expect(await HardhatToken.balanceOf(addr1.address)).to.equal(amount);
            expect(await HardhatToken.balanceOf(owner.address)).to.equal(initialOwnerBalance.sub(amount));

            // Transfer amount from addr1 --> addr2
            await HardhatToken.connect(addr1).transfer(addr2.address, amount);
            expect(await HardhatToken.balanceOf(addr2.address)).to.equal(amount);
            expect(await HardhatToken.balanceOf(addr1.address)).to.equal(0);

            // Transfer amount from addr2 --> addr3
            await HardhatToken.connect(addr2).transfer(addr3.address, amount);
            expect(await HardhatToken.balanceOf(addr3.address)).to.equal(amount);
            expect(await HardhatToken.balanceOf(addr2.address)).to.equal(0);

            // Transfer amount from addr3 --> owner
            await HardhatToken.connect(addr3).transfer(owner.address, amount);
            expect(await HardhatToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
            expect(await HardhatToken.balanceOf(addr3.address)).to.equal(0);

        });
    });


});