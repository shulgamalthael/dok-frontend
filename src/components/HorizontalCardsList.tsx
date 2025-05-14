import {FC, useState} from "react";
import {ICard} from "@/components/GridCard";
import HorizontalCard from "@/components/HorizontalCard";

const HorizontalCardsList: FC = () => {
    const [cardsList] = useState<ICard[]>(Array(12).fill(null).map((card, idx) => ({ id: idx + 1 })));

    return(
        <div className="flex flex-col">
            {cardsList.map((card) => <HorizontalCard key={card.id} />)}
        </div>
    )
}

export default HorizontalCardsList;