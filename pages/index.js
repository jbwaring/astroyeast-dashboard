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
  ProgressStep
} from "@carbon/react";
import UIShellHeader from "./components/UIShellHeader";
import LandingDashboard from "./components/LandingDashboard";
import { useEffect } from "react";
import Router  from "next/router";
const Home = (props) =>{
  useEffect(()=>{
    if(!props.user){
      Router.push("/login")
    }
  }, [])
  if(!props.user){
    return <p>Unauthorized</p>
  }
  return (
    <>
      <Theme theme="g100">
        <UIShellHeader />
      </Theme>
      <Content className="my-background">
        <Layer>
          <LandingDashboard />
        </Layer>
      </Content>
    </>
  );
}

export default Home;