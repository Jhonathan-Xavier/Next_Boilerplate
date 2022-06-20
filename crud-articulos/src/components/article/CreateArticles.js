import React from "react";
import {useForm} from "react-hook-form";
import {Article} from "@/lib/articles";
import useSWR, {mutate} from "swr";
import {fetcher} from "../../utils";


const CreateArticle = () => {

    const { register, handleSubmit } = useForm();
    const {error, mutate} = useSWR(`/posts`, fetcher);

    const onSubmit = async (data) => {
        console.log('data', data);
        const newComment = {
            userId: 1,
            id: 1,
            title: data.title,
            body: data.body,
        };

        const formData = new FormData();
        formData.append("userId", newComment.userId);
        formData.append("id", newComment.id);
        formData.append("title", newComment.title);
        formData.append("body", newComment.body);

        try {
            //await Festival.create(formData);
            await Article.create(formData);
            mutate("/posts");
            // console.log("file", fileInputRef.current.files[0]);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // alert(error.response.message);
                console.error(error.response);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.error(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error", error.message);
            }
            console.error(error.config);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <label htmlFor='name'>Nombre</label>
                    <input type='text' id='name' {...register('title')} />
                </div>
                <div>
                    <label htmlFor='body'>Comentario</label>
                    <input type='text' id='body' {...register('body')}  />
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default CreateArticle;