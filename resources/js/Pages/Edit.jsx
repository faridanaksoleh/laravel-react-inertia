import { Head, useForm } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";

export default function Edit({ post }) {
    const route = useRoute();

    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    });

    function submit(e) {
        e.preventDefault();
        // put(`/posts/${post.id}`);
        put(route("posts.update", post));
    }

    console.log(errors);

    return (
        <>
            <Head title="Edit" />

            <h1 className="title">Update a new Post</h1>
            {data.body}

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    ></textarea>
                    {errors.body && (
                        <p className="text-red-500">{errors.body}</p>
                    )}

                    <button disabled={processing} className="primary-btn mt-4">
                        Update Post
                    </button>
                </form>
            </div>
        </>
    );
}
