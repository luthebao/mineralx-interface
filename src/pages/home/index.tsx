import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="!relative !min-h-[100vh] w-full flex flex-col items-center justify-center">
            <video
                muted
                loop
                autoPlay
                id="background"
                preload="auto"
                playsInline
                poster="/images/home-bg.png"
            >
                <source
                    src="/videos/video-bg.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="absolute left-0 top-0 flex justify-between items-center flex-col w-[100vw] h-[100vh] pt-[50px] pb-[35px]">
                <img src="/images/logo.png" alt="logo" className="cursor-pointer" />
                <div className="flex justify-center items-center flex-col gap-[24px] w-[60%] min-w-[350px]">
                    <p className="text-[40px] font-bold text-center">
                        Decentralized, simple and transparent protocol
                    </p>
                    <p className="text-[20px] font-normal text-center">
                        Enabling capital-efficient and secure cross-chain transfer of value
                        through highly solvent and omnichain synthetic assets, rendering
                        bridges obsolete.
                    </p>
                    <ButtonPrimary
                        variant="contained"
                        size="large"
                        onClick={() => navigate("/transfer")}
                    >
                        <span className="text-[20px] font-semibold text-center text-[#101010]">
                            Launch App
                        </span>
                    </ButtonPrimary>
                </div>
                <div className="flex justify-center items-center gap-[18px] w-full">
                    <a href="https://twitter.com/mineralX_L0" target="_blank">
                        <img
                            src="/images/ri_twitter-x-fill.png"
                            alt="ri_twitter-x-fill"
                            className="cursor-pointer"
                        />
                    </a>
                    <a href="https://t.co/VwyydZGw44" target="_blank">
                        <img
                            src="/images/ic_baseline-discord.png"
                            alt="ic_baseline-discord"
                            className="cursor-pointer"
                        />
                    </a>
                    <img
                        src="/images/simple-icons_gitbook.png"
                        alt="simple-icons_gitbook"
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
