import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

type Props = {};

export const Navbar = (props: Props) => {
    return (
        <Nav>
            <div className="navbar">
                <div className="navbar__left">
                    <span className="navbar__left--logo">Admin Dashboard</span>
                </div>
                <div className="navbar__right">
                    <div className="navbar__right--icon-container">
                        <NotificationsNone />
                        <span className="icon-badge">2</span>
                    </div>
                    <div className="navbar__right--icon-container">
                        <Language />
                    </div>
                    <div className="navbar__right--icon-container">
                        <Settings />
                    </div>
                    <img
                        src="https://avatars.dicebear.com/api/open-peeps/adminuser.svg"
                        alt="avatar"
                        className="navbar__right--avatar"
                    />
                </div>
            </div>
        </Nav>
    );
};

const Nav = styled.div`
  width: 100%;
  background-color: var(--white);
  position: sticky;
  top: 0;
  z-index: 100;

  .navbar {
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 5px var(--shadow);

    &__left {
      &--logo {
        font-weight: bold;
        font-size: 30px;
        color: var(--primary);
        cursor: pointer;
      }
    }

    &__right {
      display: flex;
      align-items: center;

      &--icon-container {
        position: relative;
        cursor: pointer;
        margin-right: 10px;
        color: var(--gray);

        .icon-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: var(--red);
          color: var(--white);
          border-radius: 50%;
          height: 15px;
          width: 15px;
          text-align: center;
          line-height: 15px;
          font-size: 10px;
          font-weight: bolder;
        }
      }

      &--avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
`;

export default Navbar;
