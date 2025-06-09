import GridCard from "@/components/GridCard";
import {FC} from "react";

const cardsList = Array(12).fill(null).map((card, idx) => ({ id: idx + 1 }));

const GridCardsList: FC = async () => {
    await new Promise((resolve) => setTimeout(resolve, 10000));

    return(
        <div className="grid grid-cols-[33.3%_33.3%_33.3%] mb-[26px] px-[22px]">
            {cardsList.map((card) => <GridCard key={card.id} />)}
        </div>
    )
}

export default GridCardsList;