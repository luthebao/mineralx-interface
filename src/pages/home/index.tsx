import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="!absolute !min-h-[100vh] w-full bg-[url(/images/home-bg.png?v=006)] bg-cover bg-center bg-no-repeat bg-black">
      <div className="flex justify-between items-center flex-col w-[100vw] h-[100vh] pt-[50px] pb-[35px]">
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
