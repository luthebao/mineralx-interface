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
import { baseGoerli, goerli } from 'viem/chains';

const CHAINS_lIST = [
    goerli,
    baseGoerli,
]

const mainChain = CHAINS_lIST[0]

const { chains, publicClient, webSocketPublicClient } = configureChains(
    CHAINS_lIST,
    [
        publicProvider()
    ]
)

const projectId = "56f75e7385f455d146e3aa2c7f751aca"

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
            coinbaseWallet({ appName: "zkLine", chains }),
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