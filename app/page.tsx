'use client';
import Banner from "./components/Banner";
import MakingProcess from "./components/MakingProcess";
import PreviousWork from "./components/PreviousWork";
import VideoProduction from "./components/VideoProduction";
import VideoStudio from "./components/VideoStudio";

export default function Home() {
  return (
    <>
      <Banner />
      <VideoStudio />
      <PreviousWork />
      <MakingProcess />
      <VideoProduction/>
    </>
  );
}
