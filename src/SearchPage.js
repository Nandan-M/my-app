import React, { useEffect } from "react";
import './SearchPage.css'
import { useStateValue } from "./StateProvider";
import Search from "./Search";
import UseGoogleSearch from "./UseGoogleSearch";
import './SearchPage.css';


function SearchPage(){

    const[{ term },dispatch] = useStateValue()
    const{data} = UseGoogleSearch(term);

    console.log(data);

    // https://developers.google.com/custom-search/v1/using_rest :: this link is for the google api key

    // https://cse.google.com/cse/create/new :: to create a search engine hook
    return(
        <div className="SeachPage">
            <div className="Searchheader">
               
            
            <div className="Headersearchbody">
            <Search hideButtons/>
            
            </div>
            </div>
            {true && (
            <div className="searchPageResults">
                <p>
                <div className="Count">
                    About {data?.searchInformation.formattedTotalResults} results in {data?.searchInformation.formattedSearchTime} secounds found.
                </div>
                </p>
                {data?.items.map(item =>(
                <div className="searchPageResult">
                    <a href = {item.link}>
                        
                    {item.displayLink}
                    </a>
                    <a className="resultTitle" href ={item.title} >
                        <h2>{item.title}</h2>
                    </a>
                    <p className="resultSnippet">
                        {item.snippet}
                    </p>
                </div>
                ))}
               
            </div>)}
        </div>
    )
}

export default SearchPage;
