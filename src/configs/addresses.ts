import { Address } from "viem"
import { baseGoerli, goerli, lineaTestnet, optimismGoerli, polygonZkEvmTestnet, } from "viem/chains"

export type AddressMap = { [chainId: number]: `0x${string}` }
export type DextoolMap = { [chainId: number]: string }

interface POOL {
    [chainId: number]: {
        iconUrl: string
        l0chainid: number
        chainid: number
        FeeCollector: Address
        FeeHandlerMock: Address
        AssetRouter: Address
        Bridge: Address
        DEXBAggregatorUniswap: Address
        Token: Address
        AssetV2: Address
        Uniswap: Address
        WETH: Address
    }
}

export const DEXB: POOL = {
    [goerli.id]: {
        iconUrl: "/chains/ethereum.svg",
        l0chainid: 10121,
        chainid: goerli.id,
        FeeCollector: '0x6dDa5B2Cb04eA1d362dF1b45330B41c2F2145701',
        FeeHandlerMock: '0x01e18bfEd51C7DA8F4b70821b5dACD2D58353495',
        AssetRouter: '0xfDdbA0D0f73F7F4D4E288075258F10213A4f7cEE',
        Bridge: '0x9E053Db580C02375D4d4e5962e16A091Ac3FCaB4',
        DEXBAggregatorUniswap: '0xEB646b2485262f6fc4ebE85D380ff048f9464688',
        Token: '0x2E296ecc1fcC91b9e7A1E8AAFBbC983B11FDFCd4',
        AssetV2: '0xB50D7F1213b2bEcc2f7841B8f685b557439B6023',
        Uniswap: "0x43EBC66e9855E04326ADaFE6d24E4d0c3A45e926",
        WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    },
    [baseGoerli.id]: {
        iconUrl: "/chains/base.svg",
        l0chainid: 10160,
        chainid: baseGoerli.id,
        FeeCollector: '0x6dDa5B2Cb04eA1d362dF1b45330B41c2F2145701',
        FeeHandlerMock: '0x01e18bfEd51C7DA8F4b70821b5dACD2D58353495',
        AssetRouter: '0xfDdbA0D0f73F7F4D4E288075258F10213A4f7cEE',
        Bridge: '0x9E053Db580C02375D4d4e5962e16A091Ac3FCaB4',
        DEXBAggregatorUniswap: '0xEB646b2485262f6fc4ebE85D380ff048f9464688',
        Token: '0x2E296ecc1fcC91b9e7A1E8AAFBbC983B11FDFCd4',
        AssetV2: '0xB50D7F1213b2bEcc2f7841B8f685b557439B6023',
        Uniswap: "0x43EBC66e9855E04326ADaFE6d24E4d0c3A45e926",
        WETH: "0x4200000000000000000000000000000000000006",
    },
    [lineaTestnet.id]: {
        iconUrl: "/chains/linea.svg",
        l0chainid: 10157,
        chainid: lineaTestnet.id,
        FeeCollector: '0x6dDa5B2Cb04eA1d362dF1b45330B41c2F2145701',
        FeeHandlerMock: '0x01e18bfEd51C7DA8F4b70821b5dACD2D58353495',
        AssetRouter: '0xfDdbA0D0f73F7F4D4E288075258F10213A4f7cEE',
        Bridge: '0x9E053Db580C02375D4d4e5962e16A091Ac3FCaB4',
        DEXBAggregatorUniswap: '0xEB646b2485262f6fc4ebE85D380ff048f9464688',
        Token: '0x2E296ecc1fcC91b9e7A1E8AAFBbC983B11FDFCd4',
        AssetV2: '0xB50D7F1213b2bEcc2f7841B8f685b557439B6023',
        Uniswap: "0x7db76d3F000e4dc82D5a17aAB854b53810374823",
        WETH: "0x2C1b868d6596a18e32E61B901E4060C872647b6C",
    },
    [polygonZkEvmTestnet.id]: {
        iconUrl: "/chains/zkevm.png",
        l0chainid: 10158,
        chainid: polygonZkEvmTestnet.id,
        FeeCollector: '0x6dDa5B2Cb04eA1d362dF1b45330B41c2F2145701',
        FeeHandlerMock: '0x01e18bfEd51C7DA8F4b70821b5dACD2D58353495',
        AssetRouter: '0xfDdbA0D0f73F7F4D4E288075258F10213A4f7cEE',
        Bridge: '0x9E053Db580C02375D4d4e5962e16A091Ac3FCaB4',
        DEXBAggregatorUniswap: '0xEB646b2485262f6fc4ebE85D380ff048f9464688',
        Token: '0x2E296ecc1fcC91b9e7A1E8AAFBbC983B11FDFCd4',
        AssetV2: '0xB50D7F1213b2bEcc2f7841B8f685b557439B6023',
        Uniswap: "0x43EBC66e9855E04326ADaFE6d24E4d0c3A45e926",
        WETH: "0x2ad78787CCaf7FA8FAe8953FD78ab9163f81DcC8",
    },
    [optimismGoerli.id]: {
        iconUrl: "/chains/op.png",
        l0chainid: 10132,
        chainid: optimismGoerli.id,
        FeeCollector: '0x6dDa5B2Cb04eA1d362dF1b45330B41c2F2145701',
        FeeHandlerMock: '0x01e18bfEd51C7DA8F4b70821b5dACD2D58353495',
        AssetRouter: '0xfDdbA0D0f73F7F4D4E288075258F10213A4f7cEE',
        Bridge: '0x9E053Db580C02375D4d4e5962e16A091Ac3FCaB4',
        DEXBAggregatorUniswap: '0xEB646b2485262f6fc4ebE85D380ff048f9464688',
        Token: '0x2E296ecc1fcC91b9e7A1E8AAFBbC983B11FDFCd4',
        AssetV2: '0xB50D7F1213b2bEcc2f7841B8f685b557439B6023',
        Uniswap: "0x43EBC66e9855E04326ADaFE6d24E4d0c3A45e926",
        WETH: "0x4200000000000000000000000000000000000006",
    },
}