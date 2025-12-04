import { ethers } from 'ethers';
import { CELO_MAINNET_CONFIG, CONTRACT_ADDRESS, CPOA_ABI } from '../../config/network.js';

/**
 * @dev Checks if the current wallet has already minted an NFT.
 * @param {ethers.providers.Web3Provider} provider The Ethers.js provider instance.
 * @param {string} walletAddress The address of the user's wallet.
 * @returns {Promise<boolean>} True if the wallet has minted, false otherwise.
 */
export async function checkMintStatus(provider, walletAddress) {
    if (!provider || !walletAddress) return false;

    const contract = new ethers.Contract(CONTRACT_ADDRESS, CPOA_ABI, provider);
    
    try {
        // Since the contract only allows 1 per wallet, balanceOf returns 1 or 0.
        const balance = await contract.balanceOf(walletAddress);
        return balance.gt(0); // Check if balance is greater than 0
    } catch (error) {
        console.error("Error checking mint status:", error);
        return false;
    }
}

/**
 * @dev Executes the mintActivityToken transaction.
 * @param {ethers.providers.Web3Provider} provider The Ethers.js provider instance.
 * @returns {Promise<ethers.providers.TransactionResponse>} The transaction response object.
 */
export async function mintPoANFT(provider) {
    if (!provider) {
        throw new Error("Provider not connected. Please connect your Celo wallet.");
    }

    // Signer is needed to send a transaction
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CPOA_ABI, signer);

    try {
        // Call the non-payable minting function
        const tx = await contract.mintActivityToken();
        
        // Wait for the transaction to be mined for confirmation
        // await tx.wait(); 
        
        return tx;
    } catch (error) {
        console.error("Minting failed:", error);
        throw new Error(`Transaction error: ${error.message || error}`);
    }
}
