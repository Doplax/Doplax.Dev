import style from "./Circles.module.css";

export function Circles() {
  return (
    <>
      <div className="position-relative bg-pattern pattern-2 pt-15 area">
        <ul className={style.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
