import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image"></div>
        <div>
          <div className="profile__email">tes@test.test</div>
          <div className="profile__name">Hello</div>
        </div>
      </div>
      <Link to={"/"} className="profile__logout">
        로그 아웃
      </Link>
    </div>
  );
}
