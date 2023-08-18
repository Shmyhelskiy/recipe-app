import Image from "next/image";

const Footer = () => {
        const year: Date  = new Date()
        return (
            <footer className=" min-w-full h-12 flex  text-gray-400 items-center justify-end bg-sky-800 pr-4 mt-auto">
                <a href="https://www.linkedin.com/in/shmyhelskyi-oleksandr/" target="_blank" className="flex gap-2 mr-2">
                    <Image src="/linkedin.webp" alt="Linkedin" width={25} height={25} className="ml-1 w-[20px] sm:w-[25px]"/>
                    <p className="hidden sm:block ">Linkedin</p>
                </a>
                <a href="https://github.com/Shmyhelskiy" target="_blank" className="flex gap-2 mr-2 ">
                    <Image src="/github.webp" alt="GitHub" width={25} height={25} className="w-[20px] sm:w-[25px]"/>
                    <p className="hidden sm:block ">GitHub</p>
                </a>
                <a href="https://t.me/Shmyhelskyi_Oleksandr" target="_blank" className="flex gap-2 mr-2">
                    <Image src="/Telegram.webp" alt="Telegram" width={25} height={25} className="w-[20px] sm:w-[25px]"/>
                    <p className="hidden sm:block ">Telegram</p>
                </a>
                <p className="footer-text">{year.getFullYear()}</p>
            </footer>
        );
    };


export default Footer;