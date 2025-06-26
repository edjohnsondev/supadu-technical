export default function Review({ title, body, reviewer }) {
    return (
        <article className="review">
            <h4>{title}</h4>
            <p>{body}</p>
            <p><em>— {reviewer}</em></p>
        </article>
    );
}
  