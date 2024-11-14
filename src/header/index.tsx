import { GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useState } from "react";
import endpoints from "../config/endpoints";

const Header = () => {
  const mediaQuery600 = useMediaQuery("only screen and (min-width: 600px)");
  const [userInfo, setUserInfo] = useState({
    ip: "",
    city: "",
    lat: "",
    lon: "",
  });
  const [weather, setWeather] = useState({
    temp: "",
    icon: "",
    iconAlt: "",
  });
  useEffect(() => {
    // Fetch the IP address from the API
    if (userInfo.ip === "") {
      fetch(endpoints.GET_IP_API)
        .then((response) => response.json())
        .then((data) => {
          const { ip, city, loc } = data;
          console.log({ ip, city, loc });
          console.log(loc.substr(0, loc.indexOf(",")));
          console.log(loc.substr(loc.indexOf(",") + 1, loc.length - 1));
          // Display the IP address on the screen
          setUserInfo({
            ip,
            city,
            lat: loc.substr(0, loc.indexOf(",")),
            lon: loc.substr(loc.indexOf(",") + 1, loc.length - 1),
          });
        })
        .catch((error) => {
          console.log("Could not get user's IP. Error: ", error);
        });
    }
  });
  useEffect(() => {
    if (userInfo.lat !== "" && weather.temp === "") {
      console.log(userInfo);
      fetch(`${endpoints.WEATHER_API}&lat=${userInfo.lat}&lon=${userInfo.lon}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setWeather({
            temp: `${Math.round(Number(data.main.temp)) + "\u00b0"}`,
            icon: data.weather[0].icon,
            iconAlt: data.weather[0].description,
          });
          weather.temp = "asd";
        })
        .catch((error) => {
          console.log("Could not get weather details. Error: ", error);
        });
    }
  }, [userInfo, weather]);
  return (
    <div className={`App-header ${!mediaQuery600 && "mobile"}`}>
      <div>
        <div>
          <a
            href="https://github.com/AkbarHirani123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo
              color="#282c34"
              weight="fill"
              size={mediaQuery600 ? 32 : 50}
            />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/AkbarHirani123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo
              color="#282c34"
              weight="fill"
              size={mediaQuery600 ? 32 : 50}
            />
          </a>
        </div>
        <div>
          <a
            href="mailto:akbar.hirani123@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Envelope color="#282c34" size={mediaQuery600 ? 32 : 50} />
          </a>
        </div>
      </div>
      <div className="hide-on-mobile">
        <p>
          The weather in<b style={{ padding: "0px 7px" }}>{userInfo.city}</b>is:
        </p>
        <p>
          <img
            src={endpoints.WEATHER_ICON + weather.icon + ".png"}
            alt={weather.iconAlt}
          />
          {weather.temp}
        </p>
      </div>
    </div>
  );
};

export default Header;
