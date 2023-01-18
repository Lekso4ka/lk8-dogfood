import React, {useState} from "react";

export default (data, cnt) => {
    /*
        ["", "", "", "", ""]
        cnt = 2
        pages = 3
    */
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / cnt);

    const next = () => {
        let nextPage = Math.min(currentPage + 1, maxPage);
        setCurrentPage(nextPage);
    }
    const previous = () => {
        let prevPage = Math.max(currentPage - 1, 1);
        setCurrentPage(prevPage);
    }
    
    return {currentPage, maxPage, next, previous};
}