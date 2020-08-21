---
layout: page
sectionid: publications
title: Publications
---

### **zkRelay - Facilitating Sidechains using zkSNARK-based Chain-Relays**

###### _Westerkamp, M. and Eberhardt, J. in 2020 IEEE European Symposium on Security and Privacy Workshops (EuroS & PW)_

**Abstract**: We facilitate trusted cross-blockchain state proofsby implementing a chain-relay that validates block headersfrom proof-of-work blockchains. While current approachesrequire proof sizes linear to the amount of blocks the statewas built on, trusted intermediaries, or economic assump-tions, we propose the utilization of off-chain computationsthrough zkSNARKs to provide a cryptographically secureand highly scalable sidechain mechanism. Multiple blockheaders are included in batches and verified off-chain, whilepreserving light client support. Only the validity of the off-chain computation is verified on-chain, creating a sidechainmechanism that requires constant verification costs andreleases the target ledger from processing and storing everysingle block header of the source blockchain. We provide aprototypical implementation that facilitates the verification of 504 Bitcoin headers in a single proof on Ethereum usingthe ZoKrates framework. Hereby, the verification costs arereduced by a factor of 187 compared to current approachessuch as BTC Relay.

[Paper](https://eprint.iacr.org/2020/433.pdf)

### **Verifiable Smart Contract Portability**

###### _Westerkamp, M. in 2019 IEEE International Conference on Blockchain and Cryptocurrency_

**Abstract**: With the advent of blockchain technologies, theidea of decentralized applications has gained traction. Smartcontracts permit the implementation of application logic to fosterdistributed systems that are capable of removing intermediaries.Hereby, lock in effects originating from isolated data storage andcentral authorities are mitigated. Yet, smart contracts deployedto a ledger generate dependencies on the underlying blockchain.Over time, requirements regarding contract execution may de-tach from the utilized chain due to contradicting incentives andsecurity or performance issues. To avoid a novel form of lockin effect towards a host blockchain, we introduce a conceptfor smart contract portability that permits any user to migratecontract logic and state between blockchains in a flexible andverifiable manner. As the Ethereum Virtual Machine (EVM) issupported by a multitude of blockchain implementations, it posesa common execution environment for smart contracts. We pro-vide a toolbox that facilitates smart contract portability betweenEVM-compatible blockchains without trust requirements in theentity executing the migration process. To prove the concept’ssoundness, we transfer token contracts based on the ERC20standard as well as applications containing dependencies to othersmart contracts. Our evaluation shows the validity of portedapplications including their current states.

[Paper](https://arxiv.org/pdf/1902.03868.pdf)