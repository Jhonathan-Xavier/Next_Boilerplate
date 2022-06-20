import useSWR from "swr";
import React from "react";
import {fetcher} from "../../utils";


const ReadArticle = () => {

    //const {data: articles, error} = useSWR(`accountId=20000000100223250000`, fetcher);
    const {data: articles, error} = useSWR(`/posts`, fetcher);

    if(error) return <div>No se obtuvo el articulo</div>;
    if(!articles) return <div>Cargando..</div>;


    return(
        <div>
            <h1>Articulos</h1>
            <div>
                {/* Use esto para hacer pruebas de POST
                {articles.data?.map(article => {
                    return(
                        <div key={article.id}>
                            <a>
                                <p>Name: {article.title}</p>
                                <p>Description: {article.body}</p>
                                <br/>
                            </a>
                        </div>
                    )
                })}
                */}
                {/* Useesto para pruebas de GET */}
                {articles.map(article => {
                    return(
                        <div key={article.id}>
                            <a>
                                <p>Name: {article.title}</p>
                                <p>Description: {article.body}</p>
                                <br/>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ReadArticle;