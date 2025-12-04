# Celo Proof Of Activity NFT (PoA)

![1000103560](https://github.com/user-attachments/assets/f62a3605-780c-42d9-b856-7c0d16d397f0)


## 🌟 Project Overview

The Celo Proof Of Activity NFT (PoA) is an experimental collection of **abstract, on-chain generated ERC-721 tokens** deployed on the Celo Network.

Unlike traditional PFP (Profile Picture) NFTs, Celo PoA NFTs serve as a digital certificate that recognizes and rewards a user's long-term **engagement and volume of activity** within the Celo ecosystem over an estimated 365-day period.

### 🔑 Key Concept: On-Chain Proof-of-Activity

The NFT's unique **Token ID** and its visual/metadata attributes are derived from a complex hash (`keccak256`) generated at the moment of minting. This hash incorporates critical on-chain data: the **user's wallet address**, the **block timestamp**, and the **block number**.

The resulting NFT is an abstract representation of the user's *unique interaction fingerprint* on Celo. **Higher transactional volume and longer activity periods increase the probability of generating a rarer token ID/metadata combination.**

## ⚙️ Contract Details

| Detail | Value |
| :--- | :--- |
| **Network** | Celo Mainnet |
| **Standard** | ERC-721 (Self-Contained Implementation) |
| **Deployed Address** | `0x1722875731a404937DeE0dB60998B24838BD638B` |
| **Solidity Version** | `0.8.24` |

## 🚀 Utility & Future Roadmap

### Current Utility (HODL Phase)

Currently, the utility of the Celo PoA NFT is centered on **on-chain identity and recognition**. Holders are encouraged to **HODL** their token, as its rarity and connection to verifiable network activity define its intrinsic value.

### Future Utility (3 Months Forward)

Approximately **three months** after the initial minting window, Celo PoA NFT holders will gain access to exclusive benefits:

* **Allowlist Requirement:** The NFT will become a necessary **pre-requisite** for joining the Allowlist of **future major Celo ecosystem projects or DAO membership**.
* **Airdrop Eligibility:** Tokens with higher rarity scores (derived from the metadata) may qualify for boosted future ecosystem **Airdrops**.

## 🤝 How to Mint Your PoA NFT

Users must perform a single transaction to generate their unique PoA token.

1.  **Connect:** Ensure your wallet is connected to the Celo network.
2.  **Access:** Navigate to the contract on a Block Explorer (e.g., Celoscan).
3.  **Execute:** Call the `MINT` function.
4.  **Confirm:** Confirm the transaction and pay the minimal Celo gas fee.

*Note: Only one PoA NFT can be minted per wallet address.*

Common 60% (401 - 999)
Basic community access and recognition.
Rare 25 (151 - 400) 
Tier 1 Allowlist Access (1 spot) for one major future ecosystem project.
Epic 10% (51 - 150)
Tier 2 Allowlist Access (2 spots) and a Medium Airdrop Multiplier on selected future tokens.
Legendary 5% (0 - 50) 
Priority Allowlist Access for all future projects and the Highest Airdrop Multiplier.

## ⚖️ License

This project is licensed under the MIT License. See the `LICENSE` file for details.
