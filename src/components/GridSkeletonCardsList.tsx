const cardsList = Array(12).fill(null).map((card, idx) => ({ id: idx + 1 }));

const GridSkeletonCardsList = () => {
    return(
        <div className="grid grid-cols-[calc(33.3%-10px)_calc(33.3%-10px)_calc(33.3%-10px)] gap-[10px] mb-[26px] px-[22px]">
            {cardsList.map((card) => (
                <div key={card.id} className="flex min-h-[550px] px-[22px] pt-[22px] border border-solid border-stone-500 rounded-[8px] hover:shadow-[0_0_30px_0_rgba(0,0,0,0.28)]">
                    <div className="spinner m-auto"></div>
                </div>
            ))}
        </div>
    )
}

export default GridSkeletonCardsList;