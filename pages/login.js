import Head from "next/head";
import Image from "next/image";
import {
  Button,
  Content,
  Theme,
  Grid,
  Column,
  Breadcrumb,
  BreadcrumbItem,
  Link,
  TabPanel,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Tile,
  Layer,
  FlexGrid,
  Row,
  Stack,
  FluidForm,
  TextInput,
} from "@carbon/react";

import UIShellHeader from "./components/UIShellHeader";
import LandingDashboard from "./components/LandingDashboard";
import Router from "next/router";
const Home = (props) => {
  return (
    <>
      <Theme theme="g100">
        <UIShellHeader login />
      </Theme>
      <div
        style={{
          backgroundImage: `url(/login.jpg)`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Content></Content>

            <Tile style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%"
            }}>
                <h2>Log in</h2>
              
        <p>Don't have an account? <Link href="emailto:jbwaring@icloud.com">Request an Account</Link></p>
              
              <br />
              <br />
              <FluidForm>
                <TextInput type="email" labelText="Email" helperText="Don't remember?"/>
                <TextInput.PasswordInput type="password" labelText="Password"/>
              </FluidForm>
              <br/>
              <p>Forgot your password? <Link href="emailto:jbwaring@icloud.com">Reset Password</Link></p>
              <br/>
              <br/>
              <Button onClick={()=>{
                props.setUser(1)
                Router.push("/")
}}>Login</Button>
            </Tile>

      </div>
    </>
  );
}

export default Home;