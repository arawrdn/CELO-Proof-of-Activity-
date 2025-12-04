// Celo network configuration for Web3 connection (e.g., using Ethers.js or Wagmi)

export const CELO_MAINNET = {
    chainId: 42220,
    chainName: 'Celo Mainnet',
    rpcUrls: ['https://forno.celo.org'],
    nativeCurrency: {
        name: 'CELO',
        symbol: 'CELO',
        decimals: 18,
    },
    blockExplorerUrls: ['https://celoscan.io'],
};

export const CONTRACT_ADDRESS = "0x1722875731a404937DeE0dB60998B24838BD638B";

// ABI (Application Binary Interface) would be included here or imported from a separate file
export const CPOA_ABI = [
    // Simplified ABI for core functions
    "function mintActivityToken()",
    "function tokenURI(uint256 tokenId) view returns (string)",
    "function ownerOf(uint256 tokenId) view returns (address)",
];
