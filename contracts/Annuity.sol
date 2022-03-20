// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "hardhat/console.sol";

// PV_0 = present value at time 0. Aka the principal.
// FV = future value of annuity payments.
// PMT = value of the periodic payment
// n = total number of compounding periods
// r = annual interest rate / n

struct BuyDetails {
    uint256 principal; // PV_0
    uint256 remainingValue;
    uint256 periods; // n
    uint256 periodDuration; // t
    uint256 lastWithdrawn;
    uint256 deposit; // PMT
    address payable annuitant;
}

struct InsuranceDetails {
    uint256 collateral; // same as FV
    uint256 amtBorrowed; // same as PV_0
    uint256 amtPaidBack;
    uint256 periods;
    uint256 periodDuration;
    uint256 lastPaid;
    address payable insurer;
}

contract Annuity {
    constructor() payable {
        console.log("constructor()");
        require(msg.value > 0, "Must initilize contract with assets!");
        deployer = msg.sender;
        assets = msg.value;
    }

    // Initilized in constructor
    address public deployer;
    uint256 public assets;
    uint256 public constant RATE = 5; // Fixed interest rate r

    // Others
    mapping(address => BuyDetails) public buyDetails; // maps annuitant to details of their specific annuity contract
    mapping(address => InsuranceDetails) public insuranceDetails; // maps insurer to the terms of their loan
    address[] public insurerAddresses;

    /*
     * A function for annuitants to create and purchase an
     * annuity contract.
     *
     * Parameters: principal, # periods, period duration
     * Returns: success or failure
     *
     **/
    // TODO
    function buy(
        uint256 PV_0,
        uint256 n,
        uint256 t
    ) external payable returns (bool success) {
        console.log("buy()");
        // require: PV_0 > 0
        // require: msg.value == PV_0
        /*
         * calculate periodic payments annuitant will receive,
         * using the principal value
         **/
        uint256 PMT = calculatePMT_PV_0(PV_0, n);
        // transfer: first payment to annuiant
        /* 
         * store {
             principal: PV_0,
             remainingValue: PMT-PV_0,
             periods: n,
             periodDuration: t,
             lastWithdrawn: block.timestamp,
             deposit: PMT,
             annuitant: msg.sender
         * } in buyDetails[msg.sender]; 
         **/
        // return: true if success
    }

    /*
     * A function to calculate the periodic payment that
     * annuitant's receive, given their principal.
     *
     * Parameters: principal, # periods
     * Returns: value of periodic payments
     *
     **/
    // TODO
    function calculatePMT_PV_0(uint256 PV_0, uint256 n)
        public
        returns (uint256 PMT)
    {
        console.log("calculatePMT_PV_0()");
        // compute deposit: PMT = PV_0 * (r / (1 - (1 + r)^(-n)) ) * (1+r)
        // return: deposit
    }

    /*
     * A function for the annuitant to withdraw their periodic
     * payments
     *
     * This could be made automatic in the future by using
     * oracles (like chainlink keepers) or cron jobs.
     *
     * Parameters:
     * Returns: success or failure
     *
     **/
    // TODO
    function withdraw() external returns (bool success) {
        console.log("withdraw()");
        // require: buyDetails[msg.sender] isn't empty
        // require: (now-lastWithdrawn) > periodDuration
        // require: remainingValue > 0
        // calculate payment (deposit + any missed deposits)
        // transfer: payment to msg.sender
        // update lastWithdrawn (=block.timestamp)
        // update remainingValue (-= payment)
        /*
         * liquidate insurance positions if necessary to ensure
         * that the annuitant can withdraw up to FV.
         **/
        checkForLiquidation();
        // return: true if success
    }

    /*
     * This function loops through the insurers and liquidates
     * their position if they've missed a loan payment
     *
     * There's more efficient ways to do this, like how Aave
     * does it.
     *
     * Parameters:
     * Returns:
     *
     **/
    //  TODO
    function checkForLiquidation() public {
        console.log("checkForLiquidation()");
        // Begin loop (through insurerAddreses):
        //  if (lastPaid < periodDuration):
        //      remove insurer from insuranceDetails mapping
        //      remove insurer from insurerAddresses array
        //      increase assets value by adding the collateral
        // End loop
    }

    /*
     * This function lets an insurer deposit any amount as
     * collateral and returns the loan that they must pay off
     * (with interest) after a certain period of time (n*t).
     *
     * Parameters: collateral, #periods, periodDuration
     * Returns: principal / amount they're borrowing
     **/
    //  TODO
    function insure(
        uint256 FV,
        uint256 n,
        uint256 t
    ) external payable returns (uint256 PV_0) {
        console.log("insure()");
        // require: msg.value > 0
        // require: msg.value == FV
        /*
         * calculate PMT using FV
         **/
        uint256 PMT = calculatePMT_FV(FV, n);
        /*
         * calculate PV_0
         **/
        PV_0 = calculatePV_0(PMT, n);
        /* 
         * store {
             collateral: FV,
             amtBorrowed: PV_0,
             amtPaidBack: PMT,
             periods: n,
             periodDuration: t,
             lastPaid: block.timestamp,
             insurer: msg.sender,
         * } in insuranceDetails[msg.sender];
         **/
        // Include msg.sender in insurerAddresses
        // Transfer: alloted loan (PV_0) to insurer
        // return PV_0
    }

    /*
     * A function to calculate the periodic payment that
     * annuitant's receive, given a future value.
     *
     * Parameters: future value, # periods
     * Returns: value of periodic payments
     *
     **/
    // TODO
    function calculatePMT_FV(uint256 FV, uint256 n)
        public
        returns (uint256 PMT)
    {
        console.log("calculatePMT_FV()");
        // compute deposit: PMT = ((FV * r) / ((1+r)^(n) - 1)) * ( 1 / (1+r) )
        // return: deposit
    }

    /*
     * This function calculates the present value at time 0, aka
     * the principal, of a loan.
     *
     * Parameters: periodic payment value, # periods
     * Returns: value of the principal (used as the loan amt for * the insurer)
     *
     **/
    //  TODO
    function calculatePV_0(uint256 PMT, uint256 n)
        public
        returns (uint256 PV_0)
    {
        console.log("calculatePV_0()");
        // compute the principal
        // principal: PV_0 = PMT * ( (1 - (1+r)^(-n)) / r ) * (1+r)
        // return: principal
    }

    /*
     * This function calculates the future value that the
     * annuity payments add up to. Currently unused fn.
     *
     * Parameters: periodic payment value, # periods
     * Returns: future value of the periodic payments
     *
     **/
    //  TODO
    function calculateFV(uint256 PMT, uint256 n) public returns (uint256 FV) {
        console.log("calculateFV()");
        // compute future value of annuity payments
        // future value: FV = PMT * ( ((1+r)^(n) - 1) / r ) * (1+r)
        // return future value
    }
}
