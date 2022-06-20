//Página de prueba

export default function Comentario({comments}) {
    return(
        <div>
            <h1>Comentarios</h1>
            <div>
                {comments.map(comment => {
                    return(
                        <div key={comment.id}>
                            <a>
                                {/*<p>Name: {comment.utm_medium}</p>*}
                                {/*<p>Description: {comment.utm_name}</p>*/}
                                <p>Name: {comment.name}</p>
                                <p>Description: {comment.body}</p>
                                <br/>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

//Static Render Content
export async function getStaticProps() {
    //const resp = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/comments`);
    const resp = await fetch('https://jsonplaceholder.typicode.com/comments');
    /*const resp = await fetch('https://dev-api.datumtrack.com/url-builder/v1/url?accountId=20000000100223250000',{
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "eyJraWQiOiJ6Y1RTb29Bc1VncmJYSlJUc2dnZ1J1UWFkenUram41d3R4UENzcUw5VE8wPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3YjI2M2YxOC03YzRmLTRlMTYtYTgxZi04ODE5ODIxMzRhY2YiLCJjb2duaXRvOmdyb3VwcyI6WyJEYXR1bUFkbWluIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0FYdlVEYlR1ciIsImNsaWVudF9pZCI6IjRiMzk2aHFrZDBmOWpnMjk3cnNtMW8xZmoiLCJvcmlnaW5fanRpIjoiZTU0OGNjYjktYjQyZi00YTg3LThmNGMtNDE2OTA3YzM2ZTFlIiwiZXZlbnRfaWQiOiIwZGZiMWMyMi1kYzVhLTQ1ODMtYmRlMy05OTZiOTBmNDVkOTUiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjU1NjgyMzQ3LCJleHAiOjE2NTU3MTExNDcsImlhdCI6MTY1NTY4MjM0NywianRpIjoiMjdmZmJjMjUtOTU5MS00MmE5LTgxZDYtNmM2MTUwNTQ0OTkxIiwidXNlcm5hbWUiOiJkZXYifQ.gujD3x3bPz3fDR_JPE06qpE9M1mZecDhfl0e7y5SL54ofIry5TUWVbd5sGvOi-OUAgQv9e6MFnXFHWGmwH3rXV5eR_43wXyokOBVgPQguS1ynjDA8flIbBm1aF1xhXNiSwc07eIi_7uaehagvd64Ykl-4w0O2_PB8LX1kPFOUuaapN_lR80rzJsyEfzFv_2dEUXk7cpm-wafIV1QqatB7NfPil7w3CqGKwKqqUyl5IlG6S5fdqDEN3zTG-q5rV8i8tOF_ovDgCWIP-J-LYJnReBKcMJGX2ANhmfYXOjn1d1BqY_ikSLFF9KNGibUF8af33MZ1ORIs3TgDX57DcA-5g"
        },
    });*/
    console.log('response', resp);

    const comments = await resp.json();

    return {
        props:{
            comments
        }
    }
}

