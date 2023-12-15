import {
    connectorsForWallets,
} from '@rainbow-me/rainbowkit'
import { Chain, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import * as wagmiCore from "wagmi/actions"

import {
    argentWallet,
    braveWallet,
    coinbaseWallet,
    injectedWallet,
    ledgerWallet,
    metaMaskWallet,
    okxWallet,
    trustWallet,
    walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { baseGoerli, goerli, lineaTestnet, optimismGoerli, polygonZkEvmTestnet } from 'viem/chains';

const CHAINS_lIST = [
    goerli,
    baseGoerli,
    lineaTestnet,
    polygonZkEvmTestnet,
    optimismGoerli
]

const mainChain = CHAINS_lIST[0]

const { chains, publicClient, webSocketPublicClient } = configureChains(
    CHAINS_lIST,
    [
        publicProvider()
    ]
)

const projectId = "2356be9501b2790f7abd1e4407129a9d"

const connectors = connectorsForWallets([
    {
        groupName: 'Recommended',
        wallets: [
            injectedWallet({ chains }),
            metaMaskWallet({
                chains,
                projectId,
                walletConnectVersion: "2"
            }),
            argentWallet({
                chains,
                projectId,
                walletConnectVersion: "2"
            }),
            walletConnectWallet({
                projectId,
                chains,
                version: "2"
            }),
            coinbaseWallet({ appName: "MineralX", chains }),
        ],
    },
    {
        groupName: 'Others',
        wallets: [
            trustWallet({
                chains,
                projectId,
                walletConnectVersion: "2"
            }),
            okxWallet({
                chains,
                projectId,
                walletConnectVersion: "2"
            }),
            braveWallet({
                chains
            }),
            ledgerWallet({
                chains, projectId,
                walletConnectVersion: "2"
            }),

        ],
    },
]);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: connectors,
    publicClient,
    webSocketPublicClient
})


export { chains as wagmiChains, wagmiConfig, mainChain, publicClient, wagmiCore, CHAINS_lIST }