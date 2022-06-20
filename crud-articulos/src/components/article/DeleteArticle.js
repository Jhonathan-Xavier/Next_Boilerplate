import {mutate as mutateIndex} from "swr";
import {useRouter} from "next/router";
import Routes from "@/constants/routes";
import React, {useState} from "react";
import {Article} from "@/lib/articles";

const DeleteArticle = ({id}) => {

    const router = useRouter();
    //const {data: resource, error} = useSWR(`/resources/${id}`, fetcher);

    const handleDelete = async () => {
        try {
            await Article.delete(id);
            mutateIndex('/resources');
            router.push(Routes.ARTICLES);
        } catch (error) {
            if (error.response) {
                //alert(error.response.message);
                console.log(error.response);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            //alert(translateMessage(error.config));
            console.log(error.config);
        }
    };

    return (
        <div>

            <button onClick={handleDelete}>
                Eliminar
            </button>

        </div>
    );

};

export default DeleteArticle;