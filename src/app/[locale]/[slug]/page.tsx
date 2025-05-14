import {Link} from "@/i18n/navigation";

const Page = () => {
    return(
        <section className="max-w-[1600px] pt-[44px] mb-[50px] px-[62px] mx-auto">
            <ol className="mb-[30px] text-[#333] text-[13px] leading-[1.54] font-normal tracking-normal" itemType="https://schema.org/BreadcrumbList">
                <li className="after:content-['→'] after:inline-block after:text-[13px] after:text-[rgb(159,159,159)] mx-[7px]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href="/" className="text-[#9f9f9f]" itemProp="item">
                        <span itemProp="name">Інтернет-магазин автозапчастин dok.ua</span>
                    </Link>
                    <meta itemProp="position" content="1"/>
                </li>
                <li className="after:content-['→'] after:inline-block after:text-[13px] after:text-[rgb(159,159,159)] mx-[7px]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href="/catalog/maslo-motornoe" className="text-[#9f9f9f]" itemProp="item">
                        <span itemProp="name">Моторна олива</span>
                    </Link>
                    <meta itemProp="position" content="2"/>
                </li>
            </ol>
        </section>
    )
}

export default Page;