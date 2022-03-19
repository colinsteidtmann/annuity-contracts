// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

// import "hardhat/console.sol";

contract Token {
    // Constructors
    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    // Public
    // public b/c that gives us default getters & setters
    string public name = "My hardhat Token";
    string public symbol = "MHT";
    uint256 public totalSupply = 100000;
    address public owner;
    mapping(address => uint256) public balances;

    /**
     * A function to transfer tokens
     *
     * external modifier b/c we want the function to be
     * callable only from outside the contract
     */
    function transfer(address to, uint256 amount) external {
        // console.log("Sender balance: %s", balances[msg.sender]);
        // console.log("Trying to send %s to %s", amount, to);

        require(balances[msg.sender] >= amount, "low");

        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    /**
     * A function to retrieve the balance of a given account
     *
     * view & external b/c this function shouldn't modify the
     * contract
     */
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
