import { Link } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Home({ posts }) {
    const route = useRoute();
    
    return (
        <>
            <h1 className="title">Hello</h1>

            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>

                        {/* <Link 
                        href={`/posts/${post.id}`}
                        className="text-link"
                        >Read More...</Link> */}

                        <Link 
                        href={route('posts.show', post)}
                        className="text-link"
                        >Read More...</Link>

                    </div>
                ))}
            </div>

            <div className="py-12 px-4">
                {posts.links.map((link) => (
                    link.url ? (
                    <Link
                        key={link.label}
                        href={link.url || "#"}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`py-2 px-4 ${link.active ? "text-blue-500 font-bold" : ""}`}
                    />
                ) : (    
                    <span
                        key={link.label}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className="py-2 px-4 text-slate-300"
                    >
                    </span>
                    )
                ))}
            </div>
        </>
    );
}

