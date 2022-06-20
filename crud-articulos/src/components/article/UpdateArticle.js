import React, {useState} from "react";
import {useForm} from "react-hook-form";
import useSWR, {mutate as mutateIndex} from "swr";
import {fetcher} from "../../utils";
import {Article} from "@/lib/articles";

//Este {id} lo recibe desde el componente donde lo llamemos, en este caso sería: <UpdateResorce id={resource.id}/>
const UpdateArticle = ({id}) => {

    const {data: article, mutate, error} = useSWR(`/posts/${id}`, fetcher);
    const { register, handleSubmit, reset } = useForm();

    if(error) return <div>Recarga la página para continuar...</div>;
    if(!article) return <div>Cargando..</div>;


    const onSubmit = async (data) => {
        console.log('data', data);

        try {

            await Article.update(id, {
                ...data,
                userId: 1,
                id: (((data.id) === "") || ((data.id) < 0) ) ? '0' : data.id,
                title: ((data.title) === "") ? `Vacío (${article.id})` : data.title,
                body: ((data.body) === "") ? `Sin descripción` : data.body,
            });
            mutateIndex('/posts');
        } catch (error) {
            if (error.response) {
                //alert(translateMessage(error.response.data.errors.name));
                console.error(error.response);
            } else if (error.request) {
                console.error(error.request);
            } else {
                console.error("Error", error.message);
            }
            console.error(error.config);
        }
        reset();
    };


    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Nombre</label>
                    <input type='text' id='name' defaultValue={article.title} {...register('title')} />
                </div>
                <div>
                    <label htmlFor='body'>Comentario</label>
                    <input type='text' id='body' defaultValue={article.body}{...register('body')}  />
                </div>
                <button type="submit">Editar</button>
            </form>

        </div>
    );
};

export default UpdateArticle;