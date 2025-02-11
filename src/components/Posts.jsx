import { MyContext } from "../App"
import { useContext } from "react"

export default function Posts() {
    const context = useContext(MyContext)
    return (
        <>
            {context.posts.map(post => {
                return (
                    <div className="card">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                )
            })}
        </>
    )
}
