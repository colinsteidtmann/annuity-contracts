## About
The ``Annuity.sol`` smart contract define a fixed, immediate, annuity-due, annuity certain contract. This is one of many possible annuity flavors. 

It's currently implemented with nearly complete pseudocode and pending test functions (found ``Annuity.ts``

## Setup
**Clone the repo:** 
```shell
git clone https://github.com/colinsteidtmann/annuity-contracts
```
**Install packages:**
```shell
yarn add
```
**Compile smart contracts:**
```shell
npx hardhat compile
```
**Deploy smart contracts and generate types:**
```shell
npx hardhat run scripts/deploy.ts
```
**Test the smart contracts:**
```shell
npx hardhat test
```

Bonus:
**Write your own .env based on .env.example**
**Deploy to a different blockchain:**
```shell
npx hardhat deploy --network (rinkeby|alfajores)
```
**See a list of all available hardhat commands:**
```shell
npx hardhat
```


## Folder structure
.
| ---  ...
| --- contracts
| --- --- Annuity.sol (main contract) 
| --- --- Token.sol
| --- scripts
| --- --- deploy.ts
| --- src (holds typechain types)
| --- test
| --- --- Annuity.ts (main test file)
| --- --- Token.ts
| --- .env.example
| --- ...

## TODO

 - [ ] Write the complete tests
 - [ ] Convert the pseudocode into fleshed out solidity code
 - [ ] Create cron jobs or use an oracle to "poke" the contract and trigger automatic function like withdrawing annuity payments
 - [ ] Create formulas for better calculating the interest rate that an annuitant receives and that the insurer must pay. 
 - [ ] Liquidate necessary insurer's positions more efficiently w/out looping through an array every time an annuitant withdraws. 
 - [ ] Add more checks before running functions
 - [ ] Use surplus assets to let some insurers undercollateralize their loans
 - [ ] Use surplus assets to let annuitants exit the annuity contract pre-maturely without paying hefty fees. 

