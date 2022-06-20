import {useEffect, useState} from "react";
import useSWR from "swr";
import {useRouter} from "next/router";
import {fetcher} from "../../utils";
import UpdateArticle from "@/components/article/UpdateArticle";
import DeleteArticle from "@/components/article/DeleteArticle";


const ArticuloID = () =>{
    const router = useRouter();
    const {id} = router.query;
    const {data, error} = useSWR(`/comments/${id}`, fetcher);


    if(error) return <div>No se obtuvo el articulo</div>;
    if(!data) return <div>Cargando..</div>;

    return (
        <div>
            <h1>Detalle Articulo</h1>
            <div>
                <h2>Articulo ID: {data.id}</h2>
                <p>Nombre: {data.name}</p>
                <p>Descripcion: {data.body}</p>
            </div>
            <UpdateArticle id={data.id}/> {/*Solo funciona con el id= 1 en esta api*/}
            <DeleteArticle id={data.id}/>
        </div>
    );

};

export default ArticuloID;