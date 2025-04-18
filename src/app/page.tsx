import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Features from "@/sections/Features";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Integrations />
            <Faqs />
        </>
    );
}
