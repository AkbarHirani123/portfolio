import { GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react";

const Header = () => {
  return (
    <div className="App-header">
      <div>
        <div>
          <a href="https://github.com/AkbarHirani123" target="_blank">
            <GithubLogo color="#282c34" weight="fill" size={32} />
          </a>
        </div>
        <div>
          <a href="https://github.com/AkbarHirani123" target="_blank">
            <LinkedinLogo color="#282c34" weight="fill" size={32} />
          </a>
        </div>
        <div>
          <a href="mailto:akbar.hirani123@gmail.com">
            <Envelope color="#282c34" size={32} />
          </a>
        </div>
      </div>
      <div>Other Stuff</div>
    </div>
  );
};

export default Header;
