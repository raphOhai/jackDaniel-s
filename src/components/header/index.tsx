

const Header = () => {
  return (
    <div className="fixed glasify">
      <div className="stack2 defaultPadding padding gap1  ">
        <div className="headerFlex  ">
          <div className="flex center">
            <img
              style={{ height: "35px", width: "100px" }}
              src="https://www.jackdaniels.com/themes/JDTheme2/css/img/navLogo.png"
              alt=""
            />
          </div>
          <div className="flex center">
            <img src="" alt="" />
            <button className="headerBtn">USA - ENGLISH</button>
          </div>
        </div>
        <div className="flex alignEnd ">
          <div className="evenFlex gap3 center hidemobileAndTabFlex">
            <p className="headerColoredText">OUR PRODUCT</p>

            <p className="headerColoredText">process</p>
            <p className="headerColoredText">our story</p>
            <p className="headerColoredText">recipe</p>
            <p className="headerColoredText">buy a barrel</p>
            <p className="headerColoredText">visit us</p>
            <p className="headerColoredText">shop</p>
            <p className="headerColoredText">news</p>
            <p className="headerColoredText">recipe</p>
            <p className="headerWhiteText">view all</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
