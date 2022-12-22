import styled from "styled-components";
import { menus } from "./constants";
import MenuItem from "./MenuItem";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <Container>
      <div className="sidebar">
        {menus.map((menu) => (
          <div className="sidebar__menu" key={menu.title}>
            <h3 className="sidebar__menu--title">{menu.title}</h3>
            <div className="sidebar__menu--list">
              {menu.items.map((item) => (
                <MenuItem
                  key={item.title}
                  component={item.component}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 64px);
  box-shadow: 0 10px 5px var(--shadow);
  position: sticky;
  top: 64px;
  left: 0;
  z-index: 200;
  text-transform: capitalize;

  .sidebar {
    padding: 20px;
    color: var(--gray);

    &__menu {
      margin-bottom: 10px;

      &--title {
        font-size: 13px;
        color: var(--shadow);
      }

      &--list {
        list-style: none;
        padding: 5px;

        .item {
          padding: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          border-radius: 4px;

          &.active {
            background-color: var(--selected);
          }

          .icon {
            margin-right: 5px;
            font-size: 20px !important;
          }
        }
      }
    }
  }
`;

export default Sidebar;
