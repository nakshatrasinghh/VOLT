import axios from "axios";
import React, { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import HashLoader from "react-spinners/HashLoader";

const PageInfiniteScroll = () => {

    // items on one page
    const totalCount = 99;
    const PAGE_LIMIT=5;
    const API_PATH = "https://jsonplaceholder.typicode.com/posts";

    const [items, setItems] = useState([]);

    const getItems = () => {
        // which page to start with
        let pageNo = Math.ceil(items.length / PAGE_LIMIT) + 1;
        const queryParams = `?_page=${pageNo}&_limit=${PAGE_LIMIT}`;
        const finalURL = API_PATH + queryParams;
        axios.get(finalURL).then((res) => {
            const apiRes = res?.data;
            const mergeData = [...items, ...apiRes];
            setItems(mergeData);
        }).catch((err) => {
            console.log(err);
        });
    }

    const fetchMoreData = () => {
        if(items.length < totalCount){
            getItems();
        }
    }

    useEffect(() => {
        getItems();
    }, [])
    
    


    return <>
        <InfiniteScroll
        // how many items are loaded on the page
    dataLength={items.length}
    next={fetchMoreData}
    hasMore={items.length < totalCount}
    loader={<HashLoader color="#36d7b7" />}
  >
    {items && items.length > 0 && items.map((key) => {
            return (
                // eslint-disable-next-line react/jsx-key
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{key?.title}</div>
              <p className="text-gray-700 text-base">
              {key?.body}
              </p>
            </div>
            <div className="px-6 pb-2">
              <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">UserID: {key?.userId}</span>
              <span className="inline-block bg-black  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">ID: {key?.id}</span>
            </div>
          </div>
            )
        })}
  </InfiniteScroll>
    </>
    
}

export default PageInfiniteScroll