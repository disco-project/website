---
layout: page
sectionid: software
title: Software
---

### **VeriSmart**
VeriSmart is a toolbox for forking smart contracts. Forked contracts can be migrated from EVM-compatible blockchains to other EVM-compatible blockchains. All operations are conducted in bytecode, so that the high level language code is not required. Migrations are verifiable by comparing the source and target contracts' runtime codes and state roots. Hereby, no trust in the migrating entity is required.

[Github Repo](https://github.com/informartin/VeriSmart)

### **zkRelay**
zkRelay facilitates a chain-relay from Bitcoin to Ethereum through zkSNARKS.

The implementation is based on [ZoKrates](https://github.com/Zokrates/ZoKrates) and performs off-chain Bitcoin header chain validations, while only the resulting proof is submitted to the target ledger. The main branch of this repository includes an implementation that performs batch validations for 504 Bitcoin blocks.

The workflow of zkRelay is seperated into two steps, a one-time compilation and setup step and many-time validation.

As a prerequisite, [ZoKrates](https://github.com/Zokrates/ZoKrates) needs to be installed for both steps.

[Github Repo](https://github.com/informartin/zkRelay)