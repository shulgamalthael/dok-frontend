import {Link} from "@/i18n/navigation";
import Image from "next/image";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Infinity Suit | Product",
    description: "Infinity Suit Website | Product",
    icons: {
        icon: "/favicon.ico",
    }
};

const Page = () => {
    return(
        <section className="max-w-[1600px] pt-[44px] mb-[50px] px-[62px] mx-auto">
            <ol className="flex mb-[30px] text-[#333] text-[13px] leading-[1.54] font-normal tracking-normal" itemType="https://schema.org/BreadcrumbList">
                <li className="after:content-['→'] after:inline-block after:text-[13px] after:text-[rgb(159,159,159)]  after:ml-[7px]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href="/" className="text-[#9f9f9f]" itemProp="item">
                        <span itemProp="name">Інтернет-магазин автозапчастин dok.ua</span>
                    </Link>
                    <meta itemProp="position" content="1"/>
                </li>
                <li className="after:content-['→'] after:inline-block after:text-[13px] after:text-[rgb(159,159,159)] after:ml-[7px] ml-[7px]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href="/catalog" className="text-[#9f9f9f]" itemProp="item">
                        <span itemProp="name">Моторна олива</span>
                    </Link>
                    <meta itemProp="position" content="2"/>
                </li>
                <li className="after:content-['→'] after:inline-block after:text-[13px] after:text-[rgb(159,159,159)] after:ml-[7px] ml-[7px]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href="/catalog" className="text-[#9f9f9f]" itemProp="item">
                        <span itemProp="name">Все для пікніка</span>
                    </Link>
                    <meta itemProp="position" content="3"/>
                </li>
                <li className="after:content-['→'] after:inline-block after:text-[13px] after:text-[rgb(159,159,159)] after:ml-[7px] ml-[7px]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href="/catalog" className="text-[#9f9f9f]" itemProp="item">
                        <span itemProp="name">Мангал</span>
                    </Link>
                    <meta itemProp="position" content="4"/>
                </li>
                <li className="after:content-['→'] after:inline-block after:text-[13px] after:text-[rgb(159,159,159)] after:ml-[7px] ml-[7px]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href="/catalog" className="text-[#9f9f9f]" itemProp="item">
                        <span itemProp="name">Мангал складаний</span>
                    </Link>
                    <meta itemProp="position" content="5"/>
                </li>
                <li className="ml-[7px]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <span itemProp="item">
                        <span itemProp="name">Мангал Сила 960105</span>
                    </span>
                    <meta itemProp="position" content="6"/>
                </li>
            </ol>
            <div className="relative">
                <div className="flex sticky float-left">
                    <div className="relative w-[80px] h-[560px]">
                        <div className="relative h-[80] w-[80] p-2 cursor-pointer">
                            <div className="relative h-full w-full p-1 rounded-[8px] overflow-hidden border-[2px] border-solid border-[rgba(0,0,0,0.12)] hover:border-[rgba(26,119,210,1)]">
                                <Image src="https://img.dok.ua/images/min/product/0921/21/38993844_1.jpg" alt="gallery image" fill style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                        <div className="relative h-[80] w-[80] p-2 cursor-pointer">
                            <div className="relative h-full w-full p-1 rounded-[8px] overflow-hidden border-[2px] border-solid border-[rgba(0,0,0,0.12)] hover:border-[rgba(26,119,210,1)]">
                                <Image src="https://img.dok.ua/images/min/product/0921/21/38993844_1.jpg" alt="gallery image" fill style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                        <div className="relative h-[80] w-[80] p-2 cursor-pointer">
                            <div className="relative h-full w-full p-1 rounded-[8px] overflow-hidden border-[2px] border-solid border-[rgba(0,0,0,0.12)] hover:border-[rgba(26,119,210,1)]">
                                <Image src="https://img.dok.ua/images/min/product/0921/21/38993844_1.jpg" alt="gallery image" fill style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                        <div className="relative h-[80] w-[80] p-2 cursor-pointer">
                            <div className="relative h-full w-full p-1 rounded-[8px] overflow-hidden border-[2px] border-solid border-[rgba(0,0,0,0.12)] hover:border-[rgba(26,119,210,1)]">
                                <Image src="https://img.dok.ua/images/min/product/0921/21/38993844_1.jpg" alt="gallery image" fill style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                        <div className="relative h-[80] w-[80] p-2 cursor-pointer">
                            <div className="relative h-full w-full p-1 rounded-[8px] overflow-hidden border-[2px] border-solid border-[rgba(0,0,0,0.12)] hover:border-[rgba(26,119,210,1)]">
                                <Image src="https://img.dok.ua/images/min/product/0921/21/38993844_1.jpg" alt="gallery image" fill style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[80px] h-[560px]">
                        <div className="relative h-[80] w-[80] p-2 cursor-pointer">
                            <div className="relative h-full w-full p-1 rounded-[8px] overflow-hidden border-[2px] border-solid border-[rgba(0,0,0,0.12)] hover:border-[rgba(26,119,210,1)]">
                                <Image src="https://img.dok.ua/images/min/product/0921/21/38993844_1.jpg" alt="gallery image" fill style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                        <div className="relative h-[80] w-[80] p-2 cursor-pointer">
                            <div className="relative h-full w-full p-1 rounded-[8px] overflow-hidden border-[2px] border-solid border-[rgba(0,0,0,0.12)] hover:border-[rgba(26,119,210,1)]">
                                <Image src="https://img.dok.ua/images/min/product/0921/21/38993844_1.jpg" alt="gallery image" fill style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                        <div className="relative h-[80] w-[80] p-2 cursor-pointer">
                            <div className="relative h-full w-full p-1 rounded-[8px] overflow-hidden border-[2px] border-solid border-[rgba(0,0,0,0.12)] hover:border-[rgba(26,119,210,1)]">
                                <Image src="https://img.dok.ua/images/min/product/0921/21/38993844_1.jpg" alt="gallery image" fill style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                        <div className="relative h-[80] w-[80] p-2 cursor-pointer">
                            <div className="relative h-full w-full p-1 rounded-[8px] overflow-hidden border-[2px] border-solid border-[rgba(0,0,0,0.12)] hover:border-[rgba(26,119,210,1)]">
                                <Image src="https://img.dok.ua/images/min/product/0921/21/38993844_1.jpg" alt="gallery image" fill style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                        <div className="relative h-[80] w-[80] p-2 cursor-pointer">
                            <div className="relative flex h-full w-full p-1 rounded-[8px] overflow-hidden border-[2px] border-solid border-[rgba(0,0,0,0.12)] hover:border-[rgba(26,119,210,1)]">
                                <Image src="https://img.dok.ua/images/min/product/0921/21/38993844_1.jpg" alt="gallery image" fill style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>
                    <div className="h-[624px] w-[592px] p-2 relative">
                        <div className="z-10 absolute right-[24px] bottom-[16px] flex flex-col justify-center items-center h-[40px] w-[40px] rounded-full bg-[rgba(245,245,245,1)] shadow-[0_1px_2px_0_rgba(5,23,42,0.3)] cursor-pointer hover:bg-[lightgray] hover:shadow-[0_1px_3px_1px_#05172A26]">
                            <i className="icon-ic-zoom-in text-[rgba(23,23,24,1)] text-[20px]" />
                        </div>
                        <div className="h-full w-full relative">
                            <div className="h-full w-full flex flex-col">
                                <div className="relative   grow">
                                    <Image src="https://img.dok.ua/images/org/product/0921/21/38993844_1.jpg" alt="gallery image" fill style={{ objectFit: "contain" }} />
                                </div>
                                <div className="h-[32px] flex">
                                    <span className="m-auto text-[#333] text-[13px] opacity-50 ">Фото Надане виробником</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-[59.38%] flex flex-col ml-[16px]">
                    <div className="mb-[16px]">
                        <h1 className="text-[30px] leading-[1.17] text-[#000] mb-[16px] relative">
                            <strong>Мангал Сила 960105</strong>
                        </h1>
                        <div className="flex py-[8px] text-[14px] leading-[20px]">
                            <div className="flex">
                                <div className="h-[20px] w-[20px] bg-[url(/icons/star-active.svg)] bg-center bg-no-repeat"></div>
                                <div className="h-[20px] w-[20px] bg-[url(/icons/star-active.svg)] bg-center bg-no-repeat"></div>
                                <div className="h-[20px] w-[20px] bg-[url(/icons/star-active.svg)] bg-center bg-no-repeat"></div>
                                <div className="h-[20px] w-[20px] bg-[url(/icons/star-active.svg)] bg-center bg-no-repeat"></div>
                                <div className="h-[20px] w-[20px] bg-[url(/icons/star-active.svg)] bg-center bg-no-repeat"></div>
                            </div>
                            <div className="ml-1 text-[#919294]">888 оценок</div>
                        </div>
                    </div>
                    <div className="mb-80px">
                        <div className="flex justify-between bg-[#fafafa] p-[21px_28px_22px_35px] overflow-hidden mb-[21px] border-t border-solid border-t-[#f1f0f1]">
                            <div className="flex flex-col">
                                <div className="mb-[5px]">
                                    <span className="text-[#333] text-[30px] font-medium tracking-[0.8px] mr-[4px]" itemProp="price" content="781.00">781</span>
                                    <span className="text-[#a8a8a8] text-[16px] tracking-[0.8px] mr-[4px]" itemProp="priceCurrency" content="UAH">грн</span>
                                </div>
                                <div className="text-[13px] text-[#171718] leading-[1.54] whitespace-nowrap overflow-hidden">
                                    Доставимо  23.05
                                </div>
                            </div>
                            <div className="w-[50.55%] relative h-[50px] rounded-[3px] text-[#fff] text-[16px] text-center leading-[50px] cursor-pointer bg-[#1a77d2] my-auto">
                                Купити
                            </div>
                        </div>
                        <div className="flex border-b border-solid border-b-[#f1f0f1] p-[0_28px_20px_35px] text-[13px] mb-[20px] overflow-hidden">
                            <label className="leading-[38px]">Швидка покупка</label>
                            <input className="h-[38px] rounded-[5px] border border-solid border-[#d9d9d9] text-center max-w-[156px] mr-[17px] ml-auto" placeholder="+38 (0__) ___-__-__" />
                            <div className="flex flex-col justify-center w-[37.55%] h-[38px] rounded-[3px] border border-solid border-[#1a77d2] bg-[#1a77d2] text-[#fff] cursor-pointer text-center">Замовити в 1 клік</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page;