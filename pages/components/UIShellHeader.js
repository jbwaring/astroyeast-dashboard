import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "@carbon/react";
import { Switcher, Notification, UserAvatar } from "@carbon/react/icons";

const UIShellHeader = ({login}) => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        { !login &&  <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        /> }
        <HeaderName href="/" prefix="AstroYeast">
          Dashboard
        </HeaderName>
       {!login && <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem href="/repos">Global View</HeaderMenuItem>
          <HeaderMenuItem href="/repos">Activities</HeaderMenuItem>
          <HeaderMenuItem href="/repos">Supplies</HeaderMenuItem>
          <HeaderMenuItem href="/repos">Support</HeaderMenuItem>
        </HeaderNavigation> }
        { !login && <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
           <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/repos">Global View</HeaderMenuItem>
              <HeaderMenuItem href="/repos">Activities</HeaderMenuItem>
              <HeaderMenuItem href="/repos">Supplies</HeaderMenuItem>
              <HeaderMenuItem href="/repos">Support</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>  }
        { !login &&   <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center"
          >
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center"
          >
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar> }
      </Header>
    )}
  />
);

export default UIShellHeader;
