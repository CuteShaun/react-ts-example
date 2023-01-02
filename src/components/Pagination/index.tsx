import { useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";

export const Pagination = ({
    totalCount = 0,
    getAllCharacters = () => {},
}: {
    totalCount: number;
    getAllCharacters: (url: string) => void;
}) => {
    const generatePageCount = useCallback(() => {
        if (totalCount > 1000) {
            return Math.ceil(1000 / 10);
        }

        return Math.ceil(totalCount / 10);
    }, [totalCount]);

    const [pageCount, setPageCount] = useState(generatePageCount());

    useEffect(() => {
        setPageCount(generatePageCount());
    }, [totalCount, generatePageCount]);

    const handlePageChange = (selectedObject: { selected: number }) => {
        const url = `https://swapi.dev/api/people/?page=${selectedObject.selected + 1}`;
        getAllCharacters(url);
    };

    return (
        <>
            {totalCount > 0 && (
                <ReactPaginate
                    pageCount={pageCount}
                    // pageRange={2}
                    // forcePage={currentPage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageChange}
                    containerClassName={"container"}
                    previousLinkClassName={"page"}
                    breakClassName={"page"}
                    previousLabel="<"
                    nextLabel=">"
                    nextLinkClassName={"page"}
                    pageClassName={"page"}
                    disabledClassName={"disabled"}
                    activeClassName={"active"}
                />
            )}
        </>
    );
};
