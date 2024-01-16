import { IMG_URL } from "../utils/constants";

function Header() {
  return (
    <div>
      <ul className="flex justify-evenly bg-slate-950 text-white">
        <img src={IMG_URL} alt="logoImg" className="w-10 h-10 -ml-60" />
        <li className="mt-2 pl-9">Home</li>
        <li className="mt-2 pr-39">About</li>
        <li className="mt-2 ml-36">Cart</li>
      </ul>
      <div></div>

      <div className="mt-4 ml-96 mr-80">
        <p>
          The beginning of a meeting sets the tone and introduces the major
          themes for the entire session. On one hand, if a meeting host makes it
          clear at the beginning that they're unprepared, attendees may take it
          as a clear sign that the meeting won't be valuable. An organized host,
          on the other hand, shows employees that their attendance and efforts
          are valued and that the session will run smoothly.
        </p>
      </div>
    </div>
  );
}

export default Header;
