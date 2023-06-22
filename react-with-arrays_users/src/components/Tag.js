import "./Tag.css";

export default function Tag({ tag }) {
  const a = tag === "admin" ? "tag--highlight" : null;
  return <li className={`tag ${a}`}>{tag}</li>;
}
