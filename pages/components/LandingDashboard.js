import { GaugeChart, SimpleBarChart } from "@carbon/charts-react";
import {
  Grid,
  Column,
  Tile,
  Button,
  Toggletip,
  ToggletipButton,
  ToggletipContent,
  ToggletipLabel,
  ToggletipActions,
  Link,
  FlexGrid,
  Row
} from "@carbon/react";
import React, { useEffect, useState } from "react";
import "@carbon/styles/css/styles.css";
import "@carbon/charts/styles.css";
import { Switcher, Notification, UserAvatar, Information } from "@carbon/react/icons";
const axios = require('axios');
const LandingDashboard = () => {
  const [graphState, setGraphState] = useState({
    data: [
      {
        group: "value",
        value: 42,
      },
      {
        group: "delta",
        value: -13.37,
      },
    ],
    options: {
      title: "Temperature",
      resizable: true,
      height: "200px",
      width: "100%",
      gauge: {
        type: "semi",
        status: "danger",
      },
    },
  });

  return (
    <>
       <div style={{ display: 'flex' }}>
      <ToggletipLabel>C02XXXPPPLLL2022
      </ToggletipLabel>
      <Toggletip>
        <ToggletipButton label="Show information">
          <Information />
        </ToggletipButton>
        <ToggletipContent>
            More Information about the Machine like manufacturing date blah blah 
          <ToggletipActions>
            <Link href="#">Link action</Link>
            <Button size="sm">Button</Button>
          </ToggletipActions>
        </ToggletipContent>
      </Toggletip>
    </div>
      <h3>My Device</h3>
      <br />
      <Grid>
        <Column sm={4}>
          <Tile
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <GaugeChart
              data={graphState.data}
              options={graphState.options}
            ></GaugeChart>
          </Tile>
        </Column>

        <Column sm={4}>
          <Tile
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <GaugeChart
              data={graphState.data}
              options={graphState.options}
            ></GaugeChart>
          </Tile>
        </Column>
        <Column sm={4}>
          <Tile
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <GaugeChart
              data={graphState.data}
              options={graphState.options}
            ></GaugeChart>
          </Tile>
        </Column>
        <Column sm={4}>
          <Tile
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <GaugeChart
              data={graphState.data}
              options={graphState.options}
            ></GaugeChart>
          </Tile>
        </Column>
      </Grid>
      <Button
        onClick={(e) => {
          setGraphState({
            ...graphState,
            data: [
              {
                group: "value",
                value: 90,
              },
              {
                group: "delta",
                value: -43.37,
              },
            ],
          });
        }}
      >
        Hey
      </Button>
      <br/>
      <br/>
      <br/>
      <Button onClick={()=> {
        

        axios
          .get('http://192.168.1.242:8000/')
          .then(res => {
            console.log(`statusCode: ${res.status}`);
            console.log(res);
          })
          .catch(error => {
            console.error(error);
          });
        
      }}>Demo LED</Button>
    </>
  );
};

export default LandingDashboard;
