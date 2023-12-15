import React from "react";

const HomePage = () => {
    return (
        <div className="!absolute !min-h-[100vh] w-full bg-[url(/images/home-bg.png?v=006)] bg-cover bg-center bg-no-repeat bg-black">
            <div className="flex justify-between items-center flex-col w-[100vw] h-[100vh] pt-[50px] pb-[35px]">
                <img src="/images/logo.png" alt="logo" className="cursor-pointer" />
                <div className="flex justify-center items-center flex-col gap-[24px]">

                </div>
                <div className="flex justify-center items-center w-full gap-[18px]">
                    <img
                        src="/images/ri_twitter-x-fill.png"
                        alt="ri_twitter-x-fill"
                        className="cursor-pointer"
                    />
                    <img
                        src="/images/ic_baseline-discord.png"
                        alt="ic_baseline-discord"
                        className="cursor-pointer"
                    />
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
